import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";  // ✅ 라우팅 추가
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import realtimeIcon from "../assets/images/realtime.png";
import photoIcon from "../assets/images/photo.png";
import reportIcon from "../assets/images/report.png";

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Inner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

const Divider = styled.div`
  width: 100%;
  height: 5px;

  &.first {
    background: #ffffff;;
  }
  &.second {
    background: #ffffff;;
  }
`;

/* --- 첫 번째 화면 컨테이너 --- */
const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1000px;
  padding: 2rem;
`;

const ImageBox = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 280px;
    transition: opacity 0.5s ease-in-out;
  }
`;

const TextBox = styled.div`
  flex: 2;
  text-align: left;
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
  }
  li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    &:before {
      content: "✔ ";
      color: #BAD6B0;
      font-weight: bold;
    }
  }
`;

const StartButton = styled.button`
  background-color: #BAD6B0;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    background-color: #BAD6B0;
  }
`;

/* --- 두 번째 화면 컨테이너 --- */
const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;   // 제목 + 카드 세로 배치
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
`;

const FeatureCard = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-6px);
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 1.2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
  }
`;

/* --- 세 번째 화면 컨테이너 --- */
const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem 2rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;

  p {
    margin: 0.3rem 0;
  }

  .highlight {
    font-weight: bold;
    color: #333;
  }

  .action {
    color: #BAD6B0;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default function Home() {
  const outerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  // 이미지 번갈아 표시
  const images = [img1, img2];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3초마다 교체
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const DIVIDER_HEIGHT = 5;

    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            behavior: "smooth",
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            behavior: "smooth",
          });
          setCurrentPage(3);
        }
      } else {
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerRef.current.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          setCurrentPage(1);
        } else if (scrollTop >= pageHeight * 2) {
          outerRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            behavior: "smooth",
          });
          setCurrentPage(2);
        }
      }
    };

    const outer = outerRef.current;
    outer.addEventListener("wheel", wheelHandler, { passive: false });
    return () => outer.removeEventListener("wheel", wheelHandler);
  }, []);

  return (
    <Wrapper>
      <Outer ref={outerRef}>
        <Inner className="first">
          <FirstContainer>
            <ImageBox>
              <img src={images[imgIndex]} alt="Posture Illustration" />
            </ImageBox>
            <TextBox>
              <h1>당신의 자세, AI가 실시간으로 분석해드립니다</h1>
              <ul>
                <li>카메라 통해 자세 인식</li>
                <li>잘못된 자세 실시간 탐지/알림</li>
                <li>자세 습관 개선으로 편안함</li>
              </ul>
              {/* 버튼 클릭 시 /live 페이지로 이동 */}
              <StartButton onClick={() => navigate("/live")}>
                실시간 분석 시작하기
              </StartButton>
            </TextBox>
          </FirstContainer>
        </Inner>
        <Divider className="first" />
        
        <Inner className="second">
          <SecondContainer>
            <SectionTitle>주요 기능</SectionTitle>

            <CardWrapper>
              <FeatureCard>
                <img src={realtimeIcon} alt="실시간 분석" />
                <h3>실시간 분석</h3>
                <p>카메라로 자세를<br/>실시간으로 체크합니다</p>
              </FeatureCard>

              <FeatureCard>
                <img src={photoIcon} alt="사진 분석" />
                <h3>사진 분석</h3>
                <p>한 장의 사진으로<br/>자세 개선 포인트를 진단합니다</p>
              </FeatureCard>

              <FeatureCard>
                <img src={reportIcon} alt="리포트" />
                <h3>리포트 & 피드백</h3>
                <p>점수와 분석 결과를 통해<br/>자세 습관을 개선할 수 있습니다</p>
              </FeatureCard>
            </CardWrapper>
          </SecondContainer>
        </Inner>

        <Divider className="second" />
        <Inner className="third">
          <ThirdContainer>
            <p>어제는 <span className="highlight">2시간 31분</span> 바른 자세로 앉아 있었어요</p>

            <p>오늘은 아직 시작하지 않으셨군요?<br/>
            <span
            className="action"
            role="button"
            tabIndex={0}
            onClick={() => navigate("/live")}
            onKeyDown={(e) => (e.key === "Enter" ? navigate("/live") : null)}
            aria-label="실시간 분석으로 이동">
            바른 자세로 앉아볼까요? →
            </span>
            </p>

            <p>
            이번주에 바른 자세로 앉은 시간은 총 <span className="highlight">12시간 39분</span>이에요<br/>
            목표까지 <span className="highlight">5시간 21분</span> 남았습니다.<br/>
            <span
            className="action"
            role="button"
            tabIndex={0}
            onClick={() => navigate("/live")}
            onKeyDown={(e) => (e.key === "Enter" ? navigate("/live") : null)}
            aria-label="실시간 분석으로 이동">
            바른 자세로 앉아볼까요? →
            </span>
            </p>

            <p>
            어제 다른 사람들이 바른자세로 앉은 시간은 <span className="highlight">2시간 12분</span>이에요<br/>
            ○○님도 할 수 있겠죠…
            </p>
          </ThirdContainer>
        </Inner>
      </Outer>
    </Wrapper>
  );
}
