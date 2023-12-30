import React, {useState} from "react";
import "./project2.css"
import img1 from './images/benzlogo.jpg'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icon } from 'react-icons-kit'
import {navicon} from 'react-icons-kit/fa/navicon'
import img2 from './images/benzfront.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import img3 from './images/benzrecom1.jpg';
import img4 from './images/benzrecom2.jpg';
import img5 from './images/benzrecom3.jpg';
import img6 from './images/benzrecom4.jpg';
import img7 from './images/benzrecom5.jpg';
import img8 from './images/benzrecom6.jpg';
import img9 from './images/benzrecom7.jpg';
import img10 from './images/benzrecom8.jpg';
import img11 from './images/benzrecom9.jpg';
import Accordion from 'react-bootstrap/Accordion';
import {androidCar} from 'react-icons-kit/ionicons/androidCar'
const Page2=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
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
            <div>
                <img src={img2} className="p2img2"/>
            </div>
            <div style={{textAlign:'center',fontFamily:'times new romans'}}>
                <h1>Know your way</h1>
                <h6>The new GLE LWB</h6>
            </div><br/><br/>
            <p className="p2recom">Our recommendations.</p>
            <Carousel responsive={responsive} className="p2carousel">
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'12%' }}>
            <Card.Img variant="top" src={img3}/>
            <Card.Body>
            <Card.Title>Here's to the heart</Card.Title>
            <Card.Text>
            MERCEDES-AMG C 43 4MATIC
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'12%' }}>
            <Card.Img variant="top" src={img4}/>
            <Card.Body>
            <Card.Title>Defining Class</Card.Title>
            <Card.Text>
            Since 1886
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%' }}>
            <Card.Img variant="top" src={img5}/>
            <Card.Body>
            <Card.Title>Buy your new Mercedes-Benz Online</Card.Title>
            <Card.Text>
            Browse the Mercedes-Benz Online Showroom today.
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'6%' }}>
            <Card.Img variant="top" src={img6}/>
            <Card.Body>
            <Card.Title>Pre-Owned cars</Card.Title>
            <Card.Text>
            Find your dream car with Mercedes-Benz pre-owned cars.
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'12%' }}>
            <Card.Img variant="top" src={img7}/>
            <Card.Body>
            <Card.Title>This is for you, world.</Card.Title>
            <Card.Text>
            The new EQS.
            </Card.Text>
            </Card.Body>
            </Card>   
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'12%' }}>
            <Card.Img variant="top" src={img8}/>
            <Card.Body>
            <Card.Title>Class for every day.</Card.Title>
            <Card.Text>
            The new A-Class Limousine.
            </Card.Text>
            </Card.Body>
            </Card>   
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'12%' }}>
            <Card.Img variant="top" src={img9}/>
            <Card.Body>
            <Card.Title>Welcome to the comfort zone.</Card.Title>
            <Card.Text>
            The Mercedes-Benz C-Class.
            </Card.Text>
            </Card.Body>
            </Card>   
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'12%' }}>
            <Card.Img variant="top" src={img10}/>
            <Card.Body>
            <Card.Title>Made to win the day.</Card.Title>
            <Card.Text>
            The Mercedes-Benz E-Class LWB.
            </Card.Text>
            </Card.Body>
            </Card>   
            </div>
            <div>
            <Card style={{ width: '18rem',height:'80%',width:'80%',paddingBottom:'12%' }}>
            <Card.Img variant="top" src={img11}/>
            <Card.Body>
            <Card.Title>Cares for what matters.</Card.Title>
            <Card.Text>
            S-Class.
            </Card.Text>
            </Card.Body>
            </Card>   
            </div>
            </Carousel><br/><br/><br/>
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
export default Page2;