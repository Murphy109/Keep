window.onload=function(){
    var mySwiper1 = new Swiper ('.swiper-container1', {
        autoplay:3000,
        loop:true,
    });
    var mySwiper2 = new Swiper ('.swiper-container2', {
        autoHeight: true,
    });
    window.addEventListener("touchend",  function() {
        var lis = document.querySelector(".discover_nav").childNodes[1].childNodes;
        var lisArr = [];
        //console.log(lis)
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].nodeType == 1) {
                lisArr.push(lis[i]);
            }
        }
        for (var j = 0; j < lisArr.length; j++) {

            lisArr[j].style.borderBottom = "0.08rem solid #fff";
            if(j==mySwiper2.activeIndex){
                lisArr[mySwiper2.activeIndex].style.borderBottom = "0.08rem solid #584f60";
            }
        };
        jQuery(".discover_nav ul").on("click","li",function(){
            jQuery(this).css("border-bottom", "0.06rem solid #584f60");
            jQuery(this).siblings().css("border-bottom", "0.06rem solid #fff");
            var num=jQuery(this).index();
            mySwiper2.slideTo(num, 1000, false);
        })
    });
    var mySwiper3 = new Swiper ('.swiper-container3', {
        autoplay:3000,
        loop:true
    });
    var mySwiper4 = new Swiper ('.swiper-container4', {
        freeMode:true,
        freeModeMomentum:false,
        slidesPerView : 1.4,
        slidesOffsetBefore:25,
        slidesOffsetAfter:10
    });
    var mySwiper5 = new Swiper ('.swiper-container5', {
        freeMode:true,
        freeModeMomentum:false,
        slidesPerView : 2.7,
        slidesOffsetBefore:25,
        slidesOffsetAfter:10
    });
    var mySwiper6 = new Swiper ('.swiper-container6', {
        autoplay:3000,
        direction: 'vertical',
        loop:true
    });
};
window.addEventListener("scroll",  function() {
    var lamp=1;
    if(document.body.scrollTop>50){
        if(lamp){
            lamp=0;
            document.querySelector(".discover_nav").style.position='fixed';
            document.querySelector(".discover_nav").style.top=0;
        }
    }else{
        if(lamp==1){
            document.querySelector(".discover_nav").style.position='static';
        }
    }
});