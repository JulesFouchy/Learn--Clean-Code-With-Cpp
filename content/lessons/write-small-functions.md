---
title : Write small functions
benefit: 5
easiness: 3
order: 2
tags:
    - Clean Code
---

## Brief

Small functions are way easier to read and reason about.

Here is what the Core Guidelines have to say about it : https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#Rf-single

## Details

I used to write long functions like this, using comments to indicate the different parts of the function, because it felt silly to me to create a function that I would only use in one place.

```cpp
void View::imgui_window(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit) 
{ 
    if (_is_open) { 
        ImGui::Begin(_name.c_str(), &_is_open, ImGuiWindowFlags_NoScrollbar); 
        // Update _size 
        auto size = ImGui::GetContentRegionAvail(); 
        if (size.x >= 1.f && size.y >= 1.f) { 
            _size.emplace( 
                static_cast<ImageSize::DataType>(size.x), 
                static_cast<ImageSize::DataType>(size.y)); 
        } 
        else { 
            _size.reset(); 
        } 
        // Update _position 
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
The same code as above would look like this once split into more atomic parts :

```cpp
void View::imgui_window(ImTextureID image_texture_id, ImageSize image_size, bool need_to_fit)
{
    if (_is_open) {
        ImGui::Begin(_name.c_str(), &_is_open, ImGuiWindowFlags_NoScrollbar);
        grab_window_size();
        grab_window_position();
        display_image(image_texture_id, image_size, need_to_fit);
        ImGui::End();
    }
    else {
        _size.reset();
        _is_hovered = false;
    }
}

void View::grab_window_size()
{
    auto size = ImGui::GetContentRegionAvail();
    if (size.x >= 1.f && size.y >= 1.f) {
        _size.emplace(
            static_cast<ImageSize::DataType>(size.x),
            static_cast<ImageSize::DataType>(size.y));
    }
    else {
        _size.reset();
    }
}

void View::grab_window_position()
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