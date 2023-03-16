import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Page } from './Page'


function Index() {
    return (
        <Page id="intro">
            <Row>
                <Col lg="12" md="12" className="mx-auto">
                    <img src="portrait.jpg" className="portrait-img" alt="Me"/>
                    <h1 className="mb-4 display-2">Taylor Stewart</h1>
                    <p className="lead pb-3">Junior Software Engineer</p>
                    <Row className="mx-5 px-5 pb-4">
                        <Col md={6} xs={6}><a href="https://github.com/tstewart" className="social-icon">
                            <FontAwesomeIcon icon={faGithub} size="2x" /></a></Col>
                        <Col md={6} xs={6}><a href="https://www.linkedin.com/in/tstewartedi/" className="social-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a></Col>
                    </Row>
                </Col>
            </Row>
        </Page>
    );
}

export default Index;