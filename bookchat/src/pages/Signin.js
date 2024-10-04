import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { HeaderContainer } from '../containers/header';
import api from '../api/axiosconfig';
import Form from '../components/form';
import * as ROUTES from '../constants/routes';

function Signin(){
    const navigate = useNavigate();
    const [emailAddress, setEmailAddress] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [error, setError] = useState('');

    // check form input elements are valid
    const isInvalid = (password === '' || emailAddress === '') || (!isValidEmail || !isValidPassword);

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

    const handleSignIn = async (event) => {
        event.preventDefault();
        
        // TODO: check database for a valid user
        try {
            const response = await api.post("/api/v1/users/signin", 
                {payloadEmailAddress: emailAddress, payloadPassword: password});
                if(response.status === 200){
                    localStorage.setItem("username", response.data.username);
                    console.log(response.data);
                    navigate(ROUTES.BROWSE);
                }
        } catch (error) {
            console.log(error);
        }
    }



    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input placeholder='Email address' value={emailAddress} onChange={handleEmailChange}></Form.Input>
                        <Form.Input type='password' autoComplete="off" placeholder='Password' value={password} onChange={handlePasswordChange}></Form.Input>
                        <Form.Submit disabled={isInvalid} type='submit'>Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New to BookBanter? 
                        <Form.Link to='/signup'> Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        Come chat with your friends and talk about books!
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
        </>
    );
}

export default Signin;