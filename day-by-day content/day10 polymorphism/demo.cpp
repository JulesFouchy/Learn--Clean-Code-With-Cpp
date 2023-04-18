#include <fmt/core.h>
#include <iostream>
#include <string>

class Printer1 {
public:
    void print(const std::string& message) const
    {
        std::cout << fmt::format("---\n{}\n---\n", message);
    }
};

class Printer2 {
public:
    void print(const std::string& message) const
    {
        std::cout << fmt::format("***\n{}\n***\n", message);
    }
};

void do_something(const Printer1& printer)
{
    printer.print("Some Message");
}

int main()
{
    const auto printer = Printer1{};
    do_something(printer);
}