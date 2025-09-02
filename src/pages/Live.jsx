import React from 'react';
import './Live.css'; 


import exampleImage from '../assets/images/image1.png';

export default function LivePage() {
    return (
        <div className="live-container">
            <h1>실시간 자세 교정</h1>

          
            <img
                src={exampleImage}
                alt="실시간 자세 분석 예시"
                className="placeholder-image"
            />

         
            <p className="placeholder-text">
                예시 사진으로 대체
            </p>

        </div>
    );
}