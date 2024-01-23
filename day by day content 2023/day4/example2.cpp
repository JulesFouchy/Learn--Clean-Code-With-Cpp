#pragma once
using GLuint = unsigned int;

class Texture {
public:
    Texture(std::filesystem::path image_file)
    {
        glGenTextures(1, &_id);
        // ...
    }

    ~Texture()
    {
        glDeleteTextures(1, &_id);
    }

    Texture(Texture const&)            = delete;
    Texture& operator=(Texture const&) = delete;

    Texture(Texture&& o) noexcept
        : _id{o._id}
        , _width{o._width}
        , _height{o._height}
    {
        o._id = 0;
    }

    Texture& operator=(Texture&& o) noexcept
    {
        if (this == &o)
            return *this;

        _id     = o._id;
        _width  = o._width;
        _height = o._height;
        o._id   = 0;

        return *this;
    }

private:
    GLuint _id;
    int    _width;
    int    _height;
};