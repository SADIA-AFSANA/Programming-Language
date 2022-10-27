import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useActionData, useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../../componenet/NewsSummerryCard/NewsSummeryCard';


import RightSideNav from '../../../componenet/RightSideNav';

import LeftSideNav from '../../LeftSideNav/LeftSideNav';


const Category = () => {
    const allNews = useLoaderData();
    return (
        <div>
            {/* <LeftSideNav></LeftSideNav> */}
            <h2>This is category{allNews.length}</h2>
            {/* {
                allNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}

                ></NewsSummeryCard>)
            } */}
            {/* <LeftSideNav></LeftSideNav> */}
            <Container>
                <Row>
                    <Col lg="4">
                        <LeftSideNav></LeftSideNav>
                    </Col>

                    <Col lg="8">
                        {
                            allNews.map(news => <NewsSummeryCard
                                key={news._id}
                                news={news}

                            ></NewsSummeryCard>)
                        }
                    </Col>



                </Row>

            </Container>
        </div>
    );
};

export default Category;