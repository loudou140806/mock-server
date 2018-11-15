// gulpfile.js 的代码如下
const path = require('path');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const server = path.resolve(__dirname, 'mock-server');

// 服务器重启
gulp.task('nodemon', function (cb) {
    // 设个变量来防止重复重启
    var started = false;
    var stream = nodemon({
        script: './mock-server/server.js',
        // 监听文件的后缀
        ext: "js",
        env: {
            'NODE_ENV': 'development'
        },
        // 监听的路径
        watch: [
            server
        ]
    });
    stream.on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    }).on('crash', function () {
        console.error('application has crashed!\n')
        stream.emit('restart', 10)
    })
});
