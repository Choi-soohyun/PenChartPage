document.addEventListener("DOMContentLoaded", function() {
 
  // 스크롤 이벤트 추가
  window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
      document.querySelector('.scroll-header').classList.add('fixed-top');
    } else {
      document.querySelector('.scroll-header').classList.remove('fixed-top');
    } 
  }); 

  // alert(window.innerWidth)
  
  // const userAgent = navigator.userAgent.toLowerCase();
  // let agent = '';

  // if(userAgent.indexOf('mobile') > -1 || userAgent.indexOf('android') > -1) {
  //   alert('Mobile / ' + navigator.userAgent)
  // } else {
  //   alert('Pc / ' + navigator.userAgent)
  // }

  window.addEventListener('resize', function () {
    init();
  })

  init();
})

// 제일 작은 모바일 수정
const mobile = () => {
  const section1El = document.querySelector('.section1 .title');
  section1El.innerHTML = '차트와 완벽하게<br /> 일체화된<br />태블릿 솔루션<br />이지스 펜차트 출시!';

  const section2El = document.querySelector('.section2 .content .sub-title');
  section2El.innerHTML = '이지스 펜차트,<br />진료서비스 진화의 시작입니다';
  section2El.style.lineHeight = '1.4rem'
  section2El.style.marginBottom = '26px'

  let text = '';
  const section2ElContent = document.querySelector('.section2 .content .sub-sub-title');
  section2ElContent.style.lineHeight = 'inherit'

  text += '환자진료의 핵심인 차트와 더불어 어떤 서비스를<br />'
  text += '제공해드려야 진료의 효율을 높일 수 있을까<br />'
  text += '지속적으로 고민했습니다.<br />'
  text += '이지스 펜차트는 이지스 전자차트와의 시너지를<br />'
  text += '극대화시킨 태블릿 앱 상품으로,<br />'
  text += '의원의 진료 효율뿐만 아니라 더 나아가<br />'
  text += '환자분들에게 제공하는 진료서비스의 질을<br />'
  text += '향상시킬 수 있을 것입니다. '

  section2ElContent.innerHTML = text;
}

const init = () => {  
  if(window.innerWidth < 580) {
    mobile();
  }
}