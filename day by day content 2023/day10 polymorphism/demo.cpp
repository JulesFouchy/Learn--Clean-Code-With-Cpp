#include <fmt/core.h>
#include <iostream>
#include <string>

class Printer1 {
public:
    void print(const std::string& message) const
    {
        std::cout << fmt::format("111\n{}\n111\n", message);
    }
};

class Printer2 {
public:
    void print(const std::string& message) const
    {
        std::cout << fmt::format("222\n{}\n222\n", message);
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