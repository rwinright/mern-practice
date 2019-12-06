import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { connect } from 'react-redux';
import uuid from 'uuid'
import { addItem } from '../actions/itemActions';

function ItemModal(props) {

  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: name
    }

    // addItem via addItem action
    props.addItem(newItem);
    setModal(!modal)
  }

  return (
    <div>
      <Button
        style={{ marginBottom: "2rem" }}
        color="dark" onClick={() => setModal(!modal)}
      >Add Item</Button>
      <Modal
        isOpen={modal}
        toggle={() => setModal(!modal)}
      >
        <ModalHeader toggle={() => setModal(!modal)}>
          Add to Shopping List
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                id="item"
                placeholder="Add shopping item "
                onChange={(e) => setName(e.target.value)}>
              </Input>
              <Button
                color="dark"
                style={{marginTop: "2rem"}}
                block
              >
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal)