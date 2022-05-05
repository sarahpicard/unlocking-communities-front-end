import { GiDroplets } from 'react-icons/gi';
import { FaPencilAlt, FaFireAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { useState } from 'react';
import styles from './EditWater.module.css';

>>>>>>> b36dddf08f827c0ed4d037463918e343a2a8522c
const EditWater = () => {
    // State

    const [stockOut, setStockOut] = useState({
        stockOut: 0,
    })

    const onStockChange = (e) => {
        setStockOut({ stockOut: e.target.value })
    }
    const handleSubmit = async evt => {
        evt.preventDefault();
    }
    return (
        <div>
<<<<<<< HEAD
            <h1>Filter Inventory</h1>

            autoComplete='off' onSubmit={handleSubmit}
            <h2>Water Filters <GiDroplets></GiDroplets> <button><FaPencilAlt></FaPencilAlt></button></h2>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
          <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quanitity Out-Pending</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="36" 
              onChange={onStockChange}
            />
          </Form.Group>
          
        <Form.Group as={Col} controlId="formBuyerLast">
          <Form.Label>Quanitity In-Stock</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="64"
            readOnly
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
          <Form.Group as={Col} controlId="formBuyerFirst">
            <Form.Label>Quantity In-Transit</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="500" 
              readOnly
            />
          </Form.Group>
        <Form.Group as={Col} controlId="formBuyerLast">
          <Form.Label>Quanity Ordered </Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Pending Approval" 
            readOnly
          />
        </Form.Group>
      </Row>
      </Form>
                </Container>
=======
            <h1 className={styles.h1}>Edit Filter Inventory</h1>

            <form autoComplete='off' onSubmit={handleSubmit} className={styles.form}>

            <div className={styles.formdiv}>
                <p className={styles.inputline}>Water Filters         
                    {/* <GiDroplets></GiDroplets>  */}
                    <button className={styles.editbtn}><FaPencilAlt></FaPencilAlt></button>
                </p>
                <p className={styles.inputline}>Quantity In-Stock: <input type="number" onClick={onChangeInStock} className={styles.numberInput}></input></p>
                <p className={styles.inputline}>Quantity to Order: <input type="number" className={styles.numberInput}></input></p>
                <hr />
            </div>
>>>>>>> b36dddf08f827c0ed4d037463918e343a2a8522c

            <div className={styles.btnblock}>
                <Link to="/"><button type="submit" className={styles.btn}>Save</button></Link>
                <Link to="/"><button type="reset" className={styles.btn}>Cancel</button></Link>
            </div>

        </div>
    )
}

export default EditWater;