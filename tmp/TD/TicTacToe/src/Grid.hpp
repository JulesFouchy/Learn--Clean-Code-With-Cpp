#pragma once
#include <array>
#include <optional>

enum class Player {
      Knots,
      Crosses,
};

class Grid {
public:
      Grid();
      bool is_empty(int x, int y);
      std::optional<Player> get(int x, int y) const;
      void set(int x, int y, Player player);

private:
      std::array<std::optional<Player>, 9> grid_;
};