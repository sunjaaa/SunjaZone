---
title: "[JavaScript] 객체 리터럴"
type: "blog"
excerpt: "JavaScript에서 객체를 생성하는 가장 간단한 방법 중 하나는 **객체 리터럴(Object literal)**을 사용하는 것이다. 이 글에서는 객체 리터럴..."
coverImage: "/assets/blog/object-literal/cover.jpg"
date: "2023-04-21"
ogImage:
  url: "/assets/blog/object-literal/cover.jpg"
---

&nbsp;

# JavaScript 객체 리터럴에 대해 알아보기

JavaScript에서 객체를 생성하는 가장 간단한 방법 중 하나는 **객체 리터럴(Object literal)**을 사용하는 것이다. 이 글에서는 객체 리터럴에 대해 알아보자

&nbsp;

&nbsp;

## 객체 리터럴이란?

객체 리터럴은 중괄호(`{}`)로 묶인 키-값 쌍의 집합으로 구성된 객체를 생성하는 문법입니다. 키와 값은 콜론(`:`)으로 구분되며, 각 키-값 쌍은 콤마(`,`)로 구분됩니다.

&nbsp;

&nbsp;

### 객체 리터럴 예제

```javascript
const person = {
  firstName: "Chanho",
  lastName: "Kim",
  age: 20,
  greet: function () {
    const { firstName, lastName } = this;
    console.log(`Hello, ${firstName} ${lastName}`);
  },
};
```

위 예제에서, person이라는 객체가 생성되었고, firstName, lastName, age, greet라는 키와 그에 해당하는 값을 갖습니다. 이렇게 객체 리터럴을 사용하면 간단하게 객체를 생성하고 값을 할당할 수 있습니다.

&nbsp;

&nbsp;

# 객체 리터럴의 장점

간결성: 객체 리터럴을 사용하면 코드를 간결하게 작성할 수 있습니다.
읽기 쉬움: 객체 리터럴은 키-값 쌍이 명시적으로 나열되어 있어, 코드를 읽기 쉽습니다.

&nbsp;

&nbsp;

# 결론

객체 리터럴은 JavaScript에서 객체를 생성하고 관리하는 간편한 방법입니다. 코드를 간결하게 작성할 수 있고, 가독성이 높다는 장점이 있습니다.

&nbsp;

&nbsp;

&nbsp;

&nbsp;
