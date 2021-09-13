# Space game

The title of this game will be set later.

The point of writing this game is to learn how to create a game as a team using Github as a collaboration tool.
The game should be simple enough to be finished within a month, but complicated enough to allow learning.

## Contribution

In order to contribute, the following steps should be taken:

1. Choose an existing issue, and assign yourself to it (so others can know that you are working on it).
2. Download the latest version of the master branch and *checkout* it.
3. Create a new branch for the issue. The name of the branch should match the issue's name, but spaces replaced with dashes. For example, the issue with the name *Create HP for monster* should be *create-hp-for-monster* if possible.
4. Once you solved the issue, upload the branch and create a pull request for it.
5. Someone checks your contribution for errors, misspellings, stylistic problems, redundant codes, etc., then either merges your branch, or requests changes to it.
6. If changes were requested, you should make those changes, then notify the reviewer.

**Notes:**
A branch should be short-running, like within a day or two, it should be ready to merge.

## Technology
We use HTML5 canvas element for rendering.
The game logic is written in Javascript.
Recommended editor is WebStorm (JetBrains), which could be activated using the iit email address.

## Git help
Some helping notes for using git.

I personally read the first few chapters of [this book](https://git-scm.com/book/en/v2).
However, I wrote some shorter manuals below. The most useful commands are:
- `git clone https://github.com/bbalage/SpaceGame.git` This downloads the repository for your local computer.
- `git log` Shows the history of the current branch. Press *q* to quit from the history.
- `git status` Show which files are in the staging area, which have unstaged changes and which are not yet added to version control.
- `git add <filename>` Add file or files to the staging area (you can use regular expressions, like `git add *`)
- `git commit` Commits all the changes in the staging area. First, it opens up an editor to write a commit message. (commit message should be short and should describe what is in the commit)
- `git checkout` Move the HEAD to another branch or commit. Effectively go to another version of the code. You should have all changes committed to use this (or see `git stash`)
- `git checkout -b <new branch's name>` Create a branch in place and move the head to it.
- `git push origin` Send your version of the code to the remote repository (github). Use `git push origin -u branch-name` if your branch wasn't pushed before.
- `git pull` Download the latest version of the remote repository and fast-forward your current branch to its newest version if possible.

Setup is possibly needed before you can use git:
1. `git config user.name "Happy Person"`
2. `git config user.email happy@gmail.com`
3. `git config core.editor notepad` (or nano, or any editor you have)

A possible flow of work (when things are the simplest):
1. `git pull`
2. `git checkout -b example-branch`
3. Work on files.
4. `git add *`
5. `git commit`
6. `git push origin -u example-branch`
7. Create pull request online.
8. If your changes are accepted: `git checkout master; git pull`. Otherwise, repeat from 3.

## Game
[Play game!](index.html)

# Hungarian
A játék címét még később megadjuk.

A játék célja, hogy megtanuljunk együtt dolgozni egy kisebb játék elkészítésében.
A játéknak elég egyszerűnek kell lennie, hogy ne tartson sokáig a befejezése (1 hónap körülbelül), de elég bonyolult 
legyen, hogy érdemi csapatmunka tanulható legyen vele.

## Hozzájárulás
Ahhoz, hogy kódot, funkcionalitást, képeket tegyünk hozzá a projekthez, a következő lépéseket hajtsuk végre:
1. Válasszunk egy létező Issue-t, és rendeljük hozzá magunkat (hogy mások is lássák, hogy dolgozunk rajta).
2. Töltsük le a master branch legfrissebb verzióját, és váltsunk át rá (checkout).
3. Csináljunk egy új branchet az Issue-nak. A branch neve egyezzen meg az Issue nevével, csak cseréljük a szóközöket kötőjelekre. Például a Create HP for monster legyen create-hp-for-monster ha ez lehetséges.
4. Ha kész vagy az Issue megoldásával, akkor töltsd fel a branchet, és készíts hozzá Pull Request-et.
5. Valaki megnézi majd a Pull Requestet, és ellenőrzi a kódot hibák, stilisztikai problémák, fölösleges kódrészletek, stb. után, aztán vagy merge-eli a branchet a master branchbe, vagy pedig változtatások elvégzését kérelmezi.
6. Ha változtatásokat kért a reviewer (a kódod ellenőrzője), akkor végezd el a változtatásokat, küldd fel a változásokat, és értesítsd a reviewert, hogy nézze meg megint a kódot.

**Megjegyzés:** Egy branch legyen rövid futású, legfeljebb 1-2 napig tartó külön haladással.