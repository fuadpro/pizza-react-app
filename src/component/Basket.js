import { Button, Modal, Table, InputGroup, Form } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

function Basket({ order, setOrder, pizza, removeFromOrder, ...rest }) {
    const path = './assets/img/'

    function changeCount(arg, object) {
        if (arg )  object.quant += 1 
         else if (!arg && object.quant > 1) object.quant -= 1
            setOrder([...order])       
        }

    return (
        <Modal {...rest} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Səbət
                </Modal.Title>
            </Modal.Header>
            {order.length === 0 ? (
                <Modal.Body> 
                    <h2>Səbət boşdur</h2>
                </Modal.Body>
            ) : (
                <>
            <Modal.Body>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Şəkil</th>
                            <th>Ad</th>
                            <th>Ölçü</th>
                            <th>Qiymət</th>
                            <th>Sayı</th>
                            <th>Cəm</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(o => {
                                let p = pizza.find(item => item.id === o.pid)
                                return (
                                    <tr key={o.id}>
                                        <td><img src={path + p.img} className="thumb" alt="" /></td>
                                        <td>{p.name}</td>
                                        <td>{o.size}</td>
                                        <td>{p.price[o.size]}</td>
                                        <td>
                                            <InputGroup className="mb-3">
                                                <Button variant='warning' onClick={() => changeCount(false, o)}>-</Button>
                                                <Form.Control className="inputCount" value={o.quant} readOnly />
                                                <Button variant='warning' onClick={() => changeCount(true, o)}>+</Button>
                                            </InputGroup>
                                        </td>
                                        <td>{p.price[o.size] * o.quant} </td>
                                        <td><RiDeleteBin6Line onClick={() => { removeFromOrder(o.id) }} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <h4 className="mx-4">
                Cəm :  {
                        order.reduce((total, o) => {
                        const p = pizza.find(item => item.id === o.pid)
                        const itemTotal = p.price[o.size] * o.quant
                        return total + itemTotal
                        }, 0)
                    } AZN
                </h4>  
                <Button className="mx-2" onClick={rest.onHide}> Ödəniş</Button>
            </Modal.Footer>
            </>)}
        </Modal>
    );
}

export default Basket