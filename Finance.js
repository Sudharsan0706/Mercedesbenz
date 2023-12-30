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
import img2 from './images/financeimg1.jpg'
import img3 from './images/financeimg2.jpg'
const Finance=()=>{

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
            <div className="financeimg">
                <div className="financediv">
                    <p style={{fontSize:'300%'}}>Finance</p>
                    <h5>Discover our wide range of financing products.</h5>
                </div>
            </div>
            <div className="finanfnt">
                <h1 style={{fontSize:'300%'}}>Discover our financing products</h1><br/>
                <h5>Discover our wide range of financing options with all-in-one EMI inclusive
                of maintenance and <br/>extended warranty With us you will certainly find the offer
                that best suits your life situation.</h5><br/><br/>
                <h1 style={{fontSize:'300%'}}>Mercedes-Benz Financial Services</h1><br/>
                <h5>Simply calculate the expected monthly installments for your Mercedes yourself
                with our<br/> financing calculator. Simply select the model and equipment line, set the 
                contract period and<br/> desired mileage and thus find the solution that suits you best.</h5>
            </div><br/><br/>
            <div className="finandiv2">
                <div className="finandoublediv">
                    <h1 style={{fontSize:'250%'}}>STAR AGILITY+</h1><br/>
                    <p>Put yourself in control of your Mercedes-Benz experience with STAR Agility+, 
                    and free yourself from confinement tomorrow.</p>
                    <p>Design your Agility finance contract to suit your needs in two easy steps:</p>
                    <p>1. Confidence to begin: Choose the Mercedes-Benz Car of your dream, select your 
                    loan term from 12-60 months, and the annual kilometer allowance, based on the 
                    estimated kilometers you expect to drive per year.</p>
                    <p>2. Freedom to the end: As your needs change, our flexible end of contract options 
                    allows you to choose the option to suit your needs:</p>
                    <p><span style={{fontWeight:'bold'}}>Upgrade:</span> By choosing to upgrade, this gives
                    you the ability to upgrade your current vehicle for a new one, and always have the latest 
                    in technology, safety and efficiency.</p>
                    <p><span style={{fontWeight:'bold'}}>Keep:</span> By choosing to your keep your vehicle, 
                    you have the flexibility to refinance or payout your Guaranteed Future Value*.</p>
                    <p><span style={{fontWeight:'bold'}}>Return:</span> By choosing to return your vehicle, 
                    simply hand back the vehicle and walk away, subject to meeting the Fair Wear and Tear conditions.</p>
                </div>
                <div className="finandoublediv">
                    <img src={img2} className="finanimg1"/>
                </div>
            </div><br/>
            <div className="finandiv2">
                <div className="finandoublediv">
                    <img src={img3} className="finanimg1"/>
                </div>
                <div className="finandoublediv">
                <h1 style={{fontSize:'250%'}}>STAR Finance </h1><br/> 
                <p>Every Mercedes-Benz customer is different, so our finance is as flexible as you need 
                it to be to suit your requirements. STAR Finance provides you advanced funds to purchase 
                the STAR of your choice. You simply take ownership at the time of purchase and repay fixed 
                monthly instalments to Mercedes-Benz Financial Services over the agreed terms.</p><br/>
                <p>Benefits of STAR Finance:</p><br/>
                <p>1. Flexible contract terms ranging from 12 to 72 months.</p><br/>
                <p>2. Ownership of the vehicle from the start of the contract term.</p><br/>
                <p>3. Fixed interest rate so you always know your repayments.</p>
                </div>
            </div><br/>
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
export default Finance;