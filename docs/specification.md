# Specification
English...

# Hungarian
A játék egy felülnézetes, kettő dimenziós űrhajós ügyességi játék.
Egy játékos esetén a játékos egy űrhajót irányít, és különböző fenyegető objektumokat kerül ki, vagy semmisít meg.

## Irányítás
Az űrhajó irányítása a következő billentyűkiosztással valósuljon meg:
- WASD: Az űrhajó forgatása, nézési irányának beállítása
- Space: Az űrhajó hajtóművének bekapcsolása. Az űrhajó ekkor gyorsulni kezd a nézési irányába. A nyert sebesség a hajtómű kikapcsolása után is megmarad.
- Shift + Space: Az űrhajó hajtóművének magas fokozaton (bursting) indítása. Ilyenkor masszívan nagyobb a gyorsulás, mint az egyszerű gyorsulásnál.
- F: Tüzelés az elsődleges fegyverrel az űrhajó nézési irányába.
- Shift + F: Másodlagos fegyver vagy képesség használata.
- Tab: Másodlagos fegyver vagy képesség váltása.

Ugyanezeket a képességeket két űrhajós játékos esetén a következő billentyűkre lehet kiosztani:
- Arrows: Az űrhajó forgatása.
- Enter: Hajtómű.
- Left Shift + Enter: Hajtómű magas fokozaton.
- Backspace: Tüzelés.
- Left Shift + Backspace: Másodlagos fegyver / képesség.
- Left Control: Másodlagos fegyver / képesség váltása.

Harmadik játékos beadása lehetséges különböző játékmódokhoz az egér segítségével.
Ilyenkor asszimetrikus játékról beszélhetünk, ahol a harmadik játékos egészen más szerepben van, mint a másik kettő.
Ez a szerep lehet az, hogy aszteroidákat, vagy ellenséges űrhajókat küld be.
(Ezt majd később kéne pontosítani.)

**Gyorségetés (bursting) megjegyzés:** Legelsősorban ahhoz szükséges, hogy nagy gravitációjú objektumoktól el tudjon
a hajó távolodni (például nap, bolygó, fekete lyuk).

## Űrhajó
Ez a játékos által irányítható űrhajó leírása.

Az űrhajót egy sérülési és egy energiaszint jellemzi.

A sérülési szint egyenlő a HP-val, tehát mennyi lövést, ütközést, stb. bír még ki a hajó.
A sérülések kijavítása lehetséges például szerelőkészletek felszedésével.

Az energiaszint az igénybe vehető energia mértéke. Az energia az alapesetben magától töltődik idővel.
Ennek realisztikusabb verziója lenne, ha gázfelhőn való áthaladással, vagy csillagok megközelítésével kéne tölteni
(ezt majd esetlegesen implementáljuk).

Az energiát igénybe vevő eszközök:
- Pajzs (később el kell dönteni, hogy a pajzs pontosan hogyan működjön, vagy legyen-e)
- Gyorségetés (bursting) esetén a hajtómű.
- Bizonyos másodlagos fegyverek.

## Játékmenet
Többféle játékmód lehetséges, amikből a Main menüben lehet választani.
### Túlélő mód
Ez az alap játékmód.
Egy loopolt pályán (ha folyamatosan csak jobbra mész, újra és újra visszatérsz ugyanoda) különböző ellenfelek és
veszélyforrások jelennek meg. Főleg ezeknek az elpusztításával lehet pontokat szerezni. A játék folyamatosan nehezedik.

Pontot szerezni lehet például:
- Aszteroidák, ellenséges űrhajók és élőlények elpusztítával.
- Bolygók és egyéb nagy méretű objektumok megközelítésével (közel ütközési pályák véghezvitelével).
- Magas sebesség elérésével és fenntartásával.

Hosszas sérülés nélküli idővel szorzókat kaphatunk.

## Ellenfelek
Az ellenfelek fajtáit szinte a végtelenségig lehetne bővíteni.
Néhány alap a következő:
- Aszteroida: Elhanyagolható tömegvonzású, csak ütközéskor veszélyes.
- Ágyú: Buta ellenfél, amely igyekszik elkerülni az aszteroidákat, és közben lövéseket ad le az űrhajóra.
- Álcázott ágyú: Ágyú, viszont pusztán a háttérben eltűnő csillagok alapján látható.
- Ellenséges űrhajó: Ugyanazt tudja, mint a játékos űrhajója, viszont csak egy (vagy nulla) különleges támadása van.
- Álcázott ellenséges űrhajó: Lásd Ellenséges űrhajó és Álcázott ágyú.
- Akna: Nagy méretű robbanást okoz, ha a játékos a közelségével aktiválja.
- Követő rakéta: Rakéta, amelyet akár az űrhajók is kilőhetnek, és az üzemanyaguk elfogyásáig tartanak a támadott űrhajó felé.
- Romboló: Nagy méretű ellenséges űrhajó több ágyúval, erős pajzzsal és potenciális Követő rakétákkal.