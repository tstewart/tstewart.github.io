import { ContentPage as Page } from './Page'
import ExperienceTabs from '../components/ExperienceTab'
import { GetExperience } from '../Data'


function Experience() {
    const experience = GetExperience();
    return (
        <Page id="experience" title="Experience">
            <ExperienceTabs experience={experience}/>
        </Page>
    );
}

export default Experience;