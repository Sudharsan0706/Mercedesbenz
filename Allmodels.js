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
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import img2 from './images/EQS Limousine1.png';
import img3 from './images/EQS Limousine2.png';
import img4 from './images/EQS Limousine3.png';
import img5 from './images/A-class Limousine1.png';
import img6 from './images/A-class Limousine2.png';
import img7 from './images/A-class Limousine3.png';
import img8 from './images/C-class Limousine1.png';
import img9 from './images/C-class Limousine2.png';
import img10 from './images/C-class Limousine3.png';
import img11 from './images/E-class LWB1.png';
import img12 from './images/E-class LWB2.png';
import img13 from './images/E-class LWB3.png';
import img14 from './images/Mercedes S-class1.png';
import img15 from './images/Mercedes S-class2.png';
import img16 from './images/Mercedes S-class3.png';
import img17 from './images/EQB1.png';
import img18 from './images/EQB2.png';
import img19 from './images/EQB3.png';
import img20 from './images/EQE SUV1.png';
import img21 from './images/EQE SUV2.png';
import img22 from './images/EQE SUV3.png';
import img23 from './images/GLA1.png';
import img24 from './images/GLA2.png';
import img25 from './images/GLA3.png';
import img26 from './images/GLB1.png';
import img27 from './images/GLB2.png';
import img28 from './images/GLB3.png';
import img29 from './images/GLC1.png';
import img30 from './images/GLC2.png';
import img31 from './images/GLC3.png';
import img32 from './images/GLE1.png';
import img33 from './images/GLE2.png';
import img34 from './images/GLE3.png';
import img35 from './images/GLE Couple1.png';
import img36 from './images/GLE Couple2.png';
import img37 from './images/GLE Couple3.png';
import img38 from './images/GLS1.png';
import img39 from './images/GLS2.png';
import img40 from './images/GLS3.png';
import img41 from './images/G-Class1.png';
import img42 from './images/G-Class2.png';
import img43 from './images/G-Class3.png';
import img44 from './images/Mercedes-Maybach GLS1.png';
import img45 from './images/Mercedes-Maybach GLS2.png';
import img46 from './images/Mercedes-Maybach GLS3.png';
import img47 from './images/A-Class hatchback1.png';
import img48 from './images/A-Class hatchback2.png';
import img49 from './images/A-Class hatchback3.png';
import img50 from './images/Mercedes-AMG GT4-door couple1.png';
import img51 from './images/Mercedes-AMG GT4-door couple2.png';
import img52 from './images/Mercedes-AMG GT4-door couple3.png';
import img53 from './images/E-class Cabirolet1.png';
import img54 from './images/E-class Cabirolet2.png';
import img55 from './images/E-class Cabirolet3.png';
import img56 from './images/Mercedes AMG SL Roadstar1.png';
import img57 from './images/Mercedes AMG SL Roadstar2.png';
import img58 from './images/Mercedes AMG SL Roadstar3.png';
const Allmodels=()=>{

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
            </div><br/>
            <h1 style={{marginLeft:'3%',color:'gray'}}>All Our Models</h1><br/>
            <Tabs
            defaultActiveKey="Limousine"
            id="fill-tab-example"
            className="mb-3 modelstab"
            fill>
            <Tab eventKey="Limousine" title="Limousine">
            <div className="modelsdiv">
            <h1 className="modelspara">EQS Limousine</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 1,62,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img2} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img3} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img4} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">A-Class Limousine</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 42,80,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img5} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img6} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img7} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">C-Class Limousine</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 57,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img8} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img9} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img10} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">E-Class LWB </h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 73,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img11} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img12} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img13} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">Mercedes-Maybach S-Class Limousine</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 2,69,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img14} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img15} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img16} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            </Tab>
            <Tab eventKey="SUV Range" title="SUV Range">
            <div className="modelsdiv">
            <h1 className="modelspara">EQB</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 74,50,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img17} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img18} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img19} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">EQE SUV</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 1,39,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img20} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img21} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img22} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">GLA</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 48,40,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img23} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img24} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img25} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">GLB</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 64,70,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img26} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img27} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img28} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">GLC</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 73,50,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img29} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img30} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img31} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">GLE</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 96,40,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img32} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img33} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img34} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">GLE Couple</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 1,61,20,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img35} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img36} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img37} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">GLS</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 1,30,80,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img38} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img39} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img40} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">G-Class</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 2,55,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img41} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img42} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img43} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">Mercedes-Maybach GLS</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 2,96,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img44} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img45} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img46} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            </Tab>
            <Tab eventKey="Hatchback" title="Hatchback">
            <div className="modelsdiv">
            <h1 className="modelspara">A-Class Hatchback</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 87,50,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img47} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img48} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img49} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            </Tab>
            <Tab eventKey="Coupe" title="Coupe">
            <div className="modelsdiv">
            <h1 className="modelspara">Mercedes-AMG GT4-door Coupe</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 3,30,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img50} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img51} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img52} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            </Tab>
            <Tab eventKey="Cabriolets/Roadsters" title="Cabriolets/Roadsters">
            <div className="modelsdiv">
            <h1 className="modelspara">E-Class Cabriolet</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 1,30,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img53} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img54} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img55} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            <div className="modelsdiv">
            <h1 className="modelspara">Mercedes-AMG SL Roadster</h1>
            <p className="modelspara" style={{fontSize:'large'}}>Starting from ₹ 2,35,00,000.00</p>
            <Carousel>
            <Carousel.Item>
            <img src={img56} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img57} className="modelsimg"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={img58} className="modelsimg"/>
            </Carousel.Item>
            </Carousel></div><br/>
            </Tab>
            </Tabs><br/>
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
export default Allmodels;