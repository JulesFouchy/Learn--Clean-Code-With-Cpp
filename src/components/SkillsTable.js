import React from 'react'
import skills from '@site/.docusaurus/gather-skills-plugin/default/skills.json'
import skill_priority from '../../Thoughts-on-Teaching/evaluation/skill_priority'

export default () => {
    const prioritized_skills = skills.map(skill => ({
        ...skill,
        priority: skill_priority(skill)
    }))
    .sort((a, b) => a.priority < b.priority)
    
    return (
        <table>
            <tr>
                <th>Skill</th>
                <th>Benefit</th>
                <th>Easiness</th>
                <th>Order</th>
                <th>Importance</th>
                <th>Tags</th>
            </tr>
            {prioritized_skills.map(skill =>
                <tr>
                    <td><a href = {skill.link}>{skill.title}</a></td>
                    <td>{skill.benefit}</td>
                    <td>{skill.easiness}</td>
                    <td>{skill.order}</td>
                    <td>{skill.priority}</td>
                    <td>{skill.tags}</td>
                </tr>
            )}
        </table>
    )
}