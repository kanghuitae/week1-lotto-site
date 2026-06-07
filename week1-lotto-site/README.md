# Lucky Six

1주차 실습용 정적 웹앱입니다. 중복 없는 로또 번호 6개와 보너스 번호를 생성하고 최근 5회 기록을 보여줍니다.

## 실행

`index.html` 파일을 브라우저에서 열면 바로 실행됩니다.

로컬 서버로 확인하려면 아래 명령을 실행합니다.

```powershell
node dev-server.mjs
```

브라우저 주소는 `http://127.0.0.1:4173`입니다.

## 배포

이 앱은 빌드가 필요 없는 정적 사이트입니다.

현재 프로덕션 URL:

https://week1-lotto-site.vercel.app

- Vercel: 루트의 `vercel.json` 사용
- Netlify: 루트의 `netlify.toml` 사용
- GitHub Pages: `.github/workflows/deploy-lotto-pages.yml` 사용

상세 절차는 `DEPLOYMENT.md`에 정리했습니다.

## 포함 기능

- 중복 없는 번호 6개 생성
- 보너스 번호 생성
- 번호 구간별 색상 표시
- 최근 5회 기록
- 최신 번호 복사
- 기록 초기화
