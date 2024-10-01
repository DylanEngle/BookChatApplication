import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../api/axiosconfig';
import { HeaderContainer } from '../containers/header';
import Form from '../components/form';
import * as ROUTES from '../constants/routes';

function Signup(){
    const navigate = useNavigate();
    const[username, setUsername] = useState();

    const [emailAddress, setEmailAddress] = useState();
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [password, setPassword] = useState();
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [error, setError] = useState('');

    // check form input elements are valid
    const isInvalid = (username === '' || password === '' || emailAddress === '') || (!isValidEmail || !isValidPassword);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmailAddress(newEmail);
    
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsValidEmail(emailRegex.test(newEmail));
      };
    
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        setIsValidPassword(passwordRegex.test(newPassword));
    };

    const handleSignUp = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post("/api/v1/users/signup", 
                {payloadUsername: username, payloadEmailAddress: emailAddress, payloadPassword: password});
                navigate(ROUTES.SIGN_IN);
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input placeholder='Username' value={username} onChange={({target}) => setUsername(target.value)}></Form.Input>
                        <Form.Input placeholder='Email address' value={emailAddress} onChange={handleEmailChange}></Form.Input>
                        <Form.Input type='password' autoComplete="off" placeholder='Password' value={password} onChange={handlePasswordChange}></Form.Input>
                        <Form.Submit disabled={isInvalid} type='submit'>Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user?
                        <Form.Link to='/signin'> Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
        </>
    );
}

export default Signup;