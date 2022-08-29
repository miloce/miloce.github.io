/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","afae83643dde99c1a3ea133254d06391"],["/about/index.html","ec3b1f22e1e6f6ff85eb9093e05e0e9d"],["/archives/2021/03/index.html","3423e36a55e2b389fdd08803e644fce2"],["/archives/2021/08/index.html","ccc4423333d4d8e13b3b47fa20789429"],["/archives/2021/index.html","790967456208526946a764c4d37652bd"],["/archives/2022/05/index.html","034d2bb840e0c752f16fca74a656e030"],["/archives/2022/05/page/10/index.html","dbe05b494ee523484f9f2ac1549f5964"],["/archives/2022/05/page/2/index.html","9aa7b407ed31c089c6d95bff7fa256d9"],["/archives/2022/05/page/3/index.html","70ffb2add299b5bb9f034b28dd80ecaa"],["/archives/2022/05/page/4/index.html","ad56b20ee214b3322c4956c97f0a05d1"],["/archives/2022/05/page/5/index.html","16e3bd78e49acbc603b4790c5a9b6821"],["/archives/2022/05/page/6/index.html","4600a559385f0f43827f756c5e90314c"],["/archives/2022/05/page/7/index.html","1cfa6beb3116650ab854155421320a32"],["/archives/2022/05/page/8/index.html","90028e5be3d3582299eab080d8919ce1"],["/archives/2022/05/page/9/index.html","633a219f855bc74cfe652aad1e5ef691"],["/archives/2022/06/index.html","a2b3180f2e1c30e628a7e8c349d51005"],["/archives/2022/08/index.html","230947dcdff4147178ac759508a9138c"],["/archives/2022/index.html","5d724d0f0d74e0f85d8b05b4b9e1b1da"],["/archives/2022/page/10/index.html","159192318585c7a8f6d0aa67cca1e0b6"],["/archives/2022/page/2/index.html","616a52747c38cbd8c928a3abaf86b679"],["/archives/2022/page/3/index.html","5ffa67a731441e8cda5dfefd91bc444c"],["/archives/2022/page/4/index.html","343ea2ab9407b8fbb75776e048232a5e"],["/archives/2022/page/5/index.html","b6ebc93e6f6487a790b537af686f54f3"],["/archives/2022/page/6/index.html","a1daf53c6a45533dd4edf8edb7b05490"],["/archives/2022/page/7/index.html","7e2f2eeac47f84ef380a172b33702886"],["/archives/2022/page/8/index.html","fb5d5629a10ccf453ba63f5ac169a35d"],["/archives/2022/page/9/index.html","52f9f6319522aaeb145c479d40dafece"],["/archives/index.html","9b23019986a1c12f4f8af6e73a34e9d3"],["/archives/page/10/index.html","70732d0a476f448ea1cd02be12071359"],["/archives/page/2/index.html","82e38ff52b8ebadb9f8aaf1656bf9d5e"],["/archives/page/3/index.html","873aea3d0f41903284ac759431dd320d"],["/archives/page/4/index.html","65406371f07e405993ca15d381139e98"],["/archives/page/5/index.html","5395c53810d5a376be2f40c5f99062b1"],["/archives/page/6/index.html","e71b907ef1be77c0597e3ea02c720fba"],["/archives/page/7/index.html","d74a4255b0ad0bee81d5074a725c9414"],["/archives/page/8/index.html","fe9e7c0b9c9e3c6440699a59afa2b70a"],["/archives/page/9/index.html","4b12abd151f138b88f739897ae3d6a2e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/categories/index.html","0b66b6aa364fd60feac770d9a40470dd"],["/categories/技巧分享/index.html","64141be3e83433abc52eab0552b5c5f1"],["/categories/技巧分享/page/2/index.html","819f81d3c3067d31b4dc4a397fa413f8"],["/categories/技术教程/index.html","7b7c4fcf69bc011a347d36ccb92fc6d5"],["/categories/技术教程/page/2/index.html","262c5a1cfdec84cdcacba53ba4e502b6"],["/categories/技术教程/page/3/index.html","c416f2739c548a4b0ec045b542113a58"],["/categories/技术教程/page/4/index.html","77221c8255bd54f23a7f5bcbca5dae3b"],["/categories/技术教程/page/5/index.html","1306ffad6ca47a780495d77d1fce6f74"],["/categories/技术教程/page/6/index.html","32d6a2436e2b8c64ab7f43cbea278b71"],["/categories/福利活动/index.html","c17cdc5fc09eac5544562e47e20dee8b"],["/categories/网站推荐/index.html","9667804dae3d6b456d0d5d96fbb35a2f"],["/categories/网站推荐/page/2/index.html","cfd1930d9441838e7932f573c61ff90d"],["/categories/网站推荐/page/3/index.html","db8f563adb93df15583e3f17b59c5a1b"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom.css","2b238f84392afcdaf41fd0bae238f960"],["/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/css/index.css","4050679e46559fcfb3ee92fd9c8603e7"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/test.css","77e24b56c850a001ccf11d1af7009de3"],["/css/universe.css","d82134bedb5c9485cbc74fc632b46e48"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ycmusic.css","d623ea3cc52ae34d444755c1c47d0c57"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/pasted-QQ会员续费.png","f3eefd23ce74329405db8d40594b44fc"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.png","f01489dc16ab90f715f33e504b7908b1"],["/img/background1.jpg","457044efc799611e9697f1ff8fa7e344"],["/img/background2.jpg","56bc44d644e0e9ba94b04c6b8282eb90"],["/img/background3.jpg","b3f46b8de3caff0649b0c9b00a77c5aa"],["/img/background4.jpg","0b62e97af473076ca0e4e4a4a3e91148"],["/img/background5.jpg","a85b95a0a926f45ef967c0950a47d815"],["/img/background6.jpg","4ecfb3a6d01e8bb58468da052547efcf"],["/img/background7.jpg","da709e41f74200f960b4c6bdf8baab63"],["/img/comment.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/logo.png","605d37c0c59d03d2860661c8a469ecc2"],["/img/planeloading.jpg","27e251e3b4b1eb692e117a6a7ccf0b1c"],["/img/pwa/README.html","3c6cb8f1890292daa45737a5ed13b58a"],["/img/pwa/android-chrome-144x144.png","85ba8636eba11ae0d849b0f436196188"],["/img/pwa/android-chrome-192x192.png","6abe4d57ab9f3485a9b52cea352b815b"],["/img/pwa/android-chrome-256x256.png","2ff3ac4c945e250741d8c6ecd9548ce1"],["/img/pwa/android-chrome-36x36.png","c05ba36b6eefc82eacd28a2f0f16e82e"],["/img/pwa/android-chrome-384x384.png","97e7d351d0f7e6d8e861ef7ee623b5f9"],["/img/pwa/android-chrome-48x48.png","f59618f082df4e4cb82f2a35581711ef"],["/img/pwa/android-chrome-512x512.png","64a229c4ca3ca7cc516cd06b45fb5e74"],["/img/pwa/android-chrome-72x72.png","9bf21a70e070e5dd2b5fca118c280f1e"],["/img/pwa/android-chrome-96x96.png","5293f3d3f878563bcf485211b6069f4d"],["/img/pwa/apple-touch-icon.png","a824855f2f351feb7154331745797ddb"],["/img/pwa/favicon-16x16.png","3c7c11433960c08f8b222ec68399bb90"],["/img/pwa/favicon-32x32.png","7b789d5f14580360abd90e8484f07a4a"],["/img/pwa/mstile-150x150.png","c5f6cb99d90567cf42650bb52db665c9"],["/img/pwa/safari-pinned-tab.svg","b1c8b85d76127b5ac9ca2d902b64e1e2"],["/img/qqpay.png","b97b0547ecf2adaafca82b7e6bb1db8d"],["/img/siteshort.png","e3a6f0c52dd8d67a746d0b2cd38c8507"],["/img/wechat.png","d703b8e4786adccee5cf8736a08a61ec"],["/index.html","c79afec6a7da63ce0baeb673e9f8e1e9"],["/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/beidu.js","755fb878ba0e2e387d38021c4011f207"],["/js/custom.js","08ac73a973855be130adaf469df1de8c"],["/js/jamsetting.js","0010e8339c278b421f543658b3c806ba"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","c2d6628801fd2dc0ea1739901cf5d99b"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/lib/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/lib/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/lib/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/lib/runtime.css","edd7ccfbc6f695bb26d58cf84e3d82a8"],["/lib/runtime.js","24c1400577e8915fa2548e5073ab51d4"],["/lib/runtime.min.css","4eae70e11d186f34daa5474565c9ca75"],["/lib/runtime.min.js","85323341de0d11c964c4dd46118cba42"],["/lib/swiperbdage_init.js","4cf84e5efbef7804a9c98b18d34715b8"],["/lib/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/lib/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/link/index.html","6d0484d31b9cdf9306527a25845362bf"],["/music/index.html","22a401c55647b27988b4fdcea9953ffc"],["/page/10/index.html","fad0870515baeb872579f105fe839306"],["/page/2/index.html","bcdb0d80a26bb51dca0419fd7d14edcf"],["/page/3/index.html","49fbbf0ace29556f342de48b2f275594"],["/page/4/index.html","37fcd8d36b2e05c00db2b3435cdb5895"],["/page/5/index.html","4587d497dd402ddc7058b2cd89cb639c"],["/page/6/index.html","04146c5e8799b2411bd83eda65c87b8d"],["/page/7/index.html","aa8ab35dffdcd839e79c7c77206ddd9a"],["/page/8/index.html","d6229a0f8f6d350aeafec2744a4f4bf8"],["/page/9/index.html","099e16cca73e33fb17fa46312ae6ccc3"],["/postfile/2021/03/1326580001.png","1651db232d2cc7f11adf463a66bb803b"],["/postfile/2021/03/1588615345.png","4ab3c01ad8ad253d49a9f25786f65175"],["/postfile/2021/03/2597608899.png","8d78d43fadb3fcd28492652ee94f3021"],["/postfile/2021/03/2627722267.png","2894f8357078ed7cbf5ba6e8d3aa84ab"],["/postfile/2021/03/311417920.gif","1f971615e78c345be29198f299085cd1"],["/postfile/2021/03/333092447.jpg","f9a0d8d8aebacc558e571231d5849ac5"],["/postfile/2021/03/3677043544.png","a13300f08ab45de2f35b829cbd713c51"],["/postfile/2021/03/3679197349.jpg","434e81cbab6e854ea06825b03b8eabff"],["/postfile/2021/03/822909320.png","3ff3bf9f3744504bc9da7c9895c1c442"],["/posts/013f46e607cb/index.html","d0e6a024d62b5d162f3de2b0a6fb5e2d"],["/posts/0344cf4a71ac/index.html","be6ffb2bf21a318c57dac4fbb3acb83c"],["/posts/07e9d65b0696/index.html","f976d11780b8ae78609b4d7e685d485d"],["/posts/094c628b48a6/index.html","317523a034f30ada9b1cff450c2806dd"],["/posts/0ddde9bf2629/index.html","daa5047168411334eed777d558888ad1"],["/posts/0ff886e4cbd3/index.html","bc5173aeb071ec2c372e488f5ee69909"],["/posts/1235535247cb/index.html","2c6311afd7bc7ea625ce0e94261121db"],["/posts/1295ca64a467/index.html","319d37faaebf3d5e6f9f740c7c00130d"],["/posts/145ae8ead9d3/index.html","99d96451a1688332d3ce6549effa9987"],["/posts/14d237c26b5e/index.html","4844b0f5592aa05aa4b99ca33a6363a3"],["/posts/155878850b5d/index.html","5d6aaace4b4ba157593e1f20fb6ad672"],["/posts/15fa81012f63/index.html","c471364b926c1dc01f120dd99cea93e6"],["/posts/1a173ceb8ef1/index.html","aadbc3c34403c9840a852d0f2d41102e"],["/posts/1d47fecff31e/index.html","c4ab8b8b5c4522f9b47b43cd0873d761"],["/posts/1ec0df688f03/index.html","ee383685fff0aad4d6fafe2de9752752"],["/posts/213ddfd4d87d/index.html","9d157ff63d64139efa2436e6663103cc"],["/posts/223a84d24c3b/index.html","3e8d8989c192dbd2c78759022fd3286c"],["/posts/227c3c99fa99/index.html","5f33c5d922d994c4cc7d1cc4be4a7459"],["/posts/2b8fe7b29e8c/index.html","32d9fd6e301ae95c801b061beb153aed"],["/posts/2bb24d491704/index.html","c215093c33c86594f83d0f4d54f1cf21"],["/posts/2c9261572067/index.html","f70004025aac0db79f56743800609e51"],["/posts/2fd3a35e49e0/index.html","4da971086db87042c724bbd655a2331d"],["/posts/304408dfc52f/index.html","6927ddd82368157f2f3777a2ba8ccfcc"],["/posts/357fa4a40d8b/index.html","1ddf6532e5df9fa3234e66cc43ffde7e"],["/posts/3872ce211e30/index.html","df97452131871869d138c40b72929be8"],["/posts/3bb1a894e730/index.html","79f753d2d6aa01f389ecbb1c379a77ca"],["/posts/411ae77a4f29/index.html","c1bd7d6b0575d81a7479199218ef743f"],["/posts/41c16cb60b68/index.html","6c88fc0e9a6ea6d2b9a17a4a42edf903"],["/posts/4233dd1ac4c0/index.html","de665f4d2f273fd32473633dacc2bde4"],["/posts/4358b00bc797/index.html","82adb14de6bf9c032eb62c7dbbe654df"],["/posts/4640b12d803b/index.html","66b970cdcea749f810d117ddb71b77a7"],["/posts/4acff0774207/index.html","33334347ad5a7217d1ae01f859a11f8b"],["/posts/4b6cb4514456/index.html","6aaec58b2cdd97ef4359813246559ac2"],["/posts/4d252cdf0e76/index.html","a68e9900b70babaa5a49461acb751fda"],["/posts/4ed96bc2df78/index.html","bcf79a39d15669d6f70963018ea9b472"],["/posts/514535178586/index.html","9d869fa8993a9268e9e74bf91688f0ba"],["/posts/59ad5dc4c5b1/index.html","97a9658a4531f3b4e2e5a5dc23ebf0ee"],["/posts/5f847f658ba3/index.html","a0c56d4ded9e3c49f3ffc96bcaad2da0"],["/posts/5fd7efa9bb02/index.html","ac5886b6c769063d2a3a2b601c9a54be"],["/posts/614eaeedc0e3/index.html","fffa7ed120d672ffd5d185e944a8b4d7"],["/posts/6631458408e8/index.html","7986abffde3a001bebaa1a81435b5468"],["/posts/672f9be0c8ea/index.html","be501820e2077a05581f671e98275181"],["/posts/69cbacc1a50e/index.html","63eeffc4ea6155821ca944ca44714de7"],["/posts/6cb2454df473/index.html","ac164a16893ce4f05782460854edb428"],["/posts/6f929ba7ef0a/index.html","af1ee852d4f7fde46d5f1101401c051a"],["/posts/76dd1b500ee9/index.html","b057e14d3d75af2731db6b9fbfe72b0b"],["/posts/7abc2d13da69/index.html","79c892aeeddda223ff1740387dfb9bd8"],["/posts/7d24a875713f/index.html","6011ee66f6c9632804060eacba25b9ce"],["/posts/8114abfc3c52/index.html","9bccaa9fb09451aec84dcc1f9c16fd52"],["/posts/826a9e25d95d/index.html","3a96ef76e312dc7be0e2e0698c8f2a76"],["/posts/82e546ae80af/index.html","be0c275fb263c6331d5eaa263a5ae53e"],["/posts/84e281d53601/index.html","5802ee5a5713b4f33417799719f53169"],["/posts/88228d912ad9/index.html","918f6ec63c5fe600a314b33360170694"],["/posts/8852c858e001/index.html","e22f41080fe49b18dd75f3988307ee98"],["/posts/8961d9f399c4/index.html","ff8cc1089d3d3e14c6109a438696be8f"],["/posts/8ad9610ac0cd/index.html","f813d31b3d1c514a4857fdbe2129a7d8"],["/posts/8ef6e275fcc9/index.html","2670cc8bc02224b0e28ea5e09faf720e"],["/posts/93f4c35cf675/index.html","2903dd56c4cbb631a746ac6be53db181"],["/posts/94456e62e22c/index.html","cd87a939eaf96f0cddb494f252b9873f"],["/posts/974025381448/index.html","fb2fd1fd5e6cf419b7411acee8c81dec"],["/posts/9792de8b38a6/index.html","b606596e7d581199cc74aba22500a44a"],["/posts/9ab3404f1e1f/index.html","7b1cef068e286a8b965db4257872545d"],["/posts/9c7ef4c2219b/index.html","23151edf5e6fff09f95a5eda0a2ca9b9"],["/posts/a76afeaaf8b6/index.html","5151171c5d060c368aad45ba29f01b0e"],["/posts/a84c927bae36/index.html","123e460a35e4b94b77d86ab748eacf28"],["/posts/ab00480b6740/index.html","d2d2fd2073ea09c74027fdb55636af4d"],["/posts/ad5499059bd8/index.html","b1b5727db9e46d295e420c66d1278458"],["/posts/b1579a861a7e/index.html","c0cdff89b3c7f2cdc70a7820e3b14656"],["/posts/b1a6e353d3b0/index.html","3ed41cfc9183801666ebc2acaec095ea"],["/posts/b38ac66a865e/index.html","b4b93afd9ac4f0c5852a00f77f7f0d68"],["/posts/b43e4543fee2/index.html","88cb23ac7287b7d2dd5970825a27dc51"],["/posts/b5ec256f7ac5/index.html","1edbd8c2fb38b7d00aa09be690dc4646"],["/posts/bdd7aac98dac/index.html","e6b2cf73255d2332c4eab7ce8fcf8429"],["/posts/c35f6258326a/index.html","8c52aac998f581b9243820be0759c061"],["/posts/c60221d6b1b5/index.html","c11f09c39617a5ec60acfa2f68883810"],["/posts/c7ad1493c47e/index.html","c816c0fb75f9d3fde7c814ff4e2c826f"],["/posts/c821481d77c0/index.html","790aaf209bc2d420e87ed53f5ef5a4bc"],["/posts/caffc4bd2544/index.html","57db2e172dd7c7dc4d124a9df069ac52"],["/posts/d34026198590/index.html","1704a65cbb21e7c37d8bf3dd64286fc9"],["/posts/d3a9bccac183/index.html","dc5791721a1fcfc20d2c4bd043e619b8"],["/posts/d77b3f737815/index.html","723c9cbe268b1560917b6008d367e6d6"],["/posts/d8f19457f480/index.html","fead14d5ba95072a957c818ab0ed8e67"],["/posts/d911ff6fb3e3/index.html","141f9df7bb1449b75aaef15e8fd2ffb9"],["/posts/da30ceee0d7b/index.html","7d9aaec3795f6a7920f6dca8571cec21"],["/posts/e387ef716681/index.html","d2a57b196359a488057d2bd9e4cf2f27"],["/posts/e49415651ef4/index.html","d6b4d988544de14d5a542f6dd7ae9e5c"],["/posts/e621091efb56/index.html","58ff6399fa3c32526921d00e3f289dda"],["/posts/e7d594895e7e/index.html","6ad1f85d0b44ac31dd15c6f89cc8b670"],["/posts/ebffabd07766/index.html","8d57e970b84cbd4b60c7d928ba7758b8"],["/posts/ee26c38570a0/index.html","d96ea54ad5a22f077fa526fd8edbc294"],["/posts/f30c3df9c2fc/index.html","259fa605fe78483d0000739d3961c1c9"],["/posts/f341ac31567e/index.html","2f7b2b35f47a8f86545fa5fd9fa5f820"],["/posts/f52177d9e0d7/index.html","7ff9b3dfa3ee6d094680d3ba652c8fbd"],["/posts/f691d1b683d4/index.html","cf19b2f227e5a577adaddd68abe4fc47"],["/posts/f98542131ae6/index.html","383ef1cfff680f932e19496475572a76"],["/posts/fb79b38d6277/index.html","a872fb32c8b3e84d1e4b52745e2fd2c2"],["/posts/fc69325788da/index.html","94d4732bb747eaaf9eae0c7cf3991047"],["/posts/fc874c18bed5/index.html","99347c62e6f4655024032d29e614e220"],["/posts/fed5d65f1ac1/index.html","5c68d4898b3c3a55063f91df9d0a0fbb"],["/service-worker.js","2fa88c769eab9dfa34f1e89a7ab3aee0"],["/success.svg","e17d8e57386531d4f21c595e32a596b8"],["/sw-register.js","1d53a99b38f4c3ec298d2c69df0fb824"],["/tags/10年/index.html","d28c71cd7c2b2dc7538bd5763b88f335"],["/tags/12-1-1-1/index.html","14518d386ee9f7afe4d1ec19ee5b43d7"],["/tags/255-255-255-0/index.html","e26c3dbd959acfe19a3cffc4dfae1984"],["/tags/4-4-4-4/index.html","9f7078b906091864ff11c23798ae66bf"],["/tags/6-6-6-6/index.html","e1e632075d2eefac8eb2f380f027f480"],["/tags/7-7-7-7/index.html","6666c0096aea5b2826d0fedad98fd5d2"],["/tags/9-9-9-9/index.html","763b674e02b755100bd302c93599fdd5"],["/tags/QQ加速/index.html","f15d58157931c96e03f3c5f2b17426a1"],["/tags/add/index.html","00c12c406611d40c8d5318b7b71a3a8a"],["/tags/alexander/index.html","4188014bee409e087a6c5a5dab8dad38"],["/tags/all/index.html","2f91c63859a5a93edd543d9f69f21643"],["/tags/api/index.html","3c22835c527b80d57008c61e69446846"],["/tags/apifox/index.html","e1fde60ecc461c5644c71d5ae728c77a"],["/tags/ascii/index.html","6fca51d4fc2008830357240e01834aa3"],["/tags/aservice/index.html","05150f9b21f63001a453b32133bc3f2d"],["/tags/aur/index.html","51217d38a2d895b1221fa30ad4052718"],["/tags/auth-elib-cc/index.html","098e78d0046eee30344b33f4ef43e625"],["/tags/auto/index.html","05212a2337015b110220ef7f4110e5af"],["/tags/a级/index.html","7d2205c300e5d185443427c6369ddba1"],["/tags/bcel/index.html","9441e19680499d4cbe3ebafd30c48951"],["/tags/bean/index.html","aedf1bfba2fa41a22420c7ce6d925ed9"],["/tags/bservice/index.html","d8ace16b9c006913fad806cbe473e5e2"],["/tags/buffer/index.html","a0893d6ed7084d92d37c9787632076de"],["/tags/car/index.html","c45e2ee06a9e5cc23d05f1f07cc86ae2"],["/tags/cartype/index.html","74fd948d9c4a41e441e2b52532f21b72"],["/tags/case/index.html","2c332195ffb9a103ded72cf3b0e58d3e"],["/tags/channel/index.html","27d3034511686ed807ce86af645b32c1"],["/tags/cltt111/index.html","182701f116012a289e3973f09abc0dd0"],["/tags/color/index.html","3553732d068d59ea795be582d124f71b"],["/tags/command/index.html","e8b38e7a62acad72ba95d5eca6f31ef9"],["/tags/consul/index.html","7c3c2be9970ab5c4feefca850b3837df"],["/tags/cron/index.html","368464cd77aeac85035342cdf9f420ef"],["/tags/crontab/index.html","9b12c393ae43ab5007bac0943ff913b8"],["/tags/crx/index.html","2b4c49691f0eaa74edede35a6871d25b"],["/tags/crxdl/index.html","e128ace4a9ddc6839fadf1b2ad50d324"],["/tags/css/index.html","758e1ae3900541e88bc0b78d0e4b1ec5"],["/tags/data/index.html","20c66431bc8734a517db72ef6de2398e"],["/tags/dbo/index.html","c2e9df10817f1fa3418d74ea11e6850e"],["/tags/default/index.html","af934ce8fae361f75a51a88a581b18ee"],["/tags/dev/index.html","b6a16def72603139a000a212099652c5"],["/tags/dhcp/index.html","7597c561b4ba47b1f4ad535b5662c7a0"],["/tags/dll/index.html","14df102e5fde4021212a5f2cbf0c84bf"],["/tags/dns/index.html","7632d6057725a6f64a9569003d1aad30"],["/tags/docker/index.html","9be4583a12ca720ef222d5abbbb8ce68"],["/tags/docs/index.html","8cfb5d552cb9a9cd8456441780576c2f"],["/tags/docusaurus/index.html","6250dc80ccbc740cd69a8836915b02b5"],["/tags/driver/index.html","b990803a43fd210576d4f2eeed468b87"],["/tags/easy/index.html","02fdeaf0d5c7b34329a61bab2b7d49d5"],["/tags/easyexcel/index.html","8fe36ed7398c26c6b9638103e73497a7"],["/tags/employees/index.html","c8ef4f4cf3af224480ee756238bea96d"],["/tags/encoding/index.html","12ad869e44139619b79bf60468fb6733"],["/tags/epub/index.html","505acbc8be292f9011ccdc419565ed8f"],["/tags/eraser/index.html","35d6700aa130aca63b3f8ec90a49b622"],["/tags/exec/index.html","8c2037d8f00a0c0f66c0615ab63c9ca4"],["/tags/experience/index.html","9fd52a7bc2e07a1c74b603dcfc225ae4"],["/tags/export/index.html","cae826037fe6a8640b7ed7aedb61429c"],["/tags/ffmpeg/index.html","d8c81ca10f74087c2be1d73d1977df40"],["/tags/file/index.html","c3fef8add1dd2316aeef974b3d8b16f6"],["/tags/frp/index.html","f773d2c45fbf383adcf5e5c0b73c22ba"],["/tags/geti/index.html","78153fc94f8a618b1a8fc01b3d2f9587"],["/tags/gms/index.html","a1ffa159d286c80f40d651edee81578b"],["/tags/golang/index.html","26ac8578d5e2490e46c2366a2007882c"],["/tags/google/index.html","99cc323a2dbe64dad3c1341455e2a79c"],["/tags/gre/index.html","6d216db5b18c1a707ca0f1bb9499d028"],["/tags/handles/index.html","e8e7010067f48509569c3d3eb0e79fa3"],["/tags/hexo/index.html","2fb6a4b30adb01732f4a932d44daf644"],["/tags/hosts/index.html","698b9de4902d9b0cb2c9cc3e9b4b2293"],["/tags/hover/index.html","dd02be47d31a4aa82a7082ec5c2d519d"],["/tags/icmp/index.html","621503a0231ec656f0838bfc733409ae"],["/tags/ifconfig/index.html","9dc87d1618474599df55df1c5006b9da"],["/tags/iframe/index.html","681320dcf5f8032a0c563fd5dbdf7bb5"],["/tags/image/index.html","fd5089a8242f919c8f9f1321619fd126"],["/tags/import/index.html","00a4262aceaceff81903b167861dbb9f"],["/tags/index.html","aed2f04558cd7b24e7c197d1d1cfd257"],["/tags/int/index.html","fcbe26d3a3baef8f4c7a6481753d72a0"],["/tags/iphone/index.html","fb10d37be329f98c7d638e294ac142a6"],["/tags/ipv6/index.html","4f0f35d909afcba4e539f9a0f68b7c14"],["/tags/item/index.html","a30061c3203cffc7a0cbbd972cb5a816"],["/tags/java/index.html","5213c492cf59c3ea9b08b44c78e2e8d9"],["/tags/job/index.html","69352b50869fbcbf57560dd3a966c069"],["/tags/json/index.html","12f4c1e8103f7df8d87918bb6f483295"],["/tags/k8s/index.html","f041143be345203b0ea14b5f71753516"],["/tags/kindle/index.html","43b78d78fba79d06094403df4535800d"],["/tags/lambda/index.html","0c1e9fba1ee67af57bd595f9cb142d85"],["/tags/lightning/index.html","264cb954c4a5a6c1b01b3b324e624996"],["/tags/list/index.html","d771eebf580c9ee1046937e316ec892c"],["/tags/long/index.html","94d6e1593a7386e77553d1af96761a5a"],["/tags/mac/index.html","6912bb539fe6d77976ec4b154ecf2225"],["/tags/ment/index.html","f9bf054b1350c6da930ed51746a33719"],["/tags/mock/index.html","ebec2c16c886e3889eed715822b98c6f"],["/tags/mounted/index.html","9c1cd55024345a4da6763db6c6d2ddba"],["/tags/msgroot/index.html","78fbabb1d5a6e2a193dcf5790f2bd497"],["/tags/multiverse/index.html","aa33895cf4cdff0da71fa1963e07ad98"],["/tags/musicder/index.html","985ff993f6c290b5666b9c12de957580"],["/tags/mysql/index.html","455db8eec3ef38098319ba2b060c53e5"],["/tags/new/index.html","e9819986a78f084469c31f1277645e1a"],["/tags/nginx/index.html","a75e6e640e50890ea43acbc6558fc3dc"],["/tags/npm/index.html","9a9e36e0b7c901e9fc962f2fedd31a28"],["/tags/o/index.html","e8aa56491cf78561f68835eca620d14c"],["/tags/parser/index.html","b61b7ecf89eba4cf81244186d79d6b70"],["/tags/part/index.html","b4a08186562aacc65dcf0683428199b3"],["/tags/payload/index.html","34142cc64e13d9f851c6596d9e262dcd"],["/tags/pdf/index.html","00a10308e31de145648b47227c20d5dd"],["/tags/pem/index.html","79229ec782e9cae6a2bcc6af1e4fe0ec"],["/tags/ping/index.html","51e492bf8660e841d8e2114ca355b0f3"],["/tags/play/index.html","3533813def65a9993865955a49aa8257"],["/tags/plyuto/index.html","a10ce6d63cae61e1ebc791e4d3857c6b"],["/tags/prd/index.html","20a6528afe0eca4a45ff8789a0a1ace5"],["/tags/proxy/index.html","1d97881b4b92079fff5fd14361d0c717"],["/tags/public/index.html","2d5d828c5e4a0b6f6dcd934f150dccf3"],["/tags/qq/index.html","bfc92d7131a15119d3e2f81e954fedb4"],["/tags/receiver/index.html","879db0a5d0d46a73fea509313cbe88ff"],["/tags/restricted/index.html","ead88dcb022aef64a9372521273a4cb4"],["/tags/result/index.html","673a7ed4db77ef9cb705d9ca9181e2fc"],["/tags/return/index.html","d90c0019f010c9880efe2c16ecc1a42e"],["/tags/route/index.html","6621f5d758e5ca5d14e6438005771965"],["/tags/run/index.html","40ec0abd84caacea699fbd818257cf6f"],["/tags/sakura/index.html","7a362eb137f9e649c2d9975610c8948a"],["/tags/salesforce/index.html","b842a07569da88728141bc585316aa8f"],["/tags/scrapy/index.html","e3a6f0313b74a1046070742c34ea3097"],["/tags/select/index.html","e9d9c4190fe56ff85b5fbf506cbac5e4"],["/tags/self/index.html","681056255f8951ca7b44d7ac06054c40"],["/tags/serverless/index.html","6a2d86f96e33fd17783e219f9d0ddca4"],["/tags/settings/index.html","d751158dadbab9580c1971c740640e64"],["/tags/skeuomorph/index.html","c8795fe928b4b6d4f6131640d2d24e50"],["/tags/smtp/index.html","d3c61aa89de8fca6f9b376391a47e5ab"],["/tags/solve/index.html","86dbcf15972aec8f52bdcf097fbaa58d"],["/tags/source/index.html","2904cf923f5738e3c8ff511b37fe0837"],["/tags/spl/index.html","b6cd332f52fd792f6e03578d0a7fdb8c"],["/tags/sql/index.html","7b8a43e8316a37f630d763af8921df15"],["/tags/sqlclient/index.html","ae1719c30db0d96d5135335559bd3c5d"],["/tags/static/index.html","75056bd9eaa380e9179433d22e485456"],["/tags/string/index.html","07fa77b4543e6d42614bab3501236e16"],["/tags/sudo/index.html","f03a35a24038da62c2cef91b5aaae580"],["/tags/sum/index.html","52634d895acf9264133767f4f1e6c101"],["/tags/switch/index.html","bd0e1ee2c77d3ffeef2fb68ab466bffe"],["/tags/switchport/index.html","756fce863d18d88ce13a5ea5fb531e3e"],["/tags/switchto/index.html","21be20282a8c427b276f5f7d2bfa0a41"],["/tags/sys/index.html","8a315e9f4b67286cc0bc44cadefe9e06"],["/tags/sysprep/index.html","7336dadb5e536c0348205c2b76786181"],["/tags/t-user/index.html","c282aa43e0190137f26e634512b3034c"],["/tags/target/index.html","ceec1a7273397649a0a32b10fef814f6"],["/tags/tcp/index.html","171315845c6274ab4d2da8d28e7fde92"],["/tags/teleport/index.html","d5d30eb3ec68060ce6bcea880805918a"],["/tags/tern/index.html","13687fc1307f1c001eabc3bc6c7667ed"],["/tags/testclass1/index.html","da9c3b7591945aa11056a2eb2098505a"],["/tags/testclass2/index.html","35ce30c5cbd015b22a2d60182c07484b"],["/tags/tinywow/index.html","d950b446e4f43f334e961aeee8f56854"],["/tags/tps/index.html","7220f3671cc950225eafbbf2c20edb02"],["/tags/tracert/index.html","051d57c459fae1cfe580c451ad3de94b"],["/tags/trunk/index.html","2a58e6554a6d50fdcbe2b1c9791398b3"],["/tags/ttl/index.html","9fc4a5315b2dd9c8fe6299abc824b952"],["/tags/tunnel/index.html","9d90dcdc30750707d9cfddb32a0c4523"],["/tags/turtle/index.html","d70b960eab508c1588a981121f7e68b2"],["/tags/ubuntu/index.html","692ad3b20dbf388c934e2ecbc9099d4a"],["/tags/udp/index.html","02bb48f653a7a7efe4e9c871a036c936"],["/tags/universe/index.html","1ae00c7f322b92e4fa572b1f979a6523"],["/tags/usb/index.html","976caa8038dbfc11e234eabbb115aeb2"],["/tags/user/index.html","a29082e4be7b8c19e887d085647f9331"],["/tags/username/index.html","1cf95719e702c9906f3b155018674f3c"],["/tags/util/index.html","9e89ce2bbd900f97bca965bf1e4ecf45"],["/tags/var/index.html","a0c731ef7fb49eabb80468db58951763"],["/tags/vlan/index.html","48f18de478a32819290ccbdb1731ffb1"],["/tags/vlan10/index.html","693c2a0dbd402a6f28021df8f8a3162b"],["/tags/void/index.html","9035d11f7f507e5839510a6bc4a63e68"],["/tags/vulhub/index.html","07bfd1689c8911b4e797958540b770d7"],["/tags/wifi/index.html","290005d08319257604d12a3606c922b4"],["/tags/wlan/index.html","28f2f0960c19b755321dc92164197308"],["/tags/x64/index.html","01d052f2df0a452f420cfc46c4234b65"],["/tags/xccl6/index.html","acfec9ab013cbe73c27cf3dd16a79c88"],["/tags/xiaoshu/index.html","82e8e7d73acc8cdbae96895d2c8fdd4f"],["/tags/xss/index.html","bc41fa3ccdb6469fb410e4c2023924d4"],["/tags/xyz/index.html","49177d2c556050a81b2aa08f59380fcd"],["/tags/zip/index.html","8959d78ba4b3aad26d8e7a151ba7d7f4"],["/tags/三网/index.html","8787c00513070f4e802752d093f3c61e"],["/tags/下拉/index.html","1fe079bd49701568694d2a97b3472190"],["/tags/下载/index.html","b089c8a44d82cfbba780c0acb46ba755"],["/tags/个数/index.html","cf445d3af304d82523e44307400a7303"],["/tags/中心/index.html","3123061be76d44130283bdb7e41fb99e"],["/tags/主页/index.html","145813d59c2d4cec4366bdc4bc2a353d"],["/tags/书籍/index.html","a5f74bd5d3954712558c32df0c251f73"],["/tags/二进制/index.html","2e48847f0bc46377ee4e430cfe42bfc0"],["/tags/云搜/index.html","15b7672d0d8db6e81586d4b820f1bcd2"],["/tags/云欣/index.html","53f71ab82bb88c57f76e0ea10c731320"],["/tags/云盘/index.html","d4ca3a7a8c1fc8c43dda1709fc26d66d"],["/tags/互连/index.html","aca8ffd437231ceb6f31347fdbbde574"],["/tags/交换机/index.html","e42c46b67a55c72a8545ae29f8d84de7"],["/tags/人声/index.html","b95fd560461a857bb0c4cebf3b2da036"],["/tags/代码/index.html","6ef05361ccb6bc9d2708e479b0d0a57e"],["/tags/会员/index.html","8ef267cf8a8a8dfa33e68995fa91c92f"],["/tags/使用/index.html","a276cb70c19ceafbe20decc7414a0699"],["/tags/修改/index.html","373c01496a4d0b68940b17ed51192ccb"],["/tags/停用/index.html","ee05f7c3b38691ed147003c342c142d2"],["/tags/免费/index.html","488924a4a6b76ca6c46599140c73fb8c"],["/tags/免费/page/2/index.html","9d86941d03d39b37766c32b70254cdca"],["/tags/入口/index.html","655eafcfa8cf48aa3413325701ce5f0f"],["/tags/公司/index.html","cdafe26582299f64d94f1512fcfd4edb"],["/tags/公钥/index.html","21c4c4aaf1b9c3d2adb84c02bac3b273"],["/tags/内测/index.html","d69c5e606d7dba99c327beb570c450f9"],["/tags/内网/index.html","79a0d020799778e15595314ccef2a6cf"],["/tags/冻结/index.html","46a1d0958d96ea8c57038f617cff9f73"],["/tags/函数/index.html","9ed278e5bc2a6c7fbf52623bb2cef530"],["/tags/分享/index.html","f2d93e50b192712a04e72b253a597062"],["/tags/分类/index.html","1d21197f729c41d7eaf45797bf31a363"],["/tags/分配/index.html","2a82d9f429ab0e21f4bef5064116bfe8"],["/tags/切换/index.html","6938cd6e54f3d9b7d7e493063379bdc3"],["/tags/创建/index.html","850ba9a3e4f1a0ea8c105d9571dd5fba"],["/tags/删除/index.html","71f94edeae6ff02804f3172fda745a30"],["/tags/剪辑/index.html","b910b9343e885c38a3cf19483a0f180a"],["/tags/动画/index.html","67105fe3e6c34363191026ab68da9999"],["/tags/劫持/index.html","dea468e08c24fabff67ef589cedb3e0a"],["/tags/勾选/index.html","5b21b8de6c56e79e843ab4632876d986"],["/tags/单击/index.html","7f79d353d41ad1229d3c8721347c5e7c"],["/tags/压缩/index.html","a6a4574c8f836c29de7c9790818d3c1f"],["/tags/厨师/index.html","7b24836aa1f0c76bd21f2613faac8a5f"],["/tags/反射/index.html","88b6ed5c9d4a247263df204e5f64fc6a"],["/tags/反馈/index.html","c3229584330b5c10562c4d0ef5c18fce"],["/tags/发送/index.html","442b73bfc0d02de7020fba37ec686242"],["/tags/变量/index.html","aa12a111ae7f6d14a5177a82bc871867"],["/tags/可用/index.html","9a4834aaa78ac1cea913585c1ecd9979"],["/tags/可视化/index.html","76cf212eced1dd94a4f4dae04e514075"],["/tags/台服/index.html","9ba1193b888b2dda8d924cbade4b4ada"],["/tags/同学/index.html","2db99e621da0b13deb79dde73138e7e8"],["/tags/后台/index.html","75918dac09e0a0e9609c6fd6766e1c9b"],["/tags/命令/index.html","874100dcf0ec65bd8fba7018f50833e1"],["/tags/商店/index.html","ba1632aac4efb3c7f7c49967fe5d4f51"],["/tags/国服/index.html","73a23e9cdecc0f77710fb6bdb964a856"],["/tags/图书馆/index.html","a5c4391f7b66fbd68fd7f49d184c55e8"],["/tags/图像/index.html","4a116d876535b039a6ebefee5ef54aa5"],["/tags/图标/index.html","593b14fc332a1d1bc2c2099787deed23"],["/tags/图片/index.html","2f2fa2ab227ecf4260e63b17d33866f5"],["/tags/圆圈/index.html","b95bf0cda2a6c59556f804478dce91ac"],["/tags/地图/index.html","3c945b6dac5c4af9ebc7606e30047d19"],["/tags/地址/index.html","c4f0a5fab6aceacc54e0a268ceb544ec"],["/tags/地址/page/2/index.html","e5a38bf9746425a5aaaf332b6535a7dc"],["/tags/均衡/index.html","1987d1aae77453b9db7dfad9e823276d"],["/tags/垃圾/index.html","22725293fccc677e35520076b08a39db"],["/tags/域名/index.html","d966478cc2840923e23b186b6cad5488"],["/tags/壁纸/index.html","e5ff9f75c772714c3f56ed4836dfc843"],["/tags/处理/index.html","68bcc5df64240d6f0f1d615bbcb2258d"],["/tags/大小/index.html","702cbade7b101a8e7abf45c6746b1a50"],["/tags/大屏/index.html","7d99e7c3233930df12d6b5c66d495f9f"],["/tags/天堂/index.html","a55425a869c586595eb9d52045a51dc9"],["/tags/夫妻/index.html","0ff87ae82e5e6cd988154f94102bd044"],["/tags/子网掩码/index.html","82ba9ab9ea119a5454faadb915208b95"],["/tags/字段/index.html","dd5a49406faa877547a073f905a52f89"],["/tags/学术/index.html","0ad36a1c12b61693ff1f1400fef70af2"],["/tags/安装/index.html","9d18fda9ae501bf81b828e206ae50ed2"],["/tags/定义/index.html","7a5230e2e32d2cce7163eabd748d40a4"],["/tags/客户/index.html","6cd0758be23e5b590671eae81f3c1f98"],["/tags/客户端/index.html","31578df6998a4b694a27f57f7d01056e"],["/tags/容器/index.html","04e7e865b98a7d1adac6b6f9b034d545"],["/tags/寄存器/index.html","2fa5201e6631456eb143e1be23a3e164"],["/tags/密码/index.html","57295a21a6d2cc3c705643dc9cab5f07"],["/tags/对应/index.html","620a3b640845e324be24b7afedd418c6"],["/tags/对象/index.html","73b623d172166d342cb395c5dbe4d188"],["/tags/对象/page/2/index.html","cdba7eb656f360e653756bf306592782"],["/tags/封号/index.html","efadeb8e861747798fd3663df66a7ca2"],["/tags/小娜/index.html","5850cf76444adb62ec03539dd19a8545"],["/tags/小舒/index.html","6d22c822503b4df0b876c781e6e59634"],["/tags/屏蔽/index.html","9b64b754d30c73210b5b9b3a1df25b81"],["/tags/山海鲸/index.html","ce9d4d490ca41e16bc966d3764ccd0dc"],["/tags/工厂/index.html","e9a2343f282bebe2c513a794698b1c65"],["/tags/帐号/index.html","3377e26ad4e03698629a361f69bdd971"],["/tags/干净/index.html","5c8ab9197741bd554188ba2c4b794a88"],["/tags/并行/index.html","96797b4085680df9d2a6792794d00402"],["/tags/应用/index.html","efa459f1dd95e46a2c7ef607be8dc882"],["/tags/开发/index.html","797d06b7c80ec77cc6b86fc202b75d8c"],["/tags/引用/index.html","a2ff1912897324cf32a473357aed6d1b"],["/tags/录制/index.html","801cd36e8565f4a85152c688b6c93f9c"],["/tags/微信/index.html","c8f7f838371c4fc6b28ef3920ffe253f"],["/tags/快捷/index.html","833478a8eecfb8ab91061fe8cf33a1ce"],["/tags/截图/index.html","2e67e186fca5033c1a77066beb8989d2"],["/tags/房卡/index.html","3f76e5d6ad3c5fc97e84156f9daac384"],["/tags/打碎/index.html","8daa9f8346a2281b64bf433a443a5d1d"],["/tags/承诺书/index.html","dc18c3f2c14f3e260f34c08c9f93abe8"],["/tags/技巧/index.html","d87ca6de0a545b0783e1c4577ba1b7a2"],["/tags/投诉/index.html","77cc635bf31d44008333b8f88aada902"],["/tags/拟态/index.html","7dbd9ab2825c06ff780a86020ce84bcf"],["/tags/拟物/index.html","4dd09063cac6198febc971d1d0516e80"],["/tags/持久型/index.html","57a43b7e131f97ec3317c257e20ee113"],["/tags/指令/index.html","04d86d874368a0f68f4a1d7078fe6ace"],["/tags/捆绑/index.html","a347d7e3a47c2b455dbdd1d2f123286f"],["/tags/授权/index.html","ad7048048eed27c9e25f2c56a4d28371"],["/tags/接口/index.html","745a5125046435a947590ba85484d580"],["/tags/接收/index.html","a3b3608870e6de61627eb51a47327193"],["/tags/接码/index.html","252f709281ae7a3ca6871c6bf07126f2"],["/tags/插件/index.html","c7ee515ea0f439a44c0001d4eb268acb"],["/tags/搜索/index.html","86e534af65920da4650f4b2ca7cfbf35"],["/tags/搜索引擎/index.html","eda190510d5fdcee69fc929c6104ab00"],["/tags/播源/index.html","1d841c696c0a20410ed6e34db6c5269f"],["/tags/操作/index.html","b6c91c5bf337f78468f474fe953d807d"],["/tags/操作/page/2/index.html","be2d9d4be02553d67500eb092b46ade5"],["/tags/支付宝/index.html","dbd6aed2baff5c7357c0a686c94e7f4b"],["/tags/改套餐/index.html","7c19a5c48ba2005ede6308940ae322ff"],["/tags/数据/index.html","aa7b705e1f977f691ea82e683ff6ffec"],["/tags/数据库/index.html","47812e98353eaa8506077432b9fc6d99"],["/tags/整数/index.html","12277a0684389385a0044d8d148176a4"],["/tags/文件/index.html","2e35d4d900eacdc46e2f130db49259b1"],["/tags/文件/page/2/index.html","cfe0ee8ca7423c7b39488f033c07c612"],["/tags/新建/index.html","fd970bde0151e6d9bac728c425bb39a5"],["/tags/方法/index.html","3a9515de9a42e3da21d1efbd5e2f37ab"],["/tags/方法/page/2/index.html","cdab3532d441cb1c6745e963a0fcf288"],["/tags/无损/index.html","ecbedd8dc822b28e1a791f57583443a6"],["/tags/无限/index.html","31c0c3f8a4bb3cadd69c487ef5854ddc"],["/tags/日志/index.html","712e6f25af3324c240a005d4aa978267"],["/tags/时间/index.html","3f630ff1c4c4ca60de66eaa6486dbaba"],["/tags/普通/index.html","4c91c3579fd6b827350da3035f74ed96"],["/tags/智影/index.html","89fb30cc854f81089d449ceda9be1fe8"],["/tags/有数/index.html","8c6937bfc333af735bd2d60da299e7a7"],["/tags/服务/index.html","e2cc08319dc6192c6e1a97c41bee8393"],["/tags/服务器/index.html","305d2da7cfa3c613aa6190f15c03f805"],["/tags/服务器/page/2/index.html","6def7aab634f573177c431e3c213719c"],["/tags/机器/index.html","ba5e72070240838b05fe24ebb03b6478"],["/tags/架构/index.html","9893935a1aa7c24ea2ee5f89500e8d11"],["/tags/查看/index.html","4f43f9f1bee0e6552dcdb239013e3b0c"],["/tags/查询/index.html","e78df6aaccc690403138bfe5b63c8040"],["/tags/标签/index.html","445674b4df3bfef03ac25792e0f6af49"],["/tags/树莓/index.html","ef8505260db95c592c550e98fc2b3f30"],["/tags/样式/index.html","ad3a6db347275a7415028f2fcc7cc421"],["/tags/格式/index.html","f818a2a919cc413719017461941f8a73"],["/tags/框架/index.html","2907121a65a53105a8483f8c40183aa0"],["/tags/档案/index.html","31f82f2687293fb151ad191564158ef7"],["/tags/歌曲/index.html","6f5b5405f5e6f63e30021f090c68f460"],["/tags/永久/index.html","7eb589f047aee619f3da2c9cadd0d219"],["/tags/油猴插件/index.html","5a6e4fe64e5681496d8fe2d752135dfc"],["/tags/注册/index.html","7ca46cec5758d8ef7311275a1d5d283d"],["/tags/流程/index.html","bb070bb19ee0eb8bd0d1dbc4945f110b"],["/tags/测试/index.html","098788de507f8f10312edcd5e49c9e31"],["/tags/淘宝/index.html","c2fcfecd41cab4edcd8f47ee42b79b1f"],["/tags/深度学习/index.html","02d6db33acd00cbd5bcb2f554f43daa4"],["/tags/清图/index.html","0320ce97584b1dd7bab18111041c3cbf"],["/tags/游戏/index.html","7e8799638ccd5ffb2be42f481a6089ce"],["/tags/漏洞/index.html","c17445b85f3cc13a4f8bd7d6f3ad9cb7"],["/tags/潜在/index.html","1ec94e3b9d9d91dc07c38daababf5630"],["/tags/火线/index.html","12e5c8439ee335a8c8093149b6cca866"],["/tags/点击/index.html","eb2d35a00af8d5270acbb1c882eca907"],["/tags/特色/index.html","f6e00ebb69801d6345ea9c71d3def5ff"],["/tags/玩家/index.html","811c33d102b691f533546569f3b4e0d0"],["/tags/珍珠/index.html","2f24cd0736700ae1277fb232263e0145"],["/tags/生成/index.html","7687a029b661c636e5e75cfb1eb1f6e7"],["/tags/电信/index.html","8ace32c98cd45c37a6410e486811dc33"],["/tags/电子书/index.html","3c75623283bf8d8e42108982eeab5607"],["/tags/界面/index.html","1ce1f02b0db5454d10262493724f2533"],["/tags/白嫖/index.html","9447521d89b25bc54c4196ee29ce3976"],["/tags/白嫖者/index.html","aae0dd22183df60db2d911baca9eb48e"],["/tags/百度/index.html","40c162180a383556eca081de51d43155"],["/tags/目录/index.html","e7e668cdfee71701ee6dc1b26c0e7412"],["/tags/直达/index.html","a4156697331befbde889998940701501"],["/tags/短信/index.html","aaa15f6096a9ec1570ed3fc51af65514"],["/tags/硬盘/index.html","4f2420ac8d251ab6f0605df4ef99bbf6"],["/tags/磁力/index.html","7b4dd57ced9055a51aa3c15f0c0498e7"],["/tags/私钥/index.html","d457762f1e9ccf5c91f577eb3cae9dfe"],["/tags/移动/index.html","643186b69dc531fd7bc6228e8663085a"],["/tags/程序/index.html","adc3301f99beba80f61ca94e32e4ef1b"],["/tags/空间/index.html","e2a778ee0087696ac88e9f2566d1536c"],["/tags/穿越/index.html","29fcf899cb23ad3d4da7680e370ecba5"],["/tags/穿透/index.html","02e685bc48b0337c63fba7dd724b667b"],["/tags/端口/index.html","43d599719aedd580fff1cdbd7e5f48bd"],["/tags/简单/index.html","2f814a5a86d361a662f593e7167c489e"],["/tags/管理/index.html","410dff15f2b01ec7d7200d0e9a2c4d83"],["/tags/类库/index.html","3f41664772ea7ebfbfe219d261c81b39"],["/tags/素材/index.html","de40ba15bb227fc217d0e8f76f7a2efb"],["/tags/纸条/index.html","af9395b37baf21700a01aaa2088f9ff7"],["/tags/组件/index.html","24005ade72dca26351eb1300d679966c"],["/tags/绑定/index.html","5f7f88a29edf36e263248baf8830e69b"],["/tags/结点/index.html","a3887423c71787c407394e07000a5f2d"],["/tags/绘制/index.html","717e3ef4e7c07bf42691877c6e2d292a"],["/tags/绘图/index.html","d5663c5d555c8b4f278692db05621d3e"],["/tags/网盘/index.html","7ebdeffdcd15bedbc6bf16d27e589d92"],["/tags/网站/index.html","9f37e631a70d2c1c0e62c7687ec42ebc"],["/tags/网站/page/2/index.html","b890e9e66763032e1e17c9f1d43325bc"],["/tags/网络/index.html","16a017c7bba557792f384a543e08b96b"],["/tags/网页/index.html","91ea706d4d815a48261772d15d0d7c73"],["/tags/联网/index.html","93412791c87ad81abbc59b79c6e9e5cd"],["/tags/联通/index.html","b31f4de347d7e15978ab5bf8503814db"],["/tags/自动化/index.html","1c29896e9a1a1430362907eb9df3330a"],["/tags/自测用例/index.html","7223f85d38f6ccb135a5bd4387f9a48e"],["/tags/良心/index.html","831576bb307cd3ebc9c0103661eaf538"],["/tags/花瓶/index.html","42f49e6e0d2cd97a31e40a0ff54d5d11"],["/tags/营销/index.html","b619b8ddfea0713232a8124757d72cdb"],["/tags/蓝奏云/index.html","225d734e31d24e642d148531db4211d2"],["/tags/街景/index.html","c67161950859bc19ff92855d0fc7e81b"],["/tags/装饰/index.html","21d2786fa70174fdb313d44e7d64cc1f"],["/tags/视频/index.html","1fc64175caf8de1dd17d26e24750f81a"],["/tags/计算/index.html","d9009802cbf4be5ba4a6b8387a0c1a5d"],["/tags/认识/index.html","fc35d2a0f7c924a5dbcd988cc43cd983"],["/tags/证书/index.html","a64c401aa82828efa83ed99073d61a02"],["/tags/负载/index.html","905c16e5fdcf7e2b6aa5ab18664636d5"],["/tags/账号/index.html","20516780630dda6a90aaf2d6a488e2eb"],["/tags/贪心/index.html","b068e18bad7ce0cba20fdf142d29dbf2"],["/tags/资源/index.html","543fae6d3010354b75ac509e65f19340"],["/tags/转换/index.html","cf4b0805316f2b6b8b7bc47e056ce622"],["/tags/软件/index.html","880d01229d1ea3dd68f5910a0f62231d"],["/tags/迁移/index.html","2ad51ca6625c3b643174d1b5d2cca692"],["/tags/运算/index.html","7e6eb073f4027940dbad322e7a5847f2"],["/tags/运行/index.html","d3d3b4a3713076c975fa26a0293a65a2"],["/tags/进去/index.html","1cfeff34616ba9eccac777c94d2bdb7e"],["/tags/连接/index.html","637c3ceac99d705327f1f5e089c7df46"],["/tags/连线/index.html","6e4ad45dd89ca4bb68a9cf1431d098ed"],["/tags/适配器/index.html","67944bd66f1bb497a1ea09bdcd16696c"],["/tags/邮箱/index.html","400340f03542b71cee8461289b57ba9c"],["/tags/部署/index.html","e8fbbf6293d9a1c59a3f0dcc29462735"],["/tags/酒店/index.html","19968f42d1e70d41803f9d4dde7e75b0"],["/tags/错误/index.html","fabda2ff563e181f904896705b63a7a3"],["/tags/镜像/index.html","ea75be93e00233f9759897fbc3be8f3c"],["/tags/长度/index.html","e8691fdc14971e40f0f6506b6c11180b"],["/tags/阿里/index.html","c412b694e0e2d17e46c555c807f3f4ab"],["/tags/隐私/index.html","5359f1a287b52e14a8913b8e5d48f783"],["/tags/隧道/index.html","d86e478fb31e72c8afd2fedadba996e4"],["/tags/音频/index.html","475db0b32d95514cbd64a30b8e0e13bb"],["/tags/饺子/index.html","4b703774aed616d1b73778a4b9624d17"],["/tags/验证码/index.html","4f6eedc2970128799b7ff9f34e4f4b61"],["/tags/默认/index.html","3bd34c8611e857e75f478406b83d592d"],["/workbox-6da860f9.js","b6041e96e78b5058b66b6acfbaf3d2ea"]];
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
