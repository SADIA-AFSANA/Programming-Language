import React from 'react';
import { Button, Card } from 'react-bootstrap';
import useTitle from '../../../Hooks/useTitle';
import './Home.css'

const Home = () => {
    useTitle('Home')
    return (
        <div>

            <div className='home'>
                <h2>Programming Language

                </h2>
            </div>

            <div className='pic'>
                <img src='https://cdn.educba.com/academy/wp-content/uploads/2019/10/Best-Programming-Languages.png' alt=""></img>
            </div>

            <Card >
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfnwBC0TzZ_WMJ-fQq7UPkCpHbP2HTKcq8g&usqp=CAU" />
                <Card.Body className='home'>
                    <Card.Title>Java</Card.Title>
                    <Card.Text>
                        Learn Java. Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.

                        While most modern Java applications combine the Java runtime and application together, there are still many applications and even some websites that will not function unless you have a desktop Java installed. Java.com, this website, is intended for consumers who may still require Java for their desktop applications – specifically applications targeting Java 8. Developers as well as users that would like to learn Java programming should visit the dev.java website instead and business users should visit oracle.com/java for more information.

                    </Card.Text>

                    <Button variant="primary">see my website</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Home;