# React 개념잡기
[Hello World – React] (https://ko.reactjs.org/docs/hello-world.html)
위 내용을 바탕으로
## JSX

## 컴포넌트
컴포넌트 기반 개발 방식?
CBD (Component based development)
[4.3.1. CBD방법론의 컴포넌트란? - IT 기술 노트] (https://wikidocs.net/22345)

### React의 컴포넌트
[컴포넌트 제대로 만들기 | DailyEngineering] (https://hyunseob.github.io/2019/06/02/react-component-the-right-way/)
내용이 좀 방대하다
대강 이러한 컴포넌트는 객체 지향 설계 관점에서 단일 책임 원칙에 해당한다 볼 수 있음 (잘 모름)
[React로 사고하기 – React] (https://ko.reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy)

[SOLID (객체 지향 설계) - 위키백과, 우리 모두의 백과사전] (https://ko.wikipedia.org/wiki/SOLID_(객체_지향_설계))
[SOLID 원칙] (https://dev-momo.tistory.com/entry/SOLID-원칙)

## Props
Property. 속성. 
## State

## Event life cycle

상기 내용에 대해 충분히 이해하고 나서 Hooks / Context / Redux 등 더 알아보기

## 종합적으로 설명 잘된 글
[React의 기본, 컴포넌트를 알아보자 - little big programming - Medium] (https://medium.com/little-big-programming/react의-기본-컴포넌트를-알아보자-92c923011818)


# react-router-dom
클라이언트인데 라우팅이 왜 필요한가?
- 리액트는 SPA (Single page application) > 서버-클라이언트 req/res 통신이 하나의 페이지에서 이루어지는 구조
- 그럼에도 불구하고 여러 페이지를 하나의 페이지에서 보여주겠다.

## 참고 예제
[react-router :: 1장. 리액트 라우터 사용해보기 | VELOPERT.LOG] (https://velopert.com/3417)
해당 글의 설명 내용을 바탕으로
[vlpt-playground/advanced-rr4-tutorial at basic] (https://github.com/vlpt-playground/advanced-rr4-tutorial/tree/basic)
깃헙에 올린 샘플 중 basic 브랜치 내용으로 구조 잡기

### react-router-dom 컴포넌트 예제
[React Router: Declarative Routing for React.js] (https://reacttraining.com/react-router/web/guides/quick-start)

## reactstrap과 함께 쓰기
reactstrap의 NavLink와 react-router-dom의 NavLink 컴포넌트가 겹침
[how to use reactstrap navbar with react-router-dom? [Solved] · Issue #1285 · reactstrap/reactstrap] (https://github.com/reactstrap/reactstrap/issues/1285)
