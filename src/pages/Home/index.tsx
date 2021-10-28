import { useState } from 'react';
import { Container } from './styles'
import { SearchBar } from '../../Components/SearchBar'
import { AlbumList } from '../../Components/AlbumList';


export function Home() {

    const [searchTerm, setSearchTerm] = useState<string>()

    const handleSetTerm = (value: string) => {
        setSearchTerm(value)
    }

    return (
        <Container>
            <SearchBar
                searchTerm={searchTerm}
                handleSetTerm={handleSetTerm}
            />
            <AlbumList
                title={
                    searchTerm
                        ? `Resultados encontrados para "${searchTerm}"`
                        : 'Álbuns buscados recentemente'
                }
            />
            {
                !searchTerm &&
                <AlbumList
                    title="Álbuns buscados recentemente"
                />}
        </Container>
    )
}