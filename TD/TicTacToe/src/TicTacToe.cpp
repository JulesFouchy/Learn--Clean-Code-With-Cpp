#include "TicTacToe.hpp"

void TicTacToe::on_cell_picked(int x, int y) {
      assert(
            x >= 0 && x <= 2 &&
            y >= 0 && y <= 2
      );
      if (grid_.is_empty(x, y)) {
            grid_.set(x, y, current_player_);
            change_player();
      }
}

void TicTacToe::change_player() {
      // Ugly but efficient way of changing the player (0 -> 1 or 1 -> 0)
      int p = static_cast<int>(current_player_);
      current_player_ = static_cast<Player>(1 - p);
}

static char symbol(std::optional<Player> player) {
      if (!player.has_value()) {
            return '-';
      }
      switch (player.value())
      {
      case Player::Crosses:
            return 'X';
      case Player::Knots:
            return 'O';
      default:
            std::cerr << "[TicTacToe::symbol] Unknown Player enum value";
            return '?';
      }
}

void TicTacToe::draw_grid() const {
      for (int y = 0; y < 3; ++y) {
            for (int x = 0; x < 3; ++x) {
                  std::cout << symbol(grid_.get(x, y)) << ' ';
            }
            std::cout << std::endl;
      }
      std::cout << std::endl;
}