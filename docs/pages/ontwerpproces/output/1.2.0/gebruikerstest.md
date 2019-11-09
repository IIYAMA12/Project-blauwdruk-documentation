
## Doel
Valideren of dit het product volledig bruikbaar is voor de onderzoeksjournalist en bevindingen verzamelen voor een visie van het ontwerp.

## Testplan

### Voorbereiding
1. Zet het prototype "Visuele weergave output_v1_2" klaar
2. Voeg dummy data toe, deze bestaat uit:
  * data dat 'ergens' op gebaseerd is. (Dit moet de indruk geven dat het valide.)
  * data dat op niets gebaseerd is. (Dit moet de indruk geven dat het niet valide.)
  * De onderzoeker vanuit de dummy data is Mara.
  * Misstanden in het onderzoek:
    * Er is geld verdwenen en gebruikt voor pizza's
    * Werknemers zijn ontslagen en een zorgproduct is geannuleerd omdat er geen geld is
    * Investeerders zijn niet geïnformeerd door het bestuur


### Design challenge onderdelen

- Toegankelijk
  * Leren van het onderzoek > Wat heb je geleerd van dit onderzoek?
  * Begrijpen > Begrijp je de context van het verhaal beter door de detailinformatie te bekijken?

- Transparant
  * Werkwijze > Is het voor jou duidelijk hoe de onderzoeksjournalist te werk is gegaan?
  * Bestaansrecht > Is het duidelijk waarom bepaalde informatie en eigenschappen daarvan op deze pagina staan?

- Reproduceerbaar
  * Onderzoeksvragen opnieuw stellen in een vergelijkbare context > Zou deze informatie jou helpen om onderzoeksvragen voor een andere soort gelijke casus te stellen?


<!-- 
- Aanvulbaar
  * Het project opnieuw openen > Je hebt een onderzoek gedaan en je komt nu terug. Hoe ga je deze weer terugvinden?
  * Aanpassen > Je moet wat aanpassen.
  * Toevoegen > Gebeurtenis toevoegen aan de lijst met gebeurtenissen.

- Ethische kant van de informatie
  * Exporteren definiëren > Je wil het onderzoek delen in een doorzoekbaar format, maar het is belangrijk dat je bepaalde bronnen niet meestuurt. -->



### Tijdens de test
* Laat de participant door het prototype / voorbeeld onderzoek heen te bladeren. (En leg uit dat het onderzoek dummy data bevat)
* Verzamel gegevens over hoe de participant met dit format kan vaststellen of het onderzoek goed onderbouwd is.
* Stel de volgende vragen:
  * Is het duidelijk wat de misstand in dit onderzoek is?
  * Welke fouten heeft Mara (dummy) gemaakt?
  * Is het duidelijk met welke middelen Mara (dummy) haar hypothese mee probeert te beantwoorden?
  * Is het duidelijk waar de informatie op gebaseerd is?
  * Is het voor jou duidelijk hoe de journalist te werk is gegaan?
  * Begrijp je het onderzoek beter door de detailinformatie (van bijvoorbeeld bronnen)?
  * Zou de informatie in dit onderzoek jou kunnen helpen om voor een zelfde soort casus onderzoeksvragen te bedenken?
    * Bijvoorbeeld: Heeft het bestuur de investeerders geïnformeerd over het faillissement?

### Afsluiten
* Stel de volgende vragen:
  * Wat heeft jou het meeste en minst geholpen om te kunnen vaststellen of dit onderzoek onderbouwd is?
  * Wat van dit product jij graag terug willen zien in jouw onderzoeksproces?
  * Mocht je al een visie hebben voor een product zoals dit, hoe zou jij dit product graag voor je zien?
  * Wat vind je van deze indeling?
* Bedankt de participant voor zijn tijd.

















<!--
  Bewijs:

Prototype 1
  - Toegankelijk
    * Leren van het onderzoek > Is dit leerzaam
    * Begrijpen > Begrijp je de context beter?

  - Transparant
    * Duidelijk welke informatie bij elkaar horen > Is het duidelijk welke informatie bij elkaar hoort?
    * Bestaansrecht > Is het duidelijk waarom deze informatie bestaat en toegevoegd is?

  - Reproduceerbaar
    * Onderzoeksvragen opnieuw stellen > Helpt dit jouw om onderzoeksvragen opnieuw te stellen?

Prototype 2
  - Aanvulbaar
    * Het project opnieuw openen > Je hebt een onderzoek gedaan en je komt nu terug. Hoe ga je deze weer terugvinden?
    * Aanpassen > Je moet wat aanpassen.
    * Toevoegen > Gebeurtenis toevoegen aan de lijst met gebeurtenissen.

  - Ethische kant van de informatie
    * Exporteren definiëren > Je wil het onderzoek delen in een doorzoekbaar format, maar het is belangrijk dat je bepaalde bronnen niet meestuurt.







  - Toegankelijk
  Het product moet het journalistieke onderzoek kunnen uitleggen en doorzoekbaar maken.

  Maar waarom zou je het onderzoek willen uitleggen?
  
  1. Zo dat de onderzoekjournalist er van kan leren. `En waarom wil deze persoon er van leren?`
    * Vanuit je eigen interesse.
    * Vanuit zelfreflectie.
    * Om inspiratie op te doen en beter te worden in het uitvoeren van het journalistieke onderzoek.

  Waarom doorzoekbaar?
  * Doorzoekbaarheid geeft de mogelijkheid om sneller bij de detailinformatie te komen. Dit bespaard tijd en helpt om de context beter te begrijpen.
    * Waarom is detailinformatie nodig? Om de context beter te begrijpen.
    * De gebruiker kan tijdbesparen door om bij detail informatie te komen. 
    

    * Verborgen informatie ???
    * Gemiste details ???
    * Patronen ???
    * Om de efficiëntie van de leesbaarheid te verbeteren.
    * Om een overzicht te houden welke onderdelen bij elkaar houden.
    * Om informatie terug te vinden.

    

  De lezer in geïnteresseerd in hoe het

  - Transparant
    Het product moet er voor zorgen dat de juiste informatie bij elkaar komt te staan en dat de informatie compleet wordt.

 -->




## Gebruikerstest data

Dit is de data dat in het prototype draait.

{%- language name="JavaScript", type="js" -%}
const dataBaseRaw = [
  {
    key: "sources",
    elementId: "sources-container",
    items: [
      [
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-345643"
            },
            {
              group: "research-questions",
              name: "connection-34yfhgfsdu802tfwd",
            }
          ]
        },
        {key: "id", value: "0047268887"},
        {key:"name", value: "Jan van Doen"},
        {key:"firstname", value: "Jan"},
        {key:"email", value: "jan@gmail.com"},
        {key:"function", value: "Voorzitter van bestuur"},
        {key:"bedrijf", value: "'Zorggeld-eters'"},
        {key:"phonenumber", value: "06 201 244 264"},
        {key: "ftm-netwerk-database", value: "www.ftm/tag/jan-van-doen"},
      ],
      [
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-345643"
            }
          ]
        },
        {key: "id", value: "4uaycsihdk`y"},
        {key:"name", value: "Zachary Brinks"},
        {key:"firstname", value: "Zachary"},
        {key:"email", value: "ZacharyBrinks@jourrapide.com"},
        {key:"werkgever", value: "'Zorggeld-eters'"},
        {key:"phonenumber", value: "06-23104639"},
        {key:"function", value:"Schoonmaker"},
        {key: "ftm-netwerk-database", value: "www.ftm/tag/zachary-brinks"},
      ],
      [
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-343443"
            }
          ]
        },
        {key: "id", value: "74358fhks54e8I`y"},
        {key:"name", value: "Nard Brabander"},
        {key:"firstname", value: "Nard"},
        {key:"email", value: "NardBrabander@rhyta.com"},
        {key:"phonenumber", value: "06-25895271"},
        {key:"function", value:"Toezichthouder van het bedrijf 'Zorggeld-eters'"},
        {key:"ftm-netwerk-database", value: "www.ftm/tag/nard-brabander"},
      ],
      
      [
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-325fsd345643"
            }
          ]
        },
        {key: "id", value: "d=t8y44rd8sxurfvb"},
        {key:"name", value: "Tom Waterland"},
        {key:"firstname", value: "Tom"},
        {key:"email", value: "tomwaterland.com"},
        {key:"rol", value:"Investeerder"},
        {key:"ftm-netwerk-database", value: "www.ftm/tag/nard-brabander"},
      ],


      [
        {key: "id", value: "85sgdiryfh"},
        {key:"name", value: "Pernelle van Essen"},
        {key:"firstname", value: "Pernelle"},
        {key:"email", value: "pernelle@gmail.com"},
        {key:"phonenumber", value: "06 201 464 244"},
        {key: "ftm-netwerk-database", value: "www.ftm/tag/pernelle-van-essen"},
      ],
      [
        {key:"connections-with", value: 
        [
          {
            group: "events",
            name: "event-345643"
          },
          {
            group: "events",
            name: "event-343443"
          },
          {
            group: "research-questions",
            name: "connection-64DG%^@*&YDHDH",
          }
        ]
      },
        {key: "id", value: "00437635887"},
        {key:"name", value: "Jaap van Dijk"},
        {key:"firstname", value: "Jaap"},
        {key:"email", value: "jaap@gmail.com"},
        {key:"phonenumber", value: "06 251 264 264"},
        {key:"bedrijf", value: "'Zorggeld-eters'"},
        {key:"function", value:"Bestuurslid"},
        {key: "ftm-netwerk-database", value: "www.ftm/tag/jaap-van-dijk"},
      ]
    ],
  },
  {
    key: "documents",
    elementId: "document-container",
    items: [
      [
        {key:"name", value: "Jaarverslag zorg 20-06-2018"},
        {key:"description", value: "Het Jaarverslag van 'Zorggeld-eters' uit 2018. Dit jaarverslag is onderzocht om te controleren waar het geld naar toe is gegaan voor en tijdens het faillissement."},
        {key:"reference", value: "Aya, H (2016, Juni 20). Jaarverslag zorg 20-06-2018. Opgevraagd op 21-07-2018 van www.jaarverslag-zorg.nl"},
        {key:"document-status", value: "Openbaar"},
        {key:"validation-status", value: "(geen)"},
        {key:"date-of-issue", value: "20-06-2018"},
        {key:"publisher", value: "'Zorggeld-eters'"},
        {key:"screenshots", value: [
          "jaarverslag-2018/jaarverslag-2018.png",
          "jaarverslag-2018/jaarverslag-2018_2.png",
          "jaarverslag-2018/jaarverslag-2018_3.png"
        ]},
        {key:"file-extension", value: "PDF"},
        {key:"link", value: "<a target='_bank' href='assets/documents/jaarverslag-2018/jaarverslag-2018.pdf'>www.jaarverslag-zorg.nl</a>"},
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-345643"
            }
          ]
        }
      ],
      [
        {key:"name", value: "Jaarverslag zorg 20-06-2019"},
        {key:"description", value: "Het Jaarverslag van 'Zorggeld-eters' uit 2019. Dit jaarverslag is onderzocht om te controleren of het annuleren van het zorgproduct echt nodig is geweest."},
        {key:"reference", value: "Aya, H (2016, Juni 20). Jaarverslag zorg 20-06-2019. Opgevraagd op 21-07-2017 van www.jaarverslag-zorg.nl"},
        {key:"document-status", value: "Openbaar"},
        {key:"validation-status", value: "(geen)"},
        {key:"date-of-issue", value: "20-06-2019"},
        {key:"publisher", value: "'Zorggeld-eters'"},
        {key:"screenshots", value: [
          "jaarverslag-2019/jaarverslag-2019.png",
          "jaarverslag-2019/jaarverslag-2019_2.png",
          "jaarverslag-2019/jaarverslag-2019_3.png"
        ]},
        {key:"file-extension", value: "PDF"},
        {key:"link", value: "<a target='_bank' href='assets/documents/jaarverslag-2019/jaarverslag-2019.pdf'>www.jaarverslag-zorg.nl</a>"},
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-325fsd345643"
            }
          ]
        }
      ],
      [
        {key:"name", value: "Personeelslijst"},
        {key:"description", value: "De lijst met alle medewerkers van het bedrijf 'Zorggeld-eters'. Deze is handig voor het benaderen van deze medewerkers."},
        {key:"reference", value: "(geen)"},
        {key:"document-status", value: "Gelekt"},
        {key:"validation-status", value: "(geen)"},
        {key:"date-of-issue", value: "20-06-2019"},
        {key:"publisher", value: "Onbekend"},
        {key:"file-extension", value: "XLSX"},
        {key:"link", value: "<a target='_bank' href='https://docs.google.com/document/d/1gFe5pAAbB3_YWJLqlF321AnWuOF4dwa6WO1TLMu-ELk/edit?usp=sharing'>https://docs.google.com/document/d/1gFe5pAAbB3_YWJLqlF321AnWuOF4dwa6WO1TLMu-ELk/edit?usp=sharing</a>"}, 
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-343443"
            }
          ]
        }
      ],
      [
        {key:"name", value: "Personeelslijst 2.0"},
        {key:"description", value: "Versie 2.0. De lijst met alle medewerkers van het bedrijf 'Zorggeld-eters'."},
        {key:"reference", value: "(geen)"},
        {key:"document-status", value: "Gelekt"},
        {key:"validation-status", value: "(geen)"},
        {key:"date-of-issue", value: "24-06-2019"},
        {key:"publisher", value: "Onbekend"},
        {key:"file-extension", value: "XLSX"},
        {key:"link", value: "<a target='_bank' href='https://docs.google.com/document/d/1gFe5pAAbB3_YWJLqlF321AnWuOF4dwa6WO1TLMu-ELk/edit?usp=sharing'>https://docs.google.com/document/d/1gFe5pAAbB3_YWJLqlF321AnWuOF4dwa6WO1TLMu-ELk/edit?usp=sharing</a>"}, 
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-325fsd345643"
            }
          ]
        }
      ],
      [
        {key:"name", value: "Interview met Jan van Doen"},
        {key:"description", value: "Een interview met Jan van Doen. Jan van Doen heeft als functie 'voorzitter van bestuur' bij het bedrijf 'Zorggeld-eters' en is gevraagd voor een interview omdat er een faillissement is geweest zonder duidelijke aanleiding."},
        {key:"reference", value: "(geen)"},
        {key:"date-of-issue", value: "27-06-2019"},
        {key:"file-extension", value: "DOC"},
        {key:"link", value: "<a target='_bank' href='https://docs.google.com/document/d/1gFe5pAAbB3_YWJLqlF321AnWuOF4dwa6WO1TLMu-ELk/edit?usp=sharing'>https://docs.google.com/document/d/1gFe5pAAbB3_YWJLqlF321AnWuOF4dwa6WO1TLMu-ELk/edit?usp=sharing</a>"},
        {key:"connections-with", value: 
          [
            {
              group: "research-questions",
              name: "connection-34yfhgfsdu802tfwd",
            }
          ]
        } 
      ]
    ]
  },
  {
    key: "events",
    elementId: "event-list",
    items: [
      [
        {
          key:"name",
          value: "Faillissement BV 'Zorggeld-eters'"
        },
        {
          key:"connection-id",
          value: "5438edhxlir7c64%S#54ruS"
        },
        {
          key:"description",
          value: "Het faillissement aanvraag van BV 'Zorggeld-eters' is nu officieel ingediend door Jan van Doen. Zachary Brinks (werknemer) is hier niet van op de hoogte gebracht."
        },
        {
          key: "date",
          value: new Date(2018, 1, 1)
        },
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-345643"
            },
            {
              group: "connections",
              name: "connection-34y2tfwd"
            }
          ]
        },
      ],
      [
        {
          key:"name",
          value: "Het opgegeten geld"
        },
        {
          key:"connection-id",
          value: "hxlir7c64fdhigshid%S#54ruS"
        },
        {
          key:"description",
          value: "Zachary Brinks heeft het geld teruggevonden in een pizza."
        },
        {
          key: "date",
          value: new Date(2018, 6, 1)
        },
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-345643"
            },
            {
              group: "connections",
              name: "connection-34y2tfwd"
            }
          ]
        },
      ],
      [
        {
          key:"name",
          value: "Ontslag medewerkers"
        },
        {
          key:"connection-id",
          value: "ghfhf485%fdhj#54ruS"
        },
        {
          key:"description",
          value: "Het grootste gedeelte van de medewerkers zijn ontslagen afgezien van een aantal individuen die de administrator nog verder moeten afhandelen."
        },
        {
          key: "date",
          value: new Date(2018, 4, 20)
        },
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-343443"
            },
            {
              group: "connections",
              name: "connection-34y2tfwd"
            }
          ]
        },
      ],
      [
        {
          key:"name",
          value: "Annulering zorgproduct"
        },
        {
          key:"connection-id",
          value: "35gfhfhf485%fdhuhi3utgf#54ruS"
        },
        {
          key:"description",
          value: "De investeerders van 'Zorggeld-eters' zijn verbijsterd over de annulering van de productlancering. Het bedrijf 'Zorggeld-eters' heeft namelijk de investeerders nog niet geinformeerd over het faillissement. Tom Waterland geeft aan dat zijn geïnvesteerde geld verdwenen is."
        },
        {
          key: "date",
          value: new Date(2019, 1, 13)
        },
        {key:"connections-with", value: 
          [
            {
              group: "events",
              name: "event-325fsd345643"
            },
            {
              group: "connections",
              name: "connection-34y2tfwd"
            }
          ]
        },
      ]
    ]
  },
  {
    key: "connections",
    elementId: "connections-graph-container",
    items: [
      [
        {key:"connections-with", value:
          [
            
            {
              group: "events",
              name: "event-345643"
            },
            
            {
              group: "connections",
              name: "connection-34y2tfwd",
              relations: [
                {
                  name: "Gevolgen faillissement",
                  description: "Het geld was te lekker en dat zorgde er voor dat er niet genoeg geld overbleef om de medewerkers te betalen.",
                  a: "5438edhxlir7c64%S#54ruS",
                  b: "ghfhf485%fdhj#54ruS",
                },
                {
                  name: "Niet genoeg personeel",
                  description: "Na het ontslaan van een groot deel van de medewerkers, kon de productie voor een nieuw zorgproduct niet doorgaan.",
                  a: "ghfhf485%fdhj#54ruS",
                  b: "35gfhfhf485%fdhuhi3utgf#54ruS"
                },
                {
                  name: "Eindbestemming geld waarschijnlijk terecht",
                  description: "Het geld is waarschijnlijk besteed aan pizza's, dat verteld Nard Brabander in een verklaring.",
                  a: "ghfhf485%fdhj#54ruS",
                  b: "hxlir7c64fdhigshid%S#54ruS"
                }
              ]
            }
          ]
        },
      ]
    ]
  },
  {
    key: "research-questions",
    elementId: "research-question-list",
    items: [
      [
        {
          key:"question", value: "Waarom is de omzet van 'Zorggeld-eters' vele malen hoger dan de gemiddelde zorgleveraar?"
        },
        {
          key:"answers", value: 
          [
            {
              value: 'Volgens Jan van Doen: "We werken veel efficiënter dan andere zorgleveranciers en besparen voornamelijk op bedrijfsuitjes. Onze omzet van 40% is echt niet overdreven."',
              tags: [
                "interview"
              ]
            }
          ]
        },
        {
          key:"motive", value: "De omzet van 'Zorggeld-eters' is rekenkundig onmogelijk te behalen met het aantal in dienst genomen personeel."
        },
        {
          key:"goal", value: "Achterhalen of bedrijf 'Zorggeld-eters' geen fraude pleegt."
        },
        {key:"connections-with", value: 
          [
            {
              group: "research-questions",
              name: "connection-34yfhgfsdu802tfwd",
            }
          ]
        },
      ],
      [
        {
          key:"question", value: "Waarom krijgt het bedrijf 'Zorggeld-eters' nog subsidie vanuit de overheid terwijl het onduidelijk is waar het geld aan besteed wordt?"
        },
        {
          key:"answers", value: 
          [
            {
              value: "Jaap van Dijk: \"Ik heb nooit gezegd dat wij subsidie krijgen\"",
              tags: [
                "interview",
                "ontkenning"
              ]
            },
          ]
        },
        {key:"connections-with", value: 
            [
              {
                group: "research-questions",
                name: "connection-64DG%^@*&YDHDH"
              }
            ]
          },
        {
          key:"motive", value: "Subsidie is niet opgenomen in de jaarrekeningen"
        },
        {
          key:"goal", value: "Het geldspoor subsidie achterhalen"
        },
      ]
    ]
  }
];

{%- endcodetabs %}