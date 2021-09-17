import React from 'react'
import skills from '@site/.docusaurus/gather-skills-plugin/default/skills.json'
import skill_priority from '../../Thoughts-on-Teaching/evaluation/skill_priority'
import style from './SkillsTable.module.css'
import Checkbox from '@mui/material/Checkbox'
import { green } from '@mui/material/colors'

const tags = (tags_list) =>
    tags_list.map(tag => (
        <div className={style.tag}>{tag}</div>
    ))

const checkbox_validated = () => 
    <Checkbox
        checked
        disabled
        sx={{'&.Mui-checked': {
                color: green[600],
            },
        }}
    />

const checkbox_not_validated = () => 
    <Checkbox
    />

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
                <th>Validated</th>
                <th>Tags</th>
                <th>Importance</th>
                <th>Benefit</th>
                <th>Easiness</th>
                <th>Order</th>
            </tr>
            {prioritized_skills.map(skill =>
                <tr>
                    <td><a href = {skill.link}>{skill.title}</a></td>
                    <td>{skill.order === 1 ? checkbox_validated() : checkbox_not_validated()}</td>
                    <td>{tags(skill.tags || [])}</td>
                    <td>{skill.priority}</td>
                    <td>{skill.benefit}</td>
                    <td>{skill.easiness}</td>
                    <td>{skill.order}</td>
                </tr>
            )}
        </table>
    )
}