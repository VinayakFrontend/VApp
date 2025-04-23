import React from 'react'
import './Footer.css'
import { Link, useLocation } from 'react-router-dom'

export default function Footer(prop) {
    const location = useLocation();

    return (
        <>
            <div className="footer">
                <ul className='iconlist'>
                    <li><Link to="/" >{location.pathname === "/" ? (<i class="fa-solid fa-clock"></i>) : (<i class="fa-regular fa-clock"></i>)}</Link></li>
                    <li><Link to="/color-picker">{location.pathname === "/color-picker" ? (<img src="https://static.vecteezy.com/system/resources/thumbnails/021/016/161/small/color-picker-icon-vector.jpg" alt="fimg" height="30" width="30" />) : (<img src="https://cdn-icons-png.freepik.com/512/3963/3963783.png" alt="img" height="30"  />)}</Link></li>
                    <li><Link to="/profile" >{location.pathname === "/profile" ? (<i class="fa-solid fa-circle-user"></i>) : (<i class="fa-regular fa-circle-user"></i>)}</Link></li>
                    <li><div className="bell"><Link to="/notification" >{location.pathname === "/notification" ? (<i class="fa-solid fa-bell"></i>) : (<i class="fa-regular fa-bell"></i>)}</Link><span className="notify">{prop.counter}</span></div></li>

                </ul>
            </div>

        </>
    )
}