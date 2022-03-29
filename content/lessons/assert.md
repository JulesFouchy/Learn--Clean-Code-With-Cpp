---
title: assert
benefit: 3
easiness: 5
level: 3
tags:
    - Clean Code
---

## Brief

`assert` is a pretty useful debugging tool. It allows you to make sure that a function is used properly by the outside world. And you don't even pay a performance cost for it because this check is removed once you build in release mode. **But** this also means that once in release mode you have no guarantee that the requirements are met; this means that in some cases it is better to enforce those checks with another mechanism, such as exceptions, which will remain in release mode.

## assert

```cpp
void serve_alcohol(Person& person) {
    assert(person.age() >= 18); // Bad, this kind of check needs to remain in release mode! Because `person` could be anyone and you don't have a guarantee that this check is done anywhere.
    person.drink(alcohol());
}
```

```cpp title="Example from the Dear ImGui library"
assert(g.WithinFrameScope && "You forgot to call ImGui::NewFrame()");
// Good, this does trigger when the developer using the library does something wrong, and tells them what they did wrong. Once the error has been detected and fixed in the code, we can have the guarantee that it will never happen again even in release.
// Basically since this function does not depend on user input but on usage by the programmer it is safe to use an assert.
```

## static_assert

`static_assert` happens at compile time, whereas `assert` happens at runtime. It is used, just like `assert`, to make sure that a function is used properly. It is especially useful in template contexts if you require that a type has certain properties:

```cpp
template<typename T>
T compute_something(T t) {
    static_assert(std::is_floating_point<T>::value, // Good, fail early rather than see the function break in unexpected ways later
                  "compute_something() only works for float and double!");
    // ...
}
```

```cpp title="Example from the Cereal library"
// Great, Cereal does some metaprogramming magic to help you use the library correctly
// and gives you clear error messages in case you do something wrong.
template <class T, class A>
struct has_member_save : std::integral_constant<bool, detail::has_member_save_impl<T, A>::value>
{
    typedef typename detail::has_member_save_impl<T, A> check;
    static_assert( check::value || !check::not_const_type,
    "cereal detected a non-const save. \n "
    "save member functions must always be const" );
};
```