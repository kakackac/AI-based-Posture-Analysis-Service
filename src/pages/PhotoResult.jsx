import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PhotoResult.css';


const mockAnalysisData = {
    'front-standing': { title: "정면 서있는 자세", issues: ["어깨 비대칭: 왼쪽 어깨가 2cm 더 높음", "골반 불균형: 오른쪽으로 약간 기울어짐"], score: 75, summary: "전체적인 균형이 약간 아쉽지만, 척추는 곧은 편입니다. 어깨 스트레칭을 꾸준히 해주세요." },
    'side-standing': { title: "측면 서있는 자세", issues: ["거북목 증후군: 경미한 단계, 목이 앞으로 5cm 나옴"], score: 68, summary: "목이 앞으로 나와있어 주의가 필요합니다. 모니터 높이를 조절하고 턱을 당기는 습관을 들이세요." },
    'front-sitting': { title: "정면 앉은 자세", issues: ["어깨 비대칭: 지속적인 비대칭 관찰"], score: 82, summary: "양호한 자세입니다. 다만, 한쪽 팔에만 무게를 싣는 습관이 있는지 확인해보세요." },
    'side-sitting': { title: "측면 앉은 자세", issues: ["등 굽음: 허리를 등받이에 붙이는 습관 필요"], score: 70, summary: "허리가 약간 굽어있습니다. 의식적으로 허리를 펴고 등받이에 기대는 것이 좋습니다." },
};

export default function PhotoResult() {
    const location = useLocation();
    const navigate = useNavigate();
  
    const { previewSrc, poseType } = location.state || {};

 
    if (!previewSrc || !poseType) {
        return (
            <div className="result-page-container error">
                <h2>잘못된 접근입니다.</h2>
                <p>분석할 사진 데이터가 없습니다. 사진 업로드 페이지로 돌아가주세요.</p>
                <button className="back-button" onClick={() => navigate('/photo')}>돌아가기</button>
            </div>
        );
    }

    const analysis = mockAnalysisData[poseType];

    return (
        <div className="result-page-container">
            <h1>{analysis.title} 분석 결과</h1>

            <div className="result-content-wrapper">
                <div className="image-section">
                    <img src={previewSrc} alt="분석된 사진" className="result-preview-image" />
                </div>

                <div className="details-section">
                    <h2>자세 점수</h2>
                    <div className="score-circle">
                        <span className="score-number">{analysis.score}</span>
                        <span className="score-unit">점</span>
                    </div>

                    <h2>종합 평가</h2>
                    <p className="summary-text">{analysis.summary}</p>

                    <h2>개선 필요 항목</h2>
                    <ul className="issues-list">
                        {analysis.issues.map((issue, index) => (
                            <li key={index}>{issue}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <button className="back-button" onClick={() => navigate('/photo')}>
                다른 자세 분석하기
            </button>
        </div>
    );
}