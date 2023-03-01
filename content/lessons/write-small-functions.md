---
title: Write small functions
benefit: 5
easiness: 4
level: clean-code
tags:
    - Clean Code
---
import GoingFurther from "@site/components/GoingFurther"

> Write the functions you wish to see in the world – [*Tony Van Eerd*](https://youtu.be/glYq-dvgby4?t=2721)

> [F.3: Keep functions short and simple.](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#f3-keep-functions-short-and-simple)

## Brief

Small functions:
- are way easier to read and reason about.<br/>
- describe your intent, and allow you to change the implementation behind it easily.<br/>
- facilitate future refactorings because the logic is already split into atomic parts.<br/>
- are easier to search for in the codebase.<br/>
- force you to give meaning by giving names, not only to the action (the function) but also to its parameters; for example:
```cpp
void do_something(Thread& thread, bool is_main_thread) { /*...*/ }

for (size_t i = 0; i < threads.size(); ++i) {
    do_something(threads[i],
                 i == 0); // Thanks to the parameter name we know that `i == 0` actually checks to see if the current thread is the main thread
}
```
[**Important:** Here is what the Core Guidelines have to say about small functions.](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rf-single)

## Details

I used to write long functions like this one, using comments to indicate the different parts of the function. I did not want to write intermediate functions because it felt silly to me to create functions that I would only use once.

```cpp
void View::imgui_window(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit) 
{ 
    if (_is_open) { 
        ImGui::Begin(_name.c_str(), &_is_open, ImGuiWindowFlags_NoScrollbar); 
        // Store window size 
        const auto size = ImGui::GetContentRegionAvail(); 
        if (size.x >= 1.f && size.y >= 1.f) { 
            _size.emplace( 
                static_cast<ImageSize::DataType>(size.x), 
                static_cast<ImageSize::DataType>(size.y)); 
        } 
        else { 
            _size.reset(); 
        } 
        // Store window position 
        _position = ImGui::GetCursorScreenPos(); 
 
        if (_size.has_value()) { 
            // Display the image 
            const auto fitted_image_size = need_to_fit 
                                               ? ImageSizeU::fit_into(*_size, image_size) 
                                               : static_cast<ImageSizeT<float>>(*_size); 
            ImGuiExtras::image_centered(image_texture_id, {fitted_image_size.width(), fitted_image_size.height()}); 
            _is_hovered = ImGui::IsItemHovered(); 
        } 
        else { 
            _is_hovered = false; 
        } 
        ImGui::End(); 
    } 
    else { 
        _size.reset(); 
        _is_hovered = false; 
    } 
} 
```

But I had to admit that I was having trouble reading those long functions, and that maybe everyone else was right.
The same code as above would look like this once split into more atomic parts:

```cpp
void View::imgui_window(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit)
{
    if (_is_open) {
        ImGui::Begin(_name.c_str(), &_is_open, ImGuiWindowFlags_NoScrollbar);
        store_window_size();
        store_window_position();
        display_image(image_texture_id, image_size, need_to_fit);
        ImGui::End();
    }
    else {
        _size.reset();
        _is_hovered = false;
    }
}

void View::store_window_size()
{
    const auto size = ImGui::GetContentRegionAvail();
    if (size.x >= 1.f && size.y >= 1.f) {
        _size.emplace(
            static_cast<ImageSize::DataType>(size.x),
            static_cast<ImageSize::DataType>(size.y));
    }
    else {
        _size.reset();
    }
}

void View::store_window_position()
{
    _position = ImGui::GetCursorScreenPos();
}

void View::display_image(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit)
{
    if (_size.has_value()) {
        const auto fitted_image_size = need_to_fit
                                           ? ImageSizeU::fit_into(*_size, image_size)
                                           : static_cast<ImageSizeT<float>>(*_size);
        ImGuiExtras::image_centered(image_texture_id, {fitted_image_size.width(), fitted_image_size.height()});
        _is_hovered = ImGui::IsItemHovered();
    }
    else {
        _is_hovered = false;
    }
}
```

## Going further

<GoingFurther resources = {[
    {
        title: "Why You Shouldn't Nest Your Code",
        author: "CodeAesthetic",
        link: "https://youtu.be/CFRhGnuXG-4",
        duration: "8min",
    },
    {
        title: "SOLID, Revisited",
        author: "Tony Van Eerd",
        link: "https://youtu.be/glYq-dvgby4",
        duration: "1h30",
    },
]}/>
