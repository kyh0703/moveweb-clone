import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
gh pages 배포 방법
1. npm i gh-pages
2. npm run build
3. package json
  "homepage": "https://kyh0703.github.io/movie-clone"
4. mdfy script
  deploy를 실행하면 predeploy가 실행된다.
  "deploy": "gh-pages -d build",
  "predeploy": "npm run build"
5. build 파일을 지정한 "homepage"로 배포한다.
*/