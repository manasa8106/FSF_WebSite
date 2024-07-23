import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Carousel, Card, Button, Collapse,  Row, Col, Image  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import './App.css'; // Your custom CSS file
import fsf from './images/fsf.jpeg';
import nine from './images/nine.jpeg';
import sbp from './images/sbp.jpeg';
import bigg from './images/bigg.jpeg';
import one from './images/one.png';
import two from './images/two.jpg';
import three from './images/three.png';

function App() {

 
  const [hoverOpen, setHoverOpen] = useState(false);
  const [clickOpen, setClickOpen] = useState(false);
  const [anotherOpen, setAnotherOpen] = useState(false);

  const [showMore, setShowMore] = useState(false); //for read more button

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  // for scrolling header
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change this to the desired scroll position
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const industriesData = [
    {
      title: "Supply Chain",
      description:
        "Building Solutions for Supply Chain Management using the best practices of the industry on various systems and applications providing the most appropriate and effective SAP & Cloud integrated solutions.",
      icon: "bi-truck" // Ensure this icon class exists in Bootstrap Icons
    },
    {
      title: "Telecom",
      description:
        "We have been working with clients across the globe with end-to-end solution integration for the telecom industry starting from Visitor Management to Site Management Platforms with latest cloud technologies.",
      icon: "bi-phone" // Ensure this icon class exists in Bootstrap Icons
    },
    {
      title: "Healthcare",
      description:
        "IoT is the new Healthcare. We are having a proven expertise working with different cloud-based IoT Mobile & Web Integrated solutions for the health monitoring system on ease for major hospitals around the globe.",
      icon: "bi-heart" // Ensure this icon class exists in Bootstrap Icons
    }
  ];
  return (
    
    <div className="App">
     <Navbar variant="dark" expand="lg" fixed="top" className={scrolled ? 'navbar-scrolled' : ''}>
  <Container>
    <Navbar.Brand href="#home">
      <img
        src={fsf} // Path to your logo image file
        width="80" // Adjust width as needed
        height="80" // Adjust height as needed
        className="d-inline-block align-top" // Adjust alignment as needed
        alt="Logo"
        style={{borderRadius: '10%'}}
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" style={{marginLeft: '210px'}}> {/* ml-auto aligns items to the right */}
        <Nav.Link href="/home" className="nav-link" style={{ color: '#ffffff' , fontWeight: 'bold'}}>Home</Nav.Link>
        <Nav.Link href="#industries" className="nav-link" style={{ color: '#ffffff', fontWeight: 'bold' }}>Industries</Nav.Link>
        <Nav.Link href="#services" className="nav-link" style={{ color: '#ffffff', fontWeight: 'bold' }}>Services</Nav.Link>
        <Nav.Link href="#Teams" className="nav-link" style={{ color: '#ffffff', fontWeight: 'bold' }}>Team</Nav.Link>
        <Nav.Link href="#client" className="nav-link" style={{ color: '#ffffff', fontWeight: 'bold' }}>Clients</Nav.Link>
        <Nav.Link href="#contact" className="nav-link" style={{ color: '#ffffff', fontWeight: 'bold' }}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www-file.huawei.com/-/media/corp2020/publications/winwin/37/huawei-digitaltrans.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={three}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="carousel-caption">
            
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="container-fluid" id="why-us">
  <div className="row">
    <div className="col-md-12 text-center">
      <h1 className="display-4" style={{marginTop: '90px'}}>Why Us?</h1>
      {/* <hr className="my-4" /> */}
    </div>
  </div>
  <div className="row">
  <div className="col-md-6">
  <p style={{
    marginTop: '90px',
    fontSize: '20px',
    textAlign: 'justify', // add this to justify the text
    paddingLeft: '30px', // add some padding to move the text to the right
    paddingRight: '30px', // add some padding to move the text to the right
    '@media (max-width: 768px)': { // add a media query for smaller screens
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  }}>
    {showMore ? (
      <span>
         FSF Global IT Solutions is the most popular service provider for customers looking for product development and employee outsourcing firm with a highly diversified and flexible approach of providing expert quality on end-to-end solutions for customers. 
         FSF Global IT Solutions. offers a range of products and services including cloud computing solutions, cybersecurity services, artificial intelligence (AI) and machine learning (ML) platforms, and Internet of Things (IoT) integration. Their flagship product, InnoCloud, is a highly scalable cloud platform used by enterprises for efficient data management and analytics
      </span>
    ) : (
      <span>
        FSF Global IT Solutions is the most popular service provider for customers looking for product development and employee outsourcing firm with a highly diversified and flexible approach of providing expert quality on end-to-end solutions for customers. 
        <br /><br /> {/* add a line break to move the button down */}
        <Button variant="primary" onClick={handleShowMore} style={{marginLeft: '20px' }}> {/* remove float and margin top */}
          Read More...
        </Button>
      </span>
    )}
  </p>
</div>
<div className="col-md-4 col-sm-12">
  <Card style={{ border: 'none', marginTop: '70px' }}>
    <Card.Body>
      <Button
        style={{
          height: 70,
          fontSize: 36,
          backgroundColor: hoverOpen ? 'brown' : 'whitesmoke',
          color: hoverOpen ? 'whitesmoke' : 'black',
          boxShadow: 'none',
          border: 'none',
          width: '100%',
        }}
        onClick={() => {
          setHoverOpen(!hoverOpen);
          setClickOpen(false);
          setAnotherOpen(false);
        }}
        aria-controls="example-collapse-text"
        aria-expanded={hoverOpen}
        className="btn-block"
      >
        Expert R&S
      </Button>

      <Collapse in={hoverOpen}>
        <Card.Text style={{ backgroundColor: hoverOpen ? 'brown' : 'whitesmoke', color: hoverOpen ? 'whitesmoke' : 'black', fontSize: 24 }} className="text-center">
          We believe that the planning and execution of the product should have a high priority
          over efort-less execution fpf a successful approach of solving the realtime problems with utmost analysis..
        </Card.Text>
      </Collapse>
      <div style={{ marginTop: 20 }}>
        <Button
          style={{
            height: 70,
            fontSize: 36,
            backgroundColor: clickOpen ? 'brown' : 'whitesmoke',
            color: clickOpen ? 'whitesmoke' : 'black',
            boxShadow: 'none',
            border: 'none',
            width: '100%',
          }}
          onClick={() => {
            setClickOpen(!clickOpen);
            setHoverOpen(false);
            setAnotherOpen(false);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={clickOpen}
          className="btn-block"
        >
         Tech Expertise
        </Button>
        <Collapse in={clickOpen}>
          <Card.Text style={{ backgroundColor: clickOpen ? 'brown' : 'whitesmoke', color: clickOpen ? 'whitesmoke' : 'black', fontSize: 24 }} className="text-center">
           Our team consists of expert and well known industry leaders with a focused version of implementing the
           high quality solution deployments and finding the best talent for outsourcing and working with leading companies.
          </Card.Text>
        </Collapse>
      </div>
      <div style={{ marginTop: 40 }}>
        <Button
          style={{
            height: 70,
            fontSize: 36,
            backgroundColor: anotherOpen ? 'brown' : 'whitesmoke',
            color: anotherOpen ? 'whitesmoke' : 'black',
            boxShadow: 'none',
            border: 'none',
            width: '100%',
          }}
          onClick={() => {
            setAnotherOpen(!anotherOpen);
            setHoverOpen(false);
            setClickOpen(false);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={anotherOpen}
          className="btn-block" 
        >
        
        Execution
        </Button>
        <Collapse in={anotherOpen}>
          <Card.Text style={{ backgroundColor: anotherOpen ? 'brown' : 'whitesmoke', color: clickOpen ? 'whitesmoke' : 'black', fontSize: 24 }} className="text-center">
           Our work has been recognised and had been vouched by several industry experts and have been
           thriving over the best-in-class service providing and improved service performance over the years.
          </Card.Text>
        </Collapse>
      </div>
    </Card.Body>
  </Card>
</div>
  </div>
</div>
{/* Industries Section */}
<Container>
      <Row className="my-4" id='industries'>
        <Col>
          <h2 style={{ fontSize: '36px', paddingBottom: '110px' }}></h2>
          <p style={{ fontSize: '24px' }}>
            Our services are driven across various industries and domains providing Digital Transformation Solutions & Automation Services.
          </p>
        </Col>
      </Row>
      <Row>
        {industriesData.map((industry, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4 text-center">
            <Card className="industry-card">
              <Card.Body>
              <Card.Title style={{textAlign: 'center', fontSize: '30px', color: 'maroon'}}>{industry.title}</Card.Title>
              <div className="text-center" style={{fontSize: '45px'}}>
               <i className={`bi ${industry.icon} `} style={{ fontSize: '70px' }}></i>
              </div>
                <Card.Text style={{ fontSize: '20px' }}>{industry.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    {/* end of Industries Section */}
    
      {/* Services Section */}
      <section id="services" className="Services" style={{ backgroundColor: 'white' }}>
      <Container fluid>
         <h2 className="text-center mb-5" style={{ paddingBottom: '110px'}}></h2> 
        <p className="services-list" style={{ fontSize: '24px' }}>
          Our Services Consist of: UI/UX, Product Development (Web/Mobile), Cloud Migration, Saas Application Development, Server Management, Resource Outsourcing, US IT Staffing, SAP Training & Development, Robotics and Corporate Event Management.
        </p>
      </Container>

      {/* Three Boxes Section */}
      <section className="ThreeBoxes">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                  <i className="bi bi-cloud" style={{ fontSize: '56px',  color: '#007bff' }}></i>
               
                <div className="service-info">
                  <h3 style={{color: 'maroon'}}>Digital Transformation</h3>
                  <p className="margin b-5" style={{ fontSize: '20px' }}>
                    Uncover the Possibilities of Digital Transformation with Cloud Integrated Product Development.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                
                  <i className="bi bi-terminal" style={{ fontSize: '56px',color: '#007bff'}}></i>
               
                <div className="service-info">
                  <h3 style={{color: 'maroon'}}>IoT Solution Integrations</h3>
                  <p className="margin b-6" style={{ fontSize: '20px' }}>
                    Unlock The Power of Connectivity with IoT Solution Integration in various industries and domains.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
               
                  <i className="bi bi-robot" style={{ fontSize: '56px', color: '#007bff' }}></i>
               
                <div className="service-info">
                  <h3 style={{color: 'maroon'}}>Industrial Automation</h3>
                  <p className="margin b-5" style={{ fontSize: '20px' }}>
                    Automate Your Business Processes With Powerful AI/Ml Integrated Method Solution Implementations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Additional Row of Boxes */}
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
                
                  <i className="bi bi-lock" style={{ fontSize: '56px', color: '#007bff' }}></i>
               
                <div className="service-info">
                  <h3 style={{ transition: 'margin 0.3s ease-in-out', color: 'maroon' }}>Information Security</h3>
                  <p className="margin b-5" style={{ fontSize: '20px', transition: 'margin 0.3s ease-in-out' }}>
                    Keep Your Data Safe With Our Top-Notch Cyber/Data Security Solution Deployments.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', marginTop: '30px' }}>
               
                  <i className="bi bi-people" style={{ fontSize: '56px', color: '#007bff' }}></i>
               
                <div className="service-info">
                  <h3 style={{ transition: 'margin 0.3s ease-in-out' , color: 'maroon'}}>Staff Augmentation</h3>
                  <p className="margin b-5" style={{ fontSize: '20px', transition: 'margin 0.3s ease-in-out' }}>
                    Accelerate Your Company's Growth with our Professional Staff Augmentation and Outsourcing.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <div className="box" style={{ backgroundColor: 'whitesmoke', padding: '20px', borderRadius: '30px', marginTop: '30px' }}>
               
                  <i className="bi bi-file-earmark-spreadsheet" style={{ fontSize: '56px', color: '#007bff' }}></i>
               
                <div className="service-info">
                  <h3 style={{ transition: 'margin 0.3s ease-in-out', color: 'maroon' }}>SAP Solutions</h3>
                  <p className="margin b-5" style={{ fontSize: '20px', transition: 'margin 0.3s ease-in-out' }}>
                    Helping Peers to Learn, Grow & Succeed with our SAP Training and Development Program!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>

{/* end of Services Section */}

{/*  Team Section */}
<div id="Teams"className="row mb-4">
    <div className="col-8 text-center">
    
      <h2 style={{paddingTop: '110px'
       
      }}>It Takes A Team To Reach The Top!</h2>
     <p className="col-12 text-center" style={{ fontSize: 'calc(0.9rem + 0.5vw)',paddingTop: '30px', marginLeft: '30px' }}>
  Expertise is the fuel that drives a team towards their goals and helps them
</p>
<p className="col-12 text-center" style={{ fontSize: 'calc(0.9rem + 0.5vw)' ,marginLeft: '30px' }}>
  reach new heights. It takes more than just one individual to achieve greatness.
</p>
    </div>
  </div>

  <Container className="my-5">
  <Row xs={1} md={2} lg={3} className="g-4">
    {/* First Card */}
    <Col>
      <Card className="h-100 mb-4" style={{
        marginBottom: '80px',
        backgroundColor: 'whitesmoke',
        fontSize: 'calc(0.8rem + 0.7vw)'
      }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg" style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{
            fontWeight: 'bolder',
            fontSize: 'calc(1.2rem + 0.8vw)'
          }}>IT & Development</Card.Title>
          <Card.Text style={{
            height: '200px',
            objectFit: 'cover',
            fontSize: 'calc(0.7rem + 0.6vw)'
          }}>
            Look no further than our expert development team! Our team of highly skilled and dedicated IT professionals has years of experience in crafting innovative, customized solutions tailored specifically to meet the unique needs of each client.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Second Card */}
    <Col>
      <Card className="h-100 mb-4" style={{
        marginBottom: '80px',
        backgroundColor: 'whitesmoke',
        fontSize: 'calc(0.8rem + 0.7vw)'
      }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGYf9QWBVk1L12_i43M98JzKgghl683o2lw&s" style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{
            fontWeight: 'bolder',
            fontSize: 'calc(1.2rem + 0.8vw)'
          }}>Cyber Security</Card.Title>
          <Card.Text style={{
            height: '200px',
            objectFit: 'cover',
           fontSize: 'calc(0.7rem + 0.6vw)'
          }}>
            From firewalls, encryption tools, antivirus software, intrusion detection systems, and penetration testing services - We provide a plethora of effective measures available today that can safeguard your company's valuable information.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    {/* Third Card */}
    <Col>
      <Card className="h-100 mb-4" style={{
        marginBottom: '80px',
        backgroundColor: 'whitesmoke',
       fontSize: 'calc(0.7rem + 0.6vw)'
      }}>
        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/human-resources-concept-with-hand_23-2150389101.jpg" style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title style={{
            fontWeight: 'bolder',
            fontSize: 'calc(1.2rem + 0.8vw)'
          }}>Human Resource</Card.Title>
          <Card.Text style={{
            height: '200px',
            objectFit: 'cover',
            fontSize: 'calc(0.7rem + 0.6vw)'
          }}>
            With an expert team at your side, watch as you unlock unprecedented growth opportunities faster and cheaper than ever before. So don't sweat the small stuff - outsource with confidence today for bigger rewards tomorrow!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
{/* end of team Section */}

{/*  clients */}  

<Container className="clients-logos" id="client" style={{ marginTop: '110px'}}>
      <h2 style={{ marginBottom: '120px'}}>Our Clients & Partners</h2>
      <p style={{ marginBottom: '60px', fontSize: '20px'}}>Forever, We thrive to maintain Successful Relationships with our Clients and Partners to showcase a healthy relationship and improving opportunities.</p>
      <Row className='d-flex justify-content-center '>
  <Col xs={6} md={4} lg={3} xl={2}>
    <img src={nine} alt="Client Logo 1" className="img-fluid" style={{ width: '150px', height: '100px' }} />
  </Col>
  <Col xs={6} md={4} lg={3} xl={2}>
    <img src={sbp} alt="Client Logo 2" className="img-fluid" style={{ width: '150px', height: '100px' }} />
  </Col>
  <Col xs={6} md={4} lg={3} xl={2}>
    <img src={bigg} alt="Client Logo 3" className="img-fluid" style={{ width: '150px', height: '100px' }} />
  </Col>
</Row>
    </Container>

{/* end of clients */}  

{/* contact*/}
<Container fluid className="contact-section" id='contact'>
  <Row className="justify-content-center">
    <Col lg={8} md={10} sm={12} xs={12}>
      <h1 style={{ marginTop: '120px', textAlign: 'center' }}>IT Development & Recruitments</h1>
      <h4 style={{ marginTop: '40px', textAlign: 'center' }}>
        1-98/3/F/3, Plot No 5, 3rd Floor, KPR Avenue, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
      </h4>
      <Row className="contact-info">
        <Col xs={12} md={6} lg={4}>
          <strong style={{ fontSize: '24px' }}>Phone:</strong>
          <br />
          <span style={{ fontSize: '24px' }}>+9100632143</span>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <strong style={{ fontSize: '24px' }}>Gmail:</strong>
          <br />
          <span style={{ fontSize: '24px' }}>info@fullstackfresher.com</span>
        </Col>
      </Row>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.216521774984!2d78.38408650958581!3d17.449347800950417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed7092fdab%3A0x22c9a1731ac2ad51!2sFSF%20Global%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1721412777677!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0, marginBottom: '60px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Col>
  </Row>
</Container>
{/* end of contact */}

<footer className="footer" style={{
  backgroundColor: '#333',
  color: '#ffffff',
  fontSize: '24px', 
  textAlign: 'center',
  padding: '40px 20px', 
  margin: '0 auto', 
}}>
  <Container>
    <Row>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>About Us</h5>
        <p style={{ fontSize: '20px', margin: '30px 0' }}>
        FSF Global IT Solutions is the most popular service provider for customers looking for product development and employee outsourcing firm with a highly diversified and flexible approach of providing expert quality on end-to-end solutions for customers.
        </p>
      </Col>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>Sitemap</h5>
        <ul style={{ listStyle: 'none', padding: '0', margin: '30px 0' }}>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>IT & Development</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Cyber Security</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Human Resource</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Industries</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Services</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Contact us</a></li>
        </ul>
      </Col>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>Contact</h5>
        <p style={{ fontSize: '18px', margin: '30px 0' }}>
          <i className="fas fa-map-marker-alt flex-column" style={{ fontSize: '36px', marginRight: '20px', color: 'white'}}></i>
          Backside of Amma Nilayam, Address : 1-98/3/F/3, Plot No 5, 3rd Floor, KPR Avenue, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
        </p>
        <p style={{ fontSize: '18px', margin: '30px 0' }}>
          <i className="fas fa-envelope" style={{ fontSize: '36px', marginRight: '20px', color: 'white'}}></i>
          <a href="mailto:info@9thdimension.co.in" style={{ textDecoration: 'none', color: '#ffffff' }}>info@fullstackfresher.com</a><br />
          <i className="fas fa-phone" style={{ fontSize: '36px', marginRight: '100px', padding: '30px 0px' ,color: 'white'}}></i>
          +9100632143
        </p>
      </Col>
      <Col xs={12} md={3} style={{ marginBottom: '20px' }}>
        <Row>

          <Col xs={10} md={10} style={{ paddingLeft: '0' }}>
            <h5 style={{color: 'whitesmoke', fontSize: '30px' , fontWeight: 'bolder'}}>Follow us</h5>
            <ul style={{ listStyle: 'none', padding: '0', margin: '30px 0' }}>
              <li><a href="#" target="_blank" style={{ textDecoration: 'none', color: '#ffffff'}}><i className="fab fa-facebook-f" style={{ fontSize: '36px', marginRight: '10px' }}></i></a></li>
              <li><a href="#" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}><i className="fab fa-twitter" style={{ fontSize: '36px', marginRight: '10px',marginTop: '30px' }}></i></a></li>
              <li><a href="#" target="_blank" style={{ textDecoration: 'none', color: '#ffffff' }}><i className="fab fa-linkedin-in" style={{ fontSize: '36px', marginRight: '10px',marginTop: '30px' }}></i></a></li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
          <Col sm={12} className="text-center">
            <p style={{ color: '#fff', fontSize: '25px' }}>&copy; 2024 [ FSF Global IT Solutions]. All rights reserved.</p>
          </Col>
        </Row>
  </Container>
</footer>
    </div>
  );
}

export default App;