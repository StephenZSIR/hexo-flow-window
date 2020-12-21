/**
 * @description The flow-window generator for hexo
 */
/* global hexo */

const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);
const _ = require('lodash');

const blogRoot = hexo.config.root || '/';

const defaultConfig = {
  'delay': '15',
  'isLinkClosed': false,
  'ad': {
	'headFilter': 0.3,
    'img': 'https://stephenzsir.github.io/images/avatar.jpg',
    'imgHeight': '120',
    'imgWidth': '120',
    'linkUrl': 'https://stephenzsir.github.io/',
    'z_index': 9999
  }
  
};

// Apply options with default
let config = _.defaultsDeep({
}, hexo.config.winflow, hexo.theme.config.winflow, defaultConfig);


if (hexo.config.winflow.enable) {
hexo.extend.injector.register('body_begin', () => {
  return css('https://stephenzsir.github.io/style/windowflow/floatingPic.css');
}, hexo.config.winflow.localtion);
hexo.extend.injector.register('body_end', () => {
  return js('https://stephenzsir.github.io/script/windowflow/floatingPic.js');
}, hexo.config.winflow.localtion);

hexo.extend.injector.register('body_end', () => {
  const scriptToInject = `$.floatingAd(${JSON.stringify(config)});`;
  const contentToInject = `<script type="text/javascript">${scriptToInject}</script>`;
  return contentToInject;
}, hexo.config.winflow.localtion);

hexo.extend.injector.register('body_end', () => {
  const scriptToInject = `$('.fixedAd .closeBtn').on('click',function(){$(this).parent('.fixedAd').hide();});`;
  const contentToInject = `<script type="text/javascript">${scriptToInject}</script>`;
  return contentToInject;
}, hexo.config.winflow.localtion);

}
