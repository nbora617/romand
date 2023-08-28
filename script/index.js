const main_swiper = new Swiper('#main_slide', {
    direction:'horizontal',
    loop:true,
    autoplay:{delay:3000}, //자동재생
    speed:800, //슬라이드 전환 시 부드러운 전환
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    on:{ //슬라이드의 글자가 나타나고 사라지는 기능
        init:function(){
            //슬라이드 변경되기 전 초기 실행함수
            // this.slides[this.activeIndex].querySelector('.txt-box').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.txt-box > h2').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.txt-box > p').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.txt-box > a').style.opacity = '1';
        },
        slideChange:function(){
            //슬라이드 변경될 때 인식되는 실행함수
            //1. 활성화 전 모든 슬라이드 opacity:0\
            this.slides.forEach(target => {
                // target.querySelector('.txt-box').style.opacity = '0';
                // target.querySelector('.txt-box').style.transform = 'translate(-50%, -60%);';
                target.querySelector('.txt-box > h2').style.opacity = '0';
                target.querySelector('.txt-box > h2').style.transform = 'translateY(20px)';
                target.querySelector('.txt-box > p').style.opacity = '0';
                target.querySelector('.txt-box > p').style.transform = 'translateY(20px';
                target.querySelector('.txt-box > a').style.opacity = '0';
                target.querySelector('.txt-box > a').style.transform = 'translateY(20px';
                
            })
            //2. 활성화 슬라이드만 opacity:1
            // this.slides[this.activeIndex].querySelector('.txt-box').style.opacity = '1';
            // this.slides[this.activeIndex].querySelector('.txt-box').style.transform = 'translate(50%, 60%)';
            this.slides[this.activeIndex].querySelector('.txt-box > h2').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.txt-box > h2').style.transform = 'translate(0)';
            this.slides[this.activeIndex].querySelector('.txt-box > p').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.txt-box > p').style.transform = 'translateY(0)';
            this.slides[this.activeIndex].querySelector('.txt-box > a').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.txt-box > a').style.transform = 'translateY(0)';
        }
    },
})

// 베스트셀러 슬라이드
const best_swiper = new Swiper('#best_slide', {
    loop:true,
    speed:800,
    slidesPerView:1,
    centeredSlides:true, //슬라이드 기준이 중심부터 시작설정
    spaceBetween:20,
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
        500:{slidesPerView:2, centeredSlides:true,},
        1000:{slidesPerView:3, centeredSlides:true,},
        1400:{slidesPerView:4, centeredSlides:true,}
    }
})
// 상품 관심달기 on/off
const like = document.querySelectorAll('.options > a > span')
console.log(like)
for(let i of like){
    i.addEventListener('click',function(e){
        e.preventDefault();
        i.classList.toggle('like_on');
        window.alert('관심리스트에 담겼습니다.')
    })
}
// 신상품 슬라이드
const new_swiper = new Swiper('#new_slide', {
    loop:true,
    speed:800,
    slidesPerView:1,
    centeredSlides:true, //슬라이드 기준이 중심부터 시작설정
    spaceBetween:20,
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
        500:{slidesPerView:2, centeredSlides:true,},
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

