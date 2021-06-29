#pragma once
#include <array>
#include <optional>

enum class Player {
      Blue,
      Red,
};

class Grid {
public:
      Grid();
      std::optional<Player> get(int x, int y) const;
      void set(int x, int y, Player player);

private:
      std::array<std::optional<Player>, 9> grid_;
};