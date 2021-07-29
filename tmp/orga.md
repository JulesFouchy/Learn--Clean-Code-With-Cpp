## One or many repo.s ?

### Many

Each class has it's own repo, and then all classes are put together as submodules of one IMAC repo.

- Reduces coupling between a given class and the IMAC formation (allows teacher to own their class which they can teach in different schools + no need to move existing classes to the IMAC repo)
- Allows each teacher to choose the visibility (public/private) of his class material

### One

- no sync problems across repos. The changes done in a repo don't need to be pulled on the main IMAC repo
- easier to make links across classes
- easier to have a consistent style across repos (same layout etc.)

## Folder architecture

All classes are a folder at the root level, and there is no intermediate sorting (by semester, topic, etc.)

- Easier to maintain (no hard decision like : is this a programming or art class (tough for some topics that touch on both), no need to move anything when we move something from semester 2 to 3(and not moving files means not taking the risk of breaking existing links))
- The organisation can be done through a ReadMe on the repo and/or the website that uses these markdown classes.

## Changes

Don't modify the repo in the middle of the semester, especially the *expectations* part (bug fixes and improvements to the lessons are acceptable). Put your changes on a branch for the following year. The repo should be a promise made to students at the beginning of the semester about all the things that will be expected from them.

## Evaluation

### Process

We list *beforehead* all the skills that are supposed to be mastered at the end of the class. Each can be graded with :
- **S** above expectations
- **A** mastered, nothing to add
- **B** pretty good, a few things to improve
- **C** insufficient
- **D** wtf ?

I don't expect to give many (if any) **S**, but it is nice to reserves a place for surprise and reward investment and impressive achievements.

I don't expect to give any **D** either.

Someone with **A** everywhere will get the maximal grade of 20/20. An **S** will compensate a **B**.

More precisely : **D** = 0, **C** = 1, **B** = 2, **A** = 3 and **S** = 4. The grades of all the skills are averaged, and the final note is then remapped into a reasonnable interval ( [0, 3] -> [0, 20], not necessarily linearly (the exact formula is still to be determined))

TODO :
- should **D** be called **Z** ? Since it is a note that isn't supposed to really happen (unlike **A**, **B** or **C**). **Z** would denote something unexpected, like **S**.

### Rationale

The main goal is the minimize the stress caused by the evaluation. We expect to achieve this by giving students a clear view on the grading process, their current grade at all time, and by giving them the possibility to improve their grades at any time by submitting additional exercises.

Also, we believe that having a clear list of expectations will help students to study.

Also, evaluating skills instead of a specific set of exercises means that we can propose different ways of getting evaluated to students. For example if some of them want to do a project instead (which will definitely be more enriching (and require more investment)) it is totally possible.