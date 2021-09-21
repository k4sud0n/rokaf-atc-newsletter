# 공군훈련소 인터넷편지 뉴스레터

[훈련소 뉴스레터](https://campnews21.com/)에서 크롤링한 뉴스들을 공군훈련소 인편으로 보내드립니다.

(현재 훈련소 뉴스레터는 육군 외에 다른 군을 지원하지 않음)

## 설치

git을 사용해서 설치합니다.

```bash
git clone https://github.com/k4sud0n/rokaf-atc-newsletter.git
```

## 실행

1) npm이나 yarn을 사용해서 필수 모듈들을 설치합니다.

```bash
npm install ## or yarn
```

2) ```.env``` 파일을 생성한뒤, 아래와 같이 작성합니다.

```
TRAINEE_NAME=훈련생 이름
TRAINEE_BIRTH_YEAR=훈련생 생년
TRAINEE_BIRTH_MONTH=훈련생 생월
TRAINEE_BIRTH_DAY=훈련생 생일
SENDER_NAME=보내는이 이름
SENDER_RELATIONSHIP=훈련생과의 관계
SENDER_ADDRESS=보내는이 주소
SENDER_DETAILED_ADDRESS=보내는이 상세 주소
SENDER_PASSWORD=보내는이 비밀번호
```
아래는 예시입니다.
```
TRAINEE_NAME=홍길동
TRAINEE_BIRTH_YEAR=1999
TRAINEE_BIRTH_MONTH=09
TRAINEE_BIRTH_DAY=19
SENDER_NAME=이춘향
SENDER_RELATIONSHIP=친구
SENDER_ADDRESS="경기도 용인시 처인구 모현면 외대로 81" ## 큰따옴표 안에 작성
SENDER_DETAILED_ADDRESS="211동 1802호" ## 큰따옴표 안에 작성
SENDER_PASSWORD=QWER1234
```

3) npm이나 yarn을 사용해 실행합니다.

```bash
npm start ## or yarn start
```

## 라이센스

[MIT](https://choosealicense.com/licenses/mit/)
