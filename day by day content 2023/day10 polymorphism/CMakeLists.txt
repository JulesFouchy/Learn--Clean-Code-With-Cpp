cmake_minimum_required(VERSION 3.20)
project(Polymorphism)

include(FetchContent)
FetchContent_Declare(
    fmt
    GIT_REPOSITORY https://github.com/fmtlib/fmt
    GIT_TAG 9.1.0
)
FetchContent_MakeAvailable(fmt)

function(register_exe filename)
    set(TARGET "${filename}")
    add_executable(${TARGET} ${filename})

    target_compile_features(${TARGET} PRIVATE cxx_std_20)
    target_link_libraries(${TARGET} PRIVATE fmt::fmt)
endfunction()

file(GLOB EXES CONFIGURE_DEPENDS ./*.cpp)
foreach(EXE ${EXES})
    get_filename_component(FILENAME ${EXE} NAME)
    register_exe(${FILENAME})
endforeach()