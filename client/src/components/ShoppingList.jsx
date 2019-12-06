import React, { useEffect } from 'react'

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

function ShoppingList(props) {

  const { items } = props.item;

  useEffect(() => {
    props.getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onDeleteClick = (id) => {
   props.deleteItem(id)
  }


  return (
    <Container>

      <ListGroup>
        <TransitionGroup className="shopping-list">
          {
            items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    style={{ marginRight: '0.5rem' }}
                  onClick={() => onDeleteClick(id)}
                  >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </ListGroup>
    </Container>
  )
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})

export default connect(mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
