import React from 'react';
import './WishListPage.css';

function WishListPage() {
    const wishListItems = [
        { name: '도미노피자', rating: 3.5, logo: 'dominos.png' },
        { name: '스쿨푸드', rating: 3.5, logo: 'schoolfood.png' },
        { name: 'BBQ', rating: 3.5, logo: 'bbq.png' },
        { name: '메가커피', rating: 3.5, logo: 'megacoffee.png' },
    ];

    return (
        <div className="wishlist-page">
            <h2 className="wishlist-title">찜 목록</h2>
            <div className="wishlist-items">
                {wishListItems.map((item, index) => (
                    <div className="wishlist-item" key={index}>
                        <img src={`images/${item.logo}`} alt={item.name} className="item-logo" />
                        <div className="item-info">
                            <p className="item-name">{item.name}</p>
                            <p className="item-rating">⭐ {item.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WishListPage;
