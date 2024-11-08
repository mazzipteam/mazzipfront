import React from 'react';
import './AvatarPage.css';

function AvatarPage() {
    return (
        <div className="avatar-page">
            <h2 className="avatar-title">아바타 키우기</h2>
            <div className="avatar-container">
                <div className="avatar-items">
                    {/* Displaying avatar items as a grid */}
                    {Array(12).fill().map((_, index) => (
                        <div key={index} className="avatar-item">
                            <img src="/모자샘플.jpg" alt="Clothing item" />
                        </div>
                    ))}
                </div>
                <div className="avatar-display">
                    <img src="/아바타샘플.jpg" alt="Avatar" className="avatar-image" />
                    <div className="avatar-actions">
                        <button className="action-button">원래대로</button>
                        <button className="action-button">모두벗기</button>
                        <button className="action-button">적용하기</button>
                        <button className="action-button">상호작용</button>
                    </div>
                </div>
                <div className="avatar-history">
                    <ul>
                        <li>10.31 - 나의 펫이 배고파 하는중..</li>
                        <li>10.31 - 홍콩반점 예약 성공!</li>
                        <li>10.31 - 나의 펫(애칭)이 짜장면을 설치합니다..</li>
                        <li>10.31 - (중급) 의상 획득!</li>
                        <li>11.01 - (중급) 의상을 착용합니다..</li>
                        <li>11.08 - 나의 펫이 배고파 하는중..</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AvatarPage;
