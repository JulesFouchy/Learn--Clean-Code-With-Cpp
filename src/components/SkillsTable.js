import React from 'react'
import skills from '@site/.docusaurus/gather-skills-plugin/default/skills.json'
import skill_priority from '../../Thoughts-on-Teaching/evaluation/skill_priority'
import style from './SkillsTable.module.css'
import Checkbox from '@mui/material/Checkbox'
import { green, blueGrey } from '@mui/material/colors'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import grader from '../../Thoughts-on-Teaching/evaluation/grader'

const students_dropdown = () => {
    const [student, set_student] = React.useState('')
    const handle_change = (event) => {
        set_student(event.target.value)
        current_student = student
    }
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Student</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={student}
                    label="Student"
                    onChange={handle_change}
                >
                {Object.keys(students).map((student, i) => <MenuItem value={i}>{student}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
      );
}

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

const checkbox_validated_disabled = () => 
    <Checkbox
        checked
        disabled
        sx={{'&.Mui-checked': {
                color: blueGrey[300],
            },
        }}
    />

const checkbox_not_validated = (skill_slug, skills_list) => 
    <Checkbox
        onChange={e => {
            if(e.target.checked) {
                skills_list.push(skill_slug)
            }
            else {
                skills_list = skills_list.filter(slug => slug !== skill_slug)
            }
            console.log(skills_list)
        }}
    />

export default ({student_skills}) => {
    const prioritized_skills = skills.map(skill => ({
        ...skill,
        priority: skill_priority(skill)
    }))
    .sort((a, b) => a.priority < b.priority)
    
    let tmp_skills_list = []
    
    return (
        <div>
            {/* {students_dropdown()} */}
            <div>{grader(skills, [...Object.keys(student_skills.new), ...tmp_skills_list])}</div>
            <table>
                <tr>
                    <th>Skill</th>
                    {student_skills && <th>Validated</th>}
                    <th>Tags</th>
                    <th>Importance</th>
                    <th>Benefit</th>
                    <th>Easiness</th>
                    <th>Order</th>
                </tr>
                {prioritized_skills.map(skill =>
                    <tr>
                        <td><a href = {skill.link}>{skill.title}</a></td>
                        {student_skills &&
                            <td>{ student_skills.new[skill.slug] ? checkbox_validated()
                                : student_skills.old[skill.slug] ? checkbox_validated_disabled()
                                :                                  checkbox_not_validated(skill.slug, tmp_skills_list)}</td>
                        }
                        <td>{tags(skill.tags || [])}</td>
                        <td>{skill.priority}</td>
                        <td>{skill.benefit}</td>
                        <td>{skill.easiness}</td>
                        <td>{skill.order}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}