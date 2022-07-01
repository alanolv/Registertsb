import { Navbar,Nav,Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavbarApp() {
  return (
    <>
      <Navbar  bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="navbar navbar-brand">TOSHIBA</NavLink>
          <Nav className=" justify-content-end">
            <NavLink to="/Login" className="nav-link">Iniciar sesion</NavLink>
            <NavLink to="/Register" className="nav-link">Registrarse</NavLink>
          
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarApp;
