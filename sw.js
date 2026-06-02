/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c2d497884c328c808816976e64edeeaf"],["/about/index.html","e74a57a3d3320be88e1a86b0c34b7d0f"],["/archives/2006/08/index.html","03d32b81405beb14cc46668d85828d24"],["/archives/2006/index.html","f78698ee352899fe9d7c3acb650569e4"],["/archives/2021/03/index.html","5f34316e620ef67a77ece0547dc52d77"],["/archives/2021/08/index.html","500d46abe4acc90b06565e17850945c7"],["/archives/2021/index.html","0d5ceab40682d702de395978987f975d"],["/archives/2022/05/index.html","afd4043704b0041b06c48fd8f3f9dff2"],["/archives/2022/05/page/2/index.html","67c6ed135c3a85ea481760fc2086cad3"],["/archives/2022/05/page/3/index.html","79ba279ff1d5be4bf2121d896e6eb6cf"],["/archives/2022/index.html","238aa2b809af18222621a9e68528b7a1"],["/archives/2022/page/2/index.html","f74694df78443de60e1f5c3b91ab38e3"],["/archives/2022/page/3/index.html","8fbe05d7c542c7402f119412e001236d"],["/archives/2023/01/index.html","d53fb0156c01719a2d18ada586c3ba4e"],["/archives/2023/index.html","52bb8caf8e29a4fc27d170db588afc25"],["/archives/2024/12/index.html","9630cd72c58c4e66ce3c65874d845747"],["/archives/2024/index.html","822fa96cd913813a16cc1ad8b563a12b"],["/archives/2025/03/index.html","3f4f7b2e4dfe4395a9718150c73c6b2c"],["/archives/2025/05/index.html","6e595b20897a600126ddec8956403cf5"],["/archives/2025/09/index.html","d2bd6532fc05f9eba1722786a9ad08c0"],["/archives/2025/index.html","df8ef8aecf3ec195a94223bf4e4d1c55"],["/archives/2026/06/index.html","7f7bf62506ed732c92436d383804fe4c"],["/archives/2026/index.html","26e49474bb1b909db45bdf80aeda9086"],["/archives/index.html","0a86cd044b31a3ff7b356764aa2a9a3a"],["/archives/page/2/index.html","bf78e18992ef0e5ef154737eab6f40e4"],["/archives/page/3/index.html","e3daff2bb277dbd8bb6d6d13c98a8604"],["/archives/page/4/index.html","eab8906b2c71a2073fbf2f3e85f50c2b"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","82b8e13d5b1895aa359c223f724bc8ee"],["/categories/分享/index.html","25fe5d8e098fa94bf72d891c319296eb"],["/categories/实用工具/index.html","76422a45da4af5aa622295e24ffb39b9"],["/categories/技巧分享/index.html","cafb2da50dfe88bf812d5e25e2ee7e82"],["/categories/技术分享/index.html","76b8ddb121379bc317b4bc2d10b072d0"],["/categories/技术教程/index.html","cc616479334f59c19128c4a6e94cb562"],["/categories/技术教程/page/2/index.html","6f95b67e67620a50d0ddd71fd8eab05e"],["/categories/源码分享/index.html","7f71a0bbfc77cc39d905b765f9139b18"],["/categories/福利活动/index.html","8d15f8aee7d3c06a3ac6b435696a44f3"],["/categories/网站推荐/index.html","4eb410dd7a17d68e107a3413ae1b5d58"],["/categories/网站推荐/page/2/index.html","46fa3e0527a04907d0e37713a7bd5c17"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","fc8ee4fa27a22bd77998aec24b140d40"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","10ef8141e67c1c15609ce47ea91a20f2"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","4aabf8a1a6161a785c58dbce5747e404"],["/music/index.html","d3590d19307b2ec554df2877eea148a5"],["/page/2/index.html","2d1bc04543fa4fa5c684888fe415d1c3"],["/page/3/index.html","3046292bcbc8d598a3c5135b10e9a15f"],["/page/4/index.html","18ca3b33ec173b727d67dd911acdf4b5"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","440eadfb845af9a0515a5699e7476e3b"],["/posts/096db3c03b6e/index.html","3f9164d4ced234b5cf3d80adef672db6"],["/posts/1235535247cb/index.html","e73704f802a2ffe4cc54de3144b5a2b2"],["/posts/13b70ad2982c/index.html","4fa57dd79431d31855f40971c4e95b90"],["/posts/15fa81012f63/index.html","364b7113850b7245c8f8d3c560e556d9"],["/posts/1ec0df688f03/index.html","5c9c70fe72300d82bd30b9bbe822c923"],["/posts/2aea82a850f0/index.html","6b768f78e5129b60859cece84c18ea24"],["/posts/2b7ac1a9709e/index.html","d371f9993ef96ad1ffc8ae95cad358df"],["/posts/2bb24d491704/index.html","c5762a157556b3361f67f15a59d8c457"],["/posts/2c9261572067/index.html","405436dea5ee06bf94f283ae15b08ba7"],["/posts/304408dfc52f/index.html","5f8b6619ecc98ce751cac250036bf9ae"],["/posts/311ae06fbc6f/index.html","8187568b6fe1ff6c5d96ef5b0c8aab7c"],["/posts/41c16cb60b68/index.html","89cf918537e92218b9ad73e7be93b382"],["/posts/4358b00bc797/index.html","00c92e603f6bc6e62f22fccb53e04dba"],["/posts/4acff0774207/index.html","6c5cb5447a156b05761133d3e947e864"],["/posts/4b6cb4514456/index.html","48193167447fdce48dc4e36792b8afd4"],["/posts/61d1b897dcb0/index.html","d0e5df5b154d35fdabc4954c845a86a7"],["/posts/6631458408e8/index.html","d17e0f7fe5534e117cfba77786ae92db"],["/posts/6cb2454df473/index.html","e6a2b68bfd94e363efe7f97fbeb80d97"],["/posts/6f929ba7ef0a/index.html","91b337791b9ed16536c2a06b03011d03"],["/posts/76dd1b500ee9/index.html","86adf9c0289a24c4cf2dc843670c1d7b"],["/posts/8ef6e275fcc9/index.html","10cfb869acf214a991e34f3a2870bd8e"],["/posts/94456e62e22c/index.html","62d10d7a09a38e421fb7099b5301599e"],["/posts/9792de8b38a6/index.html","4996e19fbd2553995a25f0444e98857f"],["/posts/a84c927bae36/index.html","b8a37f8a7243271ae7d567e15bf53fa7"],["/posts/ad5499059bd8/index.html","cf154133d1e8e3a1b935d7d01657f396"],["/posts/b1a6e353d3b0/index.html","d5a365a50f08010f7cf0ff7e6921a8d1"],["/posts/b2dc15e2ff89/index.html","98addd526331060ac5669bd8b02ff944"],["/posts/b478f3198c73/index.html","812e485d371f184c66c2feb439cd4864"],["/posts/c0ae68f04a1c/index.html","dea0e13e93ea12029a8a157021d9bd9b"],["/posts/c821481d77c0/index.html","6d8483d12fdef9250ca7e89396809aae"],["/posts/d81821f9e51f/index.html","cb592d6d5808a2c877086070527ae8e8"],["/posts/d911ff6fb3e3/index.html","d3eded9045c4223b9806f6e20a714bf8"],["/posts/e91323c67bb7/01_codex_desktop_download.png","aa31ba69ca67f657544e726acb201856"],["/posts/e91323c67bb7/02_deepseek_apikey.png","0ce6d1e56487582654b8d8eed1b8f511"],["/posts/e91323c67bb7/03_deepcodex_releases.png","c1bd80e297c78064e8520ce5972e0ee9"],["/posts/e91323c67bb7/04_deepcodex_key_prompt.png","513eff57b27789d3f05b1183f73d3044"],["/posts/e91323c67bb7/05_deepcodex_switch_success.png","377b7ed4ba74acfd2707841d5b6c709f"],["/posts/e91323c67bb7/06_codex_test.png","8bf58d170f086ace31a25408425b4d72"],["/posts/e91323c67bb7/index.html","0548ff27908bd3a49c17dd7b77d4c1d2"],["/posts/ebffabd07766/index.html","bd67d3920325f86afd999aa9f42e0ecf"],["/posts/edc724f3bf5b/index.html","2d1799e18a3e55f341947ee18b39a19c"],["/posts/f30c3df9c2fc/index.html","edce6d8d18786474162edb263e6af758"],["/posts/fb79b38d6277/index.html","1fbcbba5426e8c124f1f38c7c3082aca"],["/service-worker.js","279e23f6a7e46109e2a8fe5a6fe229b3"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","f0d62c0983e43817774d9d4c50a9e544"],["/tags/255-255-255-0/index.html","a44eaa418fe774d3691b2e96d63ffd8f"],["/tags/AI编程/index.html","f08306530dc78488ad04724e39e79b8e"],["/tags/BS架构/index.html","2d5c5e11386825e02f77da74aea84587"],["/tags/Chrome扩展/index.html","d8b655caf5bf0375429327f3cc87212b"],["/tags/Cloudflare/index.html","c3795a98eaf270fc84a4368c44d4863a"],["/tags/Codex/index.html","90af3fe7e2638645bb64b08a88046b32"],["/tags/DeepCodex/index.html","8317fc56e856ffe3c640697ad0457e13"],["/tags/DeepSeek/index.html","9aa69bbfac0b628dcf24e7b3b9d3ee9f"],["/tags/Docusaurus/index.html","7f4dc07e66843d28c1ffcc4c7fb787f0"],["/tags/Magiceraser/index.html","7879f5e0826c8c1f28b36ec2a929996e"],["/tags/Neumorphism/index.html","65c58b3836561c2e9111312ebf2c3631"],["/tags/QQ加速/index.html","81c998d7e842fe749b5f39b18bdc4a9f"],["/tags/UptimeRobot/index.html","258d0f2ffd92e45ae3890615e614c2bf"],["/tags/Zepp-Life/index.html","c2438aa589501a16e1e0a399e7885b2d"],["/tags/css/index.html","982f1a9685c5aa37db319eae9208ab08"],["/tags/dns/index.html","c42234c9d4c0688f1cfc2dc5fca0d344"],["/tags/docker/index.html","973a14b6709ef1e5804377d395f66e4c"],["/tags/ffmpeg/index.html","327fd811c463e9edb4c1538ff772b6e0"],["/tags/github/index.html","f9e2f25c87368f3538ea4c2df62f507e"],["/tags/google/index.html","7a3d2f25199ce99ea6d6c8d451da3828"],["/tags/hexo/index.html","ac2cf935159bfa4efde2328b335aa999"],["/tags/import/index.html","7fae58054d6c1693b2ed0c5eb9059644"],["/tags/index.html","17232e0a5f2b93cb852a83beb7ef46b8"],["/tags/ip归属/index.html","21fb9223470b19412d4ecc164114ab61"],["/tags/linux/index.html","bca3362ac46f5a42f3ee391639f61dab"],["/tags/nginx/index.html","31c589e6ec129b44bbce229cf239537b"],["/tags/pdf/index.html","63836d4427b3a9b4767533842685a26e"],["/tags/play/index.html","ddd126e3fd61fdb10517f1e19b89e737"],["/tags/python/index.html","8ce8edde8a7734e2b0b397c6cf42bdd2"],["/tags/serverless/index.html","a1dfb18acd4c70517a036cd1ac5ebd1c"],["/tags/smtp/index.html","394871f1b7780b702bc2b528c4712e16"],["/tags/source/index.html","fe8813d77cf1a26b73a1f30ab0fe03c3"],["/tags/sudo/index.html","ce840b1d5d7509486fa36bf7e19ffa53"],["/tags/target/index.html","033ddfdfcd519314f3ab764215c8257a"],["/tags/tinywow/index.html","ee1a20602608e01caf1fdd2b8c5197ba"],["/tags/usb/index.html","876f1446967f708fbf861781be87ff95"],["/tags/wifi/index.html","5d829dcbca424c8374ef78e71da8b29b"],["/tags/zip/index.html","5fbf8361a79200044908154d9f5165b5"],["/tags/下载/index.html","d90437372d59ee8e04be9b64a5d6b027"],["/tags/个数/index.html","6358034f88d25812ffcc5d7fce541599"],["/tags/云原生构建/index.html","09fb3dfd7310c61b4dda5efcf05f6b43"],["/tags/云搜/index.html","ca702c2446ec725f266ad9487aa9ee79"],["/tags/云盘/index.html","57002cc5d866b73e9db2459ffaeb551a"],["/tags/代码/index.html","783654df6379d9a80e05b7a1d256c3fb"],["/tags/免费/index.html","6acefb6a83583213c99f1838d6d16176"],["/tags/免费服务/index.html","598cc619c9055fb5dca60e1b4d8ac1c0"],["/tags/函数/index.html","a5309f6b973b3d2d9e676f2bff943887"],["/tags/分配/index.html","7bfed2baf367b0045224baaf369413b6"],["/tags/删除图片/index.html","70eb5d80f425c5e4c531b67d1c790ec7"],["/tags/刷步数/index.html","4fd1c9c22ab0053f54b684077f28e5a8"],["/tags/刷步数工具/index.html","39bc8765ea320f190d72fa02e70a8afb"],["/tags/前端开发/index.html","f56a1da599b21fd8aa4693d3bff5e879"],["/tags/剪辑/index.html","030e580589cae8038b0b3b370b4131b4"],["/tags/压缩/index.html","e042398e47d33ba8c4a9a641778b0eba"],["/tags/变量/index.html","3b9d19ca018c58870f535415220d3a88"],["/tags/同学/index.html","41547181f4512d14f63dd53e3d643722"],["/tags/命令/index.html","b11fc407dc6999eddb7cc3cb30269e4a"],["/tags/商店/index.html","193591fd5a1742548664a5ee1eb36735"],["/tags/图片/index.html","e92ed83999b9d83666ef38074e2613b1"],["/tags/地址/index.html","e907a90dbec085d860b0beedef56b4b2"],["/tags/堵猫猫/index.html","15f0a683b16d99007a63055a7fe89204"],["/tags/处理/index.html","20b6bfebad41ef54d0aa953f20eaaebb"],["/tags/子网掩码/index.html","5ea57f38135a10db1e9c4b55202b21b4"],["/tags/学生福利/index.html","fcfd62b176bab126ff33736d328efddd"],["/tags/实用命令/index.html","3fd7ed367ed0f88eecdbbe941fada219"],["/tags/密码/index.html","56af67ed3424e69673d579cbc92fc8c7"],["/tags/小游戏/index.html","756a0181ad2e071b2f27d4a0a9868efb"],["/tags/小舒同学/index.html","d8084a2e1ff40b199d34a51cee59c763"],["/tags/工具/index.html","900c007422f109b11cba17ac32b21bca"],["/tags/应用/index.html","7a67206d02c2c06badd55f3b9ad12234"],["/tags/开发工具/index.html","9ac05fcb797c7f9f93c231ac22859ba6"],["/tags/录制/index.html","4a58e4636a914abdea60753fd541688c"],["/tags/微信/index.html","ac830beaaaa97315ac5d854cec5001f5"],["/tags/微信运动/index.html","8b2cf286d2ab95db06151b3a65173f1b"],["/tags/技巧/index.html","8a760a043cdc7d3b53ba26e7246ebea7"],["/tags/技术/index.html","b3eea27ea0a38959de9030d17cdfff16"],["/tags/技术分享/index.html","c899741f8a7a5dee4648688171ebaee0"],["/tags/招商银行/index.html","d6514295f5bb4f780bb282f6c79be762"],["/tags/授权/index.html","3bef1a6f7e5f724671a2b0ebf760dc23"],["/tags/插件/index.html","620e7a8f35886b297d7d134a31b4f894"],["/tags/搜索/index.html","41147b0ed6861c2091ab676379ff7831"],["/tags/搜索引擎/index.html","42c02af3232612127421e2b7a49e2a7b"],["/tags/操作/index.html","63f90063ef3db53852826be1795edd9e"],["/tags/支付宝/index.html","b7e864d720c33ffd105612dbcf3c13ca"],["/tags/收藏夹/index.html","efbd838c589aa4dbbb67c25d1cc65221"],["/tags/教程分享/index.html","7788bc7fd770845470babcb09bb5516c"],["/tags/文件/index.html","b8f7715d6b777d8c8d1087e86392e973"],["/tags/新拟态/index.html","4f4eedcdbc401fffc91725562c68b2e6"],["/tags/无损/index.html","68c4f7665eca598f402991c260523c37"],["/tags/智影/index.html","b03b13569735bd2b21b051053432bdb5"],["/tags/查看/index.html","4e0e82b2bdd076b9b7dcabd3233ad946"],["/tags/树莓/index.html","9d2566153d691f77e410525e50117e71"],["/tags/格式/index.html","09c82cf01e64c74a46a33bfc708f7ab6"],["/tags/油猴插件/index.html","e16907a354fe27a24edbc345b01e8af4"],["/tags/流程/index.html","3e06c5a4b4e886ac6f680e29af3b3773"],["/tags/清图/index.html","6c28623ec0d898e288c20ae4a63d8ec1"],["/tags/源代码/index.html","da0bdb67eb3bd58c894945c7d902d3a8"],["/tags/源码分享/index.html","f6398882ae82649ed93e4b9024ce4c83"],["/tags/生成/index.html","596f335b007778261ee25f113e1dd482"],["/tags/知识产权/index.html","2b800712e5b68fdb7fcb698f399c9030"],["/tags/硬盘/index.html","ba2e1dbc7cee405a2f749978a734f557"],["/tags/程序/index.html","f64da99c9f488fb001b4d599bbc62756"],["/tags/空间/index.html","8d78f4d39c7a21e22d31fb069476d537"],["/tags/站点生成神器/index.html","11e29efa3bc2eb10964c1416f1b7c2a0"],["/tags/站点监控面板/index.html","1423046f7071054e5b64a29fcd4d445d"],["/tags/素材/index.html","94c797bd39b218b7324811ce5dab0ef9"],["/tags/网盘/index.html","0b27eb4d984d9812341934e5b1ec285d"],["/tags/网站/index.html","4b14067dff83008fee2c2ecbf5c588bb"],["/tags/腾讯CNB/index.html","21006a0de231c749f078c0647abc36d5"],["/tags/视频/index.html","51c1124dee8ee1323ff4d1ddb2ba7295"],["/tags/资源/index.html","d23e327cf3ec52d7680f229e12418440"],["/tags/跨域代理/index.html","05c0a7391cf1937d0ed313c776376421"],["/tags/转换/index.html","e1595b603a3f9c78bdb838522abd0634"],["/tags/软件/index.html","31e37b3f6d5bce3dfde354a9a384275d"],["/tags/运动步数/index.html","ca634e2c831954f581b5e49a4ade6f20"],["/tags/邮箱/index.html","3c2e3ce3ab77e2a34b43d76a7ac56b2a"],["/tags/镜像/index.html","14bcb4fa96bcfe087f1a1bbd0eed0be9"],["/tags/长度/index.html","f631f9e4f0a37c9b7d3b6bd4e0434413"],["/tags/高性能网盘/index.html","c50fbde9687259fe3bbe09bb8491328f"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
