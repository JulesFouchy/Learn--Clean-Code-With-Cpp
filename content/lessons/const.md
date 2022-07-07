---
title: const
benefit: 4
easiness: 3
level: basic-cpp
tags:
    - Clean Code
    - C++
---
import YoutubeVideo from "@site/components/YoutubeVideo"

## Brief

<YoutubeVideo id="4fJBrditnJU?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"/>

<br/>

<YoutubeVideo id="bP9z3H3cVMY?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"/>

## When **not** to use const

- When returning by value
- On member variables 

On arguments passed by copy it is up to you, doesn't add much semantic, doesn't prevent big bugs but can prevent small ones.

## Bonus trick

You can use lambdas for const variables that are complex to initialize.

### Bad :( (because `x` is not `const`)

```cpp
enum class MyEnum {
    value0,
    value1,
    value2,
};

int do_something(MyEnum my_enum) {
      int x;
      switch(my_enum) {
            case MyEnum::value0 :
                  x = 17;
                  break;
            case MyEnum::value1 :
                  x = 5;
                  break;
            case MyEnum::value2 :
                  x = 30;
                  break;
            default:
                  x = 0;
                  break;
      }
      // use x
      return x + 2;
}

int main() {
    return do_something(MyEnum::value1);
}
```

### Good :)

```cpp
enum class MyEnum {
    value0,
    value1,
    value2,
};

int do_something(MyEnum my_enum) {
      const int x = [my_enum]() {
            switch(my_enum) {
                  case MyEnum::value0 :
                        return 17;
                  case MyEnum::value1 :
                        return 5;
                  case MyEnum::value2 :
                        return 30;
                  default:
                        return 0;
            }
      }(); // parenthesis to call the lambda function that was just declared
      // use x
      return x + 2;
}

int main() {
    return do_something(MyEnum::value1);
}
```