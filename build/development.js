require('./check-versions')();

process.env.NODE_ENV = 'development';

var ora = require('ora');
var rm = require('rimraf');
var path = require('path');
var utils = require('./utils');
var chalk = require('chalk');
var webpack = require('webpack');
var config = require('../config');
var webpackConfig = require('./webpack.dev.conf')

var spinner = ora('building for develop version...');
spinner.start();

module.exports = function dev () {
  rm(path.join(config.dev.assetsRoot, config.dev.assetsSubDirectory + utils.assetsPath('[name].js')), err => {
    if (err) throw err;
    webpack(webpackConfig, function (err, stats) {
      spinner.stop();
      if (err) throw err;
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n');

      console.log(chalk.cyan('  Build complete.\n'));
      console.log(chalk.yellow(
        'This project is created by Tam Le Minh'
      ));
    })
  })
}
