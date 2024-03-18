$(function () {
//渲染头部导航菜单开始
	if(window.location.href.indexOf('subsite')<0) {
	                          window.addEventListener('DOMContentLoaded',function(event){
	                              var domain = window.location.origin.indexOf('') > -1 ? 'prod' : 'dev';
	                              var headerUrl = domain === 'prod' ? "/nav.html?1" : "/nav.html?1";
	  
	                              setTimeout(function(){
	                                  var siteCommonTemplate = function (url) {
	                                      var container = document.createElement('div');
	                                      $.ajax({
	                                          url: url, async: false, timeout: 10000,
	                                          success: function (data) {
	                                              container.innerHTML = data;
	                                              var appendHtml = $('<div class="footer-wrapper">' + container.querySelector('#footer').innerHTML + '</div>');
	                                              var headerDropdown = '<div style="display:none;">' + '<script type="text/html" id="header-lazyload-html-drop" class="header-lazyload-html" data-holder="#holder-drop">' + appendHtml.find('#header-lazyload-html-drop').html() + '<\/script><script type="text/html" id="header-lazyload-html-mbnav" class="header-lazyload-html" data-holder="#holder-mbnav">' + appendHtml.find('#header-lazyload-html-mbnav').html() + '<\/script></div>';
	                                              $("#header").html(container.querySelector("#header").innerHTML);
	                                              $('#footer').append(headerDropdown);
	                                              var script = document.createElement('script');
	                                              script.type = 'text/javaScript';
	                                              script.src = "/themes/web/ZdsjuM1/style/js/Header.js";
	                                              document.getElementsByTagName('body')[0].appendChild(script);
	                                              $('[data-login-href]').each(function () {
	                                                  $(this).attr('href', $(this).data('login-href') + href)
	                                              })
	  
	                                              var logoutUrl = '/logout?service=' + encodeURIComponent(window.location.href);
	                                              $('.header-user-info a.logout-btn').attr('href', logoutUrl);
	
	                                          },
	                                          error: function(XMLHttpRequest, textStatus, errorThrown) {
	                                              console.log(XMLHttpRequest.status,XMLHttpRequest.readyState,textStatus);
	                                          },
	              
	                                      });
	                                  }
	                                  var url = headerUrl + new Date().getMonth()+'0'+new Date().getDay();
	                                  if (!window.location.origin) {
	                                      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
	                                  }
	  
	                                  url = headerUrl + new Date().getMonth()+'0'+new Date().getDay();
	                                  
	          
	                                  var site = siteCommonTemplate(url);
	                              },20)
	                              
	                          });
}
//渲染头部导航菜单结束
	
//首页幻灯动画组件开始
		  $(".carousel-wrapper").find(".carousel-slide").eq(0).addClass("set-first-banner");
		  $(".carousel-wrapper").find(".banner-text-pc").eq(0).addClass("banner-text-enter");
		  $(".carousel-wrapper").find(".banner-text-tag").eq(0).addClass("banner-subtitle-enter");
		  $(".carousel-wrapper").find(".banner-title").eq(0).addClass("banner-title-enter");
		  $(".carousel-wrapper").find("p").eq(0).addClass("banner-tag-enter");
		  $(".carousel-wrapper").find(".banner-text-btn-wrapper").eq(0).addClass("banner-btn-enter");
		  $(".carousel-wrapper").find(".banner-icon-default").eq(0).addClass("banner-icon-default-enter");
		  $(".carousel-wrapper").find(".banner-icon-cover").eq(0).addClass("banner-icon-cover-enter");
//首页幻灯动画组件结束

//渲染首页结算
//所有产品目录左侧菜单点击下拉开始
		$('.ivu-menu-submenu').click(function(){
  	    $(this).toggleClass('ivu-menu-opened');
  	});
//所有产品目录左侧菜单点击下拉结束

//免费试用活动页开始
	  $('.sypz1').click(function(){
	      $(this).addClass('fr-product-bar-active');
		  $('.sypz2').removeClass('fr-product-bar-active');
		  $('.an1').show();
		  $('.an2').hide();
	  });
	  $('.sypz2').click(function(){
	      $(this).addClass('fr-product-bar-active');
		  $('.sypz1').removeClass('fr-product-bar-active');
	  		  $('.an2').show();
	  		  $('.an1').hide();
	  });
//免费试用活动页结束 

//CPS页面开始
cps={
   index:{
       subNavClick:function(){
           $('.zdy-cloumn li').each(function(){
               $(this).unbind().click(function(){
                   var obj = $(this).data('obj');
                   var pos = $('.scrollTo').css('position');
                   var idtop = $('.'+obj).offset().top;
                   $('body,html').animate({scrollTop: idtop},800);
               })
           });
           cps.index.scrollTop();
       },
       scrollTop:function(obj){
           var obj = $('.zdy-cloumn');
           var blank = $('.cloumn-blank');
           var minTop = obj.offset().top;
           var liactiveArray = new Array();
           var lastnum = 0;
           obj.find('li').each(function(val){
               liobj = $('.'+$(this).data('obj'));
               liactiveArray[val] = liobj.offset().top-125;
               lastnum = val;
           });
           liactiveArray[lastnum+1] = 999999;
           var liactiveArrayLength = liactiveArray.length;
           $(window).bind("resize scroll", function () {
               var scrollTop = $(this).scrollTop();
               if (scrollTop > minTop) {
                   blank.css({display: 'block'});
                   obj.css({position: 'fixed', left: '0px', top: '75px', right: '0px'});
                   obj.find('li').removeClass('active');
                   for(i=0;i<liactiveArrayLength;i++)
                   {
                       if(scrollTop>=liactiveArray[i] && scrollTop <=liactiveArray[i+1])
                       {
                           obj.find('li').eq(i).addClass('active');
                       }
                   }
               }else{
                   blank.css({display: 'none'});
                   obj.css({position: 'static', left:'inherit', top:'inherit', right:'inherit'});
               }
           });
       },
   },
}
//CPS页面结束

//所有产品页手机版菜单按钮开始
 $(".rno-btn-catalogue-inner").click(function(){
        if($(".search-pc").is(":visible")){
            $(".search-pc").hide();
        } else {
            $(".search-pc").show();
        }
    });
//顶部伸展广告
	      if ($("#js_ads_banner_top_slide a").length > 0) { //判断当前广告是否展开，如果没有，则执行下面代码
	          var $slidebannertop = $("#js_ads_banner_top_slide"),
	              $bannertop = null;
	          if ($("#js_ads_banner_top a").length > 0) {
	              $bannertop = $("#js_ads_banner_top");
	          }
	          setTimeout(function () {
	              if ($bannertop) {
	                  $bannertop.slideUp(1000);
	              }
	              $slidebannertop.slideDown(1000);
	          }, 1500); //1500毫秒(1.5秒)后，小广告收回，大广告伸开，执行时间都是1秒(1000毫秒)
	          setTimeout(function () {
	              $slidebannertop.slideUp(1000, function () {
	                  if ($bannertop) {
	                      $bannertop.slideDown(1000);
	                  }
	              });
	          }, 3000); //3.0秒(3000毫秒)之后，大广告收回，小广告展开。
	      }


//首页套餐切换

 // li CSS选中状态切换
    $(".zd-tabs-list li").click(function() {
        $(this).siblings('li').removeClass('zd-tabs-active');  // 删除其他兄弟元素的样式
        $(this).addClass('zd-tabs-active'); // 添加当前元素的样式
		var order = $(".zd-tabs-list li").index(this);//获取点击之后返回当前a标签index的值
		$(".J-marketPanel" + order).show().siblings("div").hide();//显示class中con加上返回值所对应的DIV
	
    })
//首页页面加载
$.getScript("/themes/web/ZdsjuM1/style/js/feloader.js");
});

//弹窗广告
function one(){
 $('.light').show();
}
setTimeout(onclick='one()',2000);//先设定打开新网页3秒后弹出    
function start1(){    
    $('.light').hide();
}
