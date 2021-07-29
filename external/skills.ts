type mark = 0 | 1 | 2 | 3 | 4 | 5

interface Skill {
    shortname?: string,
    description: string,
    difficulty: mark,
    benefit: mark
}

const skills: Skill[] = [
    {
        shortname: "const correctness",
        description: "Yo",
        difficulty: 0,
        benefit: 0,
    },
    {
        shortname: "templates",
        description: "templateSS",
        difficulty: 3,
        benefit: 3,
    },
]

export default skills