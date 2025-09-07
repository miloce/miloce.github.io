/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","05ac417b552fd5b126bcb954d0bbb441"],["/about/index.html","0fa09b33a5d919f52b45ce7f0aa551de"],["/archives/2006/08/index.html","0f1778db95a2fe6165377934b440c07f"],["/archives/2006/index.html","0e684f4d7be3409e1a5534e839a11bb0"],["/archives/2021/03/index.html","de825b881ac625d70c279064840c9310"],["/archives/2021/08/index.html","d0ef82dd016490ab80ec2a41f5f9014d"],["/archives/2021/index.html","28458e0a28a749d094fcacd907a8c6cc"],["/archives/2022/05/index.html","0cec9f8644950dd102c67fcd745fda76"],["/archives/2022/05/page/2/index.html","e4247ddfd0c5fd0d62c30c0b1c2e782b"],["/archives/2022/05/page/3/index.html","59e503c9e81c04e7d50a498db5aaeea1"],["/archives/2022/index.html","cdeaec7c81816c0c71771616aec6b9e3"],["/archives/2022/page/2/index.html","785bce9a2dd6ee7d8fee925100f22d9d"],["/archives/2022/page/3/index.html","9a5938596821c3ab226deb98a0ca582e"],["/archives/2023/01/index.html","9b9e4e11cf1e23ae16421135e20628d2"],["/archives/2023/index.html","9bb52243e905052945f4189f7f7959c6"],["/archives/2024/12/index.html","95d5d32722e32ea48faa514908df3559"],["/archives/2024/index.html","82202204bdea0fd7520bb93c4c55dbab"],["/archives/2025/05/index.html","80c2167541b01e294550f817c1fac50b"],["/archives/2025/09/index.html","553c5e7092d1a768f081e60a3ed52bfe"],["/archives/2025/index.html","dffa694b5b98658a9374d887ab6dac39"],["/archives/index.html","2f47873ae15a1b26110e79d17e66e578"],["/archives/page/2/index.html","d61ae582ef9222cd014357906133e7de"],["/archives/page/3/index.html","8437d7d774428b07dcb4c21da4406491"],["/archives/page/4/index.html","1414e075b89961511fa3203518e7822d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","8b8b3aff959eafa492880dcf1617d852"],["/categories/实用工具/index.html","d1bfc075a8c9ffff1fa7a94358b1be86"],["/categories/技巧分享/index.html","0369abc46f8b704a120669108ea2d810"],["/categories/技术分享/index.html","6250880e8f0fbfa5c627a44c2c659e64"],["/categories/技术教程/index.html","2cf1675e712291f5ce9a4ef8990198f9"],["/categories/技术教程/page/2/index.html","b6ad1731678ee690577a484397a09c8f"],["/categories/源码分享/index.html","f45e6ab95768d6767bc10037c5e53811"],["/categories/福利活动/index.html","a51f3cf24aa9f452ed469c86e2709bc1"],["/categories/网站推荐/index.html","f5bac56ef2f5cbc053508b8053f51367"],["/categories/网站推荐/page/2/index.html","f3f3115be00107dc511ece2dd9566d19"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","516a85ecdba9c0c15d2075e4d4706f9c"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","ace8118ba2c2d6c506051debddb59776"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","849d3ffd9e2bfa6159d3212b4d766673"],["/music/index.html","c0e228d62cf682b6a9608ff93e5a2eb1"],["/page/2/index.html","a58335897aab790cd1966a3e02864fca"],["/page/3/index.html","b4bdc2b4f7a86ab4ba49a794706ca5a7"],["/page/4/index.html","a2ed0033bbdf0e80dbbcce261889114a"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","66cda1ce74dedfdd816dcc2ad23e1c22"],["/posts/096db3c03b6e/index.html","c5372735871c76a604f4adece1730c36"],["/posts/1235535247cb/index.html","3ab291205009e517ba49dc38ccb91c7c"],["/posts/13b70ad2982c/index.html","a5d1ad15104a7fdf8e43f4521bc4d749"],["/posts/15fa81012f63/index.html","a8cb705acb38f0fcd99d1eaa435e8708"],["/posts/1ec0df688f03/index.html","3fe8cdf80b62f12e8c8d6f5d3b88fc4e"],["/posts/2b7ac1a9709e/index.html","e1801b2040d59f7c747af02b7ca32d0d"],["/posts/2bb24d491704/index.html","20d3d6e58c2f25b8f34f276e4c2829f2"],["/posts/2c9261572067/index.html","2fb9a2e322e889791540a2abc6f9e58d"],["/posts/304408dfc52f/index.html","81622e64593f5737404d8cbdd173877c"],["/posts/41c16cb60b68/index.html","0737122508d5880e7d0f52bff59b126f"],["/posts/4358b00bc797/index.html","320799b9e36f38f76d07856161def4d1"],["/posts/4acff0774207/index.html","1326b4620dcf03ae74579bc283a96c67"],["/posts/4b6cb4514456/index.html","e54bd6bc94fa270fa3687f366e098615"],["/posts/6631458408e8/index.html","279d1884b9079df9b773690c72335d67"],["/posts/6cb2454df473/index.html","343c25845525cecc4d6d5df854ab8973"],["/posts/6f929ba7ef0a/index.html","f8901ef63b081bac0269bb2b515961a9"],["/posts/76dd1b500ee9/index.html","19db2fe634d9da4c4ff6c1d063dc1ee7"],["/posts/8ef6e275fcc9/index.html","ea8ea8a301ea4155619dfc04b79e7c4c"],["/posts/94456e62e22c/index.html","2c976c96088321545882888bef0195c8"],["/posts/9792de8b38a6/index.html","0b6d0816c714236c8f668ea104ea2fe7"],["/posts/9d119b73dd2a/cmb-service-account.png","a679b24f5db960401ddcb612610e59fd"],["/posts/9d119b73dd2a/index.html","32c9ffaca3bf29c41b6129cdd5a581a3"],["/posts/9d119b73dd2a/jc.jpg","39250f60d65c34b48684bdc073457278"],["/posts/a84c927bae36/index.html","95294629b8174f19182faf30d28d4807"],["/posts/ad5499059bd8/index.html","dbf8e6b4a8ea95d009efc17abbad09b8"],["/posts/b1a6e353d3b0/index.html","7a583412ea23e9c02c353ec878f85b2f"],["/posts/b478f3198c73/index.html","cf7c181cb5c9aca29743a6c1df8ddd16"],["/posts/c0ae68f04a1c/index.html","b3e9962ef21b9e8a3dbd8945f1625c38"],["/posts/c821481d77c0/index.html","833805113dffd1cff6fb0d4c6ee99bdf"],["/posts/d1ded2bacbfc/index.html","a2cd4c417ddfc9523307dafee36c7276"],["/posts/d911ff6fb3e3/index.html","eb81c6df80cec4b4b8b8eb48703202e2"],["/posts/ebffabd07766/index.html","a2450a8a35685a71bdd310ebaab02c5e"],["/posts/edc724f3bf5b/index.html","b6875d72ba5197fb06fba6dbd92f1d8c"],["/posts/f30c3df9c2fc/index.html","c217444de92eaf7719ba8727738c464d"],["/posts/fb79b38d6277/index.html","865e30fa2bc3a874e95e28f120ee84c8"],["/service-worker.js","113d23b9c3ee9a3e9014fd94fba8b7d4"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","b7ae50d18e243c853f12eeba076ccd2b"],["/tags/255-255-255-0/index.html","9b212888cdbf9672e964225cb34f3b60"],["/tags/BS架构/index.html","76b22184eb0a7b2b80a3d4b76d050ed5"],["/tags/Chrome扩展/index.html","ab3683a47ccb98188f1dfbfeb5b2f23c"],["/tags/Docusaurus/index.html","248cf4db39ac91e6dc789d49bc7805b3"],["/tags/Magiceraser/index.html","e36491868c35c59f3d274869d323b91b"],["/tags/Neumorphism/index.html","a7a95063c1fff43fb9765d5d90b21c32"],["/tags/QQ加速/index.html","fa2800373b5baf8865bfebb2d9d4011c"],["/tags/UptimeRobot/index.html","5e3fda902784a62e1e1cd3d71d83489a"],["/tags/Zepp-Life/index.html","505eebacebe4310aa786ef4395f11c1e"],["/tags/css/index.html","b19b4913af7262a4ccba264f72bae231"],["/tags/dns/index.html","a76c4e7221866113e29c53c1b90ae1cc"],["/tags/docker/index.html","bd55516806204f36b31409bff5456a63"],["/tags/ffmpeg/index.html","78decb4037e6a09b2cb4b49b0c0815b1"],["/tags/github/index.html","4d8db5bfb11a8ad1f37398998c3dbd41"],["/tags/google/index.html","fea446d91d7836a2b3b5147801642928"],["/tags/hexo/index.html","3e790040ec9a76a79ebb73d493f0e1ae"],["/tags/import/index.html","b37d9fcf5b165e9bad84e416de21d19e"],["/tags/index.html","292ad2b73867fb7f765e0f2c3541e309"],["/tags/ip归属/index.html","717bf44f5427888098a755ba6c82aaa8"],["/tags/linux/index.html","dd702e2b06c6141b40a552c021726df3"],["/tags/nginx/index.html","379fa1b73375a666fc0f30fff193897b"],["/tags/pdf/index.html","9681b46e5e0ec3801cd2b9fb7e0c1b11"],["/tags/play/index.html","daacecd1826c12e6394369e7f63c0ba3"],["/tags/python/index.html","418eaa63eb8585a22cfcf26123687a6e"],["/tags/serverless/index.html","5e3deafccec124a9a3bc811952d9e012"],["/tags/smtp/index.html","53f3105db0e7b5a85848b9a634052042"],["/tags/source/index.html","61932c682f0fa1d5d2531b319ce78b32"],["/tags/sudo/index.html","9d56e4dae9cf57c86b2b99ee5a034c44"],["/tags/target/index.html","e75f1328d89c8d75ac4a4ae2b02d78e4"],["/tags/tinywow/index.html","1c1efe04322a2cd43528938b8acc9b68"],["/tags/usb/index.html","23ddb1eebcb9bb70e3614ae50db8f277"],["/tags/wifi/index.html","c6f03e9172463e19a884eebdd016a08b"],["/tags/zip/index.html","c5c22e7dd811ce48ead6b0d5d17883a0"],["/tags/下载/index.html","9812cf77c3d1f0c2bf105921aefd9d30"],["/tags/个数/index.html","03788c66e10234d3d125a2c9252b047d"],["/tags/云原生构建/index.html","decdd0b855f79e12eb27d7e3b6727a8d"],["/tags/云搜/index.html","f52a740fb720a1df4e33fdb1acb46d31"],["/tags/云盘/index.html","149b2b2c47099f1a12ae373d60d11fb1"],["/tags/代码/index.html","1f1c12fd047cd33713336e091ff29216"],["/tags/免费/index.html","be496e3559a92d62d5e4a178c058bb99"],["/tags/函数/index.html","964ab8ed665592c3376ad030ecedac0c"],["/tags/分配/index.html","c3cf77bee1dab12263fcaec332a18645"],["/tags/删除图片/index.html","5aaed939eb19d9b7ee2c73db8d33b893"],["/tags/刷步数工具/index.html","286be62338e9b91989448158a1a3d2e0"],["/tags/剪辑/index.html","cf07b068f3204e82521668fb70e76697"],["/tags/压缩/index.html","337d4959987644332e64a2b982d1ed4f"],["/tags/变量/index.html","aa7bf702665b4ad7ad42b3b7c472a153"],["/tags/同学/index.html","799c5b8cf42959118759dc1588974a05"],["/tags/命令/index.html","3bd6a04bcb520d78e3ece0c34a58a6a3"],["/tags/商店/index.html","8d34895bcd87a2372c006d10125b3268"],["/tags/图片/index.html","3a5a50d4db258d17e5f03d179b2f0212"],["/tags/地址/index.html","aa55193ead0a1cf4e24548870066f0ae"],["/tags/堵猫猫/index.html","deb0dc5f49d91860da658e674c2e584c"],["/tags/处理/index.html","abf997ef2f506e336c2703da2db16b12"],["/tags/子网掩码/index.html","158167b9ed68aab9c98a100ca5df46ea"],["/tags/实用命令/index.html","fd973e08d31af0ab02a3dd526058fde3"],["/tags/密码/index.html","ce6f2dba1a6b0fed9feef6ecaca40b84"],["/tags/小游戏/index.html","df97d3b0608c62611ecca9375893e9bb"],["/tags/小舒同学/index.html","caefd6ed115ddb795d99de14b8396e39"],["/tags/工具/index.html","fbc813628adced738c67181597b709da"],["/tags/应用/index.html","8ba75f9aadf75ed94cb663963aecf015"],["/tags/录制/index.html","f3df5c9c4071304e1f079b53aef0da4e"],["/tags/微信/index.html","555c60ac633cf572b81ceb8c1f7f97db"],["/tags/微信运动/index.html","f21d1c06a55fba0c5999ab8dd55e839b"],["/tags/技巧/index.html","ee0f31f15ef40735b2c2c815b60a83bc"],["/tags/招商银行/index.html","cff1980e44d733d35b51ba9ebf4a4c4f"],["/tags/授权/index.html","2706cd51794e3d7d6fc11b0a86854a8c"],["/tags/插件/index.html","fe16d5bcee7b757a5bd2d86f52b9d286"],["/tags/搜索/index.html","ece3e9d7ec3d92a894207da16340cc0b"],["/tags/搜索引擎/index.html","2cc166dfe69799373e2b9350086cf508"],["/tags/操作/index.html","bd361b1197528924a6097d27271aaa75"],["/tags/支付宝/index.html","99b717c41b4c4f3cae06d2bd3fcecb73"],["/tags/收藏夹/index.html","7b7f2d2ac49f6fb875b6e95a479a860b"],["/tags/文件/index.html","19f89d1faa01d1451d1d2d80ca86c583"],["/tags/新拟态/index.html","78b08967f18ff7dc0f1fcaf3b6efcf13"],["/tags/无损/index.html","b9406b4387b2a944b02838831d5c45b7"],["/tags/智影/index.html","4b7a6664465d9c6ecf08d08414aaaf24"],["/tags/查看/index.html","f62d13870f6838237de616cab0aba9f4"],["/tags/树莓/index.html","b1352731d3871389cfb2110f22eee6b3"],["/tags/格式/index.html","cda16c4c4838068f136cad7909405321"],["/tags/油猴插件/index.html","833af6e2ef2167bdf7f0de81324a519a"],["/tags/流程/index.html","05bc091c7c354d34b64be34c41b2a7b4"],["/tags/清图/index.html","c2f09b6cae7e78db668a265271c952d4"],["/tags/源代码/index.html","1e808562c4ec158ea08f6cbee627b45a"],["/tags/源码分享/index.html","8a00e1f99f2dad4a1a5702de06950430"],["/tags/生成/index.html","ae84609e41a19ade3cd7c1c7caf1bad9"],["/tags/知识产权/index.html","048034be846c81257f034b29aa867314"],["/tags/硬盘/index.html","efe1bd4451e6ebbb655c8ba69b6db8ae"],["/tags/程序/index.html","7c6669bb5da5dea7e52eaa67389e3b28"],["/tags/空间/index.html","e2afc99875b1b7d87e0cd96ad3a12872"],["/tags/站点生成神器/index.html","6f192988800bdb87fa468ab948a80cfc"],["/tags/站点监控面板/index.html","e35df3bd433a1603b481c350dc0b85a3"],["/tags/素材/index.html","13c0c8f2bc7131ef649274d2a5a0823b"],["/tags/网盘/index.html","ee3e62e1f1fd3f5fc86f1e4e5edd5f11"],["/tags/网站/index.html","919d863a470d897a5fa02369571a1371"],["/tags/腾讯CNB/index.html","d165baeb3eac992016f0201ea93caf74"],["/tags/视频/index.html","d436f2720a0aa61ea3ef2894c01f43d6"],["/tags/资源/index.html","9623587aaa9937f005cae6be5f713b2a"],["/tags/转换/index.html","d4a2878cff427c03958b03c7f5b4f813"],["/tags/软件/index.html","e7fc0d391b4716e29aa27ef70b83d1a3"],["/tags/运动步数/index.html","89d7f95bc30a8d841c4f426dbec5f23e"],["/tags/邮箱/index.html","dbee6cb7cda3a3ba4559597d3458a333"],["/tags/镜像/index.html","5771b9e364847a70a9340e92fad663cf"],["/tags/长度/index.html","fd7bdb85c1ede2b1111ff32c63671fb6"],["/tags/高性能网盘/index.html","08ae01a44e05c985125a715a0683c92e"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
