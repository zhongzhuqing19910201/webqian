 // 整体布局
 (function(){
     var mySwiper = new Swiper ('.swiper-container', {
     on:{
       init: function(){
         swiperAnimateCache(this); //隐藏动画元素 
         swiperAnimate(this); //初始化完成开始动画
        }, 
         slideChangeTransitionEnd: function(){ 
           swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            } 
          },
          direction: 'vertical',
          mousewheel: true,
          pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
     })
 })();
  // 第三页的排他思想
 (function(){
     var datas={'1简单的自我介绍':['您好，我是钟主清1','爱编程，爱前端，爱新技术','爱运动，爱健身，爱旅行','生活中活泼开朗、喜欢沟通交流','工作上认真负责、热爱学习创新','目前，自身技术还差很远','但，路程虽远，仍要负重前行！!'],
                '2为什么想做前端工程师？':['可能就像这一句情话','You are the css to my html.','我的生活索然无味','直到遇见了你。','为爱好而学，为看好这个行业而学','为一种“技术人员”的自尊而学'],
                '3为什么不从事本专业？':['工作，本应该是一件使人快乐的事','但，好像...只有编程才能使我感到真正的快乐！！！','那么..','放下从前，着眼未来','为心中所爱，直奔前端'],
                '4你有怎样的优势和不足？':['我的不足是：非计算机专业','导致很多非前端范畴的专业名词理解不深，改进ing!','我的优势是：非计算机专业','建筑工作的经历，铸就了我工作认真，不怕吃苦的作风！'],
                '5你的梦想是？':['有人说【IT是个青春饭】','但我 (ฅ´ω`ฅ)','会一直走下去','成为一名优秀的前端工程师','。','。','当然，得先有一个您给我发的offer！']
                }

       $("#itme-info3 .itme-info3-left p").on('mouseover',  function() {
	          var key=$(this)[0]['innerText'];
	           var list=datas[key];
             var tag="";
	         for (var i = 0; i<list.length; i++) {
	 	              var txt=list[i];
                 tag+='<p>'+txt+'</p>';
	             };
            $("#itme-info3 .itme-info3-right").html(tag)
             });
  })();
  //第5页的图片权重
(function(){
    $('.itme-info5-Carousel .itme-info5-Carousel-left img').on('mouseover',function(){
      $(this).css('z-index', 1000);
    });
     $('.itme-info5-Carousel .itme-info5-Carousel-left img').on('mouseleave',function(){
      $('.itme-info5-Carousel .itme-info5-Carousel-left img').css('z-index', 1);
    });
})();
// 第五页的轮播 排他思想和按钮
   (function(){
    var index=0;
    var  lis=$(".itme-info5-box  .itme-info5-Carousel li");
          $("button").eq(0).click(function(event) {
                 toLeft();
                 clearInterval(timer);
                 });
             $("button").eq(1).click(function(event) {
                 toRight();
                 clearInterval(timer);
                });
      function toLeft()
      {
        lis.eq(index).stop().animate({"left":1092.8},1000);
        index--;
        if(index < 0)
        {
          index = lis.length-1;
        }
        lis.eq(index).css('left', -1092.8).stop().animate({"left":0},1000);
        $(".itme-info5-box ol li").removeClass('lis1').eq(index).addClass('lis1')
      }
      function toRight()
      {
        lis.eq(index).stop().animate({"left":-1092.8},1000,function(){
          $(this).css("left",1092.8);
        });
        index++;
        if(index > lis.length -1)
        {
          index = 0;
        }
        lis.eq(index).stop().animate({"left":0},1000);
        $(".itme-info5-box ol li").removeClass('lis1').eq(index).addClass('lis1')
      }



          $(".itme-info5-box ol li").click(function(event) {
        var $index = $(this).index();
        // 判断当前的图片的位置和点击小圆点的的位置,对比,看是要向左移动还是向右移动
        if(index > $index)
        {
          lis.eq(index).stop().animate({"left":1092.8},300);
          lis.eq($index).css('left', -1092.8).stop().animate({"left":0},300);
          index = $index;
        }else if(index < $index){
          lis.eq(index).stop().animate({"left":-1092.8},300,function(){
            $(this).css("left",1092.8);
          });
          lis.eq($index).stop().animate({"left":0},300);
          index = $index;
        }
        $(".itme-info5-box ol li").removeClass('lis1');
        $(this).addClass('lis1');
      });
          // 自动动画
      var timer = setInterval(toRight, 3000);
      // 触发时停止动画
      $(".itme-info5-box .itme-info5-Carousel").mouseover(function(event){
          clearInterval(timer);
      })
      // 离开时继续动画
        $(".itme-info5-box .itme-info5-Carousel").mouseout(function(event){
          timer =setInterval(toRight, 3000);
      })
   })();