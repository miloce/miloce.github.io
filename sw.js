/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ca2f05e30dbbf615dd01bcb0ed85156c"],["/about/index.html","6019556550b9c95b1ebd1fe18b28454c"],["/archives/2006/08/index.html","e8a39f1fc9a10c14ea80fe4c0bc9103e"],["/archives/2006/index.html","18d43c3bdbbd5852195f0000ebf3838e"],["/archives/2021/03/index.html","167229f5d9b6f26c46bfe633a1f3382e"],["/archives/2021/08/index.html","e07bc08093e77252d58c16fe51747a4e"],["/archives/2021/index.html","bf42d44cf533f0d526b2c60771aaf993"],["/archives/2022/05/index.html","a3683f39f8b4cb8982684f45bd5e1141"],["/archives/2022/05/page/2/index.html","073ab6c745b0a81e02d798385ef1e8a1"],["/archives/2022/05/page/3/index.html","6798d2fafe0e6140119c1fefbb73304c"],["/archives/2022/index.html","0bdd620a8e931d4f2d033a4aed787bce"],["/archives/2022/page/2/index.html","dbdb46d77ee2c87f6a4601a303b1754f"],["/archives/2022/page/3/index.html","e2fcdc8c65e277088bffe4b8a0568877"],["/archives/2023/01/index.html","19e3cc2d98a335aa47fbfb0b1f5bd807"],["/archives/2023/index.html","d7b551b303311978020999cc42f5580b"],["/archives/2024/12/index.html","29e4d53852066eb165a4e4801b32f020"],["/archives/2024/index.html","7cfeceea179bf548bafb1c9416c7024b"],["/archives/2025/03/index.html","315e0b869e64bea58c391b038f148ff4"],["/archives/2025/05/index.html","25de4d8543a34cd6f676b413c5bd80de"],["/archives/2025/09/index.html","627389d7fedcbe44be373a97051d133e"],["/archives/2025/index.html","63379272801b8ff66d568b585ed74d2a"],["/archives/index.html","654ae45cceda62b8e10658b5d024a6a1"],["/archives/page/2/index.html","e1ec8f0f26dfb8f3ae381bd36bf2c35d"],["/archives/page/3/index.html","a7878b64e4b93a002f6e962697a7c71e"],["/archives/page/4/index.html","7cd7944fd8b3f730973eedbb467d2775"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","c89b79b02c81c1f3a5c07fc737afb00f"],["/categories/分享/index.html","b0faba6528b202028fa1c8022662815d"],["/categories/实用工具/index.html","87328a539408218c7181755bbe477a0b"],["/categories/技巧分享/index.html","28752303c90c3807bb5d6459b2e36162"],["/categories/技术分享/index.html","65b09acd94c7fc1aebd560b3d780fc24"],["/categories/技术教程/index.html","fa1ae14ba3192dd0b9f89a6964b7cae1"],["/categories/技术教程/page/2/index.html","670339d2e739b17d1c5c0baa4d2ccc0e"],["/categories/源码分享/index.html","e37fae6f5b5a9a4aeefe010925705d64"],["/categories/福利活动/index.html","2d483d3dbdfe66095e250304f071c145"],["/categories/网站推荐/index.html","17e7900b9d3c526d5754c4e9d05a79f6"],["/categories/网站推荐/page/2/index.html","3a204e47e4647781fa25f3b3f29e2ae8"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","e48414359d3480afb9cfbc996f39d895"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","2d66b8af51d5af82a2c5cf47940c1ed2"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","1e3b3eec799a57f797eddb11e2532df6"],["/music/index.html","be7d6043bae4b5165a589e363169ad8e"],["/page/2/index.html","88c856cfe0bde855352179fe0df63246"],["/page/3/index.html","2558ad9d10559c78bc12a1884a7af426"],["/page/4/index.html","603bf9f0d9a62262006bcd2d4dac12ae"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","603e44a03ee9c3188654ae16686aaa7e"],["/posts/096db3c03b6e/index.html","c4653e59c8699fddda324f8c6d0db148"],["/posts/1235535247cb/index.html","7b5d333049d6816096978cba260d3cb4"],["/posts/13b70ad2982c/index.html","432ed595aac09041d4c168876a0d1137"],["/posts/15fa81012f63/index.html","c6a2d78481f3b3b6e8f8adf2f56b54c1"],["/posts/1ec0df688f03/index.html","da1c8f4925bf5c225a3df25ec5327aef"],["/posts/2aea82a850f0/index.html","9923bca89d70f49125efecb9affbee7c"],["/posts/2b7ac1a9709e/index.html","b8cab4605d5b657646e37f1e0af5d298"],["/posts/2bb24d491704/index.html","fd27d6028f286a64563e3b08c928deaa"],["/posts/2c9261572067/index.html","35b641a5a613f19be5f711b8956b7a24"],["/posts/304408dfc52f/index.html","7b71c750afa1d0fb72dc55a5eb597366"],["/posts/311ae06fbc6f/index.html","6d100f250e2fda255c0484f5df38d223"],["/posts/41c16cb60b68/index.html","7a4567ca5e99c8e01b4c999f0a26e3f8"],["/posts/4358b00bc797/index.html","9f6787f82d91df25be894d3422c6e4bb"],["/posts/4acff0774207/index.html","8c2deeb659b0aca7b4839542273b3be0"],["/posts/4b6cb4514456/index.html","552f08fc38581f5c9b8bad0e336c81c9"],["/posts/61d1b897dcb0/index.html","bebd7bbffc9207da6aa11c7899301fe1"],["/posts/6631458408e8/index.html","89b8eb799feec30e4dbff4901a45f787"],["/posts/6cb2454df473/index.html","09c8c2757a3b7724cca5892475a2e746"],["/posts/6f929ba7ef0a/index.html","0412418135a115f0985e88970f3cd0b1"],["/posts/76dd1b500ee9/index.html","d4b762a07cf7c6e47a0e4be127879ea2"],["/posts/8ef6e275fcc9/index.html","c780c1c9da0b397df792160a1ceeb1ed"],["/posts/94456e62e22c/index.html","99cce3f2b5851c3daf7e0241f87b0a6d"],["/posts/9792de8b38a6/index.html","c18e5b5d8e2d9929c23ccecf5edef66a"],["/posts/a84c927bae36/index.html","13a846c9cc70330688912bca48a208a9"],["/posts/ad5499059bd8/index.html","6b37466474b711d2483a6ad54fa307d8"],["/posts/b1a6e353d3b0/index.html","2c9949d653a706ab322da4a085c06ad0"],["/posts/b2dc15e2ff89/index.html","edf19765aa35a7eb11e46f9708047ca9"],["/posts/b478f3198c73/index.html","c39d346584ca6da63d114dbd583e0036"],["/posts/c0ae68f04a1c/index.html","2ce033087f7acac1099bf4ec6c7b13bf"],["/posts/c821481d77c0/index.html","362b1cc81a7dcf11c670b96897a6f42f"],["/posts/d81821f9e51f/index.html","c517e539449c0f96bba121dff8735e1a"],["/posts/d911ff6fb3e3/index.html","614544264457756dd2052f48a0c4e386"],["/posts/ebffabd07766/index.html","0bead803099eef1a3c023b7f436212c5"],["/posts/edc724f3bf5b/index.html","e29f74250c3f92321ee50d32910cc103"],["/posts/f30c3df9c2fc/index.html","fcee8874868e00319b49d04704a05881"],["/posts/fb79b38d6277/index.html","9f803245c58c839d68579f83e0353400"],["/service-worker.js","a1216c6aeaf48aff611edad63357c574"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","c145fbe563eb0425cc3ce809296de2c1"],["/tags/255-255-255-0/index.html","7c3b6c4f83d3472abd79209fe6510eee"],["/tags/BS架构/index.html","964d757cfa706116ead1e1c031c13c31"],["/tags/Chrome扩展/index.html","3b4c1488593e4e0874158895109946e2"],["/tags/Cloudflare/index.html","e60edd23363f72c03ff721060502a1e1"],["/tags/Docusaurus/index.html","75d86647537db38d16556f8c559ce06d"],["/tags/Magiceraser/index.html","605b68799acb6576dc9122ebb7e69ede"],["/tags/Neumorphism/index.html","3971267928163fd9ec8a59fab1bd70b6"],["/tags/QQ加速/index.html","2208e4d78b9eb12c20ac97a7b28c20fc"],["/tags/UptimeRobot/index.html","7e32530e5e6b916a40cf325232cd5572"],["/tags/Zepp-Life/index.html","b18260bd1fe9b04c9a34e483d3b85f82"],["/tags/css/index.html","3954e96ec04ac8e40ab191c50bfbb626"],["/tags/dns/index.html","1cb76e2b23655eaf35c8228a46edfdb2"],["/tags/docker/index.html","fdeaf8111883d1abb42abe6c8d55d308"],["/tags/ffmpeg/index.html","f54f1579999412534793a918160081c2"],["/tags/github/index.html","a17bf96d054236b1edbc401193e20744"],["/tags/google/index.html","e088fab59625a58ec54031c22ddc6375"],["/tags/hexo/index.html","7faa41c51ed5808746bb9a494f73c7f3"],["/tags/import/index.html","586a41a3dd98e1c59aed41d801757078"],["/tags/index.html","87a84e0d5dfffa3af47724ea84c5e61f"],["/tags/ip归属/index.html","f985c6d2c85521e3bb83a9485b8d1405"],["/tags/linux/index.html","345c06c0c5a91780f03e5422b86cb2ef"],["/tags/nginx/index.html","30c746b096603e563cba6c173ccfd209"],["/tags/pdf/index.html","05a4b4d222eae43bda156007cee81f09"],["/tags/play/index.html","5cd258dcc9fb76330be9dac0805029be"],["/tags/python/index.html","e77d66d41750e4081a2bf10b8f5640b1"],["/tags/serverless/index.html","912cf5dd2ce957e948a946724ca343c5"],["/tags/smtp/index.html","c827029f4c8fdecdf82d820225e2560c"],["/tags/source/index.html","3b8cd9c03241b8e45d726c50d590f14f"],["/tags/sudo/index.html","33b818f7df8c6e560afa24957787e14d"],["/tags/target/index.html","b1fafb018a2dae4cda06bb22aaa4fd1a"],["/tags/tinywow/index.html","32bda898ac05040dd904d61672fc5f0c"],["/tags/usb/index.html","c961054b229f59536dad37cbce476c9f"],["/tags/wifi/index.html","cdc478d22c4db929ce86ea4d827286c5"],["/tags/zip/index.html","9a63fa7e38367e1c81ce235940e631a7"],["/tags/下载/index.html","6f74f0a8182ae9f9a3377798fcfc698c"],["/tags/个数/index.html","ea14d88784cedff70bc9fb74fc6db0ba"],["/tags/云原生构建/index.html","e65950f0edcd4a601dcc26c5103c41da"],["/tags/云搜/index.html","c6caedfa2cbbe001c1b57780620fd487"],["/tags/云盘/index.html","7a9fa38fbef7cb5618ad121743da48fa"],["/tags/代码/index.html","1b3f3b85673184ca9e76d8380f8d35c3"],["/tags/免费/index.html","b27281dbf525fad5639034446d099833"],["/tags/免费服务/index.html","31f2fe367ff1ea1d0663fd8d7ac860f0"],["/tags/函数/index.html","b12df005708c69b30583c38052cc1719"],["/tags/分配/index.html","cab61ce6d813790f07605db993801041"],["/tags/删除图片/index.html","ecdcb1a6fec91c585ae32c6a2fac7e90"],["/tags/刷步数/index.html","4f30982fcee93f8915a46708826fd848"],["/tags/刷步数工具/index.html","f7f8479250ba99055c5492c4dcfe2ed5"],["/tags/前端开发/index.html","274490d2ef43419107fddb2239b9e52a"],["/tags/剪辑/index.html","373549c87314511c8f4039d2b4ffc090"],["/tags/压缩/index.html","460411d024a3ae0145f0683116302ed8"],["/tags/变量/index.html","f675df46f01f3e2c7bccfaeddc5177b6"],["/tags/同学/index.html","5d6eee5632b0cc3f5af41d9826023afe"],["/tags/命令/index.html","28f6eddcdb1bcf4a914f2bc03a48403e"],["/tags/商店/index.html","524601474b1b95689c5cbe980d8935de"],["/tags/图片/index.html","9df5a3e6bfff696c0ac18cd054cd5341"],["/tags/地址/index.html","5de10f6489696c3a8742ffb3eb587098"],["/tags/堵猫猫/index.html","43827d2c0dc5eb95bb630499cc657dbf"],["/tags/处理/index.html","217b01749008ee442c0770c9bbfa0a15"],["/tags/子网掩码/index.html","16bb0e04c346c553fea9c8c8344993c0"],["/tags/学生福利/index.html","895ce3a46ce5a624c32ba40018601a55"],["/tags/实用命令/index.html","cecc54418c1f10ee8805210df3aff258"],["/tags/密码/index.html","86f8956fcbd728258f1e42f64641a3e7"],["/tags/小游戏/index.html","946766ac799f203b3a2938a586dbd809"],["/tags/小舒同学/index.html","e7bd978dae6e2eb4c82985c0c0a9ae2f"],["/tags/工具/index.html","7c910c8f6eef2770e2aa3fa5da4ed033"],["/tags/应用/index.html","c5cb0230b135dd0ebd04808c0a9fa0ea"],["/tags/开发工具/index.html","5ce297ca321068631e2f8b5b15c5e27f"],["/tags/录制/index.html","4920d714a38853fb0fe1c0eb3917942f"],["/tags/微信/index.html","cb8aa97dc9a7bca46d65947f1da8ab05"],["/tags/微信运动/index.html","1e9a580756e6d7254f04af3a465e032d"],["/tags/技巧/index.html","aecd1fedc339611c2d87022165214da0"],["/tags/技术/index.html","1b25bd2fc9ca5dd1d8f93164e983a98c"],["/tags/技术分享/index.html","3c895cfe3fe1c5ee4313853b439dc442"],["/tags/招商银行/index.html","d4e3a37a6b88b9424745d40a2c84f17a"],["/tags/授权/index.html","aee818620e3e4b0f40e0aaa61ff9dc6b"],["/tags/插件/index.html","c0b2c7b12eacc94533e4ec304ada3df2"],["/tags/搜索/index.html","3e7e62e35f93543ab6a1fe8085903a2f"],["/tags/搜索引擎/index.html","b0133dde3bfd5984b357515496bdeeee"],["/tags/操作/index.html","9c47181b69c7353918994c247ff9104d"],["/tags/支付宝/index.html","c97e3a9ca121de7eb5f1a34e82a9d6f8"],["/tags/收藏夹/index.html","781c2cf449acc274f0ad61efd6034d6e"],["/tags/教程分享/index.html","f43a30095bafe96af0d1c599bd77945d"],["/tags/文件/index.html","438d12bc4609cf3c4018666be1681407"],["/tags/新拟态/index.html","5bed037092eaf57cddf1682cdf428581"],["/tags/无损/index.html","a9d63918919182ac88a760103aa0f1c1"],["/tags/智影/index.html","c62b437bfc24e9f78f2a2b5bcd4cc1a7"],["/tags/查看/index.html","171ec46f47f164bed70d52b07ee56aa1"],["/tags/树莓/index.html","1ce8dbe64b86ca6bbb4d3991c04dbefb"],["/tags/格式/index.html","ffd3fee48027684d574b1e51ca3e33a0"],["/tags/油猴插件/index.html","42184769cc34a815465544423285a650"],["/tags/流程/index.html","893f454a9fbe961440732ffff8a06be2"],["/tags/清图/index.html","97c11ad16f0ab962f6b0495b41c1f7a1"],["/tags/源代码/index.html","c8b79e72ca58eb96a44730ea2093d6af"],["/tags/源码分享/index.html","0fe133c2a340a432fa9e78d93d347c9f"],["/tags/生成/index.html","c44b4d57d41954131ac4dfb5d5f5c63c"],["/tags/知识产权/index.html","0db146b0940ff00b87b40257c4522d34"],["/tags/硬盘/index.html","09c10cbe7489b64445160b77b8ec8606"],["/tags/程序/index.html","55ef503f1cba873b121123e31be33870"],["/tags/空间/index.html","61c3c4b393eef517b29b9010a9cfb945"],["/tags/站点生成神器/index.html","8d2017759ff8056e79c2d2f7d7085b59"],["/tags/站点监控面板/index.html","7d12bf158f461997df167f35e26320e4"],["/tags/素材/index.html","351a07b254c3e7cc1615d84df37ae9d7"],["/tags/网盘/index.html","85eaef5a8ffcf3cf02fcd7f9148719c6"],["/tags/网站/index.html","693a7d27ecaa8b7028e186f6beaf3129"],["/tags/腾讯CNB/index.html","42993cbe495622d299082d375bf3eafb"],["/tags/视频/index.html","5dc61151ed9d798e3cb1506a57b17f9e"],["/tags/资源/index.html","072d9ca5a5d21b0001d889ae8b9f882d"],["/tags/跨域代理/index.html","cb872dbe56197fa8d51adc75f578a1ef"],["/tags/转换/index.html","07510a1b6548ce2e9a194871487bb5e1"],["/tags/软件/index.html","61e4eba67ae33404f2eda1b6c915248d"],["/tags/运动步数/index.html","b8f92af48957a2705b0963399ec03420"],["/tags/邮箱/index.html","a38107585f0fcc64fa5ae8c027eec638"],["/tags/镜像/index.html","2ec209d44cc6efd22f08d0c5fd5d730b"],["/tags/长度/index.html","1788ab3af9ff171d410b3b04afc7d441"],["/tags/高性能网盘/index.html","9e5606b934b29bc9805054300523c6c7"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
