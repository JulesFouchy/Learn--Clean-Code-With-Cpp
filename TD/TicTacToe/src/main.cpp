#include "TicTacToe.hpp"

int main() {
      TicTacToe tic_tac_toe;
      tic_tac_toe.draw_grid();
      tic_tac_toe.on_cell_picked(1, 1);
      tic_tac_toe.draw_grid();
      tic_tac_toe.on_cell_picked(0, 1);
      tic_tac_toe.draw_grid();
      tic_tac_toe.on_cell_picked(0, 1);
      tic_tac_toe.draw_grid();
      tic_tac_toe.on_cell_picked(2, 1);
      tic_tac_toe.draw_grid();
}