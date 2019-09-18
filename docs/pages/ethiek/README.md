# Ethiek

## Informatie binnen het blauwdruk

De ethische kant binnen dit project speelt een grote rol voor de informatie die in de blauwdrukken voorkomen. Ik als ontwerper moet er rekening mee houden dat er over nagedacht is dat de gebruiker weet welke informatie er wel en niet ingestopt kan worden. Binnen de tijd die ik heb voor dit project heb kan ik niet overal op focussen.

### Gevoelige data

Mocht het blauwdruk gevoelige data gaan bevatten, dan moet er een meer dan basic encryptie komen voor deze data. Voor dit project gaat dit wellicht te veel tijd kosten. Het project moet wel reëel en haalbaar blijven. Het is daarom belangrijk dat ik ook zelf ga beslissen welke data er `niet` in het project komt. Naast de bronnen van de onderzoeksjournalist, wordt ik ook niet gelukkig als er gevoelige data in komt.

Hieronder aannames:

> Belang bij het niet tonen van gevoelige data in het product:
>
> * Bronnen
> * Onderzoeksjournalisten die het invoert
> * Ontwerper
> * Onderzoeksjournalist die de tool wil gebruiken om het onderzoek uit te leggen voor het publiek/lezer.
>
> Belang bij het tonen van gevoelige data in het product:
>
> * Onderzoeksjournalist die de tool wil gebruiken voorzichzelf of voor een collega die hij of zij kan vertrouwen.
>
> Ligt volledig aan de context:
>
> * Follow the Money
> * Eindredactie
>

## Data omgeving

Het eindproduct is een webapplicatie. 


### Eigenschappen
* De data is opgeslagen in localStorage.
`localStorage` is een soort database om data op te slaan binnen een bepaald website domein. Deze data is lokaal opgeslagen, dat betekend dat de data op de computer wordt opgeslagen. 
[localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

De keuze om localStorage te gebruiken heeft als voordeel dat de data niet verzonden hoeft te worden over het internet.


* De webapplicatie is draait op een geinstalleerde service worker en dat zorgt er voor dat de website ook offline beschikbaar is.
Het gebruik van een `service worker` heeft geen directe invloeden op de veiligheid van de data, maar verminderd de aanvragen van bestanden via het internet. Dit verminderd de kans op het downloaden van bestanden uit een overgenomen/gekaapte website binnen een specifiek website-domein. Je hebt dus meer controle over welke bestanden wel of niet gedownload worden.
[Service worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)

Kortom kan je offline werken als er geen of onbeveiligde wifi is.

## Gemakkelijk updatebaar

Websites vanaf de zijn altijd up-to-date. Je bezoek bijvoorbeeld je favoriete webwinkel en elke week dat je deze website bezoekt staan er weer nieuwe aanbiedingen op.

### Ethische voordelen updates
* Problemen verhelpen die tot ethische gevolgen leiden.


### Ethische nadelen updates
* Problemen veroorzaken die tot ethische gevolgen leiden.




