// gsap.to("#box1", {
//     x:1000,
//     y:100,
//     duration:3,
//     delay:1,
//     repeat:1,
//     yoyo:1,
//     borderRadius:"50%",
//     backgroundColor:"pink"
// })


var tl = gsap.timeline()

tl.from(".title",{
    y:-20,
    duration:0.5,
    delay:1,
    opacity:0
})

tl.from(".l1",{
    y:-20,
    duration:2,
    delay:1,
    opacity:0,
    stagger:0.2
})