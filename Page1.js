import React,{useState} from "react";
import "./project2.css"
import img1 from './images/benzlogo.jpg'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import swal from 'sweetalert2';
import {Navigate} from 'react-router-dom';
  
const Page1=()=>{
    // login tab
    const[Email,updateemail]=useState('');
    const[password,updatepassword]=useState('');
    const[error,seterror]=useState();

    const[type,settype]=useState('password');
    const[icon,seticon]=useState(eyeOff);

    const[page2,updatepg2]=useState(false);

    const handlesubmit=(e)=>{
      e.preventDefault();
        if(Email.length==0||password.length==0){
          seterror(true)
        }
  }

  const handletoggle=()=>{
    if(type==='password'){
        seticon(eye)
        settype('text')
    }
    else{
        seticon(eyeOff)
        settype('password')
    }
 }
 // Register tab
    const[name,updatename]=useState('');
    const[email,updateEmail]=useState('');
    const[pwd,updatepwd]=useState('');
    const[cpwd,updatecpwd]=useState('');
    const[err,seterr]=useState();

    const handlesub=(e)=>{
      e.preventDefault();
        if(name.length==0||email.length==0||pwd.length==0||cpwd.length==0){
          seterr(true)
        }
  }
    
  const alert=()=>{
    if(name.length>0&&email.length>0&&pwd.length>0&&cpwd.length>0&&document.getElementById("pw").value==document.getElementById("cpw").value){
           swal.fire("successfully Registered")
    }
    else{
      seterr(true)
     }
 }
 if(page2){
  return <Navigate to="/Page2"/>
}


    return(
        <div className="p1bgimg">
            <div className="p1clr">
                <img src={img1} className="p1img"/>
            </div>
            <Tabs
      defaultActiveKey="LOGIN"
      id="fill-tab-example"
      className="mb-3 p1topbtn"
      fill>
      <Tab eventKey="LOGIN" title="LOGIN">
      <div className="p1bdy">
              <form onSubmit={handlesubmit}>
              <center>
              <table>
                <tr>
                  <td><label className="p1label">Email:</label></td>
                </tr>
                <tr>
                  <td><input type="email" className="p1inputbox" onChange={e=>updateemail(e.target.value)} placeholder="Email"/></td>
                </tr>
                <tr>
                <td>{error&&Email.length<=0?<label className="p1req">Email is Required</label>:""}</td>
                </tr>
                <tr>
                  <td><label className="p1label">Password:</label></td>
                </tr>
                <tr>
                  <td><input type={type} className="p1inputbox" onChange={e=>updatepassword(e.target.value)} placeholder="Password"/></td>
                  <td><div><span className="p1icon" onClick={handletoggle}><Icon icon={icon} size={20}/></span></div></td>
                </tr>
                <tr>
                <td>{error&&password.length<=0?<label className="p1req">password is Required</label>:""}</td>
                </tr>
              </table><br/>
              <button className="p1btn" onClick={()=>{
            if(Email.length>4&&password.length>4){
                updatepg2(true)
              }
         }}>SIGN IN</button>
              </center>
              </form>
            </div>
      </Tab>
      <Tab eventKey="REGISTER" title="REGISTER">
        <div className="p1bdy">
          <form onSubmit={handlesub}>
            <center>
              <table>
                <tr>
                  <td><label className="p1label">Name:</label></td>
                </tr>
                <tr>
                  <td><input type="text" onChange={e=>updatename(e.target.value)} placeholder="Name" style={{borderRadius:'0.3rem',border:'none'}}/></td>
                </tr>
                <tr>
                  <td>{err&&name.length<=0?<label className="p1req">Name is Required</label>:""}</td>
                </tr>
                <tr>
                  <td><label className="p1label">Email:</label></td>
                </tr>
                <tr>
                  <td><input type="email" onChange={e=>updateEmail(e.target.value)} placeholder="Email" style={{borderRadius:'0.3rem',border:'none'}}/></td>
                </tr>
                <tr>
                  <td>{err&&email.length<=0?<label className="p1req">Email is Required</label>:""}</td>
                </tr>
                <tr>
                  <td><label className="p1label">password:</label></td>
                </tr>
                <tr>
                  <td><input type={type} onChange={e=>updatepwd(e.target.value)} id="pw" placeholder="password" style={{borderRadius:'0.3rem',border:'none'}}/></td>
                </tr>
                <tr>
                  <td>{err&&pwd.length<=0?<label className="p1req">password is Required</label>:""}</td>
                </tr>
                <tr>
                    <td>{err&&document.getElementById("pw").value!=document.getElementById("cpw").value?<label className="p1req">Password mismatch</label>:""}</td>
                </tr>
                <tr>
                  <td><label className="p1label">Confirm password:</label></td>
                </tr>
                <tr>
                  <td><input type="password" onChange={e=>updatecpwd(e.target.value)}  id="cpw" placeholder="confirm password" style={{borderRadius:'0.3rem',border:'none'}}/></td> 
                </tr>
                <tr>
                  <td>{err&&cpwd.length<=0?<label className="p1req">Confirmpassword is Required</label>:""}</td>
                </tr>
              </table><br/>
              <button className="p1btn" onClick={alert}>SIGN UP</button>
            </center>
          </form>
        </div>
      </Tab>
    </Tabs>
            
        </div>
    )
}
export default Page1;