import React, { useRef } from 'react';
import { Accordion, Button, Container } from 'react-bootstrap';
import Pdf from 'react-to-pdf';

const Blogs = () => {
    const ref = useRef();
    return(
        <Container className='my-5'>
            <div className="my-4 text-end">
                <Pdf targetRef={ref} filename="document.pdf">
                    {({ toPdf }) => (
                        <Button onClick={toPdf} className='bg-transparent text-dark border-warning fw-semibold'>Download As PDF</Button>
                    )}
                </Pdf>
            </div>
            <Accordion defaultActiveKey="0" ref={ref}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h4>1. Tell us the differences between uncontrolled and controlled components.</h4> </Accordion.Header>
                    <Accordion.Body>
                    Controlled components refer to those components that have their state and behavior controlled by the parent component.
                    <br />On the other hand, uncontrolled components manage their own state internally. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h4>2. How to validate React props using PropTypes</h4> </Accordion.Header>
                    <Accordion.Body>
                    Props are mainly used to pass data from one components to another. PropTypes allows to define the type of the props that component should expect. This will prove useful because of catching errors early. There are some proptypes "PropsTypes.array", "PropsTypes.boo;", "PropsTypes.string", etc. Example: <pre>
                        {
                        `
                            function MyComponent(props) {
                                return <div>{props.message}</div>;
                            }
                            MyComponent.propTypes = {
                                message: PropTypes.string.isRequired,
                            };
                        `
                         }
                        </pre> 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h4>3. Tell us the difference between nodejs and express js.</h4> </Accordion.Header>
                    <Accordion.Body>
                    Node js is an open source cross platform runtime environment for executing JS code outside of browser. This platform basically used to build i/o, server-side apps. This build on google's V8 engine. Runtime platform or environment designing for server side execution of javaScript.
                    <br />
                    On the other hand, Express js is a small framework that sits on top of Node js web functionality to simplify its APIs. Its facilitates the rendering of dynamic HTTP objects. This build on Node js. written in javascript. This is a framework based on Node js. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header> <h4>4. What is a custom hook, and why will you create a custom hook?</h4> </Accordion.Header>
                    <Accordion.Body>
                    Custom hook are reusable functions that are can be used by developer. Using custom hook some there some special and unique functionality can be added. Custom hook always starts with the name 'use'. The advantage of custom hook is reusability, readability, and testability. And that's the reason developers like it most. 
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </Container>
    )
};

export default Blogs;