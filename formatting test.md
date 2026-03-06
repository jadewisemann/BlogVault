---
title: 블로그 마크다운 스타일 테스트
date: 2026-03-06
---

# Heading 1 (가장 큰 제목)
여기는 일반적인 문단(Paragraph)입니다. CSS 변수를 사용하여 가독성 좋은 리딩 환경을 제공하며 다크모드/라이트모드가 시스템 설정에 따라 자동 전환됩니다.

## Heading 2 (섹션 제목)
일반 텍스트 안에서 **굵게(Bold)**, *기울임(Italic)*, ~~취소선(Strikethrough)~~ 처리를 할 수 있습니다.

### Heading 3 (소주제)
글머리 기호(List) 목록 테스트입니다.
* 리스트 아이템 1
* 리스트 아이템 2
  * 중첩 리스트 A
  * 중첩 리스트 B
* 리스트 아이템 3

번호 매기기(Ordered List):
1. 첫 번째 순서
2. 두 번째 순서
3. 세 번째 순서

---

## 옵시디언 특화 문법 테스트

### 1. 위키링크 (Wiki Links)
이 블로그는 옵시디언의 양방향 링크 형식인 [[first note]] 파일이나 [[link test]] 파일로 부드럽게 연결되는 전용 컴포넌트 라우팅을 지원합니다. (외부 링크: [Google](https://google.com))

### 2. 콜아웃 (Callouts)

> [!note] 노트 (Note)
> 가장 기본적인 형태의 정보성 콜아웃입니다. 이것은 커스텀 Vercel Composition 컴포넌트로 파싱되어 네이티브하게 렌더링됩니다.

> [!info] 정보 (Info)
> 추가적인 배경 설정이나 정보를 제공할 때 사용합니다.

> [!warning] 경고문 (Warning)
> 에러나 중요한 주의사항을 알려줄 때 사용할 수 있는 콜아웃 지원입니다. 

---

## 코드 및 인용구 포매팅

이것은 일상적인 블록 인용구문 (Blockquote) 입니다.
> 디자인이란 어떻게 생겼는지, 어떻게 느껴지는지만을 뜻하는 것이 아니다. 디자인이란 어떻게 작동하는가이다. - 스티브 잡스

글 중간에 삽입하는 인라인 코드는 `npm run build` 와 같이 회색 배경으로 깔끔하게 처리됩니다.

```javascript
// 다중 라인 코드 블록 (Code Block)
function calculateOptimalPerformance() {
  const vercelSpeed = "blazing fast";
  const ssgPreRendered = true;
  
  if (ssgPreRendered) {
    console.log(`Your blog is ${vercelSpeed}!`);
  }
}

```

