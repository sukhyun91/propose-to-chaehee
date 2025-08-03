📦 배포 방법 (GitHub + Vercel)

1. GitHub에서 새 저장소 생성 또는 기존 저장소 사용
2. 이 ZIP 파일 압축 풀고 GitHub에 업로드
   → GitHub 페이지에서 'Add file' → 'Upload files'
3. Vercel 접속 후 "New Project" 클릭
4. GitHub 계정 연동 → 방금 업로드한 저장소 선택
5. Framework: Vite, Root Directory: ./, Build Command: vite build, Output Directory: dist
6. "Deploy" 누르면 자동으로 링크 생성됨

✨ 링크 복사해서 카카오톡에 보내면 완성!

✅ 썸네일, 제목, 설명은 index.html 내 Open Graph 태그 수정 가능
✅ 파일명은 main.jsx 기준으로 바뀜 (Vite 호환)