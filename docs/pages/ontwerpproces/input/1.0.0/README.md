

Op deze pagina is de vertaalslag naar een eerste ontwerp te vinden. Dit ontwerp is specifiek gericht op het invoeren van broninformatie.


## Task-analyse
Om deze te maken was de eerste versie van de [Task-analyse](https://app.gitbook.com/@jorik/s/project-blauwdruk/research_methods/task-analyse) nuttig om de stappen in de gebruikersinterface te verzamelen. Stappen waaronder data toevoegen, verwijderen en referenties toevoegen.



## Concept boomstructuur hiërarchie
In dit concept wordt informatie gehangen aan een 'boom'. 

Een boom heeft een stam, de stam heeft takken  ... , de takken hebben kleineren takken ... en de kleinste takken hebben dan de bladeren  ... .

Moeilijk voor je te zien? Denk maar eens aan een stamboom, dat is een heel concreet voorbeeld van een informatieboom. Alleen de informatie van een bron is complexer dan een basis stamboom zou kunnen bevatten.


## Informatie structuur

* Boom / root
  * Bron 1
    * Naam
    * Eigenschap 1
      * Naam
      * Waarde
      * Type / tag / groep
    * Eigenschap 2
      * Naam
      * Waarde
      * Type / tag / groep
  * Bron 2
    * Naam
    * Eigenschap 1
      * Naam
      * Waarde
      * Type / tag / groep
    * Eigenschap 2
      * Naam
      * Waarde
      * Type / tag / groep

Met de content vorm lijsten (in lijsten in lijsten) krijg je al vrij snel een boomstructuur.


## Eerste schetsen

![Geschikte vormen](content/schetsen28.png)

Mijn eerste schetsen van een bepaald ontwerp zijn vaak vormschetsen. De ruimte indeling bepaald hoeveel functionaliteiten je in je applicatie kwijt kan, of de applicatie kan door groeien en meest belangrijk of de hiërarchie correct is.


![Eerste indeling](content/schetsen29.png)

Voor de eerste indeling heb ik het scherm in 2e gedeeld. De linkerkant wordt gebruikt voor de boomstructuur hiërarchie en de rechtekant is waar je details van bronnen kan weergegeven wanneer je ergens extra informatie over wilt hebben. De rechterkant is overigens standaard verborgen, totdat je details wil weergeven.



![Interactie elementen indeling](content/schetsen33.png)

__De volgende iteratie geeft de gebruiker nu de mogelijkheid om zelf de hiërarchie te bepalen. Er zitten nu controls bij:__
* Bronnen naar boven en naar beneden te schuiven.
* Bronnen verwijderen.
* Bronnen te verbergen.
* Details: eigenschap
  * Invulveld naam eigenschap.
  * Invulveld waarde eigenschap.


![Details](content/schetsen30.png)

* Design pattern[Inplace Editor](http://ui-patterns.com/patterns/InplaceEditor)
* Dupliceer eigenschap
* Notitie veld toegevoegd
* Type eigenschap

![Bron categorieën](content/schetsen31.png)

* Categorieën als dropdown of tekst invulveld met suggesties
* Tags in plaats van categorieën


![Ruwe schets van een combinatie van alle punten hierboven](content/schetsen32.png)

## Eerste design

![Eerste design](content/design-1.0.0@4x.png)




