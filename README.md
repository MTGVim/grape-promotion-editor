# 모바일 프로모션 페이지 에디터
https://simple-webpage-builder.web.app/
<kbd>
<img width="1069" alt="image" src="https://github.com/user-attachments/assets/eabc67cf-35b0-4671-90c2-e421cc8a430f" />
</kbd>

# 배경
모바일 프로모션 페이지를 자주 요구하는 회사에 다녔는데, 세로로 길~쭉한 프로모션 페이지에 앱링크를 심어두는 형태로 프로모션이 많이 진행되었다.

device viewport width에 비례하여 버튼의 스케일도 맞춰주어야 하는 요건이었는데, 직접 개발하는 것 보다 쉽고 빠른 방법을 찾지 못해 매번 직접 페이지를 개발하고 S3 등에 배포했었다.

그런데 이걸 매번 직접 개발하려니 시간이 너무 아깝다는 생각이 들었고,

grapeJS 에 프로모션용 block들을 정의하여, 이러한 형태의 프로모션 html을 쉽게 찍어내기 위한 에디터를 만들어서 사용하게 되었다.

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
<kbd>
<img width="804" alt="image" src="https://github.com/user-attachments/assets/a9aa6527-e349-4462-8feb-5341fa9451bc" />
</kbd>
