# Project2SMD

## 개발 환경 구성
[Express 서버와 React: Proxy 활용과 빌드 및 헤로쿠(Heroku) 배포 | Chaewon Kong’s Blog] (https://chaewonkong.github.io/react/2018/12/21/express-with-react/)
해당 내용을 참고하여 팀 프로젝트를 위한 구조 잡기

|Requirements | Version|
|:---|:---|
|Node.js | v10.16.0|
|create-react-app|3.0.1|
|yarn|1.17.3|

### 프로젝트 생성 과정
- github에서 Repository 생성
- git clone ... 으로 github에서 생성한 프로젝트를 로컬 환경에 저장

해당 프로젝트 경로로 들어가서
```
yarn init
```

콘솔 창에서 설정 내용 확인 후 package.json 생성 확인
- entry point를 server.js로 지정
- 최초 버전은 0.0.1

[SW 라이브러리 버전 제대로 읽기 | Writer, IT Blog] (https://futurecreator.github.io/2018/09/09/software-versioning/)
SemVer(Semantic Versioning)이라 부르는 듯

### express + nodemon 설치
```
yarn add express nodemon
```

./server.js 파일 작성
```
const express = require('express');
const path = require('path');
const app = express()

app.get("/api/greeting", (req,res) => {
  res.send("Hello World!")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);
```

./package.json 수정
```
  "scripts": {
    "server": "nodemon server.js"
  },
```
"dependencies" 위에 추가 후 콘솔에서
```
yarn run server
```
서버 구동 확인, http://localhost:5000/api/greeting

### react client 폴더 생성
```
yarn create react-app client
```
CRA 명령어로 client폴더 생성 확인

### 프록시 설정
3000포트로 실행중인 react서버에서 5000포트 express서버의 api/greeting에 접근하기
```
yarn add http-proxy-middleware
```

### server/client 동시 실행하기
```
yarn add concurrently
```
추가 모듈 설치하고
express쪽 package.json 수정

```
  "scripts": {
    "server": "nodemon server.js",
    "client": "cd client && yarn run start --prefix client",
    "dev": "concurrently \"yarn run server\" \"yarn run client\""
  },
```

이제 
```
yarn run dev
```
두개의 서버 동시 실행 가능
--prefix client 무슨 의민지 모르겠다

## 배포 설정
```
git branch build1
git checkout build1
git tag v0.1.1
```
git dev/production 별도 브랜치 관리
버전별로 tag 지정, 버전은 그냥 맘대로 붙임

```
cd client
yarn build
```
client폴더로 이동해서 react 소스 빌드
이후 클라이언트 폴더의 .gitignore 수정 > 빌드 폴더 포함으로
프로젝트 루트 폴더의 package.json에서 
```
  "scripts": {
    "heroku-postbuild": "cd client && yarn install && yarn build",
    ...
```
헤로쿠(Heroku) 배포를 위한 스크립트 추가


## 헤로쿠 설치 및 배포
https://devcenter.heroku.com/articles/heroku-cli#windows
Heroku CLI 다운 및 Heroku 회원 가입
설치 완료 후
VS Code 완전 다 껐다 키면 VS Code의 터미널 창에서 heroku 명령어 사용가능
```
$ heroku login
heroku: Press any key to open up the browser to login or q to exit: 
Opening browser to https://cli-auth.heroku.com/auth/browser/8cde79b1-77e9-4026-af02-1e6d0b67f24e
Logging in... done
Logged in as leilai.dev@gmail.com
```

```
$ heroku create
Creating app... done, ⬢ still-gorge-85907
https://still-gorge-85907.herokuapp.com/ | https://git.heroku.com/still-gorge-85907.git
```

```
$ git remote -v
heroku  https://git.heroku.com/still-gorge-85907.git (fetch)
heroku  https://git.heroku.com/still-gorge-85907.git (push)
origin  https://github.com/leilai-dev/Project2SMD.git (fetch)
origin  https://github.com/leilai-dev/Project2SMD.git (push)
```

여기까지 완료 후 첫 번째 배포 작업 커밋함

이후 

잘 안됨

헤로쿠 들어가서 설정 변경하여 배포 성공

https://still-gorge-85907.herokuapp.com/
build1에 변경점 있을 경우
git push heroku build1
헤로쿠 저장소에 푸시하면 자동 빌드.