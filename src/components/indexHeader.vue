<template>
    <div class="index-header">
        <div class="common-box">
            <div class="logo">
                <img src="@images/logo.png" alt="">
            </div>
            <ul class="nav-item clearfix">

                <li>
                    <router-link to="/course/list">免费课程</router-link>
                </li>
                <li>
                    <router-link to="//coding.imooc.com">实战课程</router-link>
                </li>
                <li>
                    <router-link to="//class.imooc.com">就业班</router-link>
                </li>
                <li>
                    <router-link to="/read">专栏<i class="icn-new"></i></router-link>
                </li>
                <li>
                    <router-link to="/wenda">猿问</router-link>
                </li>
                <li>
                    <router-link to="/article">手记</router-link>
                </li>


            </ul>

            <div class="search-warp clearfix" :class="isInputActive ? 'isInputActive' : ''">
                <div class="pa searchTags" style="display: none;">
                    <a href="//class.imooc.com/sc/64" target="_blank">Java入门</a>
                    <a href="//class.imooc.com/sc/53" target="_blank">前端入门</a>
                </div>

                <div class="search-area">
                    <input class="search-input" @focus="focusInput" @blur="blurInput" v-model="searchValue" type="text">
                    <i class="input-border "></i>
                    <ul class="fuzzyQueryList" v-show="fuzzyFilterList.length>0 && searchValue.length>0">
                        <li v-for="(item,index) in fuzzyFilterList" :key="index">{{item.name}}</li>
                    </ul>
                </div>
                <div class="showhide-search"><i class="icon-search"></i></div>
            </div>

            <!--            <div class="login-area">
                            <ul class="header-unlogin clearfix">
                                <li class="dist-money">
                                    <router-link to="//order.imooc.com/pay/sharegoods">
                                        <div class="redPacket"></div>
                                        分享赚学费
                                    </router-link>
                                </li>
                                <li class="app-download" id="js-app-load">
                                    <router-link to="//www.imooc.com/mobile/app" style="width:60px;">下载APP</router-link>
                                    <div class="app-load-box clearfix js-load-box" style="display: none;">
                                        <div class="browser-load-box">
                                            <h4>慕课网浏览器 - PC客户端</h4>
                                            <router-link class="app-load-btn" to="//www.imooc.com/mobile/app"><i
                                                    class="imv2-windows"></i>Windows版
                                            </router-link>
                                            <span class="browser-load-mac">Mac版开发中，敬请期待…</span>
                                        </div>
                                        <div class="mobile-load-box">
                                            <h4>慕课网APP - 随时随地学编程</h4>
                                            <img src="/static/img/common/appload.png" class="l">
                                            <div class="r">
                                                <router-link class="app-load-btn"
                                                             to="https://itunes.apple.com/cn/app/mu-ke-wang/id722179140?mt=8"
                                                ><i class="icon-apple"></i>App Store下载
                                                </router-link>
                                                <router-link class="app-load-btn" to="//www.imooc.com/mobile/appdown"
                                                ><i
                                                        class="icon-android"></i>Android下载
                                                </router-link>
                                                <p>扫描下载慕课网APP</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="shop-cart" id="shop-cart">
                                    <router-link to="//order.imooc.com/pay/cart" class="shop-cart-icon">
                                        <span class="icon-shopping-cart js-endcart"></span><span>购物车</span><span
                                            class="shopping_icon js-cart-num" data-ordernum="0" data-cartnum="0"
                                            style="display: none">0</span>
                                    </router-link>
                                    <div class="my-cart" id="js-my-cart">
                                        <div class="cart-title-box clearfix"><h2 class="l">我的购物车</h2>                            <h5
                                                class="r">已加入<span class="js-incart-num">0</span>门课程</h5></div>
                                        <div class="cart-wrap">
                                            <div class="clear-cart"><span class="cartIcon icon-shopping-cart"></span>
                                                <h3>购物车里空空如也</h3>
                                                <div class="text">快去这里选购你中意的课程</div>
                                                <p>
                                                    <router-link class="go-link" to="//coding.imooc.com">实战课程
                                                    </router-link>
                                                </p>
                                                <p>
                                                    <router-link class="go-link" to="//class.imooc.com/">就业班
                                                    </router-link>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="more-box clearfix">
                                            <div class="l show-box"><span class="text"><router-link to="//order.imooc.com/myorder"
                                            >我的订单中心</router-link></span>
                                            </div>
                                            <router-link to="//order.imooc.com/pay/cart"
                                                         class="r moco-btn moco-btn-red go-cart">去购物车
                                            </router-link>
                                        </div>
                                    </div>
                                </li>
                                <li class="header-signin">
                                    <router-link to="//www.imooc.com/user/newlogin" id="js-signin-btn">登录</router-link>
                                    /
                                    <router-link
                                            to="//www.imooc.com/user/newsignup" id="js-signup-btn">注册
                                    </router-link>
                                </li>
                            </ul>
                        </div>-->
        </div>
    </div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				searchValue: '',  //查询值
				isInputActive: false,  //判断搜索框是否选中
				fuzzyQueryList: [
					{
						name: '121小时入门大数据',
						id: '1'
					},
					{
						name: '12小时入门大数据',
						id: '2'
					},
					{
						name: '13小时入门大数据',
						id: '3'
					},
					{
						name: '14小时入门大数据',
						id: '4'
					}
				],//模糊查询返回数据
				fuzzyFilterList: [],     //搜索框过滤

			}
		},
		watch: {
			searchValue(newVal, lasVal) {

				let value = newVal.replace(/^\s+|\s+$/gm, '');
				if (value === '') {
					this.fuzzyFilterList = this.fuzzyQueryList;
				} else {
					this.fuzzyFilterList = this.fuzzyQueryList.filter(m => {
						return m.name.indexOf(value) > -1
					})
				}
			}
		},
		methods: {
			focusInput() {
				this.isInputActive = true;
			},
			blurInput() {
				this.isInputActive = false;
			},
		}
	}
</script>

<style scoped>
    .index-header {
        width: auto;
        z-index: 900;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
        background: #fff;
        position: relative;
    }

    .index-header .common-box {
        display: flex;
        align-items: center;
    }

    .index-header .common-box .logo {
        width: 180px;
        height: 70px;
        text-align: center;
    }

    .index-header .common-box .logo img {
        height: 72px;
    }

    .index-header .common-box .nav-item li {
        float: left;
    }

    .index-header .common-box .nav-item a {
        position: relative;
        height: 72px;
        line-height: 72px;
        font-size: 16px;
        padding: 0 20px;
        color: #4D555D;
        display: block;
    }

    .index-header .common-box .nav-item a i.icn-new {
        position: absolute;
        top: 14px;
        width: 16px;
        height: 16px;
        background: url("../assets/images/new.png") no-repeat;
    }

    .index-header .common-box .search-warp .input-border {
        display: block;
        width: 0%;
        height: 1px;
        position: absolute;
        bottom: -1px;
        left: 0;
        z-index: 9;
        transition: 0.3s;
    }

    .index-header .common-box .isInputActive .input-border {
        width: 100%;
        background: #f01414;
    }

    .search-warp .showhide-search {
        width: 20px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        position: absolute;
        display: inline-block;
        right: 0;
        bottom: 24px;
        padding: 0 8px;
        transition: 0.3s;
        border-radius: 18px;
        cursor: pointer;
    }

    .search-warp .showhide-search .icon-search {
        font-family: "iconfont";
        color: #333;
    }

    .isInputActive  .showhide-search .icon-search {
        color: #fff;
    }

    .index-header .common-box .isInputActive .showhide-search {
        background: rgba(240, 20, 20, 0.2);
    }

    .index-header .common-box .fuzzyQueryList {
        position: absolute;
        left: 0;
        top: 60px;
        width: 300px;
        margin-bottom: 20px;
        border-top: none;
        background-color: #fff;
        box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
        font-size: 12px;
        overflow: hidden;
        z-index: 800;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .index-header .common-box .fuzzyQueryList li {
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        overflow: hidden;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #787d82;
        cursor: pointer;
    }

    .index-header .common-box .search-warp {
        position: relative;
        width: 300px;
        margin-left: 30px;
        height: 47px;
        border-bottom: 1px solid #D9DDE1;
    }

    .index-header .common-box .search-warp input {
        width: 100%;
        height: 46px;
        line-height: 46px;
    }

    .index-header .common-box .search-warp ul {
        position: absolute;

    }
</style>