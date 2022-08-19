var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#fullstck",
        start:"center center",
      
        scrub:2,
        pin:true,
        
    
            },
})
tl.from("#frontend_div",{
   
      
    ease:Circ.easeIn,
   
    left:"-40%",
  
    duration:2
},"b")
tl.from("#backend_div",{
  
    ease:Expo.easeIn,
    left:"-80%",
    duration:3
},"b")
tl.from("#database_div",{
  scrub:3,
    ease:Expo.easeIn,
    left:"-90%",
    duration:3
},"b")