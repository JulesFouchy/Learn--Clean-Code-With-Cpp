import React from 'react'

export default function CommitLink({hash}) {
    const link = `https://github.com/JulesFouchy/Learn--Cpp-And-Dev-Practices--Project/commit/${hash}`
    return (
        <a href={link} target="_blank"><i>Commit</i></a>
    )
}