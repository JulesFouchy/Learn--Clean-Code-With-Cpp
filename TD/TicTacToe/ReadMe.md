Write debug checks ! As soon as you start writting a function, assert to make sure you respect the invariants ! It will help you as you write the rest of the code because it will catch bugs !

## 

The enum has only two values for the two players, and the grid stores an ```optional<Player>``` to represent the fact that the cells can be empty. We chose that over having the player enum store a third value ```Undefined```, because it makes our API more robust : ```set``` only accepts a ```Player``` (you cannot set a cell to ```Undefined```).

## Bonus

Make the width and height of the grid into two template paramters.