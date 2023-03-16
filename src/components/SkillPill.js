import React from 'react';
import { Nav, OverlayTrigger, Popover } from 'react-bootstrap'

export default class SkillPill extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false };
    }

    toggle() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        const skill = this.props.skill;
        return (
            <OverlayTrigger
                placement="top"
                trigger="click"
                rootClose={true}
                overlay={
                    <Popover className="skill-popover">
                        <Popover.Header as="h3">
                            {skill.skill}
                        </Popover.Header>
                        <Popover.Body>
                            <b>Learned from:</b>
                            {skill.learned_from.map((learned_from, idx) => {
                                return (
                                    <p key={skill+idx}>{learned_from}</p>
                                );
                            })}
                        </Popover.Body>
                    </Popover>
                }>
                <Nav.Item>
                    <Nav.Link>
                        <p className="skill-title">{skill.skill}</p>
                    </Nav.Link>
                </Nav.Item>
            </OverlayTrigger>
        );
    }
}