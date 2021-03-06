# Space game
[Play game!](https://bbalage.github.io/SpaceGame/index.html)

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

# Hungarian
A j??t??k c??m??t m??g k??s??bb megadjuk.

A j??t??k c??lja, hogy megtanuljunk egy??tt dolgozni egy kisebb j??t??k elk??sz??t??s??ben.
A j??t??knak el??g egyszer??nek kell lennie, hogy ne tartson sok??ig a befejez??se (1 h??nap k??r??lbel??l), de el??g bonyolult 
legyen, hogy ??rdemi csapatmunka tanulhat?? legyen vele.

## Hozz??j??rul??s
Ahhoz, hogy k??dot, funkcionalit??st, k??peket tegy??nk hozz?? a projekthez, a k??vetkez?? l??p??seket hajtsuk v??gre:
1. V??lasszunk egy l??tez?? Issue-t, ??s rendelj??k hozz?? magunkat (hogy m??sok is l??ss??k, hogy dolgozunk rajta).
2. T??lts??k le a master branch legfrissebb verzi??j??t, ??s v??ltsunk ??t r?? (checkout).
3. Csin??ljunk egy ??j branchet az Issue-nak. A branch neve egyezzen meg az Issue nev??vel, csak cser??lj??k a sz??k??z??ket k??t??jelekre. P??ld??ul a Create HP for monster legyen create-hp-for-monster ha ez lehets??ges.
4. Ha k??sz vagy az Issue megold??s??val, akkor t??ltsd fel a branchet, ??s k??sz??ts hozz?? Pull Request-et.
5. Valaki megn??zi majd a Pull Requestet, ??s ellen??rzi a k??dot hib??k, stilisztikai probl??m??k, f??l??sleges k??dr??szletek, stb. ut??n, azt??n vagy merge-eli a branchet a master branchbe, vagy pedig v??ltoztat??sok elv??gz??s??t k??relmezi.
6. Ha v??ltoztat??sokat k??rt a reviewer (a k??dod ellen??rz??je), akkor v??gezd el a v??ltoztat??sokat, k??ldd fel a v??ltoz??sokat, ??s ??rtes??tsd a reviewert, hogy n??zze meg megint a k??dot.

**Megjegyz??s:** Egy branch legyen r??vid fut??s??, legfeljebb 1-2 napig tart?? k??l??n halad??ssal.