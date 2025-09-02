import React from 'react';
import './Mypage.css';
import { Link } from 'react-router-dom';


const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;

export default function Mypage() {

    const menuItems = [
        { text: "프로필 수정", path: "/mypage/edit-profile" },
        { text: "신체 정보 입력", path: "/mypage/body-info" },
        { text: "알림 설정 (경고음, 시간)", path: "/mypage/notifications" },
        { text: "사진 관리", path: "/mypage/photos" },
        { text: "고객 지원", path: "/mypage/support" },
        { text: "로그아웃", path: "/logout" },
    ];

    return (
        <div className="mypage-container">
            <header className="mypage-header">
                <h1>마이페이지</h1>
            </header>

         
            <section className="profile-section">
                <div className="avatar-wrapper">
                    <div className="avatar">
                        <UserIcon />
                    </div>
                    <div className="edit-button">
                        <EditIcon />
                    </div>
                </div>
                <div className="user-info">
                    <h2 className="user-name">홍길동</h2>
                    <p className="user-email">gildong@example.com</p>
                </div>
            </section>

            <nav className="menu-section">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} className="menu-item">
                                <span>{item.text}</span>
                                <ChevronRightIcon />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}