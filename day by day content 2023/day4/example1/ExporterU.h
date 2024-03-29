#pragma once
#include <img/img.hpp>
#include "internal/Polaroid.h"

namespace Cool::ExporterU {

/**
 * @brief Exports an image as PNG
 *
 * @param size
 * @param time
 * @param polaroid
 * @param file_path The name of the file that you want to create
 */
void export_image(img::Size size, float time, Polaroid polaroid, std::filesystem::path file_path);

} // namespace Cool::ExporterU
