import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import Good from './Good'
import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Pizza({ pizza, sizes, addToOrder}) {
  const filtr = ['Hamısı', 'Toyuq', 'Ət', 'Vegan', 'Acılı']
  const [radioValue, setRadioValue] = useState('Hamısı');
  const [searchVal, setSearchVal] = useState("")
  const [category, setCategory] = useState("Hamısı")
  const pizzas = pizza
                .filter(item => category === "Hamısı" ? category : item.cath.includes(category))
                .filter(p => p.name.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()))
                .map((p, i) => <Col key={i}><Good addToOrder={addToOrder} pizza={p} sizes={sizes} /></Col>)

  return (
    <>
      <Form className="bg-light my-3 p-3">
        <InputGroup className="mb-3" >
          <Form.Control onInput={(e) => setSearchVal(e.target.value)} placeholder="Axtarış..." />
          <InputGroup.Text id="basic-addon2"> <BiSearch /> </InputGroup.Text>
        </InputGroup>
        <ButtonGroup>
          {filtr.map((f, i) => (
            <ToggleButton key={i} onChange={(e) => { setCategory(e.target.value); setRadioValue(e.currentTarget.value) }}
              id={`radio-${i}`} variant='outline-danger' label={f} name="filtr" type="radio" value={f}
              checked={radioValue === f} >
              {f}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Form>
      <Row xs={1} md={2} xl={4}>
        {
          !pizzas.length ? <h1>Not found</h1> : pizzas
        }
      </Row>
    </>
  )
}

export default Pizza