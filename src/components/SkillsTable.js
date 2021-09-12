import React from 'react'
import skills from '@site/.docusaurus/gather-skills-plugin/default/friends.json'
import skill_priority from '../../Thoughts-on-Teaching/evaluation/skill_priority'

export default () => {
    const prioritized_skills = skills.map(skill => ({
        ...skill,
        priority: skill_priority(skill.value)
    }))
    .sort((a, b) => a.priority < b.priority)
    
    return (
        <table>
            <tr>
                <th>Skill</th>
                <th>Benefit</th>
                <th>Easiness</th>
                <th>Priority</th>
            </tr>
            {prioritized_skills.map(skill =>
                <tr>
                    <td><a href = {skill.description.link}>{skill.description.name}</a></td>
                    <td>{skill.value.benefit}</td>
                    <td>{skill.value.easiness}</td>
                    <td>{skill.priority}</td>
                </tr>
            )}
        </table>
    )
}