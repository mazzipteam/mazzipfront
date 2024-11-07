import React, { useState } from 'react';
import './homePage.css';

function HomePage() {
    const [showMenu, setShowMenu] = useState(false);

    const handleSearch = () => {
        const query = document.getElementById("search-input").value;
        if (query) {
            // Redirect to search results page with the query
            window.location.href = `/search?query=${query}`;
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="homepage">
            <header className="navbar">
                <div className="navbar-left">
                    <button className="menu-icon" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
                <h1 className="logo">MaZZip!</h1>
                <div className="navbar-right">
                    <button className="icon" onClick={() => window.location.href = '/notifications'}>
                        🔔
                    </button>
                    <button className="user-icon" onClick={() => window.location.href = '/mypage'}>
                        ⭕
                    </button>
                    <button className="login-signup" onClick={() => window.location.href = '/login'}>
                        로그인/회원가입
                    </button>
                </div>
            </header>

            {showMenu && (
                <div className="menu-popup">
                    <ul>
                        <li>리뷰 창 이동 (이미지 삽입)</li>
                        <li>찜 목록 이동 (이미지 삽입)</li>
                        <li>예약 창 이동 (이미지 삽입)</li>
                        <li>아바타 이동 (이미지 삽입)</li>
                    </ul>
                </div>
            )}

            <main className="search-section">
                <h2 className="main-title">MaZZip!</h2>
                <div className="search-bar">
                    <input id="search-input" type="text" placeholder="S..." />
                    <button onClick={handleSearch}>🔍</button>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
