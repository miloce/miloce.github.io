/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d486b95d0d7979f6bf4145e8368bd1bc"],["/about/index.html","fc65bf9fe5e0a0bbd48a158b7a46f943"],["/archives/2006/08/index.html","34cc18486f5f5beeb0d3379f7d82fb18"],["/archives/2006/index.html","0a17637a07cc6ee3163c97b490e0946f"],["/archives/2021/03/index.html","84af16016c82ff559a32da687b35dbd3"],["/archives/2021/08/index.html","dea735a14d1dcac05505e734e125407f"],["/archives/2021/index.html","d5c3c4d6e8598e394a415ff7c574e4ec"],["/archives/2022/05/index.html","644b03c1e471450edc3498a29852b581"],["/archives/2022/05/page/2/index.html","8045b7b84d15c4e741d1bfb392449176"],["/archives/2022/05/page/3/index.html","9a63210c574296568968a5a0f67db419"],["/archives/2022/index.html","83aedb9f238b82527afeec1206fd2089"],["/archives/2022/page/2/index.html","01b3d512a5bce2e4c7c5d2196344248b"],["/archives/2022/page/3/index.html","5d9e170bc76a2368a4ee04db4a528ca2"],["/archives/2023/01/index.html","58901f00a023965a2bb334cb87275a69"],["/archives/2023/index.html","afce955c6e06a1329dc0a7026f1f0a6f"],["/archives/2024/12/index.html","6560c31b17fecb0dac9c52bf2c0d0c7f"],["/archives/2024/index.html","74e24ac6be5d0006640cfe2a464c1171"],["/archives/2025/05/index.html","39bb41440dcb098dc6dabc564da88339"],["/archives/2025/09/index.html","6871afeca302e15d91d05e7af526f172"],["/archives/2025/index.html","38c3ee93a716f36388cd6f43b8fd6526"],["/archives/index.html","1e12b96a113c9a9acf41fe4e369f2685"],["/archives/page/2/index.html","0aa9987b973e72702deb0b1b3c3aebf1"],["/archives/page/3/index.html","e83895b0d05eefbdd19a419a1ada3da1"],["/archives/page/4/index.html","e77f1f5d94a90e7ec51902187a6193ab"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","bf7db0fc70035a15fc5503601fa7186d"],["/categories/实用工具/index.html","c489b66844a49d3e94377c9e1e7cfac2"],["/categories/技巧分享/index.html","6dd304bda77923ee7582b409f6a236e9"],["/categories/技术分享/index.html","0944770479ae1c04788310b4d15a5796"],["/categories/技术教程/index.html","49e26950b540ebdc20eef01343abc97c"],["/categories/技术教程/page/2/index.html","8eb18e2a52a2119f19508d202e72a264"],["/categories/源码分享/index.html","5b16f63378005af704115727cb6b079b"],["/categories/福利活动/index.html","96ea8788cf4de91898ef9460c81dd3cf"],["/categories/网站推荐/index.html","e14eeff3323b7de13724c37828d22f1e"],["/categories/网站推荐/page/2/index.html","27d0952741a35706643cd05408a54637"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","c1739cbd7508d27fb529bb9925abc50a"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","c43f2a473388caba69204d0a4e286603"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","52c9a578b5e284a3356d5c15c4df1dea"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","c48a742c03b647edf4df4fc9ce06c29b"],["/music/index.html","f1ce9c88cb4a6c79344e98c79bee207a"],["/page/2/index.html","79c24a0f8c443838ae736cf8e3b4d8f9"],["/page/3/index.html","0bf2795e15032939c333bfebbf2c18d5"],["/page/4/index.html","aafc879d653a4e7737766b1ab4b59bcf"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","02f5ff2d230d455057b5e195a7ff6bb6"],["/posts/096db3c03b6e/index.html","7cd5bef6a42628aa9c01e6102de85e09"],["/posts/1235535247cb/index.html","3c06e41c6c177a0554af8e10d6ba7821"],["/posts/13b70ad2982c/index.html","7dd5999a7258e2a4fbf80d366c373110"],["/posts/15fa81012f63/index.html","55384880f9bb4cf4a393dd22306d6850"],["/posts/1ec0df688f03/index.html","50a07b8452606fcfc6655d85610f1bc5"],["/posts/2b7ac1a9709e/index.html","bc1425c45ec93943e9f6c3db7859d6f6"],["/posts/2bb24d491704/index.html","ca14da0c7d74340c0d41d3aee784470c"],["/posts/2c9261572067/index.html","90e1143e99b92bbbb8e6006956995dae"],["/posts/304408dfc52f/index.html","50fdad8473c5c3704d52004091668ed0"],["/posts/41c16cb60b68/index.html","2baf6d79ff29cdccb221fc890d3bc397"],["/posts/4358b00bc797/index.html","68382e2be99e9a6b222de2148dd301a7"],["/posts/4acff0774207/index.html","85af48d2a0fa03eb060465d9a080ba6a"],["/posts/4b6cb4514456/index.html","ccc49997bdea076be815516fbc107821"],["/posts/6631458408e8/index.html","2631f83a5ad130823828c468cae243be"],["/posts/6cb2454df473/index.html","5ee4b21aff8dac97ba91c735fdccd6cb"],["/posts/6f929ba7ef0a/index.html","7152eaf42db3177b668ff9c6f4171692"],["/posts/76dd1b500ee9/index.html","2e704c37817fc8fc42ba61971eebf1bb"],["/posts/8ef6e275fcc9/index.html","66cf487e23d9584ef70ef843c2a3f207"],["/posts/94456e62e22c/index.html","7a1e75836b5d4a1a7b71ecb4d946d960"],["/posts/9792de8b38a6/index.html","ae6442485927fda4fe869af0a6bb4519"],["/posts/9d119b73dd2a/cmb-service-account.png","a679b24f5db960401ddcb612610e59fd"],["/posts/9d119b73dd2a/index.html","6af018094e728c0ee43892530e4e9305"],["/posts/9d119b73dd2a/jc.jpg","39250f60d65c34b48684bdc073457278"],["/posts/a84c927bae36/index.html","d67a1e57035c734a0e857e731735947a"],["/posts/ad5499059bd8/index.html","c615545d1202a535ba4be2b2b474f7a1"],["/posts/b1a6e353d3b0/index.html","e966b9b5f75c29e6c9b156358ab3515e"],["/posts/b478f3198c73/index.html","e48a2171d6156de5d93074587c3325db"],["/posts/c0ae68f04a1c/index.html","cccb1daedb728fd0e9f8b317e9acfec6"],["/posts/c821481d77c0/index.html","7b574eecaf5222b41f97d6e0e38cb5a9"],["/posts/d1ded2bacbfc/index.html","8310af3bbb38a0d5aeae6db9e607df74"],["/posts/d911ff6fb3e3/index.html","03167f66ebb7b3722ed0478f0072f5c6"],["/posts/ebffabd07766/index.html","1c878c2bf9801348137b12bce78d9bae"],["/posts/edc724f3bf5b/index.html","98f0f0b5847420069daba5a7e966db95"],["/posts/f30c3df9c2fc/index.html","53a3c345d413803e8b9ecad90f44c6e8"],["/posts/fb79b38d6277/index.html","79ca2e6096df8d9209c0bdc2a9d4e265"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","8f6807ef1e8608eb894277e3c70b6851"],["/tags/255-255-255-0/index.html","8fe567b82cf686f6e058bac752f5d024"],["/tags/BS架构/index.html","9281a2d24745f647fa35f4c1544eeb63"],["/tags/Chrome扩展/index.html","8abff281ffb5a78eb5f5b6f9fbcc9794"],["/tags/Docusaurus/index.html","0fb00c83b457f7dccdc2b2eef6e7ec84"],["/tags/Magiceraser/index.html","dcca25ad9c461f605141fe473e4c633f"],["/tags/Neumorphism/index.html","4f1db323bb5b5e2013c629b747f11755"],["/tags/QQ加速/index.html","b6738228f5ab48419f42ea5c7935a21f"],["/tags/UptimeRobot/index.html","a800936255904dd62537e84ce70a0534"],["/tags/Zepp-Life/index.html","e08628d1fea0dbc5b86c5169f95547e6"],["/tags/css/index.html","2b271c10a9733215f99878f59f60f507"],["/tags/dns/index.html","9fff9984dec84379e81617ff68f593f2"],["/tags/docker/index.html","6daf19bb4daa3bf2f7a8925318ff300a"],["/tags/ffmpeg/index.html","64275d0fa5f336c3f7d462458a11e33f"],["/tags/github/index.html","886e6873847c07194e0bf18c12ed179d"],["/tags/google/index.html","c9c896b1f0c354dca66ee08719c79f43"],["/tags/hexo/index.html","29f25fca80bbd5a0e4dac0aaaa549739"],["/tags/import/index.html","d3e17e68277b60c5272beb8607706553"],["/tags/index.html","10694f438e4b570d2ef232e00813271f"],["/tags/ip归属/index.html","d5a3daf322c24ac0537db9d5a5bf76d9"],["/tags/linux/index.html","0a9b1136903b2aa3cdc52d1479a1aa7c"],["/tags/nginx/index.html","bbde76a71f32d3831fec0d8e3d934589"],["/tags/pdf/index.html","eda69c8357a7dcaf7e810054df740d1c"],["/tags/play/index.html","80595ff70a6b2b16d7082ed22aa9732f"],["/tags/python/index.html","eee7562e386649a084d939b65a9bd6ef"],["/tags/serverless/index.html","e6d9eb2569491335128d369fb9fc76c7"],["/tags/smtp/index.html","36da71e0f75487fe2ebfe9b4cdfa39d9"],["/tags/source/index.html","c542be0b6ab12c00f42e762fc551364d"],["/tags/sudo/index.html","83bce80c60ab200d1cf661d4a31dc886"],["/tags/target/index.html","c9299de1da083356899a2edf14d04e96"],["/tags/tinywow/index.html","4b8b7f72613104f24ed27f10a0179538"],["/tags/usb/index.html","8aada8575a357db6df490f0670f38813"],["/tags/wifi/index.html","83607208f52795f873b463c09da06e6c"],["/tags/zip/index.html","2f2963398e0326824a960d656929ad44"],["/tags/下载/index.html","294784f0fafcabd464239f8375a7bec6"],["/tags/个数/index.html","3bc8b9180b3f82874be6bc5e8474e88a"],["/tags/云原生构建/index.html","bac81dba612c2be76fe60b8a5989d401"],["/tags/云搜/index.html","2f3420faa6b12e6044640500c8b13733"],["/tags/云盘/index.html","6c73cf7c769124c19a1e0b3ffbcd6cb4"],["/tags/代码/index.html","a98bc802008ff41217f56310b2c29f5c"],["/tags/免费/index.html","d18564532a9c8d2fd9094cb4628accc2"],["/tags/函数/index.html","a1c0252b6a464cf3b80ab00ff467d1d1"],["/tags/分配/index.html","91661b7fe9cf5f1586d5d7d8630b7e69"],["/tags/删除图片/index.html","457a7764fac6db5e595d950d04c6bb34"],["/tags/刷步数工具/index.html","e2508f9b3ad9ca4fc3b910c224dcfa8f"],["/tags/剪辑/index.html","c55b0a541395d45ff43d078d00cc67d6"],["/tags/压缩/index.html","d2c3bcf1df2e9238665f9ce804cb85dd"],["/tags/变量/index.html","337528f8b3de5c94f5bed05b31d8b281"],["/tags/同学/index.html","b97bdd76686de6acf4a877a5097810ef"],["/tags/命令/index.html","6df7bc65139db52d110ff67f900cec9e"],["/tags/商店/index.html","5ecfeb4cf0cd16a2dc7798f2694f1e75"],["/tags/图片/index.html","326e2df5060c7f5dd9c5def6bee09773"],["/tags/地址/index.html","82ee5e2269bd46e09cd6682c2f3ed3e5"],["/tags/堵猫猫/index.html","818c8e2395860fb07150eaf41648c79a"],["/tags/处理/index.html","c3cd17a0a9e780b7bf853bc39d9c93e8"],["/tags/子网掩码/index.html","06880d13ccdcfe23b53df14159ca4c2b"],["/tags/实用命令/index.html","a7f3b04fb8970dbc96178e0ce636a676"],["/tags/密码/index.html","ccfe86daa006fe2bd23b96d08eb4ebd2"],["/tags/小游戏/index.html","5b884504365e4ad17babb28572cef8c6"],["/tags/小舒同学/index.html","e7e5318225e98aa16f3803ea488dad71"],["/tags/工具/index.html","76092585730e6139347d1a920ed211e7"],["/tags/应用/index.html","ea5e23fe2ea9f9a93c46d8fa0df471b5"],["/tags/录制/index.html","8b8d499123ab030955bdfeccdee8acb2"],["/tags/微信/index.html","3fbedf7bf1a2e06a0970e6d73e334e79"],["/tags/微信运动/index.html","8cace5cacc970fbd45c4bf1d0a74bdcc"],["/tags/技巧/index.html","07d6d780050e0a0b702bbeb5cb705b93"],["/tags/招商银行/index.html","943e56d2a6f0351a20558c8835a996a7"],["/tags/授权/index.html","dea61f26290b7230ad52cd8e7a1203cc"],["/tags/插件/index.html","aa03d76ef234e923fe4641f7ef86e260"],["/tags/搜索/index.html","0ea44ebc283a607bd3c347c9e38d6fb2"],["/tags/搜索引擎/index.html","f4278aef398cca9fed9e9039fdee0783"],["/tags/操作/index.html","1bf4900792a05b446c7742af06ca9557"],["/tags/支付宝/index.html","af818fd789d7c590f3e23f7345cd5e98"],["/tags/收藏夹/index.html","0cfb7f33f8b3ca0d6aab741289758e5b"],["/tags/文件/index.html","ae4dff9a1289cfed956d9113783e277e"],["/tags/新拟态/index.html","ea6a0ff573cbf933b4f86b49e3447f4d"],["/tags/无损/index.html","f41fcbbaa6f09e2fd3ad8655e3b44384"],["/tags/智影/index.html","8062865f650373790662ff795acde21c"],["/tags/查看/index.html","2d5593059bc2bb4fd6159784e7c5dc0e"],["/tags/树莓/index.html","4e25f5945a70ab1859f154b1e912d47a"],["/tags/格式/index.html","475f3c559dc9159c045f0c749d57bac7"],["/tags/油猴插件/index.html","e17a3e1450492c547159ad0d8ec38112"],["/tags/流程/index.html","84a9970cc243ed2f4e635aef8f534eca"],["/tags/清图/index.html","78278ec287b73faf090d4365a5a7bed2"],["/tags/源代码/index.html","8097f1bc03fdfbbdc487a70bc673f3f7"],["/tags/源码分享/index.html","8a1fe64600c50c22ed0c13844b06c2e2"],["/tags/生成/index.html","6a195010d2ef3ff175d29548bd6c5cfa"],["/tags/知识产权/index.html","542c8ed1f6bd487c9da83d3f08df71cd"],["/tags/硬盘/index.html","cee783c5fd2771bfddbe542643e67edb"],["/tags/程序/index.html","43ee4be86235d2e8588720b04f670579"],["/tags/空间/index.html","63acfcfda6aac1f13d353c806ad07361"],["/tags/站点生成神器/index.html","9ae4bb007e5c13aeefdfb8185f9f89c0"],["/tags/站点监控面板/index.html","627db017232d94b548a40c63c6557558"],["/tags/素材/index.html","59faafe0c7725f4d02e1356890705995"],["/tags/网盘/index.html","478e787c46de544395a339caa2e2d171"],["/tags/网站/index.html","f45197eca5ab1e8c424c14e1f376bd76"],["/tags/腾讯CNB/index.html","9cca1da1b4f6ec0afd5360b5fa0bd55f"],["/tags/视频/index.html","faa18bdedd902899446e66445598c092"],["/tags/资源/index.html","35cc2ba7082417748ebfded89658486d"],["/tags/转换/index.html","6be358f5e4a37be53d3d25396c7ba791"],["/tags/软件/index.html","f7a3bcdd7e9429afc7ae6218796062dd"],["/tags/运动步数/index.html","2767f3787a0690dd847b9831de1b8ab8"],["/tags/邮箱/index.html","bf98c8f6979d049cdd318a5a0c1aa87d"],["/tags/镜像/index.html","bfe1043dc259e4c4b692aa66c8f6c0f5"],["/tags/长度/index.html","1b07b60086c33381f8a1c784d3418bec"],["/tags/高性能网盘/index.html","f7638123c693b135067a88f3b6bc8f73"]];
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
