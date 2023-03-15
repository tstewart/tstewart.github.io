import { Container } from 'react-bootstrap'

function Page(props) {
    return (
        <Container className="page d-flex align-items-center justify-content-center" id={props.id}>
            {props.children}
        </Container>
    );
}

function ContentPage(props) {
    return (
        <Container className="content-page" id={props.id}>
            <h1 className="section-title">{props.title}</h1>
            {props.children}
        </Container>
    );
}

export { Page, ContentPage };