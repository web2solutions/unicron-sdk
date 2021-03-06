var pkg = require("./package.json"),
	webpack_config = require("./webpack.config.js"),
	webpack2 = require('webpack'),
	gulp = require("gulp"),
	gutil = require("gulp-util"),
	es = require("event-stream"),
	webpack = require("webpack-stream"),
	clean = require("gulp-clean"),
	eslint = require("gulp-eslint"),
	uglify = require("gulp-uglify"),
	minify = require("gulp-cssnano"),
	rename = require("gulp-rename"),
	filter = require("gulp-filter"),
	replace = require("gulp-replace");

gulp.task("lint", function(){
	return gulp.src(["sources/**/*.js","node_modules/unicron/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task("clean", function() {
	return gulp.src([
		"./www/codebase/*.js",
		"./dist/**/*",
		"./www/codebase/*.map",
		"./www/codebase/*.css"
	], {
		read: false
	}).pipe(clean());
});


gulp.task("copybower", function() {
	return gulp
        .src(['bower_components/**/*'])
        .pipe(gulp.dest('www/bower_components'));
});

//JS and CSS files
function codebase_stream() {
	var cssfiles = filter("**/*.css", {
		restore: true
	});
	var jsfiles = filter("**/*.js", {
		restore: true
	});
	var ignoremaps = filter(["**/*.js", "**/*.css"]);
	

	return gulp.src([pkg.main])
		.pipe(webpack(webpack_config, webpack2))
		.pipe(ignoremaps)
		.pipe(jsfiles)
		.pipe(uglify({
			"mangle": { "toplevel": true },
			"preserveComments": "license"
		}))
		.pipe(jsfiles.restore)
		.pipe(cssfiles)
		.pipe(minify().on("error", gutil.log))
		.pipe(cssfiles.restore);
}

//package for deploy
gulp.task("build", ["clean"], function() {
	var package_name = pkg.name + "_v" + pkg.version;

	//build codebase
	var codebase = codebase_stream()
		.pipe(rename(function(path) {
			path.dirname = "www/codebase/" + path.dirname;
		}));

	var dhtmlx_files = gulp.src(["www/codebase/**/*"],{
		dot: false,
		base: "./"
	});

	var server_files = gulp.src(["server/**/*"], {
		dot: false,
		base: "./"
	});

	var htmlfile = gulp.src(["www/index.html"], {
		dot: false,
		base: "./"
	}).pipe(replace("node_modules/handlebars/dist/", "codebase/"));
		
	var pack = [codebase, /*server_files, dhtmlx_files, htmlfile*/];

	return es.merge.apply(es, pack)
		.pipe(gulp.dest("./dist/" + package_name));
});

gulp.task("deploy", ["build"], function(){
	var package_name = pkg.name + "_v" + pkg.version;
	var res = require('child_process').execSync("rsync -ar ./dist/"+package_name+"/* "+pkg.deployPath);
	console.log(res.toString("utf8"));
});