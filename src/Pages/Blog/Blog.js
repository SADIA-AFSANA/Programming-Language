import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='blog-head'>
                <h1>Answer the questions</h1>
            </div>
            <div className='blog'>
                <div>
                    <h3>Q.1-  what is cors?</h3>
                    <p> Ans- Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

                </div>
                <div>
                    <h3>Q.2- Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p> Ans-  Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                        FirebaseUI provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app.</p>

                </div>
                <div>
                    <h3>Q.3- How does the private route work?</h3>
                    <p> Ans-  Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.

                    </p>

                </div>
                <div>
                    <h3>Q.3- What is Node? How does Node work?</h3>
                    <p> Ans-  Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.

                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;