import React,{ useState } from 'react';
import HeaderBanner from './HeaderBanner/HeaderBanner.js';
import HeaderNavBar from './HeaderNavBar/HeaderNavBar.js'

const Header = () => {
    const [ quantity, setQuantity] = useState(0)
    return (
        <header className="nk-header page-header is-transparent is-sticky is-shrink" id="header">
            <div className="header-main">
                <HeaderNavBar quantity={quantity} setQuantity={setQuantity} />
            </div>
            <div className="header-banner bg-white">
                <HeaderBanner quantity={quantity} setQuantity={setQuantity} />
            </div>
        </header>
    )
}

export default Header
