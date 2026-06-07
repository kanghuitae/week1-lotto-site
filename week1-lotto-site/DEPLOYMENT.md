# Lucky Six 배포 안내

이 앱은 빌드 과정이 없는 정적 웹사이트입니다. 배포 대상 폴더는 `week1-lotto-site`입니다.

현재 프로덕션 URL: https://week1-lotto-site.vercel.app

## Vercel

1. GitHub에 현재 프로젝트를 올립니다.
2. Vercel에서 새 프로젝트를 생성합니다.
3. 이 저장소의 루트에 있는 `vercel.json`을 사용하거나, `week1-lotto-site` 폴더를 프로젝트 루트로 지정합니다.
4. Framework Preset은 `Other`를 선택합니다.
5. Build Command는 비워둡니다.
6. 저장소 루트 기준이면 Output Directory는 `week1-lotto-site`입니다. `week1-lotto-site` 폴더 기준이면 비워둡니다.
7. 배포 후 발급된 URL로 접속해 추첨, 복사, 초기화를 확인합니다.

## Netlify

루트의 `netlify.toml`을 사용하면 됩니다.

1. GitHub 저장소를 Netlify에 연결합니다.
2. Base directory는 `week1-lotto-site`입니다.
3. Publish directory는 `.`입니다.
4. Build command는 비워둡니다.

## GitHub Pages

1. GitHub 저장소의 Pages 설정에서 GitHub Actions 배포를 켭니다.
2. `.github/workflows/deploy-lotto-pages.yml` 워크플로를 사용합니다.
3. 배포 완료 후 Pages URL로 접속해 동작을 확인합니다.

## 배포 후 확인

- 추첨 버튼이 동작한다.
- 1-45 범위의 메인 번호 6개가 중복 없이 생성된다.
- 보너스 번호가 메인 번호와 중복되지 않는다.
- 최근 기록이 최대 5개만 유지된다.
- 복사 버튼이 최신 번호를 복사한다.
- 초기화 버튼이 기록과 화면을 지운다.
- 모바일 폭에서 가로 스크롤이 생기지 않는다.
- 배포 URL을 `jocoding_vibe_coding_checklist.md`에 기록한다.
