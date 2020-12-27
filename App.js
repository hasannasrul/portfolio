//----------------------------------  Home Page Animation --------------------------------------

gsap.from(".intro", {
    opacity: 0, 
    y: 100, 
    duration: 1.1
  });

//---------------------------  About Page Animaton -----------------------------------------------

  gsap.from(".about-heading", {
    opacity: 0, 
    y: 100, 
    duration: 1.1
  });

  gsap.from(".about-paragraph", {
    opacity: 0, 
    x: -100, 
    duration: 1.1
  });
  
  // -------------------------- Work Page Animation ---------------------------------------------
  
  gsap.from(".left-card", {
    opacity: 0, 
    x: -250, 
    duration: 1
  });

  gsap.from(".right-card", {
    opacity: 0, 
    x: 250, 
    duration: 1
  });

  // ---------------------------------------------------------------------------

  