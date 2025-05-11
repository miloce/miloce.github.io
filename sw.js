/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3e9d5eb3c119f13a7f2f4400a653d2e2"],["/about/index.html","eefbdda6aa90fc31141fb78603a79307"],["/archives/2006/08/index.html","923975abb13e43aadb06157576034ed5"],["/archives/2006/index.html","594ea6638c48e55d60e4864f12b95ae5"],["/archives/2021/03/index.html","52ec6e85620a9e32582eaa39d6e85c7e"],["/archives/2021/08/index.html","f9418e30c81e3f5ecbfc0c260f068b1d"],["/archives/2021/index.html","3ad462227cb78a89bfab3456da0217d7"],["/archives/2022/05/index.html","22775695249f355ace0bcc1c1ecc9dc2"],["/archives/2022/05/page/2/index.html","d4ad9a4539b208718e251d1a663de061"],["/archives/2022/05/page/3/index.html","a9f5ac5c7364a4161709c52a4056c55d"],["/archives/2022/index.html","19d3cc89a670031cc6eb734f0251a156"],["/archives/2022/page/2/index.html","711c685c722c2f782f9ddbb65c7d759a"],["/archives/2022/page/3/index.html","f10aad6ecccc5754a874b47f339455ea"],["/archives/2023/01/index.html","c30bf26c5d869c4cd2350122bfe07cdf"],["/archives/2023/index.html","98c177556ced2553332e9a82c2291026"],["/archives/2024/12/index.html","b9ef9c836470e11094631eeb22602269"],["/archives/2024/index.html","37a9db5dec31dbeaab38fefa91e4c0bb"],["/archives/2025/05/index.html","9abb35e6aba58068ff3a60e05c8668cd"],["/archives/2025/index.html","f0c35f9f91bc8d40d7b9949707c2baf7"],["/archives/index.html","f708ee66a241373a3ab4020e62675911"],["/archives/page/2/index.html","0ac99edb20023d587e2451de9f905f92"],["/archives/page/3/index.html","ed095981929173c23df44595875b9d3b"],["/archives/page/4/index.html","fe07c75ccdf6e69c5c46afdfb856969c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","d90c58113519c90c5bd6e1c56f59513d"],["/categories/技巧分享/index.html","11851c2681adad10cddc54ae99dcd5eb"],["/categories/技术分享/index.html","41cde5ea0c1af96089e7a85e0df01e4c"],["/categories/技术教程/index.html","210972c24404f1bde27b9b88e6403f4d"],["/categories/技术教程/page/2/index.html","e0e47b777d94e3180f74d30243fe8bd2"],["/categories/源码分享/index.html","6c33df55f602079de930f1e2fb3c7d3b"],["/categories/福利活动/index.html","d27c9034e8ecc293a0f1ef9a7f01354e"],["/categories/网站推荐/index.html","1fd8d189f75af0159cd1ed32743154cf"],["/categories/网站推荐/page/2/index.html","715b0cbd3bff474b2bb49b12c4dfeed7"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","dcb4b72d91ea980eaaa1b976330f7c75"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/background1.jpg","457044efc799611e9697f1ff8fa7e344"],["/img/background2.jpg","56bc44d644e0e9ba94b04c6b8282eb90"],["/img/background3.jpg","b3f46b8de3caff0649b0c9b00a77c5aa"],["/img/background4.jpg","0b62e97af473076ca0e4e4a4a3e91148"],["/img/background5.jpg","a85b95a0a926f45ef967c0950a47d815"],["/img/background6.jpg","4ecfb3a6d01e8bb58468da052547efcf"],["/img/background7.jpg","da709e41f74200f960b4c6bdf8baab63"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","d189000abc37a30989060c87b60e4c18"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","b1588fd3300e85022c73a041db72102a"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","2156a82fe37303e56d0c3470ca5880a5"],["/music/index.html","ab655f7f670e9e22ad88b304e787935e"],["/page/2/index.html","257d7e09d85ea6c8b521bfedc87d41cb"],["/page/3/index.html","8040049788fbfe77a4067e7c79045336"],["/page/4/index.html","929126e2e4caf55b2b595f3af3b3c923"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/096db3c03b6e/index.html","56bf9ccda8930a94c248e53cd4878dd6"],["/posts/1235535247cb/index.html","97758f750147aedf38a02109dad25725"],["/posts/13b70ad2982c/index.html","ed393c6d24e5ddea6a715a60bc7e5e21"],["/posts/15fa81012f63/index.html","4f621758e2237b90fce22b8c157527aa"],["/posts/1ec0df688f03/index.html","fcd7831462f46ca055619764545fb7e4"],["/posts/2b7ac1a9709e/index.html","81460fd2034a60e8badc022eb19617e4"],["/posts/2bb24d491704/index.html","96af61297bf377181c9d2de5b9c93cdf"],["/posts/2c9261572067/index.html","ad22d8468e84c1b321a9012e32f7eea0"],["/posts/304408dfc52f/index.html","2d01c08fdba5e71da9923e431fb5fc10"],["/posts/41c16cb60b68/index.html","cc100aabb05d5ab70840e378143c0c0a"],["/posts/4358b00bc797/index.html","e6d33fb1c05e468b955624546039faf8"],["/posts/4acff0774207/index.html","2a267b0f00a381b22c5a81647e39e80d"],["/posts/4b6cb4514456/index.html","e449b3cfb8a2ad69b1e1b9b0fa3db4f9"],["/posts/6631458408e8/index.html","d22278c3255002022c95ed68a06907f2"],["/posts/6cb2454df473/index.html","85ab5363c550839fe081d5447fcfa689"],["/posts/6f929ba7ef0a/index.html","a2a089293ba822c234e69d6461b0b2e7"],["/posts/76dd1b500ee9/index.html","9d1f25f1db000dac42d8d8538bb8b0d9"],["/posts/8ef6e275fcc9/index.html","42c5e6e4f357a3c540d40d3f9dd49845"],["/posts/94456e62e22c/index.html","ef592bc4e4f51fdca9dbe62bc7809f6a"],["/posts/9792de8b38a6/index.html","5482ffaba741c4785e11a6567c293e5a"],["/posts/a84c927bae36/index.html","c7a1e0d65d0ce739b312e41dc37b44c0"],["/posts/ad5499059bd8/index.html","8042f7aad4aa252cd3658432c0793919"],["/posts/b1a6e353d3b0/index.html","80f455646079e6a478f3d1fa77b0968d"],["/posts/b478f3198c73/index.html","32a81ed77f29b4e5cd1358916157a12a"],["/posts/c0ae68f04a1c/index.html","7af32f9b5615375adf2ffbe3c4b47690"],["/posts/c821481d77c0/index.html","a8c85ce7107c03e473d4023d03d8adf8"],["/posts/d1ded2bacbfc/index.html","b2e8a98c109eb53a2d8a3eb9aebdcea8"],["/posts/d911ff6fb3e3/index.html","28e9cab7336b9f947112f4de0cf1c8cc"],["/posts/ebffabd07766/index.html","94ba1f1ce04d98c1ce7b8150932ea6fd"],["/posts/edc724f3bf5b/index.html","666f7b494cb21477d7dd28ed2527a163"],["/posts/f30c3df9c2fc/index.html","c642b1d3395f778ce6372b4153dc3b62"],["/posts/fb79b38d6277/index.html","8627ccd5677599d4f2c8957da6582219"],["/service-worker.js","0b0cc540ce5fca6c7cbd20daa77e6914"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","0037260338fa50552fab5b4686447cc1"],["/tags/255-255-255-0/index.html","d61a2a70d2e2c8c1f5cf4c9dbe0a7bfd"],["/tags/BS架构/index.html","75231fee6ec4b6b8d13e021381fe34e6"],["/tags/Chrome扩展/index.html","623103fb1234c60a91269cba9b99cad1"],["/tags/Docusaurus/index.html","efec1d9ff33e8d9142cc21af12d5bc13"],["/tags/Magiceraser/index.html","1a6f62fa3eb0da248c8a81f36c4216db"],["/tags/Neumorphism/index.html","f71265054b133be8725506277109f7ac"],["/tags/QQ加速/index.html","b7946eaa1d44c52f142f59501d12aad9"],["/tags/Zepp-Life/index.html","e0eaa73024306e4b03dd5d4ce7f9ead4"],["/tags/css/index.html","e4e6d21a11a6940be5b43a52a80215de"],["/tags/dns/index.html","83cc271ab8fcf84197f443a994054215"],["/tags/docker/index.html","cc26c06c18ecca66d17780f160cf1adf"],["/tags/ffmpeg/index.html","4812a9fdfaaf6eb4e1feeadc3543ff68"],["/tags/github/index.html","3b39cb6866db8ad758fd075bed611a5a"],["/tags/google/index.html","a41dcbc0b7b64675f74efabe1383d862"],["/tags/hexo/index.html","e04503fcfd6635609a665c1c427e38ae"],["/tags/import/index.html","eafa476afd69792ecc741260f1a314e9"],["/tags/index.html","44d964cd5e5cc9158fcbb36ade363cb4"],["/tags/ip归属/index.html","c3cbe5ab7b93770891438fd005e3457a"],["/tags/linux/index.html","a9fb6452fb2fa2c4cf3f7160d2ab0ba3"],["/tags/nginx/index.html","a49d4fb64b7745f2f48e7a14cc64c7e0"],["/tags/pdf/index.html","ad9c5a9b4156f37889d8af7210005f2a"],["/tags/play/index.html","bd187ca27d54523954a4a46c3ab99a56"],["/tags/python/index.html","ff52723f7b9b2495ed1fc96c98d12de1"],["/tags/serverless/index.html","5c97ef17be6bd12705b2e188953f96eb"],["/tags/smtp/index.html","d5b21c0bfa59e2da0cde70df7c2a045d"],["/tags/source/index.html","d890332bce5240b07f91431e6bb9ddc4"],["/tags/sudo/index.html","c689f3c69b7e650764d81460186b23b8"],["/tags/target/index.html","3a64b6aa90912ad95e4ec89984544a78"],["/tags/tinywow/index.html","04a027fd56c2ede13e856b7ff0edd683"],["/tags/usb/index.html","2c38f7052428f87d3a893ee24f01df3e"],["/tags/wifi/index.html","e2acd27e26deca4d11179e21d88c76db"],["/tags/zip/index.html","7693c1dabe385a24879e31a591e83c33"],["/tags/下载/index.html","9a2c92d437f42d31a357ac629a2ce13d"],["/tags/个数/index.html","7b1ead378f8c790d0379091436f35992"],["/tags/云原生构建/index.html","d327b70272f6d2335f045413bf4e04b0"],["/tags/云搜/index.html","7df1a2846e21de0791e86716a54dd93d"],["/tags/云盘/index.html","d67d57ef532c1b8067ffbf5838f486c9"],["/tags/代码/index.html","1e65087bf348bfeb421ab818737217f1"],["/tags/免费/index.html","dd2bd95f37a7452550f95e5138b909d3"],["/tags/函数/index.html","698bd5fd04a1c0ef9f4f2bf450cafaa2"],["/tags/分配/index.html","b63489e76f4f25c6880fc69b910d5ae5"],["/tags/删除图片/index.html","593eac70c1d81add896069ccf7aa45ee"],["/tags/刷步数工具/index.html","cfe3f1de090e65284f154534a8697146"],["/tags/剪辑/index.html","1200628334707bc7935e43508dfca260"],["/tags/压缩/index.html","2dec057b524016882483ec7d889ce2d0"],["/tags/变量/index.html","29d00dc269f5c6ae93a7067d018175c3"],["/tags/同学/index.html","a03c78003c97ae8200a356977889b49c"],["/tags/命令/index.html","a9a3580ba9b25bc675ad3957699727e1"],["/tags/商店/index.html","3bb721052a29bcfb4232c471f7a43017"],["/tags/图片/index.html","f9c4ee2a5b259a1aae556cfd1835606d"],["/tags/地址/index.html","cc410e76b073db30cb32239937a95182"],["/tags/堵猫猫/index.html","b6f74be130e1ca17f0af8a548800c4ed"],["/tags/处理/index.html","c6bb936f70f7abf15ec89ffb58018c42"],["/tags/子网掩码/index.html","1c1c0d853e7a1815e2157a4bf1afb331"],["/tags/实用命令/index.html","03c463421af4c0e5d5d9f8279ffa52b3"],["/tags/密码/index.html","8425bdfdcb979c73416d31e1cd90562d"],["/tags/小游戏/index.html","077e9f8623ac1308976c8dc054725603"],["/tags/小舒同学/index.html","48aa5ad3fd5583746d66f5f9edffe20b"],["/tags/应用/index.html","924ecdc4859861f5bb83075e2c1f2658"],["/tags/录制/index.html","4c8f6511c018fd89ecdf92657eea5a00"],["/tags/微信/index.html","361d680522eee6131f679ef018fb9284"],["/tags/微信运动/index.html","616ac52c792aefbbfc024a59adc0968c"],["/tags/技巧/index.html","c1e8ebc713e7cb5ddacaf12575a0751b"],["/tags/授权/index.html","ef0d180108af9ea2522502c5c93b6eed"],["/tags/插件/index.html","763ddfcca81b3a017b80dbc04c8951cc"],["/tags/搜索/index.html","62e267437f23bf5edb84bf46a28ce3a9"],["/tags/搜索引擎/index.html","e185a20c7b1c66a38500a314d3aa4a6d"],["/tags/操作/index.html","f985968b4e5d49491b8ee52394948741"],["/tags/支付宝/index.html","0cb13908d9b80da536577ab84586a52a"],["/tags/收藏夹/index.html","bac32cfae13b8a46fbed777da2f2f360"],["/tags/文件/index.html","0c98b145305b4b207856c3d87cf5c34e"],["/tags/新拟态/index.html","589efd05b8d1480097d4b2f4f57a6a99"],["/tags/无损/index.html","47ed0f5f7894cdd1373f5712a2fcea23"],["/tags/智影/index.html","e464d96d7cd11687c7f2626c55165dc5"],["/tags/查看/index.html","2d809a6d0c3aef01a0a14fa8a3a300e5"],["/tags/树莓/index.html","ba9dbdc4505b8407d42e88faa28f5288"],["/tags/格式/index.html","acdfef45aaa33ba550944dfee759a173"],["/tags/油猴插件/index.html","fc6e0a8cb3d5d1a658a4eb7a851d9749"],["/tags/流程/index.html","d92bf0ac14245e6efb914b92684a65e5"],["/tags/清图/index.html","c9c80d1fafc5030700e1ffa97a647322"],["/tags/源代码/index.html","009915138654c06f420b6a338613c1b5"],["/tags/源码分享/index.html","a7bde7f40e02e7bc62d26dc93d02f55d"],["/tags/生成/index.html","9bf063db86b04e86ae298dbf7d93b863"],["/tags/知识产权/index.html","1b393612135a308bc8f5f9fd950ee3aa"],["/tags/硬盘/index.html","a279d2a19d8cd0270535a23ef8538025"],["/tags/程序/index.html","d6e032505940d27a9a81f923081b7ee7"],["/tags/空间/index.html","041924d1b9ae548545d9e29ab1c196fd"],["/tags/站点生成神器/index.html","acc0d19e1998412fec109f58231bb5b1"],["/tags/素材/index.html","01ff75d7059d6b729754eab194319d74"],["/tags/网盘/index.html","8b96f2a79e6dd4356975e7b5fd0ba675"],["/tags/网站/index.html","551dfa6e8a17826eae64849dffd02071"],["/tags/腾讯CNB/index.html","4c1cd768c9094ce8aea01f0ba5447c0d"],["/tags/视频/index.html","59eb58ce0484eaf55911b784efd4fa49"],["/tags/资源/index.html","2f717c6aca72761ceea25af481bb951c"],["/tags/转换/index.html","f4c504955e704a38d7ee179fe569284c"],["/tags/软件/index.html","64dc804b7d43573abaaf75e013798cfc"],["/tags/运动步数/index.html","90cd55e2d4845f6f02023bbfdf22af5c"],["/tags/邮箱/index.html","60b12509fb34eff2a9c498e96c2a7b34"],["/tags/镜像/index.html","6cc48a09d6059f7f0e66ef0dd114fc85"],["/tags/长度/index.html","7c5f0b15d65a1ed3942f019ff7c34495"],["/tags/高性能网盘/index.html","3d761582f86b72526971b84dc246f184"],["/workbox-9dee487a.js","d7415e87425a75ab7e084f38d68538ce"]];
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
