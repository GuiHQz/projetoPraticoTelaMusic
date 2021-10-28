import React, {ReactNode} from 'react'
import { Container } from './styles'
import { Header } from '../../Components/Header'

type ReactProps = {
    children: ReactNode
}

export function Default( { children }: ReactProps ) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}
