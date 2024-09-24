import React from 'react';
import { HeaderContainer } from '../containers/header';
import Feature from '../components/feature';

export default function Home(){
    return(
        <>
            <HeaderContainer>
            <Feature>
                <Feature.Title>
                    Come chat about books! Browse your favorites.
                </Feature.Title>
                <Feature.SubTitle>
                    Sign in to connect with other book lovers.
                </Feature.SubTitle>
            </Feature>
            </HeaderContainer>
        </>
    )
}