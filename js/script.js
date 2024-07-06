$(document).ready(function() { 

/* 스와이프 --------------------------------------------------- */
    var swiper;
    var swiper2;
    var swiper3;

    function initSwiper() {
        if ($(window).width() < 900) {
            swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                pagination: {
                    clickable: true,
                },
            });
        }
    }

    function destroySwiper() {
        if (swiper && $(window).width() >= 900) {
            swiper.destroy(); // 스와이프 삭제
            swiper = null;
            $('.mySwiper .swiper-wrapper').css({
                transform: "translate3d(0px, 0px, 0px)",
        });
        }
    }

    
    initSwiper(); // 스와이퍼 초기화

    // 윈도우 리사이즈 이벤트 처리
    $(window).resize(function() {
        if ($(window).width() < 900) {
            if (!swiper) { // 스와이퍼가 없을 때 초기화
                initSwiper();
            }
        } else {
            destroySwiper(); // 남아있을 경우 스와이퍼 삭제
        }
    });

/* 섹션 2 스와이프 */

function initializeSwiper(section) {
    if (section === "sec_4") {
        swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 'auto',
            observer: true,
            observeParents: true,
            spaceBetween: 0,
            pagination: {
                clickable: true,
            },
            navigation: {
                nextEl: ".sec_4_next",
                prevEl: ".sec_4_prev",
            },
        });
    } else if (section === "sec_5") {
        swiper3 = new Swiper(".mySwiper3", {
            slidesPerView: 'auto',
            observer: true,
            observeParents: true,
            spaceBetween: 0,
            pagination: {
                clickable: true,
            },
            navigation: {
                nextEl: ".sec_5_next",
                prevEl: ".sec_5_prev",
            },
        });
    }
}

// 윈도우 크기 변경 시 스와이퍼 초기화
$(window).on('resize', function() {
    if (swiper2 !== undefined) {
        swiper2.destroy(true, true); // 이전 스와이퍼 제거
    }
    if (swiper3 !== undefined) {
        swiper3.destroy(true, true); // 이전 스와이퍼 제거
    }
    initializeSwiper("sec_4"); // 섹션 4 초기화
    initializeSwiper("sec_5"); // 섹션 5 초기화
});

// 페이지 로드 시 초기화
initializeSwiper("sec_4"); // 섹션 4 스와이퍼 초기화
initializeSwiper("sec_5"); // 섹션 5 스와이퍼 초기화

/* 스와이프 --------------------------------------------------- */

});
