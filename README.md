# 프로젝트 소개
* 
* 프로젝트 명 : 대전세잔직업전문학교 Renewal

* 프로젝트 기간 : 2025.08.18 -

* 팀원 : 이정재, 박수림, 이하늘, 전하람

* 배포 링크 : 추후 추가

* 기술 스택
	- Javascript
	- HTML5
	- CSS3
	
* 빌드
	- parcel bundler

---


## 페이지

## 화면 정의서

## git 명령어
* git checkout [branch명]
	- 해당, branch명으로 이동

* git add .
	- 수정 및 작업한 파일 추가

* git commit -m "커밋 메시지"
	- 해당, 작업한 코드를 commit 한다.

* git push origin [branch명]
	- commit 상태의 코드를 branch명에 최신화한다.


### git branch name
* srpark : 수림

* hnlee : 하늘

* hrjeon : 하람


### Parcel Bundler HTML 전부 Build 방법
* glob 패턴 사용

* package.json

```json
"scripts": {
	"build": "parcel build html/*.html"
}
```

* 하위 폴더까지 전부 빌드 시 ?

```json
"scripts": {
  "build": "parcel build \"html/**/*.html\""
}
```