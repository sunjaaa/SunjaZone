---
title: "[Next] 런타임 타입 체크 사용하기"
type: "issue"
excerpt: "Next.js 13.2.4 버전은 런타임 타입체킹을 지원하지 않습니다. 하지만 `concurrently` 패키지를 사용하여 Next.js 개발 서버와 TypeScript 컴파일러의 파일 변경 감지..."
coverImage: "/assets/blog/next-runtime-typecheck-error/cover.jpg"
date: "2023-04-22"
ogImage:
  url: "/assets/blog/next-runtime-typecheck-error/cover.jpg"
---

&nbsp;

# Next.js 타입스크립트에서 런타임 타입 체크 사용하기

Next.js 13.2.4 버전은 런타임 타입체킹을 지원하지 않습니다. 하지만 **`concurrently`** 패키지를 사용하여 Next.js 개발 서버와 TypeScript 컴파일러의 파일 변경 감지 모드를 동시에 실행하여 타입 오류를 확인할 수 있습니다.

&nbsp;

&nbsp;

## 왜?

이분의 글에 엄청 자세히 정리되어있다 (꼭 읽어보기 바람) => [https://velog.io/@giriboy/](https://velog.io/@giriboy/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%9F%B0%ED%83%80%EC%9E%84-%ED%83%80%EC%9E%85-%EC%B2%B4%ED%81%AC)

&nbsp;

&nbsp;

## 준비하기

먼저 **`concurrently`** 패키지를 설치해야 합니다. 개발용으로만 설치해주세요:

```
npm install -D concurrently
```

&nbsp;

&nbsp;
그런 다음 package.json 파일의 scripts 섹션에 다음을 추가하세요:

```
"scripts": {
  "dev": "next dev",
  "dev:tscheck": "concurrently -n NEXT,TS -c magenta,cyan \"npm run dev\" \"tsc --watch\""
}
```

&nbsp;

&nbsp;

## 실행하기

이제 npm run dev:tscheck 명령을 실행하면 Next.js 개발 서버와 TypeScript 컴파일러가 동시에 실행됩니다. 이렇게 하면 개발 중에 TypeScript 타입 오류를 즉시 확인할 수 있습니다.

&nbsp;

&nbsp;

## 요약

Next.js 13.2.4 버전은 런타임 타입체킹을 지원하지 않습니다.
concurrently 패키지를 사용하여 타입 오류를 확인할 수 있습니다.
개발 서버와 타입스크립트 컴파일러를 동시에 실행할 수 있습니다.
이 방법으로 개발 중 타입 오류를 즉시 확인할 수 있습니다.

&nbsp;

&nbsp;

&nbsp;

&nbsp;
