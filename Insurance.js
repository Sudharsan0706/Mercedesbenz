import React,{useState} from "react";
import "./project2.css"
import img1 from './images/benzlogo.jpg'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icon } from 'react-icons-kit'
import {navicon} from 'react-icons-kit/fa/navicon'
import {androidCar} from 'react-icons-kit/ionicons/androidCar'
import Accordion from 'react-bootstrap/Accordion';
import video1 from './images/insurancevideo.mp4'
const Insurance=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div className="p2clr">
            <img src={img1} className="p2img"/>
            </div>
            <div className="p2div2">
            <Link to="/Page2" className="p2link">Home</Link>
            <Link to="/Finance" className="p2link">Finance</Link>
            <Link to="/Insurance" className="p2link">Insurance</Link>
            <Link to="/Contact" className="p2link">Contact us</Link>
            <Icon icon={androidCar} className="p2caricon"/>
            <Link to="/Allmodels" className="p2link">Our Models</Link>
            <div className="page2div2">
            <Button variant="primary" onClick={handleShow} className="p2canvasbtn">
                <Icon icon={navicon}/>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Mercedes-Benz</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    <li><Link to="/Page2" className="page2link">Home</Link></li>
                    <li><Link to="/Finance" className="page2link">Finance</Link></li>
                    <li><Link to="/Insurance" className="page2link">Insurance</Link></li>
                    <li><Link to="/Contact" className="page2link">Contact us</Link></li>
                    <li><Link to="/Allmodels" className="page2link">Our Models</Link></li>
                </ul>
            </Offcanvas.Body>
            </Offcanvas>
            </div>
            </div>
            <div className="p2div3">
                <p>Explore Your Dream Mercedes-Benz</p>
            </div>
            <div className="insuranceimg">
                <div className="insurdiv">
                    <p style={{fontSize:'300%'}}>Insurance</p>
                    <h5>Star Protect Insurance for your Mercedes-Benz Car</h5>
                </div>
            </div>
                <p className="insurtopic">Star Protect Insurance for your Mercedes-Benz Car</p><br/>
                <div className="insurdiv2">
                    <div className="insurdoublediv">
                    <h5 className="insurpara">Protecting your star..</h5><br/>
                    <p className="insurpara">An understanding of security that goes further than just the car, Star Protect
                    Insurance for your Mercedes-Benz Car program for the Mercedes-Benz car gives the
                    protection it deserves. With great partners and comprehensive benefits, you can be 
                    assured that your car is secured and you have complete peace of mind, no matter where 
                    you are driving.Every Mercedes-Benz is different and meets the unique needs of an 
                    individual. With this understanding, Mercedes-Benz Car Insurance now Introduces “covers 
                    that will enhance Mercedes-Benz Car Insurance even more. We always provide insurance 
                    products that come with the highest standard of quality you expect from the brand.”</p><br/>
                    <h5 className="insurpara">Why Star Protect Insurance for your Mercedes-Benz Car?</h5><br/>
                    <ul>
                        <li>New Star Protect packages: Star Protect Gold Plus and Star Protect Platinum Plus are
                         available with the addition of EMI covers.</li>
                         <li>Insurance program in collaboration with Reliance General Insurance, TATA AIG General 
                        Insurance, and ICICI Lombard General Insurance.</li>
                        <li>Customised Star Insurance Package available till the 10th year of the age of the car</li>
                        <li>New top-up covers- Key cover, EMI cover, Consumables and Conveyance Benefit</li>
                        <li>Cashless claims settlement at authorized workshops</li>
                        <li>Assurance of repairs using genuine spare parts</li>
                        <li>24 x 7 access to Mercedes-Benz Financial Call Centre</li>
                    </ul>
                    </div>
                    <div className="insurdoublediv">
                        <video src={video1} controls={true} style={{width:'100%'}}/>
                    </div>
                </div>
                <div className="p2bottom"><br/>
            <h4 style={{color:'white',textAlign:'center'}}>Our Branches in Overall world</h4><br/>
            <hr style={{color:'white',marginLeft:'5%',marginRight:'5%'}}/><br/>
            <div className="p2btm">
            <div className="p2btmdiv1">
              <p>Austria</p>
              <p>Belgium</p>
              <p>Czech Republic</p>
              <p>Denmark</p>
              <p>France</p>
            </div>
            <div className="p2btmdiv1">
              <p>Germany</p>
              <p>Greece</p>
              <p>Hungary</p>
              <p>Italy</p>
              <p>Luxembourg</p>
            </div>
            <div className="p2btmdiv1">
              <p>Netherlands</p>
              <p>Poland</p>
              <p>Portugal</p>
              <p>Romania</p>
              <p>Slovakia</p>
            </div>
            <div className="p2btmdiv1">
              <p>Spain</p>
              <p>Sweden</p>
              <p>Switzerland</p>
              <p>United Kingdom</p>
            </div></div>
            <Accordion defaultActiveKey="0" className="p2accordian">
            <Accordion.Item eventKey="0" id="accordianheader">
            <Accordion.Header>Branches</Accordion.Header>
            <Accordion.Body style={{color:'white',backgroundColor:'black'}}>
            <p>Austria</p>
            <p>Belgium</p>
            <p>Czech Republic</p>
            <p>Denmark</p>
            <p>France</p>
            <p>Germany</p>
            <p>Greece</p>
            <p>Hungary</p>
            <p>Italy</p>
            <p>Luxembourg</p>
            <p>Netherlands</p>
            <p>Poland</p>
            <p>Portugal</p>
            <p>Romania</p>
            <p>Slovakia</p>
            <p>Spain</p>
            <p>Sweden</p>
            <p>Switzerland</p>
            <p>United Kingdom</p>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion><br/><br/>
            </div>
        </div>
    )
}
export default Insurance;