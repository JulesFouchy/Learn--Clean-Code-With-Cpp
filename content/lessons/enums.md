---
title: Enums
benefit: 4
easiness: 5
level: 2
tags:
    - Clean Code
---

## Brief

If you are used to using integer constants to express different possible situations, then don't! Enums are meant to do exactly that and are way clearer to read!

```cpp
// Bad, you need comments to indicate what the numbers mean!
void Character::move(int direction) {
    switch(direction) {
    case 0: // North
        /*...*/
    case 1: // East
        /*...*/
    case 2: // South
        /*...*/
    case 3: // West
        /*...*/
    default:
        /*...*/
    }
}
```

```cpp
// Good, the meaning is incorporated in the names of the enum and its values!
enum class Direction {
    North,
    East,
    South,
    West,
};

void Character::move(Direction direction) {
    switch (direction) {
    case Direction::North:
        /*...*/
    case Direction::East:
        /*...*/
    case Direction::South:
        /*...*/
    case Direction::West:
        /*...*/
    default:
        /*...*/
    }
}
```

## Use `enum class`, not `enum`

`enum class` was introduced in C++ as a better version of the `enum` from C.

An `enum class` doesn't allow implicit conversion with ints and other enums, and gives a proper namespace to your values!

```cpp title="Bad, there is no type checking that ensures we use the right enum"
enum Direction { Left, Right, Up, Down };
enum CardinalDirection { North, East, South, West };

void move(CardinalDirection direction);

move(Left); // Bad, this compiles but doesn't do what we want! It will move North!
```

```cpp title="Bad, this doesn't compile because we are defining two Ok values in the global namespace"
enum FilesystemError {
    Ok, // Should be renamed to fs_Ok to avoid conflicting with the other `Ok`
    ErrorNoPermission,
    // etc.
}

enum DatabaseError {
    Ok, // Should be renamed to db_Ok to avoid conflicting with the other `Ok`
    ErrorConnectionLost,
    // etc.
}

///
/// This is equivalent to defining integer constants in the global namespace:
///
static constexpr int Ok = 0;
static constexpr int ErrorNoPermission = 1;
static constexpr int Ok = 0; // Bad, conflicts with the first Ok
static constexpr int ErrorConnectionLost = 1;
```

All of these problems disappear with `enum class`:

```cpp title="Good, the type checking makes sure we use the right enum"
enum class Direction { Left, Right, Up, Down };
enum class CardinalDirection { North, East, South, West };

void move(CardinalDirection direction);

move(Direction::Left); // Good, this doesn't compile and gives us a clear error message
```

```cpp title="Good, this works just fine and we don't need to give weird prefixes to our enum values"
enum class FilesystemError {
    Ok,
    ErrorNoPermission,
    // etc.
}

enum class DatabaseError {
    Ok,
    ErrorConnectionLost,
    // etc.
}
```

## `using enum`

[Since C++20](https://en.cppreference.com/w/cpp/language/enum#Using-enum-declaration) you can have a nicer syntax: `using enum` allows you to skip the enum name in all your switch cases:

```cpp
void Character::move(Direction direction)
{
    using enum Direction;
    switch (direction) {
    case North: // More readable than `Direction::North`. We already know that we are dealing with Directions.
        /*...*/
    case East:
        /*...*/
    case South:
        /*...*/
    case West:
        /*...*/
    default:
        /*...*/
    }
}
```