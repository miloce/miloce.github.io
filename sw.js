/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ba05bf519c39ae08463e24d909b21bec"],["/about/index.html","e88efd1ceca65c135f695d3aacdee345"],["/archives/2006/08/index.html","ab56ff68c94c27539f9a7a9d1876c1ac"],["/archives/2006/index.html","cad728177b35a1980cd2b2dbb2ba5e3b"],["/archives/2021/03/index.html","78226d511c45e02ee4e6837ea2d1ad43"],["/archives/2021/08/index.html","f617968613d622d4879ecd81c6bba4c2"],["/archives/2021/index.html","088b5a22f74c572124529cbcc878fce4"],["/archives/2022/05/index.html","e1cf144f338dc2248ad2fa67ecf8a17a"],["/archives/2022/05/page/2/index.html","8cbd3e69ac604f47ddc5cd28d5c3f4dd"],["/archives/2022/05/page/3/index.html","f4cd8697f09652c0c6a5a0ff5fb9b611"],["/archives/2022/index.html","2f4151b5fa5a238d7810564204c1f710"],["/archives/2022/page/2/index.html","3cc093c6a57804784fa5a0d4e0e5818d"],["/archives/2022/page/3/index.html","31efd85580a545d7f1b98c9e035ff383"],["/archives/2023/01/index.html","bf613a4c50bc964ef1446d8cbaca4281"],["/archives/2023/index.html","05938886b2fe4ea7ade3102d5eb14e4d"],["/archives/2024/12/index.html","5a300dd05442eb14b5834b5d69c59846"],["/archives/2024/index.html","8a02cf9cd3d82b564086d9e7cfe8e9ca"],["/archives/2025/05/index.html","0107ac3806f5d0f132a36ec085fed18b"],["/archives/2025/09/index.html","6c9f759c3aa6f8b812d4e6b7b830f137"],["/archives/2025/index.html","c28a329bfddd2b494650442113e00dd7"],["/archives/index.html","bb0629cb7258be40aa08ff1242bdd1e6"],["/archives/page/2/index.html","fb8380847f3f26309ec7a8f2f3221a43"],["/archives/page/3/index.html","dd15f515af69ccc76a16cabba0349d5e"],["/archives/page/4/index.html","003b3c635486aa7a8b46165a5f4be9b6"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","b11f36548f6f537f11c5a564eff289ac"],["/categories/分享/index.html","f0ffe902f46d65aaf119435bdc418206"],["/categories/实用工具/index.html","8f96248a2aee2b0df2f862e3df2e6ba4"],["/categories/技巧分享/index.html","d47337acf4cb6d42fa897a74ff06171b"],["/categories/技术分享/index.html","a4a971c1d9cfae4e6d92bd0151ea1935"],["/categories/技术教程/index.html","0302990410b5ca848b7cf13c60ccc1aa"],["/categories/技术教程/page/2/index.html","e12a26c22d097a1cad6b50a4fdac5be6"],["/categories/源码分享/index.html","6a239cb751b728f0560099039ded704c"],["/categories/福利活动/index.html","0b570a6725032963f9bde7f74cc67de1"],["/categories/网站推荐/index.html","dcbb0b74c70d357d540624f8f93fe934"],["/categories/网站推荐/page/2/index.html","5319e59463be708dad455fb449e63320"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","e21a44b7398ff5652338aaea08fde546"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","b06c671757ea5535bb16f59b02a107e6"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","35037b362cd2b4699da34812462b2f64"],["/music/index.html","3ff410cae8ad9f22f2cd515565c2b5a8"],["/page/2/index.html","74f3d3119d924a577100267709ca7fe7"],["/page/3/index.html","40a488c90436e5ad44a3ceea8857f8c5"],["/page/4/index.html","46d21be5d154b274abed7f315f6953ed"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","8e0d4ad91f13abacbf87a886c8801ebd"],["/posts/096db3c03b6e/index.html","c7a604605a4fd5f2688971fb8e34e602"],["/posts/1235535247cb/index.html","3c87b3c676019c6dab65d61b5974ae01"],["/posts/13b70ad2982c/index.html","2ea280d4fa6f37e244a8b86431974474"],["/posts/15fa81012f63/index.html","61a132acf92de113079976cf8cad936e"],["/posts/1ec0df688f03/index.html","280a180c416bc7499a8e76cce7c141e4"],["/posts/2b7ac1a9709e/index.html","fb6d280ab8583d235140ef2aa06eb66a"],["/posts/2bb24d491704/index.html","a3d5e2c9900bfe80bb35b56900d7f5b1"],["/posts/2c9261572067/index.html","6fd6951ab80d21c8bc63d5176283bb4d"],["/posts/304408dfc52f/index.html","5cda91b2998d5ee80c695d349d6deac4"],["/posts/311ae06fbc6f/index.html","7ee79fb3a2ff9208ef82cca45a10a794"],["/posts/41c16cb60b68/index.html","88fa74aea54c84b8ed4d4cbdae605b25"],["/posts/4358b00bc797/index.html","29bd1b5e069dbc15ee54483a2d4843ad"],["/posts/4acff0774207/index.html","3961b6191b1869487d0e4bfe5439b77a"],["/posts/4b6cb4514456/index.html","a64c0d90589040fba63eded5a748d6b3"],["/posts/61d1b897dcb0/index.html","d44f443a2111661f27e9337538c7c4c6"],["/posts/6631458408e8/index.html","2e225f7843e812230213e83f5cdeff79"],["/posts/6cb2454df473/index.html","eed8c0ccccd13eac6225dc493365a35b"],["/posts/6f929ba7ef0a/index.html","bb6f342f072abb5f6410a6fa108f0b4d"],["/posts/76dd1b500ee9/index.html","0acb252e89369228e8339a3576677cb0"],["/posts/8ef6e275fcc9/index.html","cb362d3122ab492aff396c5520bbffa9"],["/posts/94456e62e22c/index.html","b39f0d659a524cdfb3fb95f9473850ab"],["/posts/9792de8b38a6/index.html","c04d46972f08499f69cee197efbff7bf"],["/posts/a84c927bae36/index.html","5b1df75d31bb7f21cdd111fe08c0fb40"],["/posts/ad5499059bd8/index.html","07326618692e7208c11ecb63dde788aa"],["/posts/b1a6e353d3b0/index.html","9f4656a4d987d5e550e10ac4ff93d71e"],["/posts/b478f3198c73/index.html","17d4144a6dc6303c3668e00fdb77add2"],["/posts/c0ae68f04a1c/index.html","e5e639246c6a13526bda2031e103d352"],["/posts/c821481d77c0/index.html","018b2d00702f4fc886f712b629af8f0a"],["/posts/d1ded2bacbfc/index.html","2aa41b5aead9faba7e65e385f6f1e82b"],["/posts/d82401d85b0d/index.html","8e955bc4e5b021fd721af1474a26c2f2"],["/posts/d911ff6fb3e3/index.html","dddcf74728abf713e5c3ede98fd24c0d"],["/posts/ebffabd07766/index.html","59e29dd78d224f3a8cce96a39b806753"],["/posts/edc724f3bf5b/index.html","cae9eeada21921d1f55b293317c42aa2"],["/posts/f30c3df9c2fc/index.html","08768970934ebd4208e2e575a13da664"],["/posts/fb79b38d6277/index.html","bffa429470c6cdcf70fc3464eca44800"],["/service-worker.js","ce9d598ff53a8aa0ae8866fdcae7bc17"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","b5c680ce615c7556e32a4677e8fb4201"],["/tags/255-255-255-0/index.html","e90716d4ab98ed4af4e19a6b3e15b7b5"],["/tags/BS架构/index.html","f0cda4c0c2eb769325620cc9b536b6a8"],["/tags/Chrome扩展/index.html","c954d9cbf45a3451495b2044fe2e1f58"],["/tags/Cloudflare/index.html","f651c243e6066c9c5d8dd3dd0a21ba6b"],["/tags/Docusaurus/index.html","d095c22c751a0d5bff727bb4fa853355"],["/tags/Magiceraser/index.html","a031c1c03c9999914e0fdfb364dfbb92"],["/tags/Neumorphism/index.html","daad241ec8f92591a78763b5879935cb"],["/tags/QQ加速/index.html","8a14a0a4e6a74e4c998ef90ba0f97b37"],["/tags/UptimeRobot/index.html","1d02a92948dabcd113f4be58a36282ad"],["/tags/Zepp-Life/index.html","ac6e8ac9a8b4a5cf2017e0ae56ffbde7"],["/tags/css/index.html","6389dcfc2f20ab6835c47ab159f7cdde"],["/tags/dns/index.html","0e535db0d8d681f60dfaecaf72ce430f"],["/tags/docker/index.html","b948552ebfd0a0daf23e9cbb32d743a9"],["/tags/ffmpeg/index.html","2f61096f560c257026afa2babd4d04d2"],["/tags/github/index.html","b9eb118a617286a7838e7c9616dd0623"],["/tags/google/index.html","90792b5c121ef916204ae4e7c9c26e3a"],["/tags/hexo/index.html","75008a34c3cfeb5a80a879f39ac3425c"],["/tags/import/index.html","4d34575b5ced54b9b9973f2d6dcd67c2"],["/tags/index.html","29f798bc45aca7143d5c437ed714e29a"],["/tags/ip归属/index.html","e83a50b883793d0a2ae6c7a24aaf34c3"],["/tags/linux/index.html","490bd60a7b3188733f87da36d534d1d5"],["/tags/nginx/index.html","c793ee686ea917b86c9ba9bb525f3d82"],["/tags/pdf/index.html","ebe4ce000750d747385912a42de59a50"],["/tags/play/index.html","4dfa0a38d1ed3603732e437bdfccdf8d"],["/tags/python/index.html","8c9e43ac05207bbe5575012b77517b32"],["/tags/serverless/index.html","2366fe3506a737617104a8700585e03a"],["/tags/smtp/index.html","a3f3cbd4ad3e6780731c864a1f8e44db"],["/tags/source/index.html","e8e9988f23f041316f245e1370b1169b"],["/tags/sudo/index.html","3a280b654546ac805ab05904af38facb"],["/tags/target/index.html","9ee32d0980b99bb40c591d9fcf63baf2"],["/tags/tinywow/index.html","a5c722f64d918f8da294ac9b6e584bff"],["/tags/usb/index.html","dcdd9b82ab8ae25ffee1a3edc0ab568f"],["/tags/wifi/index.html","4e87e3a583b001162780334884754b4e"],["/tags/zip/index.html","944a123c9ba7f632ab43eb8dc3ae1e59"],["/tags/下载/index.html","259fe72d21a376cd3df2eb70e40601ff"],["/tags/个数/index.html","d9a1305667a76232541a238690bfb4d5"],["/tags/云原生构建/index.html","65419ac2ac99caa7e5ee5786fb62b60a"],["/tags/云搜/index.html","9d85d0ef0ed9f41cff289db06fdd3958"],["/tags/云盘/index.html","7a9476b1654e6ef9ab82f073c6984766"],["/tags/代码/index.html","a125883815e084bc608b4969b66c8deb"],["/tags/免费/index.html","1c7e6b9548e8290619b0dc8dfac25e41"],["/tags/免费服务/index.html","6d24c7ef8480dec1a282e1c3906de6d7"],["/tags/函数/index.html","bb9252ecfafab4afb9fc21475f3c0ca7"],["/tags/分配/index.html","a4c950810ea942d5260b8d83947a3031"],["/tags/删除图片/index.html","3b545c4f785355263df6c8efa26beb30"],["/tags/刷步数/index.html","1d2d5c0ed0f46b572ffda24c15e8623a"],["/tags/刷步数工具/index.html","d832677a5aeceed0af4c456f5899c5e5"],["/tags/前端开发/index.html","636a04ff472f35d5739e16de2a014893"],["/tags/剪辑/index.html","38cfd80524af2c7d2f0ab1ef1f2e220a"],["/tags/压缩/index.html","df709061e51edefecbeaeae0ac47c4ae"],["/tags/变量/index.html","3adb35a1ad697117c4fa17a38ab2194d"],["/tags/同学/index.html","b156711666b985f25fb3f5de74749ff7"],["/tags/命令/index.html","bbfbda7e53072674746de6081b60ba37"],["/tags/商店/index.html","f014fcbfd65aabd6f69c6199673e2a60"],["/tags/图片/index.html","fb343607e35d59bf4c5a2225f5d4b735"],["/tags/地址/index.html","5c38083aed8ff26950f1d81a0c08a34b"],["/tags/堵猫猫/index.html","fc1ecf9676fb8dd806d64005b89b68ef"],["/tags/处理/index.html","ed9eea03f28cb42aaa5fb9de2b7ed065"],["/tags/子网掩码/index.html","07d7306f83dc768e90a622d2ee65129d"],["/tags/实用命令/index.html","dd16a94cc6f088dd032ba1ab657ed1d4"],["/tags/密码/index.html","f1aa6c57082432051c9ba5c098fd49ab"],["/tags/小游戏/index.html","e509a854abc4009275f0b77a171a661c"],["/tags/小舒同学/index.html","d78b927a2169d2c1c4beab8bbaead8f1"],["/tags/工具/index.html","c8dc1add26e27620b40a1cf5a2505ca6"],["/tags/应用/index.html","ae78e6032cc4ae3e48ed5ea3ffb06d2f"],["/tags/录制/index.html","6178b7eb9def624cbeeceee3067353c4"],["/tags/微信/index.html","fecdcf8729e37be7b2ffe99bf91f6d51"],["/tags/微信运动/index.html","2812e2b0dddcc94d669749510652fdf1"],["/tags/技巧/index.html","5133e728e3da0adbe9f9da7971c8e899"],["/tags/技术/index.html","47df6f10a79c1c6456e5da0c185c78b7"],["/tags/技术分享/index.html","645f299cb8807e7ee2ad5d4cb5e59040"],["/tags/招商银行/index.html","aa2dcc0d436786530a9154cae0dba86a"],["/tags/授权/index.html","ab9e865fc877a91033e4f098ba4a2693"],["/tags/插件/index.html","641017531d04971474641a51108628a7"],["/tags/搜索/index.html","337a1677e0f07df8567b542e519206ef"],["/tags/搜索引擎/index.html","fd0b2f9f0fb92272fe64a0b4bcc862bd"],["/tags/操作/index.html","38fd43174956c61985dbe90995726f8d"],["/tags/支付宝/index.html","8dbef333689a9ab89c915257b550c4e6"],["/tags/收藏夹/index.html","d3cc49ca197595dc92be0faff173ca55"],["/tags/教程分享/index.html","9ec04fade2aa0ee899af6ba2ecdd8611"],["/tags/文件/index.html","b9cfb2fd237cc1e87050722399c8e70e"],["/tags/新拟态/index.html","7aa9494fd68a315d5d046d797cf1e0e6"],["/tags/无损/index.html","01a52d133d365c5c657a795660c55f8b"],["/tags/智影/index.html","4541bf2d4eeb92aad55b360c787a0d79"],["/tags/查看/index.html","4cbb1ce7e79e053ffa5f2c3f2ea96e31"],["/tags/树莓/index.html","2b7d59eeb8da2b4906263efbb04a3b15"],["/tags/格式/index.html","5d8353fa8d580def63129f1743c0e77a"],["/tags/油猴插件/index.html","12bc0b9b523b2d524fd156728a564021"],["/tags/流程/index.html","0ea8fbb484e495d746f753f1b6f0421e"],["/tags/清图/index.html","7d19f4f1d239f0c5bf3ec128cdd47656"],["/tags/源代码/index.html","f84a42a89cebcbc395752b752016997b"],["/tags/源码分享/index.html","aaf888e094a486e702f6d7d25e108bc8"],["/tags/生成/index.html","2d87f0e1b101b1ec2e8540c7595bae6e"],["/tags/知识产权/index.html","bfc3e4e6b69b448054dcddd48654a3ed"],["/tags/硬盘/index.html","eb29b2a22588820fb1d16cfa8b5bd020"],["/tags/程序/index.html","65765b51a5f00f2dcacd9fc6a6aa2553"],["/tags/空间/index.html","d58d4559e372e2ae0cf524cf04bb8fd6"],["/tags/站点生成神器/index.html","060bed0fbac067df052059828e2c1590"],["/tags/站点监控面板/index.html","c504d12d261011f30bf530a08dd0aa77"],["/tags/素材/index.html","4b048acd7fb486882404d6bd821fc527"],["/tags/网盘/index.html","6ec45bd1465aa9a5ac98c6a0e5dbdc73"],["/tags/网站/index.html","656c8a9106053f956015b64885c22354"],["/tags/腾讯CNB/index.html","c8228c7d4db27b5b4f3790f14afdeb6a"],["/tags/视频/index.html","5352d7b95121de5e77cf251f6e88713b"],["/tags/资源/index.html","e0a835570291c31c380b8f7c749cdd6b"],["/tags/跨域代理/index.html","fca89d86bf2c19ac2f2baeddfd7a0cbf"],["/tags/转换/index.html","e25510609252373567a65edd9c42d0e9"],["/tags/软件/index.html","10ad5178ead32960f6df6328efc186da"],["/tags/运动步数/index.html","4b7095054e42e6c4cce65852436b6dae"],["/tags/邮箱/index.html","337a6e7cee3f9c8361045cd22e9c0a2a"],["/tags/镜像/index.html","f4e195377d06531ce09e918699aa4ec2"],["/tags/长度/index.html","eb807a82161f2e8a0d2cedc4fae34e06"],["/tags/高性能网盘/index.html","b21207a165aac0e5dc190fbace60cdc2"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
