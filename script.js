gsap.registerPlugin(ScrollTrigger)
gsap.to("#create", {scrollTrigger:".reveal",opacity:'100%', y:'0%', duration:0.3, stagger:0.1, delay:0.1,});
gsap.to("#create2", {scrollTrigger:"#create2",opacity:'100%', y:'0%', duration:0.4, stagger:0, delay:0,});
gsap.to(".demo", {scrollTrigger:".demo", opacity:'100%', duration:0.5, stagger:0, delay:0.2,});
gsap.from(".demo",{scrollTrigger:".demo", x:'20%',y:'22vw', duration:0.9, delay:0.2, });
gsap.to(".demo", {scrollTrigger: {scrub: true}, y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"});    
gsap.from(".line", {scrollTrigger:"#reveal2",opacity:'0', duration: 0.5, width: 1, delay:0,stagger:0.1 }, 0.2);
gsap.from(".line2", {scrollTrigger:"#reveal3",opacity:'0', duration: 0.5, width: 1, delay:0,stagger:0.1 }, 0.2);
gsap.from(".line3", {scrollTrigger:"#reveal3",opacity:'0', duration: 0.5, width: 1, delay:0,stagger:0.1 }, 0.2);
gsap.to(".con", {scrollTrigger:"#reveal3", opacity:'100%', duration:0.5, stagger:0, delay:0.2,});
gsap.to("#show", {scrollTrigger:"#reveal2", x:'0%', duration:0.3, stagger:0.1, delay:0, opacity:1});

//gsap.to(".word1",{
//    scrollTrigger: {
//        trigger: ".word3",
//        start: "top 50%",
//        end: "top 10%",
//        scrub: 0,
//        pin: ".scrub",
//        markers: true,
//    },
//    x:'-100%'
//});
//gsap.to(".word2",{
//    scrollTrigger: {
//        trigger: ".word3",
//        start: "top 50%",
//        end: "top 10%",
//        scrub: 1,
//        pin: ".scrub",
//       markers: true,
//    },
//    x:'-100%'
//});
//gsap.to(".word3",{
//    scrollTrigger: {
//        trigger: ".word3",
//        start: "top 50%",
//        end: "top 10%",
//        scrub: 3,
//        pin: ".scrub",
//       markers: true,
//
//    },
//    x:'-100%'
//});
//var skewSetter = gsap.quickSetter(".col", "skewY", "deg");
//var proxy = {skew:0}

//ScrollTrigger.create({
 //onUpdate: self => {
     // var skew = self.getVelocity() / -300;  
      //console.log(skew)
     // if(Math.abs(skew) > Math.abs(proxy.skew)){
        //  proxy.skew = skew;
   //       gsap.to(proxy,{skew:0, duration:1, ease:"power3", overwrite:true, onUpdate: ()=>skewSetter()})
     // }
//    }q
 // });

 var tl = new TimelineMax({
     paused: true,
 })
 tl.to('.line-icon1', 0.4,{rotation:45, transformOrigin:"center", y:'300%'},0)
 tl.to('.line-icon3', 0.4,{rotation:-45, transformOrigin:"center", y:'-300%'},0)
 tl.to('.line-icon2', 0.4,{ x:'300%'},0)
 tl.to('.menu-container', 0.5, {x:'0%',ease: Expo.easeOut,});
 tl.to('.rightside', 0.5, {height:'100vh', opacity:'100%'})
 tl.to('.line-menu', 0.5, {stagger:0.1, x:'0%', opacity:'100%'})
 tl.to('.nav-title', 0.5, {stagger:0.1, x:'4%',y:'7%', opacity:'100%'})
 tl.to('.serv', 0.4,{stagger:0.1, opacity:'100%'})



 tl.reversed(true);

 document.getElementById('frfrf').addEventListener('click',function(){
     tl.reversed(!tl.reversed());
     if (tl.reversed())
        tl.reverse();
    else
        tl.play();
 })


//becsuk









 var gallery = new TimelineMax({
})

gallery.to('.dash', 3, {height:'100%',},1)
gallery.to('.pic', 1,{opacity:'100%',y:"0%",stagger:0.5,},2)
gallery.to('.element-1', 2,{opacity:'100%',x:"2%",delay:0.7,},0)
gallery.to('.description', 1,{opacity:'100%',y:"0%",},3)
gallery.to('.arrow-1', 1,{opacity:'100%',x:"0%",},3.5)


// fadeout body //
//var fadeout = new TimelineMax({
//    paused: true,
//})
//fadeout.to('body', 0.5, {opacity:0,});
//
//fadeout.reversed(true);
//
//document.getElementById('col7').addEventListener('click',function(){
//    fadeout.reversed(!fadeout.reversed());
//    if (fadeout.reversed())
//       fadeout.reverse();
//   else
//       fadeout.play();
//})




//let box = document.querySelector(".works");
//box.addEventListener(
//        "mouseover", () => {            
//            let droop =  document.querySelectorAll(".col-one")
//            
//            let droopy = gsap.utils.toArray(droop);
//                    droopy.forEach(
//            function(droop){ 
//                
//    let move = gsap.to(droop, { 
//               opacity: 0,
//               duration: 1,
//               ease: "power1.out",})
//               move.reversed(true);
//    
//    move.play();
//     
//     
//     });
//        });
//


//works
let text = document.querySelector('#work',);
let animation = gsap.to(".c-1", 0.3,{paused:true, opacity:0, ease:"expo.out",});

text.addEventListener("mouseenter", () => animation.play());
text.addEventListener("mouseleave", () => animation.reverse());

//stylish
let text2 = document.querySelector('#work2',);
let animation2 = gsap.to(".col-five", 0.3,{paused:true, opacity:0, ease:"expo.out",});

text2.addEventListener("mouseenter", () => animation2.play());
text2.addEventListener("mouseleave", () => animation2.reverse());

//modern
let text3 = document.querySelector('#work3',);
let animation3 = gsap.to(".col-seven", 0.3,{paused:true, opacity:0, ease:"expo.out",});

text3.addEventListener("mouseenter", () => animation3.play());
text3.addEventListener("mouseleave", () => animation3.reverse());

//lorem
let text4 = document.querySelector('#work4',);
let animation4 = gsap.to(".col-nine", 0.3,{paused:true, opacity:0, ease:"expo.out",});

text4.addEventListener("mouseenter", () => animation4.play());
text4.addEventListener("mouseleave", () => animation4.reverse());

//ipsum
let text5 = document.querySelector('#work5',);
let animation5 = gsap.to(".col-eleven", 0.3,{paused:true, opacity:0, ease:"expo.out",});

text5.addEventListener("mouseenter", () => animation5.play());
text5.addEventListener("mouseleave", () => animation5.reverse());




            var cursor = $(".cursor"),
                follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 20,
                            top: posY - 20
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });
                }
            });

            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".col img").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".col img").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });






