# Ontwerpproces

In dit hoofdstuk wordt uitgelegd hoe de ontwerpen van dit product tot stand zijn gekomen. Er worden in totaal 2 hoofdontwerpen beschreven. Het eerste ontwerp `invoergedeelte` gaat over de invoer van onderzoeksdata in database. Het tweede ontwerp gaat over de `visuele weergave` van de onderzoeksdata.


## Het eerste ontwerp: invoergedeelte
Het eerste ontwerp om journalistieke onderzoeksdata in te voeren in een database. Heeft als doel om de informatie te organiseren zodat het niet 1 lap tekst is, maar elke stukje op de juiste plaats is neergezet.

### Probleem en oplossing
Een computer kan niet bepalen wat elk onderdeel van je onderzoek inhoud, zonder daar voldoende meta-informatie bij te krijgen. Dus inleiding, conclusie, samenvatting, gebeurtenis, bron en document referenties zijn allemaal verschillende soorten type informatie die een computer niet voor je kan onderscheiden zonder meta-informatie. Dit probleem is in iedergeval op 2 manieren op te lossen:

1. De informatie bevat meta-informatie. (Bijvoorbeeld met 'tekst patronen' die een computer kan uitlezen: [XML-tags](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction))
2. Met een gebruikersinterface die voor elke type informatie de juiste invulvelden bied. (Een voorbeeld van een invulveld: [input form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))


Oplossing 1 is niet een gebruikersvriendelijke manier van informatie invoeren voor een niet programmeur. Oplossing 2 is veel beter geschikt voor de onderzoeksjournalist. Als je iets op [Google](https://www.google.nl/) opzoekt, maak je namelijk al gebruik van deze vorm van interactie.

### Design challenge
__Vanuit de design challenge gaat dit ontwerp zorgen voor:__

* `Aanvulbaarheid`

Dit product is voor veiligheidsoverwegingen alleen offline beschikbaar voor veiligheids overwegingen en afkadering project. Samenwerken met meerdere computers valt momenteel nog buiten het kader van het project. Dit betekend niet dat je niet gezamenlijk met 1 computer er aan kan werken.

## Het tweede ontwerp: visuele weergave
Het tweede ontwerp gaat over de visuele weergave van de ingevoerd informatie. Het ontwerp dat de onderzoeksjournalist de mogelijkheid bied om de informatie te bekijken, te doorzoeken en ook om te delen met collega's.

### Probleem en oplossing
Via het eerste ontwerp is de ingevoerde informatie nu gestructureerd, maar nog steeds niet doorzoekbaar. Het tweede ontwerp is bedoeld om de gestructureerde informatie op een logische manier weer te geven en doorzoekbaar te maken.


### Design challenge
__Vanuit de design challenge zorgt dit ontwerp voor:__

* `Transparantie`
* `Toegankelijkheid`
* Kan helpen met `reproceerbaarheid`, maar de onderzoeksjournalist moet dit nog steeds zelf doen.

## Waarom 2 ontwerpen?
Het bouwen van een product die alle behoeftes van alle gebruikers vervuld is een lastige opgave. Dit wordt nog lastiger wanneer het product twee verschillende soorten rollen gaat spelen. Namelijk het invoeren van informatie, de informatie weergeven en daarbovenop moet het ook nog eens de informatie doorzoekbaar maken.

Wanneer je deze rollen vanaf het begin van de productontwikkeling gaat bundelen in 1 product wordt het een rommeltje. Te veel interactie-elementen op hetzelfde scherm, moeilijke keuzes maken welke elementen moeten blijven en het is lastig om de beste gebruikersflow te vinden.





![Uitleg van 2 ontwerpflows](content/explanatory.png)


## Focus op het tweede ontwerp: Visuele weergave
Binnen de tijd die er beschikbaar is voor dit afstudeerproject, is het voor mij van belang dat ik keuzes maak welke ontwerp ik het verste uitwerk. De keuze die ik gemaakt heb, is het ontwerp de `visuele weergave van de onderzoeksdata` geworden. De belangrijkste reden achter deze keuze, aannamen: Je kan de frictie / drempel van het `invoergedeelte` zo laag mogelijk maken door slimmen oplossingen te verzinnen, maar als de __meerwaarde__ van de `Visuele weergave` niet een veelvoud van het `invoergedeelte` is, dan is de drempel nogsteeds te hoog om het daadwerkelijk te gaan gebruiken.


## Startdatums ontwerpen

![Startdatums ontwerpen](content/startdatums.png)


