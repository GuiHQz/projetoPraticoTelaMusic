import { Container, Row, Column, Image } from './styles'
import { AlbumItem } from '../../Components/AlbumItem'
import { TrackItens } from '../../Components/TrackItens'
import  GoBack  from '../../assets/images/arrowLeft.png'
import Skillet from '../../assets/images/albumSkillet.jpg'
 
export function ListTrack(){
    return (
        <Container>
            <Row>
                <h2> <Image src={GoBack} /> Voltar</h2>
            </Row>
            <Column>
                <AlbumItem 
                imgSize="large"
                size="large"
                title="Skillet"
                description="Descrição do Álbum"/>
                <TrackItens />
            </Column>
        </Container>
    )
}