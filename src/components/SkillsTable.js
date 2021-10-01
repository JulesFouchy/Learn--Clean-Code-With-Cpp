import React from 'react'
import skills from '@site/.docusaurus/gather-skills-plugin/default/skills.json'
import skill_priority from '../../Thoughts-on-Teaching/evaluation/skill_priority'
import style from './SkillsTable.module.css'
import Checkbox from '@mui/material/Checkbox'
import { green, blueGrey } from '@mui/material/colors'
import grader from '../../Thoughts-on-Teaching/evaluation/grader'

const tags = (tags_list) =>
    tags_list.map(tag => (
        <div className={style.tag}>{tag}</div>
    ))

const checkbox_validated = () => 
    <Checkbox
        checked
        disabled
        sx={{'&.Mui-checked': {
                color: "#25c2a0",
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

const checkbox_not_validated = (skill_slug, obj) => 
    <Checkbox
        style ={{
            color: "#29B6F6",
        }}
        onChange={e => {
            if(e.target.checked) {
                obj.skills_checked_by_user.push(skill_slug)
            }
            else {
                obj.skills_checked_by_user = obj.skills_checked_by_user.filter(slug => slug !== skill_slug)
            }
            obj.forceUpdate()
        }}
    />

const export_as_json_button = (object) => (
    <button onClick = {() => DownloadJSON(object)}>
        Export as JSON
    </button>
)

function DownloadJSON(object) {
    var json = JSON.stringify(object);

    //Convert JSON string to BLOB.
    json = [json];
    var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });

    //Check the Browser.
    var isIE = false || !!document.documentMode;
    if (isIE) {
        window.navigator.msSaveBlob(blob1, "Customers.txt");
    } else {
        var url = window.URL || window.webkitURL;
        var link = url.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "skills.json";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

export default class SkillsTable extends React.Component {
    skills_checked_by_user = []
    new_skills = {}
    old_skills = {}

    constructor({student_skills}) {
        super()
        this.new_skills = [...student_skills.new]
        this.old_skills = [...student_skills.old]
    }

    render() {
        const prioritized_skills = skills.map(skill => ({
            ...skill,
            priority: skill_priority(skill)
        }))
        .sort((a, b) => a.priority < b.priority)

        const grade = grader(skills, [...this.new_skills, ...this.skills_checked_by_user])
        
        return (
            <div>
                <div className = {style.grade}>{grade.toFixed(1)} / 20</div>
                <div className = {style.grade}>{export_as_json_button(this.skills_checked_by_user)}
                </div>
                
                <table>
                    <tr>
                        <th>Skill</th>
                        <th>Validated</th>
                        {/* <th>Tags</th> */}
                        <th>Priority</th>
                        <th>Benefit</th>
                        <th>Easiness</th>
                        <th>Order</th>
                    </tr>
                    {prioritized_skills.map(skill =>
                        <tr>
                            <td><a href = {skill.link}>{skill.title}</a></td>
                            <td>{ this.new_skills.find(slug => skill.slug === slug) ? checkbox_validated()
                                : this.old_skills.find(slug => skill.slug === slug) ? checkbox_validated_disabled()
                                :                                                     checkbox_not_validated(skill.slug, this)}</td>
                            {/* <td>{tags(skill.tags || [])}</td> */}
                            <td>{(100 * skill.priority).toFixed(0)} %</td>
                            <td>{skill.benefit}</td>
                            <td>{skill.easiness}</td>
                            <td>{skill.order}</td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}