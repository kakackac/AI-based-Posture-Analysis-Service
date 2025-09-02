import React, { useState, useRef } from 'react';
import './Photo.css';
import { useNavigate } from 'react-router-dom';
import guideFrontStanding from '../assets/images/guide-front-standing.png';
import guideSideStanding from '../assets/images/guide-side-standing.png';
import guideFrontSitting from '../assets/images/guide-front-sitting.png';
import guideSideSitting from '../assets/images/guide-side-sitting.png';


const poseTypes = [
    { id: 'front-standing', title: '정면 서있는 자세', description: '- 척추 측만증, 어깨 기울기, 골반 기울기', guideImage: guideFrontStanding, guideTitle: '정면 서있는 자세 촬영 가이드', guideDescription: '카메라를 정면에 두고 머리부터 발끝까지 전신이 나오도록 촬영하세요. 차렷 자세에서 힘을 빼고 편안하게 서주세요.' },
    { id: 'side-standing', title: '측면 서있는 자세', description: '- 거북목, 골반 기울기', guideImage: guideSideStanding, guideTitle: '측면 서있는 자세 촬영 가이드', guideDescription: '몸의 옆면이 카메라를 향하도록 서주세요. 시선은 정면을 보고 편안하게 서서 전신이 나오도록 촬영합니다.' },
    { id: 'front-sitting', title: '정면 앉은 자세', description: '- 골반 기울기, 어깨 기울기', guideImage: guideFrontSitting, guideTitle: '정면 앉은 자세 촬영 가이드', guideDescription: '의자에 앉아 무릎은 90도를 유지하고, 상반신 전체가 나오도록 정면에서 촬영하세요. 양손은 허벅지 위에 편안히 올려둡니다.' },
    { id: 'side-sitting', title: '측면 앉은 자세', description: '- 거북목, 골반 기울기', guideImage: guideSideSitting, guideTitle: '측면 앉은 자세 촬영 가이드', guideDescription: '의자에 앉아 허리를 등받이에 붙이고 옆모습이 보이도록 촬영합니다. 턱을 살짝 당기고 시선은 정면을 향해주세요.' },
];

export default function PhotoPage() {
    const [modalType, setModalType] = useState(null);
    const [previews, setPreviews] = useState({});
    const fileInputRefs = useRef({});
    const navigate = useNavigate();

    const handleBoxClick = (type) => {
        
        if (!previews[type]) {
            setModalType(type);
        }
    };

    const handleCloseModal = () => {
        setModalType(null);
    };

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            setPreviews((prev) => ({
                ...prev,
                [type]: URL.createObjectURL(file),
            }));
        }
        handleCloseModal();
    };

    const handleTriggerFileInput = (type) => {
        fileInputRefs.current[type].click();
    };

   
    const handleNavigateToResult = (poseId) => {
       
        navigate('/photo/result', {
            state: {
                previewSrc: previews[poseId],
                poseType: poseId
            }
        });
    };

    const currentGuide = poseTypes.find((p) => p.id === modalType);

    return (
        <div className="photo-page-container">
            <div className="upload-grid">
                {poseTypes.map((pose) => (
                    <div
                        key={pose.id}
                        className="upload-box"
                        onClick={() => handleBoxClick(pose.id)}
                    >
                        {previews[pose.id] ? (
                            
                            <div className="preview-container">
                                <img src={previews[pose.id]} alt={`${pose.title} preview`} className="preview-image" />
                                <div className="overlay">
                                    <button
                                        className="analyze-button"
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleNavigateToResult(pose.id);
                                        }}
                                    >
                                        이 자세 분석하기
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="upload-placeholder">
                                <span className="upload-icon">+</span>
                                <span className="pose-title">{pose.title}</span>
                                <span className="pose-desc">{pose.description}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        

          
            {modalType && currentGuide && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{currentGuide.guideTitle}</h2>
                        <div className="guide-image-container">
                            <img src={currentGuide.guideImage} alt={currentGuide.guideTitle} />
                        </div>
                        <p className="guide-description">{currentGuide.guideDescription}</p>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={(el) => (fileInputRefs.current[modalType] = el)}
                            onChange={(e) => handleFileChange(e, modalType)}
                        />
                        <button className="modal-select-button" onClick={() => handleTriggerFileInput(modalType)}>
                            사진 선택하기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}