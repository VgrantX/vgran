

$(function(){
	// 选项卡 导航
	// var _option = $('.navigation .navigation-list');
 //    _option.click(function(){
 //        $(this).addClass('active').siblings().removeClass('active');
 //        $(this).next().addClass('MainNav_listsActive').siblings().removeClass('MainNav_listsActive');
 //    });
    // APP 头部导航
    var _optionA = $('.MainNav .MainNav_list');
    _optionA.click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).next().addClass('MainNav_listsActive').siblings().removeClass('MainNav_listsActive');
    });
    // 选项
     var _option = $('.option span');
    _option.click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // 内容替换
    var _optionSpan = $('.optionSpan span');
    _optionSpan.click(function(){
        var searchContent = $(this).text();
        $(this).parents('.lists').find('.list-option b').text(searchContent);
    })
    // 特殊职业类别
    var _zhiweiClass = $('.zhiweiClass li');
    _zhiweiClass.click(function(){
        var searchContentTop = $(this).text();
        $(this).parents('.lists').find('.list-option b').text(searchContentTop);
    })
    $('.optionActive').click(function(){
        var searchContentTop = $(this).text();
        $(this).parents('.lists').find('.list-option b').text(searchContentTop);
    })
    // city的内容替换
     $('.CITYMORELIST span').click(function(){
        var _CITYMORELIST  = $(this).text();
        $('.teshuCity').text(_CITYMORELIST);
    })
    //  城市展开全部
    $('.cityMore').click(function(){
        $('.cityMoreList').css({display:'inline-block'});
        $('body').css({overflow:'hidden'});
    })
    $('.close2').click(function(){
        $('.cityMoreList').css({display:'none'});
        $('body').css({overflow:'auto'});
    })
    $('.CITYMORELIST li .city span').click(function(){
         $('.CITYMORELIST li .city span').css({background:'none',color:'#333333'});
        $(this).css({background:'#f5989d',color:'#ffffff'});
    })
    // 图片高度
    var _box_img = $('.box-model-img').width();
    $('.box-model-img').height(_box_img*0.558);

    var _box_img_same = $('.cattle-info-img').width();
    $('.cattle-info-img').height(_box_img_same);

    var comopany_owl = $('.company-owl-img-a').width();
    $('.company-owl-img-a').height(comopany_owl/2);

     var _content_img = $('.content-img').width();
    $('.content-img').height(_content_img*0.78);

    

    // 搜索展开
    $('.S_OPEN').click(function(){
        $('.content').css({display:'none'});
        $('.HeaderTopFixed').css({display:'none'});
        $('.APP-SEARCH').css({display:'none'});
        $('.newsSearch').css({display:'inline-block'});
        $('.App-footer').css({position:'fixed',bottom:'0'});
    })
    $('.quxiao').click(function(){
         $('.content').css({display:'inline-block'});
        $('.HeaderTopFixed').css({display:'inline-block'});
        $('.APP-SEARCH').css({display:'inline-block'});
        $('.newsSearch').css({display:'none'});
        $('.App-footer').css({position:'static',bottom:'0'});
    })
// 搜索
    var flag_more = true;
    var _MORE = $('.MORE');
    _MORE.click(function(){
        if (flag_more) {
            $(this).parents('.lists').addClass('LISTS-ALL');
            $(this).parents('.lists').find('span').css({position:'relative'});
            $(this).prev('.option').css({overflow:'visible',height:'auto'});
            $(this).find('b').css({color:'#f5989d'});
            $(this).find('img').addClass('MORE-IMG');
            flag_more = false;
        }
        else {
            $(this).parents('.lists').removeClass('LISTS-ALL');
            $(this).parents('.lists').find('span').css({position:'static'});
            $(this).prev('.option').css({overflow:'hidden',height:'32px'});
            $(this).find('b').css({color:'#666666'});
            $(this).find('img').removeClass('MORE-IMG');
            flag_more = true;
        }
    })
    var flag_top = true;
    var _TOP = $('.TOP');
    _TOP.click(function(){
        if (flag_top) {
            $('.TOP-ADD').css({display:'none'});
            $('.TOP-REMOVE').css({display:'inline-block'});
            $('.Options').css({display:'block'});
            flag_top = false;
        }
        else {
            $('.TOP-ADD').css({display:'inline-block'});
            $('.TOP-REMOVE').css({display:'none'});
             $('.Options').css({display:'none'});
             flag_top = true;
        }
    })
    $('.appear').click(function(){
        $(this).next().css({display:'inline-block'});
        $(this).css({display:'none'});
        $(this).parent('div').next().css({display:'inline-block'});
    })
    $('.disappear').click(function(){
        $(this).prev().css({display:'inline-block'});
        $(this).css({display:'none'});
        $(this).parent('div').next().css({display:'none'});
    })
    // 手机端搜索

    // 选项卡
    var _APPoption = $('.app-sel li');
    _APPoption.click(function(){
        $('.arrow-top').removeClass('PortraitImg');
        $('.MainLogin').css({height:0});
        $(this).addClass('active').siblings().removeClass('active');
        $('.APP-SEARCH').css({height:'100%',background:'rgba(0,0,0,0.7)'});
        var index = $(this).index();
        var _APPTab = $(this).parents('.APP-SEARCH');
        _APPTab.find('.TABLE-PANEL').removeClass('active');
        $('.TABLE-PANEL:eq('+index+')',_APPTab).addClass('active');
    });
    $('.Collapse').click(function(){
        $(this).parent('.TABLE-PANEL').removeClass('active');
        $('.APP-SEARCH').find('li').removeClass('active');
        $('.APP-SEARCH').css({height:'auto',background:'none'});
    })
    // 

    // 手机端高级搜索下啦菜单
    $('.category .cateGory').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('.cate-add').css({display:'none'}).siblings().find('.cate-add').css({display:'inline-block'});
        $(this).find('.cate-remove').css({display:'inline-block'}).siblings().find('.cate-remove').css({display:'none'})
        $('.category-list').find('.category-lists').removeClass('active');
        $(this).next('.category-list').addClass('show-con').siblings('.category-list').removeClass('show-con');
        // 。内容替换
        var _AppJobsCon  = $(this).text();
        $('.AppJobsTop').text(_AppJobsCon);
    });
    // 手机端城市搜索
    $('.AppCity li').click(function(){
        $('.AppCity li').removeClass('active');
        $(this).addClass('active');
        var _AppCityCon  = $(this).find('span').text();
        $('.AppCityTop').text(_AppCityCon);
    })
    // 手机端薪资待遇/经验
    $('.AppTime p').click(function(){
        $(this).css({color:'#f5989d'}).siblings().css({color:'#333333'});
        var _AppTimeCon  = $(this).text();
        $('.AppTimeTop').text(_AppTimeCon);
    })
    $('.AppMoney p').click(function(){
        $(this).css({color:'#f5989d'}).siblings().css({color:'#333333'});
        var _AppMoneyCon  = $(this).text();
        $('.AppMoneyTop').text(_AppMoneyCon);
    })
// 职业类别选项
    $('.category-list .category-lists').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        // 取消上一级选中框
        $(this).parent('.category-list').prev('.cateGory').find('.cate-add').css({display:'inline-block'});
        $(this).parent('.category-list').prev('.cateGory').find('.cate-remove').css({display:'none'});
        // 内容替换
        var _AppJobsCon  = $(this).text();
        $('.AppJobsTop').text(_AppJobsCon);
    });

    $('.leibie').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    // 轮播
    $("#owl-companybanner").owlCarousel({
    autoPlay : 4000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 300,
    goToFirstSpeed : 400,
    singleItem : true,
    // autoHeight : true,
    transitionStyle:"fade"
  });

  $("#owl-CattleBanner").owlCarousel({
        items : 4,
        lazyLoad : true,
        navigation : true,
        paginationSpeed:300,
        rewindSpeed:0,
        margin:30
      });
    
    // 省略号
    $('.one-line').ellipsis({
        row: 1
    })
    $('.tow-line').ellipsis({
        row: 2
    })
    $('.four-line').ellipsis({
        row: 4
    });
    $('.five-line').ellipsis({
        row: 5
    });
    $('.six-line').ellipsis({
        row: 6
    });
    // 公司信息
    $('.add-info').click(function(){
            $(this).next().css({display:'inline-block'});
            $(this).css({display:'none'});
            $(this).parents('.CATTLE-company').css({height:'auto',background:'#ffffff',overflow:'visible'});

    })
    $('.remove-info').click(function(){
            $(this).prev().css({display:'inline-block'});
            $(this).css({display:'none'});
            $(this).parents('.CATTLE-company').css({height:'50px',background:'#f0f0f0',overflow:'hidden'});
    })
    // 收藏
    $('.add-info-img').click(function(){
            $(this).next().css({display:'inline-block'});
            $(this).css({display:'none'});
    })
    $('.remove-info-img').click(function(){
            $(this).prev().css({display:'inline-block'});
            $(this).css({display:'none'});
    })
    // 分享
    $(".share-img").click(function(){
        $(this).next().css({display:'inline-block'})
    })
    $(".CLOSE").click(function(){
        $(this).parents(".info").css({display:'none'})
    })

    var flagC = true;
    $('.ARROWBOTTOM').click(function(){
         if (flagC) {
            $('.height-active').addClass('heightactive');
            $(this).addClass('active-arrow');
            flagC = false;
        }
        else {
            $('.height-active').removeClass('heightactive');
            $(this).removeClass('active-arrow');
            flagC = true;
        }
    })
    
    var flag = true;
    $(".header-top-nav").click(function(){
        if(flag){
            $('.TABLE-PANEL').removeClass('active');
            $('.APP-SEARCH li').removeClass('active');
            $('.APP-SEARCH').css({height:'auto'})
            $('.MainNav').css({height:1});
          $(".MainNav").css({height:"auto"});
          $(".MainLogin").css({height:0});
          flag = false;
        }else{
          $(".MainNav").css({height:0});
          flag = true
        }
        
    });
    var flag_login = true;
    $(".arrow-top").click(function(){
      if(flag_login){
            $('.TABLE-PANEL').removeClass('active');
            $('.APP-SEARCH li').removeClass('active');
            $('.APP-SEARCH').css({height:'auto'})
            $('.MainNav').css({height:1});
          $('.arrow-top').addClass('PortraitImg');
          $(".MainLogin").css({height:80});
          $(".MainNav").css({height:0});
          flag_login = false;
        }else{
          $('.arrow-top').removeClass('PortraitImg');
          $(".MainLogin").css({height:0});
          flag_login = true
        }
    });
})
    // 流式布局js
    //判断浏览器类型
    function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串    
       
         console.log(userAgent)
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
       if(userAgent.indexOf("Mozilla")>-1){
           return "IE";
       }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        }
    }
    var mb = myBrowser(); 
    console.log(mb)
    if ("IE" == mb || "FF" == mb) {
        warterfal();
        $(".Fbox li").find("img").on("load",function(){
             warterfal();
            var windoW = $(window).width();
        })
    }
    if ("Safari" == mb) {
        $(".Fbox li").find("img").on("load",function(){
             warterfal();
            var windoW = $(window).width();
        })
    }

    //检测窗口大小变化
    $(window).resize(function() {
              warterfal();
        });


//图片动态布局
function warterfal(){
        //获取所有的图片容器
        var windoW = $(window).width();
        var boxList = $(".Fbox li");
        var boxW = boxList.eq(0).outerWidth();
        var aHrr = [];
        var ulH = $(".Fbox");
        var hh = 0;
        if(windoW>=992){
            boxList.each(function(index,value){
                    var h = boxList.eq(index).outerHeight();                
                    if(index<4){
                            aHrr.push(h);
                        }else{
                            var minH = Math.min.apply(null,aHrr);
                            var minP = $.inArray(minH,aHrr);
                            var baseT =Math.floor(index/4)-1;                            
                            if(baseT>1||baseT==1){
                                 $(value).css({
                                    position:'absolute',
                                    top:minH+(baseT * 20)+"px",
                                    left:boxW*minP+15+'px',
                                    'paddingRight' :'22px'
                                });                 
                            }
                            else{
                                 $(value).css({
                                    position:'absolute',
                                    top:minH+"px",
                                    left:boxW*minP+15+'px',
                                    'paddingRight' :'22px' 
                                });
                            }
                            //实时获取和更新数组中的最小高度的值；
                            aHrr[minP] += boxList.eq(index).height();
                        }
                 })
                var ulmaxH = Math.max.apply(null,aHrr);
                ulH.css({
                    height:ulmaxH
                })
            }else{
                boxList.each(function(index,value){
                    hh += boxList.eq(index).outerHeight();
                    $(value).css({
                        position: 'static',
                        left:'0',
                        top:'0',
                        'paddingRight' :'0'
                    });
                    ulH.height(hh);
//                    var pStr = boxList.eq(index).find("p").text().trim();
//                    var pL = pStr.length;
//                    if(pL>50){
//                        var num = pStr.substring(0,49);
//                        console.log(num.typeof);
//                        $(".Fbox li").eq(index).find("p").text(num+'……');
//                        $(".Fbox").css({
//                            "margin-bottom":"22px"
//                        })
//                    }

                })
            }
    }


