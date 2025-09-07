/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d420112dc399e7d9bbf6dd8626fe87e4"],["/about/index.html","c84485f2a18ef4da9888f329ef4f87f7"],["/archives/2006/08/index.html","8b790174ce175201eddd37abf0004e05"],["/archives/2006/index.html","24e273d0a0350477845df3549144559e"],["/archives/2021/03/index.html","cd2e1ac049d80cc764dea01e564c7ac9"],["/archives/2021/08/index.html","634803b0b28c0a92eba410592abe349b"],["/archives/2021/index.html","6af7a7cbc9f515466a2e4592120efb7c"],["/archives/2022/05/index.html","e51dbfefb9c4212031c8b8594f839bef"],["/archives/2022/05/page/2/index.html","e9cc710db3d988eb70af1307e9cc3b06"],["/archives/2022/05/page/3/index.html","fbf26551284e9abd7cd1237f45ae9ab5"],["/archives/2022/index.html","24deee956ecc3188629d095153461d51"],["/archives/2022/page/2/index.html","a3f346dfd62b7ddb142bbfe442313b1d"],["/archives/2022/page/3/index.html","583d5f4331b0948bd3715b03dcde7b46"],["/archives/2023/01/index.html","22638ace4af19e60de33f818b69a87f3"],["/archives/2023/index.html","3a624e95e4b83080f51d5ac66c8600b3"],["/archives/2024/12/index.html","6be36f2a15e038981556af5c0ca9cfb0"],["/archives/2024/index.html","7b7fd4248c6198968660d6db6c1c79a1"],["/archives/2025/05/index.html","945a6388698a8224987353ab0bb70bb0"],["/archives/2025/09/index.html","a79007f413d52bff12dbbf98775f248d"],["/archives/2025/index.html","0af8b1e2091b2d21fe5a54b3a88e342c"],["/archives/index.html","39b2a71ea22d517df40db2244ae3ac2b"],["/archives/page/2/index.html","fe20185ad1f1ccfa74a76c124639c3be"],["/archives/page/3/index.html","a216b31bf49a1f88aacb78666a8e55be"],["/archives/page/4/index.html","ae65172447c64413da88b70517645965"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","c5cf1a5561cbf043f3785a192291c5ee"],["/categories/实用工具/index.html","08f9630f0cb578320069fafa7454c956"],["/categories/技巧分享/index.html","9a8630953afb2b059d921665b86a4f8f"],["/categories/技术分享/index.html","8f3f12f7ab75feb06b3d68ab967ce70e"],["/categories/技术教程/index.html","8a4ee57b5616675369c2d5363ac954d0"],["/categories/技术教程/page/2/index.html","3593059db16057f920e0a55a0803faca"],["/categories/源码分享/index.html","868e73a48707eb30508000780a92e9d3"],["/categories/福利活动/index.html","a04038cce6747aa4de8c1e7958788fb3"],["/categories/网站推荐/index.html","db03908f0b43edb3c4020d78e87bac6b"],["/categories/网站推荐/page/2/index.html","4336232b696efcff9c807478fa8c7a5f"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","c5d75cadb62f73ebfad5169e8cda4ab0"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","9ee13cc3f2b8246b48fd0b185a337676"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","9d752972359bb238acede56fb8e4d2ff"],["/music/index.html","7775a77e40a7adcb73757c8f698f307f"],["/page/2/index.html","f615dcc652f9eee3bd37a8cd5e3f452e"],["/page/3/index.html","dccb2d6f67b0804c334c2472fc7a5db4"],["/page/4/index.html","3c8acabb9f8b428da91844ad3387b8f1"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","8da7b4c9b8b79204988e6bc470f45435"],["/posts/096db3c03b6e/index.html","5aeecfe35f0cc885ebe0ae2f21587b7b"],["/posts/1235535247cb/index.html","662bfeb52f75056460c0fd7ff25783b5"],["/posts/13b70ad2982c/index.html","45af46b574f308d3d3e52876fe704dac"],["/posts/15fa81012f63/index.html","3b93e3e4aebf2ee03a2bc24cc3c4684d"],["/posts/1ec0df688f03/index.html","a1054c266e7edb250b8ffe94ec77db16"],["/posts/2b7ac1a9709e/index.html","aed4c6605a516aac747fce30daef25f3"],["/posts/2bb24d491704/index.html","5349d6edb2de4b6e866a5c3eb8b45202"],["/posts/2c9261572067/index.html","1393758d5b63799ffc6a0a63396c6a3e"],["/posts/304408dfc52f/index.html","5b5cd0e527c18591c7400e8b076f1d68"],["/posts/41c16cb60b68/index.html","0002e408cc333d24f364b7cec548e6af"],["/posts/4358b00bc797/index.html","6f96f2a902a18f5498ee11428c92a39f"],["/posts/4acff0774207/index.html","c0d26dc34c274dcd4f82e3f084f0468b"],["/posts/4b6cb4514456/index.html","66a5131fa141a243f3e8b74dcb679a5d"],["/posts/6631458408e8/index.html","c1d0def8d6eced3dfd77d97a60d955cc"],["/posts/6cb2454df473/index.html","4745055227fdcd2f420c650d2b0b0d54"],["/posts/6f929ba7ef0a/index.html","abfe0469d60b09e1d933b80b3bc99a57"],["/posts/76dd1b500ee9/index.html","4ab5b8680f74df4de272d8a1ed025bd3"],["/posts/8ef6e275fcc9/index.html","7af6272153abaf09b0e52211344a3ccd"],["/posts/94456e62e22c/index.html","b2dad647b01082513c9e3d998226f78b"],["/posts/9792de8b38a6/index.html","6c63ac0a83572c25c90d2295951b14e9"],["/posts/9d119b73dd2a/cmb-service-account.png","a679b24f5db960401ddcb612610e59fd"],["/posts/9d119b73dd2a/index.html","89a63c991fbb77beb6d7e19332b6e6be"],["/posts/9d119b73dd2a/jc.jpg","39250f60d65c34b48684bdc073457278"],["/posts/a84c927bae36/index.html","9e9fe6ce6392556fcf880b6d6d06a39d"],["/posts/ad5499059bd8/index.html","ea4783fe69a3556699c79dcf4e8bdfe2"],["/posts/b1a6e353d3b0/index.html","ae2bf6db6c3d97ff955a7de08b294bbc"],["/posts/b478f3198c73/index.html","fa0d45ca091057a25d5deda2b4393e9d"],["/posts/c0ae68f04a1c/index.html","06655e9117ff0987df9aa716b20f4eca"],["/posts/c821481d77c0/index.html","7a469cbc55077fd010649af99cbfc7b2"],["/posts/d1ded2bacbfc/index.html","dda098c62f9f860a2fbea463bf29e4cb"],["/posts/d911ff6fb3e3/index.html","fa373766a9191124736830d12a116f57"],["/posts/ebffabd07766/index.html","30c57a3b7f8c488bc3252517ea1008ae"],["/posts/edc724f3bf5b/index.html","670b6a40cebb7ad72413fcfd9df9aefa"],["/posts/f30c3df9c2fc/index.html","ee30467a3c8c0ed09a988ef476970732"],["/posts/fb79b38d6277/index.html","fd350d7827634881f359b47a438ab0e7"],["/service-worker.js","69d46b2648d4828e5a8643e076ad6d87"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","fee6daba3b50f327ab1274e973862886"],["/tags/255-255-255-0/index.html","08ea4e4c6327b4a2976bdeb0a66a3a7a"],["/tags/BS架构/index.html","e931bc3472577f419940e38a60b83694"],["/tags/Chrome扩展/index.html","161659c6484972bb7800c92a2c626883"],["/tags/Docusaurus/index.html","bf2d5d3213c68342e503c7bb8870ec5f"],["/tags/Magiceraser/index.html","72f13db5f813461d4b17eaa437c3b54d"],["/tags/Neumorphism/index.html","611223d2bcccd024a0df590b5a5201da"],["/tags/QQ加速/index.html","6f56bba588de771759eb864278f3d08c"],["/tags/UptimeRobot/index.html","8cb6310de19f69d86ca830331a9e1880"],["/tags/Zepp-Life/index.html","c7db8d0ab74a265a24dda72fa603558a"],["/tags/css/index.html","815a9e2bb623e1abcb951e374c3611da"],["/tags/dns/index.html","5a96e1d4398321b2992ee82ff494bf3a"],["/tags/docker/index.html","816bb7d86171d356b3305d2b3031d322"],["/tags/ffmpeg/index.html","d060191762a99033b1c583b57d2e0b97"],["/tags/github/index.html","f4d9beddf9677efb06c59128caea67a3"],["/tags/google/index.html","a861957a606c3d23ffdc560a7cc1601f"],["/tags/hexo/index.html","077ea1807a247ba5db6c39c6c65512f5"],["/tags/import/index.html","ab310d45703bc00d21e20df428c9eb33"],["/tags/index.html","7e07d82ac9010836556c2111729ae0c9"],["/tags/ip归属/index.html","00568197a6bef4dc84286589f9bec7ca"],["/tags/linux/index.html","5adeb87de88a5b1d932aff78c30c9259"],["/tags/nginx/index.html","aeb8749deafbcc326d5a68ff3ed0c245"],["/tags/pdf/index.html","443083654a04b759b7b8101c33cc6260"],["/tags/play/index.html","e0407d380e344a496911ebc150fccf64"],["/tags/python/index.html","e02e618edbca809935bf5913b59da0a7"],["/tags/serverless/index.html","5385f6006e2b6636664edb5adeefbb2e"],["/tags/smtp/index.html","f4a906689f9f8c4ada8e573af621009c"],["/tags/source/index.html","f564064e9f8f3afd7dce8c1fc65b90fd"],["/tags/sudo/index.html","1b6b5ed3555877c811fbae122bc2ee78"],["/tags/target/index.html","3bf215cd1666a4f24922a324b043d03a"],["/tags/tinywow/index.html","0405e5fa6ff39d4bad9312cd02c0d27d"],["/tags/usb/index.html","5dd22be6943a3c44eb68fd46010bd58e"],["/tags/wifi/index.html","2b244ade2d657bc0c31b81c619c5112a"],["/tags/zip/index.html","4b33be55a47df76ee914323269cec202"],["/tags/下载/index.html","731ffc2701ed8438d75c12ffb6234f0c"],["/tags/个数/index.html","af6f4cd68d729a6c4889e3727e82f7b4"],["/tags/云原生构建/index.html","4347f4ebf9f36a5080f2f0a71b7fb99c"],["/tags/云搜/index.html","fc897f464aecbed7e6b3f2a2a13db50a"],["/tags/云盘/index.html","81ebeb8554703c9cdfd90cf75111ee3a"],["/tags/代码/index.html","ba87ea01eb3fb75c02a9dac7a020f984"],["/tags/免费/index.html","86d55bedc5bcf9c0566bfa69e01600df"],["/tags/函数/index.html","154fd8dbaac50314266b2637e739ea85"],["/tags/分配/index.html","268e5e83acf801e386ef15180ea3c5ad"],["/tags/删除图片/index.html","5263737281bf09c9d8a6a730c4553351"],["/tags/刷步数工具/index.html","0e4334973c85980496daf70134457540"],["/tags/剪辑/index.html","4ed296a1ca8b364b9e957489e5db6fa3"],["/tags/压缩/index.html","af879728fa097d51de347686547811b2"],["/tags/变量/index.html","f4c4f886ecdd9ae2ef778b727b80d54f"],["/tags/同学/index.html","13c82170db335d438d23165c894dd359"],["/tags/命令/index.html","bc4a7a3841bce1337a62a62cf0862ba7"],["/tags/商店/index.html","5d267efd0624d21a53db6e7e9e4e4b0c"],["/tags/图片/index.html","235d797c67c0c948cf181c97f604d9b1"],["/tags/地址/index.html","f6c8b62df86e19cbc37142e5be1e5c47"],["/tags/堵猫猫/index.html","e46b8b92f0e4ea1e4994293276c322dd"],["/tags/处理/index.html","1525d28b8be84f3b1c0cc5eb9c9dda7b"],["/tags/子网掩码/index.html","d125cb2adaaf7c100ae1af9e0cd0c1fa"],["/tags/实用命令/index.html","622b433b991a24f44628934c517ecd46"],["/tags/密码/index.html","4c5dd483301ddfb60a296750ff722a07"],["/tags/小游戏/index.html","91626a5144fac5c23afac4fe86f68060"],["/tags/小舒同学/index.html","757738a60d7691415ab74d48f2b74df2"],["/tags/工具/index.html","b9cc745222d5b97e13e65fcc28ee8579"],["/tags/应用/index.html","d64300a494387bab80b6c0374427bdb2"],["/tags/录制/index.html","a43f3d65a235966a02a86f047a4ffb5f"],["/tags/微信/index.html","017b09249cf7decb0a53dc0021a8901d"],["/tags/微信运动/index.html","53db43fc7323f10b5db3381c539aaef3"],["/tags/技巧/index.html","08b607687ac16ce30448a4858f8554f0"],["/tags/招商银行/index.html","2ec4afa0b21be37c91103b38a790d3fa"],["/tags/授权/index.html","3c0a71399194c8be116bb5df7fad5ce2"],["/tags/插件/index.html","5e75b52bb5883190978a9db9ca7fad78"],["/tags/搜索/index.html","bfdeba63a54d7d6f63073b4454a0ed69"],["/tags/搜索引擎/index.html","199ab2aaba3a473660e94f446bf5f47b"],["/tags/操作/index.html","dfe0370853a9a45f6f788fcea72e62a1"],["/tags/支付宝/index.html","8d1a4faadd9d7047d7f38310ff94f241"],["/tags/收藏夹/index.html","ab2e9681fc86a613bd8955f7fbca9a0c"],["/tags/文件/index.html","196bde8594a59cd5dd3775987de4fcf9"],["/tags/新拟态/index.html","3a491731a2263ab9c6140b31a83ae7fb"],["/tags/无损/index.html","69668b937809a72fb8c49e91fa7f1673"],["/tags/智影/index.html","a78889a30c7e38dc0775a7a4d247a931"],["/tags/查看/index.html","4dd36b8cd977bed29406c719e951053d"],["/tags/树莓/index.html","c49e7689a7c4a31bcdea33e7f423d32e"],["/tags/格式/index.html","861a99ecc7cf21016dc61c27c2f4528f"],["/tags/油猴插件/index.html","6183ccb85c9e334808b66668514ca6d3"],["/tags/流程/index.html","3f473c47abfecc66ec7b793b46adb76d"],["/tags/清图/index.html","f962690aaf069e453ea9a81cd1ffde5f"],["/tags/源代码/index.html","d6632f7971ba910fb5b370ffb7d66b69"],["/tags/源码分享/index.html","00d193b4663e1b601889e556a1a70c85"],["/tags/生成/index.html","e0c6601d75ec5852e7fcb3fb81f73c39"],["/tags/知识产权/index.html","9dc7c4841938d729b6a28115d804788a"],["/tags/硬盘/index.html","6986dd12aa7b20164ed15bc9d286d0b3"],["/tags/程序/index.html","faad5f5438d1d06943fd54c2dd38c160"],["/tags/空间/index.html","b8fdc29641e0e73762e6e05edde389c7"],["/tags/站点生成神器/index.html","8f95bff2e1c972f61889103d3b348dcd"],["/tags/站点监控面板/index.html","2ec68a71edf976313de6370e17484f6a"],["/tags/素材/index.html","d244e2de40cad1a7dc55e64028759f72"],["/tags/网盘/index.html","ec1c4686bd1cd0d9f1a8bfd932a085fe"],["/tags/网站/index.html","31653ce43138abdd162f24b2f75ee0ff"],["/tags/腾讯CNB/index.html","ebfea73c4bfc684c87c7d01fcb0b19f0"],["/tags/视频/index.html","0b39efdb7a27537103ede789a336c049"],["/tags/资源/index.html","8d10c97e82f1edae7db16c0bbbfb04c9"],["/tags/转换/index.html","94846b538d2b31e4b01a4971eba1bee3"],["/tags/软件/index.html","3882d1bb3c0013bfd2e345751e502fd1"],["/tags/运动步数/index.html","1f356d1c23cd8338bfbdd7781db89521"],["/tags/邮箱/index.html","388db75431d2058c49df3617ea62fb57"],["/tags/镜像/index.html","ed03f926ba4ead20d2458fd8a1d239c0"],["/tags/长度/index.html","00295db2ee2168d24d81a88bfceb1684"],["/tags/高性能网盘/index.html","9ab2722f8d6d1bbd840f59ec4bbd1a6a"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
