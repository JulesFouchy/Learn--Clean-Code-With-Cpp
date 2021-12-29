---
title: const
benefit: 4
easiness: 3
order: 2
tags:
    - Clean Code
    - C++
---

## Bonus trick

You can use lambdas for const variables that are complex to initialize.

### Bad :( (because ```x``` is not ```const```)

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