import React from 'react'
import skills from '../../evaluation/skills'

export default () => (
    <table>
        <tr>
            <th>Skill</th>
            <th>Benefit</th>
            <th>Difficulty</th>
            <th>Importance</th>
        </tr>
        {skills.map(skill =>
            <tr>
                <td>{skill.shortname}</td>
                <td>{skill.benefit}</td>
                <td>{skill.difficulty}</td>
                <td>{skill.importance}</td>
            </tr>
        )}
    </table>
)