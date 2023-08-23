// header nav 서브메뉴
const sub = $('.sub')
const nav = $('nav > ul > li')
sub.hide()
//메뉴에 마우스 올렸을 때 서브 출력
nav.on('mouseover',function(){
    // sub.show()
    // sub.stop().slideDown() //한번에 출력
    //stop()은 마우스커서가 중복되지 않도록 하는 메서드
    //slideDown()은 메뉴가 슬라이드로 보이도록 하는 메서드
    $(this).find('.sub').stop().slideDown() //마우스를 올린 자식만 슬라이드로 보여줌
    $(this).find('> a').css('fontWeight','700')
})
nav.on('mouseout',function(){
    // sub.hide()
    // sub.stop().slideUp()
    sub.stop().slideUp()
    $(this).find('> a').css('fontWeight','400')
})

const main_swiper = new Swiper('#main_slide', {
    direction:'horizontal',
    loop:true,
    autoplay:{delay:3000}, //자동재생
    speed:800, //슬라이드 전환 시 부드러운 전환
    // 애니메이션
    // on:{ //슬라이드의 글자가 나타나고 사라지는 기능
    //     init:function(){
    //         //슬라이드 변경되기 전 초기 실행함수
    //         this.slides[this.activeIndex].querySelector('.txt').style.opacity = '1';
    //     },
    //     slideChange:function(){
    //         //슬라이드 변경될 때 인식되는 실행함수
    //         //1. 활성화 전 모든 슬라이드 opacity:0\
    //         this.slides.forEach(target => {
    //             target.querySelector('.txt').style.opacity = '0';
    //             target.querySelector('.txt').style.transform = 'translateY(30px)';
                
    //         })
    //         //2. 활성화 슬라이드만 opacity:1
    //         this.slides[this.activeIndex].querySelector('.txt').style.opacity = '1';
    //         this.slides[this.activeIndex].querySelector('.txt').style.transform = 'translateY(0)';
    //     }
    // },
    // 페이지네이션
    pagination: {
        el: '.swiper-pagination',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// 베스트셀러 슬라이드
const best_swiper = new Swiper('#best_slide', {
    loop:true,
    speed:800,
    slidesPerView:1,
    // 페이지네이션
    pagination: {
        el: '.swiper-pagination',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //반응형 페이지 수
    breakpoints:{
        600:{slidesPerView:2, centeredSlides:true,},
        1000:{slidesPerView:3, centeredSlides:true,},
        1400:{slidesPerView:4, centeredSlides:true,}
    }
})
// 베스트셀러 슬라이드
const new_swiper = new Swiper('#new_slide', {
    loop:true,
    speed:800,
    slidesPerView:1,
    // 페이지네이션
    pagination: {
        el: '.swiper-pagination',
        clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //반응형 페이지 수
    breakpoints:{
        600:{slidesPerView:2, centeredSlides:true,},
        1000:{slidesPerView:3, centeredSlides:true,},
        1400:{slidesPerView:4, centeredSlides:true,}
    }
})
// 하단광고 슬라이드 영역
const bnr_swiper = new Swiper('#bnr_slide', {
    direction:'horizontal',
    loop:true,
    autoplay:{delay:3000}, //자동재생
    speed:800,
})
//이벤트 슬라이드 
const event_swiper = new Swiper('#event_slide', {
    loop:true,
    speed:800,
    slidesPerView:1,
    //반응형 페이지 수
    breakpoints:{
        600:{slidesPerView:2, centeredSlides:true,},
        1000:{slidesPerView:3, centeredSlides:true,},
    }
})
