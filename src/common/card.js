import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link } from 'react-router-dom';
import store from '../store';

export default function CardComponent(props) {
    return (
        <>
            <Card style={{ width: '18rem', margin: '10px', color: 'black' }}>
                <Card.Img variant="top" src={props.product.images[0]} />
                <Card.Body style={{maxHeigh: '10em', overflowY: 'scroll'}}>
                    <Card.Title>{props.product.title}</Card.Title>
                    <Card.Text>
                        {props.product.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price: {props.product.price}</ListGroup.Item>
                    <ListGroup.Item>Rating: {props.product.rating}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className='btn btn-success'>
                    <Link style={{color:'#FFF', borderRadius: '0'}} to={`/product/${props.product.id}`}>See more</Link>
                    </button>
                    
                    <button onClick={() => {
                            store.dispatch({
                                type: 'REMOVE_PRODUCT',
                                payload: props.product.id
                            })
                        }}>Remove Element</button>
                </Card.Body>
            </Card>
        </>
    )
};