import React from 'react'
import '../styles/Menu.css'
const Menu = ({onClick}) => (
    <div className="Menu">
        <button className="Button" onClick={onClick}>
            Click to play my Tetris!
        </button>
    </div>
)

export default Menu;
