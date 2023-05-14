import { useState, useEffect  } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";
import {pizza , sizes} from '../assets/data.js'


function App() {
  const [modalShow, setModalShow] = useState(false);
  const [order, setOrder] = useState([])


  useEffect(() => {
    const storedOrder = localStorage.getItem("order");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  function removeFromOrder(id) {
    let b = order.filter( item => item.id !== +id )
    setOrder(b)
  }

  // function addToOrder(pid, size, quant) {
  //   let b = [...order]
  //   b.push({ id: b.length + 1, pid: pid, size: size, quant: quant })
  //   setOrder(b)
  // }

  function addToOrder(pid, size, quant) {
    const existingOrder = order.findIndex((orderItem) => orderItem.pid === pid && orderItem.size === size);
    if (existingOrder !== -1) {
      const updatedOrder = [...order];
      updatedOrder[existingOrder].quant += quant;
      setOrder(updatedOrder);
    } else {
      const newOrderItem = { id: order.length + 1, pid: pid, size: size, quant: quant };
      setOrder([...order, newOrderItem]);
    }
  }

  return (
    <>
      <Header  order={order} setModalShow={setModalShow} />
      <Main sizes={sizes} pizza={pizza} addToOrder={addToOrder} />
      <Footer />

      <Basket pizza={pizza} order={order} setOrder={setOrder} removeFromOrder={removeFromOrder} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;
