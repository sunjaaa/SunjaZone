---
title: "고차 함수(Higher-Order Functions)에 대해 알아보자"
type: "blog"
excerpt: "고차 함수(higher-order function)란 함수를 인자로 받거나 함수를 반환하는 함수입니다.  
고차 함수는 함수형 프로그래밍에서 흔히 볼 수 있는 패턴으로..."
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2023-04-26"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

&nbsp;

# 고차 함수 이해하기

고차 함수(higher-order function)란 함수를 인자로 받거나 함수를 반환하는 함수입니다.  
고차 함수는 함수형 프로그래밍에서 흔히 볼 수 있는 패턴으로, 여러 가지 추상화를 가능하게 합니다.  
일반 함수는 고차 함수와 달리 함수를 인자로 받지 않고 함수를 반환하지 않습니다.

&nbsp;

&nbsp;

## 예제로 알아보는 고차 함수

```javascript
const multiplyBy = (factor) => {
  return (number) => {
    return number * factor;
  };
};

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);

console.log(multiplyByTwo(4)); // 8
console.log(multiplyByThree(4)); // 12
```

이 예제에서 multiplyBy는 고차 함수입니다. factor를 인자로 받아서 새로운 함수를 반환합니다.  
반환된 함수는 number를 인자로 받아 원래의 factor와 곱한 값을 반환합니다.

&nbsp;

&nbsp;

## 일반 함수와 고차 함수의 차이점

일반 함수는 함수를 인자로 받거나 함수를 반환하지 않지만, 고차 함수는 함수를 인자로 받거나 함수를 반환합니다.  
고차 함수를 사용하면 더 추상화된 코드를 작성할 수 있습니다. 코드를 재사용하고 확장하기 쉽게 만들 수 있습니다.  
고차 함수는 함수형 프로그래밍에서 일반적으로 사용되며, 상태를 변경하지 않고 부작용을 최소화하는 것에 초점을 맞춥니다.  
일반 함수는 상태 변경과 부작용이 더 일반적일 수 있습니다.

&nbsp;

&nbsp;

## 결론

고차 함수는 함수를 인자로 받거나 함수를 반환하는 함수로, 코드의 모듈화와 재사용성을 높이는 데 큰 역할을 합니다.  
일반 함수와의 차이점을 이해하고 고차 함수를 활용하면 더욱 강력한 프로그래밍이 가능합니다.  
특히 함수형 프로그래밍에서 고차 함수는 핵심 개념으로, 상태 변경과 부작용을 최소화하여 코드의 안정성과 가독성을 높입니다.  
고차 함수를 이해하고 사용하면 더 효율적이고 유연한 코드 작성이 가능해질 것입니다.

&nbsp;

&nbsp;

&nbsp;

&nbsp;
