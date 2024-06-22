# Yimrahanes Algorithms
This is a program that displays number patterns on a table.
It works by first asking a number and generating a pattern based on the number.
Currently it has 2 types of algorithms for generating patterns.

### The First Algorithm
This algorithm starts with 1 at the top left corner and increments in the West and South directions until it gets to the number you inputed.
The other cells are filled by the top row and left column by following the same pattern of incrementing.
When they reach the number you gave it they go to the perpendicular direction (As described below) and start decrementing until they reach 1.
- South => West
- West => South

If the number you gave it is N, the table formed will be a **N×N** Table.

### The Second Algorithm
This one starts from the center at 1 and increments in all four directions until it reaches the passed number.
The other cells are filled using the cells that are already filled and incrementing them as they reach the end of the table where we first stopped.

The Table produced will be a **2N-1×2N-1** Table, if the number you passed is N.

## Conclusion
This projects is made for fun and know that it doesn't have the best looking UI, although this might change later. It is hosted via GitHub Pages,
You can view it by [clicking here.](https://sm-harun.github.io/Yimrahanes-algorithms/)
