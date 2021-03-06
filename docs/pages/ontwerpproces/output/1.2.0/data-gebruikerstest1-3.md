
Zie hieronder de ruwe data dat in het prototype draait. Geschreven in de taal JavaScript. 

## Vorm van deze data
De vorm hoe de data nu in elkaar zit is niet het begin stadium zoals die in de database voorkomt en ook niet hoe deze zich aan de elementen in het gebruikersinterface gekoppeld zitten. Deze data begint zich precies in het midden. Data in uitgelezen vanuit een database en is gestructureerd, nu moet deze nog worden verwerkt en gekoppeld aan de gebruikersinterface.

Deze vorm scheelt tijd in het ontwerpproces omdat er nog geen vertaalslag gemaakt hoeft te worden naar een database format. Het is daardoor ook eenvoudiger om de data aan te passen.

## De data

```JS
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

```