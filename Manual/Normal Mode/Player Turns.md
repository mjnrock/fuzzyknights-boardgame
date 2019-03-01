# Player Turns
After `Daybreak`, each Player takes his or her turn in a *counter clockwise* sequence, starting with the `Anchor`, as determined in the **Board Setup**.

## Hero Movement [ 🐎 ]
Each `Hero` is able to `MOVE` up to `1d10 +10` Tiles.  A `Hero` may **only** expend movement from its own movement roll, and can voluntarily end its own movement for that turn at any point.

> **ELI5**
> 
> - *A `Hero` can't "gift" another `Hero` movement*
> - *A `Hero` does not have to use all of its movement*

A `Hero` may move on any **unoccupied** Tile for `🐎(-1)`.

If the Tile is **occupied** by a Token, then the Player may: `ENGAGE` or `INTERACT` with ***each*** Token at an *additional* expense of `🐎(-1)` (i.e. a Tile could theoretically cost multiple movement, all said and done).

If the Player owns a `City` or `Mine`, then **all** of his or her `Heroes`--as well as `Allied Heroes`, if playing with `Alliances`--can treat that Tile *as if* it were unoccupied.

> *Examples*
> 
> **ASSUME:** The `Hero [ 🧙‍ ]` has rolled `🎲 1d10 +10` = `🐎(+14)` for the following examples and the `Map` immediately below is the "base version" of the `Map` that subsequent examples will modify
> 
> |0,0|1|2|3|4|5|
> |-|-|-|-|-|-|
> |**1**|-|-|🧟|-|-|
> |**2**|🏰|-|-|💎|⚒️|
> |**3**|-|-|🧙‍|-|🎁|
> |**4**|-|🎁🎁|-|-|-|
> |**5**|🧟|-|-|-|⚒️|

> *Example*
> 
> |0,0|1|2|3|4|5|
> |-|-|-|-|-|-|
> |**1**|🐎(-1)|🐎(-1)|🧟🐎(-2)|🐎(-1)|🐎(-1)|
> |**2**|🏰🐎(*)|🐎(-1)|🐎(-1)|💎🐎(-2)|⚒️️🐎(*)|
> |**3**|🐎(-1)|🐎(-1)|🧙‍|🐎(-1)|🎁🐎(-2)|
> |**4**|🐎(-1)|🎁🎁🐎(-3)|🐎(-1)|🐎(-1)|🐎(-1)|
> |**5**|🧟🐎(-2)|🐎(-1)|🐎(-1)|🐎(-1)|⚒️🐎(*)|
> 
> **`INTERACT` NOTE:** Because of the **`💎[4, 2]`** and **`💎[2, 4]`**, the `Hero` must spend `🐎(-1)` on the TIle movement and `🐎(-1)` to `INTERACT` with ("pick up") the `Resource`.  Each `🐎(X)` on the `Map` below represents how movement *that Tile alone* costs.
> 
> **`ENGAGE` NOTE:** Notice above that the `Mines` and `City` have an * next to them indicating that they would only cost `🐎(-1)` instead of `🐎(-2)` **if and only if** the Player currently owns it.  If the `Mine` or `City
>
> **`INTERACT` NOTE:** Notice at **`[2, 4]`** that there are `2 Item [ 🎁 ]` Tokens.  This *can only happen* as a result of a `Hero` dying on that Tile, but is perfectly acceptable under that condition for a TIle to have multiple `Item` tokens.  Because there are `🎁(2)`, the `Hero` must spend `🐎(-1)` to occupy the Tile, `🐎(-1)` to acquire the **first** 🎁, and 🐎(-1) to acquire the **second** 🎁, resulting in `🐎(-1) + 🐎(-1) + 🐎(-1) = 🐎(-3)`.
> 
> **`ENGAGE` NOTE:** A Tile occupied by a `Monster` requires the `Hero` to expend `🐎(-1)` to occupy the Tile and `🐎(-1)` to `ENGAGE` the `Monster`, resulting in `🐎(-1) + 🐎(-1) = 🐎(-2)`

## Hero Death
In **any and all** cases where a `Hero` dies, **all** `Items` are dropped at the Tile on which the `Hero` died.

> **[ Special Case ]** If the `Hero` dies at a `City`, the `Items` are instead placed within the `Vault` of that `City` and normal `Vault` rules apply.

If the `Hero` had any `Mercenaries` still alive within its command at the time of death (for any reason), then `1` `Monster` Token is placed on the Tile, as well.

> **NOTE:** In the case of a `Hero` death *at* a `City`, those `Monster` Tokens *are* placed on the same Tile as a `City`.  Functionally, this means that the `Monster` Token must be defeated before access to/from the `City` is possible (for any `Hero`--`Allied` or `Enemy`).  This `Monster` Token is treated like any other `Monster` Token and all normal `Monster` Token rules apply.

> **TIP:** Strategically retreating from a fight with a "Pawn Hero" can force your enemy to deal with a `Monster` Token on his or her `City`.  Be careful, though, as a Player is rewarded for killing `Monsters` and also has a `1dP` roll chance to acquire those `Monsters`.

