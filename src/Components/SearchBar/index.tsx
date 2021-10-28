import React from 'react'
import { Container, Label, Input } from './styles'

type SearchBarProps = {
    handleSetTerm: (prop: string)=>void
    searchTerm: string|undefined
}

export function SearchBar({ handleSetTerm, searchTerm }: SearchBarProps) {
    return (
        <Container>
            <Label>
                Busque por artistas, álbuns ou músicas
            </Label>
            <Input 
                onChange={(e) => handleSetTerm(e.target.value)}
                value={searchTerm}
                placeholder="Comece a escrever..."
            />
        </Container>
    )
}
