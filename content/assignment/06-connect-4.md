---
title: Connect 4
---
import CommitLink from "../../components/CommitLink"
import LessonLink from "@site/components/LessonLink"

Our final game will be *Connect 4*.

You won't be very guided, but try to apply <LessonLink slug="split-problems-in-small-pieces"/> and <LessonLink slug="make-it-work-then-make-it-good"/>.<br/>
Try to think about simple things that you know how to do and that will move you towards the final goal. If a step is too complicated, simplify it: it might not correspond to what the final game needs, but it is still some progress done.

<img src="/Learn--Clean-Code-With-Cpp/img/connect-4.gif" style={{width: "50%"}} />

## Drawing the board

The code is going to be similar to what we did for *Noughts and Crosses*, but we want a board the has more columns than rows. It is time to generalize the code we wrote for *Noughts and Crosses*!

<CommitLink hash="2d52c14ccb265435dd780c9922b1d85b49958d60"
            text="[board] Move some code from noughts_and_crosses to board"/><br/>
<CommitLink hash="d00f025996abae103696745dab4db96bb3776b5f"
            text="[board] Start using BoardSize instead of int"/><br/>
<CommitLink hash="4fc19c083f3adebbe9b86038df236230220ae41d"
            text="[board] Properly take width AND height into account"/><br/>
<CommitLink hash="1c642f4bac46fadd9297e23e4aff50ae9d1cfe2c"
            text="[connect_4] Start"/><br/>
<br/>

:::info Tip
Be careful not to break your *Noughts and Crosses* code as you modify and generalize the board code!
:::

## Playing on the board

Again we can reuse the `Board` class of the previous game if we generalize it a bit!<br/>

### Draw the tokens that are on the board

<CommitLink hash="871862c787bfff71da0bc5868c6a8a0804e779e0"
            text="[Board] Move the board class outside of noughts_and_crosses"/><br/>
<CommitLink hash="d2e29143a4b46e812f1cc0ec654f19c31363bde0"
            text="[Board] Now has a width AND a height instead of just one size"/><br/>
<CommitLink hash="e4ad3bb746e54a6613c753458b88a4185f3fe23e"
            text="[Board] Fix: forgot to include <array>"/><br/>
<CommitLink hash="6c2aca1ba81743b785706eda60e1f3dc50e79917"
            text="[connect_4] Add draw_tokens()"/><br/>

### Add tokens to the board by clicking on a column

<CommitLink hash="c01ecf6bb1012eff583b28bf4ae5115d8700e334"
            text="[connect_4] Add try_to_play_in_column()"/><br/>
<CommitLink hash="d733f448bac68157264492289b4cd257733fd57d  "
            text="[connect_4] Start to be able to play by clicking on the board"/><br/>
<CommitLink hash="989cc11a21d812b84e1e8943126867e69e183bd2"
            text="[board] Add aspect_ratio() to the public API"/><br/>
<CommitLink hash="bbe6b2b0259caa507dd99679150a1f8fc9eed28f  "
            text="[connect_4] Properly implement column_at()"/><br/>
<br/>

:::info Tip
Don't forget to handle the "error" cases when a column is full or the player did click outside of the board instead of on a column. Once again <LessonLink text="std::optional" slug="optional"/> can help you represent that.
:::

### Show a preview of where the player is about to play

<CommitLink hash="f838168c71f05d960efe102518af67610f804b82"
            text="[connect_4] Move code to the function preview_token_at()"/><br/>
<CommitLink hash="e9b12332c730c6a87aa3b810262d80249dd74770"
            text="[connect_4::preview_token_at] Fix: forgot to check that row was not null"/><br/>

## Check for the end of the game

This is gonna be very similar to what we did for *Noughts and Crosses*.

<CommitLink hash="264ca4f749a984e7d22c91874646c68288cc60ec"
            text="[board] Move board_is_full() out of noughts_and_crosses"/><br/>
<CommitLink hash="2205e7db3334857db71971039c060d506b0de6ec"
            text="[connect_4] Start implementing game_is_over()"/><br/>
<CommitLink hash="034547d983453d1740a20f7ee5e60e6561a4502f"
            text="[connect_4] Add winner_on_line() and start using it"/><br/>
<CommitLink hash="a111631512cb60e4acaa99db3d5f8f41cc54b1e2  "
            text="[connect_4] Add check_for_winner(), winner_on_rows(), winner_on_columns()"/><br/>
<CommitLink hash="66a1221c08ac32e09be5fdf8a941101fbe6f9ccf"
            text="[connect_4] check_for_winner() is done"/><br/>
<CommitLink hash="2babce698bf81ac23ba2fdbb942e9a84c24c3404"
            text="[connect_4] Add winner_on_lines() to remove duplicated code"/><br/>

## Final touches    
    
<CommitLink hash="9f4c6300dedfe3a95eee7c3ef5ac321177976b3d"
            text="[connect_4] Pause the game for 2 seconds when it is over"/><br/>
<CommitLink hash="a585acd1fd0f4c44d49be7f102350b79929b95ad"
            text="[menu] Add connect_4"/><br/>