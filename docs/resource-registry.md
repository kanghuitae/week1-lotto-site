# 리소스 레지스트리

프로젝트를 진행하면서 생성한 URL, 계정, 산출물을 한 곳에 모으는 문서입니다.

## 핵심 링크

| 구분 | 값 | 상태 |
| --- | --- | --- |
| 프로덕션 URL | https://week1-lotto-site.vercel.app | 완료 |
| GitHub 저장소 | https://github.com/kanghuitae/week1-lotto-site | 완료 |
| 최종 GitHub 커밋 | https://github.com/kanghuitae/week1-lotto-site/commit/8f91dcb32217a86819f52d8add0616ab1ae30bfe | 완료 |
| 로컬 서버 | http://127.0.0.1:4173 | 완료 |
| 앱 폴더 | `week1-lotto-site` | 완료 |
| 체크리스트 | `jocoding_vibe_coding_checklist.md` | 진행 중 |

## 계정 및 서비스 상태

| 범주 | 서비스 | 상태 | 메모 |
| --- | --- | --- | --- |
| AI 도구 | Codex 데스크톱 앱 | 준비됨 | 개발, 수정, 검증에 사용 |
| 저장소 | GitHub `kanghuitae` | 준비됨 | 공개 저장소 생성 완료 |
| 배포 | Vercel | 준비됨 | 프로덕션 배포 완료 |
| 이메일 | 미정 | 사용자 확인 필요 | 문의/알림/계정 복구용 이메일을 별도로 정해야 함 |
| 분석 | 미정 | 미완료 | Vercel Analytics, Google Analytics, Plausible 중 선택 예정 |
| 광고 | 미정 | 미완료 | Google AdSense 후보 |
| 결제 | 미정 | 미완료 | Stripe, Lemon Squeezy, Toss Payments 후보 |
| DB/폼 | 미정 | 미완료 | Tally, Google Forms, Supabase 후보 |

## 산출물 목록

| 산출물 | 위치 | 목적 |
| --- | --- | --- |
| 로또 번호 추첨기 | `week1-lotto-site/index.html` | 1주차 MVP |
| 스타일 | `week1-lotto-site/styles.css` | 반응형 UI |
| 동작 로직 | `week1-lotto-site/app.js` | 번호 생성, 기록, 복사, 초기화 |
| 배포 안내 | `week1-lotto-site/DEPLOYMENT.md` | Vercel, Netlify, GitHub Pages 배포 절차 |
| 로컬 서버 | `week1-lotto-site/dev-server.mjs` | 정적 파일 미리보기 |
| SEO 파일 | `week1-lotto-site/sitemap.xml`, `week1-lotto-site/robots.txt` | 검색 엔진 기본 설정 |
| 앱 매니페스트 | `week1-lotto-site/manifest.webmanifest` | 설치형 웹앱 기본 정보 |
| 파비콘 | `week1-lotto-site/favicon.svg` | 브랜드 표시 |

## 백업 원칙

- 작업 단위가 끝나면 Git 커밋을 만든다.
- 공개 가능한 코드는 GitHub 저장소에 올린다.
- 배포 가능한 상태는 Vercel 프로덕션 URL로 확인한다.
- 계정 정보, API 키, 결제 키는 코드에 직접 적지 않는다.
- 민감 정보는 `.env` 또는 서비스별 환경 변수에 저장하고 `.gitignore`에 포함한다.
