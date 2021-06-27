import React from 'react'
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'
import { Header } from '../components'
import { Profiles } from '../components'
 
export function SelectProfileContainer({user, setProfile}) {
    return <>
    <Header bg={false}>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"></Header.Logo>
        </Header.Frame>
    </Header>

    <Profiles>
        <Profiles.Title>Hue watchan', eh?</Profiles.Title>
        <Profiles.List>
            <Profiles.User onClick={() => setProfile({
                displayName: user.displayName,
                photoUrl: user.photoUrl
            })}>
                <Profiles.Picture src={user.photoUrl} />
                <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
        </Profiles.List>
    </Profiles>
    </>
}
