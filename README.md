#react_mobx

react에 mobx 적용해서 실습해보기

라이브러리 : autobind-decorator, mobx, mobx-react

# 1. Counter example with mobx

라이브러리: mobx, mobx-react
상태를 전역으로 관리하게 해주는 라이브러리들

## mobx

-   observable

    -   특정 데이터를 관찰되어지는 State들을 위한 데이터로 해주게 하는것

-   computed

    -   성능을 위해 사용하는 api
    -   observable 데이터를 연산을 수행하기 위한 것
    -   캐싱 작업을 진행함 ( 전에 연산작업내용을 그대로 전달함 )

-   action
    -   observable 데이터를 수정하는 작업을 위해 붙인 것
    -   action을 붙이지 않을 경우 observable 데이터 수만큼 렌더링함

## mobx-react

-   Provider

    -   루트(App)에 있는 컴포넌트들에게 사용 가능하게 해줌

-   injext

    -   props에 store에 있는 것들을 주입하고 사용할 수 있게 해주는 것

-   observer
    -   observable 데이터를 관찰하는 컴포넌트에 적용하는 api

ex) observable 데이터 log가 변경할 때마다 console 을 찍어주게 하고싶을떄 사용하는 api는 autorun

obeserver 가 하는 일은 autorun(render) : log가 변경하면 랜더링을 다시한다.

# 2. TodoList with mobx
