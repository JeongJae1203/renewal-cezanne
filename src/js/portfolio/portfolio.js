document.addEventListener('DOMContentLoaded', () => {
  

// a태그에 링크가 없는 경우
document.addEventListener('click', (e) => {
  if(e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }
});


const licenseDiv = document.querySelector('.license')
    , tabList = licenseDiv.querySelector('.tab__list')
    , licenseTab = licenseDiv.querySelectorAll('.license__tab')
    , tab1 = licenseDiv.querySelector('#tab1')
    , tab2 = licenseDiv.querySelector('#tab2')
    , tab3 = licenseDiv.querySelector('#tab3')
    , tab4 = licenseDiv.querySelector('#tab4');

  // console.log(licenseDiv, tabList, licenseTab)
  // console.log(tab1)
  
  licenseTab.forEach((locense) => {
    console.log(locense)
  })

  // locense.addEventListener('click', () => {
  //   location.href = '#tab1';
  // });


// tabEls :: license__tab
// tabWrap :: tab__contents
// tabContentEls :: tab__content 
// clazz :: active
  const licenseEl = document.querySelector('.license')
      , tabEls = licenseEl.querySelectorAll('.license__tab')
      , tabWrap = licenseEl.querySelector('.tab__contents')
      , tabContentEls = licenseEl.querySelectorAll('.tab__content')
      , clazz = 'active';


  const createTab = (tabEls, tabWrap, tabContentEls, clazz) => {

    tabEls.forEach(tab => {
      // 각 탭 클릭시 실행 
      tab.addEventListener('click', (e) => { 
        e.preventDefault();
        
        // dataset.target으로 연결된 id 찾기
        // TARGET 은 이벤트가 걸린 대상에서 데이터 타겟이거나 공백
        // contentEl은 포트폴리오 리스트(tab__contents)에서 찾았을 때 
        // #이랑 data-target을 합친 값인 ex.) #teb1 :: id를 찾음
        // data-target에서 target은 다른걸로 바꿀 수 있음 
        // 두개 이상이면 js 에서 사용할 때.dataset.target 가 아닌
        // 카멜 케이스로 사용 ex. data-name일 경우) datasetName
        const TARGET = e.currentTarget.dataset.target || ''
            , contentEl = tabWrap.querySelector('#' + TARGET);

        // tabEls :: license__tab임
        // clazz :: active
        tabEls.forEach(tabEl => {
          tabEl.parentElement.classList.remove(clazz);
          // forEach -> tabEl 하나씩 꺼냄
          // tabEl의 부모Element는 li class="active"임
          // li에 있는 classList에서 active를 지움
        });

        // 포트폴리오 리스트(li)에서 #tab1번에 있는 active를 지움
        tabContentEls.forEach(tabContEl => {
          tabContEl.classList.remove(clazz);
        });

        e.currentTarget.parentElement.classList.add(clazz);
        contentEl.classList.add(clazz);
      });
    });
  }
  
  createTab(tabEls, tabWrap, tabContentEls, clazz);
});