import { Container } from "react-bootstrap";
import Pizza from "./Pizza";

function Main({pizza, sizes, addToOrder}) {
    return (
      <main className="py-5">
        <Container>
            <Pizza pizza={pizza} sizes={sizes} addToOrder={addToOrder}/>
        </Container>
      </main>
    );
  }
  
  export default Main;