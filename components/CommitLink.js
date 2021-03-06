import React from "react"

export default function CommitLink({ hash, text }) {
  const link = `https://github.com/JulesFouchy/Learn--Clean-Code-With-Cpp--Project/commit/${hash}`
  return (
    <a href={link} target="_blank">
      <i>Commit</i>
      {text && <span>: {text}</span>}
    </a>
  )
}
