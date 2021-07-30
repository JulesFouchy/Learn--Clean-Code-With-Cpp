# pragma once

#include "Grid.hpp"

class TicTacToe {
public:
      /**
       * @brief Triggered whenever a cell is picked. This is the entry point of the game : you don't need to worry about how and when this is called, you just need to respond to that event by updating the game accordingly.
       * 
       * @param x The index of the cell along the x-axis (can be 0, 1 or 2)
       * @param y The index of the cell along the y-axis (can be 0, 1 or 2)
       */
      void on_cell_picked(int x, int y);

      void draw_grid() const;

private:
      void change_player();

private:
      Grid grid_;
      Player current_player_ = Player::Crosses;
      std::optional<Player> winner_;
};