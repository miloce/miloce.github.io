/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","604a71a942da957b7ceeb6b72bad5c1d"],["/about/index.html","e9d1f99f6f1dd0455ea257aac27eeeaf"],["/archives/2006/08/index.html","db9cf499f7f072a820a8a9fbf355e7f1"],["/archives/2006/index.html","0867166fcb408a210c0223109bccde99"],["/archives/2021/03/index.html","474a7ca81adec36f7204d34e4c8a37c5"],["/archives/2021/08/index.html","eb88ff6c56e22769be8242fe3fbbceba"],["/archives/2021/index.html","c0ba150806189dce85c3d86cc0f8ae53"],["/archives/2022/05/index.html","ef3d6b7df3ba67ee2cbb710e5b7efc11"],["/archives/2022/05/page/2/index.html","d548d65f767e6d48ab207eedc2884cff"],["/archives/2022/05/page/3/index.html","df44bcd8ced58655d08900ab74631512"],["/archives/2022/index.html","5237fb721bf08e0337215eaa7d0c6f14"],["/archives/2022/page/2/index.html","cb6928fe8b214faab96be673d7e8fbad"],["/archives/2022/page/3/index.html","4946cd584831e6b9fe9e3a02e7f5f26e"],["/archives/2023/01/index.html","afdd2587032d67377a3506659a0dcbcb"],["/archives/2023/index.html","d23eaed67d06164320b6ab4c458a718f"],["/archives/2024/12/index.html","ef4440b7cea9c1ae6a8e3998e758c605"],["/archives/2024/index.html","41b51c268b3dbe2c2fb870d3f58ea072"],["/archives/2025/05/index.html","0384c6840708ed594ea0c7f9758df97d"],["/archives/2025/09/index.html","8ad11858c15ef5bfc8a461eea4c8d92c"],["/archives/2025/index.html","c54d2706b55ba88d0965967d27507f3b"],["/archives/index.html","5dbba37379e527c5c3cf25b33731be19"],["/archives/page/2/index.html","f9e194f127790201847b5c0f954cbe58"],["/archives/page/3/index.html","734fe9d48c8ee1e9e2d63071873f29c3"],["/archives/page/4/index.html","b8e11740d672d7e9923e7298e8da01a9"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","412e155293df7ec37688ad946828b328"],["/categories/实用工具/index.html","88089a4c0ee6cd6b3725d887d83f6cc1"],["/categories/技巧分享/index.html","245f9aa7e7a812d37794fda0802515e0"],["/categories/技术分享/index.html","7200574e569281bdb1368435f66b0c02"],["/categories/技术教程/index.html","b4890ca5f77e634f674a0ba406edd878"],["/categories/技术教程/page/2/index.html","3419cf4ddf219f70678e0f6d331adb8e"],["/categories/源码分享/index.html","1911be6bbe2d87786d6f934210457634"],["/categories/福利活动/index.html","d461abeabdca3e3e9866a5f4abb36f94"],["/categories/网站推荐/index.html","e63d1153c7d645980feea6bf2b3c1fc3"],["/categories/网站推荐/page/2/index.html","a9d11abc669eae4b6332df12e3ed6a67"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","e01677299f2aa6e9f4cbdfd67077a939"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","f8a4095584a66610e6843aafe813d1d1"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","29d6858e04c8554334593faec662e5a0"],["/music/index.html","c217fc6ca05856c3adf49df8320255bf"],["/page/2/index.html","8820462de9ab2b2626a46424a739a1f7"],["/page/3/index.html","ec762badfeefe31f8801fe0a7e8e51c1"],["/page/4/index.html","58aa25514a0f0855eae98bde329edc63"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","af94148f3f9adb1a2f360ee02ad5e466"],["/posts/096db3c03b6e/index.html","c5372735871c76a604f4adece1730c36"],["/posts/1235535247cb/index.html","3ab291205009e517ba49dc38ccb91c7c"],["/posts/13b70ad2982c/index.html","a5d1ad15104a7fdf8e43f4521bc4d749"],["/posts/15fa81012f63/index.html","a8cb705acb38f0fcd99d1eaa435e8708"],["/posts/1ec0df688f03/index.html","3fe8cdf80b62f12e8c8d6f5d3b88fc4e"],["/posts/2b7ac1a9709e/index.html","e1801b2040d59f7c747af02b7ca32d0d"],["/posts/2bb24d491704/index.html","20d3d6e58c2f25b8f34f276e4c2829f2"],["/posts/2c9261572067/index.html","2fb9a2e322e889791540a2abc6f9e58d"],["/posts/304408dfc52f/index.html","81622e64593f5737404d8cbdd173877c"],["/posts/41c16cb60b68/index.html","da4f41314f81d4cdb24719c6a48772b3"],["/posts/4358b00bc797/index.html","320799b9e36f38f76d07856161def4d1"],["/posts/4acff0774207/index.html","9aaf40d70663765eae9f83cc3b0a1b8a"],["/posts/4b6cb4514456/index.html","e54bd6bc94fa270fa3687f366e098615"],["/posts/6631458408e8/index.html","1eea13e15c7f61ef0d0e06625bd6a8e1"],["/posts/6cb2454df473/index.html","6f5991ae6281245b7af9f422f81fd501"],["/posts/6f929ba7ef0a/index.html","f8901ef63b081bac0269bb2b515961a9"],["/posts/76dd1b500ee9/index.html","19db2fe634d9da4c4ff6c1d063dc1ee7"],["/posts/8ef6e275fcc9/index.html","f5d7f553e6980ee3232fa7127f225513"],["/posts/94456e62e22c/index.html","2c976c96088321545882888bef0195c8"],["/posts/9792de8b38a6/index.html","0b6d0816c714236c8f668ea104ea2fe7"],["/posts/9d119b73dd2a/cmb-service-account.png","a679b24f5db960401ddcb612610e59fd"],["/posts/9d119b73dd2a/index.html","94ba19e906fed27f1402b91113357201"],["/posts/9d119b73dd2a/jc.jpg","39250f60d65c34b48684bdc073457278"],["/posts/a84c927bae36/index.html","95294629b8174f19182faf30d28d4807"],["/posts/ad5499059bd8/index.html","dbf8e6b4a8ea95d009efc17abbad09b8"],["/posts/b1a6e353d3b0/index.html","7a583412ea23e9c02c353ec878f85b2f"],["/posts/b478f3198c73/index.html","000feaa2920b4d593a697ff36a41fa13"],["/posts/c0ae68f04a1c/index.html","b3e9962ef21b9e8a3dbd8945f1625c38"],["/posts/c821481d77c0/index.html","833805113dffd1cff6fb0d4c6ee99bdf"],["/posts/d1ded2bacbfc/index.html","28fae80c86503caa8913308153b5df16"],["/posts/d911ff6fb3e3/index.html","ac0a4e159c348c6ae134971a3bd366aa"],["/posts/ebffabd07766/index.html","a2450a8a35685a71bdd310ebaab02c5e"],["/posts/edc724f3bf5b/index.html","b6875d72ba5197fb06fba6dbd92f1d8c"],["/posts/f30c3df9c2fc/index.html","c217444de92eaf7719ba8727738c464d"],["/posts/fb79b38d6277/index.html","865e30fa2bc3a874e95e28f120ee84c8"],["/service-worker.js","86a6e20f4200f98c46c6dcb7bc64351b"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","2c09a5c41c6da9076eecbf155aa74954"],["/tags/255-255-255-0/index.html","e546e854418d3d00f94fabb07d6e76b7"],["/tags/BS架构/index.html","c815de22600fc0d6ccd2ead10bdd007e"],["/tags/Chrome扩展/index.html","43bb2a9b04fa8ff7bb3aacbe76a809c8"],["/tags/Docusaurus/index.html","510d9845b4544deeff708817d64f603d"],["/tags/Magiceraser/index.html","e9a6e6551a46d3a9a22333461cb277f7"],["/tags/Neumorphism/index.html","abf736963325fdc3c5cfef6b1c43d2cc"],["/tags/QQ加速/index.html","2996ca0c41a0c87ec2db28fdb19a79a1"],["/tags/UptimeRobot/index.html","0418ba182024a109bba9946bc395dc96"],["/tags/Zepp-Life/index.html","b24afc66bbde599bbc69fefa25b96784"],["/tags/css/index.html","5d8a42b5b7ff9f51d791f8895e635b50"],["/tags/dns/index.html","c7a439378fff0dea4b3dbbede7259a03"],["/tags/docker/index.html","f9238104cd8902c3dff50dc10bb13c50"],["/tags/ffmpeg/index.html","d8a04d55485870cca5f5000ce88cf7a0"],["/tags/github/index.html","ce0aa99f4ae03aa93b344ac1f8bc23f6"],["/tags/google/index.html","ef237f81847fd18ad8ce1dc83b460ae8"],["/tags/hexo/index.html","f30611887d8aa22ba5ee49994a891f46"],["/tags/import/index.html","347e825dea63c98307d17847801b7898"],["/tags/index.html","a3a90e4f2ae24cbf2eb232a6a62ea852"],["/tags/ip归属/index.html","98be4bab9d63a68acb6a8b5704046f21"],["/tags/linux/index.html","9242563fb17ecbdd9ccaed22122d8a1a"],["/tags/nginx/index.html","577814ab17bb959bee98a4087b5b21a3"],["/tags/pdf/index.html","11fd205713845ba67cd64d30e4464070"],["/tags/play/index.html","513a072a67824c7c9f384fbb2df601a7"],["/tags/python/index.html","89fc4cb5c25e9ed9a010652a098f80d6"],["/tags/serverless/index.html","d35f63b17b8d54a68104e50116c25c9a"],["/tags/smtp/index.html","cb19fa108298bf7c7844ab5a2d0c87f4"],["/tags/source/index.html","6bf15db857595692584a5a932316fb2d"],["/tags/sudo/index.html","2c0c59e887f4a21b4841820cb81f41f0"],["/tags/target/index.html","afe691c0a13c8f9434bfc8e5020fa55a"],["/tags/tinywow/index.html","237d1a388917110bf3978cabe3e955fb"],["/tags/usb/index.html","a55ec2ee040c60f7bdfa9fb3701e1c09"],["/tags/wifi/index.html","3d97c93d14ac5ed66acdd7844d733cd0"],["/tags/zip/index.html","74c9cc505c8ee74d68cf0093ff3641a5"],["/tags/下载/index.html","8ae3bdd4713ef3b56395d9270748c47b"],["/tags/个数/index.html","347a16ed50e7b0adb7f27fa33e4057b9"],["/tags/云原生构建/index.html","1e39082d2fb5bb5a0b82c205a76abd8d"],["/tags/云搜/index.html","515e6a2aeb0b24c817346102ddbeb1da"],["/tags/云盘/index.html","14a8e80c62cd8e3228611b9dc4ad74cd"],["/tags/代码/index.html","76c3ac60e0f19027a7b4c20510493698"],["/tags/免费/index.html","869536b31b7dcfb7307b6c7a6a797076"],["/tags/函数/index.html","0b2d0ce5a7c7e9d599b0f96e19d6c4fd"],["/tags/分配/index.html","2380caad40c84b5e81348e3acbec79e4"],["/tags/删除图片/index.html","8eed90dfaaa32fbb3d2a16948fab1e5e"],["/tags/刷步数工具/index.html","f5d6df9e8370f1eb6e3a9287f16bc017"],["/tags/剪辑/index.html","c3948e9febcac462fa7de6e2a1940040"],["/tags/压缩/index.html","fae716282f3963c0b0be54ce61c96b7a"],["/tags/变量/index.html","3d90a25bc817aa335e800b1dc85f2b41"],["/tags/同学/index.html","88a1584f66300afa3dd64a53c1c5e24e"],["/tags/命令/index.html","ec6ba2749d34f91008f5ac417781ada3"],["/tags/商店/index.html","049b297372a585f499b97a4652e8746c"],["/tags/图片/index.html","82892041d5da3dd46b711b645b216ee0"],["/tags/地址/index.html","ddb8901dc576f06d1a664d5afb1d5a54"],["/tags/堵猫猫/index.html","e09429ba4d08628fa9b30979c00b8d21"],["/tags/处理/index.html","a241bd4d135e41ab63af159dd23039d2"],["/tags/子网掩码/index.html","9509c61f02b7f1ea01c4962d7662b269"],["/tags/实用命令/index.html","c17815aa97eb76aa6368f72c21961a6e"],["/tags/密码/index.html","cd351426c5368081deea2e25f9f8b69c"],["/tags/小游戏/index.html","3008581edaeeabff2dca933c324614c9"],["/tags/小舒同学/index.html","8c0e69c961e0179eb12cf9ba45ac5f1b"],["/tags/工具/index.html","103f9aafecced620e4c46b846f221bf5"],["/tags/应用/index.html","6969e831eb0d7cee5ce538a317ab2c3a"],["/tags/录制/index.html","86d0a3df08017ec473160044eeabf3f8"],["/tags/微信/index.html","1e1484dc7085b2eb3d990a2bae5fefd4"],["/tags/微信运动/index.html","d27b150d0063a5bb91ffe2d08fb8e1e1"],["/tags/技巧/index.html","85070f8a1ae2c36fc1fdbeaa05d37c76"],["/tags/招商银行/index.html","b82d6b71eff19982286827418de46090"],["/tags/授权/index.html","7494a2b9ea40ee5175430d2ae110fa6d"],["/tags/插件/index.html","ea6df3fedd73dcc2eb773e3962030cf2"],["/tags/搜索/index.html","e2705ae302757edcb553001def1ae229"],["/tags/搜索引擎/index.html","d3af2e87b28112c28e2036cc75ec8453"],["/tags/操作/index.html","e7883bbda4d3a616a304322ec8f2d60a"],["/tags/支付宝/index.html","9f83af4ec08db02065b81659e7150edb"],["/tags/收藏夹/index.html","e9f4f4e0b5965968f23c4646553299f5"],["/tags/文件/index.html","9d3ab778e312e51e45c92705c2d7a838"],["/tags/新拟态/index.html","ef4aa96d39833b1755642bd6f9f1002b"],["/tags/无损/index.html","9bbaaf21256f17f6f7955dc0a7a8193f"],["/tags/智影/index.html","7a4a5157d7841d7571684587aee40f08"],["/tags/查看/index.html","2d5b4628bf3bfc5eaa7d9c094da66325"],["/tags/树莓/index.html","50f715feb052f46abceb8bc7ad953b4c"],["/tags/格式/index.html","caf664b6e50f04d341db86254c2be801"],["/tags/油猴插件/index.html","97b499378a3a49e361a3d6ee249f928c"],["/tags/流程/index.html","99b09c9787b66d8dda13ce6f853a6240"],["/tags/清图/index.html","2d2bc7d6460bc1184ae33653481a075e"],["/tags/源代码/index.html","426ffcc43a0050e1b751f25d58277c09"],["/tags/源码分享/index.html","6ee683a598bb5ea9c0dcd0e87d2e2149"],["/tags/生成/index.html","6f4fbc781580b7a353bef04a7de2b072"],["/tags/知识产权/index.html","11c59e88600cc9af13e643a6b19e0bee"],["/tags/硬盘/index.html","d9cd6ba67a0a260ef968383b97f02fbc"],["/tags/程序/index.html","a11eef452e9ae75ff3ea8b9b91f09229"],["/tags/空间/index.html","efa67ee5b41de189a47f44300cc5a05b"],["/tags/站点生成神器/index.html","35cbc4b2044e5639c8e3b2e83911702c"],["/tags/站点监控面板/index.html","af6e668134434dc973cc63427945f60a"],["/tags/素材/index.html","7f6b08a02decbad0b57e5903ee867d7c"],["/tags/网盘/index.html","8277ce0062d02d1ab44d8e2f3e912259"],["/tags/网站/index.html","460990d361faa134fe221d6143f50d13"],["/tags/腾讯CNB/index.html","e001598b14812474b9d77b30f1d53c1d"],["/tags/视频/index.html","349324aa4bbe3982d41c527cbc69243d"],["/tags/资源/index.html","504095321deb1f2a2b589378341a81b7"],["/tags/转换/index.html","f69b48a618860e937a6ebce4a2aabb4d"],["/tags/软件/index.html","178a347904d7607dd2e6e44a7b632d23"],["/tags/运动步数/index.html","9ecaa3d0423bd077bc8ec53708dc3d09"],["/tags/邮箱/index.html","8d2d90391f8519f3d51ce35402dfdd0a"],["/tags/镜像/index.html","9aa4a58165bed4b250cff5a9ffae6201"],["/tags/长度/index.html","daceb8143acb4509fde3678aa9a2641d"],["/tags/高性能网盘/index.html","07fc2e8b5dd1ccd896fdfa6138bfc45c"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
