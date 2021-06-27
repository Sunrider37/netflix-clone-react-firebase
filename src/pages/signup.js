import React, {useState, useContext} from 'react'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import { useHistory } from 'react-router'

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) =>{
        event.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(emailAddress, password).then((result) => {
            result.user.updateProfile({
                displayName: firstName,
                photoUrl: Math.floor(Math.random() * 5) + 1,

            }).then(() => {
                history.push('/browse')
            }).catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
           
        })
    }
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input placeholder="First Name" value={firstName}
                    onChange={({target}) => setFirstName(target.value)} required
                    ></Form.Input>
                    <Form.Input placeholder="Email Address" value={emailAddress}
                    onChange={({target}) => setEmailAddress(target.value)} required
                    ></Form.Input>
                    <Form.Input placeholder="Password" value={password}
                    onChange={({target}) => setPassword(target.value)} required
                    ></Form.Input>
                    <Form.Submit disabled={isInvalid} type="submit" >Sign Up</Form.Submit>
                    <Form.Text>Already a user? 
                        <Form.Link to="*/signin">Sign in now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Capshka. Don't try to use bots.
                        Or I'll have to call my mum.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
           
        </HeaderContainer>
        <FooterContainer></FooterContainer>
        </>
    )
}
