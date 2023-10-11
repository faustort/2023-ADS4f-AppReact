
import { Carousel, Container, Image } from 'react-bootstrap';
export default function HomeScreen() {
    return (
        <Container>
            <h1>Meu App Juresmar</h1>
            <p>Sou uma página comum</p>
            <Carousel>
                <Carousel.Item>
                    <Image src='https://picsum.photos/1920/400' />
                    <Carousel.Caption>
                        <h3>Slide 1</h3>
                        <p>Feliz e contente</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src='https://picsum.photos/1920/400' />
                    <Carousel.Caption>
                        <h3>Slide 2</h3>
                        <p>Feliz e contente</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src='https://picsum.photos/1920/400' />
                    <Carousel.Caption>
                        <h3>Slide 3</h3>
                        <p>Feliz e contente</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}