import { useState, useLayoutEffect } from 'react';
import { Button, Card, Col, Form, Row, InputGroup } from 'react-bootstrap';

const path = './assets/img/'

function Good({ pizza, sizes, addToOrder }) {
  let { id, img, name, desc, price } = pizza;
  let [size, setSize] = useState( Object.keys(price)[0] )
  let [count, setCount] = useState(1)

  useLayoutEffect(()=>{
    setSize( Object.keys(price)[0] )
  }, [pizza])


  function changeSize(e) {
    setSize(e.target.value)
    setCount(1)
  }

  function resetSelect(){
    setCount(1)
    setSize(Object.keys(price)[0]);
  }
  function changeCount(arg) {
    if (arg && count < 20) { setCount(count + 1) }
    else if (!arg && count > 1) { setCount(count - 1) }
  }
  return (
    <Card className="mb-3 align-items-stretch d-flex" >
      <Card.Img variant="top" src={path + img} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title style={{ height: '42px' }}>{name}</Card.Title>
        <Card.Text className='mb-4 ' style={{ height: '80px' }}>{desc}</Card.Text>
        <Row>
          <Col xs={8}>
            <Form.Select value={size} onChange={changeSize}>
              {Object.keys(price).map((s, i) => <option key={i} value={s}>{sizes[s]}</option>)}
            </Form.Select>
          </Col>
          <Col xs={4} className='text-end text-nowrap'>
            <h3>{price[size] * count}₼</h3>
          </Col>
        </Row>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <Button variant="danger" onClick={() => changeCount(false)}>-</Button>
          </InputGroup.Text>
          <Form.Control aria-describedby="inputGroup-sizing-default" value={count} readOnly />
          <InputGroup.Text>
            <Button variant="success" onClick={() => changeCount(true)}>+</Button>
          </InputGroup.Text>
        </InputGroup>
        <Card.Text className='text-center mt-2'>
          <Button onClick={ () => { addToOrder(id, size, count); resetSelect() } } variant="primary">Səbətə at</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Good