import React, { useState, useRef } from 'react';
import NavBar from '../NavBar/NavBar';
import './MyPage.css';

function MyPage({ setProfileImage }) { // setProfileImage prop 추가
    const [localProfileImage, setLocalProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setLocalProfileImage(imageUrl);
            setProfileImage(imageUrl); // App의 profileImage 상태 업데이트
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click(); // 파일 입력 요소 클릭
    };

    return (
        <div className="mypage">
            <NavBar profileImage={localProfileImage} /> {/* NavBar에 profileImage 전달 */}
            <div className="mypage-content">
                <h2 className="mypage-title">MY page</h2>
                
                <div className="profile-section">
                    <h3 className="section-title">프로필 미리보기</h3>
                    <div className="profile-overview">
                        <div className="profile-image">
                            {localProfileImage ? (
                                <img src={localProfileImage} alt="프로필 사진" className="profile-photo-preview" />
                            ) : (
                                '프로필'
                            )}
                        </div>
                        <div className="profile-description">프로필 설명</div>
                    </div>
                    <div className="profile-details">
                        <div className="profile-photo-label">프로필 사진</div>
                        <div className="profile-photo">
                            {localProfileImage ? (
                                <img src={localProfileImage} alt="프로필 사진 미리보기" className="profile-photo-preview" />
                            ) : (
                                '프로필 사진이 없습니다'
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef} // 파일 입력 요소에 참조 연결
                            className="file-input"
                        />
                        <button className="image-change-btn" onClick={handleButtonClick}>
                            이미지 추가/변경
                        </button>
                    </div>
                </div>

                <div className="info-section">
                    <h3 className="section-title">개인정보 수정</h3>
                    <div className="info-item">
                        <label>이메일</label>
                        <div className="info-value">고정</div>
                    </div>
                    <div className="info-item">
                        <label>이름</label>
                        <div className="info-value"></div>
                    </div>
                    <div className="info-item">
                        <label>연락처</label>
                        <div className="info-value"></div>
                    </div>
                    <div className="info-item">
                        <label>주소</label>
                        <div className="info-value"></div>
                    </div>
                    <button className="change-password-btn">비밀번호 변경</button>
                    <button className="delete-account-btn">회원 탈퇴</button>
                </div>
            </div>
        </div>
    );
}

export default MyPage;
