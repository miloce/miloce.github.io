/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8e7170170e6490611ca662543a5c9ce8"],["/about/index.html","9959ea6c54149e5cbe9a604b5b230795"],["/archives/2006/08/index.html","47bca92a5d22f5f770c83b28c3ffe991"],["/archives/2006/index.html","d25b76482a898783480a638e8971cad4"],["/archives/2021/03/index.html","fed6fe021e30a52f7e942bfe1bbd29d6"],["/archives/2021/08/index.html","005276eb457a8f6b240600464ddd6049"],["/archives/2021/index.html","91835d216c8b4182c6b9e61b6a9b01b9"],["/archives/2022/05/index.html","0b6257e983a219ee42d5e09cff18608f"],["/archives/2022/05/page/2/index.html","df5ce764bd955f1418124533de717404"],["/archives/2022/05/page/3/index.html","c51b40b2acfc8be7c082fc219074a3d0"],["/archives/2022/index.html","ab013765541b8e0eb7bea6b114c3fe46"],["/archives/2022/page/2/index.html","037936bb4b3292889de297b55f7abc86"],["/archives/2022/page/3/index.html","8b5cfc721d6f620d35a9ff5c64dbfe93"],["/archives/2023/01/index.html","8561ad96df9931f104057bd6d9864cb9"],["/archives/2023/index.html","92fb390afdade8c6220618c7e072c0dd"],["/archives/2024/12/index.html","f57b01fdc103965b0966f4d290ca30d9"],["/archives/2024/index.html","908f852e25fbc9c73543871f148e3746"],["/archives/2025/05/index.html","ada130d70a7cd81ba048df263726d4ff"],["/archives/2025/09/index.html","00352843dbf52389d93cfcf27ad15dc2"],["/archives/2025/index.html","3fa13484406747875b9544c0c3f1a21d"],["/archives/index.html","eb195eb974169820b365cc6ef3678031"],["/archives/page/2/index.html","2104405f638a53de2cfb1b60ca8d44a2"],["/archives/page/3/index.html","7854128c1cd888ca9db612157c2276f3"],["/archives/page/4/index.html","cf3528b3af90fdeca496437e32e07f40"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","755afe95f70bcae02cf757e5f80b66bd"],["/categories/分享/index.html","8a6cdf92e107fff82d2c209f57c3b5cc"],["/categories/实用工具/index.html","99a1d123471a51b1e476e540807a1159"],["/categories/技巧分享/index.html","5a62f5bc34b3c73ae02284196a170abd"],["/categories/技术分享/index.html","1058f1e60e2267a339bddd81a2aec4a5"],["/categories/技术教程/index.html","2a9139d169d3c4e9d31588ac4464584d"],["/categories/技术教程/page/2/index.html","1ab98bbe6038cc55f7c92b871a0f8bf3"],["/categories/源码分享/index.html","4494e29fc5dbe04dd22e2fc83f55dc9e"],["/categories/福利活动/index.html","ff7555d4a4565ea6b30d41e9cbfc5e53"],["/categories/网站推荐/index.html","76208e9a9e78f893a4e04894d22ec48d"],["/categories/网站推荐/page/2/index.html","cbde190a6c23041deb9e662e4470cf0a"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","f82e0b6b8a2b1f1e3955da3bc4653ea5"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","4aed1c9c8709314c673c53acab043f78"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","4d9409c45bc2909164ada34e294a1e83"],["/music/index.html","01cfe50adfa741347da90bce420fd32b"],["/page/2/index.html","0976a699b7604496937442daf2ab8675"],["/page/3/index.html","45b1a39522622b88ba683b8262c867a7"],["/page/4/index.html","902f91dbbe207da7f8a4bdcc3c2941d4"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","a377055fbdef92dc23a4a61817759c94"],["/posts/096db3c03b6e/index.html","1d27ea11df67c7c63556aff4f717b8a9"],["/posts/1235535247cb/index.html","52ae901459f196f18e8120989cf96f93"],["/posts/13b70ad2982c/index.html","65b8a36f90eee40c6df029b0b7b0601f"],["/posts/15fa81012f63/index.html","4c97c4b0eea995ac6e704ed4fbf56b60"],["/posts/1ec0df688f03/index.html","cd761fc710ba73de20922c2cc9b52384"],["/posts/2b7ac1a9709e/index.html","e758cc991eeca1b39c9815780c7c2170"],["/posts/2bb24d491704/index.html","87b306815673acb77e6c859b26294bad"],["/posts/2c9261572067/index.html","6949d482b546d1d470acd8418feeee6b"],["/posts/304408dfc52f/index.html","0fd77aa0f1aaf8f2013bb10095a5b8b3"],["/posts/311ae06fbc6f/index.html","eba3c6e24c4bca7118a13e89806147a2"],["/posts/41c16cb60b68/index.html","be34bdb938f6bae15fafd5d47f1adfe9"],["/posts/4358b00bc797/index.html","0f9fbc46c0eaef967d2a1bcd4781c4c3"],["/posts/4acff0774207/index.html","0ea816741ee826f954f42d949e5f88b7"],["/posts/4b6cb4514456/index.html","afc2fb728400eeb43e549fe0d5deb48b"],["/posts/61d1b897dcb0/index.html","d83a760d880e987d5ee760ec1fdd5f18"],["/posts/6631458408e8/index.html","58f104f2b02fcb4b18ecac1e20ac79c4"],["/posts/6cb2454df473/index.html","d143822a8060d4b3095d1760d661bb57"],["/posts/6f929ba7ef0a/index.html","971aa999480e631aaf62faae7c46d9dc"],["/posts/76dd1b500ee9/index.html","d3222cda83c04c3c790d7ffc2b757b4b"],["/posts/8ef6e275fcc9/index.html","0ab8566be33a47f1a9e98f4c4015bb4f"],["/posts/94456e62e22c/index.html","3f457985752fba7549f87c4aafde8056"],["/posts/9792de8b38a6/index.html","fb3037dfa96028a4abb1bcd39d78f05e"],["/posts/a84c927bae36/index.html","d5c1bac69f1fa56e6845cb2b3cce4a91"],["/posts/ad5499059bd8/index.html","66a5a25110e0af7e95b7ef0922c272ac"],["/posts/b1a6e353d3b0/index.html","a5f47fa71bb7248aefec29495aded657"],["/posts/b478f3198c73/index.html","c8a6d1bacab733c46bd8f7f4414f7180"],["/posts/c0ae68f04a1c/index.html","d13cd5d341f34cad79ecb37141f2af14"],["/posts/c821481d77c0/index.html","7c025862e84508b8db46149c77cc1938"],["/posts/d1ded2bacbfc/index.html","c3f11b0575ea8d495ce1aa5f56b0013d"],["/posts/d911ff6fb3e3/index.html","e6ac2d3b6ea6f3278abd1e102dfb78d5"],["/posts/ebffabd07766/index.html","912711d641abcb9b24282b2290d292e9"],["/posts/edc724f3bf5b/index.html","9e64ef5c27896c751df5c79523eaee3d"],["/posts/f30c3df9c2fc/index.html","60427b34a98c2dde76d84bb38384405a"],["/posts/fb79b38d6277/index.html","9525d69a4872ddb86f506b4355809a51"],["/service-worker.js","0ab7e0006a4d8535aa61f82d6a61012f"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","0ee3dafdfae1b02dca8faa56c95c94f9"],["/tags/255-255-255-0/index.html","db514e004fbecff8d8fcfa7ce23e0a85"],["/tags/BS架构/index.html","376c9cc4ebf442e91a1536bb48eb501d"],["/tags/Chrome扩展/index.html","868e81530db00269c39b50c2dcfd85dd"],["/tags/Docusaurus/index.html","f4095176a6a43e15a1773700d5d1e482"],["/tags/Magiceraser/index.html","02e9ad663be19800301eef059e84d58b"],["/tags/Neumorphism/index.html","5c81bea8f04a8f3f5caf747aef6fc3a2"],["/tags/QQ加速/index.html","e3f21e876a288bccb2b7a6d3b132f283"],["/tags/UptimeRobot/index.html","96628f3ef1b728068530547fc91cb52c"],["/tags/Zepp-Life/index.html","8041a97644fde80156f0e5e2d6697774"],["/tags/css/index.html","424ddb734c4fbb6e5f30f4ec3fd59ee3"],["/tags/dns/index.html","949d914e227e3a7629b6d98ecc4a9dc0"],["/tags/docker/index.html","03658ca886c3adff578ae3bb9781f7db"],["/tags/ffmpeg/index.html","a327169adc1e1b038a1491157e0c6fb9"],["/tags/github/index.html","0fbb6c0aec474570a3163b6416ec4649"],["/tags/google/index.html","0f677950e91b4e49acfb4e0c683383e7"],["/tags/hexo/index.html","e94449a82e730a64eb50bb77d9b88003"],["/tags/import/index.html","5740ec0ca532b1fbf461297e3f6f697c"],["/tags/index.html","9f5b64b2d8b2d91794d927337d4c65f2"],["/tags/ip归属/index.html","cd760144ee0c96e7e6b5880a54ae3373"],["/tags/linux/index.html","d9adac611ed9fe066ad9996db10c44a6"],["/tags/nginx/index.html","99c3ac1d493e420c537fd2ec01074d0a"],["/tags/pdf/index.html","1820973e0aea1c7d753719eb301239fb"],["/tags/play/index.html","ed8e3d5efbbeae50aadaeca55d17ad76"],["/tags/python/index.html","263f30e2ca75a72634f77c7000505d7f"],["/tags/serverless/index.html","36765cd942bb4bcc6889d6bd1a57af27"],["/tags/smtp/index.html","fdfbfb8bad0756acf093e60dd8603f32"],["/tags/source/index.html","72dc76ffe69e3489173a3eaab38b01b6"],["/tags/sudo/index.html","a22a964fa7422a65dc88f8366f06c8ae"],["/tags/target/index.html","1250a7e6d723f8ba33d70df24d1154ca"],["/tags/tinywow/index.html","a62bd82cfe6bf04b258bbc1d023a2a89"],["/tags/usb/index.html","c42d8a41eae448b0245b77f4c4baf160"],["/tags/wifi/index.html","d7f6b01c04595267ed639050941d1dc6"],["/tags/zip/index.html","8667ec27a60fe2f9ea0493f5b7711034"],["/tags/下载/index.html","4347e3fbcfb19b6c7c6c3625b6bcd44b"],["/tags/个数/index.html","cf10f2ac964743a885648102497d791e"],["/tags/云原生构建/index.html","853fae860ef5735de3158e78989ee6fa"],["/tags/云搜/index.html","e761cb9789dffcbfcc5edc03393f185c"],["/tags/云盘/index.html","94e5acb8708abafadba246cff555d7f5"],["/tags/代码/index.html","9c8b22fe42029f7a1f33825cec12ae0e"],["/tags/免费/index.html","34485d4a1409de4a7306829ffda82bc5"],["/tags/函数/index.html","78e28ed279e89426b61dc369d459ac7c"],["/tags/分配/index.html","8f3edd29427d3baa36631ee372b5ca99"],["/tags/删除图片/index.html","db01731149a21a91f9a43b43f721d3c7"],["/tags/刷步数/index.html","93bda950ec91507606fd1da7ecf1ae74"],["/tags/刷步数工具/index.html","622dd0474f9f37ac91353d054e8f6ea5"],["/tags/剪辑/index.html","042496f35e51fe3e5eb5908e06148448"],["/tags/压缩/index.html","555c269c71f51d7912c1cdf9ac4ae82a"],["/tags/变量/index.html","327fb34e377dcad5aef72b2fb04a26a1"],["/tags/同学/index.html","e9ef5a2431526c363349a167f25bcf31"],["/tags/命令/index.html","66f849ee76db9ce220bd7f2f21844c21"],["/tags/商店/index.html","98258d5d8c6137afb6f9e6c3cd416e4b"],["/tags/图片/index.html","ec5aae4d33e4f3b2ac67a0b46d0fbb47"],["/tags/地址/index.html","9326e6531b7068b623e2800d495452cb"],["/tags/堵猫猫/index.html","98d27ac8029c1a61a3e4c0f33ac7e3cf"],["/tags/处理/index.html","d7ccbd1a30fc97e9291a5a397e797ae5"],["/tags/子网掩码/index.html","e7222a79193c34b06b88ab1a342ca4ba"],["/tags/实用命令/index.html","609f7c381504eb9e948ed22f29a1fbec"],["/tags/密码/index.html","5904efccfca2684a750092dc99959883"],["/tags/小游戏/index.html","87f107287fe342c162bf6ba4d2ab51a5"],["/tags/小舒同学/index.html","d57e5a942d439ffb8a30bd81e74eeb53"],["/tags/工具/index.html","d58339468b6f27f57f9bf9a8e420686a"],["/tags/应用/index.html","2dcf820c1937a24a2cb56d2c998960fc"],["/tags/录制/index.html","d5865fe32df5a1f28c6b3f0d4c5031cd"],["/tags/微信/index.html","54a2ae82947ee917eaff6dedbcf052fa"],["/tags/微信运动/index.html","cd4627d6ea169d519eab30d1423df19a"],["/tags/技巧/index.html","a1b3c4ee9274b9473de04d8c4d1603d8"],["/tags/技术/index.html","82853e75f8db30ab2dafdcd028645989"],["/tags/招商银行/index.html","59dc07a31f4dd82abda9f5f81cec55ab"],["/tags/授权/index.html","ed265e4f33c9ffd1222c8699e00948f2"],["/tags/插件/index.html","ac58078c4cbfa1408ad08fe623921bb6"],["/tags/搜索/index.html","5b4cb521a9f8bbc493777a5b748fdf5c"],["/tags/搜索引擎/index.html","f7df6f6a953bbfeede9b6e29bb023171"],["/tags/操作/index.html","d75c8bb207763e42b7bd7bf03e5c79eb"],["/tags/支付宝/index.html","4dd4dbe2ee26981a40dd97008039e7e8"],["/tags/收藏夹/index.html","a9965cb734d6d8ea63b35b6fb8cb13e8"],["/tags/教程分享/index.html","202a1f4d9dff8fe63b95102149bc9561"],["/tags/文件/index.html","1ee121a1aa8e3763dff9a39f967e35b8"],["/tags/新拟态/index.html","cff22cc880e240416c3c466d56930971"],["/tags/无损/index.html","41306ec085b844072c06d26aa43a9137"],["/tags/智影/index.html","acf7c16f6b4fb404f08dc14589275760"],["/tags/查看/index.html","72a1b77aee8aef690858ca7cb38169bf"],["/tags/树莓/index.html","000ba99fb75d1bf6032b1a8ad9d8ed9f"],["/tags/格式/index.html","ce0e4d60ae1fa5c0090df1ded5b39cf6"],["/tags/油猴插件/index.html","eb6d768c0e2fa980dc74dd3a35ae363e"],["/tags/流程/index.html","ed2a9a98ea3703dc930e29545bdfc428"],["/tags/清图/index.html","2bcd409b29a69fabfe14120e062066a6"],["/tags/源代码/index.html","d87c492a46c43b2dbbdcd647201e0f43"],["/tags/源码分享/index.html","bbf1d9c12883e6fc5246c15dc7cf4205"],["/tags/生成/index.html","b5ab3af71923c2c16cf68f0dc154bff3"],["/tags/知识产权/index.html","3a2bca35ff49dc46c84cfd7e32ea7664"],["/tags/硬盘/index.html","849fd11b76f41353e8c7e7ca55e9a558"],["/tags/程序/index.html","6cd842bca24938402ff747875d006d38"],["/tags/空间/index.html","722099d74bbae1cf4d95aa7badd68c30"],["/tags/站点生成神器/index.html","60dea2a58e853fdd2a0a5a6033a9f107"],["/tags/站点监控面板/index.html","5a5c97fa55130bb55f659ff7fdeef90f"],["/tags/素材/index.html","35201e5905354d283c32c2c3dd311ebf"],["/tags/网盘/index.html","96345ac5c9b6474535a2c13d67f11a31"],["/tags/网站/index.html","29d2720d419240046c5f9465ac083a7f"],["/tags/腾讯CNB/index.html","48ec76ce4492582145d9b78dfb1c2249"],["/tags/视频/index.html","0f02cebfcee5f102a6bb41152d24cb93"],["/tags/资源/index.html","e4f7e3b3eb0e6a6a9cc0e73e09458e65"],["/tags/转换/index.html","27bd0d8da65e308264a77b0b1d83cbf9"],["/tags/软件/index.html","8cf2d440f27e2cce15791992b77d0bf3"],["/tags/运动步数/index.html","9d3b8cf1cdf6aea6a9fada8caf29a27c"],["/tags/邮箱/index.html","f0591fc26f77a4e68832e66aa083bb17"],["/tags/镜像/index.html","d43a204fdd3fcdff23780780f6846b2a"],["/tags/长度/index.html","14240b48f4b25780a9337d589872ad23"],["/tags/高性能网盘/index.html","94ea5182de8db53c7ad94b1d3fe5355b"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
