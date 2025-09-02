import { Routes, Route } from "react-router-dom";
import CommonLayout from "./components/layout/CommonLayout";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Photo from "./pages/Photo";
import Rank from "./pages/Rank";
import Mypage from "./pages/Mypage";
import Report from "./pages/Report"; 
import Chatbot from "./pages/Chatbot";
import PhotoResult from "./pages/PhotoResult";

export default function App() {
    return (
        
        <Routes>
            <Route element={<CommonLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/live" element={<Live />} />
                <Route path="/photo" element={<Photo />} />
                 <Route path="/report" element={<Report />} /> 
                 <Route path="/chatbot" element={<Chatbot />} /> 
                 <Route path="/photo/result" element={<PhotoResult />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/mypage" element={<Mypage />} />
            </Route>
            </Routes>
      
    );
}