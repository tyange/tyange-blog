---
title: "2021 돌아보기"
date: "2022-01-02T01:51:03.481Z"
category: "기록들"
---

## 2020년 말, 퇴사 후 맞은 새해

작년 말, 퇴사를 준비하며 설레는 마음이었다. 모아둔 돈은 거의 없었으므로, 1년 이상 공부를 하기 위해 대출을 알아 보았다. 두 개의 경로로 대출을 받기로 했고, 이 정도의 대출금이면 1년은 문제 없겠다 생각했다. 2020년 12월부터 듣고 싶었던 Udemy 강의를 모두 결제해서 등록했고, 사두고 하지도 못했던 링피트를 매일 아침마다 하기로 했다. HTML과 CSS, 바닐라 자바스크립트와 Express.js, MongoDB 등 웹 개발에 대한 아주 기본적인 지식만 갖고 있던 터라, 내가 점 찍어둔 강의를 모두 다 듣는다고 해도 '혼자서 그럭저럭 사이드 프로젝트를 만들어갈 수준'에 이를 수 있을지 의구심이 드는 건 어쩔 수 없었다. 그래도 일을 마치고 돌아오면 그저 쓰러져 자거나 자기 전까지 유튜브 알고리즘에만 머리를 내맡기고 싶던 시간들을 지나 드디어 '내가 하고 싶은 공부(일)'에 집중할 수 있는 시간이 잔뜩 생긴다는 것이 기뻤다. 그 시간들이 모두 내 것이 되지 않는다고 해도, 그 시간의 일부는 분명 내 것이 되리라고 믿었다.

<br/>
<br/>
<br/>

## 땡큐... 맥스..!

내 강의 목록의 대부분을 차지하는 선생님은 Maximilian Schwarzmüller다. 제일 처음 고른 강의는 'React - The Complete Guide'였다. 이 강의는 평점도 꽤 높고, 후기가 엄청 많았다. 최종으로 결제하기 전에 챕터 별로 커리큘럼을 살펴 봤었는데, 자바스크립트 기초를 간단히 짚어주고 시작해서 굉장히 마음에 들었던 기억이 난다.

나는 이 리액트 강의를 시작으로 맥스의 강의를 총 6개 들었다. 끝까지 다 들었다는 말이다. 코드를 따라치고, 챕터가 끝나면 주어지는 과제도 충실히 했다. 리액트 강의는 21년 여름 쯤에 강의 전체가 업데이트 되어서 한번 더 들었다.

맥스 강의의 장점은 지루할 만큼 기초에 충실하다는 것이다. 내가 여태 들어본 강의(오프라인, 온라인 둘 다)들은 개발 과정이나 프로그래밍 언어, 혹은 프로그래밍 자체의 뒷면, 즉 실제 기능을 떠나서 '어떻게 이런 기능이 구현되는가'에 관해서는 잘 다뤄주지 않았다. 그건 아마도 내가 들었던 강의가 프로그래밍 초보자를 위한 것들이었기 때문이었을지도 모른다. 하지만 나는 설사 그것을 이해하기 어렵더라도 '뒷면에서 일어나는 일(Behind the Scene)'에 관해 알아야만 전체가 이해되는 쪽이어서, '잘 몰라도 이렇게 하면 됩니다'라는 방식보단 간단히라도 난해한 부분의 설명을 듣는 쪽이 좋았다. 맥스는 그 부분을 아주 탁월히 했다. 그리고 초보자들이 도무지 이해하지 못할 내용이라면, 적절히 생략해주기도 했다. 정리하자면, 맥스는 전체를 두고 부분부터 세세하게 공략하는 아주 '기본적이고 확실한' 방법을 택한다.

2021년 동안, React, Angular, Vue, Flutter... Express.js와 MongoDB까지... 맥스 덕분에 프론트엔드에 대한 기초를 다지고 더 나아가서 혼자서 작은 프로젝트를 시작하고 어느정도 완성까지 할 수 있는 수준까지 왔다. 만약 취업을 하거나... 내가 배운 프로그래밍으로 괄목한 성과를 얻는다면, 가장 먼저 맥스에게 이메일을 보내야할 것 같다. thank you... Max..!

<br/>
<br/>
<br/>

## 나의 사이드 프로젝트들

Udemy를 통해 프로그래밍을 공부하는 것과 더불어 사이드 프로젝트를 2개 완성했다. 하나는 React 강의를 들으며 따라서 만들었던 데모 프로젝트인 'burger-builder'(현재는 내가 수강한 'React - the Complete Guide'가 업데이트 되면서 커리큘럼에서 사라진 상태다)를 나만의 방식으로 개조해서 만든 'burger-finder(햄버거 찾기)'다. 처음엔 인공지능(?) 같은 것도 연결해서 만들고 싶었는데, 그게... 햄버거를 찾는 건(비교해서 분석하는 건) 인공지능이 아니라 햄버거에 대한 적절한 데이터 셋이면 되지 않나, 하는 결론에 이르러서... 맥도날드, 롯데리아, 버거킹 등등의 패스트푸드점의 공식 홈페이지에 가서 햄버거에 관한 설명이나 햄버거 사진을 보고 하나씩 재료를 입력했다. `{...beefPatty: 1, onion: 1, tomato: 1...}` 이런 식으로... 아직 햄버거의 데이터 셋이 충분할 양만큼 입력되어 있지도 않고, 재료를 타이핑으로 입력하는 것과 최종적인 분석에 대해서까지, 이 앱이 어떤 방식으로 실행되며 또 어떤 결과를 도출해내는지 유저가 단번에 인식할 수 있는 그래픽 요소가 너무 부족하다. 게다가 CSS도 다른 CSS-Framework를 사용하지 않아서 굉장히 조악한 편이라... 얼른 보완하고 싶지만, 할 일이 많아서 차일피일이다.

두번째로 만든 프로젝트는 '몽노캄(Mongnokam)'이다. 이건 순수히 나의 아이디어로 시작한 프로젝트인데, Github을 사용할 때, 레포지토리를 리스트별로 관리하기가 어려워서(Organization 같은 것을 통해 가능한 것 같지만) 간단히 '깃헙 레포지토리 리스트'를 만들 수 있도록 하는 게 목적이었다. 현재는 파이어베이스를 이용해서 호스팅까지 해놓은 상태다. 작년 말일에서 올해로 넘어오면서, 호스팅된 상태에서 드래그-드랍이 작동하지 않는다는 걸 발견하고 새해 첫날부터 디버깅을 했다. 파이어베이스가 '빈 배열'을 저장하지 않는다(?)게 문제였다. 몽노캄은 리스트 삭제, favorite-list에 대한 부분 등의 보완해야할 부분이 있다.

또 한 가지는, 지금 글을 쓰고 있는 이 홈페이지다. Gatsby.js를 이용했다. Gatsby.js는 오래전에 알고 있었지만, React를 제대로 배우기 전에는 사용해볼 엄두가 나지 않았다. 아무리 공식 문서를 읽어도 무슨 말인지 알 수가 없어서다('어서 빨리 Gatsby.js를 사용해보세요!' 라는 것에 가까워서 React에 관한 지식이 없으면 이해하기가 어렵다고 느꼈었다). 리액트를 배우고 나니 개츠비가 다소 친숙하게 느껴졌고, 전체적인 홈페이지 구조를 짜서 넣고, 블로그 페이지와 포트폴리오 페이지까지 순탄하게 채워 넣을 수 있었다. 포트폴리오 페이지는 원래 약간 카드 게임의... '카드' 형태로 포트폴리오를 보여주는 것이었는데, 역시나 스타일링을 잘 못하는 나에겐, 훌륭한 시인성을 가진 페이지로 만들 수가 없었다. 그러다 포트폴리오를 편하게 둘러 보는 데에 집중할 수 있도록 2021년 12월에 개편했다. 개인 홈페이지이니, 시행착오를 조금 거치더라도 계속적인 업데이트를 이어나가고 싶다.

'햄버거 찾기'는 2021년 3월 쯤 시작해서 올해 9월에야 대충 마무리가 됐고, '몽노캄'은 올해 9월에 시작해서 12월에 마무리가 되었다. 개인 홈페이지는 한달 정도가 걸린 것 같다. 점점 빨라지나, 싶기도 하다. 2021년 나의 목표는 사이드 프로젝트를 4개 이상 하는 것이었다. 이제와 보니 목표가 한없이 높은 목표였던 것 같지만, 3개를 해냈으니... 박수칠 일이다. 짝짝짝...

<br/>
<br/>
<br/>

## 늘 시간에 대한 것

우연히 시작한 프로그래밍이 이제는 최대한 오래, 또 즐겁게 해보고 싶은 일 중 하나가 되었다. 다만 프로그래밍을 배우고 또 실제로 프로그래밍을 하는 데에 드는 시간이 엄청나기 때문에, 동시에 다른 일을 하는 게 매우 어렵다는 사실을 깨달았다. 여자친구와 더 많은 시간을 보내고 싶었지만 늘 하다 남은 공부가, 사이드 프로젝트가 신경이 쓰였다. 운동도 독서도, 원하는 만큼은 하지 못했다.

사이드 프로젝트를 하면서 가장 많이 느끼는 점도 '중요한 건 시간'이라는 것이다. 사실 주어지는 시간이 넘칠 만큼 많다면 코딩을 해서 프로젝트를 완성하는 것은 전혀 문제가 되지 않는다. 문제는 시간은 유한하고, 이 유한한 시간을 나의 마음대로 활용하기가 쉽지 않다는 점이다. 2021년 나의 첫번째 사이드 프로젝트인 '햄버거 찾기'를 시작할 때만 해도 그저 시작만 하면 적어도 두 달 안에 이 소소한 프로젝트를 마무리할 거라고 생각했다. 막상 돌입해보니, 프로젝트의 셋업에서부터 마무리까지 수도 없이 작고 많은 이벤트가 발생했다. 특히 처음, scss를 사용하려고 셋업해두었을 때, 어느 순간부터 로컬에서 작동할 때 에러를 자꾸 뱉어서 확인해보니, 설치한 패키지 중에서 `sass-loader` 원인이라는 걸 알게 되었다. 이건 노드(node.js)의 버전과 리액트의 버전도 고려되어야 하는 문제였고, 문제가 발생한 `sass-loader` 패키지가 업데이트 되기 전까지는 사용할 수 없었다. 결국 모든 scss 확장자를 가진 파일을 css로 바꾸는 것으로 해결을 해야 했다.

결국 프로젝트에 들어가는 시간은 단순히 나의 디버깅이나 코딩 스킬만으로는 줄여지지 않는 '절대적인 시간'이 있다는 걸 알았다. 이 절대적인 시간을 '0'으로 만들 수는 없어도 줄이는 방법은 있다. 바로 계획을 잘 세우는 것! 애초에 어떤 프로그램을 만드는 지 정확하게 파악하고 이에 필요한 툴을 정하고, 그 도구들로 적절하게 작업 환경을 만든다. 이런 사전 계획을 통해 프로그램에 대한 구체적인 밑그림을 그려갈 수 있고, 이 밑그림으로 프로그램을 부분적으로 구획을 나눌 수 있다. 각 구획으로 나눠져 상대적으로 크기가 줄어든 '프로그램 조각'들은, 그것을 만드는데 드는 시간(혹은 비용)을 그나마 실제에 가깝에 예측할 수 있다. 이것만으로도 프로그래밍에 소요되는 '절대적인 시간'을 0으로 수렴시킬 수 있을 거라 생각한다. 물론 모든 시간이 계획대로 흘러가는 건 아니지만 말이다.

<br/>
<br/>
<br/>

## 모든 건 착각에 가까울 것이다

나는 누군가에게 경제적인 지원을 받는 상황이 아니어서 당장 할 수 있는 일을 찾았다. 여러 일, 여러 직장을 전전하면서 나의 미래에 대해서 늘 생각했었지만 답은 없었다. 미래를 위해 준비하는 시간을 가진다는 건, 누군가의 도움 없이는 도무지 불가능 했다. 나는 나를 스스로 돕기 위해 2021년을 보냈다. 생각해보지도 않은 액수의 빚을 지고 그 돈으로 미래를 샀다. 이 미래가 내가 선택하지 못한 다른 미래들보다 나은 것일지, 그건 알 수 없다.

10년간 시를 썼던 것도, 어쩌다 이렇게 코드 에디터로 긴 글을 쓰고 있는 것도 다 착각에서 출발했다.그건 나도 할 수 있으리란 것이었다. 뭘, 어떻게 해야하는지도 모르면서. 앞으로 어떤 일이 일어날지, 전혀 알지 못한 채...