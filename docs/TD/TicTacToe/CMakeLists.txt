cmake_minimum_required(VERSION 3.16)

# Set project name
project(TicTacToe C CXX)

# Set C++ version
set(CXX_STANDARD 20)

# Grab all the source files
file(GLOB_RECURSE MY_SOURCES
      src/*
)

# Create target executable
add_executable(${PROJECT_NAME}
      ${MY_SOURCES}
)
set_property(TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD ${CXX_STANDARD})

# PCH (check out https://youtu.be/eSI4wctZUto to learn more)
target_precompile_headers(${PROJECT_NAME} PRIVATE
      <iostream>
      <assert.h>
)

# Set include directories
include_directories(
      src
)

