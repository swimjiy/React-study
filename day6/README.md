## 리액트 6주차 (2018.12.06)

1. 리액트 폼 다루는 방법



### 리액트 폼 다루는 방법

#### input 폼 처리

onChange()를 이용해 변경사항 감지 -> 단방향 바인딩 : 상태가 뷰를 갱신

일반 input에서는 onChange() 랑 onSubmit() 두 개를 많이 사용 (P61Basic.js)

콤보박스의 경우에도 onCHange()로 변경사항 캐치하고, 디폴트 값은 select태그에 option value값을 주가한다.



#### 라디오박스 폼 처리

checked할 떄 state로 true/false값을 찾는 것이 체크박스와 다른 점



#### textatea, password 폼 처리

onInput() 사용할 경우 defaultvalue 사용이 안됨. 이유는 모름.

리액트에서는 가급적 onChange()를 사용하고, onInput()는 리액트 네이티브??일 때 사용하는 것이 좋다.



#### Azure 

마소 무료 클라우드 서비스

vsc에서 azure storage 확장프로그램 설치

surge는 https://는 유료라서 이걸로 한 번 해보자





