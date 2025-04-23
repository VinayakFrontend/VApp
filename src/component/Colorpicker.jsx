import React from 'react';
import './Colorpicker.css';
import { useState } from 'react';
import Header from './Header';

export default function Colorpicker({color,setColor}) {
// const [color,setColor] = useState("white");
    return (
        <>
      
        <div className="colorcontainer" >
            <h1>Color Picker</h1>
            <div className="colorbox" style={{backgroundColor:color}}></div>
            <select id="colorlist" onChange={(e)=>setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="pink">Pink</option>
            </select>
          
        </div>
   
        </>
        
    )
}
