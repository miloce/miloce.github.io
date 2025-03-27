/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8b988eeff9a1603452e6f7485b49ae3a"],["/about/index.html","4eb3ebaed8c5aca7ea5b40477e7f01e8"],["/archives/2006/08/index.html","2d3b97fc41990099a367c685635eeb5b"],["/archives/2006/index.html","670179e9f795be8fb12d379c4c0f24a8"],["/archives/2021/03/index.html","1f5265f8793abce92c907da30e228902"],["/archives/2021/08/index.html","08e240044d80a4cde425fc984bdad642"],["/archives/2021/index.html","2dff8a7c13ff569fd5a5cbb14c8777fb"],["/archives/2022/05/index.html","c3ff83c2f5114a40b088b53ceb91f02b"],["/archives/2022/05/page/2/index.html","754bb8a6f31541cea8ae909410526773"],["/archives/2022/05/page/3/index.html","4388f894b432982345c9ad260fb564e6"],["/archives/2022/index.html","7ace448e0cd2e6bf8bc58741f33dd916"],["/archives/2022/page/2/index.html","182c38c5c47b68ccfb94a5c105af259a"],["/archives/2022/page/3/index.html","6dbcba38fc655d953fefd7df1e42b902"],["/archives/2023/01/index.html","2ac277c13718ec4eaf984650045c5838"],["/archives/2023/index.html","2fc17ff256213e3cb8104649840ef5b9"],["/archives/2024/12/index.html","de191e27a947b5a113369d0e7af0861c"],["/archives/2024/index.html","23132cf03b0097300543edbff7662477"],["/archives/index.html","90d39e7459eb396fa02f37265e3cd3c1"],["/archives/page/2/index.html","c034c5a41501688d05bd1568d37b06b2"],["/archives/page/3/index.html","d8d74a6c71020adf1125707fa74d4130"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","4815eb172dec7cdd5a04c99edc0bb9ba"],["/categories/技巧分享/index.html","7ce7587490d494a13171a1a143826af0"],["/categories/技术教程/index.html","aba379b8edce96fdc1c806a26d8b7ccf"],["/categories/技术教程/page/2/index.html","c9f2f966a87b101e1173eeafc51c245f"],["/categories/源码分享/index.html","f6ff75b4a84fa5739eb12c11aeb38133"],["/categories/福利活动/index.html","c12e1dc892eee3fd8f8768301a5972e4"],["/categories/网站推荐/index.html","4d2cafc533ccc4200090415cbcb39d38"],["/categories/网站推荐/page/2/index.html","afd54691f22842fc7f8b4a5ec844aa25"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","dcb4b72d91ea980eaaa1b976330f7c75"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/background1.jpg","457044efc799611e9697f1ff8fa7e344"],["/img/background2.jpg","56bc44d644e0e9ba94b04c6b8282eb90"],["/img/background3.jpg","b3f46b8de3caff0649b0c9b00a77c5aa"],["/img/background4.jpg","0b62e97af473076ca0e4e4a4a3e91148"],["/img/background5.jpg","a85b95a0a926f45ef967c0950a47d815"],["/img/background6.jpg","4ecfb3a6d01e8bb58468da052547efcf"],["/img/background7.jpg","da709e41f74200f960b4c6bdf8baab63"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","cb56b6a399b1a987ad0da00dbab8e3ef"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","4139dc1daed46260d66c36794a5ce388"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","1938756818255dc2208524d08525a929"],["/music/index.html","d2934eac2d1f141a66e0093b4c87379f"],["/page/2/index.html","32ca4ed7b31b97217b94a02a25a5d14b"],["/page/3/index.html","296bec1634610d60f19d548dfb5415f5"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/096db3c03b6e/index.html","a6b3a23d3c85447062f574fe5752e666"],["/posts/1235535247cb/index.html","d1f59f07e5f64e78efca3312a730ea7a"],["/posts/13b70ad2982c/index.html","99ed18a27fe263a87a44badda21a3705"],["/posts/15fa81012f63/index.html","d065719ae96f4e459ead723181e98b4c"],["/posts/1ec0df688f03/index.html","44a8889abf86f92cfa44fc1441ee5418"],["/posts/2b7ac1a9709e/index.html","6e462e09e39a49011deaee198ae08908"],["/posts/2bb24d491704/index.html","f5a6ed73c4c11e1b3e7caac6e5056ff9"],["/posts/2c9261572067/index.html","21cb5750be1ffb044d8f5b16fca50806"],["/posts/304408dfc52f/index.html","34f5f501296ff2715aa60927095aedb4"],["/posts/41c16cb60b68/index.html","e82ddad7c1c309bbd933288fc10c4a97"],["/posts/4358b00bc797/index.html","769da3f101ef88b13a0dfe9363333334"],["/posts/4acff0774207/index.html","254363e6b0eabf2bf9d0e70b897a5623"],["/posts/4b6cb4514456/index.html","e20549d87fcdd008211b67cddb4e635a"],["/posts/6631458408e8/index.html","bb1c206ba45a835aca90540f07b218d2"],["/posts/6cb2454df473/index.html","12586977e51585650d55cf65145335de"],["/posts/6f929ba7ef0a/index.html","c774878452dbf37b3fb3fbbc7c3d88bd"],["/posts/76dd1b500ee9/index.html","e830c62f594100fd6a274ed1289e3ae8"],["/posts/8ef6e275fcc9/index.html","c3cc43d9ec57b0224f7654720c9aea24"],["/posts/94456e62e22c/index.html","54771403138439af4b76561c668d5c8a"],["/posts/9792de8b38a6/index.html","212fe047c80599e6cd023d47b775655e"],["/posts/a84c927bae36/index.html","ecba309edeeeee6286d2dca3c8a0eff2"],["/posts/ad5499059bd8/index.html","88740b544c8f8322c7cc2e3be2e346b8"],["/posts/b1a6e353d3b0/index.html","8a9bef43e89471818e0f1c28ab9f2e1e"],["/posts/b478f3198c73/index.html","e414360f9f62026580fc73ea74b35aab"],["/posts/c821481d77c0/index.html","5bbd0143be1b69f73782918fab46104f"],["/posts/d911ff6fb3e3/index.html","8d930f9fa2b2d57ed22a2b5658e1649e"],["/posts/ebffabd07766/index.html","5eed97bec24a02a9daab422e8012ebff"],["/posts/edc724f3bf5b/index.html","3a6fba785ee507c6ccf91b4e756d4f65"],["/posts/f30c3df9c2fc/index.html","4925e57f2cfd3e1ba683b74e1a49460c"],["/posts/fb79b38d6277/index.html","a6fc10a4e38237bb901472e64aa421c3"],["/service-worker.js","08395aa59e080442840c7ec7282c1fb3"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","21725456582ed914a10db6c34288079b"],["/tags/255-255-255-0/index.html","5b00c39f794d1ba526b0ab696afb9d68"],["/tags/BS架构/index.html","1cf876fb576af6f67fc5aec280572d86"],["/tags/Chrome扩展/index.html","8d1ef189dc84e6871b471a0836260be7"],["/tags/Docusaurus/index.html","b6336fa9703d245837bcacb6fa9d6a35"],["/tags/Magiceraser/index.html","f0785ff289c60abd5ac51dcdfd537743"],["/tags/Neumorphism/index.html","6a4547056e3c33722d381449a837b404"],["/tags/QQ加速/index.html","1d6c7f8a882970fc5b0cde41fd0dbac8"],["/tags/css/index.html","2a41a525e78eb09a694a3a1f5f72d70d"],["/tags/dns/index.html","1c85af42c472098a955008b76ad5157f"],["/tags/docker/index.html","7907f060afcfd43aa133d2928a666921"],["/tags/ffmpeg/index.html","94bc1d736b32e93de4834f51fcd89635"],["/tags/github/index.html","1ab5606d270ec7dda5d229bf8ea282ac"],["/tags/google/index.html","9059445d1f886519bb140d0b6ec40c25"],["/tags/hexo/index.html","0efeac1f94bb6a93039230e5970c5394"],["/tags/import/index.html","0a817c1327381cc428583027b4ad086f"],["/tags/index.html","5306703cec2e5ad4a2683637095a78cd"],["/tags/ip归属/index.html","e7cebcf7055461ff6dde86eed0beda37"],["/tags/linux/index.html","7059cb62dcf034658d53569353cee69d"],["/tags/nginx/index.html","535b7728ab001503adf86bdecd32a36b"],["/tags/pdf/index.html","735ca426c1991a8bf4b5c8800e0c685b"],["/tags/play/index.html","9db61a12194a00218bde2b4097a2fcaf"],["/tags/python/index.html","f4b18ae8d41207db5411d56cfdce79d8"],["/tags/serverless/index.html","4d126ae04524d4ba3a1451116d9e450e"],["/tags/smtp/index.html","63f357060a084597955fbf9df43515e2"],["/tags/source/index.html","debde278efe4f0b2741a8dc069809b77"],["/tags/sudo/index.html","565a6ef9e0d371fe75546ed10d36dc51"],["/tags/target/index.html","8228a67a6045d8a97c9193e9d20343fe"],["/tags/tinywow/index.html","5bcd9b7b22c3edc84bcc504c68e80304"],["/tags/usb/index.html","474922ccc6795e5f92cd3c1a4c5e4bc0"],["/tags/wifi/index.html","dd951309b6649d58b67957c43b151dff"],["/tags/zip/index.html","691e90cd3fd23485ddab9b1a01c3b3b7"],["/tags/下载/index.html","f157ca77f7893e4521e59bb24f7d28fe"],["/tags/个数/index.html","7ae241150a23f930a029a82afbd45a16"],["/tags/云搜/index.html","d518b80a2cb1eb83228edc21b26f2c32"],["/tags/云盘/index.html","71df85049fc3f93cc1ea63663288221c"],["/tags/代码/index.html","1c1fbdfbdf7bfa4597c147dd7192cbaf"],["/tags/免费/index.html","8c9d260e56efa3302ce5193b72b66148"],["/tags/函数/index.html","1ac31408d83702464ab41caaa5df580d"],["/tags/分配/index.html","5710680d59eadb4ee7df84804809c87e"],["/tags/删除图片/index.html","563fccd7b89da50452eaba5efb56ab1b"],["/tags/剪辑/index.html","41e7fa16e1dbb0998a80b0170e595713"],["/tags/压缩/index.html","21b0a869aa75d38910d767e3ec17a25b"],["/tags/变量/index.html","d329ea33c870183cfde5359a55517e00"],["/tags/同学/index.html","46582d6ffa25ed36c0b666612d4eab3d"],["/tags/命令/index.html","2b80b37b9510f9ae659ce08addddc7bd"],["/tags/商店/index.html","ed4d664bf4523c0b489b053032652540"],["/tags/图片/index.html","6ffff67af1993f0e704af22500e150eb"],["/tags/地址/index.html","69ce0c00d663d0769f0c8d70959f72ae"],["/tags/堵猫猫/index.html","5d606b02d4de6882be1d76c4cc77eaa1"],["/tags/处理/index.html","af7095afd97cf0fa748411f86098d946"],["/tags/子网掩码/index.html","fe5b29864d5c2d46a4ef622726da9b97"],["/tags/实用命令/index.html","6cd666e38a7d3f07da5281495648e386"],["/tags/密码/index.html","8785132ba75e853d82f21d9a824c05fd"],["/tags/小游戏/index.html","a231d0ee4e1091a1102c6d2c4d1989b4"],["/tags/小舒同学/index.html","a425506ac0f85532d6003b50e791d716"],["/tags/应用/index.html","285058503c9bd10f42894a5a4d90c49f"],["/tags/录制/index.html","2c6e2322dc1278aee37a43a8ef101df5"],["/tags/微信/index.html","e251d32bb638a46bf96ce294640c4f73"],["/tags/技巧/index.html","e7d506e2535c87eb84ee06338d3a07a8"],["/tags/授权/index.html","b801bd315716657db70ca82164e51ceb"],["/tags/插件/index.html","e9d63ffc55571b414232f0cffbf01dd4"],["/tags/搜索/index.html","b49774e88c95687a2f310595a60e645f"],["/tags/搜索引擎/index.html","299b40a89619df18ddef35443fedf0a3"],["/tags/操作/index.html","63b0a12087b9e9067146161aa086f258"],["/tags/收藏夹/index.html","cf564de33de5440551ff34fae5c38858"],["/tags/文件/index.html","f29e241ad6044b00091c5b8aba798ca6"],["/tags/新拟态/index.html","c072bc4f256455b8d6da553f5f0af3ef"],["/tags/无损/index.html","5d4dc5047046b7473de837fb390a03d1"],["/tags/智影/index.html","ecf24ac5d955365166c46a9e0c3f1c38"],["/tags/查看/index.html","ba601090a20f1c499b052118ac92c078"],["/tags/树莓/index.html","52372418b2912d498ccd5faee5d731f6"],["/tags/格式/index.html","5148f37a7cbc44ad7dc6d608b544567d"],["/tags/油猴插件/index.html","e0a7d5323f161dfe787b19712c3f93ff"],["/tags/流程/index.html","28e4fd14f21d10f094301bf4a2faad2e"],["/tags/清图/index.html","60e90b6bc686d633bce1e4afe972c817"],["/tags/源代码/index.html","46aec99509996fb84a1f16c4b58a80a6"],["/tags/生成/index.html","87c4a649708631dd8db456d5df29f893"],["/tags/知识产权/index.html","7b32e43d4f3419869102662a4afb1b53"],["/tags/硬盘/index.html","ea595b10be89770895e171d3bf181b81"],["/tags/程序/index.html","1bf81ce4f1c371a543ad371d04656bb7"],["/tags/空间/index.html","025499ba1c4ff4d85fb9ba4b84dfa7ac"],["/tags/站点生成神器/index.html","4797d1647cf7634f9d1d7b667b358239"],["/tags/素材/index.html","452d7fec5b4b6bd094f2bc296e529f8c"],["/tags/网盘/index.html","24386015229b03932573b8903e5192cd"],["/tags/网站/index.html","fed8792cc3711383582bcc8180971955"],["/tags/视频/index.html","f07b3076324208e44c6aac66b40b6129"],["/tags/资源/index.html","29eb8e760597e4c052585f3b2f82110c"],["/tags/转换/index.html","d150447857ca76dd852ee876c10a0594"],["/tags/软件/index.html","18c6854ed9ae15ab6e9f44aa8d89d589"],["/tags/邮箱/index.html","17c916eb64bab37b2417a0021f8be3e8"],["/tags/镜像/index.html","ae6c0fc58d2b2cfe2eb8397937348dea"],["/tags/长度/index.html","2d467bf23e32e67a3a0f4813250d0dd5"],["/tags/高性能网盘/index.html","d8544c7492c40ca4b05e38e9770fd7b7"],["/workbox-9dee487a.js","d7415e87425a75ab7e084f38d68538ce"]];
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
