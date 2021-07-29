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
]