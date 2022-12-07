import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Login.css'
import { FaGoogle, FaGithub, FaUser } from "react-icons/fa";
import useTitle from '../../../Hooks/useTitle';



const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const { providerLogin, signIn, githubSinIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();
    useTitle('Login')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githubSinIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message);

            })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>


                <Button className="" variant="primary" type="submit">
                    Log in
                </Button>

                <Form.Text className="text-danger ">
                    {error}
                </Form.Text>
            </Form>

            <div>
                <Button onClick={handleGoogleSignIn}> <FaGoogle></FaGoogle>  login with google</Button>

            </div>
            <div>
                <Button className='btn' onClick={handleGithubSignIn}> <FaGithub></FaGithub>  login with git hub</Button>

            </div>

            <p>New to the Website?Please <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;