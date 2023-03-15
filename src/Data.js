import Data from './data.json'

function GetSkills() {
    var skills = Data.skills;

    for(const skill_key in skills) {
        var skill = skills[skill_key];

        skill.learned_from = skill.learned_from.map((val) => {
            return Data.education_sources[val].source;
        });

    }

    // sort skills by experience
    skills.sort((a,b) => {
        return b.experience - a.experience;
    });
    
    return skills;
}

function GetPortfolio() {
    return Data.portfolio;
}

function GetExperience() {
    return Data.experience;
}

export {GetSkills, GetPortfolio, GetExperience};