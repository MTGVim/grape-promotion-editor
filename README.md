# 모바일 프로모션 페이지 에디터
모바일 타겟의 간단한 정적 프로모션 html을 쉽게 찍어낼 수 있도록 도와줍니다.

https://simple-webpage-builder.web.app/

<kbd>
<img width="420" alt="image" src="https://github.com/user-attachments/assets/eabc67cf-35b0-4671-90c2-e421cc8a430f" />
</kbd>
<kbd>
<img width="480" alt="image" src="https://github.com/user-attachments/assets/a9aa6527-e349-4462-8feb-5341fa9451bc" />
</kbd>


# 배경
모바일 프로모션 페이지를 자주 요구하는 회사에 다녔는데, 세로로 길~쭉한 프로모션 페이지에 버튼을 달아두는 형태의 프로모션 페이지를 매번 퍼를리싱 해야 했어요.

device viewport width에 비례하여 버튼의 스케일도 맞춰주어야 하는 요건이었는데, 직접 개발하는 것 보다 쉽고 빠른 방법을 찾지 못해 매번 직접 페이지를 개발해 S3에 올렸답니다..

어느 날 시간이 너무 아깝다는 생각이 들었고, 도구를 직접 만들어야겠다는 결론을 내렸어요.

당시에 살펴보기에는 제가 원하는 wyswig 정적 웹 생성기의 기반으로는 [grapeJS](https://github.com/GrapesJS/grapesjs) 가 괜찮아보였고,

여기에 프로모션용 이미지/버튼 블록을 추가하여 만든것이 모바일 프로모션 페이지 에디터입니다.

# 준비물
1. 프로모션 이미지
2. 버튼 별 클릭 시 연결할 url

# 사용법
1. 에디터를 실행하고, template 블록을 canvas에 끌어다 둔다.
2. 이미지 노드와 버튼 노드가 생성되는데, 이미지 노드에 원하는 프로모션 이미지를 집어넣는다. (버튼까지 포함된 이미지)
3. 버튼의 위치를 조정하고, 창의 너비변화에 따라 클릭가능 범위가 잘 유지되는지 확인한다.
4. 버튼의 id와 Link 값을 채우고, Link ready를 체크한 다음, 버튼을 눌러 제대로 동작하는 지 확인한다.
5. 버튼이 더 있는경우 버튼 블록을 canvas에 집어넣고 3~4를 반복한다.
6. zip으로 export하여 배포한다.
