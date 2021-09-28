
//Animaciones


const heroAnimation = () => {    
    setTimeout(() => {
        $(".home-title").css({
            "transform": "translateX(0px)"
        }).animate({
            opacity: 1
        });
    }, 200);

    setTimeout(() => {
        $(".home-subtitle").css({
            "transform": "translateX(0px)"
        }).animate({
            opacity: 1
        })
    }, 400);

    setTimeout(() => {
        $(".cta-btn").css({
            "transform": "translateX(0px)"
        }).animate({
            opacity: 1
        })
    }, 600);
};

const aboutAnimation = () =>{
    $(window).scroll(()=>{
        setTimeout(() => {
            $(".header").css({
                "transform": "translateY(0px)"
            }).animate({
                opacity: 1
            })
        }, 200);

        setTimeout(() => {
            $(".about").css({
                "transform": "translateY(0px)"
            }).animate({
                opacity: 1
            })
        }, 250);

        setTimeout(() => {
            $(".rescatar").css({
                "transform": "translateY(0px)"
            }).animate({
                opacity: 1
            });
            
        }, 350);

        setTimeout(() => {
            $(".curar").css({
                "transform": "translateY(0px)"
            }).animate({
                opacity: 1
            });
            
        }, 450);

        setTimeout(() => {
            $(".hogar").css({
                "transform": "translateY(0px)"
            }).animate({
                opacity: 1
            });
            
        }, 550);
    })
};

const helpAnimation = () =>{
    $(window).scroll(()=>{
        setTimeout(() => {
            $(".header").css({
                "transform": "translateY(0px)"
            }).animate({
                opacity: 1
            })
        }, 200);
    })

    setTimeout(() => {
        $(".donacion").css({
            "transform": "translateY(0px)"
        }).animate({
            opacity: 1
        })
    }, 250);

    setTimeout(() => {
        $(".apadrinar").css({
            "transform": "translateY(0px)"
        }).animate({
            opacity: 1
        });
        
    }, 350);
}

heroAnimation();
aboutAnimation();
helpAnimation();