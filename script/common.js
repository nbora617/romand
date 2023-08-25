// header nav 서브메뉴
const sub = $('.sub')
const nav = $('nav > ul > li')
//메뉴에 마우스 올렸을 때 서브 출력
sub.hide();
nav.on('mouseover',function(){
    // sub.show() // sub.stop().slideDown() //한번만 출력
    //stop()은 마우스커서가 중복되지 않도록 하는 메서드
    //slideDown()은 메뉴가 슬라이드로 보이도록 하는 메서드
    $(this).find('.sub').stop().slideDown(500) //마우스를 올린 자식만 슬라이드로 보여줌
    $(this).find('> a').css('fontWeight','700')
})
nav.on('mouseout',function(){
    // sub.hide() // sub.stop().slideUp()
    sub.stop().slideUp(300)
    $(this).find('> a').css('fontWeight','400')
})

//header m_menu
$(document).ready(function(){
    //m_menu 초기 숨기기
    $('.open_m_menu').css('transform','translateX(100%)');
    //m_menu 클릭시 m_menu 보이기 
    $('#all_m_menu').click(function(){
        // $('.open_m_menu').show()
        $('.open_m_menu').css('transform','translateX(0)')
        $('.open_m_menu').css('transition','0.7s ease-in')
    });
    //닫기 클릭 시 m_menu 숨이고 클릭했던 sub_menu도 초기 숨기기
    $('#close').click(function(){
        // $('.open_m_menu').hide()
        $('.open_m_menu').css('transform','translateX(100%)');
        $(".sub_menu").hide();
    });
    //m_menu의 sub_menu 초기 숨기기
    $(".sub_menu").hide();
    //m_menu의 nav클릭시 서브메뉴보이고 다시 클릭하면 숨기기
    $(".open_m_menu > ul > li > a").click(function(){
        $(this).next().slideToggle(300);
        $(this).css('backgroundColor','#d3d2d2')
        // $(this).find('.fa-solid').css('transform','rotate(270deg)')
        // $(this).find('.fa-solid').css('transition','0.5s')
      // $(this).next().slideDown(300);
        $("ul li a").not(this).next().slideUp(300);
        return false;
    });
    $("ul li a").eq(0).trigger("click");
})


