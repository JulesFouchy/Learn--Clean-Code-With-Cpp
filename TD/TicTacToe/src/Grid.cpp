#include "Grid.hpp"
#include <algorithm>
#include <assert.h>

Grid::Grid() {
      std::for_each(grid_.begin(), grid_.end(), [](std::optional<Player> optional_player) {
            assert(optional_player.has_value());
      });
}

static int compute_index(int x, int y) {
      assert(
            x >= 0 && x <= 2 &&
            y >= 0 && y <= 2
      );
      return x + y * 3;
}

std::optional<Player> Grid::get(int x, int y) const {
      return grid_[compute_index(x, y)];
}

void Grid::set(int x, int y, Player player) {
      assert(!get(x, y).has_value());
      grid_[compute_index(x, y)] = player;
}