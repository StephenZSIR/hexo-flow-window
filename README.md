# hexo-flow-window
flow window

## 效果预览

![Image text](https://stephenzsir.github.io/images/hexo_flow_window.gif)

## 下载插件

``` bash
npm install hexo-flow-window --save
```

## 配置插件

在hexo根目录_config.yml下添加

``` bash
winflow:
  enable: true #是否启用
  delay: '15' #移动速度
  isLinkClosed: false #超链接后是否关闭漂浮
  localtion: 'home'
  ad: #漂浮内容
    headFilter: 0.3 #关闭区域背景透明度(0.1-1)
    img: 'https://stephenzsir.github.io/images/avatar.jpg' #图片
    imgWidth: '120' #图片高度
    imgHeight: '120' #图片宽度
    linkUrl: 'https://stephenzsir.github.io/' #跳转地址
    z_index: 99 #浮动层级别
```

``` bash
localtion可配置参数
default: 注入到每个页面
home: 只注入到主页
post: 只注入到文章页面
page: 只注入到独立页面
archive: 只注入到归档页面
category: 只注入到分类页面
tag: 只注入到标签页面
```
