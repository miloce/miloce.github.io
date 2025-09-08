/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b6e77baff76d3c2d141ccf644ea812ba"],["/about/index.html","f4f516b0462085ccce4430d6e3766885"],["/archives/2006/08/index.html","a9a2e4cf1577e756c624ec88409a9892"],["/archives/2006/index.html","572b4b22766c991ac8cdc6510ec00908"],["/archives/2021/03/index.html","40a7ca4dadb135736c22fab455faff09"],["/archives/2021/08/index.html","27421aee8727fee166f90fea486a5d9b"],["/archives/2021/index.html","643c5f97cb8cd24c07c5c8a368a37ddf"],["/archives/2022/05/index.html","72efc53ff520e0a85882ff77cee52157"],["/archives/2022/05/page/2/index.html","c3089cc588cf8581f581036ab3d448f4"],["/archives/2022/05/page/3/index.html","0f2d7125656f8ea7e09007c9e2ac52c8"],["/archives/2022/index.html","2cfc487eaf5ed5c65e0dac6d95ffcd80"],["/archives/2022/page/2/index.html","b7bd526f6732d7ca891628063b45000d"],["/archives/2022/page/3/index.html","e05a07aa410b5da1b2e829ff3f18cc16"],["/archives/2023/01/index.html","5179fbe878c5d9e99626729bcd13166d"],["/archives/2023/index.html","cd62bcf8827c1a08a1d328a18514e889"],["/archives/2024/12/index.html","02cde3d0cb5d7e0803b6e664a5d273d2"],["/archives/2024/index.html","0e159f255c89e9f953d0fa2c06a01f93"],["/archives/2025/05/index.html","b2a6f2fef5b90c401ccee440a1da1cc4"],["/archives/2025/09/index.html","74503fae9d8ef892598b15404adba699"],["/archives/2025/index.html","5a8843990dbf188acc13f653c4446e2f"],["/archives/index.html","c36226cfb342322b651f53b45b799122"],["/archives/page/2/index.html","33bc511f0ea62251e1fc11f89f2538bb"],["/archives/page/3/index.html","eca80de1945bc7cd8c1b8ee2a794c3cc"],["/archives/page/4/index.html","f6fc3db1ce169fb4510de8cec9a0a8a5"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","386ac48f632fa67fc3e1ff5634891d9a"],["/categories/实用工具/index.html","3860ca63e0464f7f45b41482fef41989"],["/categories/技巧分享/index.html","4506a895be426d920c1472eb05f77d0b"],["/categories/技术分享/index.html","438ce06d38252af8ab0427fb967f4be0"],["/categories/技术教程/index.html","4b4926313859d6999defd49bfc3f51fe"],["/categories/技术教程/page/2/index.html","5310baa8ebbc8323deab99a4b1dff60a"],["/categories/源码分享/index.html","dc659e0768c01bb9c942a6309e4b414e"],["/categories/福利活动/index.html","80c51b7da705048e9bfaa1c545a301a4"],["/categories/网站推荐/index.html","2acd62e8433dbb3e3e9d3037cc29f11a"],["/categories/网站推荐/page/2/index.html","e7161b7fc82b82ee3812e6aee56b512e"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","c1739cbd7508d27fb529bb9925abc50a"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","4a942ecf1c702825d1fbf940d01ca888"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","b21f2046af97d911ca2d5ff20e005227"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","5274ecdc129724dab6e0656044fd4fae"],["/music/index.html","7716ae62f8aa8a280b164805475339a1"],["/page/2/index.html","a9f97f9513b33e13597ed7244a67cde2"],["/page/3/index.html","1f6d464c6451bc8cab176946ec813278"],["/page/4/index.html","9727821548d54a9ce14ce3fa613f90a8"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","86c2d8a54b5b6f72b4ed4666fdd1ffa0"],["/posts/096db3c03b6e/index.html","0cc68c6bf07eba7a29796196c8c6370c"],["/posts/1235535247cb/index.html","1c5dee1d3e4f0368907cf929d133e0f3"],["/posts/13b70ad2982c/index.html","dc37cd9376331f93e0a11e2bae8d6066"],["/posts/15fa81012f63/index.html","2da59d5e8f040e9f88d6f782753fb31a"],["/posts/1ec0df688f03/index.html","ab7a7caad5d1eba6d65e38b1fcb23801"],["/posts/2b7ac1a9709e/index.html","489af717c9b4bcbf93f026719654f994"],["/posts/2bb24d491704/index.html","6cbfe050f817a0974c93b0bf3337392e"],["/posts/2c9261572067/index.html","fad2306d7756227fb315c30e17994097"],["/posts/304408dfc52f/index.html","5c81b69cd97f257d7e564f7b45c8649c"],["/posts/41c16cb60b68/index.html","6dd4767e3d54d7e956cc1c0e8a24e445"],["/posts/4358b00bc797/index.html","d004a9a4d29373f9538e7eeea69133f6"],["/posts/4acff0774207/index.html","6c92523f1d80622ff99a11d3577b066a"],["/posts/4b6cb4514456/index.html","3ef81c244c4cef7081511787b430b33c"],["/posts/6631458408e8/index.html","a26e6eba2a6e2593305e03b058f3589f"],["/posts/6cb2454df473/index.html","9070992bb20d79db2258159731ead4df"],["/posts/6f929ba7ef0a/index.html","791316f73402f3971129f35059cd7b1b"],["/posts/76dd1b500ee9/index.html","f9b7071235290d8f92e65fb4104cbe96"],["/posts/8ef6e275fcc9/index.html","b683023e7abf2d1280d764cf7f7757ca"],["/posts/94456e62e22c/index.html","6661f7ce6bf59a9776d9b6390b444a99"],["/posts/9792de8b38a6/index.html","b921291b4ff7cc3ba334419ce540036a"],["/posts/9d119b73dd2a/cmb-service-account.png","a679b24f5db960401ddcb612610e59fd"],["/posts/9d119b73dd2a/index.html","242a4b0b81f2c73c9ce0841da3d70f83"],["/posts/9d119b73dd2a/jc.jpg","39250f60d65c34b48684bdc073457278"],["/posts/a84c927bae36/index.html","0048a1a94110a5e4179cfeaf232dfb31"],["/posts/ad5499059bd8/index.html","bd952f45f381c73f597428c8b805cc64"],["/posts/b1a6e353d3b0/index.html","03f894893431b1b92909f2877cf044e0"],["/posts/b478f3198c73/index.html","7c86c706e372f008ce9c9d7b6becfbb3"],["/posts/c0ae68f04a1c/index.html","3fb360a4d2939059b891eff8b1eb5adc"],["/posts/c821481d77c0/index.html","46536cda328e548535c7612c34ce67e1"],["/posts/d1ded2bacbfc/index.html","45b25294fd635b48cbc2ea3ca7c13566"],["/posts/d911ff6fb3e3/index.html","ba832f1a8c730cbd557041f978309e84"],["/posts/ebffabd07766/index.html","590e6540af2281a318995636ec4b2e7e"],["/posts/edc724f3bf5b/index.html","0a6f4cb39fe86fef8ae9b22440b83d3a"],["/posts/f30c3df9c2fc/index.html","a684cef851b6bfe2498d0abc93ca67e2"],["/posts/fb79b38d6277/index.html","04af4354df56df2265bb69744c5707f9"],["/service-worker.js","fb274335ae4b7fc9edaf0c54cdeb95da"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","506ccdbff73cb61129c55b8649b47920"],["/tags/255-255-255-0/index.html","e5586af062037a4c30e6567660e9703f"],["/tags/BS架构/index.html","e9698a95b148b712509d6c253c7d74e7"],["/tags/Chrome扩展/index.html","2fab9e7dd58e6f00304aced28fb171f4"],["/tags/Docusaurus/index.html","a8b31e348eaab49dc46537132c2ab01e"],["/tags/Magiceraser/index.html","32b7e2c38963427a7447846654eb36a0"],["/tags/Neumorphism/index.html","8ee335df26ec49dc52efac11a4bb41cf"],["/tags/QQ加速/index.html","5330e6b7c1b83d25710dfebd19bf940c"],["/tags/UptimeRobot/index.html","c966f837d66da3831a996de903adddfa"],["/tags/Zepp-Life/index.html","c0023d17d06ae161b61f06a0281bb08e"],["/tags/css/index.html","8cbbc68ad7a834ec3eac1fc4f5664f79"],["/tags/dns/index.html","6da754acf3e8242e36fd7ef5cdde9b3a"],["/tags/docker/index.html","e6960c269d0ce02ac331f8e550629097"],["/tags/ffmpeg/index.html","731694c0fdba2fac23a398de6b055a30"],["/tags/github/index.html","fd67ff28ea4ddd74f119dcb799b773c6"],["/tags/google/index.html","9bc4ec867f793d3fca267feaa87b4f5f"],["/tags/hexo/index.html","37d26bc4f5fcd4c6b2592577035deaa4"],["/tags/import/index.html","ee65a68d8340e0240c10d8945053a4b1"],["/tags/index.html","cbbe89dcb4d0c719bc5e776bd59f8110"],["/tags/ip归属/index.html","d0d0fb820182db803273f6addb15c314"],["/tags/linux/index.html","f2109544a3fe948e44bfe6039b9a23f1"],["/tags/nginx/index.html","974d37ab415848126bebdfc98f4bf2bd"],["/tags/pdf/index.html","4f334106c4fe04ce0c5f5b740bd1b867"],["/tags/play/index.html","e4b65502eb35eec2269fdfb282de80bd"],["/tags/python/index.html","97ed144ced27c0d6371fbe8174eaec5c"],["/tags/serverless/index.html","0acdc8dc798aab7fc6b8453ea9831e90"],["/tags/smtp/index.html","12ffe0e4c46efb4f2dfaec78438f744c"],["/tags/source/index.html","f86956b39d88665b7b25e0903045bcf1"],["/tags/sudo/index.html","0a4fda109b613dd6f56ce2dde4a3782d"],["/tags/target/index.html","d70c0889c7b72629d5fcd6ed08dec436"],["/tags/tinywow/index.html","be5577f6505ea88bd04ee1a6cdfd85b5"],["/tags/usb/index.html","2da3174b3d3a600e11dd225902990ce7"],["/tags/wifi/index.html","bc45321d703c0b1536ea314268040826"],["/tags/zip/index.html","4cc235f93ebc9d46a86b082c33d26c63"],["/tags/下载/index.html","fa8bc9abf9a1f3d1d579b2d20fcb1caa"],["/tags/个数/index.html","7186a29418eb05678a5ed66bf2d86a97"],["/tags/云原生构建/index.html","60c5632be84e8bfdc1c8c8b69076437a"],["/tags/云搜/index.html","f3597fcf65030c245749631b76e1d465"],["/tags/云盘/index.html","87a5c29365a2f9a2fedc037c6a0cada5"],["/tags/代码/index.html","9f1ebedf90c083751de6839d46ff455d"],["/tags/免费/index.html","5d9208211a9e8d7e27544c6e7572e535"],["/tags/函数/index.html","e6c393250061dd22600f73a21f7aee2c"],["/tags/分配/index.html","00837d0e72dce06337013073a61b72f8"],["/tags/删除图片/index.html","bc6d449dc2972da98e264bab5b23a96f"],["/tags/刷步数工具/index.html","adc8308b59b292649f783af0a5082722"],["/tags/剪辑/index.html","87bde31682d6b41c4f54015f99c93602"],["/tags/压缩/index.html","7f252f45e56c6a49bdef71049a4d63d3"],["/tags/变量/index.html","19eb92731baaa790633d6cf76885f4a2"],["/tags/同学/index.html","09c6539257d2cbc983adc83838762e78"],["/tags/命令/index.html","08ae76dbb507bebc52f67e26d794fcff"],["/tags/商店/index.html","1cf342ec2547368578f0b87553bf75e8"],["/tags/图片/index.html","036fb7dc31498e740f1fd728b13fde98"],["/tags/地址/index.html","0e673a95bcf7a1abbcfb4389edb61090"],["/tags/堵猫猫/index.html","75630521fe8e8b823e6a2b1926e5b40f"],["/tags/处理/index.html","dafefee18dba7e47a574e3d735084cf6"],["/tags/子网掩码/index.html","bcee4b385a21b1851b877f5670ac09eb"],["/tags/实用命令/index.html","9154b74bde88f34de00ae8eada4676b1"],["/tags/密码/index.html","f84564df0e7d0c8318bcbed18680fd82"],["/tags/小游戏/index.html","a9b93a00cef6125b1ac2b702cc4003b1"],["/tags/小舒同学/index.html","afffb1aefc2243d76fb47063882fd8f5"],["/tags/工具/index.html","b40cbb06d38a2e97764f647f591c9a69"],["/tags/应用/index.html","e14414a7fd0c26435c8fc6d7720cde05"],["/tags/录制/index.html","47485b34a5fbda8bda0ad5e32add2395"],["/tags/微信/index.html","c8f6d1bb6921ec9ba2f1604036664140"],["/tags/微信运动/index.html","6c02c5a945d5d871686078846e9544e9"],["/tags/技巧/index.html","99a7e310658449a20b25d21f2f94f404"],["/tags/招商银行/index.html","480a4d731bd95fdc24e34a63062bf1c1"],["/tags/授权/index.html","8363ff63f8375997b5e759a8d6e8c2ff"],["/tags/插件/index.html","fc49145664ea2fe2bfe3c17df3fc58c4"],["/tags/搜索/index.html","dbfc2b0a2ba6a572725b49c8627165c0"],["/tags/搜索引擎/index.html","30de4f25dde0f3bf9a06959bbede0474"],["/tags/操作/index.html","58d3e34b6a377df83b47e2a320a43da0"],["/tags/支付宝/index.html","858fec13ecabc2d2f36f434d73c92660"],["/tags/收藏夹/index.html","64ad57affec24f63f92364fb6aa56d2c"],["/tags/文件/index.html","15ea6afd3fcc912753708bf1cefa479e"],["/tags/新拟态/index.html","9ff6df62196d4de8f59f7d017d66a13c"],["/tags/无损/index.html","d4547b4116bd5173b4cff99c34835c13"],["/tags/智影/index.html","792147a5e3376440c43f954c987a2ae6"],["/tags/查看/index.html","fb341a84092632d2bb1402b048cab69f"],["/tags/树莓/index.html","bba5e1ea061ec913eaaf6f30dd4d2303"],["/tags/格式/index.html","6ea081b33b8abbbd39ec571878af2ad9"],["/tags/油猴插件/index.html","c5ddcbe7dbac566dda84b862a6bb3f4b"],["/tags/流程/index.html","157869b9e402a3d4c4dc2312267a571e"],["/tags/清图/index.html","f2052f13bfceb60119565e0bd39757b9"],["/tags/源代码/index.html","4a6aea4aa63160d318277911ae42417e"],["/tags/源码分享/index.html","0448d5e1d2a37d5c78ddcf34124bfd3f"],["/tags/生成/index.html","3b169b6762bf90d6079894bb5d614612"],["/tags/知识产权/index.html","f54ba8d3dad8e772036993cb5b058d59"],["/tags/硬盘/index.html","cc6bcd20307b4f8aa5ee66407aadeff5"],["/tags/程序/index.html","7d1db39c1d0d16d8222ba1d9b466dd26"],["/tags/空间/index.html","178fa21c63d4f98ebd3b5ad967380b4d"],["/tags/站点生成神器/index.html","5bc415082edb51abf2287a0230f6e22a"],["/tags/站点监控面板/index.html","dac86285ac73cf8d20a93f8f813fde45"],["/tags/素材/index.html","9bf7ae8c4b4d64ad36c5e643e57d0a2b"],["/tags/网盘/index.html","65c7c9aca4e6dd0c02893bb1af24b01a"],["/tags/网站/index.html","958e86b59c2a6cf2fb54eeab5b9b82b5"],["/tags/腾讯CNB/index.html","d43cd8655b4b882a230f0aa1492c972d"],["/tags/视频/index.html","d6f71b9365adf4d0ad68f0a27c08bc61"],["/tags/资源/index.html","c708019d9ff888047e8173a15096f289"],["/tags/转换/index.html","038cf14c53c75da24347bcaa89154edd"],["/tags/软件/index.html","c3a084654d59ce6761d45a11898b3e4b"],["/tags/运动步数/index.html","83daf35bdad6f2d37f4b310cd4dd37d8"],["/tags/邮箱/index.html","10bc4e1145963a0429a834499cd22b24"],["/tags/镜像/index.html","9663c6185614d3d2cbc01faf5b219632"],["/tags/长度/index.html","60eb35a51469bfb98d323126d4595c16"],["/tags/高性能网盘/index.html","a7bce0ffdad79d56fe675d432c65235c"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
