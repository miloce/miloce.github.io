/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","711cc95b5b79984235dd5796ee964939"],["/about/index.html","b5f38204e21ba216925fd169979a597a"],["/archives/2006/08/index.html","22833dcbc77b8583fcbffdf8eba802e5"],["/archives/2006/index.html","2fc5a43e089a59e94e2c55589afc12ea"],["/archives/2021/03/index.html","a942419c632b577d55ccbdff3c79ae90"],["/archives/2021/08/index.html","225eed6b456aac0e1fbd7e832ef0d026"],["/archives/2021/index.html","a730c13416d5ad1c6d65504f0f567f76"],["/archives/2022/05/index.html","9056dffb40e4efb283a1f983c49996e9"],["/archives/2022/05/page/2/index.html","4987b6bff9aadd1ad2b7bdbfa17ee71e"],["/archives/2022/05/page/3/index.html","d3a420e82d09712f3c3f2b9a5d71fdad"],["/archives/2022/index.html","0405091717d9e7d8088a9751ef13888b"],["/archives/2022/page/2/index.html","89d7ff9fa752a77c6091eb7a846eac4b"],["/archives/2022/page/3/index.html","2a27b8284c743ce42da47917f4079861"],["/archives/2023/01/index.html","a6e11c28cac6941067bc32dccafb88e2"],["/archives/2023/index.html","74cb2013a961d7a4d10665e3caa73b6b"],["/archives/2024/12/index.html","e9f32c29847f04608ffb11e58f4d0660"],["/archives/2024/index.html","51a3b6a42f0663efbed4a6d3301a4e41"],["/archives/2025/03/index.html","91e8d00e897bccdb7c3e5bcff7bee29f"],["/archives/2025/05/index.html","3f2d2ac1c0e6e1da19a43a932d9cf114"],["/archives/2025/09/index.html","a22891139104ad8b1aa736ba78ffcaf3"],["/archives/2025/index.html","d0df77890072c1591234104570a5eb23"],["/archives/2026/06/index.html","da72a9b88ec023c64fc5b2728ed55fda"],["/archives/2026/index.html","df7af685b6571d4066278e341e8b8c18"],["/archives/index.html","edd0d40ae90997db46780fff76e92a9f"],["/archives/page/2/index.html","2374bd8bd3829cfc7ce4fdca9cb239ef"],["/archives/page/3/index.html","da67680f46c197985bd0c4d8d7a47684"],["/archives/page/4/index.html","7ae0dca4943714ef1e59db8a67a9d4b2"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","ed8b7255dd20cfc7143a1f83b066175e"],["/categories/分享/index.html","abb65eaf121b50356f24a5161a2aa03e"],["/categories/实用工具/index.html","a9703abbf930e70462a4a2a8e54e533f"],["/categories/技巧分享/index.html","042ab10d332f1773ba69ff484ddf68c7"],["/categories/技术分享/index.html","2964f982d41004c384ca0bdf8b18c7f8"],["/categories/技术教程/index.html","6eee8f7fcd41d292b4de840f0667c428"],["/categories/技术教程/page/2/index.html","91c74602b4de53d73ba808c4d9bc63b8"],["/categories/源码分享/index.html","8287cc7c5408a443be5707389c50c4c3"],["/categories/福利活动/index.html","38d0c2c17e1ffed5360189e6eac96651"],["/categories/网站推荐/index.html","be0975e220a8c38267b844efd174d3f1"],["/categories/网站推荐/page/2/index.html","ca22dc5c3021d83f2cc265ab84991c12"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","d9f9a130f2b46bbd15f7a07d852cd7fe"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/html/catch-the-cat/catch-the-cat.js","2f83294aab45424833cfdc412621b47e"],["/html/catch-the-cat/index.html","d7f17aeffe05b9e9974a63f261b00bc2"],["/html/catch-the-cat/phaser.min.js","019885fba14acb6ccceee913b918d913"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/loading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/pwa/README.html","1e53f5a70e0ee7dc5f74237c88aa523c"],["/img/pwa/android-chrome-144x144.png","b063dd97c56b9b20add3c5c11ecd1336"],["/img/pwa/android-chrome-192x192.png","1aead24b2c554c257274b3164c8919a8"],["/img/pwa/android-chrome-256x256.png","abee198ebedf7a7fcace049236322b28"],["/img/pwa/android-chrome-36x36.png","4eef314c57c0cf5d6137b3ab85093397"],["/img/pwa/android-chrome-384x384.png","9cc97cb75370115ac1e7e568e030a97d"],["/img/pwa/android-chrome-48x48.png","a172a4706dec066b8358530ca1d06e1c"],["/img/pwa/android-chrome-512x512.png","bcea4e3301ba7ef94fd8e0c857b6939e"],["/img/pwa/android-chrome-72x72.png","03993f0324c576f2d72fc821ec3020ed"],["/img/pwa/android-chrome-96x96.png","c55e090912a35b32239c72534286e6c6"],["/img/pwa/apple-touch-icon.png","e055aee1e549e3d6dec03ed0830d58fc"],["/img/pwa/favicon-16x16.png","f5587884122c5b41a7dea8375db226cf"],["/img/pwa/favicon-32x32.png","f38d67adb48d90dae715239e6b920489"],["/img/pwa/mstile-150x150.png","8b608cd1b2ae959bb3a74021b2377214"],["/img/pwa/safari-pinned-tab.svg","93abe5af64ea0b3037d2bb0d4175a0a2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","cbd1b47363e01b66efa5edfc3c008578"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","4f26412b5fa5b33e6c11ae8a5e2e6433"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","a5f333a24bf9cb591f14433ca4543f0c"],["/music/index.html","1823c800b7b6210b096a440c605fcf2e"],["/page/2/index.html","199ad79ceba73c20567f880448afdff1"],["/page/3/index.html","5983202bcff76d73dec94900cb78670c"],["/page/4/index.html","7b98d4c5bb726497ff23e09615dc5f78"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/059b6e0600ce/index.html","440eadfb845af9a0515a5699e7476e3b"],["/posts/096db3c03b6e/index.html","3f9164d4ced234b5cf3d80adef672db6"],["/posts/1235535247cb/index.html","e73704f802a2ffe4cc54de3144b5a2b2"],["/posts/13b70ad2982c/index.html","4fa57dd79431d31855f40971c4e95b90"],["/posts/15fa81012f63/index.html","364b7113850b7245c8f8d3c560e556d9"],["/posts/1ec0df688f03/index.html","5c9c70fe72300d82bd30b9bbe822c923"],["/posts/2aea82a850f0/index.html","6b768f78e5129b60859cece84c18ea24"],["/posts/2b7ac1a9709e/index.html","d371f9993ef96ad1ffc8ae95cad358df"],["/posts/2bb24d491704/index.html","c5762a157556b3361f67f15a59d8c457"],["/posts/2c9261572067/index.html","405436dea5ee06bf94f283ae15b08ba7"],["/posts/304408dfc52f/index.html","5f8b6619ecc98ce751cac250036bf9ae"],["/posts/311ae06fbc6f/index.html","8187568b6fe1ff6c5d96ef5b0c8aab7c"],["/posts/41c16cb60b68/index.html","7b67df8e26312fe13fa1502634f22ffd"],["/posts/4358b00bc797/index.html","00c92e603f6bc6e62f22fccb53e04dba"],["/posts/4acff0774207/index.html","aba1caf80a2d945d1286cf258d02a031"],["/posts/4b6cb4514456/index.html","48193167447fdce48dc4e36792b8afd4"],["/posts/61d1b897dcb0/index.html","d0e5df5b154d35fdabc4954c845a86a7"],["/posts/6631458408e8/index.html","32abfc8b8ac977c62a8ad0444932ffc1"],["/posts/6cb2454df473/index.html","a2e59753e6860c7a44f07440f5d0932c"],["/posts/6f929ba7ef0a/index.html","91b337791b9ed16536c2a06b03011d03"],["/posts/76dd1b500ee9/index.html","86adf9c0289a24c4cf2dc843670c1d7b"],["/posts/8ef6e275fcc9/index.html","1c2d9c2878dc92d9a48d35b585310e1e"],["/posts/94456e62e22c/index.html","62d10d7a09a38e421fb7099b5301599e"],["/posts/9792de8b38a6/index.html","4996e19fbd2553995a25f0444e98857f"],["/posts/a84c927bae36/index.html","b8a37f8a7243271ae7d567e15bf53fa7"],["/posts/ad5499059bd8/index.html","cf154133d1e8e3a1b935d7d01657f396"],["/posts/b1a6e353d3b0/index.html","d5a365a50f08010f7cf0ff7e6921a8d1"],["/posts/b2dc15e2ff89/index.html","f5a1538ea2b93d684bd81fab28fd303a"],["/posts/b478f3198c73/index.html","b2b63d72d0140c0b8dc9c0e356201a5b"],["/posts/c0ae68f04a1c/index.html","dea0e13e93ea12029a8a157021d9bd9b"],["/posts/c821481d77c0/index.html","6d8483d12fdef9250ca7e89396809aae"],["/posts/d81821f9e51f/index.html","cb592d6d5808a2c877086070527ae8e8"],["/posts/d911ff6fb3e3/index.html","fa603fe1499fb6c4734e7f26c20bba3c"],["/posts/e91323c67bb7/01_codex_desktop_download.png","aa31ba69ca67f657544e726acb201856"],["/posts/e91323c67bb7/02_deepseek_apikey.png","0ce6d1e56487582654b8d8eed1b8f511"],["/posts/e91323c67bb7/03_deepcodex_releases.png","c1bd80e297c78064e8520ce5972e0ee9"],["/posts/e91323c67bb7/04_deepcodex_key_prompt.png","513eff57b27789d3f05b1183f73d3044"],["/posts/e91323c67bb7/05_deepcodex_switch_success.png","377b7ed4ba74acfd2707841d5b6c709f"],["/posts/e91323c67bb7/06_codex_test.png","8bf58d170f086ace31a25408425b4d72"],["/posts/e91323c67bb7/index.html","b4a48ebc9179c38a07093631580c2e31"],["/posts/ebffabd07766/index.html","bd67d3920325f86afd999aa9f42e0ecf"],["/posts/edc724f3bf5b/index.html","2d1799e18a3e55f341947ee18b39a19c"],["/posts/f30c3df9c2fc/index.html","edce6d8d18786474162edb263e6af758"],["/posts/fb79b38d6277/index.html","1fbcbba5426e8c124f1f38c7c3082aca"],["/service-worker.js","47a18760225ff459bd1e782a0c7b53a7"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","f9219f1419483c3cba8f12878819a2a3"],["/tags/255-255-255-0/index.html","cbb453efb48fa92fa3cfbc4e463dd74a"],["/tags/AI编程/index.html","17bfb442365a21f5d068019f73e69bd8"],["/tags/BS架构/index.html","15a07a6bb8bf14de183fe0ad43545c31"],["/tags/Chrome扩展/index.html","a5d64a08839776efee0b6bf583694101"],["/tags/Cloudflare/index.html","30eea0a4b5736e8fa3bb900cb2c54a14"],["/tags/Codex/index.html","02beba29c387af5b3593f015784a7498"],["/tags/DeepCodex/index.html","c4452428372071a2e7f76bb86e66f630"],["/tags/DeepSeek/index.html","8e052167f5adc1260bdb206a1f61a1d3"],["/tags/Docusaurus/index.html","c64927ac8ef3ca0281fbfe9eb526ddae"],["/tags/Magiceraser/index.html","1731ebe65253c42711b97b61ae068638"],["/tags/Neumorphism/index.html","a8e35168a339de5a44b08b9260d5bd82"],["/tags/QQ加速/index.html","e111e59f9a0a74778cd5f43834842ae5"],["/tags/UptimeRobot/index.html","d01c084bd6d956e066aa90e95c424197"],["/tags/Zepp-Life/index.html","13ff6dedeea1c240a31e7bfc94347370"],["/tags/css/index.html","7aae2985e80101a2cdbdf732ba511d37"],["/tags/dns/index.html","1cd967a593462f11507ff4ae05059774"],["/tags/docker/index.html","ac90a839ff7a6e709c1b75aad33031d3"],["/tags/ffmpeg/index.html","7edd56dc17e37b4e97aac0ef7e8a1bab"],["/tags/github/index.html","348e53793f331e165e6a520c8a2c4626"],["/tags/google/index.html","561ff1efcf1b19dfc7621c54a4443619"],["/tags/hexo/index.html","c0a71b514fb21e6509cf5726df71a6bb"],["/tags/import/index.html","8754047153080feec96b0216462a62ff"],["/tags/index.html","78dfcf7fbf98d7ca7a60bdcdfc7d2cd5"],["/tags/ip归属/index.html","2163fe99eaee2391f16b38d34846262c"],["/tags/linux/index.html","e8fd8dc073ff3db3dd4b94cff4f07a62"],["/tags/nginx/index.html","a2b52a0d52c9ca4c9f47271ec4299f39"],["/tags/pdf/index.html","c0c83b7926718119d830a09a0101430b"],["/tags/play/index.html","d8fb58c47927bc64cecbd2b9af87d3e0"],["/tags/python/index.html","277844f5c164057e9e50c3f709198293"],["/tags/serverless/index.html","d10d7df16454b31ef882b2cc30f4c529"],["/tags/smtp/index.html","106e3895022b5cd62d751229e6853bbd"],["/tags/source/index.html","e06e2cf978f914aa72dc33599aca6cea"],["/tags/sudo/index.html","efa558fdda7016784d62457a864c2cb7"],["/tags/target/index.html","fbc429c1056bb1c9e6ef8922debee222"],["/tags/tinywow/index.html","4ecd532741d1ff8033fb97e691af676b"],["/tags/usb/index.html","bda6512084d3030a6e933356bb0d99f0"],["/tags/wifi/index.html","d0fde362e9e5f26d5981c3120787677c"],["/tags/zip/index.html","1511a5d58332a8afea564bc6ff72c1e9"],["/tags/下载/index.html","00850d8ebcbd5edd7fe12edee9faaf75"],["/tags/个数/index.html","ada81376da7ec14f9fe3457522fea5b1"],["/tags/云原生构建/index.html","61c2250d07cb3570faa4f14b95168062"],["/tags/云搜/index.html","eea2ecf1550a811ce8ccb5a2d239037c"],["/tags/云盘/index.html","2d7f8420fa0bfad13ccc129703ae16a4"],["/tags/代码/index.html","f2ffa6e66d5b9508cd09b8837427584c"],["/tags/免费/index.html","580bb9b6615e065c7555bd09fdfc75cb"],["/tags/免费服务/index.html","daecd0a327fd3da9f18902d4529defe5"],["/tags/函数/index.html","0f1f559a1c5274a58eaafe08006f096a"],["/tags/分配/index.html","8e5cddb997f547f521c188f8b1ee92ba"],["/tags/删除图片/index.html","97748290caa0324375496bd3fbab1199"],["/tags/刷步数/index.html","c54c655878df6e8966af61a1fb2709bb"],["/tags/刷步数工具/index.html","9e772b6517d7fc274316dfff3f7b0277"],["/tags/前端开发/index.html","8a7423eb1de12e52c0ecc8e4de39ff85"],["/tags/剪辑/index.html","98d361fb27f0f11f8753e4054c6d30c8"],["/tags/压缩/index.html","58b49a7dfeffa31dc7e67ec261bcb997"],["/tags/变量/index.html","da0be68b509089afca62b4ff545ebb8a"],["/tags/同学/index.html","210d572889b0c780ec0e5df20f044f8a"],["/tags/命令/index.html","10d350bbba80dc0706dde02f66974752"],["/tags/商店/index.html","d88fd736a17f23182e8875f9cd0296d3"],["/tags/图片/index.html","50744fd08393edec540fb4b3bfa2ee6a"],["/tags/地址/index.html","469d9c57f7896c76d5c0e389ce6822a5"],["/tags/堵猫猫/index.html","4bb68482e7a6497598363b087751ef23"],["/tags/处理/index.html","2653b5351c226020f1c16c60ed42dc9a"],["/tags/子网掩码/index.html","0d1fe8f3e628a0634ade904c00ea2ed6"],["/tags/学生福利/index.html","03dab00500d96972b5de7302f30ef2de"],["/tags/实用命令/index.html","8fbdfaa81774300b17cc2b81c53ff92c"],["/tags/密码/index.html","61438a6ac8ca0ade3728e11859a88cbe"],["/tags/小游戏/index.html","502c2f7c4f8c6be6c70505a4cc29cf21"],["/tags/小舒同学/index.html","7205b2b0b3c43045706eb432c3dcf0bb"],["/tags/工具/index.html","df08cc1e2ea3139ebd43b16a029861c9"],["/tags/应用/index.html","44e871c41b59c0ab5438a683efd354f7"],["/tags/开发工具/index.html","28fa47c47ccc5616e6faac74f3f6bf41"],["/tags/录制/index.html","18a92b07e98727bd21abff1417f862e9"],["/tags/微信/index.html","48ecbc48eae86753973246be9e80e396"],["/tags/微信运动/index.html","76f2a87b588c86110ebb5d5c9265d0c1"],["/tags/技巧/index.html","0afe9d3e33e80b0d0289247f152d30f3"],["/tags/技术/index.html","05c73710f5c07a7619f2066928d8401b"],["/tags/技术分享/index.html","af1627cff143f0c994d20024164c13fa"],["/tags/招商银行/index.html","61ee4464b5d2139de39ba278de2796ae"],["/tags/授权/index.html","68f83fec64aebe8c85904ec1792962bd"],["/tags/插件/index.html","a1cc81a9c7a250ef802ccfee32b1b756"],["/tags/搜索/index.html","843243fb81b0aafc811088db9d510338"],["/tags/搜索引擎/index.html","14cb3676130c8419e6f92d83a1ac68b4"],["/tags/操作/index.html","d6c0435491a624baa118a4ed3db0a214"],["/tags/支付宝/index.html","0d559efb7101f1da37b074d874787feb"],["/tags/收藏夹/index.html","6375e9a99e01d9be0b595e0f207e0536"],["/tags/教程分享/index.html","279016664d363011fdbef17ecfd4fd20"],["/tags/文件/index.html","881bdfcf78f83fad309a8a3ece6c9872"],["/tags/新拟态/index.html","9199bfc22595e9671ccc8956de3c5d31"],["/tags/无损/index.html","47baffb2a74fe0753b218fb4c0bbde37"],["/tags/智影/index.html","11f859eabf1140bd07fd274e843c7e5d"],["/tags/查看/index.html","d3d8449e6fdf2a27a04b9409efe40e8b"],["/tags/树莓/index.html","b832b0c2d27f654025572f6e908d27f2"],["/tags/格式/index.html","03eb879a8a8a1ada8d03e1547a7b9963"],["/tags/油猴插件/index.html","3f87b3d324f021caa6d88936c00957d3"],["/tags/流程/index.html","8d19b830cc47b7aa2d2ecadeb477f9e0"],["/tags/清图/index.html","e384c26492f791eb86167fb97ac2d9a2"],["/tags/源代码/index.html","fbaa84de03601782d9aeaaa68e917e2b"],["/tags/源码分享/index.html","30d13bd8bf40e8ac5bfca9a05668eb09"],["/tags/生成/index.html","fcb07f455b52d8a9663d94e65c78323c"],["/tags/知识产权/index.html","6bf50a579846983381408ab0653b6271"],["/tags/硬盘/index.html","8c4bb35fa9236270a55a93c11405fbc0"],["/tags/程序/index.html","81190efd707c9c20f272d26c92f5ff71"],["/tags/空间/index.html","c33c8ca82b8ceae2998ed75e4151ea3a"],["/tags/站点生成神器/index.html","a97b739d812fe8a21cbac6839a7c205c"],["/tags/站点监控面板/index.html","f437c74637f6591aea654705f8dd7856"],["/tags/素材/index.html","66e74b64692de7e0d9943021219a1929"],["/tags/网盘/index.html","a85fb0498a873d7dfaaaed1af4ab63f9"],["/tags/网站/index.html","5ecd8fd4716955f505fd3974ec8dba32"],["/tags/腾讯CNB/index.html","341351fc8847fef3909a66ffc2c669cd"],["/tags/视频/index.html","3e9f82f82af7f94d1f289f69ab316fb8"],["/tags/资源/index.html","9e37a3c67fbdd3bb6b947f17572876ee"],["/tags/跨域代理/index.html","6ca16574ba6ce3c6a4aa0d417244ab33"],["/tags/转换/index.html","156fb575dbe86b01b1139979d83d1a71"],["/tags/软件/index.html","0f25d3402129e1c9ba343ed8f0b656e2"],["/tags/运动步数/index.html","c37969232a6bf3b48fc739be848ed7ed"],["/tags/邮箱/index.html","09a0362246d31049ce0e05b73cee265f"],["/tags/镜像/index.html","bbb6f2c7968ad9e27215d6d317b2262a"],["/tags/长度/index.html","e21679d50ba5a5d1a8956de20af8d07e"],["/tags/高性能网盘/index.html","668aa4b7fad379ea220d07edbeffb71f"],["/workbox-b41f8fb8.js","67c91814cf16fd7aef617b2787af2817"]];
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
