import React from 'react'
import skills from '@site/.docusaurus/gather-skills-plugin/default/friends.json'
import skill_priority from '../../Thoughts-on-Teaching/evaluation/skill_priority'

export default () => (
    <table>
        <tr>
            <th>Skill</th>
            <th>Benefit</th>
            <th>Easiness</th>
            <th>Importance</th>
        </tr>
        {skills.map(skill =>
            <tr>
                <td><a href = {skill.description.link}>{skill.description.name}</a></td>
                <td>{skill.value.benefit}</td>
                <td>{skill.value.easiness}</td>
                <td>{skill_priority(skill.value)}</td>
            </tr>
        )}
    </table>
)