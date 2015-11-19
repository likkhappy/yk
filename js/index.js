/**
 * Created by dodo on 2015/11/19.
 */

var index = function(){
    var self = this;
    $.extend(self,{
        init:function(){
            self.initMenu();
            self.initWrap();
            self.initMain();
        },
        initMenu:function(){
            $('li.js-hover').hover(function(e){
                var ele = $(this);
                ele.find('div.sub-nav').css('display','block');
            },function(e){
                var ele = $(this);
                ele.find('div.sub-nav').css('display','none');
            });
        },
        initWrap:function(){
            $("ul.pic-list").scrollable({
                width: "auto",
                height: 700,
                direction: "left",
                scrollCount: 1,
                duration: 1000,
                delay: 3000,
                pagelist:'.cut-wrap'
            });
        },
        initMain:function(){
            $('div.program-main,div.film-main').find('li').removeClass('active');
            $('div.program-main,div.film-main').find('li img').addClass('img-gray');
            $('div.program-main,div.film-main').delegate('li','mouseover',function(e){
                var ele = $(this);
                ele.addClass('active');
                ele.find('img').removeClass('img-gray');
                e.preventDefault();
            })
            $('div.program-main,div.film-main').delegate('li','mouseout',function(e){
                var ele = $(this);
                ele.removeClass('active');
                ele.find('img').addClass('img-gray');
                e.preventDefault();
            })
        }
    });
}
var obj = new index();
obj.init();
