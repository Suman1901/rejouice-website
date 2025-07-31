function cursorEffect (){
    let page1Content = document.querySelector("#page1-content");
    let navSec = document.querySelector(".nav-sec");
    let curSor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", (dets)=>{
        gsap.to(curSor,{
            x: dets.x,
            y: dets.y
        })
    })

    page1Content.addEventListener("mouseenter", ()=>{
        gsap.to(curSor,{
            scale:1,
            opacity:1
        })
    })
    page1Content.addEventListener("mouseleave", ()=>{
        gsap.to(curSor,{
            scale:0,
            opacity:0
        })
    })

    navSec.addEventListener("mouseenter", ()=>{
        gsap.to(curSor,{
            scale:0,
            opacity:0
        })
    })
    navSec.addEventListener("mouseleave", ()=>{
        gsap.to(curSor,{
            scale:1,
            opacity:1
        })
    })
}

cursorEffect()


var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,

    });


// let rivian = document.querySelector('.rivian');
// let rivianVideo = document.querySelector(".rivian-video");

// rivian.addEventListener("mousemove", (dets)=>{
//     gsap.to(rivianVideo,{
//         x: dets.clientX,
//         y: dets.clientY,
        
//     })
// })

// rivian.addEventListener("mouseenter", ()=>{
//     gsap.to(rivianVideo,{
//         scale: 1,
//         opacity: 1,
        
//     })
// })
// rivian.addEventListener("mouseleave", ()=>{
//     gsap.to(rivianVideo,{
//         scale: 0,
//         opacity: 0,
        
//     })
// })



// let oura = document.querySelector(".oura");
// let ouraVideo = document.querySelector(".oura-video");

// oura.addEventListener("mousemove", (dets)=>{
//     gsap.to(ouraVideo,{
//         x: dets.clientX,
//         y: dets.clientY,
        
//     })
// })

// oura.addEventListener("mouseenter", ()=>{
//     gsap.to(ouraVideo,{
//         scale: 1,
//         opacity: 1,
        
//     })
// })
// oura.addEventListener("mouseleave", ()=>{
//     gsap.to(ouraVideo,{
//         scale: 0,
//         opacity: 0,
        
//     })
// })




// let moxion = document.querySelector(".moxion");
// let moxionVideo = document.querySelector(".moxion-video");

// moxion.addEventListener("mousemove", (dets)=>{
//     gsap.to(moxionVideo, {
//         x: dets.clientX,
//         y: dets.clientY,
//     })
// })

// moxion.addEventListener("mouseenter", ()=>{
//     gsap.to(moxionVideo,{
//         scale: 1,
//         opacity: 1,
        
//     })
// })
// moxion.addEventListener("mouseleave", ()=>{
//     gsap.to(moxionVideo,{
//         scale: 0,
//         opacity: 0,
        
//     })
// })


function loader(){
let topLoader = gsap.timeline();

topLoader.from("#loader h3",{
    x: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2 
})

topLoader.to("#loader h3",{
    opacity: 0,
    x: -20,
    duration: 0.8,
    stagger: 0.2
})
topLoader.to("#loader", {
    opacity: 0,
})
topLoader.from(".brandName span",{
    y: -100,
    opacity:0,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.5,
})
topLoader.to("#loader", {
    display: "none"
})
}
// loader()


function menuBtn(){
    let menuBtn = document.querySelector(".menu-btn");
    
    menuBtn.addEventListener("click", ()=>{
        let menus = document.querySelector(".menus");
        console.log(menus)
        menus.classList.toggle ("menu-list");

        if (menuBtn.innerHTML === "close") {
            menuBtn.innerHTML = "menu";
        } else {
            menuBtn.innerHTML = "close";
        }

        
    })
}
menuBtn()