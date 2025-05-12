/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","034d397ea5d5a2d2f2ab7ffc7cbcdfc9"],["/about/index.html","a1e590db23a6102523e06f6503096ce0"],["/archives/2006/08/index.html","97ca4bb15f5478e96a346e836d7b90b2"],["/archives/2006/index.html","522e2fcfc4702edf65be00b3555e4d2d"],["/archives/2021/03/index.html","903a1d6e38b7f9d353422386e7b846cc"],["/archives/2021/08/index.html","9c47068f1e8c2386a42b2c8798477b42"],["/archives/2021/index.html","92215df9fe356816a073350e55a4a919"],["/archives/2022/05/index.html","2958001913b50bd3558ab5f073190361"],["/archives/2022/05/page/2/index.html","0e98de8a3721fb4de0976c4c60924f59"],["/archives/2022/05/page/3/index.html","eb55e35538402c5afc2f75e9e1ae8340"],["/archives/2022/index.html","598f65a821b9e4be05399c1e9c79d85d"],["/archives/2022/page/2/index.html","faf8aa8d5a9290dd7655ccec8ee8ebc4"],["/archives/2022/page/3/index.html","1c570c64a3a83113a15b403120f49782"],["/archives/2023/01/index.html","96032c5670f24d54f5dc427ca54520c4"],["/archives/2023/index.html","7837cad71ae97fa4e00e8db551bae3cc"],["/archives/2024/12/index.html","81579f1df0df712023bf9f32ffe0d286"],["/archives/2024/index.html","534f3d6652c1b6675fd51da391420ef7"],["/archives/2025/05/index.html","1554d718f202ad4b3782edf0591dfa0e"],["/archives/2025/index.html","5a7c8d0d7ef6235e7c97f72830270606"],["/archives/index.html","9dfd863d00adbef032d87814bbeee312"],["/archives/page/2/index.html","082e895c0d1fae44a708ad1cd980c5ec"],["/archives/page/3/index.html","4dfcd270293d38361acc7481f7f6c9c6"],["/archives/page/4/index.html","e06cac11f62f801cd85351eb0c90338a"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","d5abd606807d8e0cc16f51767e1d567a"],["/categories/技巧分享/index.html","dddf8c1437ba7e9ed2d27df500767956"],["/categories/技术分享/index.html","c30793b4213b4e5d1f5311d868f7c880"],["/categories/技术教程/index.html","67b47c92e6ae1bec6a378a57e315c4b3"],["/categories/技术教程/page/2/index.html","01b5385c7b9a32e729e0fad03b87d615"],["/categories/源码分享/index.html","56cb70bb25207f97342f8752608cce66"],["/categories/福利活动/index.html","802c7c80fd3c3d00b1f4d1e90c5c26ea"],["/categories/网站推荐/index.html","0c3e2937bcb0546e2ed40fdbbbf7c655"],["/categories/网站推荐/page/2/index.html","e26bf9dca81fac7f80cc2280e5a2074d"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","dcb4b72d91ea980eaaa1b976330f7c75"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/background1.jpg","457044efc799611e9697f1ff8fa7e344"],["/img/background2.jpg","56bc44d644e0e9ba94b04c6b8282eb90"],["/img/background3.jpg","b3f46b8de3caff0649b0c9b00a77c5aa"],["/img/background4.jpg","0b62e97af473076ca0e4e4a4a3e91148"],["/img/background5.jpg","a85b95a0a926f45ef967c0950a47d815"],["/img/background6.jpg","4ecfb3a6d01e8bb58468da052547efcf"],["/img/background7.jpg","da709e41f74200f960b4c6bdf8baab63"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","d222084e55d7516435177ff73b95e6dc"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","5a53741d5594810e299f05438bd568b1"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","9fec2c446dbe5a8b914620541837c7d5"],["/music/index.html","d13a64ead2bcba1f464d594d74ec6909"],["/page/2/index.html","289ce721b081c9b9cba7a2a559c75b42"],["/page/3/index.html","ae50e7ece4def1426fe4423a62f2be80"],["/page/4/index.html","f9d00968e6fb212c3702bec4e5da7a04"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","93e99f342a320b67e0c807e8008f725f"],["/posts/096db3c03b6e/index.html","13231b54c0428869577276a80623a7cf"],["/posts/1235535247cb/index.html","388320285aa3801a4395517ceb103094"],["/posts/13b70ad2982c/index.html","3ebc402420c24751ad2ef520c113b6f4"],["/posts/15fa81012f63/index.html","225aa5a349cf20cb4d4c99efbde2353e"],["/posts/1ec0df688f03/index.html","3ce40579667d69964d4e4da06d09bbe1"],["/posts/2b7ac1a9709e/index.html","d3fb1a585ea28b512770da75fd66ef89"],["/posts/2bb24d491704/index.html","430a516de61f61fbea9ca5009ba45c59"],["/posts/2c9261572067/index.html","7f5d3579324d56a544edb04f00f075cb"],["/posts/304408dfc52f/index.html","9517a239c40c53f0477fac07783fc11b"],["/posts/41c16cb60b68/index.html","9c249b9df2ede48bcc46f1b25699b23d"],["/posts/4358b00bc797/index.html","6fc1a40239136742a340c5727fd31293"],["/posts/4acff0774207/index.html","113a26fccd301914a3734024422ffe90"],["/posts/4b6cb4514456/index.html","1ab729160626741b43a6da2d1f8ccaa1"],["/posts/6631458408e8/index.html","9d81c23694c645cca37ab8f4f254d4ef"],["/posts/6cb2454df473/index.html","b0a1b076e41e86eb918711da8d4681d6"],["/posts/6f929ba7ef0a/index.html","8c430add3067d2a71ab1751327bbfae8"],["/posts/76dd1b500ee9/index.html","8be6fa9f3ed22fc08c0fb9c15a5d8559"],["/posts/8ef6e275fcc9/index.html","1e62a288c17d3f2ce237f9eafecf21b8"],["/posts/94456e62e22c/index.html","eaed7bed2d507618f0f8170315897209"],["/posts/9792de8b38a6/index.html","2f1191fdafeb286f63d1aca5bfe14a9b"],["/posts/a84c927bae36/index.html","920adcacd5ea5783c24da871ef7a05c9"],["/posts/ad5499059bd8/index.html","664f40e4a515fb9170c64d9815826e0d"],["/posts/b1a6e353d3b0/index.html","e97f8c518883710fd1e8d9e6351c47f4"],["/posts/b478f3198c73/index.html","85f7eda94feb9eeb763710cb533940d8"],["/posts/c0ae68f04a1c/index.html","3c6ed1a2cb85d7670de12efba5166123"],["/posts/c821481d77c0/index.html","bfa65d5a7cb0006b5a2d377498be1d9b"],["/posts/d1ded2bacbfc/index.html","15a8ebaa6f93849bcdd24d15052bf1e9"],["/posts/d911ff6fb3e3/index.html","f6948384aff82fb189d51102cc3ae1dc"],["/posts/ebffabd07766/index.html","85e6fd76d832dd0d7a7f67a4925189e4"],["/posts/edc724f3bf5b/index.html","75b8f0b177de9d9dc74b22d757062d17"],["/posts/f30c3df9c2fc/index.html","816dec6b514c1e6a0a8697b9acc00256"],["/posts/fb79b38d6277/index.html","0a3be4a21f686e1eb1630d4dd5d1f61c"],["/service-worker.js","f81cd333dd1444d2585522dcc823dd66"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","c76f0b1f2362069f28706a81f5ffb8bd"],["/tags/255-255-255-0/index.html","9e38f661aad86f2294b0d606895e3bd7"],["/tags/BS架构/index.html","c096c2cc75fbb90158165b8cbc894c95"],["/tags/Chrome扩展/index.html","11cf4be40c70424a097a46ec6261cbb7"],["/tags/Docusaurus/index.html","1edf4f9fcc7763ee53b1cc409f9dc035"],["/tags/Magiceraser/index.html","661c557fff2fcea47ff0e0f199c11043"],["/tags/Neumorphism/index.html","7e3910376f7021e134936d2be943d252"],["/tags/QQ加速/index.html","336c049bdf3ad93830aab57e6efb6ab6"],["/tags/UptimeRobot/index.html","3efa495c30a539e7aca6745adef27abe"],["/tags/Zepp-Life/index.html","e43ac54f6b6d064e99fc07af8c368bdd"],["/tags/css/index.html","b9cf12338c7ab1e0bb7ca0b23a3badd6"],["/tags/dns/index.html","181af105b1a47b5d6ad1f053b787aa8e"],["/tags/docker/index.html","84ff05fe2c218926b443b59de0834582"],["/tags/ffmpeg/index.html","b1aeda8d612c892fa0249da00bd9624d"],["/tags/github/index.html","6a694aea2d740e6546903bac1a9e55c5"],["/tags/google/index.html","4b8e5bc1c7b8dd2b750434ccb5b155f4"],["/tags/hexo/index.html","467f08902124c51043db78e3eab61493"],["/tags/import/index.html","2efd2397910e738378f73e552784995c"],["/tags/index.html","7bb5431072e5596f5b78cc012413c155"],["/tags/ip归属/index.html","9be001e9807d2153a5b1455128d2daab"],["/tags/linux/index.html","d06349312d70010019be178c58091a0f"],["/tags/nginx/index.html","4e69e00cfe1455340afea187be814378"],["/tags/pdf/index.html","a135d6d49954c631d52bf3ecebd0d2f8"],["/tags/play/index.html","ec9f0796e1dbed467f237e98670362c0"],["/tags/python/index.html","42c24049c8c595de1238a934390c15fc"],["/tags/serverless/index.html","34ad4431640a58d20172de312185492d"],["/tags/smtp/index.html","a17f8a2876c7e0926fd2825014af2659"],["/tags/source/index.html","f692e31e11852859f7e484d29920ce33"],["/tags/sudo/index.html","a6c9728c5e304f0a96b8bb3624c12e2b"],["/tags/target/index.html","fbd2996251e5f628ae7d996bcd934c30"],["/tags/tinywow/index.html","360a8e71d06453a5bf815734f6270fbe"],["/tags/usb/index.html","22d05a01b8d39ed48833e12cb22b82f1"],["/tags/wifi/index.html","1564b298895ddea61303e1e1de94452d"],["/tags/zip/index.html","94401355eadbd9b8b1abf94c5892806c"],["/tags/下载/index.html","76e2b5c6a7f65382cb634516c7ccf0a7"],["/tags/个数/index.html","9d6ddc3a69540291d493a634f1fef5fc"],["/tags/云原生构建/index.html","97dcc3e02102c22f265055aa0f085eb4"],["/tags/云搜/index.html","b13c4a208a423408d179298d3a41665f"],["/tags/云盘/index.html","7693e5fb3c5e2d1b80aa555ec52bc952"],["/tags/代码/index.html","f36209c266cf4b06d9ab5af04791f71c"],["/tags/免费/index.html","ddb720c49c9440a2b7d0908c8bc76914"],["/tags/函数/index.html","d20da90a8edc61591a9c37cf574f0338"],["/tags/分配/index.html","612eccec8a378a4923142f36d2a7bd57"],["/tags/删除图片/index.html","9818ff738e12862828719ca715d59bcf"],["/tags/刷步数工具/index.html","4951edc484bf88bcdf35deeac2e43903"],["/tags/剪辑/index.html","e169f04c61cfa536be28d4c6dcb0b51f"],["/tags/压缩/index.html","5b2123bfa8d47abb5153d8dd59911967"],["/tags/变量/index.html","620fd3f57c3b70c742ce0c33c5d2593d"],["/tags/同学/index.html","4c239941907d9166cfbd70a7b59f4908"],["/tags/命令/index.html","2da08c9ce231821c42f1e188b0f8d5c2"],["/tags/商店/index.html","294b5a291cfb37d5ab39c86ac12662ce"],["/tags/图片/index.html","7d5e7c19c823289f4068d0142c6c2f42"],["/tags/地址/index.html","ec98fae46ddd88c06f0bcd49dd97f08e"],["/tags/堵猫猫/index.html","984ed22b798873f16a87063f196bfdd1"],["/tags/处理/index.html","d969fea2d56c48c96bb8572ff4c59c5b"],["/tags/子网掩码/index.html","41463ef20831916855c3b11ba94585fb"],["/tags/实用命令/index.html","15484552fea0ca83dfeed42ae081e1d8"],["/tags/密码/index.html","a97eb56a46a3ab16f688e445d0d52280"],["/tags/小游戏/index.html","74935d137ca2f1cecf1255502a75cc14"],["/tags/小舒同学/index.html","e2c66ec677509f58af0b623b6411282c"],["/tags/应用/index.html","dd07a6fea9618804ae90bfd6f9911791"],["/tags/录制/index.html","58289d80b708776f7c5070c3fbf4d7ca"],["/tags/微信/index.html","b5eb69bc6e14e034ba215fdcdbade84d"],["/tags/微信运动/index.html","087de6e150fe55b75e73fc6c6d6bc58d"],["/tags/技巧/index.html","be7ebc7884b0af555a51c1a198f018dd"],["/tags/授权/index.html","3913583f7268b70ca0beaf320a9af4ba"],["/tags/插件/index.html","283d8a694ea3e429f56a6d93e6d1eec0"],["/tags/搜索/index.html","1c12614f93369f8fff7bdd1fa080102e"],["/tags/搜索引擎/index.html","ba17c57fcd2f90819a5cdd88dcad2b49"],["/tags/操作/index.html","7833f076e0677bd043f6776155006b9c"],["/tags/支付宝/index.html","c9c4c7cd7669a79ade45b4305c01c225"],["/tags/收藏夹/index.html","96a1a4bbe66103f0983f5c532030898e"],["/tags/文件/index.html","5fe3a3c98257f96f3f97662dd0b2fa6d"],["/tags/新拟态/index.html","2ee31b3f546b5328f64be596a16d48c3"],["/tags/无损/index.html","757e58df03cd40a24611f51e6af6aa18"],["/tags/智影/index.html","9947bd55ba74048cad7b0fb0dc7b3db9"],["/tags/查看/index.html","c9dcb4ec64e303deacad09875d986188"],["/tags/树莓/index.html","af0e2e11e6d6ca2417a14ebf3a0cc7f2"],["/tags/格式/index.html","168dd6a37c865a57bc4ffc743b45c4b9"],["/tags/油猴插件/index.html","ab1fb321f1df447e7e8eb7487c1dd687"],["/tags/流程/index.html","4e19f5536f7e0744ad2dc33eedfbdfcb"],["/tags/清图/index.html","c1c66e57f76bd7f521de8eddf63af0bf"],["/tags/源代码/index.html","303562530a2cab56fa4833450d93ec66"],["/tags/源码分享/index.html","75a77445aeee0f1ba85b73b046287a3a"],["/tags/生成/index.html","28126a6c72985a81c01c5ca21fb1a8bb"],["/tags/知识产权/index.html","eb4c500c026521aa08dd0dda3f933c6b"],["/tags/硬盘/index.html","a1da27f82f55401bf771e465021c33df"],["/tags/程序/index.html","b8792bd003b04d965fb12e8e4508f8ab"],["/tags/空间/index.html","7b8162d07de701f4f108e678aaf18c2b"],["/tags/站点生成神器/index.html","29fe42fe1d909d2d15c86ad19ab3b9d4"],["/tags/站点监控面板/index.html","ff71fddb36b772f66e922eb1260d0bc3"],["/tags/素材/index.html","32777febf89f52a5bea4d2f09a5963ad"],["/tags/网盘/index.html","10d019b69377532cc8f8796a79b870a4"],["/tags/网站/index.html","6b704f1b70a196913d4a27290ecfccbf"],["/tags/腾讯CNB/index.html","9baadf5874ded4c680997998144a59a0"],["/tags/视频/index.html","84e56fa51d986b16eb4576dc8871c85d"],["/tags/资源/index.html","0e2910bf6636508e169256bb7a97c62b"],["/tags/转换/index.html","17dd17a1ca3b6bb14e9f1244797be594"],["/tags/软件/index.html","77388d30a5cb7fdbee70ba04c531736a"],["/tags/运动步数/index.html","72e617480d87823757345ee916ecd5ba"],["/tags/邮箱/index.html","7a5b738138b106c27326314a2f85fed1"],["/tags/镜像/index.html","bb8797abe3509fd7110bf97f49659ee4"],["/tags/长度/index.html","bdf47f49a2a7b2603c7219a3518d2683"],["/tags/高性能网盘/index.html","b8c8f8b7822a920a4db123f387a87803"],["/workbox-9dee487a.js","d7415e87425a75ab7e084f38d68538ce"]];
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
