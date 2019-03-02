# Player Turns
After `Daybreak`, each Player takes his or her turn in a *counter clockwise* sequence, starting with the `Anchor`, as determined in the **Board Setup**.

## Hero [ 🧙‍ - `🎲 2d6 +6` ]
In `Battle`, the `🧙‍ Hero` is a unit itself with a roll of `🎲 2d6 +6`.  If the `🧙‍ Hero` falls in `Battle` (this is called `FAINTING`), its `Army` can still fight and if successful, the `🧙‍ Hero` will not die.

If a `🧙‍ Hero` `FAINTS` in `Battle`:
- **All** of its `🎁 Items` are dropped on the same Tile
- `50%` of its `Army` disbands

> *Example*
> 
> Cut the `Army` size in half, **truncating** any decimal
> 
> Initial `Army` of `🤺(x15) / 2 = 7.5` becomes `🤺(x7)` remain with the `🧙‍ Hero`*.

A `🧙‍ Hero` must expend `🐎(-1)` for **each** `🎁 Item` to acquire it, consistent with normal `🎁 Item` acquisition rules.

## Hero Movement [ 🐎 ]
Each `🧙‍ Hero` is able to `MOVE` up to `🎲 1d10 +10` Tiles.  A `🧙‍ Hero` may **only** expend movement from its own movement roll, and can voluntarily end its own movement for that turn at any point.

> **ELI5**
> 
> - *A `🧙‍ Hero` can't "gift" another `🧙‍ Hero` movement*
> - *A `🧙‍ Hero` does not have to use all of its movement*

A `🧙‍ Hero` may move on any **unoccupied** Tile for `🐎(-1)`.

If the Tile is **occupied** by a Token, then the Player may: `ENGAGE` or `INTERACT` with ***each*** Token at an *additional* expense of `🐎(-1)` (cf. "Multiply-Occupied Tiles" and Token-specific section).

If the Player or `Ally` owns a `🏰 City` or `⚒️ Mine`, then **all** `Alliance Heroes` can treat that Tile *as if* it were unoccupied.

> *Examples*
> 
> **ASSUME:** The `🧙‍ Hero` has rolled `🎲 1d10 +10` = `🐎(+14)` for the following examples and the `Map` immediately below is the "base version" of the `Map` that subsequent examples will modify
> 
> |0,0|1|2|3|4|5|
> |-|-|-|-|-|-|
> |**1**|-|-|🧟|-|-|
> |**2**|🏰|-|-|💰|⚒️|
> |**3**|-|-|🧙‍|-|🎁|
> |**4**|-|🎁🎁|-|-|-|
> |**5**|🧟|-|-|-|⚒️|

> *Example*
> 
> |0,0|1|2|3|4|5|
> |-|-|-|-|-|-|
> |**1**|🐎(-1)|🐎(-1)|🧟🐎(-1)|🐎(-1)|🐎(-1)|
> |**2**|🏰🐎(*)|🐎(-1)|🐎(-1)|💰🐎(-2)|⚒️️🐎(-1)|
> |**3**|🐎(-1)|🐎(-1)|🧙‍|🐎(-1)|🎁🐎(-2)|
> |**4**|🐎(-1)|🎁🎁🐎(-3)|🐎(-1)|🐎(-1)|🐎(-1)|
> |**5**|🧟🐎(-1)|🐎(-1)|🐎(-1)|🐎(-1)|⚒️🐎(-1)|
> 
> **`INTERACT` NOTE:** Because of the **`💰[4, 2]`** and **`💰[2, 4]`**, the `🧙‍ Hero` must spend `🐎(-1)` on the Tile movement and `🐎(-1)` to `INTERACT` with ("pick up") the `💰 Resource`.  Each `🐎(X)` on the `Map` below represents how movement *that Tile alone* costs.
> 
> **`ENGAGE` NOTE:** Notice above that the `🏰 City` has an * next to them indicating that it would only cost `🐎(-1)` **if and only if** the Player currently owns it.  If the `🏰 City` is owned by another Player, normal `🏰 City`  `ENGAGEMENT` rules apply.
>
> **`INTERACT` NOTE:** Notice at **`[2, 4]`** that there are `2 Item [ 🎁 ]` Tokens.  This *can only happen* as a result of a `🧙‍ Hero` dying on that Tile, but is perfectly acceptable under that condition for a Tile to have multiple `🎁 Item` tokens.  Because there are `🎁(2)`, the `🧙‍ Hero` must spend `🐎(-1)` to occupy the Tile, `🐎(-1)` to acquire the **first (1st)** 🎁, and 🐎(-1) to acquire the **second** 🎁, resulting in `🐎(-1) + 🐎(-1) + 🐎(-1) = 🐎(-3)`.
> 
> **`ENGAGE` NOTE:** A Tile occupied by a `🧟 Monster` requires the `🧙‍ Hero` to expend `🐎(-1)` to occupy the Tile.  If a `🧙‍ Hero` is ever on a Tile with a `🧟 Monster`, the `🧙‍ Hero` **must** perform normal `🧟 Monster` interaction rules.
>
> **`INTERACT` NOTE:** A Tile occupied by a `⚒️️ Mine` requires the `🧙‍ Hero` to expend `🐎(-1)` to occupy the Tile.  If a `🧙‍ Hero` is ever on a Tile with a `⚒️️ Mine`, the `🧙‍ Hero` **must** perform normal `⚒️️ Mine` interaction rules.

## Hero Death
In **any and all** cases where a `🧙‍ Hero` dies, **all** `🎁 Items` are dropped at the Tile on which the `🧙‍ Hero` died.

> **[ Special Case ]** If the `🧙‍ Hero` dies at a `🏰 City`, the `🎁 Items` are instead placed within the `Armory` of that `🏰 City` and normal `Armory` rules apply.

If the `🧙‍ Hero` had any `Mercenaries [ 🤺 ]` still alive within its command at the time of death (for any reason), then `1` `🧟 Monster` Token is placed on the Tile, as well.

> **NOTE:** In the case of a `🧙‍ Hero` death *at* a `🏰 City`, those `🧟 Monster` Tokens *are* placed on the same Tile as a `🏰 City`.  Functionally, this means that the `🧟 Monster` Token must be defeated before access to/from the `🏰 City` is possible (for any `🧙‍ Hero`--`Allied` or `Enemy`).  This `🧟 Monster` Token is treated like any other `🧟 Monster` Token and all normal `🧟 Monster` Token rules apply.

> **TIP:** Strategically retreating from a fight with a "Pawn Hero" can force your enemy to deal with a `🧟 Monster` Token on his or her `🏰 City`.  Be careful, though, as a Player is rewarded for killing `🧟 Monsters` and also has a `🎲 1dP` roll chance to acquire those `🧟 Monsters`.

## Mines [ ⚒️ ]
Upon landing on a tile with a `⚒️ Mine` Token, the Player can attempt to `CAPTURE` the `⚒️ Mine`.  Upon a successful `CAPTURE`, immediately collect **`💰(+1)`**.  Any time a Player attempts to change possession of a `⚒️ Mine`, roll a `🎲 1dP` to determine if the `⚒️ Mine` is guarded by `Guardians`.

If the `🎲 1dP` roll results in `Guardians`, the Player must roll a `🎲 1d6 +2` to determine how many `Guardians` will attempt to defend the `⚒️ Mine`.  If the Player then defeats the `Guardians`, s/he `CAPTURES` the `⚒️ Mine`.

If the `⚒️ Mine` was **not** owned by a Player, then normal `🧟 Monster` rules apply.  Otherwise, no bonus `💰 Resource` is collected for `Guardian` kills, only a `CAPTURE` and `💰(+1)` for the `CAPTURE`.

**Check for Guardians**

|Roll|🎲 10 - 80|🎲 90 - 100|
|---|---|---|
|🎲 **`1dP`**|`CAPTURE`|`FIGHT` **`🎲 1d6 +2`** Monsters|

**Determine Guardian Quantity**

|Highest Overall|Roll|
|---|---|
|*Encampment*|🎲 **`1d6`**|
|*Villa*|🎲 **`1d6 +2`**|
|*Estate*|🎲 **`2d6 +3`**|
|*Castle*|🎲 **`3d6 +4`**|

**A `⚒️ Mine's` `🧟 Monster` quantity is determined by whatever Player has the ***highest*** `🏰 City` building.***

> *Example*
> 
> **ASSUME:** That the *highest* `🏰 City` construction is a `Villa` out of all Players `🏰 Cities`.
>
> |Roll|Result||Implication|
> |-|-|-|-|
> |🎲 **`1dP`**|`90`|=>|`🎲 1d6 +2 Guardians`|
> 
> |Highest Overall|Roll|
> |---|---|
> |*Villa*|🎲 **`1d6 +2`**|
>
> |Roll|Result||Implication|
> |-|-|-|-|
> |🎲 **`1d6 +2`**|`5`|=>|`5 Guardians`|
> 
> **Player will `FIGHT 5 Guardians`**

## Resources [ 💰 ]
Upon landing on a Tile with a `💰 Resource` Token, roll a `🎲 1dP` to determine the cache size.  The cache size will determine how much `💰 Resource` the Player finds.

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

### Ruleset 1) Card & Dice Rules (Default Ruleset)
Upon landing on a Tile with an `🎁 Item` Token, draw a card from the `Item Deck`.  Roll the dice stated on the card to determine the `Rarity` of the `🎁 Item`.  Place a marker on the `Rarity` placeholder on the card's edge.

### Ruleset 2) Dice-Only Rules (Alternative Ruleset)
In lieu of cards, you may instead roll a `🎲 1dP` to determine the `Item Type` according to table below.  After determining `Item Type`, roll a `🎲 1dP` to determine `Rarity`.  Upon a **Success**, you may roll again; upon a **Failure** *do not* continue to roll.  **Always** start at `Common` and attempt upgrades from there.

**Determine Item Type**

|Roll|🎲 10 - 20|🎲 30 - 60|🎲 70 - 100|
|---|---|---|---|
|🎲 **`1dP`**|`Main Hand`|`Off Hand`|`Amulet`|

**Determine Item Rarity**

|Roll|🎲 10 - 70|🎲 80 - 100|
|---|---|---|
|🎲 **`1dP`**|**Failure**|**Success**|

If a Player rolls a **Success**, add `+1 Rarity Level` to the `🎁 Item`, else remain at current `Rarity Level`.

> *Example* Immediate Failure
> 
> A **Failure** on the **first (1st)** roll results in `Common Rarity`.

> *Example* Immediate Success
> 
> A **Success** on the **first (1st)** roll results in `Uncommon Rarity`, ***roll again***
> 
> A **Success** on the **second (2nd)** roll results in `Rare Rarity`, ***roll again***
> 
> A **Failure** on the **third (3rd)** roll remains in `Rare Rarity`.
 
The `Item's` final stats are determined by the `Rarity` chart below:

***Main Hand***

|Rarity Level|Name|Roll|
|-|-|-|
|1|`Common`|`🎲 1d6 +2`|
|2|`Uncommon`|`🎲 1d6 +3`|
|3|`Rare`|`🎲 2d6 +3`|
|4|`Epic`|`🎲 3d6 +3`|
|5|`Legendary`|`🎲 4d6 +5`|

***Off Hand***

|Rarity Level|Name|Roll|
|-|-|-|
|1|`Common`|`🎲 1d6`|
|2|`Uncommon`|`🎲 1d6 +1`|
|3|`Rare`|`🎲 2d6`|
|4|`Epic`|`🎲 2d6 +3`|
|5|`Legendary`|`🎲 3d6 +5`|

***Amulet***

|Rarity Level|Name|Roll|
|-|-|-|
|1|`Common`|`🎲 1d6`|
|2|`Uncommon`|`🎲 1d6 +1`|
|3|`Rare`|`🎲 1d6 +2`|
|4|`Epic`|`🎲 2d6`|
|5|`Legendary`|`🎲 2d6 +3`|

## Monsters [ 🧟 ]
Upon landing on a Tile with a `🧟 Monster` Token, roll a `🎲 1dP` to determine the result, based on the table below.

**Roll for Interaction**

|Roll|🎲 10|🎲 20 - 70|🎲 80 - 90|🎲 100|
|---|---|---|---|---|
|🎲 **`1dP`**|`HARD-FIGHT`|`FIGHT`|`BRIBE`|`DEFECT`|

**Roll for Monster Quantity**

|Situation|Roll|
|---|---|
|`HARD-FIGHT`|`🎲 4d6`|
|`FIGHT`|`🎲 2d6`|
|`BRIBE`|`🎲 2d6`|
|`DEFECT`|`🎲 1d6 +3`|


#### `HARD-FIGHT`/`FIGHT`
`🎲 4d6`/`🎲 2d6` `🧟 Monsters` (depending on `🎲 1dP` roll above) `ENGAGE` the `🧙‍ Hero`, forcing it to attack.  If the `🧙‍ Hero` dies as a result, normal **Hero Death** rules apply.  If the Player wins, however, s/he is awarded the ***integer*** portion of `+💰(Monster Quantity / 2)` (i.e. **truncate** the decimal, **do not** round).

> *Example*
> 
> |Roll|Result|
> |-|-|
> |`🎲 4d6`|`🎲 19`|
> 
> **The Player will fight `🧟(x19)` and, if victorious, will receive `19 / 2 = 9.5` => `💰(+9)`**

#### `BRIBE`
Up to `🎲 2d6` `🧟 Monsters` decide to adventure with the `🧙‍ Hero`, at the expense of `💰(-3) per Monster`.  The Player does not have to take all of them.

> **TIP:** While the cost is 1.5x that of the cost at a `🏰 City`, there might be strategic advantage to boosting your `Army`--even at the higher cost--especially under circumstances where you plan to attack your enemies soon.

#### `DEFECT`
Up to `🎲 2d6` `🧟 Monsters` decide to adventure with the `🧙‍ Hero`, **for FREE**.  The Player does not have to take all of them.

## Cities [ 🏰 - `🎲 3d3 +9` ]
Before a `🏰 City` can be attacked, it must not have any `🛡 Ramparts` present.  If it does have `🛡 Ramparts` present, then the `🧙‍ Hero` can either:
* Forego its roll and perform a `SIEGE`

***OR***

* Risk a roll `>= 15` to potentially move a few Tiles before `SIEGING`.  If a roll is `< 15`, then that `Hero` **cannot** `SIEGE` that turn.

> **[ Special Case ]** If the `🧙‍ Hero` has *at least* `🐎(15)` remaining, it can `SIEGE` by ending its turn.

If a `🧙‍ Hero` `SIEGES` a `🏰 City`, then destroy that `City's` `🛡 Ramparts`.  While a `🏰 City` is under `SIEGE`, it produces **`0 Resources`** and it cannot produce `🤺 Mercenaries`, `🧙‍ Heroes`, or `Buildings` during the *next* `Daybreak`.

Once the `🛡 Ramparts` are destroyed, a `🧙‍ Hero` can attack the `🏰 City` as it would attack a `🧟 Monster` Token.  In `Battle`, the `🏰 City` get its own roll of `🎲 3d3 +9` each round.

### Garrisoned Heroes
A `Garrisoned` `🧙‍ Hero` cannot be attacked directly, as it is protected by the `🏰 City`.  If a `🏰 City` is attacked while a `🧙‍ Hero` is `Garrisoned`, then the `🧙‍ Hero` and its `Army` will assist in defending the `🏰 City`.

> **NOTE:** If A `Garrisoned` `🧙‍ Hero` is at a `🏰 City` while it is attacked, there would be a `🧙‍ Hero`, a `🏰 City`, and the aggregation of the `Recruits` both in the `🏰 City` and on the `🧙‍ Hero` (if there were any) defending the  `🏰 City`.

### Armory
A `City's` `Armory` is simply a collection of `🎁 Items` that any `🧙‍ Hero` currently `Garrisoned` at that `🏰 City` can exchange, deposit, or withdraw `🎁 Items`.

`🎁 Items` in the `Armory` do not apply to `Battle` rolls in the event of a `🏰 City` assault.

### Successful City Assault
If a `🏰 City` falls to an assault, ***all*** `🎁 Items` in the Armory and all `💰 Resources` at that `🏰 City` now become the property of the conquering party.

If a `🧙‍ Hero` was also *defending* a `🏰 City` in the assault, ***all*** `🎁 Items` in the Armor and all `💰 Resources` at that `🏰 City` now become the property of the conquering party.

All `🎁 Items` and `💰 Resources` transferred from the assault go into the `🏰 City's` `Armory` and `King's Purse` by default.  While it can be readily transferred to a `Garrisoned` `🧙‍ Hero`, conquered `🎁 Items` and `💰 Resources` default to the `🏰 City`.

## Multiply-Occupied Tiles
Any Token interaction will cost a minimum of `🐎(-1)`.  This applies to consecutive Token acquisitions on the same Tile.

If a Tile is occupied by more than `1` Token, then the following priority order ***must*** be followed ***before*** a `🧙‍ Hero` can [ `INTERACT`, `ENGAGE` ] with lower-priority Tokens:

|Priority|Token(s)|Notes|
|-|-|-|
|1|`🧟 Monster`|-|
|2|`🧙‍ Hero`*|-|
|3|`🏰 City`|-|
|4|`🎁 Item` `💰 Resource`|Player choice|
|5|`⚒️ Mine`|-|

*`🧙‍ Heroes` `Garrisoned` in a `🏰 City` are considered a `🏰 City` by priority standards, and become another unit on the `City's` `Battlefield`.

> *Example*
> 
> If a `🧟 Monster` and an `Mine️` occupy the same Tile, then the Player must ***first (1st)*** `ENGAGE` and defeat the `🧟 Monster` before the Player can `INTERACT` with the `⚒️ Mine`--this results in `🐎(-2)`.

## Miscellaneous
Below are some random things not *often* relevant to the game, but it may come up.

### Voting
Do not read this section too rigidly, it is meant as a high-level guidance, but the ultimate decision is up to you.

If a situation arises where a `Vote` is necessary, then each Player can "cast" `1 Vote`.  In the event of a tie (e.g. an even number of Players), choose a reconciliation method that has fair and even odds (e.g. flip a coin, roll a `1dP` and split `10 - 50` and `60 - 100`, etc.), or create a fun and/or competitive event to decide.

> **TIP:** In the event of a tie, consider introducing light-hearted fun at the other Players' expense, such as pitting each side of the `Vote` against each other by some means (e.g. a mini event, a trivia contest, etc.).

### Fractional Remains
Intuitively, imagine all fractional roles as if they were dividing people and you must keep them alive--you can't have half a person (at least, not a person that is still alive...).

Any time an event happens where there are fractional remains, you must ***always remove (truncate) the decimal portion***.  This remains true *even if* the fraction would *round* up (e.g. 0.6).

### Alliance
An `Alliance` can be made with any Player at any time, and if an `Alliance` forms, then each Player continues to operate independently; however, each Player in the `Alliance` can treat the other `Alliance Members'` `🏰 Cities` and `Mines` and **unoccupied Tiles** for movement.

*Any other perks or restrictions are determined by the `Alliance Members` themselves.*

Alliance business is a good situation to introduce `Voting`, if the number of Players warrants it.