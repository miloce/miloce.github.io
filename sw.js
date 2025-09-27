/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","69408338350f844676d01c7b4f85d16d"],["/about/index.html","f1d02a4c94d7dc4069440f920561c1b9"],["/archives/2006/08/index.html","7a45b353471f709ec990a2b2c91937c9"],["/archives/2006/index.html","75d6e026dfae95fb061721343d4f9035"],["/archives/2021/03/index.html","5e9a21c3b3a43b0b22adfb6b1b01409d"],["/archives/2021/08/index.html","38577245442212b0cdcf5cd4a36d3221"],["/archives/2021/index.html","a2265762977a08f603d30d69489a2a58"],["/archives/2022/05/index.html","10b486ae2eba32bd4ec8cfa41dd93d71"],["/archives/2022/05/page/2/index.html","a50d661d0902d4add1e9d526988207df"],["/archives/2022/05/page/3/index.html","6f28c45da7f45b0810a018243cd09ff8"],["/archives/2022/index.html","6478cab94473341723d035d14fb2d4b4"],["/archives/2022/page/2/index.html","3b19c2bc3363e3b566e357ef1f807f40"],["/archives/2022/page/3/index.html","395fbe2009bf367c384c1999dc5dc458"],["/archives/2023/01/index.html","271936f45ebc1e57a0da675bd34fe6cf"],["/archives/2023/index.html","5bf7c5fd6f4b09826b1c2014c65071c6"],["/archives/2024/12/index.html","0794a4c8764b721ac2b7a6a7adc764cf"],["/archives/2024/index.html","18a353b965be2151a1ceb2b0b33b84a1"],["/archives/2025/05/index.html","d1c810f1692a0dc4228fe1c872facd7f"],["/archives/2025/09/index.html","c71dd6f36d4271e1be8c60b0ac507cd1"],["/archives/2025/index.html","ca986f10f2a2388151c4f5240d0f773e"],["/archives/index.html","848f10ee96699c1fbba8bbefefd30af8"],["/archives/page/2/index.html","3542f38a6b3af00b5e567d52f5c159bb"],["/archives/page/3/index.html","f9fd5f65704389e84950c4e4fe3df78b"],["/archives/page/4/index.html","96e792a68ba6d12e0827dcdb32484e5c"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","8b5b083f1aee8bfdea2181cda13fc968"],["/categories/分享/index.html","e7809babe27e43a4f148d3ba3950d4bc"],["/categories/实用工具/index.html","063bdb2bda5060e19c9e9d952f028e34"],["/categories/技巧分享/index.html","b6d277aee32968c8f685224c3f72305d"],["/categories/技术分享/index.html","9dbce1dd0e9d11ce71ba8beceeca29d6"],["/categories/技术教程/index.html","3907ba8c6ea5a099a2109d68e3932852"],["/categories/技术教程/page/2/index.html","55231136269fcedb43ec0cb4bfc4df60"],["/categories/源码分享/index.html","42e297b52ede8872e2434ef8faf9d794"],["/categories/福利活动/index.html","ba93098cec5f758d31c20a3966f7b5b6"],["/categories/网站推荐/index.html","286ed0b70576c7e4a3bffc5a9f2d7064"],["/categories/网站推荐/page/2/index.html","0e54d9527ff800969169eec82b6b0334"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","4997d1566959b057515d7d9f6344493c"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","21ef1e111607656b432a9ab18d141500"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","576ca7808a59ebbf64c4856eb301754e"],["/music/index.html","913b0e010fbee2bb9b7abf19c72fae41"],["/page/2/index.html","08578ea4320417d736387315aade205a"],["/page/3/index.html","dfd6e0940b7211b7b1be31fb47cd6d27"],["/page/4/index.html","1bf9686ac6b401a18e056896093fc206"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","8e0d4ad91f13abacbf87a886c8801ebd"],["/posts/096db3c03b6e/index.html","c7a604605a4fd5f2688971fb8e34e602"],["/posts/1235535247cb/index.html","3c87b3c676019c6dab65d61b5974ae01"],["/posts/13b70ad2982c/index.html","2ea280d4fa6f37e244a8b86431974474"],["/posts/15fa81012f63/index.html","61a132acf92de113079976cf8cad936e"],["/posts/1ec0df688f03/index.html","280a180c416bc7499a8e76cce7c141e4"],["/posts/2b7ac1a9709e/index.html","fb6d280ab8583d235140ef2aa06eb66a"],["/posts/2bb24d491704/index.html","a3d5e2c9900bfe80bb35b56900d7f5b1"],["/posts/2c9261572067/index.html","6fd6951ab80d21c8bc63d5176283bb4d"],["/posts/304408dfc52f/index.html","5cda91b2998d5ee80c695d349d6deac4"],["/posts/311ae06fbc6f/index.html","984c36ce7b533345335c75d9504eaeb0"],["/posts/41c16cb60b68/index.html","55fb4dde6fcdb271466c708ee972beaa"],["/posts/4358b00bc797/index.html","29bd1b5e069dbc15ee54483a2d4843ad"],["/posts/4acff0774207/index.html","5051bfec5aa9ee280fca4579684e8051"],["/posts/4b6cb4514456/index.html","a64c0d90589040fba63eded5a748d6b3"],["/posts/61d1b897dcb0/index.html","d44f443a2111661f27e9337538c7c4c6"],["/posts/6631458408e8/index.html","c9c35c2884b64bae00a9f24f8ae0442c"],["/posts/6cb2454df473/index.html","79b29ac6f54a3b5cb2b28216322fd807"],["/posts/6f929ba7ef0a/index.html","bb6f342f072abb5f6410a6fa108f0b4d"],["/posts/76dd1b500ee9/index.html","0acb252e89369228e8339a3576677cb0"],["/posts/8ef6e275fcc9/index.html","4d35cde1bd68ca9c0b220308eb7ed7c4"],["/posts/94456e62e22c/index.html","b39f0d659a524cdfb3fb95f9473850ab"],["/posts/9792de8b38a6/index.html","c04d46972f08499f69cee197efbff7bf"],["/posts/a84c927bae36/index.html","5b1df75d31bb7f21cdd111fe08c0fb40"],["/posts/ad5499059bd8/index.html","07326618692e7208c11ecb63dde788aa"],["/posts/b1a6e353d3b0/index.html","9f4656a4d987d5e550e10ac4ff93d71e"],["/posts/b2dc15e2ff89/index.html","79e0b02ba1f28783e08b766df32fce5f"],["/posts/b478f3198c73/index.html","8d9b440cff9dd9307e1d88ce2230653b"],["/posts/c0ae68f04a1c/index.html","e5e639246c6a13526bda2031e103d352"],["/posts/c821481d77c0/index.html","018b2d00702f4fc886f712b629af8f0a"],["/posts/d1ded2bacbfc/index.html","2aa41b5aead9faba7e65e385f6f1e82b"],["/posts/d911ff6fb3e3/index.html","02c4d858f2dd065bfa6975db709a6f82"],["/posts/ebffabd07766/index.html","59e29dd78d224f3a8cce96a39b806753"],["/posts/edc724f3bf5b/index.html","cae9eeada21921d1f55b293317c42aa2"],["/posts/f30c3df9c2fc/index.html","08768970934ebd4208e2e575a13da664"],["/posts/fb79b38d6277/index.html","bffa429470c6cdcf70fc3464eca44800"],["/service-worker.js","5cb074b0da12dbb0e35b4d9b6ea50a57"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","73b677acdf41a9ee0a40e318dbb69169"],["/tags/255-255-255-0/index.html","2da00213c05f886c54989185247fb225"],["/tags/BS架构/index.html","af1736b6cd6a37e08ff19d74b81f79f4"],["/tags/Chrome扩展/index.html","c01d4d577f2a50847fc8f0915071427d"],["/tags/Cloudflare/index.html","f05152c2f6014e4ca65d5827434fe8f3"],["/tags/Docusaurus/index.html","ae11e68f38ca16b890ff9025b10ffa78"],["/tags/Magiceraser/index.html","76ef24d3a3f5f30380be259d84a669e7"],["/tags/Neumorphism/index.html","686fb5ec231ed42eb5b238b17445c28e"],["/tags/QQ加速/index.html","9e218b23e96cf34ae31879abea56cd1b"],["/tags/UptimeRobot/index.html","c078e49f08a21ea3b62f99eeefa08467"],["/tags/Zepp-Life/index.html","a10bc6af3aa3f92901b1f17f0a79fbdf"],["/tags/css/index.html","88600f6ecfe60330c17c260e1a684fd9"],["/tags/dns/index.html","a6efed3106bd1e7efddb44592b3f0c02"],["/tags/docker/index.html","f7fb0a41284b4dca4317b281bbd899f0"],["/tags/ffmpeg/index.html","3c04334a3c0518469e2fb2df7080c353"],["/tags/github/index.html","5dbe08dcc0c6f2ec0c9e72a474941348"],["/tags/google/index.html","d22520bc8c822bcae22e5dc026fe0c67"],["/tags/hexo/index.html","13ef491125c6c63aedfa04ca435b82a1"],["/tags/import/index.html","f010ccbf8c55623168821ac1fce60fa2"],["/tags/index.html","ec6ed24f4dd5f21ade57fe9c1945acb9"],["/tags/ip归属/index.html","09da60cb429e651875f03967850a4721"],["/tags/linux/index.html","dda91ef1d5ec8f6b57ab46861827decf"],["/tags/nginx/index.html","01fc399386a2c5ea3e067734897aa307"],["/tags/pdf/index.html","1beb73916a14e35aae880c5fa13a1577"],["/tags/play/index.html","232b5bab6c1913129b68aad942e88300"],["/tags/python/index.html","7ffba1f7cb84a6cfdd87a6ff011e37d1"],["/tags/serverless/index.html","4dc4ae28afd6a8ec9f13de67e3342047"],["/tags/smtp/index.html","d7f400f6c5c3cb9b65617854fee327bf"],["/tags/source/index.html","bcb1c692fc56388bdb11de23cc7c572d"],["/tags/sudo/index.html","8429f894363ea613cec82c7a2e244e14"],["/tags/target/index.html","c99e85f4a414b61aa05945e7d74e4c2b"],["/tags/tinywow/index.html","e54fc48b59989f7a8104310187aa9933"],["/tags/usb/index.html","bba9ba2e408c89863db73d69592f08a8"],["/tags/wifi/index.html","cbed60d9e08eacd88f3b120c81c8c07d"],["/tags/zip/index.html","011dcedf5e10ed37827d8e21f31d42df"],["/tags/下载/index.html","4e46cbbb940e8bee9321c2f6036d1881"],["/tags/个数/index.html","77bd9521ecaf9c01775c97e91d38352c"],["/tags/云原生构建/index.html","d779b96a1fd268be14fbeaa7a15aca14"],["/tags/云搜/index.html","ac9deed8fa020b0ff5833253e596d7cd"],["/tags/云盘/index.html","ff7acbc55dc3fc6b179b8f108b166662"],["/tags/代码/index.html","bde40e553bd4eebf0e5d7f9e6c36b24f"],["/tags/免费/index.html","2c8b4991a6f3a94c3beb8ffc127a7197"],["/tags/免费服务/index.html","92cf04cff28f8a2341b35c2a4e75ba11"],["/tags/函数/index.html","f6b7527a05b8e87aa8b3ddde2951cb08"],["/tags/分配/index.html","e4d2713de0bec9216973b1e0332862d9"],["/tags/删除图片/index.html","de8e31e8146b6bdec20e00f954e1f0de"],["/tags/刷步数/index.html","0d6decbb4d4e50c6f20f4d83766acdd4"],["/tags/刷步数工具/index.html","2584db338a1ef54140d11db22dfbd341"],["/tags/前端开发/index.html","05530e77ef25a05716d06569235e7755"],["/tags/剪辑/index.html","1ecb16adc64c1915d818bf4edde1d3c8"],["/tags/压缩/index.html","725cd4b68db2a6ad5e705d83464e3fc6"],["/tags/变量/index.html","917c55746ccdc9b19fb77ee1ba2f2dc7"],["/tags/同学/index.html","744e61abdecff8a08c39a7b0c503f0e7"],["/tags/命令/index.html","8f034f45e2e94980fba7e60d66b7124c"],["/tags/商店/index.html","debd728040ebeb3390270d9005bcc6a2"],["/tags/图片/index.html","28f224593a17155125d833be33b48b46"],["/tags/地址/index.html","d15afc4d59cf0ce4c0e862aad255ccab"],["/tags/堵猫猫/index.html","0e971a2f24cb4346b427935578a8e5e6"],["/tags/处理/index.html","8c824538f97c4fe4e5720ed408a829c2"],["/tags/子网掩码/index.html","0edfb533f9f56b3b5fcaf6c4ad7c7c66"],["/tags/实用命令/index.html","46eb76d7aa4ec4c742ef809c9b4a36dd"],["/tags/密码/index.html","19971fb843236b8fae728955a4cba404"],["/tags/小游戏/index.html","be9f781fde4e2979f997a0db11f2b199"],["/tags/小舒同学/index.html","b9a8f5ec4f78e391b0462a66dcb6a7b0"],["/tags/工具/index.html","d9d416e49e0f31053ed46b5a8900b307"],["/tags/应用/index.html","66094cbc655d98f3f4b54689d30fc387"],["/tags/录制/index.html","e37861dae2ee89bedf96dda1eea562ae"],["/tags/微信/index.html","9ef38ac307fc2228535d5ad49dcc7061"],["/tags/微信运动/index.html","807a59effbf27bec91e377df31db0331"],["/tags/技巧/index.html","8ae891f97bce1acd5d55508150a75678"],["/tags/技术/index.html","ce16b0b54cefd1fcfab2993554594b25"],["/tags/技术分享/index.html","ecb34d27d8a518e300d75f0c36b0e223"],["/tags/招商银行/index.html","0532d96899e3b16082d75bba41798d5e"],["/tags/授权/index.html","60da124003317fbd78f0000fcf71481c"],["/tags/插件/index.html","08755a2d96ffff5c0e9a38d0d29829f7"],["/tags/搜索/index.html","94d4587eb8dbecc859041fb0dd5353db"],["/tags/搜索引擎/index.html","06edc13213f0595d75c9807517a6647e"],["/tags/操作/index.html","f35399c51c5dda99a6ed7c22141d03c6"],["/tags/支付宝/index.html","e79fd2580f4d940ec26e919929dbf64a"],["/tags/收藏夹/index.html","a0119334ab254d6db699460ad6231f6c"],["/tags/教程分享/index.html","b6934161c34b09003bae747fb83fb99d"],["/tags/文件/index.html","b44c9fd5a582dce038d44cc765a4aa1b"],["/tags/新拟态/index.html","f38b08e816859671b0b71dc710d43fac"],["/tags/无损/index.html","9c6dfcf74bc72f3077e48b6f5226f6bd"],["/tags/智影/index.html","692c4d332c9d463a72ddd7e93f6d5bbd"],["/tags/查看/index.html","df363d97bc181aa96893d3c548932dd5"],["/tags/树莓/index.html","f9eeecc19a0852746dc741c5f3d33dc9"],["/tags/格式/index.html","7aad60a1ee6df621f6fad452317f5455"],["/tags/油猴插件/index.html","a1965b7fa4289a86d7df971a8bce0a98"],["/tags/流程/index.html","05b4616c7a043ffef94a0cae964aade1"],["/tags/清图/index.html","567a57c360d8a652a321668df74db397"],["/tags/源代码/index.html","859846c7b409da09b9e67f3ccbcfa428"],["/tags/源码分享/index.html","62af21a6a4e07d5a477ea8677b4fbc09"],["/tags/生成/index.html","a24bd61d80b62c016b66af60b5370efb"],["/tags/知识产权/index.html","443c7848dd9d12ebadd0839651cfff2a"],["/tags/硬盘/index.html","e409406670e6a7da0c0d8075cea9e3a0"],["/tags/程序/index.html","1b48f00f2054a94cbc5caef3844cdb89"],["/tags/空间/index.html","12b923e2327cb8813351ac81601a9229"],["/tags/站点生成神器/index.html","5c9a2693ce7013147cd9b9dad785f2b7"],["/tags/站点监控面板/index.html","be79d56d90a39d4d93552e89d665609f"],["/tags/素材/index.html","55bdfcc000bcc32aa53802881673c8d5"],["/tags/网盘/index.html","a85d1f17c524f0f42e4ffb29b515001b"],["/tags/网站/index.html","d48add37a62d6f3a3cfe517b6df21168"],["/tags/腾讯CNB/index.html","790588ae6a154fcc6ff89cda7e150e21"],["/tags/视频/index.html","a70840a59952403e61c9f5924e1dad16"],["/tags/资源/index.html","e9ea9b63591f01c44124200ac9733820"],["/tags/跨域代理/index.html","1d25d853411a8c77d5016a4a2771273c"],["/tags/转换/index.html","8dce83f2ee3b326d15a90153b2afe369"],["/tags/软件/index.html","5f1cf3dd8d6c301a6d0bdd0946570b5e"],["/tags/运动步数/index.html","c9b285a23a355211416191351b62f055"],["/tags/邮箱/index.html","7db9410c5e9e7d7e5523ef55b529f84e"],["/tags/镜像/index.html","420e62965e29fd5a7eedad9875c1b92a"],["/tags/长度/index.html","14429d4462c9910ebbd026987e9ba477"],["/tags/高性能网盘/index.html","2d1e0aa0a5d2587451b67dd55fc96b41"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
