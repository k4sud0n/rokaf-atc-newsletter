# 공군훈련소 인터넷편지 뉴스레터

[훈련소 뉴스레터](https://campnews21.com/)에서 크롤링한 뉴스들을 공군훈련소 인편으로 보내드립니다.

(현재 훈련소 뉴스레터는 육군 외에 다른 군을 지원하지 않음)

## 설치

git을 사용해서 설치합니다.

```bash
git clone https://github.com/k4sud0n/rokaf-atc-newsletter.git
```

## 실행

1) npm을 사용해서 필수 모듈들을 설치합니다.

```bash
npm install
```

2) ```.env``` 파일을 생성한뒤, 아래와 같이 작성합니다.

```
NAME=이름
BIRTH_YEAR=생일년도
BIRTH_MONTH=생일월
BIRTH_DAY=생일일
PASSWORD=비밀번호
```
아래는 예시입니다.
```
NAME=홍길동
BIRTH_YEAR=1999
BIRTH_MONTH=09
BIRTH_DAY=19
PASSWORD=QWER1234
```

3) npm을 사용해 실행합니다.

```bash
npm start
```



## License

[MIT](https://choosealicense.com/licenses/mit/)
