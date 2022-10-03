import { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Signup = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    return ( 

        <>
        <div className="signup">
            <Card>
                <Card.Body>
                    <h2>Create your account here</h2>

            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required>

                    </Form.Control>
                </Form.Group>

                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required>

                    </Form.Control>


                </Form.Group>

                <Form.Group id="passwordConfirm">
                    <Form.Label>Confirm your password</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required>

                    </Form.Control>

                </Form.Group>





                <Button type="submit" className="btn btn-primary w-100">Sign Up</Button>
            </Form>
            </Card.Body>

            </Card>
        </div>
        </>
     );
}
 
export default Signup;