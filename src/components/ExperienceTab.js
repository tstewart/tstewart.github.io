
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLandmark } from '@fortawesome/free-solid-svg-icons';

function ExperienceSection(props) {
    const experience_list = props.experience.split('\n');
    return (
        <ul className="experience-section-list">
            {experience_list.map((experience_item, idx) => {
                return (
                    <li key={"experience-"+idx}>{experience_item}</li>
                );
            })}
        </ul>
    );
}

function ExperienceTabs(props) {
    const experiences = props.experience;
    return (
        <Tab.Container id="experience-tabs" defaultActiveKey="0">
            <Row className="experience-tabs">
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {experiences.map((experience, idx) => {
                            return (
                                <Nav.Link key={"experience-nav-" + idx} eventKey={idx}>
                                    <Row>
                                        <Col md={1} className="experience-icon">
                                            <FontAwesomeIcon icon={experience.type === "university" ? faLandmark : faBriefcase} size="2x" />
                                        </Col>
                                        <Col>
                                            <p className="experience-title">{experience.place}</p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className="experience-tab-content">
                        {experiences.map((experience, idx) => {
                            return (
                                <Tab.Pane key={"experience-tab-" + idx} eventKey={idx}>
                                    <h5 className="title">{experience.title}</h5>
                                    <h6 className="from-to">{experience.from_to}</h6>
                                    <p className="key-skills">{experience.key_skills.join(" • ")}</p>
                                    <ExperienceSection experience={experience.description} />
                                </Tab.Pane>
                            );
                        })}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default ExperienceTabs;