import React from 'react'

const MenuToggle = ({ isOpen, setIsOpen }) => {
    return (
        <div className="header-nav-toggle">
            <a href="#">
                <div className="toggle-line" onClick={() => setIsOpen(true)}>
                    <span></span>
                </div>
            </a>
        </div>
    )
}

export default MenuToggle
