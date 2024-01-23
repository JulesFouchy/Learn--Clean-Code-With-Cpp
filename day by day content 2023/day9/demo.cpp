// TODO remove this code at the beginning of every lesson, this is the end goal that we will write together with the students.

// void draw_mesh(const CameraTrackball& camera, ...)
// void draw_mesh(const CameraFreefly& camera, ...)
void draw_mesh(const ICamera& camera, ...)
{
    // ...
    const glm::vec3 pos = camera.get_position(); // Seule fois où on utilise la caméra
    // ...
}

void draw_mesh(const glm::vec3 pos, ...)
{
    // ...
    // const glm::vec3 pos = camera.get_position(); // Seule fois où on utilise la caméra
    // ...
}

class IViewMatrixApplier {
public:
    virtual glm::vec3 apply_view_matrix(glm::vec3 pos) const = 0;
};

class CameraWithMatrix : public IViewMatrixApplier {
public:
    glm::vec3 apply_view_matrix(glm::vec3 pos) const override
    {
        return _matrix * pos;
    }

private:
    glm::mat4 _matrix;
};

class CameraWithMatrixWrapper : public IViewMatrixApplier {
public:
    glm::vec3 apply_view_matrix(glm::vec3 pos) const override
    {
        return _camera.get_matrix() * pos;
    }

private:
    CameraWithMatrix _camera;
};

class CameraWithQuaternion {
public:
private:
    glm::quaternion _quaternion
};

glm::vec3 apply_view_matrix(CameraWithQuaternion, glm::vec3 pos) const
{
    return _quaternion * pos * inv(_quaternion);
}

void draw_mesh(const std::function<glm::vec3(glm::vec3)>& apply_view_matrix, ...)
{
    // ...
    const glm::vec3 pos_view_space = apply_view_matrix(pos); // Seule fois où on utilise la caméra
    // ...
}

glm::vec3 apply_view_matrix(glm::vec3 pos) const
{
    return _quaternion * pos * inv(_quaternion);
}

draw_mesh(&apply_view_matrix);

// void draw_mesh(const glm::mat4& view_matrix, ...)
// {
//     // ...
//     const glm::vec3 pos_view_space = camera.get_view_matrix() * pos; // Seule fois où on utilise la caméra
//     // ...
// }

// void draw_mesh(const glm::quaternion& quaternion, ...)
// {
//     // ...
//     const glm::vec3 pos_view_space =quaternion * pos * inv(quaternion); // Seule fois où on utilise la caméra
//     // ...
// }