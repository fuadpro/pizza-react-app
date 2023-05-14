import {Badge, Button, Container, Nav, Navbar} from 'react-bootstrap';
import {FaShoppingBasket} from 'react-icons/fa'

function Header({order, setModalShow}) {
  return (
    <header className="bg-dark ">
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#"><img style={{ width: '5rem' }} src="./assets/img/logo.png" alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link className="active" href="#action1">Ana səhifə</Nav.Link>
                        <Nav.Link href="#action2">Kompaniyalar</Nav.Link>
                        <Nav.Link href="#action3">Müştəri xidmətləri</Nav.Link>
                    </Nav>
                    <Button onClick={ () => setModalShow(true) } variant="outline-light" className="btn btn-outline-light position-relative">
                        <FaShoppingBasket />
                        {    order.length > 0 &&
                            <Badge bg="secondary" className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                            {order.length}
                        </Badge>
                        }
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;