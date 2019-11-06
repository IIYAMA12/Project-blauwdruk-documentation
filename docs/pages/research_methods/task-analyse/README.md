# Taak-analyse


__Datum: 31 mei 2019__

Voor het concept wordt uitgewerkt tot een ontwerp helpt het mij, om eerst een take-analyse te maken, om goed de gebruikersflow te begrijpen. Je ziet dan al vrij snel dat informatie invoeren niet de bovenste laag van je ontwerp is. De bovenste laag bestaat uit het opslaan van de gegevens.


![Taak-analyse v1.0.0](content/task-analyse.png)  





__Taak-analyse v1.0.0:__

* `1.0` Bestand openen
  * `1.1` Ga naar bestandenoverzicht 
  * `1.2` Open een bestand
* `2.0` Opslaan van bestand
  * `2.1` Doe: bestand opslaan
  * `Is bestand nog niet eerder opgeslagen?`
  * `2.1.1` Vul bestandsnaam in
  * `2.1.2` Bevestig opslaan
* `3.0` Voeg een onderdeel toe (bron)
  * `Stappen`3.2`,`3.3`en`3.4`zijn optioneel`
  * `3.1` Doe: voeg onderdeel toe
  * `3.2` Vul onderdeel naam in
  * `3.3` Vul onderdeel type in
  * `3.4` Vul onderdeel beschrijving in
  * `3.5` Bevestig toevoegen
* `4.0` Verwijder onderdeel (bron)
  * `4.1` Doe: verwijder onderdeel
  * `4.2` Bevestig verwijderen onderdeel
* `5.0` Voeg referentie toe aan lijst (referentielijst)
  * `5.1` Doe: voeg referentie toe
  * `5.2` Geef referentie een naam
    * `Doe stap`5.2.1`of`5.2.2 ``
    * `5.2.1` Vul referentie naam in
    * `5.2.2` Doe: Genereer een uniek en random naam
  * `5.3` Vul referentie informatie in
    * `Doe stap`5.3.1`als de waarde niet gelijk staat aan het format.`
    * `5.3.1` Selecteer referentie format
      * APA / MLA / etc.
      * URL
  * `5.4` Doe: Voeg toe 

De taken van v1.0.0 zijn vrij generiek, maar geven wel alvast een aantal basis aanknooppunten voor een eerste concept.

## Meenemen naar concept
* Een bovenste informatie laag toevoegen die alle informatietypes kan bevatten. *Zonder deze laag kan de informatie niet worden opgeslagen.*
* Zorg voor een verrijking door middel van eigenschappen en meta-data. *Het is belangrijk dat informatie gestructureerd en doorzocht kan worden. Meta-data speelt daarbij een belangrijke rol.*
