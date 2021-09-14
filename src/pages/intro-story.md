# How Software Development practices helped me structure my classes

## Markdown is great

It is great because it is easy to write, and easy to reuse. Since I'm relying on a widely used standard I know that I can write things in Markdown and I'll be able to use them in any context without having to rewrite the specific parts (like making a link, a title or a table of contents). I say what I want, and then I can use it in any context later.

It helps because I am not having to worry constantly about implementation details ; I konw that I can just write and it will fit whatever use I will want to make of it later.

## Dependencies

The classes should be as independant as possible between ; and most importantly, they should not concern themselves with the global organization and order of the lessons ! I want to just write a lesson whenever I think of something that I would like to share, whithout thinking about how and when this will fit in the flow of the classes. Maybe I won't even use it, but still it will be there on the side for later / as a bonus, and whether I will use a lesson and how I would use it should not be a concern as I am writting a given lesson. It helps my productivity a lot and drives me towards a point in time when I will have at a glance all the topics that I might want to teach, and I can decide which ones to include in a given course. No more fear of forgetting something !

(EDIT : I just realized that this actually follows [*composition over inheritance*](./docs/lessons/composition-over-inheritance). Instead of relying on long chains of inheritance from one lesson to the next, I try to build them as independent blocks and then compose them to make a curriculum over a semester)

## Flat folder architecture + A ReadMe that guides you through the sections

## Use Git, submodules, pull requests

### Easy collabaration between teachers

### Great visibility for students

## Be declarative

We state (and grade) what we actually want (that the students acquire some given skills), rather than implementation details (that students succeed a given exercise).

## Open-Source

Open-Source is **the best way to produce high quality products**. Everybody contributes to it, the project is refined again and again and improves over time as people use it.