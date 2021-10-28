import React from 'react'
import { AlbumItem } from '../AlbumItem'
import { Container, Subtitle, Wrapper } from './styles'

type AlbumProps = {
    title: string,
}

export function AlbumList({ title, ...props }: AlbumProps) {
    return (
        <Container>
            <Subtitle> {title} </Subtitle>
            <Wrapper>
                <AlbumItem
                    imgSize="large"
                    size="large"
                    title="Nome do Álbum"
                    description="Descrição do Álbum" />

                <AlbumItem
                    imgSize="large"
                    size="large"
                    title="Nome do Álbum"
                    description="Descrição do Álbum" />

                <AlbumItem
                    imgSize="large"
                    size="large"
                    title="Nome do Álbum"
                    description="Descrição do Álbum" />

                <AlbumItem
                    imgSize="large"
                    size="large"
                    title="Nome do Álbum"
                    description="Descrição do Álbum" />

                <AlbumItem
                    imgSize="large"
                    size="large"
                    title="Nome do Álbum"
                    description="Descrição do Álbum" />

            </Wrapper>
        </Container>
    )
}
