# 프로젝트 소개

* 
* 프로젝트 명 : 대전세잔직업전문학교 Renewal
* 프로젝트 기간 : 2025.06.20 -
* 팀원 : 이정재, 박수림, 이하늘, 전하람
* 배포 링크 : 추후 추가

## 페이지

## 화면 정의서

## git 명령어
* git branch [branch명]
	- 하위 브랜치 생성

* git pull origin master
	- master 브랜치의 코드 받아온다.

* git checkout [branch명]
	- 해당, branch명으로 이동

* git commit -m "커밋 메시지"
	- 해당, 작업한 코드를 commit 한다.

* git push origin master
	- commit 상태의 코드를 master branch에 최신화한다.

### git 사용 시 주의사항
```
	반드시, 아래의 순서를 지킬 수 있도록 하세요.
```
1. git branch `본인 이니셜`
	- 그럼, 본인 branch 생성

2. git pull origin master

3. git checkout `본인 이니셜`

4. (만약, 작업한 코드가 있고, master branch에 올려야 한다.)
	- git add .
	- git commit -m "작업 내용 영어로"

5. git checkout master

6. git pull origin master

7. (만약, pull 받았는데, 받을 코드가 없을 경우)
	- git merge `본인 이니셜`

8. git push origin master