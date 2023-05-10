cmake_minimum_required(VERSION 3.20)
project(Strong-Types)

add_executable(${PROJECT_NAME} main.cpp)
target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_20)

# ---Download and link p6---
add_subdirectory(p6)
target_link_libraries(${PROJECT_NAME} p6::p6)