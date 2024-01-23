- Lesson "Use structs to group data"
- Refresher on copy vs reference:
  - When passing arguments
    - It you want to modify, make sure to pass by reference
    - If the type is expensive / impossible (cf move constructors) to copy, pass by const&
      Ex: 
```bash
[build] /home/adrien/Documents/s4/prog/projet_prog_2023/src/main.cpp: In function ‘int main(int, char**)’:
[build] /home/adrien/Documents/s4/prog/projet_prog_2023/src/main.cpp:38:30: error: use of deleted function ‘p6::Context::Context(const p6::Context&)’
[build]    38 |     Boid boidtest2 = Boid(ctx);
[build]       |                              ^
[build] In file included from /home/adrien/Documents/s4/prog/projet_prog_2023/build/_deps/p6-src/include/p6/p6.h:6,
[build]                  from /home/adrien/Documents/s4/prog/projet_prog_2023/src/main.cpp:4:
[build] /home/adrien/Documents/s4/prog/projet_prog_2023/build/_deps/p6-src/include/p6/../../src/Context.h:99:5: note: declared here
[build]    99 |     Context(const Context&)            = delete;
[build]       |     ^~~
[build] In file included from /home/adrien/Documents/s4/prog/projet_prog_2023/src/main.cpp:6:
[build] /home/adrien/Documents/s4/prog/projet_prog_2023/src/boid.hpp:16:22: note:   initializing argument 1 of ‘Boid::Boid(p6::Context)’
[build]    16 |     Boid(p6::Context ctx);
[build]       |          ~~^
[build] /home/adrien/Documents/s4/prog/projet_prog_2023/src/main.cpp:38:10: warning: unused variable ‘boidtest2’ [-Wunused-variable]
[build]    38 |     Boid boidtest2 = Boid(ctx);
[build]       |          ^~~~~
[build] ninja: build stopped: subcommand failed.
[proc] The command: /usr/bin/cmake --build /home/adrien/Documents/s4/prog/projet_prog_2023/build --config Debug --target Simple-p6-Setup -- exited with code: 1
[build] Build finished with exit code 1
```
  - This happens for functions, but also in range-based for loops
  - :danger: When returning from a function