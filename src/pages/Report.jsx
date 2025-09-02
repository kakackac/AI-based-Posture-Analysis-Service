import React, { useState } from 'react';
import './Report.css';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const mockLiveData = {
    summary: { trend: "상승", change: 5, recentIssue: "거북목", avgScore: 81 },
    aiCoach: "최근 점수가 꾸준히 오르고 있어요! 특히 허리를 펴고 앉는 시간이 늘어난 점이 인상적입니다. 목 스트레칭을 병행하면 점수가 더 빠르게 오를 거예요. 지금처럼만 유지해주세요.",
    chartData: { labels: ['02.10', '02.12', '02.15', '02.18', '02.21', '02.24', '02.27'], scores: [72, 75, 73, 80, 78, 82, 85] },
    history: [{ date: "2025. 02. 27", score: 85 }, { date: "2025. 02. 24", score: 82 }, { date: "2025. 02. 21", score: 78 }]
};
const mockPhotoData = {
    summary: { trend: "유지", change: 1, recentIssue: "골반 틀어짐", avgScore: 80 },
    aiCoach: "사진 분석 점수는 안정적으로 유지되고 있네요. 특히 골반 교정 스트레칭을 시작하면 점수가 크게 오를 거예요! '누워서 다리 들기' 운동을 추천합니다.",
    chartData: { labels: ['01.15', '01.28', '02.12', '02.21', '02.25'], scores: [78, 80, 79, 81, 80] },
    history: [{ date: "2025. 02. 25", score: 80 }, { date: "2025. 02. 21", score: 81 }, { date: "2025. 02. 12", score: 79 }]
};

export default function ReportPage() {
    const [activeTab, setActiveTab] = useState('live');
    const navigate = useNavigate();

    const data = activeTab === 'live' ? mockLiveData : mockPhotoData;

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#333',
                titleFont: { size: 14 },
                bodyFont: { size: 12 },
                padding: 10,
                cornerRadius: 8,
            }
        },
        scales: {
            y: { suggestedMin: 50, suggestedMax: 100, grid: { color: '#f0f0f0' } },
            x: { grid: { display: false } }
        },
        elements: { line: { tension: 0.3 } }
    };

    const chartData = {
        labels: data.chartData.labels,
        datasets: [{
            label: '자세 점수',
            data: data.chartData.scores,
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            fill: true,
            pointBackgroundColor: '#007bff',
            pointRadius: 6,
            pointHoverRadius: 8,
        }]
    };

    const handleHistoryClick = (date) => {
        alert(`${date}의 상세 분석 페이지로 이동합니다.`);
    };

    return (
        <div className="report-container">
            <header className="report-header">
                <div className="toggle-buttons">
                    <button
                        className={`toggle-btn ${activeTab === 'live' ? 'active' : ''}`}
                        onClick={() => setActiveTab('live')}
                    >
                        실시간 자세점수
                    </button>
                    <button
                        className={`toggle-btn ${activeTab === 'photo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('photo')}
                    >
                        사진 자세점수
                    </button>
                </div>
            </header>

            
            <section className="summary-section">
                <h2>최근 1개월 요약</h2>
                <div className="summary-cards">
                    <div className="summary-card">
                        <span className="card-title">점수 추세</span>
                        <span className={`card-value positive`}>
                            {data.summary.trend} (▲{data.summary.change}점)
                        </span>
                    </div>
                    <div className="summary-card">
                        <span className="card-title">최근 발생 문제</span>
                        <span className="card-value issue">{data.summary.recentIssue}</span>
                    </div>
                    <div className="summary-card">
                        <span className="card-title">평균 점수</span>
                        <span className="card-value">{data.summary.avgScore}점</span>
                    </div>
                </div>
            </section>

          
            <section className="chart-section">
                <h2>점수 변화</h2>
                <div className="chart-wrapper">
                    <Line options={chartOptions} data={chartData} />
                </div>
            </section>

            <div className="bottom-content-wrapper">
                <section className="history-section">
                    <h2>최근 분석 기록</h2>
                    <ul className="history-list">
                        {data.history.map((item, index) => (
                            <li key={index} className="history-item" onClick={() => handleHistoryClick(item.date)}>
                                <span className="history-date">{item.date}</span>
                                <div className="history-score-wrapper">
                                    <span className="history-score">{item.score}점</span>
                                    <button className="arrow-button">→</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="coach-section">
                    <h2>종합 평가</h2>
                    <p className="coach-comment">{data.aiCoach}</p>
                </section>
            </div>
        </div>
    );
}