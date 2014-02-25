module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		meta: {
			banner: [
				'/*',
				' * <%= pkg.name %>',
				' * <%= pkg.homepage %>',
				' * ',
				' * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
				' * License: <%= pkg.license %>',
				' */\n'
			].join("\n"),
			dest: "."
		},
		clean: {
			dist: [
				".tmp",
				"<%= meta.dest %>/*.min.js"
			]
		},
		concat: {
			options: {
				banner: '<%= meta.banner %>'
			},
			dist: {
				src: ["src/**/*.js"],
				dest: ".tmp/<%= pkg.name %>.concat.js"
			}
		},
		uglify: {
			options: {
				banner: '<%= meta.banner %>'
			},
			build: {
				src: ["<%= concat.dist.dest %>"],
				dest: "<%= meta.dest %>/<%= pkg.name %>.min.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["clean", "concat", "uglify"]);

};
