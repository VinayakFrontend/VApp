import React from "react";
import './Header.css';

export default function Header(props) {

    return (
        <>
        <div className="header">
            <div className="logo" style={{color:props.hcolor}}>Vinayak</div>
            <div className="profileimg"><img src="https://t4.ftcdn.net/jpg/08/19/66/31/360_F_819663119_che4sZSrmQv8uQJOzuN9TVQFQNHJlfQ2.jpg" height="40" alt="profile" /></div>
        </div>
        </>
    )
}