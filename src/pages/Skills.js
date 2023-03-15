import { ContentPage as Page } from './Page'
import { GetSkills } from '../Data'
import SkillPill from '../components/SkillPill'
import { Nav, OverlayTrigger, Popover } from 'react-bootstrap'
import React from 'react';

function Skills() {
    const skills = GetSkills();
    return (
        <Page id="skills" title="Skills">
            <Nav variant="pills" defaultActiveKey="/home">
                {
                    skills.map((skill, idx) => {
                        return (
                            <SkillPill key={"skill-"+idx} skill={skill} />
                        );
                    })
                }
            </Nav>
        </Page>
    );
}

export default Skills;