const fetch = require("node-fetch")

module.exports = async () => {
  const contact_info = await fetch(
    "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/contact.json"
  )
    .then((res) => res.json())
    .catch((err) => ({}))
  const classes = await fetch(
    "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/my-classes.json"
  )
    .then((res) => res.json())
    .catch((err) => [])
  return {
    github_account: "JulesFouchy",
    repo: "Learn--Clean-Code-With-Cpp",
    title: "Clean Code with C++",
    docusaurus_config: {
      tagline: "From 0️⃣ to 🦸",
      // Override any parts of docusaurus.config.js you want
    },
    main_page_link: "lessons",
    navbar_items: [
      { to: "/lessons", label: "Lessons", position: "left" },
      { to: "/assignment", label: "Assignment", position: "left" },
      { to: "/progress", label: "Progress", position: "left" },
      { to: "/resources", label: "Resources", position: "left" },
      { to: "/tools", label: "Tools", position: "left" },
    ],
    should_sort_lessons_by_priority: true,
    //   footer: {}, // Uncomment this to override the hardcoded footer in docusaurus.config.js
    contact_info: [
      {
        label: "Discord",
        to: `https://discord.com/users/${contact_info.discord_user_id}`,
      },
      {
        label: "E-Mail",
        to: `mailto:${contact_info.email}`,
      },
      {
        label: "GitHub",
        to: "https://github.com/JulesFouchy/JulesFouchy/issues",
      },
    ],
    classes: classes,
    copyright_before: `These lessons were written by <a href="https://julesfouchy.github.io/">Jules Fouchy</a> and <a href="https://guillaumehaerinck.com/#/">Guillaume Haerinck</a><br/>`,
    copyright_after: `<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>`,
    syntax_highlight_for: ["cmake", "csharp"],
    lessons_allowed_tags: [
      "Clean Code",
      "Tools",
      "C++",
      "Workflow",
      "Git",
      "Libraries & Frameworks",
      "Beautiful Code",
      "Performant Code",
    ],
  }
}
