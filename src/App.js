import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Index';
import CommandList from "./pages/home/tabPages/CommandList";

function App() {
    return (
      <BrowserRouter>
        <Routes>
        {/* <router-view> */}
          <Route path="/" element={<Home />} >
            <Route path="" element={<CommandList />}></Route>
            <Route path="follow" element={<div>关注</div>}></Route>
            <Route path="hot" element={<div>热榜</div>}></Route>
            <Route path="zvideo" element={<div>视频</div>}></Route>
          </Route>
          <Route path="/education" element={<div>知学堂</div>}></Route>
          <Route path="/xen" element={<div>会员</div>}></Route>
          <Route path="/explore" element={<div>发现</div>}></Route>
          <Route path="/question" element={<div>等你来答</div>}></Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App;

