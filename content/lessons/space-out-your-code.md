---
title: Space out your code
benefit: 2
easiness: 5
level: practices-and-patterns
tags:
    - Beautiful Code
---

## Brief

One single statement doesn't have to be confined to a single line of code.<br/>
If the line is getting long, you can always add a line break!

I really like to add line breaks between each arguments of a function call, especially if they are important and I want to make them very easy to read:

*Ex 1*
```cpp title="Good, you can quickly see each parameter and its value"
ctx.square(p6::Center{ctx.mouse()},
           p6::Radius{0.3f},
           p6::Rotation{0.011_turn});
```
```cpp title="Not great, the last parameters are harder to read"
ctx.square(p6::Center{ctx.mouse()}, p6::Radius{0.3f}, p6::Rotation{0.011_turn});
```

*Ex 2*
```cpp title="Good, this is readable"
_default_canvas.render_target().blit_to(glpp::RenderTarget::screen_framebuffer_id(),
                                        framebuffer_size(),
                                        glpp::Interpolation::NearestNeighbour);
```
```cpp title="Bad, the line is very long"
_default_canvas.render_target().blit_to(glpp::RenderTarget::screen_framebuffer_id(), framebuffer_size(), glpp::Interpolation::NearestNeighbour);
```

*Ex 3*
```cpp title="Good, ternary expressions don't have to be written in one single line"
const float aspect_ratio = _is_controlling_aspect_ratio
                              ? _aspect_ratio.as_float()
                              : img::SizeU::aspect_ratio(frame_size);
```
```cpp title="Bad, it is harder to see the two alternatives"
const float aspect_ratio = _is_controlling_aspect_ratio ? _aspect_ratio.as_float() : img::SizeU::aspect_ratio(frame_size);
```

*Ex 4*

```cpp title="Good, line breaks and alignment make the structure of the code very clear"
constexpr Color color_from_hexadecimal_code(unsigned int hex_code) {
    return Color(static_cast<float>((hex_code & 0xFF0000u) >> 16) / 255.f,
                 static_cast<float>((hex_code & 0x00FF00u) >>  8) / 255.f,
                 static_cast<float>((hex_code & 0x0000FFu) >>  0) / 255.f);
}
```

*Ex 5*

```cpp title="Great, for a constructor's initializer list line breaks are essential"
VideoExportProcess::VideoExportProcess(const VideoExportParams& params, std::string_view folder_path, img::Size size)
    : _total_nb_of_frames_in_sequence{static_cast<int>(std::ceil((params.end - params.beginning) * params.fps))}
    , _max_nb_digits_of_frame_count{static_cast<int>(std::ceil(std::log10(_total_nb_of_frames_in_sequence)))}
    , _folder_path{folder_path}
    , _size{size}
    , _clock{params.fps, params.beginning}
{}
```

```cpp title="Bad, I hate it so much"
VideoExportProcess::VideoExportProcess(const VideoExportParams& params, std::string_view folder_path, img::Size size)
    : _total_nb_of_frames_in_sequence{static_cast<int>(std::ceil((params.end - params.beginning) * params.fps))}, _max_nb_digits_of_frame_count{static_cast<int>(std::ceil(std::log10(_total_nb_of_frames_in_sequence)))}, _folder_path{folder_path}, _size{size}, _clock{params.fps, params.beginning}
{}
```