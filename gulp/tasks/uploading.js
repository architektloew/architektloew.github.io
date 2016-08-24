'use strict';
const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

// 'gulp deploy' -- pushes your dist folder to Github
gulp.task('upload', (done) => {
  ghPages.publish(path.join(__dirname + '/../../', 'dist'), {
    dotfiles: true,
        branch: "master"
	},
	done);
});
