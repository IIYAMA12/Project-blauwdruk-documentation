
Welke informatie heb je nodig om naar een document te refereren, het document niet op te laten slaan in de applicatie, maar wel het mogelijk maken om er bij te kunnen? Om dit mogelijk te maken heb ik deze eigenschappenlijst samengesteld:

* __Naam__
De naam van het document. 
<br>
* __Link(url)__
Toegang tot je document die je in de cloud hebt opgeslagen. (Google: Docs, Spreadsheets, Drive)
<br> <br>
* __Screenshots__
Screenshots kunnen gebruikt worden voor herkenning van het document of als bewijsmateriaal.
<br>
* __Beschrijving__
* __Documentstatus__
Aangegeven of een document gelekt is. (Mag dus niet binnen een publicatie gebruikt worden)
<br>
* __Type__ (Document type: pdf, excel, psd)
* __Bron/contactpersoon__
De persoon die het document heeft vrijgegeven.
<br>
* __Organisatie__
De organisatie die het document heeft vrijgegeven.
<br>
* __(Publicatiedatum of/en toevoegingsdatum)__
Maakt het mogelijk om documenten te sorteren op tijd.

<!-- ![](content/documenten/schetsen13.png) -->

![Hier kunnen referenties naar documenten worden ingevoerd](content/documenten/schetsen24.png)

De document-referenties zijn voorzien van een [details + summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) element, om de details te verbergen van het document.

__Technische specificatie:__

* details element: Informatie verbergen wanneer het 'details element' gesloten is.
* summary element: Deze informatie wordt weergegeven wanneer het element gesloten is.

```HTML
<details>
  <summary>Altijd zichtbaar</summary>
  Verborgen content
</details>
```

![Gebruikersinterface om een document status op te gegeven](content/documenten/schetsen25.png)





![](content/documenten/schetsen26.png)

![Documenten](content/designs.png)

Een digitale schets.


### Verwijderde documenten
Mocht een organisatie of een persoon een document verwijderen, dan heb je als back-up nog een screenshot ervan.

### Document gebruik
De `documentstatus` is relevant voor de veiligheid van de bronnen die de informatie hebben weggegeven.