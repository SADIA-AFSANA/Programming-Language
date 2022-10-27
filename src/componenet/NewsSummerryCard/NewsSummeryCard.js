import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({ news }) => {
    const { _id, tittle, image_url, details } = news;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {details?.length > 200 ?
                            <p>{details?.slice(0, 250) + '...'}<Link to={`/news/${_id}`} > Read More</Link></p>
                            :
                            <p>{details}</p>


                        }
                    </Card.Text>
                    {/* <Button variant="primary"></Button> */}
                </Card.Body>
            </Card>
        </div >
    );
};

export default NewsSummeryCard;