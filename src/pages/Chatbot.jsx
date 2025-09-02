import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; 


const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("안녕")) {
        return "안녕하세요! 자세 교정에 대해 궁금한 점이 있으신가요?";
    }
    if (lowerCaseInput.includes("스트레칭")) {
        return "좋은 질문이에요! 목과 어깨의 긴장을 풀어주는 '목 스트레칭'을 추천합니다. 5초간 좌우로 부드럽게 당겨주세요.";
    }
    if (lowerCaseInput.includes("자세")) {
        return "바른 자세의 핵심은 턱을 살짝 당기고, 허리를 곧게 펴는 것입니다. 실시간 자세 교정 기능을 사용해 보세요!";
    }
    if (lowerCaseInput.includes("고마워")) {
        return "천만에요! 언제든지 또 물어보세요.";
    }
    return "죄송해요, 아직 학습 중인 내용이라 답변하기 어려워요. '스트레칭 방법 알려줘' 와 같이 질문해주시겠어요?";
};


export default function ChatbotPage() {
    const [messages, setMessages] = useState([
        { text: "안녕하세요! 저는 당신의 자세 교정을 도와줄 AI 챗봇입니다. 무엇이든 물어보세요!", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);

  
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        const trimmedInput = inputValue.trim();
        if (trimmedInput === '') return;

        const userMessage = { text: trimmedInput, sender: "user" };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

   
        setIsTyping(true);

        setTimeout(() => {
            const botResponseText = getBotResponse(trimmedInput);
            const botMessage = { text: botResponseText, sender: "bot" };
            setIsTyping(false);
            setMessages(prev => [...prev, botMessage]);
        }, 1500); 
    };

    return (
        <div className="chatbot-container">
            <div className="message-list">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                {isTyping && (
                    <div className="message bot">
                        <div className="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                {/* 자동 스크롤을 위한 빈 div */}
                <div ref={messagesEndRef} />
            </div>
            <form className="message-form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    autoFocus
                />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}