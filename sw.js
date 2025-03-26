/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6284c2fa334f6a041479c73e6d1a5b65"],["/about/index.html","64ffed98831ec7b6e8dfd5a55717c367"],["/archives/2006/08/index.html","cfee399d96968fcfaef828c41d975cd5"],["/archives/2006/index.html","48bf03e699d683df2b8f3e06bedb4318"],["/archives/2021/03/index.html","ae470107b4f6529b3350ef5aeeb7c81f"],["/archives/2021/08/index.html","956f1ecee5536fa70bc109b37d1a4107"],["/archives/2021/index.html","3decac4cec63c1c0b27ff7d983b12a5c"],["/archives/2022/05/index.html","e1bdaef50ce9109a0cb45207eb118155"],["/archives/2022/05/page/2/index.html","63345be17fe31993157b93bc41b87d6d"],["/archives/2022/05/page/3/index.html","75f7ec60a1eade8d0f8d1a37feb2fe37"],["/archives/2022/index.html","96e0d03e9b1468dfd38b106affe10acd"],["/archives/2022/page/2/index.html","bfbb0040a477dd3dd520067a72ed72ee"],["/archives/2022/page/3/index.html","eccd372a47b9d98728cc1c00664c436a"],["/archives/2023/01/index.html","3ca2f4a3dc131963f7d497ec145390d4"],["/archives/2023/index.html","5ca12fa0e6e577d4622ef9aac04d68d8"],["/archives/2024/12/index.html","dda25d133194ec1962fe1efc70ea1720"],["/archives/2024/index.html","83fd01b768f90a1fba393c754889ea42"],["/archives/index.html","1f7d312d5af6af1e66130d57527a0918"],["/archives/page/2/index.html","6b279cdaa07bf4a8f667180fa3177da6"],["/archives/page/3/index.html","c3c5295173758d0568f596124e1c93eb"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","7c4dc3e7549a657fb92dcdb6501bc108"],["/categories/技巧分享/index.html","2f16d23f1287c47f88a733465fbc7a66"],["/categories/技术教程/index.html","e7e8df2ebe940767f092513cab825157"],["/categories/技术教程/page/2/index.html","0d2900c0259b012defedac2396e22267"],["/categories/源码分享/index.html","1554b9c8518fd1e1bc22cc96208cb263"],["/categories/福利活动/index.html","9651803ddeafaee08feb95ec80bfe274"],["/categories/网站推荐/index.html","e991f6262fe4122f01788ee8da09fa14"],["/categories/网站推荐/page/2/index.html","8c34402bc64b391dec60342dc3b7a9da"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","dcb4b72d91ea980eaaa1b976330f7c75"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/background1.jpg","457044efc799611e9697f1ff8fa7e344"],["/img/background2.jpg","56bc44d644e0e9ba94b04c6b8282eb90"],["/img/background3.jpg","b3f46b8de3caff0649b0c9b00a77c5aa"],["/img/background4.jpg","0b62e97af473076ca0e4e4a4a3e91148"],["/img/background5.jpg","a85b95a0a926f45ef967c0950a47d815"],["/img/background6.jpg","4ecfb3a6d01e8bb58468da052547efcf"],["/img/background7.jpg","da709e41f74200f960b4c6bdf8baab63"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","34a123db48687aa633de2edf6d7261a9"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","e2db2f7b79597841a5c3a563bdd97989"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","6aab15b5ae1bfe2ddba246d7b34ed248"],["/music/index.html","fb679b4e96767970605f551e144eaf85"],["/page/2/index.html","1c9ad500938a45b566e0fa96436d2c44"],["/page/3/index.html","0192e7e85faa8ff5c5509bb000734365"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/096db3c03b6e/index.html","f8169bc723dea0aa0bb368de3fee3d4b"],["/posts/1235535247cb/index.html","e3a28c1c72c2720aee151b97ab33d8ea"],["/posts/13b70ad2982c/index.html","4ab9de3fde5d202ee1802a8fa9ccf45d"],["/posts/15fa81012f63/index.html","7624ef69a1a9ffcafab04ddd2d545259"],["/posts/1ec0df688f03/index.html","00c93028c2699a7a44a19bd5d8ed78b4"],["/posts/2b7ac1a9709e/index.html","80870311abf5496e89e3f08f412dbe7b"],["/posts/2bb24d491704/index.html","3ea2f46c1f66440bce025cb6f3dbd0b8"],["/posts/2c9261572067/index.html","8fea37e13259b816a3693c099a7c27cd"],["/posts/304408dfc52f/index.html","808d9c322d9ff18f736dcc8ce0dcefec"],["/posts/41c16cb60b68/index.html","8c5c3da37bce555546ed6a03fcd6af00"],["/posts/4358b00bc797/index.html","4efccaab39fb6f3962677024ddc735b4"],["/posts/4acff0774207/index.html","2b71c9b52d5cd5dbcdb8fa42962c8144"],["/posts/4b6cb4514456/index.html","8d13ddba9de6662e22150d5e8f058fe9"],["/posts/6631458408e8/index.html","fea9cfa40bf2a57a7083381ec9e14cb4"],["/posts/6cb2454df473/index.html","c2ee3cd2d3908e7baacec8da1a890ff2"],["/posts/6f929ba7ef0a/index.html","ab0b7ab10cd7570c2f76c46dc202e664"],["/posts/76dd1b500ee9/index.html","c43eb5488c5dc52dc89c2d49f479bfcc"],["/posts/8ef6e275fcc9/index.html","1a620b088be2da76a73f0092e4b41f5a"],["/posts/94456e62e22c/index.html","79de6679de2b3443922ba66085a916ee"],["/posts/9792de8b38a6/index.html","124630f94be3c5cf097f67d4c701189e"],["/posts/a84c927bae36/index.html","55b86481b2ff601fd32a8ba9ccbb07ca"],["/posts/ad5499059bd8/index.html","af2ee92a53ab91f44188c9951aabc3ea"],["/posts/b1a6e353d3b0/index.html","8dde6abd80aee309051c17e1ce0e69d1"],["/posts/b478f3198c73/index.html","973cbd4bd57c2522bba98982dea62d61"],["/posts/c821481d77c0/index.html","eff2a440d01227511d4606e522bc247e"],["/posts/d911ff6fb3e3/index.html","13692cbf93aed894186adf8bbe06b443"],["/posts/ebffabd07766/index.html","e8b1453e5083f0a54872a49085a9643a"],["/posts/edc724f3bf5b/index.html","df96ad1e86a4262ff149e7eb309ea68b"],["/posts/f30c3df9c2fc/index.html","fbf584e1320027fb6ce49927be9d203a"],["/posts/fb79b38d6277/index.html","50df89d5db5270e8e928609da1898fce"],["/service-worker.js","4b2ebad9186abf8a007a23a4b8444ba2"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","6207c519a5ed8cb851f89ee6355a982c"],["/tags/255-255-255-0/index.html","0a9a96f783d6882af0d817bf3411d061"],["/tags/BS架构/index.html","dc8ce430fe96c22a202766ed2a1eda52"],["/tags/Chrome扩展/index.html","cecec70520d5395a6c2da424396c0244"],["/tags/Docusaurus/index.html","52340ca94ece9e6cfc3fe45c7d1d7372"],["/tags/Magiceraser/index.html","2ab85601cea129cd35c87afb2a3006f4"],["/tags/Neumorphism/index.html","c717b806c2103c7dc58a0ca8595a10dc"],["/tags/QQ加速/index.html","2372e0b7e6bb7c4d83e2e26af96eecba"],["/tags/css/index.html","023de347ea9c74777e4ee95626294099"],["/tags/dns/index.html","a9d18326264570e462b776e14b4ffa57"],["/tags/docker/index.html","c81d98a9be7880401c01d198c61b5d2b"],["/tags/ffmpeg/index.html","fea58c12155ead69c03ba3419150dd38"],["/tags/github/index.html","450c89083eb7d2d73c9549b8626c6a23"],["/tags/google/index.html","56f4e74c7d6b918754dece50a6be010c"],["/tags/hexo/index.html","5b919d393ea22b8b77c209dbf34a8c01"],["/tags/import/index.html","283334c159903777dd3a204b4368806a"],["/tags/index.html","feb2aa98dacce1f96150be323058a678"],["/tags/ip归属/index.html","0e2ee360ae1fd1bc6a4a66bf899faf5c"],["/tags/linux/index.html","371329d95a8e9c9f2ef2f9d0b90efa49"],["/tags/nginx/index.html","1675642bafdba08ff2aa93dcb51c6bfc"],["/tags/pdf/index.html","e3fbb4b85173e1030318d118e0586549"],["/tags/play/index.html","8fd7c537e0d70180c57f4ab2517a50f9"],["/tags/python/index.html","c6e3eccea6e659f5b25d2256bc284b60"],["/tags/serverless/index.html","bfd3db684fd9bc9cc1ca7eab6fdc1f5f"],["/tags/smtp/index.html","7c17c2465b2813d94748fc620977ba15"],["/tags/source/index.html","9fcc8e9ae5ed7a2be1946b8a84cb1302"],["/tags/sudo/index.html","f9bbe8f9aeeff17fce94255daea54f25"],["/tags/target/index.html","2fbd2389ce6d695ed2d6be3fb26254c2"],["/tags/tinywow/index.html","33fd44517f014778f85ed1cd6b8781da"],["/tags/usb/index.html","9af9b7273c64d9334a518086f26db157"],["/tags/wifi/index.html","f63a050463387db30399ee0213c9002a"],["/tags/zip/index.html","c1cbc4123279032c456e50f1d3885580"],["/tags/下载/index.html","062665aa71462109830a156a6085f6da"],["/tags/个数/index.html","680297453fc71e0daca479f7a42eb698"],["/tags/云搜/index.html","280ee2042b19c5e198fe27ca62fe687b"],["/tags/云盘/index.html","2a642eebaccb0cbe105ee04e79e3990f"],["/tags/代码/index.html","2eb49ce8dc1f4a6d8998b8715cd0b59f"],["/tags/免费/index.html","10081c17277acb8333e0606a7805888b"],["/tags/函数/index.html","2088338fc55e638ef557d5fb0d22f5a1"],["/tags/分配/index.html","9a5eea44dc4e84b5b99e8844a8d2e8eb"],["/tags/删除图片/index.html","0aa670a5c4b7b62650acb0bd503d93d3"],["/tags/剪辑/index.html","c43940a7fa62365f71bcfa9d10f0ca71"],["/tags/压缩/index.html","702d26dd621502b9cad68dda0e7d03fa"],["/tags/变量/index.html","8dbd4ea6ab00c401ee08d82b1c94af99"],["/tags/同学/index.html","e1f754f15c9bce9f2830857bde1558c7"],["/tags/命令/index.html","06e87a37ba4d2a0009cdd5b83e9dcdd5"],["/tags/商店/index.html","6bcd58b770f236efd033c5bde28cb6d1"],["/tags/图片/index.html","3f9dbec4beabe8d94701b5a6cdb7e1ad"],["/tags/地址/index.html","8ee8cfdea1170d4e5ca95524525fe104"],["/tags/堵猫猫/index.html","017239be6aeea7223a9851af91ed90cc"],["/tags/处理/index.html","7017391c23b6642c18ca4919e976b866"],["/tags/子网掩码/index.html","9ea021cdde5cf953953b36fcba9d1e82"],["/tags/实用命令/index.html","85404779db2441f1232b5067a1fa1afd"],["/tags/密码/index.html","5baacb1958aece3460f6e3dcdbf1d0f3"],["/tags/小游戏/index.html","796b4208ef85a0edad30dfede285f888"],["/tags/小舒同学/index.html","4083dee3e9510f367cded4a34dd1f985"],["/tags/应用/index.html","80701f04515b37ac1ee88f169df8c818"],["/tags/录制/index.html","1e4608a6abb51316be4389df27b0a7cd"],["/tags/微信/index.html","c98009bb8d2dfa7b73d2bf0c8180da94"],["/tags/技巧/index.html","b765fc8c62f99704fc6ae57f25103a2e"],["/tags/授权/index.html","ad401a294704f1756d91364c9d85692c"],["/tags/插件/index.html","5fc923552acfb4f9c31560e6ba8f196c"],["/tags/搜索/index.html","7ecd21cb3196031f1b87ab29182be428"],["/tags/搜索引擎/index.html","e3273b3592ae459a54f9ccb5530ee879"],["/tags/操作/index.html","ef24527ff08785aaaa192d323ebc2ce7"],["/tags/收藏夹/index.html","bb6e1d0fe1861f223876982dc7936245"],["/tags/文件/index.html","f10b46c3fd5c552ce3a679f222d29b64"],["/tags/新拟态/index.html","8b2689229da4e7fea26803d0809e23cf"],["/tags/无损/index.html","741516572fa81af52abcbf7c8e7c2d18"],["/tags/智影/index.html","f279ab3ee9543469698f1e5ec4ee25ba"],["/tags/查看/index.html","452ff8bbcf1f029480732aeff7603197"],["/tags/树莓/index.html","4987838f493ceaa685556c7a4306964a"],["/tags/格式/index.html","93d80bc5bf4207a622c97e9a28b1c68f"],["/tags/油猴插件/index.html","a4af8f66bab2f728b5cb83d735e6b72b"],["/tags/流程/index.html","74eeab0c6f86eeb5b6ba79c8018de5bc"],["/tags/清图/index.html","ed3881aad3fc35dc7c5f286aaa4d588b"],["/tags/源代码/index.html","bf1382a7cd3754a1a3cb9508c5f89ad8"],["/tags/生成/index.html","083e6fcf5f19a662916019731d8db699"],["/tags/知识产权/index.html","172907f14088336e4c91208467d7d930"],["/tags/硬盘/index.html","0a3d6fd04b9a5c1d6f31bb7322cd151b"],["/tags/程序/index.html","3f6421dd54d2b51dc7aed9fb1fab9bf1"],["/tags/空间/index.html","91e5a1ae813a5342507c124f77f3d0e1"],["/tags/站点生成神器/index.html","34fcd4ba2a40863b7846061f3288a0cf"],["/tags/素材/index.html","575c10f0dfeadb00e055f48c58424b99"],["/tags/网盘/index.html","cdf86b1d7e513c859f8bf6bc03dd8a7d"],["/tags/网站/index.html","9d22791b0acd1fd1f9030882f0b2eea3"],["/tags/视频/index.html","f8a7b5ecb6f3dbfa8d4173ecf074abfe"],["/tags/资源/index.html","0e390354349bf2aef9a116da72a4413a"],["/tags/转换/index.html","75c7d9a7b7c496b205ec2ab7182d375d"],["/tags/软件/index.html","8b087696b3d9f164958b84975d47f96e"],["/tags/邮箱/index.html","d9fe44b3a7b7035349c0582801a741c7"],["/tags/镜像/index.html","e05a2c4d4ec617a6b0d66145f6d64377"],["/tags/长度/index.html","a26d0fdde7f135c1394f2f478803a0a8"],["/tags/高性能网盘/index.html","6f4ef36fd242b2d8cb3f88b9dc3ace0c"],["/workbox-9dee487a.js","d7415e87425a75ab7e084f38d68538ce"]];
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
