---
title: "[Next] Image 컴포넌트 외부링크 에러"
type: "issue"
excerpt: "이 에러는 Next에서 Image컴포넌트에서 src props에 외부링크 이미지를 넣으려 할 때 나타난다. 필자는 ibb.co 라는 곳에 이미지를 업로드하여 url로 가져오는 방식을 택하여 진행하던 도중 만났다.."
coverImage: "/assets/blog/next-imagecomp-error/cover.jpg"
date: "2023-04-13"
ogImage:
  url: "/assets/blog/next-imagecomp-error/cover.jpg"
---

&nbsp;

# 문제 상황

Next.js에서 Image 컴포넌트를 사용하여 외부 링크 이미지를 추가하려고 했을 때 다음과 같은 에러가 발생했습니다

Error: Invalid src prop (https://ibb.co/이미지링크) on next/image, hostname "ibb.co" is not configured under images in your next.config.js

이미지를 ibb.co라는 곳에 업로드하고 URL로 가져와 사용하려고 했으나, 호스트 이름 "ibb.co"가 `next.config.js` 파일에 구성되어 있지 않다는 에러 메시지가 나타났습니다.

&nbsp;

&nbsp;

# 해결 방법

에러 메시지를 해결하려면, `next.config.js` 파일을 열고 아래의 코드를 추가해야 합니다:

```javascript
module.exports = {
  images: {
    domains: ["ibb.co"],
  },
};
```

이렇게 수정하면, Next.js 프로젝트에서 ibb.co 도메인의 이미지를 사용할 수 있게 됩니다.

&nbsp;

&nbsp;

&nbsp;

&nbsp;
