// const fetch = require("node-fetch");

module.exports = /*async*/ () => {
  //   const contact_info = await fetch(
  //     "https://raw.githubusercontent.com/JulesFouchy/JulesFouchy/main/contact.json"
  //   ).then((res) => res.json());
  const contact_info = {
    discord_user_id: "372812330742054914",
    email: "jules.fouchy@ntymail.com",
  }
  const classes = [
    {
      name: "C++ and Dev Practices",
      url: "https://julesfouchy.github.io/Learn--Cpp-And-Dev-Practices/",
    },
    {
      name: "Generative Art",
      url: "https://julesfouchy.github.io/Learn--Generative-Art",
    },
    {
      name: "Math for Art and Computer Graphics",
      url: "https://julesfouchy.github.io/Learn--Math-for-Art-and-Computer-Graphics",
    },
  ]
  return {
    github_account: "JulesFouchy",
    repo: "Learn--Cpp-And-Dev-Practices",
    title: "C++ and Dev Practices",
    docusaurus_config: {
      tagline: "From 0️⃣ to 🦸",
      // Override any parts of docusaurus.config.js you want
    },
    main_page_link: "lessons",
    navbar_items: [
      {
        type: "doc",
        docId: "lessons/introduction",
        position: "left",
        label: "Lessons",
      },
      { to: "/students", label: "Skills", position: "left" },
      { to: "/assignment", label: "Assignment", position: "left" },
      { to: "/resources", label: "Resources", position: "left" },
      { to: "/tools", label: "Tools", position: "left" },
    ],
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
    extra_copyright:
      '<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>',
    syntax_highlight_for: ["cmake"],
  }
}
