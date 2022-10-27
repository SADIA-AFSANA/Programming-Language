import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={news.image_url} />
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>
                        {news.details}
                    </Card.Text>
                    <Link to={`/category/${news.category_id}`}>
                        <Button variant="primary">back to all categories</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;