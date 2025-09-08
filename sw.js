/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d0f5a52c2222ae6e658de981f8f13326"],["/about/index.html","f50e3ee256faf4868db3af3e03ccac17"],["/archives/2006/08/index.html","460a5ab1f7649d281ebf64ee5588d590"],["/archives/2006/index.html","22879216b8150ae7926fcde94375a593"],["/archives/2021/03/index.html","d14dc33ede61fccd3180c9da19d5f0d1"],["/archives/2021/08/index.html","5284fd0c8b21cb55d65314b43e17910b"],["/archives/2021/index.html","e2bd9e379ef2dd4b2290b83f28b4b55f"],["/archives/2022/05/index.html","4521bd87323d2f789cd50769bd4245bf"],["/archives/2022/05/page/2/index.html","143280938e59a074a8a7f36630ee384b"],["/archives/2022/05/page/3/index.html","06ee0cc65fb13c84d200814baffa50a2"],["/archives/2022/index.html","c2c6dbd9ccfd1448b4885ef3d7d8f249"],["/archives/2022/page/2/index.html","ef8a68ef88b46dd448c9ccd266b4748c"],["/archives/2022/page/3/index.html","27e9048b62a45a87f9d9a295601bd732"],["/archives/2023/01/index.html","0aa56b874832373000c88870f105e644"],["/archives/2023/index.html","56825314efb7bd5f6e5e8575e3be4c7f"],["/archives/2024/12/index.html","40b571f92d5984dbe6724d1f488a0799"],["/archives/2024/index.html","b5bfde8151959235be8cf6c92588aff7"],["/archives/2025/05/index.html","b306803a94a7c550e2a84a0f103b83ce"],["/archives/2025/09/index.html","ee958c2854777ce43221419ad8bc2706"],["/archives/2025/index.html","8f803a9d9ccc78a7384da1778514bcd0"],["/archives/index.html","c55f1f182c938340e73e0bd9360094da"],["/archives/page/2/index.html","75c4827b5058cf336b9d417b1331387f"],["/archives/page/3/index.html","4b284ea17f4a0842146387f7c6e5f289"],["/archives/page/4/index.html","21fa12a6b9df52db2507ee0721daf322"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","ac5df0390d3344bb0f340b511e7c874b"],["/categories/实用工具/index.html","4597fdcc292d3736ac1a33333abffb32"],["/categories/技巧分享/index.html","c8da6dca02ba3af97c1a83ea9ed16586"],["/categories/技术分享/index.html","a685633f4275aa53835ceaf3370cac20"],["/categories/技术教程/index.html","1cb0f655d2d8b15d5ff132122b8c5fa6"],["/categories/技术教程/page/2/index.html","ecb98117d1d1e41fe7be5be5b0c9c54a"],["/categories/源码分享/index.html","8d039c9de1f3eafa4f54012f2a45f5f7"],["/categories/福利活动/index.html","2fa19b706eeb8d1a3c9af2d3c655e26a"],["/categories/网站推荐/index.html","58ba6f5740990e14cb2c2697cca93030"],["/categories/网站推荐/page/2/index.html","1dea75164933c57c894dd699489cd44a"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","da91e498e52eb00f14d178e79eeeb5ac"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","611a2e98ee6c77c94d404844a211f457"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","3bedd56ec25278185ea75a0293104897"],["/music/index.html","75978709bfa68cd4611b42df2495d779"],["/page/2/index.html","f7c2396020b8aa0ba83a8ec99d8af741"],["/page/3/index.html","a5266374e52ff15a0660400ed2ee6f7a"],["/page/4/index.html","a7c3212907a887ff4c7b40a6eb256d4d"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","99b01808a4190eb583bf517876c8a7a9"],["/posts/096db3c03b6e/index.html","dbfe58adc985917a06473eacfdfac03e"],["/posts/1235535247cb/index.html","de1206f300970318b2fd9976f1542138"],["/posts/13b70ad2982c/index.html","0fec7ac0bbfc9fcf3c601e6ddc8b7d67"],["/posts/15fa81012f63/index.html","c7df9a87fa0763a1e04450022d02f054"],["/posts/1ec0df688f03/index.html","f68126f08667614e8330e659b284a28a"],["/posts/2b7ac1a9709e/index.html","759bcfb6ea371b55ac0dd6f12e8a0516"],["/posts/2bb24d491704/index.html","0107dc267a674e6e9015dd2c347af54d"],["/posts/2c9261572067/index.html","97290aa1248beb1288b216f731e1c0df"],["/posts/304408dfc52f/index.html","b235a200af217e6a98e194edd4cad1f9"],["/posts/41c16cb60b68/index.html","f717d661a5a65f376eb7c99fbf621c5c"],["/posts/4358b00bc797/index.html","5948201742cfdb9e2489307ad7961b85"],["/posts/4acff0774207/index.html","db05252fde5661939ca2ba812dc1bec3"],["/posts/4b6cb4514456/index.html","d6f02839f08b378dc28564690eb194fb"],["/posts/6631458408e8/index.html","e93fb38585f7f03ac6a05adb55d378d8"],["/posts/6cb2454df473/index.html","f290ee974510a16838311a74eb81c9db"],["/posts/6f929ba7ef0a/index.html","183c1a33afb2af99f9baa17286289bfe"],["/posts/76dd1b500ee9/index.html","afb63948efe911d4bc1d32cf7b328647"],["/posts/8ef6e275fcc9/index.html","448bd0ca036c4c1da0e79f277b585e71"],["/posts/94456e62e22c/index.html","c588e05470f70473d1c9d6f525a1ffa0"],["/posts/9792de8b38a6/index.html","081b798351999006e1c42f3e2f89b40c"],["/posts/9d119b73dd2a/cmb-service-account.png","a679b24f5db960401ddcb612610e59fd"],["/posts/9d119b73dd2a/index.html","7d5c1e2bec4cd2f9ce6328f2139ed8bb"],["/posts/9d119b73dd2a/jc.jpg","39250f60d65c34b48684bdc073457278"],["/posts/a84c927bae36/index.html","c032f61006ac11ce3168d522a08269d3"],["/posts/ad5499059bd8/index.html","bd90b8db1832d2d77d677bc34e11c35a"],["/posts/b1a6e353d3b0/index.html","175ac8175801e1c56312821025665213"],["/posts/b478f3198c73/index.html","719ed005b596a8365d2b4e79fb895f15"],["/posts/c0ae68f04a1c/index.html","ec2327b5a5c04db12faddc29cb31425a"],["/posts/c821481d77c0/index.html","2e7f3d453bcfc70fcbc121e5bf3f36f5"],["/posts/d1ded2bacbfc/index.html","75297516dcd072545a9a546a3bd5869e"],["/posts/d911ff6fb3e3/index.html","6d1d0f46424ee21ed835d01e94d35c80"],["/posts/ebffabd07766/index.html","1a1a6cd777cde2585b8c72fe4bb6529a"],["/posts/edc724f3bf5b/index.html","88cac5e7bf91767712e9bf67c598fbc5"],["/posts/f30c3df9c2fc/index.html","8869fcb84997a9d6334309f5ab72ab0c"],["/posts/fb79b38d6277/index.html","a665d6dd773e9a52f02b6aeeb1cd46ee"],["/service-worker.js","4d85b9e45583576149a474f502c691a8"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","5584dd722665f5c6fd38a2586d59bc96"],["/tags/255-255-255-0/index.html","57483be0f4adfb4d26be8b5406143d00"],["/tags/BS架构/index.html","a4d74b010d15c68dd190f96c9159d8d4"],["/tags/Chrome扩展/index.html","a7e548415a354a508244427a585cbed9"],["/tags/Docusaurus/index.html","0e0b02ada5efff0cb7b14c8a9fdbce3f"],["/tags/Magiceraser/index.html","a372387faf205b67f6ea25de58c2a3df"],["/tags/Neumorphism/index.html","77931236b23e9789188dd8f79be8a002"],["/tags/QQ加速/index.html","a607ae18550def2df7762f9476f0ff64"],["/tags/UptimeRobot/index.html","50d209d36f269caa316c8be4d3d13bee"],["/tags/Zepp-Life/index.html","df86005ed63d583172827963ff4d356f"],["/tags/css/index.html","12b43737cdca66508c84ccd905dc81be"],["/tags/dns/index.html","e89432823a1051d36bb254a9e05754aa"],["/tags/docker/index.html","30c8c7ca0bc0b5ab1106e6005b04125e"],["/tags/ffmpeg/index.html","80c5646d52184bbd521a52b9e37d15b4"],["/tags/github/index.html","a2568ad893a60d5709e8eacf72602571"],["/tags/google/index.html","31219c6f54efedefa049285fd47ae217"],["/tags/hexo/index.html","6453b5ffc678ee1fcef5ca6b4237f49a"],["/tags/import/index.html","b5e837e5c966182d063e2bd5aca1af54"],["/tags/index.html","7379cbd8d66e50df7e897c4a0d9021c4"],["/tags/ip归属/index.html","85de660f27985bfaa0f43ab33f1a801b"],["/tags/linux/index.html","f6826ced40881d9632850ba782051e3e"],["/tags/nginx/index.html","02f8d922e991940436b46cadea36d646"],["/tags/pdf/index.html","c734c5d2134b900ba50ff66c6f07d36e"],["/tags/play/index.html","c2862a37d96c2fb82a03aba0906dfecf"],["/tags/python/index.html","e81257b3571abf293cd92547415ae316"],["/tags/serverless/index.html","693a12196c6c36ad9a484714b66a9ca0"],["/tags/smtp/index.html","9e1086c8167adc271252cd475005ca6e"],["/tags/source/index.html","e1a3c7dfe8fb27cc9fbb4555ea7a3dca"],["/tags/sudo/index.html","6b3d72dc355ba1ded6ab9a20e73b96d2"],["/tags/target/index.html","a2ff622189da370445a741eb34526842"],["/tags/tinywow/index.html","4c85ad2eef69ed9c92fd17f1ff5029e4"],["/tags/usb/index.html","90759b8e1ddd6deadea1c2004f16b390"],["/tags/wifi/index.html","c83b2a66826c9350844585df92ad7cb1"],["/tags/zip/index.html","6fc5b154009d081a40185353f57b7df8"],["/tags/下载/index.html","c135af18540354d641f58b5a80abb8cb"],["/tags/个数/index.html","795a3b42d1edaf2d8eb5e1ef296e1ae2"],["/tags/云原生构建/index.html","687175a3a3f71697691518a094c38457"],["/tags/云搜/index.html","6b5f8df33cb87d45cd4d83d8bff41a83"],["/tags/云盘/index.html","f591572418666a57499ee199809fcdf6"],["/tags/代码/index.html","69fe992fd60a9954eef6526f4b3fe655"],["/tags/免费/index.html","e44dc35fef337fe2cdd57d92cef6fc04"],["/tags/函数/index.html","1cb972091b60b98776d72d2f32caebeb"],["/tags/分配/index.html","8f825a654dc76db2b1b85fe8c12e988c"],["/tags/删除图片/index.html","9202d43b8c13d5a097acc56b86a021ee"],["/tags/刷步数工具/index.html","004b33d21659430bda0fc22b22344534"],["/tags/剪辑/index.html","d64523e68e37c1584db08a9d52e03ba0"],["/tags/压缩/index.html","ebb20519831bf889f265dce08d3dc275"],["/tags/变量/index.html","30031ef28c1c9813ad0735ec094a870b"],["/tags/同学/index.html","38895474c68248bb119e3ff28ba963a2"],["/tags/命令/index.html","5a6e48076666bd958a4047b51e0f8a29"],["/tags/商店/index.html","8dff369c5aaec0745ca0efe0d969d926"],["/tags/图片/index.html","14a472ae4b9fca6601f821fedae47d58"],["/tags/地址/index.html","d3fd031dbd8b2318230a150c237d3575"],["/tags/堵猫猫/index.html","9018937fd90beb44e4a9737a8a8d1449"],["/tags/处理/index.html","49449c3ac145d39ee0c345c7fdb2ae8d"],["/tags/子网掩码/index.html","453ff3172bfb7f84ce3f105f31fe88a2"],["/tags/实用命令/index.html","c2e72aaaaf66bc6ead05063b4678f731"],["/tags/密码/index.html","3cc3d436d16e03d0dcbfb55bb00e2a9d"],["/tags/小游戏/index.html","24879bc144fd3784237beb948396ccf6"],["/tags/小舒同学/index.html","cffed7688a29b01bd39e260ed83ee946"],["/tags/工具/index.html","7ecdacef90f58c0d8e8d943a96c5b42f"],["/tags/应用/index.html","26dd7251334e3def7c18845801612cec"],["/tags/录制/index.html","70f5776b9a674690335e1015282b2b21"],["/tags/微信/index.html","05482cad4c1365fc064d54e6c1badf68"],["/tags/微信运动/index.html","8f15126b061ce4a47f0900b6659db2fb"],["/tags/技巧/index.html","3e3aa6e19dac630b18656ae1d7bd9d47"],["/tags/招商银行/index.html","6021ddc0154736469cb50c9a39f94866"],["/tags/授权/index.html","e38744e4a889298737a40cbcdba28cb3"],["/tags/插件/index.html","701d0733eae53e5470a69e22252819fb"],["/tags/搜索/index.html","c7f114fc808130d745f103db124665bd"],["/tags/搜索引擎/index.html","d2937f0bde557c4f3cb107eed5f3fb09"],["/tags/操作/index.html","300d6015c6851d6e710e1dbba2999aad"],["/tags/支付宝/index.html","092ffcaabf116561dc347e0f2dd6ef8e"],["/tags/收藏夹/index.html","2265ecc5e549349aa69acf260dfc060c"],["/tags/文件/index.html","72e84d356e24e2dfc81a6f3e2a60bff8"],["/tags/新拟态/index.html","7884ccf591a95ee11018ff67020b4673"],["/tags/无损/index.html","318e952621e7e77b2a7926eb66597540"],["/tags/智影/index.html","b906e29734ff27a0751cb19c43f20cc8"],["/tags/查看/index.html","7ccc7dd64a301a82c38ce8769162d0e6"],["/tags/树莓/index.html","1f729dd8800052a877b66359c5b9303b"],["/tags/格式/index.html","7108ef91c4996bba400534681280092d"],["/tags/油猴插件/index.html","fab6f8ee592a54896e35c393459ed52d"],["/tags/流程/index.html","41bc122508c563e1b90a443dc6036fd4"],["/tags/清图/index.html","e6bee29d80f16b6748bd2dcb9c7f58b3"],["/tags/源代码/index.html","6dc81cabc1ce739e9cbf292d72c6f8cc"],["/tags/源码分享/index.html","2ea102e655ef039be70bbf46ac37d08b"],["/tags/生成/index.html","c2ace5d0a56bf24b40fe3e8217d1bd8e"],["/tags/知识产权/index.html","991b34d60719768bdbc4c202c7a70528"],["/tags/硬盘/index.html","1753cedd5206a3be4b524023c36c1846"],["/tags/程序/index.html","ca7e36baa1652fd0199563479eed22a6"],["/tags/空间/index.html","14785115b9e2f9277f594641d4afcb8c"],["/tags/站点生成神器/index.html","0be7ee9a210ba517bb88d47438b0ff7d"],["/tags/站点监控面板/index.html","8ddb5065e55030338790dfdac1e4f604"],["/tags/素材/index.html","ed85d956a72b4a8c22f8696906a3ed1e"],["/tags/网盘/index.html","365396ca3eb58c4d581e37e81043e959"],["/tags/网站/index.html","9f3fda1b6006d62600ea1be5d666fb76"],["/tags/腾讯CNB/index.html","0dd50b6790350634b9bdb2930c763bc5"],["/tags/视频/index.html","650e4f5c994a88fe668a1b94cacf023a"],["/tags/资源/index.html","e6b13b990747d1a70e8129fb0610d6a7"],["/tags/转换/index.html","b80dc9a85512e2e14d5a9a8cb02432f2"],["/tags/软件/index.html","941a74e7ad2a3ddcb6f8cd2ce241a6bc"],["/tags/运动步数/index.html","05d697efe9dabcfde78528ca0283e41e"],["/tags/邮箱/index.html","7a2e60bc7d1245c0e8ee47bda0e90f30"],["/tags/镜像/index.html","61bcf88d9f8c0f825965a9f146788008"],["/tags/长度/index.html","5cf2898d1943ff8753c28a37c92ca634"],["/tags/高性能网盘/index.html","89eeb599d3f6960c2459398b224f9126"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
