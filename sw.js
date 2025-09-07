/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8d9372cba919b6eed2dedf7c95d7f2c2"],["/about/index.html","02c9b2ec91e65361e88cf39a661c606d"],["/archives/2006/08/index.html","5499b1cc057b85d06d98c0b63469ac24"],["/archives/2006/index.html","1d5fcfcc5db8c43007c4638e7801a4b4"],["/archives/2021/03/index.html","d3e865a23e6ecb251aba35a781fea2bb"],["/archives/2021/08/index.html","0fa693b1b87148ca946452a3fb0d6153"],["/archives/2021/index.html","146ad4b1e3281734d1eca05c4b72ecd4"],["/archives/2022/05/index.html","e81a4595049a472d999ec42b10132c84"],["/archives/2022/05/page/2/index.html","20bcd993cdcc877bfb903646b430614c"],["/archives/2022/05/page/3/index.html","ea700703c0558d57ce2fc1c600565a8f"],["/archives/2022/index.html","a3881ea069f45231e049609d74f49f27"],["/archives/2022/page/2/index.html","086d8ef37040768d53205744503bf6d8"],["/archives/2022/page/3/index.html","31968c823e1b63232a990e72f96de499"],["/archives/2023/01/index.html","59307b25425c77e0adc08703066202fc"],["/archives/2023/index.html","16bcf299716be2756b305a6be2c44dd4"],["/archives/2024/12/index.html","23a1e0299e0875d5cc360b2337c7eea1"],["/archives/2024/index.html","4eaf658d2d89b752fade0ce03b6dffd8"],["/archives/2025/05/index.html","4eacd973d4b5d7fe575f25d341846dc1"],["/archives/2025/09/index.html","100e8b2857a912b27c167180b71aa343"],["/archives/2025/index.html","0b8a46f9cea232faf1168bc0491a18a8"],["/archives/index.html","aef2823c0ec2d506bb5cb20b2fdf4324"],["/archives/page/2/index.html","cdd433ef650fb75de5da328bd97c8784"],["/archives/page/3/index.html","e4a78c4465d4f0cc293e5e466a3e0b22"],["/archives/page/4/index.html","014c09251f88ae7e1045241e89e501c7"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","ae2ec8e0c4d484dd2f0bc75dd78ec31b"],["/categories/实用工具/index.html","81b9bf87213487c710e1d93d7c75c2c2"],["/categories/技巧分享/index.html","1e92b4688d681c201e41120dab86ec60"],["/categories/技术分享/index.html","faab60acaa5d472b3e2b8f0d847fba4c"],["/categories/技术教程/index.html","38515ca6f893a1510ae37b4b3028f20e"],["/categories/技术教程/page/2/index.html","ab6187ba052892bb251e12fc7c6ee392"],["/categories/源码分享/index.html","c255fa91ffab3dc3ab82c75d1dd2cc64"],["/categories/福利活动/index.html","75cdbb9c9b3ba26a95f72405cbdcc6c5"],["/categories/网站推荐/index.html","ce884921ecb8e2c4f4fd41ad90110d81"],["/categories/网站推荐/page/2/index.html","addfd74b9ee14adeb5b0428cfe3950a5"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","402d8c9b021ed81192b753be6a97e20b"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","482ea85593ac51373a857f743e875ded"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","ffc1bde7e3914d1eb15df3ecaf76cf12"],["/music/index.html","e34f3e21274d6a99e3c8986b9537025a"],["/page/2/index.html","2d1b8b1596eba4f92bac6329539fd789"],["/page/3/index.html","1ac05cb8c8ea11f79649f6361515f88b"],["/page/4/index.html","42035569e6af8236a418266cd3baac41"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","efa5aba87eb7b1af17ea286e74253265"],["/posts/096db3c03b6e/index.html","ae4c6c2f88d901d49f02bfa88fe72a36"],["/posts/1235535247cb/index.html","2f4bb0b518ac5cf2da7a5110f75b5e7e"],["/posts/13b70ad2982c/index.html","34ed45c7f8009c361c977d9ba92cbd31"],["/posts/15fa81012f63/index.html","f7896ab3445404b4044847f620974437"],["/posts/16e9387534a6/index.html","6d72d581e1584f12b94245a202566a8b"],["/posts/1ec0df688f03/index.html","93377f8db62a8dd1bc3dccc8b72c7d6d"],["/posts/2b7ac1a9709e/index.html","6b7d7b7063a5d9975a30ba3e55d5d1c9"],["/posts/2bb24d491704/index.html","140a011881bacaae89d07625adf5abba"],["/posts/2c9261572067/index.html","c9e029848ba63e5d38bd76538d4338b4"],["/posts/304408dfc52f/index.html","02f92d635ea503888c9348564651402a"],["/posts/41c16cb60b68/index.html","41a6b68bed730b417ca2eb1221197373"],["/posts/4358b00bc797/index.html","21086d3eadf29c1ae23a2d2623368f97"],["/posts/4acff0774207/index.html","47356617ef5d10064a05c36bebf1870a"],["/posts/4b6cb4514456/index.html","7ee314f979c115c06ed7564ddf822e5c"],["/posts/6631458408e8/index.html","072396a19e139eac864d5d8a9849c08e"],["/posts/6cb2454df473/index.html","f52ff15d596d5779813663c59826d05a"],["/posts/6f929ba7ef0a/index.html","f0bbc9d4941ab9150d6766cc8ff5dfa8"],["/posts/76dd1b500ee9/index.html","9a6b5bf1deb570a143a1254d6d7566bd"],["/posts/8ef6e275fcc9/index.html","6bf97713c6b6bead40e17dab21e0dc7d"],["/posts/94456e62e22c/index.html","5d33810e6e63bf203c448758a0be6bb5"],["/posts/9792de8b38a6/index.html","3db876c8e03e8b8a5db60a2923639d26"],["/posts/a84c927bae36/index.html","fc5d6979098f46e5ecb04daaa9b28a9c"],["/posts/ad5499059bd8/index.html","898ac1bf71616cc1a753850241b592fe"],["/posts/b1a6e353d3b0/index.html","e1135e5c97b3a0c010428f1fbf326e54"],["/posts/b478f3198c73/index.html","97f6db8ee75d12c863be42a8fd59a88a"],["/posts/c0ae68f04a1c/index.html","f0f4ae5acd554cfab92c6bdb6e634508"],["/posts/c821481d77c0/index.html","f1f5924e6f27bb1b0d18732783e9f024"],["/posts/d1ded2bacbfc/index.html","790cbc6ce3e4b2c0e57e28448013632e"],["/posts/d911ff6fb3e3/index.html","210102c6e735d9b6e572a054f6d225bc"],["/posts/ebffabd07766/index.html","0e960cc0883cba1b0c7e3fdf8d7154e8"],["/posts/edc724f3bf5b/index.html","1ff732912d35eb69afb984ae9d3a0d16"],["/posts/f30c3df9c2fc/index.html","cb7f2a6a0be0adee53535325642fa632"],["/posts/fb79b38d6277/index.html","49dd4287a14d1eaf8b563635998796bd"],["/service-worker.js","6838ec35586f544554cb373e615d5719"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","553cd105c3a2f13036bb4cd2ed2f6351"],["/tags/255-255-255-0/index.html","de81683c914889de22864ffc7f120f16"],["/tags/BS架构/index.html","664847f0761eb69cc30eadc2dcf03055"],["/tags/Chrome扩展/index.html","2a18f522a74d4543da34580ce408bdac"],["/tags/Docusaurus/index.html","3db8a5e48b35964bbdf1d952dcd9bbad"],["/tags/Magiceraser/index.html","c315442b8148d7dac369df4d9cff0492"],["/tags/Neumorphism/index.html","3aafe3ffb86dd11c13696875fbfef41c"],["/tags/QQ加速/index.html","8d41a7aa863252335f79c39a92bee13b"],["/tags/UptimeRobot/index.html","b670f80e8ce6886550ad2107cdd90cb5"],["/tags/Zepp-Life/index.html","cf18ea777c140a686513bde2a605e540"],["/tags/css/index.html","42519bba463bbd716df47c8020b73058"],["/tags/dns/index.html","b929e552662f25a063bbddf087be7343"],["/tags/docker/index.html","86488b42fac03a55206c3f22b596ca5a"],["/tags/ffmpeg/index.html","43aedbd0ce140ea41288f67728f34986"],["/tags/github/index.html","28b738193df5ab43c66d0c68eeeb6324"],["/tags/google/index.html","86c9cccc88951f22334df7614a6b436f"],["/tags/hexo/index.html","dda1275e14da5148cc5a24915d7aa358"],["/tags/import/index.html","0edc3ac4a4a314cb23bc48d06534aa49"],["/tags/index.html","187a2cfcb2aed95d88a46ebafc919648"],["/tags/ip归属/index.html","abd11d22d67828597aa8e276f7eeb92d"],["/tags/linux/index.html","7155539833ff892f2fa81f2d995c2d2e"],["/tags/nginx/index.html","12e07432bcc8ad95adca6123a3d39233"],["/tags/pdf/index.html","8345c0f588d902f56a07eafa7ec9566b"],["/tags/play/index.html","12769cdd57a172675450adf53791e9d4"],["/tags/python/index.html","fb99a2bbe28e8bc2772c159ec72531bf"],["/tags/serverless/index.html","39116c55f8169defb0f46f556f8d7846"],["/tags/smtp/index.html","25fd44fc67e5386cb6f7367bf59ec182"],["/tags/source/index.html","96b9921ae434e1e5d5ecb93ecfc4b57c"],["/tags/sudo/index.html","2eca9139f9b659f47627eb81b76d4885"],["/tags/target/index.html","42902315a3c611e72a231ff50d4399d3"],["/tags/tinywow/index.html","1f3ec9fc6205b27781b3d3ac93fc9d80"],["/tags/usb/index.html","c85f983241e58f3b856d5c6895440ae7"],["/tags/wifi/index.html","24b114d76a720f157bfa08e91f3cf1ac"],["/tags/zip/index.html","74cb3b9ae4c0f27c0718731969b5b754"],["/tags/下载/index.html","ea2d0c8bdc104d06d1fe5b56e24570d6"],["/tags/个数/index.html","24c374e8ac7f9bdb8a820aa77160cf00"],["/tags/云原生构建/index.html","f7d0d0dc6b33ffa9bdcb7f0aef443fe4"],["/tags/云搜/index.html","4296ab6ea40960d0d60ef9c598662a07"],["/tags/云盘/index.html","c8b1dc298399609543d277a04cdf4bf2"],["/tags/代码/index.html","d3d4036978680baf8135c05a526f130a"],["/tags/免费/index.html","a98bd97ecb213635570890331a0e9590"],["/tags/函数/index.html","d98cfd779cda1682f69e92a2ef6afea1"],["/tags/分配/index.html","d0220ece5a780c0d64d197253094fef0"],["/tags/删除图片/index.html","4996e82b93d2aafab0ceec524f1faa3d"],["/tags/刷步数工具/index.html","e6beb7d707368d049739ff10191505d6"],["/tags/剪辑/index.html","a60ddc7e5d914869e0f9301472a7c6a7"],["/tags/压缩/index.html","9367519875d073f07b0f22385b436630"],["/tags/变量/index.html","f9274362593cbff26f4ae58590698931"],["/tags/同学/index.html","3fd5eeedf76f17003000418138de65b6"],["/tags/命令/index.html","48fa5c54026424b92077c51bcfe7e612"],["/tags/商店/index.html","e8f79764fd200c3c6ca0237cc06a1971"],["/tags/图片/index.html","0af35b0a7fc45457fd1799d80a868a7e"],["/tags/地址/index.html","a1322971eb283dbc78d90c0020e6950e"],["/tags/堵猫猫/index.html","73e6412c8e32e62a986ce62cd7a666c7"],["/tags/处理/index.html","f8c895cad687da746d573c13c2df819d"],["/tags/子网掩码/index.html","36ddd742eeb2c10c409707aa559e6224"],["/tags/实用命令/index.html","ff6980e58ffaa642418296089bdbad4c"],["/tags/密码/index.html","e0b0c5749de6ee3329889d4716a950f6"],["/tags/小游戏/index.html","99c0b4589f73497eadf17c952c0261a4"],["/tags/小舒同学/index.html","832646ead203f09e619d905a08e38f41"],["/tags/工具/index.html","d066de7277faea48152cc82827874617"],["/tags/应用/index.html","192e2de83278bc2ceefb48f9dfab0041"],["/tags/录制/index.html","9a4591d76fee609fc6fe57f1edc9f33b"],["/tags/微信/index.html","59b448031d82c2e3cebd9df38e39f081"],["/tags/微信运动/index.html","dfbfa719584b83f3a4932ff95945b504"],["/tags/技巧/index.html","1bd4ebbe5d1bd828a6b2d9d41eefb0ea"],["/tags/招商银行/index.html","04ddd44a653e89921849f65550ceb950"],["/tags/授权/index.html","10067f189a24bd5d291cfd8f4c4a3b90"],["/tags/插件/index.html","fa56afc6038fd391b1397022ba37afaa"],["/tags/搜索/index.html","99eaa8faffd1e26abdaeece2bbd039b1"],["/tags/搜索引擎/index.html","8d5f1e2b916a7e1765b8df0e6fd17ec8"],["/tags/操作/index.html","14ef54ed6b66d6245e08682f6d1ad56b"],["/tags/支付宝/index.html","7cf434811114c2d714b88a5137c15823"],["/tags/收藏夹/index.html","e7b298d5fc343bb76c2a65bcd3e876dd"],["/tags/文件/index.html","16bc6a70cd0df4b0b2edbae5dd3b8a82"],["/tags/新拟态/index.html","7d25a537a887ed49aa4b68abda8f9ec7"],["/tags/无损/index.html","a81bee71dd12f6ff5e4d938fa1cb6dea"],["/tags/智影/index.html","872577d877e00da3509c16f01d15403c"],["/tags/查看/index.html","78b173c8328a1a9f496ab7ea5a76741a"],["/tags/树莓/index.html","3a3fe3203ce549c8b9a5cba51868e646"],["/tags/格式/index.html","3924c693e92cdbe6f67dc6ea9dd9ca16"],["/tags/油猴插件/index.html","6a04577fbd542f2d33a81b52679e6424"],["/tags/流程/index.html","785992c7d12105e4115a7eaae72bf1d4"],["/tags/清图/index.html","6eb11284ec0c90b1a576ec9bd376bff7"],["/tags/源代码/index.html","91e2414e3bb68cec91650479d8ca4aab"],["/tags/源码分享/index.html","b47e6ef165fe323a93f2843198de9f76"],["/tags/生成/index.html","4ec93f0606ebdbd8bfbe1ae627a03b72"],["/tags/知识产权/index.html","e010d72ade3711eed4c491bd2d86662a"],["/tags/硬盘/index.html","30a525e98380bef82efc1712fedcc464"],["/tags/程序/index.html","6ca54518a718299e86dc29be1775c06a"],["/tags/空间/index.html","1ba553265bae64b54b5b17b6aafa7f2f"],["/tags/站点生成神器/index.html","72f04b667b0b8f075daffaaf87874dc2"],["/tags/站点监控面板/index.html","03a5bc8d0b547a8d4b085d46f4020da8"],["/tags/素材/index.html","047492088b7ef4c4ca9cc017be8f11b2"],["/tags/网盘/index.html","5b35bf14b70168f4c3768aaaf2c78cf7"],["/tags/网站/index.html","59e2702b4ffe62c5e6ba57df0ca4b1dc"],["/tags/腾讯CNB/index.html","4769c9b5f43fe0726c0f9a4f2668d705"],["/tags/视频/index.html","5d9ae4bd980a7d8eeac3809ae94e6011"],["/tags/资源/index.html","db9dffc189e8cb3bc0b36f8f62fd820f"],["/tags/转换/index.html","529fb49d335502c578a5b9eb2602b545"],["/tags/软件/index.html","bdbdac448badd95584939d2ac552ebe7"],["/tags/运动步数/index.html","b72f902583fd77a64d65dbaaadb843c0"],["/tags/邮箱/index.html","8690d8d68271487b15e5329d81a7887e"],["/tags/镜像/index.html","54f0571a5a3d9d764014a61231598b99"],["/tags/长度/index.html","db2ad50fd5b285ea22f2783177648363"],["/tags/高性能网盘/index.html","a88c12d4b41272ef64f0e620d78eb49a"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
