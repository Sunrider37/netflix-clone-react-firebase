import React from 'react'
import {Feature, OptForm } from '../components'
import {FaqsContainer} from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'
import { HeaderContainer } from '../containers/header'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Множество фильмов и сериалов</Feature.Title>
                    <Feature.SubTitle>Смотрите везде. Отказывайтесь в любое время</Feature.SubTitle>
                     <OptForm>
                    <OptForm.Input placeholder="Email Address"></OptForm.Input>
                    <OptForm.Button>Try It Now!</OptForm.Button>
                    <OptForm.Break></OptForm.Break>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your 
                        membership
                    </OptForm.Text>
                </OptForm>
                </Feature>
         </HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
        </>
    )
}
