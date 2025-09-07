/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8b5391b2ed66fb41c07cef4e61e38bce"],["/about/index.html","997ae6958245b788aa8075f62c6f694d"],["/archives/2006/08/index.html","54da73bb1969d413d89aa954fb14629a"],["/archives/2006/index.html","e77357977dcf45def64df7d37c4b330f"],["/archives/2021/03/index.html","8aeda75746bb783dcdfe1662376d021e"],["/archives/2021/08/index.html","cba6e7bb9b69526cf43ced916aaccccb"],["/archives/2021/index.html","b25c5a3938dacb4643c6b54c2b484a85"],["/archives/2022/05/index.html","c64b49cf4a4730c155c20c61a79c3b42"],["/archives/2022/05/page/2/index.html","11cf09ccd2b3ab1abd4a6eef0b328c77"],["/archives/2022/05/page/3/index.html","6fdc5e381722c678ea67952f6b61a4ad"],["/archives/2022/index.html","3a61e582ce7eaa4d485cb7fec63b72af"],["/archives/2022/page/2/index.html","dccbd4fdd8179a4be9864c359e3c1b88"],["/archives/2022/page/3/index.html","2c6fa2dadc5aa2642fee3ea00fd39349"],["/archives/2023/01/index.html","d848db5c3d95a46cf77372af974485f4"],["/archives/2023/index.html","8f27eaf994127da1b9c2562352634b43"],["/archives/2024/12/index.html","e6cb58e17209f3084d128804ee451d45"],["/archives/2024/index.html","246435a07ccce91221a8a98d85b40599"],["/archives/2025/05/index.html","d243b927847353b7088f7d22cffd245d"],["/archives/2025/09/index.html","4e744201c1bf215f67692fad7e81c307"],["/archives/2025/index.html","606189b5c9d801c6831fe93168f7e391"],["/archives/index.html","4452b461ddf89367d1bcc2039ca09ce9"],["/archives/page/2/index.html","77faabf6b818c0f9da1776207faad77e"],["/archives/page/3/index.html","e0a958308678af165fb02299c11ec728"],["/archives/page/4/index.html","e758da47b709ae9b9de4e082b01b32d4"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","59ba9bd0d5e8487b4d4f38fcbafda776"],["/categories/实用工具/index.html","6569388c02cec57eac6769f3c1242052"],["/categories/技巧分享/index.html","e3ad36b4c502c919da72c84925137d72"],["/categories/技术分享/index.html","460c67037576a62ac919f1497a9ea155"],["/categories/技术教程/index.html","8644df59ab44c84c1462347600229587"],["/categories/技术教程/page/2/index.html","cafa3d40ef1c6901080bea49bf4a5240"],["/categories/源码分享/index.html","189404f5c534f3a81339ce0b4c979927"],["/categories/福利活动/index.html","db9ea0c79338b3041b69cbfd7acf9a3d"],["/categories/网站推荐/index.html","c4d017e918abefa8197b5f57c3f213f3"],["/categories/网站推荐/page/2/index.html","b5e8deebf00ed0f959ef91af36694ae0"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","c8d0b96aade2e76ee38f07adeaeeea24"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","672b01bd8c29ffcd96cefa6da78fdece"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","56c7d7b52a88104a4e6899e9e3b3361d"],["/music/index.html","f7716f18c178a58ab715c30f674b6bb1"],["/page/2/index.html","979a9de1fb5f5084a03b7a9cfe936f87"],["/page/3/index.html","af1392eef2872ea310e7c273a4d8e17c"],["/page/4/index.html","43c5ee04773311f0af9033b56370b22b"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","970c20a42c44bab7abfd2255212a49ee"],["/posts/096db3c03b6e/index.html","5aeecfe35f0cc885ebe0ae2f21587b7b"],["/posts/1235535247cb/index.html","662bfeb52f75056460c0fd7ff25783b5"],["/posts/13b70ad2982c/index.html","45af46b574f308d3d3e52876fe704dac"],["/posts/15fa81012f63/index.html","3b93e3e4aebf2ee03a2bc24cc3c4684d"],["/posts/16e9387534a6/index.html","77a4eb24418d8fc42d437a761e225e7f"],["/posts/1ec0df688f03/index.html","a1054c266e7edb250b8ffe94ec77db16"],["/posts/2b7ac1a9709e/index.html","aed4c6605a516aac747fce30daef25f3"],["/posts/2bb24d491704/index.html","5349d6edb2de4b6e866a5c3eb8b45202"],["/posts/2c9261572067/index.html","1393758d5b63799ffc6a0a63396c6a3e"],["/posts/304408dfc52f/index.html","5b5cd0e527c18591c7400e8b076f1d68"],["/posts/41c16cb60b68/index.html","f5abd3a5364711b685057e9cec104c69"],["/posts/4358b00bc797/index.html","6f96f2a902a18f5498ee11428c92a39f"],["/posts/4acff0774207/index.html","10e31be94f497614a18bc6ea1eb184e5"],["/posts/4b6cb4514456/index.html","66a5131fa141a243f3e8b74dcb679a5d"],["/posts/6631458408e8/index.html","70768ac26ba3e35f50e8f527896b1e15"],["/posts/6cb2454df473/index.html","7c5b39f2b23bdbea89dba3ba592587c7"],["/posts/6f929ba7ef0a/index.html","abfe0469d60b09e1d933b80b3bc99a57"],["/posts/76dd1b500ee9/index.html","4ab5b8680f74df4de272d8a1ed025bd3"],["/posts/8ef6e275fcc9/index.html","4fc8d5c9777de3cc537169b46cfe17d0"],["/posts/94456e62e22c/index.html","b2dad647b01082513c9e3d998226f78b"],["/posts/9792de8b38a6/index.html","6c63ac0a83572c25c90d2295951b14e9"],["/posts/a84c927bae36/index.html","9e9fe6ce6392556fcf880b6d6d06a39d"],["/posts/ad5499059bd8/index.html","ea4783fe69a3556699c79dcf4e8bdfe2"],["/posts/b1a6e353d3b0/index.html","ae2bf6db6c3d97ff955a7de08b294bbc"],["/posts/b478f3198c73/index.html","e910fd276b7201ff3751b819b19aef8b"],["/posts/c0ae68f04a1c/index.html","06655e9117ff0987df9aa716b20f4eca"],["/posts/c821481d77c0/index.html","7a469cbc55077fd010649af99cbfc7b2"],["/posts/d1ded2bacbfc/index.html","d08d9bb1162d086c283453a10878cb89"],["/posts/d911ff6fb3e3/index.html","b43bd903dd94aef57321be97b3f47e6e"],["/posts/ebffabd07766/index.html","30c57a3b7f8c488bc3252517ea1008ae"],["/posts/edc724f3bf5b/index.html","670b6a40cebb7ad72413fcfd9df9aefa"],["/posts/f30c3df9c2fc/index.html","ee30467a3c8c0ed09a988ef476970732"],["/posts/fb79b38d6277/index.html","fd350d7827634881f359b47a438ab0e7"],["/service-worker.js","a8efaaeb95c9a962427fe1cb6c22f2ba"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","b4eb62b5755986acbd3095a50a5863eb"],["/tags/255-255-255-0/index.html","9c8e4aa6beae8992e2e8d2f5b33eaac6"],["/tags/BS架构/index.html","3d9647a3dd12312db06a7c8eace02aea"],["/tags/Chrome扩展/index.html","f2f183e441d867bdf10662ddbca8dc70"],["/tags/Docusaurus/index.html","5e2e282348400b59e448a8ce64a09556"],["/tags/Magiceraser/index.html","d9accb9d785628c9ff0e34f230c3b3ca"],["/tags/Neumorphism/index.html","1c11b68d868faf2250be0ea707e82dae"],["/tags/QQ加速/index.html","b253a3dbe015c09cd8e4f68f04de53b7"],["/tags/UptimeRobot/index.html","52e557a0cc74f5bf803a1f7f251ddfc9"],["/tags/Zepp-Life/index.html","8146f139136d98b34301d5a3a3962e34"],["/tags/css/index.html","b932c193a2655015f86dcc66f1500082"],["/tags/dns/index.html","d9d36daeb8139af3bf9b1145783fe5f7"],["/tags/docker/index.html","8bbf88f61c3868f3351af7b81d0268a7"],["/tags/ffmpeg/index.html","2c53214b41577ebf91c48ee3a7367403"],["/tags/github/index.html","c3533f84b46dc6c3e7942f607bc70c23"],["/tags/google/index.html","dcc738231e750977333f13c84dbe9fa4"],["/tags/hexo/index.html","4eeb81a45fd7aa3ae6a98137169f20d7"],["/tags/import/index.html","5c8f79003d5c882ffb0901732add971f"],["/tags/index.html","5ce47b371d4939cf75483e51439f40a0"],["/tags/ip归属/index.html","ddf9c35e1dd37528260db4b82bf24798"],["/tags/linux/index.html","137a278b9db9c847778738d05debc87d"],["/tags/nginx/index.html","6e32bcfe871889b743da8272d365f90a"],["/tags/pdf/index.html","6ba254cda7f56134140aa5babb9ae14e"],["/tags/play/index.html","4aade9cb1a2dfa66642df11d0631920d"],["/tags/python/index.html","e14a5badb711f31abef93dc0fbf689c3"],["/tags/serverless/index.html","c4b87a0af3f7050360277ed04012f768"],["/tags/smtp/index.html","08ddc35cc13790b3fe3a16963a1cd780"],["/tags/source/index.html","9ff4942da3933a8760e6bbbfd08033e9"],["/tags/sudo/index.html","fc23e6917ec40ec4c460ec733525358c"],["/tags/target/index.html","96dd93dd0736a694acce4c32cdb93550"],["/tags/tinywow/index.html","e04e26e90717a9ffa58eac12522b18cc"],["/tags/usb/index.html","75e792512b54ce7231f8214459b52a60"],["/tags/wifi/index.html","8df42255b36c8b601944857cf9c361b5"],["/tags/zip/index.html","472985015391d8a36fd25ab9a322879a"],["/tags/下载/index.html","7fc0d95ff3b65f31b7fa0b81b5d3c5e3"],["/tags/个数/index.html","72c54e4dce90d29f570f59c79af8e119"],["/tags/云原生构建/index.html","822a31588445df02e4b60dc661bb2366"],["/tags/云搜/index.html","4f898c23108001b6a591312f862948d7"],["/tags/云盘/index.html","04df3e5f8942931e324bb18b02b8aa52"],["/tags/代码/index.html","4e0861350ad5f51496b711ab6aeaba1a"],["/tags/免费/index.html","85253bb581751a052214586f27ea4723"],["/tags/函数/index.html","0b7a3e13a4bff562ec1b96816b21a7a4"],["/tags/分配/index.html","022ed3a1248d359c115bda9ea68a1e3f"],["/tags/删除图片/index.html","d9279c0f6a2da66b0d9c25dec1dd57d7"],["/tags/刷步数工具/index.html","b15816db589275759c3d113e9384aa14"],["/tags/剪辑/index.html","f4449535b58d596c3c6f9d9e5063b409"],["/tags/压缩/index.html","0344b6c5177640d592eef3d8d30ab061"],["/tags/变量/index.html","01d59ed012588eef7b86607487232452"],["/tags/同学/index.html","d314eea55d3929f128cfb5a8bd4d7f2e"],["/tags/命令/index.html","886f3a211cadb96d4ed8765e8ac90265"],["/tags/商店/index.html","e3c2cfbe4c1c34f75e06d160232b008f"],["/tags/图片/index.html","b7bbd9a6253c504a94558dfc4df49133"],["/tags/地址/index.html","bffc628012d887d92b28b57534703522"],["/tags/堵猫猫/index.html","b2fb1e54435f3ed909ceb4f932488a3f"],["/tags/处理/index.html","9b4d690a485a0c99116032176c45153d"],["/tags/子网掩码/index.html","794ad23c300e59b53725b1ee0da8d028"],["/tags/实用命令/index.html","0252b43f479ae978d41279e9633c3fcc"],["/tags/密码/index.html","933723a4124da22a7cf4293d7df7c29e"],["/tags/小游戏/index.html","c131afcd4e4ac7ce2544728d63363b6a"],["/tags/小舒同学/index.html","07bfdc10b251ab89cec156cbcc8abadf"],["/tags/工具/index.html","9bc361d168a36ee2771b83342181750e"],["/tags/应用/index.html","2c0f1d8ef7b1e29fbafd30f733e593f6"],["/tags/录制/index.html","50faa33f0042b8017e207750e35e52a8"],["/tags/微信/index.html","c59543264d3008bd21cc4275575cc302"],["/tags/微信运动/index.html","4f316b8089c8a6e1212c27e11463911f"],["/tags/技巧/index.html","c3c8f433aa9b60f1222a9f936175aaa9"],["/tags/招商银行/index.html","72cab9b4ca645d81326a021c8be7475c"],["/tags/授权/index.html","660dcab265224931293ba3e9b89ce5af"],["/tags/插件/index.html","e9c23433c06a2ac41c27b6b1b8185eb5"],["/tags/搜索/index.html","2fdad9120d0aa74699af1c5238ffebe9"],["/tags/搜索引擎/index.html","1f33a93fd6b4d179fab81f286dc5a490"],["/tags/操作/index.html","e8a9c15566021ee73e3f3550a09c76df"],["/tags/支付宝/index.html","60536c700e8e2a942ce3f63668665d18"],["/tags/收藏夹/index.html","d8177781c7479ffc594fe70744ccdab0"],["/tags/文件/index.html","e54e94d2b457f2755a4b318f3afbdeef"],["/tags/新拟态/index.html","f9f82b7dd7b48b2a92cdf4ae63da26f2"],["/tags/无损/index.html","a33ce069d17218dea645ec58731c2bd2"],["/tags/智影/index.html","f235df0c70d428d6e11abce8269323f2"],["/tags/查看/index.html","3a0a999950ed2a9eca696171e12470a2"],["/tags/树莓/index.html","90a6f29c8bc14c52b18bec288f283bc1"],["/tags/格式/index.html","66064ec0665e48b32d6277e0fc9473cb"],["/tags/油猴插件/index.html","46b328ce9ebdc66fa8c254f737563898"],["/tags/流程/index.html","ad0ca5778a8468bb691712cdebca3b20"],["/tags/清图/index.html","5c299881231cd2f7c1f95e5fe160a356"],["/tags/源代码/index.html","41f5b6b081b3dd675e5328fdd283855d"],["/tags/源码分享/index.html","9b4d6d3b6712cc012e4dc75493c0540b"],["/tags/生成/index.html","982a0c63babba8a1ebcc57b1231291bf"],["/tags/知识产权/index.html","8388011adeff5e77f6842c29668c93c5"],["/tags/硬盘/index.html","bf27583f40e34e38b0a36b5051ba9a13"],["/tags/程序/index.html","1ec1492d20636fc5a72b729ed4222784"],["/tags/空间/index.html","60a05bc6317718bd248fc65c9d6e51fb"],["/tags/站点生成神器/index.html","1503aca545b8378d52a735c4bccad8aa"],["/tags/站点监控面板/index.html","285c109371464ef404c4e80d1b665505"],["/tags/素材/index.html","c4680a1de2e8ba153fd122949356f21a"],["/tags/网盘/index.html","b1ddd14bb1e1321d22f5e6330faac85a"],["/tags/网站/index.html","79194a622887a13bc762ffe12c06da43"],["/tags/腾讯CNB/index.html","94c3b87dc0286b911c3610d126b294e8"],["/tags/视频/index.html","caab8756e2ae808796711ac7e5bbba62"],["/tags/资源/index.html","f02f2a9c8de010bbe4998e6cb891671e"],["/tags/转换/index.html","c3f188af9866d88bff1db108a386c8d7"],["/tags/软件/index.html","1796ba3fe82736da70845d035caf2673"],["/tags/运动步数/index.html","2cc7e4a3e0659076b22953a7be56ba11"],["/tags/邮箱/index.html","63b099ff53142020392c7486be42a000"],["/tags/镜像/index.html","adc2351d06d097d6945fb5b90ed9e4de"],["/tags/长度/index.html","bcff4b0159dc0076e7321bba0f8399f4"],["/tags/高性能网盘/index.html","5af4bdbb26341fcbac7a5ea0cc79bb7d"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
