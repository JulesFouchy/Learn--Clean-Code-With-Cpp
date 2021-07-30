PERF : don't use ```std::vector<std::vector<T>>``` (actually for ```std::array``` this would be okay I believe) ! But we can create a wrapper around ```std::vector<T>``` that will make it act as a 2D array.

- operator overloading
- use it for an image class, and add nice functionnality to this class (like iterators. See Cool::Image)

Bonus : generalize to N dimensionnal array ? (using templates)