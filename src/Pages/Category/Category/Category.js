import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import RightSideNav from '../../../componenet/RightSideNav';

import LeftSideNav from '../../LeftSideNav/LeftSideNav';


const Category = () => {

    return (
        <div>
            <h2>This is category</h2>
            {/* <LeftSideNav></LeftSideNav> */}
            <Container>
                <Row>
                    <Col lg="5">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <RightSideNav></RightSideNav>
                    </Col>


                </Row>

            </Container>
        </div>
    );
};

export default Category;