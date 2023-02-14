import io
from pathlib import Path
from os import path
students = [
    ["ALIDOR", "LILOU"],
    ["AMRANI", "BENJAMIN"],
    ["APALOO-KINGSLOVE", "KEZIAH"],
    ["AUGEY", "QUENTIN"],
    ["AUGIER DE LAJALLET", "LUCIE"],
    ["BALAN", "ANASTASIYA"],
    ["BEKKAR", "FADY"],
    ["BOULANGER", "ELISA"],
    ["COUARD", "LOU"],
    ["COUARD", "THÉO"],
    ["CREPIN", "OLIVIA"],
    ["DEBEAUNE", "TRISTAN"],
    ["DELCAMBRE", "ADRIEN"],
    ["DIEP", "AUDREY"],
    ["DONA", "AXEL"],
    ["DROISSART", "AURÉLIEN"],
    ["ENRICO", "FLAVIE"],
    ["FLEITZ", "MAELLE"],
    ["GELEBART", "LAURIANE"],
    ["GERVAIS", "WENDY"],
    ["GOBE", "PAULINE"],
    ["GODARD", "LUCIE"],
    ["GRIGNOLA", "NINA"],
    ["HUET", "QUENTIN"],
    ["JEANNIN", "JULIETTE"],
    ["LAFAURIE", "AURORE"],
    ["LE PAPE", "CHARLINE"],
    ["LEBLOND", "ANTOINE"],
    ["LECLERCQ", "MATTEO"],
    ["LUONG", "GUY"],
    ["MASSA", "ELISE"],
    ["MATHEVET", "MAXIME"],
    ["N'GOTTA", "SARAH"],
    ["POIROUX", "REMI"],
    ["PORA", "AUDE"],
    ["QUINQUENEL", "LOIC"],
    ["RAMBAUD", "MATHURIN"],
    ["RAZAFIMANANTSOA-TARDIEUX", "BENJAMIN"],
    ["ROARD", "ELIA"],
    ["ROUSSEL", "ULYSSE"],
    ["SERRES", "ROMAIN"],
    ["STOCCHI", "MATHILDE"],
    ["STRICH", "EMILY-ROSE"],
    ["THIBERGE", "ERIC"],
    ["TINNES", "GREGOIRE"],
    ["VEAUVY", "EMMA"],
    ["WANG", "LAURENCE"],
]

for [nom, prenom] in students:
    name = f"{prenom.title()} {nom[0]}"
    filepath = path.join(Path(__file__).parent,
                         "content/progress", f"{name}.md")

    string = f'''---
title: {name}
---
import StudentsDropdown from "@site/components/progress/StudentsDropdown"
import LessonLink from "@site/components/LessonLink"

<StudentsDropdown/>

<br/>

# Progress

Welcome! In this section you will be able to see your progress live, the things you did well, and the things you need to work on. This is basically a big list of all the do's and don'ts I expect you to follow during this semester.

:::tip CAPTIONS
☁️ > I haven't seen enough of your code yet to tell if you are doing well.<br/>
🌞 > You are doing great.<br/>
🌈 > You are doing amazing.<br/>
❌ > I am not happy and you should prioritize working on that point.
:::

:::caution
Note that things **are not validated forever**! If you stop writing good code, you will lose your  happy faces! 🌞
:::

## Tools (3 pts.)

➕ *What you **should** do:*

- ☁️ Follow [the good practices of the Git lesson](/lessons/git#good-practices)
- ☁️ Have a [.clang-format](/lessons/formatting-tool/) file, and apply it to your codebase
- ☁️ Have a [.clang-tidy](/lessons/static-analysers/) file, and fix the problems it shows you, or ask the teacher if you don't understand what the warning means or don't know how to fix it.

➖ *What you **shouldn't** do:*

- ☁️ Committing unwanted files like your *build* folder (see [.gitignore](/lessons/git#gitignore))
- ☁️ Making no commits until near the end of the semester

## Clean Code (12 pts.)

➕ *What you **should** do:*

- ☁️ Write many small functions (<LessonLink slug="write-small-functions"/>)
- ☁️ Write small classes (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Write small structs (<LessonLink slug="use-structs-to-group-data"/>)
- ☁️ Use strong types (<LessonLink slug="strong-types"/>)
- ☁️ Use encapsulation when appropriate (`public` / `private`) (<LessonLink slug="design-cohesive-classes"/>)
- ☁️ Use free functions as often as possible, and methods only when appropriate (<LessonLink slug="prefer-free-functions"/>)
- ☁️ <LessonLink slug="minimize-dependencies"/>
- ☁️ Use range-based loops or algorithms, instead of raw loops (<LessonLink slug="stl-algorithms"/>)

➖ *What you **shouldn't** do:*

- ☁️ Hard to understand or misleading names (<LessonLink slug="naming"/>)
- ☁️ Duplicated code (<LessonLink slug="dry-dont-repeat-yourself"/>)
- ☁️ Overly complicated code
- ☁️ Global variables

## C++ Code Quality (3 pts.)

➕ *What you **should** do:*

- ☁️ Use `const` when appropriate (<LessonLink slug="const"/>)
- ☁️ Use lambdas when appropriate (<LessonLink slug="lambda"/>)

➖ *What you **shouldn't** do:*

- ☁️ Headers with unnecessary includes in them. Also, if something is only needed by the .cpp file, only include it in the .cpp, not the .hpp.
- ☁️ Using `new` instead of a stack allocation or a smart pointer or a standard container (`std::vector`)
- ☁️ Forgetting `#pragma once` in your headers
- ☁️ Using `1` and `0` instead of `true` and `false` for your booleans

## Investment (4 pts.)

➕ *What you **should** do:*

- ☁️ Ask questions and participate in class
- ☁️ Take my feedback into account, improve your old code if need be
- ☁️ Extend your project with additional features
'''
    with io.open(filepath, "w", encoding='utf8') as file:
        file.write(string)
