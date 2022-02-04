import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>hello</h1>} />
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
디테일 페이지로 이동하기 위해서는 <a>태그를 사용해도 되지만
<a>로 사용 할 경우 페이지 전체가 다시 로드된다.
그렇기에 "react-router-dom" <Link>를 이용하여 페이지 전환을 한다.
*/
