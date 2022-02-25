---
title: std::function
benefit: 3
easiness: 5
level: 3
tags:
    - Clean Code
    - C++
---

## Brief

`std::function` is a simple yet powerful type. It can basically store any function: this allows you to pass functions as parameters to other functions, or to store a function for later use.

```cpp
#include <functional>

std::vector<std::function<void()>> callbacks; // A list of functions that we will call when some special event happens.
```

A `std::function` can be a lambda:

```cpp
callbacks.push_back(
    []() { std::cout << "Lambda\n"; }
);
```

or a function pointer:

```cpp
void my_callback() {
    std::cout << "Function pointer\n";
}

callbacks.push_back(
    &my_callback
);
```

or a function object:

```cpp
struct MyCallback {
    void operator()() const {
        std::cout << "Function object\n";
    }
};

callbacks.push_back(
    MyCallback{}
);
```

We would than use our `callbacks` like so:

```cpp
for (const auto& callback : callbacks) {
    callback();
}
```

## Signature

`std::function` stores functions with a given signature. For example `std::function<int(float)>` is a function that takes a `float` and returns an `int`.