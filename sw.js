/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","245364d223c9f4b9d08ba9858cba7286"],["/about/index.html","c8a41f8c33555c16895ef894b50a3d70"],["/archives/2006/08/index.html","c4b52aa706e7edfc248a32676685f2d8"],["/archives/2006/index.html","f93ef35d3802f78736e90d9e148f7e4c"],["/archives/2021/03/index.html","fd40e26130ff3faa1269d068135e567f"],["/archives/2021/08/index.html","67d2b4374fd7f6f9ff5489951d5f9179"],["/archives/2021/index.html","395d5d73b030c7dbc51c498d45313ab4"],["/archives/2022/05/index.html","93a79f19da0ba4eff720c49a054d5fc8"],["/archives/2022/05/page/2/index.html","a0eeeb2b688c5f8734adc6891c1fbbb1"],["/archives/2022/05/page/3/index.html","735cddcadd041bb4affd3ece70cd9ba0"],["/archives/2022/index.html","ba0efc1f43adc300d6c89baf1d0e40ec"],["/archives/2022/page/2/index.html","670900266be41b0dcc27f6e70eea4650"],["/archives/2022/page/3/index.html","24d0c059bef602a3171d4265f4888e5c"],["/archives/2023/01/index.html","dd56ed9a4b6c606df87c7d8355c30321"],["/archives/2023/index.html","f56f9849ea92f2ad0c379285d7448277"],["/archives/2024/12/index.html","5a9f35775ff69445856b9ac9d38fc9ed"],["/archives/2024/index.html","7c8fe7a3b287824fb50ae20e4d0a6f0f"],["/archives/2025/05/index.html","9fd4d47c81fe1da350427d908302c83e"],["/archives/2025/index.html","66ef98e10ae8bfb35cbfa14a85e791f3"],["/archives/index.html","8924bd713201b00af5d99c5ae7db202b"],["/archives/page/2/index.html","23051dedcc48666cf2bb761b4ccf22f6"],["/archives/page/3/index.html","4d4565869952954d3721e8c22966545d"],["/archives/page/4/index.html","6043c39014e94e6904b0a49034f2a5e1"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","563a75f39048c60338a0d2be21fe03a3"],["/categories/技巧分享/index.html","1e84c8f7bccf2ea9eb4addb705278de3"],["/categories/技术教程/index.html","a718401dbd3ba99cb3515dac3b419316"],["/categories/技术教程/page/2/index.html","106889053aba07a0be04a728e76a629b"],["/categories/源码分享/index.html","eaf26e20ebbd0a16e33dcd7f788dcced"],["/categories/福利活动/index.html","359b21edf08aa06f7ffd6670f2784e0c"],["/categories/网站推荐/index.html","a783779e7208d380aa471c567f421cbf"],["/categories/网站推荐/page/2/index.html","f9b2404289e17618d0b5cb7558665d8d"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","dcb4b72d91ea980eaaa1b976330f7c75"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/background1.jpg","457044efc799611e9697f1ff8fa7e344"],["/img/background2.jpg","56bc44d644e0e9ba94b04c6b8282eb90"],["/img/background3.jpg","b3f46b8de3caff0649b0c9b00a77c5aa"],["/img/background4.jpg","0b62e97af473076ca0e4e4a4a3e91148"],["/img/background5.jpg","a85b95a0a926f45ef967c0950a47d815"],["/img/background6.jpg","4ecfb3a6d01e8bb58468da052547efcf"],["/img/background7.jpg","da709e41f74200f960b4c6bdf8baab63"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","f22d3147627bfd1269859281658a3fd2"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","905736c6190f46f93624fd6684f2ef9d"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","d8d6015052924c7a6a880168f3811797"],["/music/index.html","5000f0832559a6c2dc16bc1c029db0b7"],["/page/2/index.html","fa2515f9b7791ab8c3435fdc16fe54b3"],["/page/3/index.html","f884f5b6a02fdb40b25fe8c2ce700a68"],["/page/4/index.html","e77029ab258aea4cc5c1ed9047b1fbad"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/096db3c03b6e/index.html","f771ae0023f40199e476b74cf09b16f2"],["/posts/1235535247cb/index.html","4521e84c9930b6d150528833a84fff0b"],["/posts/13b70ad2982c/index.html","391292714085b92c01ccbc16b089c9ea"],["/posts/15fa81012f63/index.html","a89ee56741e21403238e91fc77b68c49"],["/posts/1ec0df688f03/index.html","a5de7b2c55cddd7e44f7cbe4ecb5d26a"],["/posts/2b7ac1a9709e/index.html","ccac930a14295633cdd4f79a4d387ab2"],["/posts/2bb24d491704/index.html","fe94fb41c9a8c750787c9582aa6c7e3f"],["/posts/2c9261572067/index.html","cc062349dca5663744bc13be8b640e82"],["/posts/304408dfc52f/index.html","c5a22e6797f48d784eff89b850dc53ee"],["/posts/41c16cb60b68/index.html","1959907c773547b0de2439da786f3271"],["/posts/4358b00bc797/index.html","acaa3993a419d57a81c44985b171f05e"],["/posts/4acff0774207/index.html","85470251fc10ded1af7922e6b44dc863"],["/posts/4b6cb4514456/index.html","f0f8ea0a04b1a88606f037b970e1ce85"],["/posts/6631458408e8/index.html","f44cee2753cac89fd9eca90f86b2e3c9"],["/posts/6cb2454df473/index.html","156515028024728019da59fc31921f4e"],["/posts/6f929ba7ef0a/index.html","5e476c1d5b2ba14b88b2bb2d6ce92aec"],["/posts/76dd1b500ee9/index.html","380bf899ccf0beb1d9dcfdb080d64cac"],["/posts/8ef6e275fcc9/index.html","b3cd7c975c769b9f03f33849c315cf85"],["/posts/94456e62e22c/index.html","fae30da485646fb8ecbc69a631df8500"],["/posts/9792de8b38a6/index.html","b63d9739e5ef6e6223395cb7f526deca"],["/posts/a84c927bae36/index.html","2b7785f45f539a4e1a404fb485029bf1"],["/posts/ad5499059bd8/index.html","748ff4aec88ef5a2df4c2b128d5ad673"],["/posts/b1a6e353d3b0/index.html","67fc5b8fda5ececfb5b81b1c7927176f"],["/posts/b478f3198c73/index.html","c164a345e696205c070b7470477f7b83"],["/posts/c821481d77c0/index.html","e46aad95896e2044205467aa7e513e11"],["/posts/d1ded2bacbfc/index.html","b5e0f34da028a1bb219c490641ff4e28"],["/posts/d911ff6fb3e3/index.html","0bdbe673435a0db4090f07e3b9b76a5a"],["/posts/ebffabd07766/index.html","49fedd8e74d41add81a1a7a3b647aac1"],["/posts/edc724f3bf5b/index.html","11222403004823f8487c5fafdb861ac5"],["/posts/f30c3df9c2fc/index.html","3bc5174e01fcf2e0241576611d3031df"],["/posts/fb79b38d6277/index.html","3ed1c64ba340f25cfaaf88fb25eae426"],["/service-worker.js","44236b8a4b065e31b4560d0ea4e62df1"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","afccc0588f0a50f8556b85da5a67a459"],["/tags/255-255-255-0/index.html","9db9d07617dfe654d1a361c3affc788b"],["/tags/BS架构/index.html","9668b3907e57f53031c33ae9ce5eea5c"],["/tags/Chrome扩展/index.html","b815497b598ccb18855540fb32461250"],["/tags/Docusaurus/index.html","bfccb67b460f48d2a14c3eebedb2fa74"],["/tags/Magiceraser/index.html","5298ef1a720b6a09f4b82dc869e33f18"],["/tags/Neumorphism/index.html","760c59e558ca80fb8bf1e887ff995a4b"],["/tags/QQ加速/index.html","b2aab378e6c194f71048c6618febdb2d"],["/tags/Zepp-Life/index.html","f69c56540637ea7eaf6600de991c0016"],["/tags/css/index.html","a3a95b1e047d5bb3df2adebaa0338ed3"],["/tags/dns/index.html","2f2fc78a824d2fe2790aec9fd42d586f"],["/tags/docker/index.html","4c9dde84ed567dc27e7024cd783b9e87"],["/tags/ffmpeg/index.html","0a05d00b790f5e23fd379698fadf2fd0"],["/tags/github/index.html","e1575c07b298f459befe02912194a3cf"],["/tags/google/index.html","2b48548dff6ac90c8a319929564b2167"],["/tags/hexo/index.html","1c17f374c3e082a1a2d95c2109b7cf1e"],["/tags/import/index.html","a2947d1e7017fa26fef77d56184f2410"],["/tags/index.html","291739587573770154033f4844b06ec6"],["/tags/ip归属/index.html","e3238a20512fe91d03336d33973aa094"],["/tags/linux/index.html","beb0ceae2aee93e06f36865abe1dc244"],["/tags/nginx/index.html","f2b36b63d7d89e01b440296579c4b992"],["/tags/pdf/index.html","0f875d2589391f1e283af8406fc6a385"],["/tags/play/index.html","ce6e3b0a201456dae953f5025e37af68"],["/tags/python/index.html","855843e6525b0d89f903740eccc82efd"],["/tags/serverless/index.html","5009f08b74377057786f1f09c86d67a1"],["/tags/smtp/index.html","67f10e0a188a4f51b5bb7d2d9e93a57d"],["/tags/source/index.html","25c873c92cc4dd7edde2b973edfad6fd"],["/tags/sudo/index.html","9dbc7bd1d606268197639d4bed1ab52d"],["/tags/target/index.html","f4afaf8e78380034866f01273ef75618"],["/tags/tinywow/index.html","65abc0c6eb9ced4a1a380236211785d4"],["/tags/usb/index.html","b10876f05afb845175376045307dce9a"],["/tags/wifi/index.html","a6337a71bc92c460558ea94ff3e78584"],["/tags/zip/index.html","bdb8be082cedd4e79b59c5e134f1d7f0"],["/tags/下载/index.html","10aa554c7d099ebed47f74dfbaf84d1c"],["/tags/个数/index.html","6fa73e2c7d2141d862de971eadabcff3"],["/tags/云搜/index.html","68ea151c03b49cb8942ad35db48ec88f"],["/tags/云盘/index.html","56519bde21874f782f1ffedaf5e0db40"],["/tags/代码/index.html","b90b6601ee57a1d4657d1295e48ec8cf"],["/tags/免费/index.html","3b14d2c5a80db639a7dbf6eb9c1d94fb"],["/tags/函数/index.html","51d33f47c6fbf3033ebd8f794028d3b9"],["/tags/分配/index.html","5f012c7ca2efe0af54103dbaeb46bce0"],["/tags/删除图片/index.html","491a4a285306b0a5d29705dd1da09646"],["/tags/剪辑/index.html","2c280bc728e9bb0b98efd0da185e4453"],["/tags/压缩/index.html","5ce6e4e8ba242a6cd00883416c7215ae"],["/tags/变量/index.html","fa7e730e02781bed84e3368896619c73"],["/tags/同学/index.html","1d10be3d2ae193e6699532b2d0b2e20f"],["/tags/命令/index.html","7f92267741b5ef126bd341216dddc082"],["/tags/商店/index.html","85dc1045c8608f71767cea1a303bd2fd"],["/tags/图片/index.html","86f994ef95d8b76c82c1117039be8ce8"],["/tags/地址/index.html","1bd9c50f31991877c3de93207d9b1713"],["/tags/堵猫猫/index.html","174cf21894f861c8de991abe2b83e27a"],["/tags/处理/index.html","b202108d5c95b732c6d61891e46ad16c"],["/tags/子网掩码/index.html","2ab4860ab3d8b8eae1a5286a17e46f8a"],["/tags/实用命令/index.html","e9d7fed7c75c7ff0f07adadaef018c2f"],["/tags/密码/index.html","6a70adee9cd31d5918c6e88343df33e4"],["/tags/小游戏/index.html","8370818d7b0abe7f1e3e601ec645d24e"],["/tags/小舒同学/index.html","eebe15ac45af75358baedcf1ccd4c199"],["/tags/应用/index.html","0ded40026bb2ae7e9d29546269cf81b0"],["/tags/录制/index.html","c95ef1e3bd0603e78f04ed3c2ecb01d3"],["/tags/微信/index.html","343562e1792340e9204ee9b2682270cd"],["/tags/技巧/index.html","4a2540e11d45e75953212e156d4b2236"],["/tags/授权/index.html","8f30f5a2c1cafca5282668a6d018e32c"],["/tags/插件/index.html","b25759322cf66dedbba23b61cb3463c6"],["/tags/搜索/index.html","9d73b43c348ff4f448fec12ea8296d3a"],["/tags/搜索引擎/index.html","b34f57c86df8aecd57d409961c1b116e"],["/tags/操作/index.html","8b5613ac0216361aa9902a324e9abb6f"],["/tags/支付宝/index.html","d12784daad1219a3c3896698649d3f8a"],["/tags/收藏夹/index.html","361a1cf01275efbbc6d4bc3d6263c78d"],["/tags/文件/index.html","e97ee28020f78f2acd6228e0d3f5cec2"],["/tags/新拟态/index.html","432bef1ac1425a95f95b4ccc6f9f55c8"],["/tags/无损/index.html","1e981994a91c7466d45a39a5fc866a0c"],["/tags/智影/index.html","ebd75ea3b5dd1fb6c5adb6fe1e5db96f"],["/tags/查看/index.html","72428f1fbf578af0dd5c5d6acbd6f370"],["/tags/树莓/index.html","b8f9cb75786b147238604c34acb934a8"],["/tags/格式/index.html","e109496787213997414d3edaafd8e2df"],["/tags/油猴插件/index.html","47ea8f3910f87cfa9a51e1b8272d9a56"],["/tags/流程/index.html","59667b973ee7d08f0eea79b511069b4d"],["/tags/清图/index.html","21aa9ab50f06fb9ef9cfff084eb87f83"],["/tags/源代码/index.html","ad83a9f1bf9a8a5fbfcd2593f0a73b0e"],["/tags/源码分享/index.html","91f64b0b4e0b70f80f9a3e2d5a25d520"],["/tags/生成/index.html","a4af1cbaf508580385b5dc8b43f698d6"],["/tags/知识产权/index.html","71ce597f30db13fc8817d79eb99bd999"],["/tags/硬盘/index.html","1daa3026d8043222c159f67612f642fd"],["/tags/程序/index.html","3af36e79752ad51e28a2348d7d3c2123"],["/tags/空间/index.html","bb6e214d644a30bda4f16489a3ce4ef8"],["/tags/站点生成神器/index.html","de8d7e4ddf547c93a319f6cc50532527"],["/tags/素材/index.html","cdc042b7fcf5f14b9c6356e54ae2db20"],["/tags/网盘/index.html","a718dc69a4fe6eb03cac285ae589712a"],["/tags/网站/index.html","4bc9ab8e084aa716426b72246db4c2a7"],["/tags/视频/index.html","1dcd273215e5481acdb6ab88f1c12825"],["/tags/资源/index.html","77a42af65edb3d6b9eef12c478c69e29"],["/tags/转换/index.html","8c7720c6e8334c07d783af7719569f14"],["/tags/软件/index.html","0f6189c43039187c71a95674ee8e1585"],["/tags/运动步数/index.html","d150e12d1f3829cd734346eddde055e9"],["/tags/邮箱/index.html","c3730622328bfa7d9274a3f78ef46295"],["/tags/镜像/index.html","ae0095ea5a3edf1529f71de207fc514b"],["/tags/长度/index.html","8963955799f083be3958ac05beee1eaf"],["/tags/高性能网盘/index.html","021c94f960f62a7a10fde199c052ed68"],["/workbox-9dee487a.js","d7415e87425a75ab7e084f38d68538ce"]];
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
