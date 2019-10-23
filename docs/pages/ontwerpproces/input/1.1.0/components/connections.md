

Tijdens het ontwerpen van deze gebruikersinterface om verbanden vast te leggen, liep ik tegen het volgende vraagstuk aan:

> Mag de gebruiker naast verbanden trekken tussen gebeurtenissen, ook verbanden trekken tussen bronnen of documenten?

Om deze te beantwoorden ben ik gaan kijken of dit nuttig is en of het misschien te veel vrijheid biedt.

Voor nu houd ik er rekening mee met het idee dat niet alleen gebeurtenissen kunnen zijn, maar het zou ook een verband kunnen zijn tussen een bron en een gebeurtenis. Dit zorgt even voor wat meer vrijheid binnen het iteratieproces.

__Bijvoorbeeld:__

| Entiteit A | Entiteit B                    |
|------------|-------------------------------|
| Persoon A  | heeft organisatie B opgericht |
| Bron       | Gebeurtenis (+ organisatie)   |

## Variant A

![Verbanden leggen](content/verbanden/schetsen3.png)


__Deze variant bestaat uit:__
* Voorvertoning in de vorm van een __netwerk diagram__.
  * Entiteiten (Cirkels met A, B, C, D)
    * Tooltip (Met muis hover kan je de naam van het entiteit bekijken)
  * Verbanden (Lijnen tussen de cirkels)
    * Tooltip (Met muis hover kan je de beschrijving zien)

* Verbanden (__Invulvelden onder de netwerk diagram__)
  * Startpunt (Entiteit)
  * Richting (Pijl)
  * Eindpunt (Entiteit)
  * Beschrijving

De onderzoeksjournalist heeft de mogelijkheid om steeds een verband tussen 2 entiteiten te trekken. Zie implementatie van het vorige voorbeeld.

* Verbanden
  * Startpunt: __Persoon A__
  * Richting: ->
  * Eindpunt: __organisatie B is opgericht__
  * Beschrijving: __Persoon A heeft organisatie B opgericht om geld mee te verdienen__

* Voorvertoning: 
  * __Persoon A__ = __A__
    * Tooltip 'Persoon A'
  * Verband = lijn tussen __A__ en __B__
    * Tooltip: 'Persoon A heeft organisatie B opgericht om geld mee te verdienen'
  * __organisatie B is opgericht__ = __B__
    * Tooltip 'organisatie B is opgericht'





## Variant B

![Gebruikersinterface met direct manipulation](content/verbanden/schetsen4.png)

De gebruiker kan in deze variant 'direct manipulation'* gebruiken.

\* Direct manipulation: Je kan een object direct manipuleren, zoals bijvoorbeeld het slepen van bestanden binnen Finder (Mac OS) en Explorer (Windows), zodat deze van locatie veranderen binnen de computer.

* Klikken op het entiteit geeft een sub-menu weer. Met de opties:
  * Sluiten sub-menu.
  * Pas entiteit aan. 
  * Verwijder entiteit.
* Klikken op de rand zorgt voor een tweede entiteit, die gekoppeld zit aan de eerst.
* Drag en drop is mogelijk door over het entiteit te hoveren, muisknop in te drukken en te verplaatsen. Het sub-menu opent in dit geval niet.



## Keuze variant
Variant B zou ik persoonlijk zelf heel graag gebruiken om mijn visalisaties te maken, maar er hangen ook heel veel nadelen. Zoals: 

* Overlapping van entiteiten en bijbehorende labels.
* Leercurve en herkenning van 'direct manipulation binnen een netwerk diagram.


Deze nadelen heb ik ondervonden toen ik de software [draw.io](https://about.draw.io/about-us/) ging gebruiken.

De leercurve van 'Variant A' is lager en daarom is deze meer geschikt voor de onderzoeksjournalist.


## Verbanden binnen de tijdlijn

![Verbanden binnen de tijdlijn](content/verbanden/schetsen5.png)

Het lijkt mij een goede toevoeging dat er tijdgebonden verbanden zijn gebruikt, dat deze kunnen terugkomen binnen de tijdlijn vanuit het vorige hoofdstuk.

![Verbanden](content/designs5.png)

Verbanden tussen entiteiten (bronnen) invullen, zodat er een visualisatie uitrolt.

