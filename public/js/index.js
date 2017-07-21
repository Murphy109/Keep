
window.onload=function(){
    var mySwiper = new Swiper ('.swiper-container', {
        autoHeight: true,
    })

    window.addEventListener("touchend",  function() {
        var lis = document.querySelector(".index_nav").childNodes[1].childNodes;
        var lisArr = [];
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].nodeType == 1) {
                lisArr.push(lis[i]);
            }
        }
        for (var j = 0; j < lisArr.length; j++) {
            lisArr[j].style.borderBottom = "0.06rem solid #fff";
            if(j==mySwiper.activeIndex){
                lisArr[mySwiper.activeIndex].style.borderBottom = "0.06rem solid #584f60";
            }
        }
    })

    jQuery(".index_nav ul").on("click","li",function(){
        jQuery(this).css("border-bottom", "0.06rem solid #584f60")
        jQuery(this).siblings().css("border-bottom", "0.06rem solid #fff")
        var num=jQuery(this).index();
        mySwiper.slideTo(num, 1000, false);
    })


}
