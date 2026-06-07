# 개발 환경

## 선택한 도구

| 구분 | 도구 | 확인 결과 |
| --- | --- | --- |
| AI 코딩 도구 | Codex 데스크톱 앱 | 사용 중 |
| 런타임 | Node.js `v20.10.0` | 동작 확인 |
| 버전 관리 | Git `2.42.0.windows.1` | 동작 확인 |
| 배포 CLI | Vercel CLI `54.9.1` | 동작 확인 |
| 브라우저 확인 | Codex in-app browser | 로컬/프로덕션 확인 완료 |
| 로컬 서버 | `node dev-server.mjs` | `http://127.0.0.1:4173` |
| 클라우드 개발 환경 | 사용하지 않음 | 로컬 폴더, Codex, GitHub, Vercel 조합으로 진행 |

## Git과 GitHub의 역할

- Git은 로컬 작업 폴더에서 변경 이력을 만들고 비교하는 도구다.
- GitHub는 그 변경 이력을 원격 저장소에 올려 백업하고 공유하는 서비스다.
- 이번 프로젝트에서는 로컬 Git 커밋을 만들고, GitHub 공개 저장소에 소스 파일을 업로드했다.
- 배포 플랫폼은 GitHub 저장소 또는 로컬 폴더를 기준으로 프로덕션 사이트를 만들 수 있다.

## 실행 명령

```powershell
cd "C:\Users\Administrator\Documents\New project\week1-lotto-site"
node dev-server.mjs
```

프로젝트 루트에서 확인한 명령:

```powershell
node --version
git --version
npx vercel --version
```

## 브라우저 개발자 도구

- Chrome 또는 Edge에서 `F12`를 누른다.
- 요소 확인은 `Elements` 탭에서 한다.
- JavaScript 오류는 `Console` 탭에서 확인한다.
- 네트워크 요청과 파일 응답은 `Network` 탭에서 확인한다.
- 모바일 화면은 디바이스 툴바에서 폭을 바꿔 확인한다.

## 보안 원칙

- API 키, 로그인 토큰, 결제 키를 HTML, CSS, JavaScript 파일에 직접 적지 않는다.
- 공개 저장소에 올라가도 되는 값과 비밀 값을 구분한다.
- 비밀 값은 Vercel 환경 변수 또는 로컬 `.env` 파일에 저장한다.
- `.env`, `.vercel`, 로그 파일은 Git에 올리지 않는다.
- AI가 만든 코드는 배포 전 직접 읽고, 로컬 실행과 프로덕션 확인을 거친다.

## 변경 검수 습관

1. 변경 전 `git status`로 현재 상태를 확인한다.
2. 작은 단위로 파일을 수정한다.
3. 로컬 브라우저에서 기능을 확인한다.
4. `git diff`로 변경 내용을 읽는다.
5. 배포 후 프로덕션 URL에서 다시 확인한다.

## 첫 AI 수정 작업

- 작업: `Lucky Six` 정적 사이트를 만들고 배포 설정, SEO 파일, 문서, 체크리스트를 보강했다.
- 확인: 로컬 서버, 프로덕션 URL, GitHub 저장소 파일 조회, HTTP 응답을 확인했다.
- 원칙: AI가 만든 결과도 배포 전후로 직접 검증하고, 체크리스트에는 검증된 항목만 완료 처리한다.

## 추후 개선

현재 Node.js `v20.10.0`에서도 배포는 완료됐지만, 최신 Vercel CLI 일부 의존성은 Node.js `20.19+` 또는 `22.12+`를 권장한다. 다음 환경 정리 때 Node.js LTS를 최신 패치 버전으로 올린다.
