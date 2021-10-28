import React from 'react'
import { Container, Imagem } from './styles'
import Logo from '../../assets/images/49097.png'

export function Header() {
    return (
        <Container>
            <Imagem src= {Logo} />
        </Container>
    )
}
