document.addEventListener("DOMContentLoaded", function() {
  let resizeSmall = false;
  
  // 스크롤 이벤트 추가
  window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
      document.querySelector('.scroll-header').classList.add('fixed-top');
    } else {
      document.querySelector('.scroll-header').classList.remove('fixed-top');
    } 
  }); 


  window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;

    if(windowWidth < 580 && !resizeSmall) {
      resizeSmall = true;
    }
  })
  // alert(window.innerWidth)
  
  // const userAgent = navigator.userAgent.toLowerCase();
  // let agent = '';

  // if(userAgent.indexOf('mobile') > -1 || userAgent.indexOf('android') > -1) {
  //   alert('Mobile / ' + navigator.userAgent)
  // } else {
  //   alert('Pc / ' + navigator.userAgent)
  // }
})
