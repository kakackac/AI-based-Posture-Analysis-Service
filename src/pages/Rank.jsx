import React from 'react';
import './Rank.css';
import { useNavigate } from 'react-router-dom';
// ✅ 1. react-icons 라이브러리에서 필요한 아이콘들을 import 합니다.
import { FaTrophy, FaCalendarCheck, FaClock, FaBullseye } from 'react-icons/fa';

export default function RankPage() {
    const navigate = useNavigate();

    // 업적 데이터를 배열로 관리
    const achievements = [
        { icon: <FaCalendarCheck />, title: "연속 기록 챌린지", progressText: "4/7", progressValue: 4, max: 7, description: "일주일 동안 좋은 자세" },
        { icon: <FaClock />, title: "누적 시간", progressText: "62/100h", progressValue: 62, max: 100, description: "한달 동안 100시간 유지" },
        { icon: <FaBullseye />, title: "오늘 목표", progressText: "2/3", progressValue: 2, max: 3, description: "점심 후 스트레칭 하기" },
    ];

    return (
        <div className="rank-container">
            <section className="challenge-banner">
                {/* ✅ 2. 깨진 트로피 아이콘을 새로운 아이콘으로 교체합니다. */}
                <div className="banner-icon">
                    <FaTrophy size={50} color="#f5b025" />
                </div>
                <div className="banner-content">
                    <h1>바른 자세, 게임처럼 즐겨보세요</h1>
                    <ul>
                        <li>✓ 주간 챌린지 달성 시 칭호 해금</li>
                        <li>✓ 내 기록으로 레벨업 리포트 제공</li>
                        <li>✓ 삐뚤어지면 즉시 경고! 자세 게이지 -5</li>
                    </ul>
                    <button className="challenge-button" onClick={() => navigate('/live')}>
                        챌린지 시작하기
                    </button>
                </div>
            </section>

            <section className="achievements-section">
                <h2>업적 달성</h2>
                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <div key={index} className="achievement-card">
                            <div className="card-header">
                                {/* ✅ 3. 각 카드 아이콘도 새로운 아이콘으로 교체합니다. */}
                                <div className="card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                            </div>
                            <p className="card-progress-text">{item.progressText}</p>
                            <progress className="card-progress-bar" value={item.progressValue} max={item.max}></progress>
                            <p className="card-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}