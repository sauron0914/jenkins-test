// var ghpages = require('gh-pages');

module.exports = function override(config, env) {
  // 参数中的 config 就是默认的 webpack config
  
  // ghpages.publish('dist', {add: true}, () => {});
  
  // 一定要把新的 config 返回
  return config;
}