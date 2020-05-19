import React,{useState} from 'react'
import './Sidebar.css';
import {Link} from 'react-router-dom';
import resume from '../pages/images/RESUME.pdf'


export default function Sidebar(props) {
  const [isChecked,setChecked] =useState(false,false);

    return (     
      <div style={{'display': props.display}}>
        <header style={{'background': props.colour}}>
          <Link className="title" to="/" >Colin Lin's <span style={{'color': props.accent}}>Profile</span></Link>
        </header>  
        <div className="menu-wrap" >
          <label style={{fontSize:0}} htmlFor='dummy'>a</label>
          <input id='dummy' type="checkbox" className="toggler" onClick={()=>setChecked(!isChecked)} checked={isChecked} onChange={()=>console.log("clicked")}/>
            <div className="hamburger"><div></div></div>
              <div className="menu">
                <div>
                  <div>
                    <ul>
                    <li><Link onClick={()=>setChecked(!isChecked)} className="link-style" to='/'>Home</Link></li>
                    <li><a onClick={()=>setChecked(!isChecked)} rel="noopener noreferrer" className="link-style" href={resume} target='_blank'>Resume</a></li>
                    <li><Link onClick={()=>setChecked(!isChecked)} className="link-style" to='/contact'>Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
