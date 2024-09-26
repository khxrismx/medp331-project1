let sections = document.querySelectorAll('section');
let body = document.body;

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}

$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    });    
    
  }).scroll();

  document.addEventListener("DOMContentLoaded", (event) =>{
    gsap.to('.img',{
        duration: 2,
        y:50,
        repeat: -1,
    })
  });

  //audio
  const spacing = document.getElementById('spacing');
  const lice = document.getElementById('lice');

  lice.addEventListener('mouseenter', () =>{
    spacing.play();
  });

  lice.addEventListener('mouseleave', () =>{
    console.log('mouse left');
    spacing.pause();
  });

  const dance = document.getElementById('dance');
  const patched = document.getElementById('patched-up');

  patched.addEventListener('mouseenter', () =>{
    dance.play();
  });

  patched.addEventListener('mouseleave', () =>{
    console.log('mouse left');
    dance.pause();
  });

  const soren = document.getElementById('soren');
  const loveworm = document.getElementById('loveworm');

  loveworm.addEventListener('mouseenter', () =>{
    soren.play();
  });

  loveworm.addEventListener('mouseleave', () =>{
    console.log('mouse left');
    soren.pause();
  });

  const space = document.getElementById('space-cadet');
  const bass = document.getElementById('bass');

  space.addEventListener('mouseenter', () =>{
    bass.play();
  });

  space.addEventListener('mouseleave', () =>{
    console.log('mouse left');
    bass.pause();
  });

  const cologne = document.getElementById('cologne');
  const extended = document.getElementById('extended-play');

  extended.addEventListener('mouseenter', () =>{
    cologne.play();
  });

  extended.addEventListener('mouseleave', () =>{
    console.log('mouse left');
    cologne.pause();
  });