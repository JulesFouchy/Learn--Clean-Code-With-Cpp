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

class Printer {
public:
    void print(const std::string& message) const { _pimpl->print(message); }

public: // Type-erasure implementation details
    Printer() = default;

    template<typename T>
    Printer(T printer) // NOLINT(*-explicit-constructor, *-explicit-conversions) A type-erased object should be implicitly created from objects matching its requirements.
        : _pimpl{std::make_unique<Model<T>>(std::move(printer))}
    {}

    Printer(const Printer& other)
        : _pimpl{other._pimpl->clone()}
    {}
    Printer& operator=(const Printer& other)
    {
        auto tmp = Printer{other};
        std::swap(_pimpl, tmp._pimpl);
        return *this;
    }
    Printer(Printer&&) noexcept            = default;
    Printer& operator=(Printer&&) noexcept = default;
    ~Printer()                             = default;

private:
    struct Concept { // NOLINT(*-special-member-functions)
        virtual ~Concept() = default;

        virtual void                     print(const std::string& message) const = 0;
        virtual std::unique_ptr<Concept> clone() const                           = 0;
    };

    template<typename T>
    struct Model : public Concept {
        explicit Model(T printer)
            : _printer{std::move(printer)}
        {}

        void print(const std::string& message) const override
        {
            _printer.print(message);
        }

        std::unique_ptr<Concept> clone() const override
        {
            return std::make_unique<Model>(*this);
        }

        T _printer;
    };

private:
    std::unique_ptr<Concept> _pimpl;
};

void do_something(const Printer& printer)
{
    printer.print("Some Message");
}

int main()
{
    Printer printer = Printer1{};
    printer         = Printer2{};
    do_something(printer);
}