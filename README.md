# 图片管理APP
### 项目结构说明：
所有代码放在src目录下，src目录下共分common、resource、modules和configs四个目录。其中各目录用途如下：
### 1.common
该目录用于放置项目中使用的一些自定义的通用组建。
### 2.resource
该目录用于放置项目中用到的一些资源文件。
### 3.configs
该目录用于管理项目的路由文件、redux操作配置及之后对接后台时使用到的接口地址配置文件等。
### 4.modules
该目录用户放置项目的各模块文件，是项目的核心及开发中最常使用到的目录。
如photos目录下放置了App photos模块文件，结构如下：

![image.png](https://upload-images.jianshu.io/upload_images/9814928-5b13951f80ffcf48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 其中actions、reducer及state文件用于整个模块下所有页面的状态管理及操作响应。

> components文件夹下存放属于本模块的各个页面，并实现页面的界面逻辑；

>containers文件夹存放components中相应的各个页面的业务逻辑，负责调用action里的方法实现后台交互等。

