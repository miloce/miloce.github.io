/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","669b180a5fedf3018bd080d8d7a6f516"],["/about/index.html","d640eb8dedb26335c1d852eb5371892c"],["/archives/2006/08/index.html","8d3adcfb5c1884f12564c40a4072f207"],["/archives/2006/index.html","e7a374f8f7d278b4691dc5c93f507a5f"],["/archives/2021/03/index.html","720c3fb6a10eae0c4b0f2fd89ad0c563"],["/archives/2021/08/index.html","73cc6de0fd8a2d28e3b6de48354554c1"],["/archives/2021/index.html","005b784c37396266535df447e571434a"],["/archives/2022/05/index.html","2bfec2d37453892ab981598ad17d3117"],["/archives/2022/05/page/2/index.html","e8f0226bb8026bd154d72cc2a5de0cce"],["/archives/2022/05/page/3/index.html","52aca07d17020aa2606d2dfc83afc2e1"],["/archives/2022/index.html","88114a1c0a2219339fc39f3926c13d25"],["/archives/2022/page/2/index.html","3c2d017a7688d3840000461f953a046f"],["/archives/2022/page/3/index.html","8ee8a9e6d964fcce3e77274db9a3f9ff"],["/archives/2023/01/index.html","7d0a8b1356351a2165fae08435893dea"],["/archives/2023/index.html","34a35866d6a491c480a6e27955d39575"],["/archives/2024/12/index.html","1e8d1ac22a885b3644bb2b301a312011"],["/archives/2024/index.html","a4a73768417b1df6468e266bf3c86c93"],["/archives/2025/03/index.html","df3bf623ee98fcff39b28f6d99072464"],["/archives/2025/05/index.html","8abc22285f1a4ee895bc77d6b6dcc0a9"],["/archives/2025/09/index.html","f385b6966c0dcb826c84b1420490c229"],["/archives/2025/index.html","58b4111ea0ce7efbe33f45b646486145"],["/archives/2026/06/index.html","4cd9cfb615cbb406c0899dbb3482dda5"],["/archives/2026/index.html","0634f3d1a2c4cfaf2763f63ee41c8987"],["/archives/index.html","5b4b2d39a64571d9fd2d4db846b048a3"],["/archives/page/2/index.html","1c3f2e096d6abb781d059d7edcdb7627"],["/archives/page/3/index.html","c52f5c7863cd6e51dcccc160866a0641"],["/archives/page/4/index.html","7aaf755aea12a859890882148113e947"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","2722400cfd7bd40efe67eb8b348ae1c0"],["/categories/分享/index.html","5138591df5b4895adb9fb9ebcda3e37a"],["/categories/实用工具/index.html","651be1131850d13211e60f34b3962ced"],["/categories/技巧分享/index.html","0c4b79f9b414848f4b62240a9c685010"],["/categories/技术分享/index.html","0258c591a0bbc7faa44376c69437fee6"],["/categories/技术教程/index.html","675241ef6545f3e4475092b3dcd16964"],["/categories/技术教程/page/2/index.html","6b6f1105e1880a3f5b261aa2073f4ebf"],["/categories/源码分享/index.html","96e96822b40eed7a6e8ff4aa2c29303b"],["/categories/福利活动/index.html","d3b764615a9805a4e7ef7d4e3f19f0be"],["/categories/网站推荐/index.html","c4484e28e06e38af06357b2b8ec463a4"],["/categories/网站推荐/page/2/index.html","f4b89d1e5fcc2f9d666f3a2fa05a303a"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","da912201931503cba94c7f7d6ecb3ac4"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","463e787ef17fecf299b7c5e4b6dc540d"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","53d4d4fa17f0d601b956875167a2038c"],["/music/index.html","0a014655e57ee72d6f7513e647aa69b0"],["/page/2/index.html","d170ea29a5b6f09ba9e4d0ccd15930d4"],["/page/3/index.html","e05e652b0d3715823d251f7af8c7af01"],["/page/4/index.html","964a8702f7f7bffb6dd4005551e4d1ca"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","440eadfb845af9a0515a5699e7476e3b"],["/posts/096db3c03b6e/index.html","3f9164d4ced234b5cf3d80adef672db6"],["/posts/1235535247cb/index.html","e73704f802a2ffe4cc54de3144b5a2b2"],["/posts/13b70ad2982c/index.html","4fa57dd79431d31855f40971c4e95b90"],["/posts/15fa81012f63/index.html","364b7113850b7245c8f8d3c560e556d9"],["/posts/1ec0df688f03/index.html","5c9c70fe72300d82bd30b9bbe822c923"],["/posts/2aea82a850f0/index.html","6b768f78e5129b60859cece84c18ea24"],["/posts/2b7ac1a9709e/index.html","d371f9993ef96ad1ffc8ae95cad358df"],["/posts/2bb24d491704/index.html","c5762a157556b3361f67f15a59d8c457"],["/posts/2c9261572067/index.html","405436dea5ee06bf94f283ae15b08ba7"],["/posts/304408dfc52f/index.html","5f8b6619ecc98ce751cac250036bf9ae"],["/posts/311ae06fbc6f/index.html","8187568b6fe1ff6c5d96ef5b0c8aab7c"],["/posts/41c16cb60b68/index.html","fb30a6cef93900b896b6544d6941a6ba"],["/posts/4358b00bc797/index.html","00c92e603f6bc6e62f22fccb53e04dba"],["/posts/4acff0774207/index.html","e4e362fee0d4ec5f5b5a34a6f90c578e"],["/posts/4b6cb4514456/index.html","48193167447fdce48dc4e36792b8afd4"],["/posts/61d1b897dcb0/index.html","d0e5df5b154d35fdabc4954c845a86a7"],["/posts/6631458408e8/index.html","d917df8288465835de0e533e97fe4bc9"],["/posts/6cb2454df473/index.html","651850c1ba55eb162a7040df3ade17bc"],["/posts/6f929ba7ef0a/index.html","91b337791b9ed16536c2a06b03011d03"],["/posts/76dd1b500ee9/index.html","86adf9c0289a24c4cf2dc843670c1d7b"],["/posts/8ef6e275fcc9/index.html","60b198ad5820c2b8ddc1e7ee06f1ca53"],["/posts/94456e62e22c/index.html","62d10d7a09a38e421fb7099b5301599e"],["/posts/9792de8b38a6/index.html","4996e19fbd2553995a25f0444e98857f"],["/posts/a84c927bae36/index.html","b8a37f8a7243271ae7d567e15bf53fa7"],["/posts/ad5499059bd8/index.html","cf154133d1e8e3a1b935d7d01657f396"],["/posts/b1a6e353d3b0/index.html","d5a365a50f08010f7cf0ff7e6921a8d1"],["/posts/b2dc15e2ff89/index.html","07cda8f6068b876435434a5e0afd4dc6"],["/posts/b478f3198c73/index.html","9e4331173011ac2fdcf13ffed8b0149d"],["/posts/c0ae68f04a1c/index.html","dea0e13e93ea12029a8a157021d9bd9b"],["/posts/c821481d77c0/index.html","6d8483d12fdef9250ca7e89396809aae"],["/posts/d81821f9e51f/index.html","cb592d6d5808a2c877086070527ae8e8"],["/posts/d911ff6fb3e3/index.html","2fa9b0bdd9cf0a37b67634e3187250b3"],["/posts/e91323c67bb7/01_codex_desktop_download.png","aa31ba69ca67f657544e726acb201856"],["/posts/e91323c67bb7/02_deepseek_apikey.png","0ce6d1e56487582654b8d8eed1b8f511"],["/posts/e91323c67bb7/03_deepcodex_releases.png","c1bd80e297c78064e8520ce5972e0ee9"],["/posts/e91323c67bb7/04_deepcodex_key_prompt.png","513eff57b27789d3f05b1183f73d3044"],["/posts/e91323c67bb7/05_deepcodex_switch_success.png","377b7ed4ba74acfd2707841d5b6c709f"],["/posts/e91323c67bb7/06_codex_test.png","8bf58d170f086ace31a25408425b4d72"],["/posts/e91323c67bb7/index.html","6eb563326b2b4dc2273134ee0821e5ba"],["/posts/ebffabd07766/index.html","bd67d3920325f86afd999aa9f42e0ecf"],["/posts/edc724f3bf5b/index.html","2d1799e18a3e55f341947ee18b39a19c"],["/posts/f30c3df9c2fc/index.html","edce6d8d18786474162edb263e6af758"],["/posts/fb79b38d6277/index.html","1fbcbba5426e8c124f1f38c7c3082aca"],["/service-worker.js","74a477739ab5ac1022851f264d91af92"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","8e4589d3a814a7edf16dc86662a1895b"],["/tags/255-255-255-0/index.html","3bb54fe7f72a11468dd9c461ff484885"],["/tags/AI编程/index.html","b02ae13f0d65a159bb6dd76eefd8141f"],["/tags/BS架构/index.html","4b9f414eeef8b141c58ca01eff024ea9"],["/tags/Chrome扩展/index.html","87ff0294961e54f97e2aa70313d1bc4c"],["/tags/Cloudflare/index.html","cd1e02449f51b08d06fc62aa9779f935"],["/tags/Codex/index.html","5e2566da1e4fbe390730bfd71bcde026"],["/tags/DeepCodex/index.html","1ecebc8630ad6f491ef5fad47ba09163"],["/tags/DeepSeek/index.html","c65c846b45d90d2d29a903ea8dd71056"],["/tags/Docusaurus/index.html","a1be0d9d1111c1346b0741cb145b71dc"],["/tags/Magiceraser/index.html","8db2b0de6efd80234a25fe62ff83035b"],["/tags/Neumorphism/index.html","6ce940066d4a5f1e2846c64081c3189e"],["/tags/QQ加速/index.html","e8a695499461add93e751dc2664c4e47"],["/tags/UptimeRobot/index.html","745ddc6dbf97ce83872bb73f8ab20703"],["/tags/Zepp-Life/index.html","845eb1b8666cacaf98c4bde1c41347e4"],["/tags/css/index.html","65af45da3a6a245680c2d3fec71cd318"],["/tags/dns/index.html","1f776455b6f0e2684988ed70d253bcb6"],["/tags/docker/index.html","4b4f9d50a86313156018ac7d1fe319fa"],["/tags/ffmpeg/index.html","45112816759f567bf303e9ff51be7be9"],["/tags/github/index.html","0c43ca03638170d765ea833c6b0c6048"],["/tags/google/index.html","a47488e6382625f600e992a76398c6b3"],["/tags/hexo/index.html","189520f57c368fbfee63d26dec9b798d"],["/tags/import/index.html","bdd107a0e56224620472046f2ea294ee"],["/tags/index.html","6a17c84cb301160b31abb3d59f093f44"],["/tags/ip归属/index.html","c0afc3e160b8dc713108d000edf24d63"],["/tags/linux/index.html","cde164c7f65ebf7d68f2fa78054fdb7e"],["/tags/nginx/index.html","c1bad807280ed19942715f137c1e40ae"],["/tags/pdf/index.html","6462911d54019c14fa1ec7b68c19abce"],["/tags/play/index.html","2f8834f6ee057cf1382ec6e302a87397"],["/tags/python/index.html","9710d09b116761f8cd173cf6660c51b5"],["/tags/serverless/index.html","16b887e37a2d3140769e9512b1278d7c"],["/tags/smtp/index.html","78ebac1aa02e763c8abb596f7e1d64d5"],["/tags/source/index.html","6933013c76b4f7a386e50554a3538c33"],["/tags/sudo/index.html","f21638f65f1ed7ff7b1612cb5f70fec0"],["/tags/target/index.html","4dfa4e22b55ce99cba2dd7b39af10732"],["/tags/tinywow/index.html","35bdc797171832cda418b4f5e5f478d5"],["/tags/usb/index.html","130de4a0c79092c58fd0457a1d9a335a"],["/tags/wifi/index.html","966defeb31dd4de529ab3fcd41c386b3"],["/tags/zip/index.html","b4128e3f85367353daa6e1d13f121f00"],["/tags/下载/index.html","88e47292cd7b202edf6de3270c99aa05"],["/tags/个数/index.html","33d8e4864bb00137f29da1dcdf91e966"],["/tags/云原生构建/index.html","14b0d06069274fe1cfd17804ef066eda"],["/tags/云搜/index.html","be80451d47b1b4b97c664d08cbb8e8f9"],["/tags/云盘/index.html","294a4598a22b4389400d9780b33f83b4"],["/tags/代码/index.html","f53eee36d1eced4cb224eaacab5eee7e"],["/tags/免费/index.html","4018194eab94090fe990b4bd817f24ed"],["/tags/免费服务/index.html","a78976f7f25e65be6f59e6763204e148"],["/tags/函数/index.html","218f77b51e31f82b03ad8e1c67cce088"],["/tags/分配/index.html","514275c9eef0a0bc8056a405934267da"],["/tags/删除图片/index.html","16e9f7478df16d018020f37392f9b6aa"],["/tags/刷步数/index.html","3a59b49e7703428dfd55b023c13a0584"],["/tags/刷步数工具/index.html","d1f10c4f559ab60664e4ca5b1f121727"],["/tags/前端开发/index.html","11aca2fc46e8287b7959b1f7c224b41a"],["/tags/剪辑/index.html","bec1eac5ce5173ddcf864e23a7cb859e"],["/tags/压缩/index.html","b1a8cc172263cc994e7703c1ec9472d4"],["/tags/变量/index.html","803e07bd7d1b74ba0a4294465216118f"],["/tags/同学/index.html","b019997c92c85242d0291c9432a88518"],["/tags/命令/index.html","c4793ee54b3d88a5732b00da96cdd11e"],["/tags/商店/index.html","748a0fb66d87afa04b46ac06723cdd7a"],["/tags/图片/index.html","d1acc8cb71662c1891dfe17e9d26210d"],["/tags/地址/index.html","86bdafa7212067d8f99f83531170bf9f"],["/tags/堵猫猫/index.html","c0d7d6e682909ed03af31baa6b675bf6"],["/tags/处理/index.html","0c628c5dc8398d5046d6ff7e2c7047ed"],["/tags/子网掩码/index.html","fa6171db06378af3afe7837d12cceab3"],["/tags/学生福利/index.html","844f7b40cb95c10d06545925f6e0abfd"],["/tags/实用命令/index.html","854fd9a93b35fc14d7146c490014cb44"],["/tags/密码/index.html","ca465005478fe27a7c0e2adb61448136"],["/tags/小游戏/index.html","ac797ab05f432d8e0e314ac3f4d5cf8e"],["/tags/小舒同学/index.html","d494c007c15eed5f9e20792e7dd3e6ad"],["/tags/工具/index.html","5861b9b19cfba7d240a9b5871c69179b"],["/tags/应用/index.html","97205df5a2c55c53d6ce026b1435a198"],["/tags/开发工具/index.html","030942427031f0c72b9b2b7db9d8aad0"],["/tags/录制/index.html","580e348207851f1d79ee26ea6ede5ac6"],["/tags/微信/index.html","bca2f047980062bc478726a5c4930677"],["/tags/微信运动/index.html","8d10efa1d622c9e7a38a8e1f11faf3b6"],["/tags/技巧/index.html","560ee48ff7f462ab86aa25aea82aacfc"],["/tags/技术/index.html","fed94c89cd699bbad512023ad3fef0e9"],["/tags/技术分享/index.html","163fd529251b51301f09efd6354b8a73"],["/tags/招商银行/index.html","1fa9a594f969a06504788238f504e7ce"],["/tags/授权/index.html","427a5a6d88da3bc95754de814f408d0c"],["/tags/插件/index.html","4b9a9358570bcf5af3cfd8f273a67bb8"],["/tags/搜索/index.html","d56082f3f0755fb4d2a62da32a4aa8e4"],["/tags/搜索引擎/index.html","a7c4a7b89237179258b5eefe5d9167ed"],["/tags/操作/index.html","afc7dcfbc7957d33f135e820c8d33747"],["/tags/支付宝/index.html","8925a7d39528c0cb961a257a924521ef"],["/tags/收藏夹/index.html","92a1b16c5d2c42c52c6b97215500f0b6"],["/tags/教程分享/index.html","9d23e0c79362b39a5c0530fda0f0a6cc"],["/tags/文件/index.html","b71e884108cfd7919dd9ffa79744af5e"],["/tags/新拟态/index.html","1d58479441ffe9ffd5cff9979f7263a4"],["/tags/无损/index.html","7240a376f826d40b1f207ef6080bcb78"],["/tags/智影/index.html","21ace572c17efa3b645c7c3e625a1db6"],["/tags/查看/index.html","40807c1f0c13bd396ef453d0e7b20b21"],["/tags/树莓/index.html","b602de24080d5026ab9bc7cf1b8d6296"],["/tags/格式/index.html","694acd88424367562f92bb2a18aeefa1"],["/tags/油猴插件/index.html","e2873f6867b00f78570a07da1a0bd367"],["/tags/流程/index.html","e02bcbaa8e3ac2d30d03592904f6ba11"],["/tags/清图/index.html","07f2cd67051e7f96241dc60a4a7fa4b7"],["/tags/源代码/index.html","71d5be269dc70ae1bff246fe461c0d83"],["/tags/源码分享/index.html","0265830596cd438e8a540274a8f80fc4"],["/tags/生成/index.html","04f884f67affe14e8282d6a3c4f30352"],["/tags/知识产权/index.html","0cf1151ba50afd304c2b0d8fcf9e2f10"],["/tags/硬盘/index.html","24c7829684d8ee1f3b339f695865ba03"],["/tags/程序/index.html","e0aae4470dffe7fbee692f25080918ea"],["/tags/空间/index.html","4283a8621f4403425d364361c76e5d3f"],["/tags/站点生成神器/index.html","ab7d8ec90d043973d882baaa1691724d"],["/tags/站点监控面板/index.html","206caf550eae1ed90ad8fb782bb54121"],["/tags/素材/index.html","cb13bf945c6245a56744ed9b2f72b6bd"],["/tags/网盘/index.html","a9d5d68dd40c828cbb4d140cce0776a5"],["/tags/网站/index.html","4f35d2f553f08634273cfb254b51d16c"],["/tags/腾讯CNB/index.html","c1bae900da3f028d394a42afe7215a62"],["/tags/视频/index.html","d1ba9a47b3d811755c29262224e5d53d"],["/tags/资源/index.html","95f24df9a31dd719afc2155413716dc7"],["/tags/跨域代理/index.html","ca04a62ab6a12d37d0f77ba3915fdc2d"],["/tags/转换/index.html","b76af5308593bffe139af1bd4b7da376"],["/tags/软件/index.html","45882b457749ae0f41e87397c7590f9d"],["/tags/运动步数/index.html","f7014112f533984499d571102e6de01c"],["/tags/邮箱/index.html","f97b449a3796f2ccab8c897e064ef9a2"],["/tags/镜像/index.html","df3d2126dc4b8c259f16ed57eeec58ea"],["/tags/长度/index.html","47ad3b39bd90772e26221497f0d42446"],["/tags/高性能网盘/index.html","c571f67c762572a166ecc942abc155d0"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
