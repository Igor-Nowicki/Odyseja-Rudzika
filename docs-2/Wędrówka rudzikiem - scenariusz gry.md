# Wędrówka rudzikiem - gra edukacyjna

Gra odtwarza prawdziwą migrację rudzika - jej scenariusz stworzyli czołowi specjaliści w dziedzinie wędrówek drobnych ptaków na świecie. Gracz kieruje jednym (lub niezależnie kilkoma) rudzikami stając przed dylematami i wyborami, przed jakimi naprawdę stoją rudziki w czasie każdej jesiennej wędrówki, a potem wiosennej wędrówki.

Poniżej opisana jest podstawowa najprostsza wersja gry, w drugiej części zaproponowano możliwe udoskonalenia i dodatkowe komplikacje.

## Główne założenia

Gra dzieje się w czasie rzeczywistym, jesienią (1 września - 15 grudnia) rudziki wędrują ku zimowiskom, wiosną (1 lutego - 30 kwietnia) ku lęgowiskom.

Gracz codziennie podejmuje jedną decyzję. Dziennie gra zajmuje od 30 sekund do 4 minut.

Konieczna jest systematyczność: opuszczenie jednego czy dwu dni nie ma większych konsekwencji, ale dłuższy brak decyzji w sprawie swojego rudzika może doprowadzić do jego śmierci, lub znacznie utrudnia dotarcie do zimowiska/lęgowiska.

Są możliwe tylko cztery rodzaje decyzji:

* żeruj intensywnie, 
* żeruj na utrzymanie kondycji, 
* leć, 
* zmień żerowisko.

Jednak decyzje podejmowane są na podstawie dość złożonych przesłanek, które wynikają zarówno z czynników losowych (pogoda danego dnia, żerowisko na którym wylądowałeś), z czynników zmieniających się w czasie (np. data) jak i z poprzednich decyzji (stopień rezerw jakie zgromadził rudzik).

Rozpoczynając grę gracz nadaje imię swojemu rudzikowi i decyduje o kierunku w jakim będzie on wędrował (do Hiszpanii, Włoch albo Grecji). Decyzja o kierunku, może być jeszcze zmieniona przez kilka dni, ale po jakimś czasie taka możliwość jest już zablokowana.

Wszystkie problemy i uwarunkowania napotykane przez gracza oraz decyzje podejmowane w grze (poza nadaniem imienia :-)) są realnymi problemami jakie napotykają małe ptaki w czasie wędrówki. Dołączona instrukcja gry jest jednocześnie popularnonaukowym wykładem dotyczącym wędrówki ptaków.

Gra kończy się kiedy rudzik dotrze na zimowisko/lęgowisko i tam znajdzie sobie niezajęte terytorium (sukces), kiedy upoluje go krogulec (porażka), kiedy jego tłuszcz spadnie poniżej -0.5 (porażka) lub jeśli nie dotrze na zimowisko/lęgowisko na czas (odpowiednio 15 grudnia i 30 kwietnia). Jeśli dotrze na czas, ale nie zdoła już sobie znaleźć terytorium rozgrywka jest remisowa.

## Jak wygląda wędrówka rudzika

Rudzik, jak większość małych ptaków jest nocnym wędrowcą. Wędrówka jest serią nocnych przelotów, które poprzerywane są kilkudniowymi okresami odpoczynku i nabierania sił. Ptaki zużywają tłuszcz jako paliwo do lotu i do codziennego życia. W okresie przed wędrówką i po drodze na miejscach odpoczynku silnie się otłuszczają, żeby mieć paliwo na całonocny, kilkusetkilometrowy lot.

## Interfejs

Gracz ma do dyspozycji dwa widoki ekranu:

* mapę Europy z zaznaczonymi zimowiskami, trasami wędrówki i lęgowiskami a także aktualną pozycja gracza i pozycje innych graczy.
* planszę ze swoim rudzikiem, gdzie może zobaczyć w jakiej jest on kondycji, jakie są warunki żerowania, pogoda itp., a także gdzie podejmuje decyzję co do jego poczynań na następne 24 godziny.

## Zmienne i skutki podejmowanych decyzji

### Otłuszczenie (od 0 (-0.5) do 5)

Zasięg jednonocnej wędrówki zależy właśnie od poziomu tłuszczu wieczorem przed startem. Ale ptak bardzo otłuszczony (4 i 5) jest też łatwiejszy do upolowania przez drapieżniki - szczególnie przez wyspecjalizowane w polowaniu na małe ptaki krogulce. Z drugiej strony ptak w ogóle bez tłuszczu musi zginąć jeśli napotka niesprzyjające warunki. Właściwa strategia polega więc na szybkim otłuszczaniu się i wykonaniu nocnego przelotu. Warto też mieć niewielki zapas tłuszczu na koniec nocy, żeby w razie napotkania niesprzyjających warunków w miejscu wylądowania móc zmienić miejsce na odpoczynek.

Występuje też wyjątkowo ujemne otłuszczenie (-0.25 i -0.5) - jesteś tylko o krok od śmierci, żeby utrzymać się przy życiu zacząłeś już zużywać narządy wewnętrzne. Dalsze schudniecie to śmierć. Ale przytyć nie jest już łatwo - efektywność tycia jest zmniejszona o -0.25 punktu.

Poziom tłuszczu zależy od decyzji jakie podejmował gracz.

### Opady (od 0 do 5) i temperatura (-5 do 30)

Opady znacznie utrudniają zarówno przelot jak i żerowanie (zmniejszają dystans przelotu i efektywność nabierania tłuszczu). Opady o sile 4 i 5 w ogóle uniemożliwiają przelot, a opady o sile 5 również intensywne żerowanie. Najkorzystniejszy jest opad 0 (brak opadu) i 1 (mżawka), które nie przeszkadzają rudzikowi żerować, a mżawka tylko o 5% zmniejsza zasięg lotu.

Temperatura nocą powyżej 25 stopni w ogóle uniemożliwia przelot, a pomiędzy 15 a 25 zmniejsza jego zasięg. Niskie temperatury nie przeszkadzają rudzikowi w przelocie, ale utrudniają żerowanie. Jeśli temperatura jest minusowa rudzik nie może skutecznie zerować, z trudem utrzymuje dotychczasową kondycję. Kombinacja opadu i mrozu powoduje, że rudzik chudnie.

Opad jest zmienną losową, temperatura zmienną losową, ale prawdopodobieństwo wylosowania określonych wartości zależy od aktualnej daty (zgodnie z prawdziwymi zmianami pór roku).

### Wiatr (od 0 do 5); 

Kierunek:
1) w dziób; 
2) w ogon; 
3) w bok

Natężenie:

1) Cisza
2) Słaby wiatr
3) Łagodny wiatr
4) Umiarkowany wiatr
5) Silny wiatr
6) Huragan

Wiatr o mniejszej sile zmienia dystans przelotu - wiatry w ogon znacznie go zwiększają, wiatry w dziób zmniejszają, a boczne są obojętne, lub jeśli są silne zmniejszają zasięg ale mniej znacząco.

Wiatr jest zmienną losową ale z różnymi prawdopodobieństwami poszczególnych rodzajów wiatru w zależności od wybranej trasy.

## Jakość żerowiska (od 0 do 3)

* Bardzo słabe żerowisko (0) powoduje chudnięcie i koniecznie trzeba je zmienić.
* Słabe żerowisko (1) umożliwia utrzymanie dotychczasowej kondycji i może być tylko miejscem przeczekania złej pogody, 
* żerowiska średnie do bardzo dobrego (2 i 3) umożliwiają przybieranie na wadze.

Jakość żerowiska jest zmienną losową.

### Przekroczenie limitu wysokich otłuszczeń

Liczba dni, w których rudzik bez konsekwencji może mieć wysokie otłuszczenie (4 lub 5) jest ograniczona. Po przekroczeniu limitu stopniowo zwiększa się szansa, że rudzik zostanie schwytany przez krogulca.

## Przekroczenie barier

Jeśli rudzik na swojej drodze napotka góry, lub morze które musi przekroczyć - zwiększa to zużycie tłuszczu w czasie przelotu i podwyższa limit tłuszczu umożliwiającego wystartowanie do lotu do 3.

Decyzja:

* żeruj intensywnie - zwiększasz swoje otłuszczenie od o 0.5 do 1 punktu na dobę. W ten sposób przygotowujesz się do lotu.
* żeruj na utrzymanie kondycji - nie zmieniasz swojego otłuszczenia jeśli warunki na to pozwalają, albo zmieniasz go najmniej jak to możliwe. To sposób na przeczekanie złej pogody.
* leć - jeśli masz zapas tłuszczu na poziomie 2 możesz lecieć. Jednocześnie określasz ile tłuszczu chcesz mieć na koniec przelotu. Dystans zależy od ilości tłuszczu przeznaczonej na zużycie, siły i kierunku wiatru oraz ewentualnych opadów. Czasami opłaca się poczekać - może następnej nocy pogoda się poprawi.
* zmień żerowisko - jeśli trafiłeś na złe żerowisko - możesz je zmienić co kosztuje 0.5 punktu tłuszczu.

Jeśli w danej dobie gracz nie podejmie żadnej decyzji (nie odwiedzi strony z grą) rudzik automatycznie wybiera opcję "żeruj na utrzymanie kondycji".

## Możliwości rozwoju gry

1. Można grę rozbudować o okres zimowania i lęgowy. W czasie zimowania toczyłaby się dalsza walka o przetrwanie i o dobrą kondycję na początek wędrówki powrotnej. W okresie lęgowym chodziło by o wychowanie jak największej liczby młodych.
2. Można dodać prognozę pogody na trzy dni co ułatwia podjęcie optymalnej decyzji - czekać na zmianę pogody czy nie.
3. Można by rozbudować panel pogody tak, żeby odpowiadał on faktycznej pogodzie w Europie w danym momencie.
4. Można wprowadzać dodatkowe problemy jakie rudzik napotyka po drodze - takie jak polowania, światło miast itp.
5. Można dać graczowi na początek możliwość wyboru cech rudzika takich jak nap. kształt skrzydła (wędrówkowe zaostrzone, bezpieczne zaokrąglone, neutralne pośrednie).

Dla przykładu skrzydło zaostrzone powoduje zwiększenie dystansu przelotu o 25%, ale zwiększa szansę śmierci ze strony krogulca przy otłuszczeniu 4 jest to minimum 5% a przy otłuszczeniu 5 - minimum 10%

## Dodatkowe wyjaśnienia

1. Wszystkie rudziki startują z polskiego wybrzeża.
2. Zaznaczone są tylko potencjalne zimowiska w Hiszpanii/Maroku, Włoszech/Tunezji i Grecji/Wschodnia Turcja i częściowo pokrywające się trasy przelotu (bez zaznaczania lęgowisk).
3. Trasa nie może być podzielona na określoną liczbę przystanków, bo gra właśnie na tym polega, że decydujesz, czy się otłuszczasz mocno i lecisz w dużych skokach, czy na odwrót, utrzymujesz niskie otłuszczenie.
4. Mnie się wydaje, że gra dla gracza jest super prosta wbrew pozorom. Ma 4 rodzaje decyzji i przed zatwierdzeniem komputer pokazuje mu jaki będzie ich skutek. Jak ktoś chce, to w ogóle może grać bezmyślnie - jak się pojawi opcja lecieć (która jest nieaktywna przy najniższych otłuszczeniach) to wciska leć i tyle. A jak nie ma tej opcji to żeruje. Pogodę i jej wpływ przelicza przecież komputer i tylko poinformuje gracza. To samo dystans.
5. Na głównym ekranie gry był by więc widoczny rudzik a obok niego 4 przyciski decyzji. Nieaktywne są poszarzone. Gracz przyciska przycisk i wtedy pojawia mu się informacja o skutkach. W wypadku przycisku "leć" wcześniej pojawia się jeszcze okienko z pytaniem ile tłuszczu ma mieć po wylądowaniu. W okienku skutku jest na przykład napisane "Rudzik zmieni żerowisko, jest 30% szansy, że nowe będzie lepsze i 10% że będzie gorsze; po wykonaniu ruchu rudzik będzie miał jeszcze 1,75 punktów tłuszczu" albo "Rudzik przeleci 154 km; po wykonaniu ruchu rudzik będzie miał jeszcze 0.75 punktów tłuszczu" albo "Rudzik nie zmieni swojego otłuszczenia" "Rudzik zwiększy otłuszczenie o 0.5 punktu tłuszczu; po wykonaniu ruchu rudzik będzie miał 3,5 punktu tłuszczu" Oprócz tego widoczne były by też dwa przyciski wykonawcze "Zatwierdź decyzję" i "Zmień decyzję". I to wszystko. W początkowym etapie aktywny był by jeszcze przycisk "Zmień trasę" pochłaniający 1 punkt tłuszczu. Po osiągnięciu lęgowiska przekaz był by jeszcze prostszy: "Znalazłeś wolne terytorium Gratulujemy!" lub "To terytorium jest zajęte" i dwa przyciski - "Żeruj", lub "Szukaj wolnego terytorium".
6. Żeby wyrównać trasy różnej długości można wprowadzić dodatkowy przelicznik przebytych km przy różnych trasach. Zresztą jest to uzasadnione ponieważ na trasie Atlantyckiej nie ma gór (poza Pirenejami) a na pozostałych i owszem, bardzo dużo.
7. Na ekranie-mapie może się wyświetlić od 2 do 10 tysięcy graczy, albo i więcej. Gracz widzi siebie jako dużą kropkę, a pozostałych graczy jako chmurę 100 małych świecących punktów (czyli jeden punkt reprezentuje 1% graczy). Jeśli graczy jest 10 tysięcy, to jeden punkt grupuje 100 graczy. Punkty są rozmieszczone wzdłuż niewidzialnej na ekranie linii wyznaczającej trasę w powiedzmy 25 km sektorach. Jeśli w sektorze jest 6% graczy to w nim jest 6 punktów umieszczonych prostopadle do linii trasy - trzy po prawej i 3 po lewej od niej.

## Szczegółowe parametry

### Otłuszczenie

* -0.5 (brak tłuszczu, naruszenie narządów wewnętrznych) - wydłuża dwukrotnie czas przytycia o 0.5 jednostki. Przy żerowisku 0 oznacza śmierć w następnej rundzie, a przy żerowisku 1 wegetację do nadejścia zimy. Uniemożliwia zmianę żerowiska.
* 0 do 1.5 (brak tłuszczu lub niski poziom tłuszczu) - możliwe normalne żerowanie i zmiana żerowiska.
* 2 - 5 (umiarkowany do bardzo wysoki poziom tłuszczu) - możliwe normalne żerowanie i przelot na dystans 50 km za każde zużyte 0.5 punktu tłuszczu. Samo wystartowanie wymaga 0.5 punktu tłuszczu.

Przykład: Jeśli gracz ma tłuszcz 3 i chce zachować 0.5 tłuszczu na moment wylądowania to przeleci 200 km (zużyje 0.5 tłuszczu za każde 50 kilometrów i 0.5 na wystartowanie, czyli łącznie 2.5 punktu). Wartość ta jest modyfikowana przez warunki pogodowe.

tłuszcz 4 - limit 10 dni (łącznie wszystkie dni od rozpoczęcia gry) przekroczenie limitu o:

* 1-2 dni - 5% szansy na schwytanie przez krogulca
* 3-4 dni - 15% szansy na schwytanie przez krogulca
  ponad 5 dni - 30% szansy na schwytanie przez krogulca

tłuszcz 5 - limit 5 dni (łącznie wszystkie dni od rozpoczęcia gry) przekroczenie limitu o:
1-2 dni - 10% szansy na schwytanie przez krogulca
3-4 dni - 25% szansy na schwytanie przez krogulca
ponad 5 dni - 50% szansy na schwytanie przez krogulca

### Opady

| Opad 	| żerowanie                  	| dystans lotu    	|
|------	|----------------------------	|-----------------	|
| 0    	| bez zmian                  	| bez zmian       	|
| 1    	| bez zmian                  	| -5%             	|
| 2    	| -0.25 stopnia otłuszczenia 	| -20%            	|
| 3    	| -0.5 stopnia otłuszczenia  	| -50%            	|
| 4    	| -0.75 stopnia otłuszczenia 	| brak możliwości 	|
| 5    	| brak możliwości            	| brak możliwości 	|

Szansa zaistnienia temperatury w poszczególnych przedziałach zależy od strefy (są 3 strefy)

Szansa zaistnienia temperatury w poszczególnych przedziałach w strefie 1 (Polska, Niemcy, Czechy, Słowacja)

| Opad | wrzesień | październik | listopad i grudzień |
| ---- | -------- | ----------- | ------------------- |
| 0    | 50%      | 30%         | 20%                 |
| 1    | 10%      | 15%         | 20%                 |
| 2    | 15%      | 15%         | 20%                 |
| 3    | 10%      | 15%         | 20%                 |
| 4    | 10%      | 15%         | 15%                 |
| 5    | 5%       | 10%         | 5%                  |

### Temperatura

| Temp.    | żerowanie                 | dystans lotu       |
| -------- | ------------------------- | ------------------ |
| -5 do -1 | -0.5 stopnia otłuszczenia | bez zmian          |
| 0 do 14  | bez zmian                 | bez zmian          |
| 15 do 25 | bez zmian                 | -25%               |
| 26 do 30 | bez zmian                 | przelot niemożliwy |

Szansa zaistnienia opadów o różnej intensywności zależy od strefy (są 3 strefy)

#### Szansa zaistnienia opadów o różnej intensywności w strefie 1 (Polska, Niemcy, Czechy, Słowacja)

| Temp.    | wrzesień | październik | listopad i grudzień |
| -------- | -------- | ----------- | ------------------- |
| -5 do -1 | 5%       | 15%         | 30%                 |
| 0 do 14  | 10%      | 65%         | 60%                 |
| 15 do 25 | 15%      | 20%         | 10%                 |
| 26 do 30 | 10%      | 0%          | 0%                  |

### Wiatr

#### Zmiany dystansu lotu w zależności od wiatru

| Wiatr | w dziób              | w bok                | w ogon               |
| ----- | -------------------- | -------------------- | -------------------- |
| 0     | bez zmian            | bez zmian            | bez zmian            |
| 1     | - 5%                 | bez zmian            | +5%                  |
| 2     | -25%                 | -10%                 | +25%                 |
| 3     | - 50%                | -25%                 | +50%                 |
| 4     | brak możliwości      | -50%                 | +10%                 |
| 5     | brak możliwości lotu | brak możliwości lotu | brak możliwości lotu |

#### Szansa zaistnienia wiatru o określonej sile zależy od miesiąca

| Wiatr | wrzesień | październik | listopad i grudzień |
| ----- | -------- | ----------- | ------------------- |
| 0     | 20%      | 10%         | 10%                 |
| 1     | 30%      | 10%         | 20                  |
| 2     | 20       | 20%         | 25                  |
| 3     | 15       | 25%         | 20                  |
| 4     | 10%      | 20%         | 15                  |
| 5     | 5%       | 15%         | 10%                 |

Szansa zaistnienia wiatru o określonym kierunku zależy od wybranego kierunku migracji (są 3 kierunki).

#### Zestawienia dla kierunku do Hiszpanii

| Wiatr   | szansa |
| ------- | ------ |
| w dziób | 50%    |
| w bok   | 30%    |
| w ogon  | 20%    |

#### Jakość żerowiska

| Żer. | zwiększanie otłuszczenia   |
| ---- | -------------------------- |
| 0    | -0.25 stopnia otłuszczenia |
| 1    | bez zmian                  |
| 2    | +0.5 stopnia otłuszczenia  |
| 3    | +1 stopień otłuszczenia    |

#### Szansa napotkania żerowiska określonej jakości

| Żer. | szansa |
| ---- | ------ |
| 0    | 10%    |
| 1    | 15%    |
| 2    | 50%    |
| 3    | 25%    |

Gra zaczyna się przy poziomie tłuszczu 1 na bardzo dobrym żerowisku (3)

Jeśli gracz zaczyna grę w trakcie migracji to jego rudzik zaczyna na polu w środkowej części stawki.
