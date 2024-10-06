import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar bg="success" data-bs-theme="success">
      <Container>
        <Navbar.Brand href="#home"><strong>Where in The World?</strong></Navbar.Brand>
        <Navbar.Brand><p onClick={()=> doc}><i className="fa-solid fa-moon"></i>&nbsp;Dark Mode</p></Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbarr;