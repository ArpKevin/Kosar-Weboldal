
Bevezető
A következő dokumentáció egy egyszerű kosár weboldalt ismertet, HTML-t és Javascript-et használva. Az alkalmazással termékeket vehetünk fel egy listába, megadva a termék nevét, egységárát és darabszámát, s ezt egy gomb lenyomásával megjeleníti a képernyőre, a végösszeggel kiegészítve, amit Javascript segítségével számol ki a program.
 
Felhasználói dokumentáció
Alkalmazás használata
Az alkalmazás egy egyszerű űrlapot tartalmaz, ahol a felhasználók megadhatják a termék nevét, darabszámát és egységárát. A "Hozzáadás" gomb lenyomásával a megadott adatok egy új sorban jelennek meg a lista részben. A lista tartalmazza a termék nevét, egységárát, darabszámát és a végösszeget.
 
A program működtetésének menete:
Adja meg a termék nevét a "Termék neve" mezőben.
Adja meg a darabszámot a "Darabszám" mezőben.
Adja meg az egységárat a "Egységár" mezőben.
Nyomja le a "Hozzáadás" gombot.
A hozzáadott tétel megjelenik a lista részben.
Fejlesztői dokumentáció
HTML
Az alkalmazás a HTML nyelvet alkalmazza. Az HTML felelős az oldal tartalmi felépítéséért, azaz az űrlap és a listaelemek strukturális leírásáért.
JavaScript
A dinamikus funkcionalitásért és az eseményvezérelt működésért a JavaScript nyelvet alkalmazzuk.
Űrlap és Input Mezők
Az alkalmazás a felhasználói interakciókat egy űrlap segítségével valósítja meg. Az űrlap tartalmaz három input mezőt, ahol a felhasználók megadhatják a termék nevét, darabszámát és egységárát.
 
Termék neve (termeknev): Egy szöveges mező, ahol a felhasználók megadhatják a termék nevét.
Darabszám (dbszam): Egy számmező, ahol a felhasználók megadhatják a termék darabszámát.
Egységár (egysegar): Egy számmező, ahol a felhasználók megadhatják a termék egységárát.
Mindhárom mező tartalmaz egy azonosítót, amire később hivatkozunk a scriptünkben.
Hozzáad() Függvény
A JavaScript kódban található Hozzaad() függvény felelős az űrlap adatainak feldolgozásáért és a lista frissítéséért. A függvény először lekéri az input mezőkből a megfelelő adatokat. Ezután létrehoz egy új listaelemet (li), amely tartalmazza a termék nevét, egységárát, darabszámát és a végösszeget, kimeneti formázást (output formatting) alkalmazva. Ezt követően a sor hozzáadódik a listához mint elem.
Alternatív Megoldás
A kódban található kikommentezett kód egy alternatív megoldást jelöl. Ez az alternatív megközelítés egy eseményfigyelőt alkalmaz a gombra a JavaScript addEventListener segítségével. Ez annyi különbséget tesz, hogy a HTML-ben nem kell referenciát rendelnünk a script függvényére, hanem a függvény várja a weboldalon történt eseményt, ami ezesetben a Hozzáadás gomb megnyomása.

Összefoglalás
Az alkalmazás egy egyszerű kosár megvalósítását mutatja be HTML és JavaScript segítségével. A felhasználók könnyen adhatnak hozzá termékeket, és a lista frissül a felhasználói interakciókra. A fejlesztői dokumentáció segítséget nyújt az alkalmazás fejlesztői szempontjainak megértésében és testreszabásában.
