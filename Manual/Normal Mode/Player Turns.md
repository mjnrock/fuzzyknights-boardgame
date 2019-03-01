# Player Turns
After `Daybreak`, each Player takes his or her turn in a *counter clockwise* sequence, starting with the `Anchor`, as determined in the **Board Setup**.

## Hero [ 🧙‍ - `🎲 2d6 +6` ]
In `Battle`, the `Hero` is a unit itself with a roll of `2d6 +6`.  If the `Hero` falls in `Battle` (this is called `FAINTING`), its `Army` can still fight and if successful, the `Hero` will not die.

If a `Hero` `FAINTS` in `Battle`, **all** of its `Items` are dropped on the same Tile and `50%` of its `Army` disbands.  Cut the `Army` size in half, **truncating** any decimal--*e.g. 15 / 2 = 7.5 becomes 7*.

A `Hero` must expend `🐎(-1)` for **each** `Item` to acquire it, consistent with normal `Item` acquisition rules.

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

## Mines [ ⚒️ ]
Upon landing on a tile with a `Mine` token, the Player can attempt to `CAPTURE` the `Mine`.  Upon a successful `CAPTURE`, immediately collect **`💰(+1)`**.  Any time a Player attempts to change possession of a `Mine`, roll a `1dP` to determine if the `Mine` is guarded by `Guardians`.

If the `1dP` roll results in `Guardians`, the Player must roll a `1d6 +2` to determine how many `Guardians` will attempt to defend the `Mine`.  If the Player then defeats the `Guardians`, s/he `CAPTURES` the `Mine`--normal `Monster` rules apply.

**Check for Guardians**

|Roll|🎲 10 - 80|🎲 90 - 100|
|---|---|---|
|🎲 **`1dP`**|`CAPTURE` `Mine`|`FIGHT` **`1d6 +2`** Monsters|

**Determine Guardian Quantity**

|Roll|
|---|
|🎲 **`1d6 +2`**|

> *Example*
> 
> |Roll|Result||Implication|
> |-|-|-|-|
> |🎲 **`1dP`**|`90`|=>|`FIGHT 1d6 +2 Guardians`|
> 
> |Roll|Result||Implication|
> |-|-|-|-|
> |🎲 **`1d6 +2`**|`5`|=>|`5 Guardians`|
> 
> **Player will fight `5 Guardians`**

## Resources [ 💎 ]
Upon landing on a Tile with a `Resource` Token, roll a `1dP` to determine the cache size.  The cache size will determine how much `Resource` the Player finds.

**Determine Cache Size**

|Roll|🎲 10 - 70|🎲 80 - 100|
|---|---|---|
|🎲 **`1dP`**|Small|Large|

**Determine Cache Reward**

|Cache Size|Reward Size Roll|
|---|---|
|Small|🎲 **`1d6 +1`**|
|Large|🎲 **`2d6 +2`**|

> *Example*
> 
> |Roll|Result||Implication|
> |-|-|-|-|
> |🎲 **`1dP`**|`80`|=>|`Large Cache`|
> 
> |Roll|Result||Implication|
> |-|-|-|-|
> |🎲 **`2d6 +2`**|`11`|=>|`💰(+11)`|
> 
> **Player receives `💰(+11)`**

## Items [ 🎁 ]
All Players must agree on a ruleset below, though the Players are allowed to change the ruleset at any point, if it passes a `Vote`.

### Card & Dice Rules
Upon landing on a Tile with an `Item` Token, draw a card from the `Item Deck`.  Roll the dice stated on the card to determine the `Rarity` of the `Item`.  Place a marker on the `Rarity` placeholder on the card's edge.

### Dice-Only Rules (Alternative Ruleset)
In lieu of cards, you may instead roll a `1dP` to determine the `Item Type` according to table below.  After determining `Item Type`, roll a `1dP` to determine `Rarity`.  Upon a **Success**, you may roll again; upon a **Failure** *do not* continue to roll.  **Always** start at `Common` and attempt upgrades from there--i.e. a **Failure** on the first roll results in `Common Rarity`.

If a Player rolls a **Success**, add `+1 Rarity Level` to the `Item`.  The `Item's` final stats are determined by the `Rarity` chart below:

***Main Hand***

|Rarity Level|Name|Roll|
|-|-|-|
|1|`Common`|`1d6 +2`|
|2|`Uncommon`|`1d6 +3`|
|3|`Rare`|`2d6 +3`|
|4|`Epic`|`3d6 +3`|
|5|`Legendary`|`4d6 +5`|

***Off Hand***

|Rarity Level|Name|Roll|
|-|-|-|
|1|`Common`|`1d6`|
|2|`Uncommon`|`1d6 +1`|
|3|`Rare`|`2d6`|
|4|`Epic`|`2d6 +3`|
|5|`Legendary`|`3d6 +5`|

***Amulet***

|Rarity Level|Name|Roll|
|-|-|-|
|1|`Common`|`1d6`|
|2|`Uncommon`|`1d6 +1`|
|3|`Rare`|`1d6 +2`|
|4|`Epic`|`2d6`|
|5|`Legendary`|`2d6 +3`|

**Determine Item Type**

|Roll|🎲 10 - 20|🎲 30 - 60|🎲 70 - 100|
|---|---|---|---|
|🎲 **`1dP`**|`Main Hand`|`Off Hand`|`Amulet`|

**Determine Item Rarity**

|Roll|🎲 10 - 80|🎲 90 - 100|
|---|---|---|
|🎲 **`1dP`**|**Failure**|**Success**|

## Monsters [ 🧟 ]
Upon landing on a Tile with a `Monster` Token, roll a `1dP` to determine the result, based on the table below.

**Roll for Interaction**

|Roll|🎲 10|🎲 20 - 70|🎲 80 - 90|🎲 100|
|---|---|---|---|---|
|🎲 **`1dP`**|`FIGHT` **`4d6`**|`FIGHT` **`2d6`**|`BRIBE` **`2d6`**|`DEFECT` **`2d6`**|

#### `FIGHT`
`4d6`/`2d6` `Monsters` (depending on `1dP` roll above) `ENGAGE` the `Hero`, forcing it to attack.  If the `Hero` dies as a result, normal **Hero Death** rules apply.  If the Player wins, however, s/he is awarded the ***integer*** portion of `+💰(Monster Quantity / 2)` (i.e. **truncate** the decimal, **do not** round).

> *Example*
> 
> |Roll|Result|
> |-|-|
> |`🎲 4d6`|`🎲 19`|
> 
> **The Player will fight `🧟(x19)` and, if victorious, will receive `19 / 2 = 9.5` => `💰(+9)`**

#### `BRIBE`
Up to `2d6` `Monsters` decide to adventure with the `Hero`, at the expense of `💰(-2) per Monster`.  The Player does not have to take all of them.

> **TIP:** While the cost is 2x that of the cost at a `City`, there might be strategic advantage to boosting your `Army`--even at the higher cost--especially under circumstances where you plan to attack your enemies soon.

#### `DEFECT`
Up to `2d6` `Monsters` decide to adventure with the `Hero`, **for FREE**.  The Player does not have to take all of them.

## Cities [ 🏰 - `🎲 3d3 +9` ]
Before a `City` can be attacked, it must not have any `Ramparts` present.  If it does, the `Hero` must spend an entire turn (i.e. it cannot move that turn) in a Tile immediately adjacent to the `Enemy City` and `SIEGE` it.

If a `Hero` `SIEGES` a `City`, then destroy that `City's` `Ramparts`.  While a `City` is under `SIEGE`, it produces **`0 Resources`** and it cannot produce `Mercenaries`, `Heroes`, or `Buildings` during the next `Daybreak`.

Once the `Ramparts` are destroyed, a `Hero` can attack the `City` as it would attack a `Monster` Token.  In `Battle`, the `City` get its own roll of `3d3 +9` each round.

## Multiply-Occupied Tiles
If a Tile is occupied by more than `1` Token, then the following priority order ***must*** be followed ***before*** a `Hero` can [ `INTERACT`, `ENGAGE` ] with lower-priority Tokens:

|Priority|Token(s)|Notes|
|-|-|-|
|1|`🧟 Monster`|-|
|2|`🧙‍ Hero`|-|
|3|`🏰 City`|-|
|4|`🎁 Item` `💎 Resource`|Player choice|
|5|`⚒️ Mine`|-|

> *Example*
> 
> If a `Monster` and an `Mine️` occupy the same Tile, then the Player must ***first*** `ENGAGE` and defeat the `Monster` before the Player can `INTERACT` with the `Mine`--this results in `🐎(-2)`.

## Voting
If a situation arises where a `Vote` is necessary, then each Player can "cast" `1 Vote`.  In the event of a tie (e.g. an even number of Players), the `Anchor` determines the result based on whatever criteria s/he chooses.  If this becomes problematic, the `Vote` automatically fails.

> **TIP:** In the event of a tie and you are the `Anchor`, consider introducing light-hearted fun at the other Players' expense, such as pitting each side of the `Vote` against each other by some means (e.g. a mini event, a trivia contest, etc.).