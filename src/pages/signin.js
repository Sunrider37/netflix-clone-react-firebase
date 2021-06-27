import React, {useState, useContext} from 'react'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import { useHistory } from 'react-router'

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)
    const [emailAddress, setEmailAdress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    const handleSignin = (event) => {
        event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(emailAddress, password).then(() => {
            // push to browser page
            history.push('/browse')
        }).catch((error) => {
            setEmailAdress('');
            setPassword('');
            setError(error.message)
        })
        
    }
    return ( <>
        <HeaderContainer>
            <Form>
                <Form.Title>
                    Sign In
                </Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignin} method="POST" >
                    <Form.Input placeholder="Email Address" value={emailAddress} type="email" required
                    onChange={({target}) => setEmailAdress(target.value)} ></Form.Input>
                    <Form.Input placeholder="Password" type="password" required minLenght="5"  value={password} 
                    onChange={({target}) => setPassword(target.value)} ></Form.Input>
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign In
                    </Form.Submit>
                </Form.Base>
                <Form.Text>
                    New to Netflix? <Form.Link to="/signup">
                        Sign up now
                    </Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google Capchka(Capshka). Don't use bots please.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
        </>
    )
}
