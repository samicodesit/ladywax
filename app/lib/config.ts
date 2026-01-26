// Content configuration for the website
// This file allows business owners to edit key content without touching code

export const siteConfig = {
  name: "LadyWax",
  description:
    "Premium waxing salon exclusively for women in Amsterdam and The Hague",

  // Business Information
  business: {
    specialistsCount: "25+",
    openingHours: "10:00 AM - 9:00 PM",
    openDays: "7 days a week",
    tagline: "Distinctive in waxing",
    phone: "+31 (0)70 799 00 50",
  },

  // Locations
  locations: {
    amsterdam: {
      name: "LadyWax Amsterdam",
      address: "Overtoom 492",
      city: "1054 JZ Amsterdam",
      phone: "020 - 751 99 50",
      email: "amsterdam@ladywax.nl",
      mapsUrl: "https://maps.app.goo.gl/uY67j2QqPTEFAprn8",
      widgetUrl:
        "https://widget.salonized.com/widget?color=%230000f8&language=nl&company=erxSd9nZu9SHfMatd8MuztjX&inline=true",
    },
    theHague: {
      name: "LadyWax The Hague",
      address: "Zoutmanstraat 2-d",
      city: "2518 GP The Hague",
      phone: "070 - 752 11 97",
      email: "denhaag@ladywax.nl",
      mapsUrl: "https://maps.app.goo.gl/H1tWtiUXgbDad4C18",
      widgetUrl:
        "https://widget.salonized.com/widget?color=%230000f8&language=nl&company=AB3KbFZHUS6Q5Phs9PhRRqfY&inline=true",
    },
  },

  // Homepage Highlights
  highlights: [
    {
      title: "Exclusively for Women",
      description:
        "A comfortable and private environment designed specifically for women",
    },
    {
      title: "Experienced Specialists",
      description:
        "Our team consists of highly trained and experienced waxing specialists",
    },
    {
      title: "Premium Products",
      description:
        "We use only the finest waxing products for the best results",
    },
    {
      title: "Two Convenient Locations",
      description:
        "Visit us in Amsterdam or The Hague - whichever suits you best",
    },
  ],

  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Prijslijst", href: "/onze-prijslijst" },
    { name: "Waxen?", href: "/waarom-waxen" },
    { name: "Vacatures", href: "/kom-bij-ons-werken" },
    { name: "Contact", href: "/contact-opnemen" },
  ],

  // Waxing Page Content
  waxingPage: {
    title: "Waarom waxen?",
    subtitle:
      "Geen ruwe stoppels meer, niet meer scheren, 1x per maand even naar LadyWax!",
    intro: [
      "Als sinds eeuwen is een vrouw met gladde en vlekkeloze huid het symbool van sensualiteit en schoonheid. Een belangrijk onderdeel hiervan is het ontharen van je huid op die plaatsen waar je geen haar wil hebben. Tegenwoordig is ontharen een vast onderdeel van de regelmatige verzorging en hygiëne voor iedere vrouw.",
      "Er zijn veel verschillende methoden ontwikkeld voor het verwijderen van ongewenste haargroei: van zeer traditioneel (met pincet) tot hoog innovatief technologisch (met laser). Maar niet voor niets gebruikte de koningin van het oude Egypte, Cleopatra, al warme bijenwas voor het verwijderen van ongewenst haar. Waxen is dan ook de meest effectieve en ook minst schadelijke vorm van ontharen. De haren worden snel en geheel verwijderd, blijven dan 3 tot 4 weken weg en, belangrijk, de haarwortel wordt niet vernietigd. Het haar wordt snel verwijderd met zo min mogelijk pijn. En door regelmatig – iedere maand- te waxen blijven je huidhaartjes heel dun en zacht en worden steeds schaarser. Daarnaast leeft je huid op omdat bij iedere wax beurt, de dode huidcellen van je huid verwijderd worden.",
    ],
    brazilian: {
      title: "Brazilian wax",
      description:
        "Brazilian Wax is de naam voor het waxen van alle haren in je schaamstreek. Je kan kiezen uit:",
      types: [
        {
          name: "Full Brazilian",
          description:
            "Alles weg. Al je schaamhaar wordt verwijderd. Ook van je schaamlippen en tussen je bilnaad",
        },
        {
          name: "Brazilian Shape",
          description:
            "Hierbij laat je nog een figuurtje naar wens op je venusheuvel staan.",
        },
      ],
    },
    faq: [
      {
        question: "Wanneer kan ik beter niet waxen?",
        answer:
          "Als je huid geïrriteerd is, rood is, of op 1 of andere wijze is beschadigd, is het beter je wax behandeling uit te stellen.",
      },
      {
        question:
          "Welke voorzorg kan ik nemen voorafgaand aan een wax behandeling?",
        answer:
          "Vermijd de zonnebank of uitgebreid zonnen 24 uur voor je wax behandeling. Net gekleurde of rode huid is te gevoelig.",
      },
      {
        question: "Is er na de wax behandeling nog iets belangrijks?",
        answer:
          "Direct na het waxen is je huid heel gevoelig. Ga dus niet direct door na de zonnebank, maar wacht 24 uur voordat je je huid weer aan de zon blootstelt. Wees ook voorzichtig met cosmetica op chemische basis en gebruik de eerste 24 uur geen deodorant met alcohol na het waxen van je oksels.",
      },
      {
        question: "Wanneer en hoe vaak moet ik scrubben?",
        answer:
          "Scrubben is altijd goed voor je huid. Twee a drie keer scrubben per week voorkomt dat nieuwe haartjes kunnen ingroeien, het verwijdert je dode huidcellen en het stimuleert de bloedsomloop van je huid. Wacht na een waxbehandeling altijd 3 dagen voordat je weer gaat scrubben. Scrubben werkt overigens heel goed met een Luffa spons, het netweefsel van de sponskomkommer. Door met een Luffa spons te scrubben ga je ook zuiniger om met je Scrub creme. Bij LadyWax kun je onze geweldige Perron Rigot Double Scrub kopen en natuurlijk ook de Luffa spons.",
      },
    ],
    dosAndDonts: {
      do: [
        "Hydrateer je huid regelmatig.",
        "Scrub je huid 2 a 3 keer per week (maar pas drie dagen na het waxen)!",
        "Gebruik regelmatig onze “Ingrown Serum” van Perron Rigot. Je voorkomt hiermee dat je haartjes ingroeien!",
        "Laat je huid ademen! Losse kleding en natuurlijke stoffen helpen daarbij.",
        "Regelmatig waxen (iedere 3 a 4 weken) zorgt dat alleen zachte en dunne haartjes terugkomen die ook steeds schaarser worden.",
      ],
      dont: [
        "Niet scheren tussen je wax behandelingen in!",
        "Ga niet in de zon daags na het waxen.",
        "Scrub je huid niet de eerste drie dagen.",
        "Bij een rode huid; voorkom heet baden, sauna en zonnen.",
        "Sport niet direct aansluitend op je wax behandeling (geef je huid een paar uur rust).",
      ],
    },
  },

  // Careers Page Content
  careersPage: {
    title: "Kom bij ons werken",
    content: [
      "LadyWax is een jong, nieuw en professioneel bedrijf dat groeit. We zijn dus altijd op zoek naar ervaren, maar vooral lieve Wax Lady’s die graag met mensen werken en onze vrouwelijke klanten nog mooier willen maken.",
      "Binnen LadyWax heb je ook groeimogelijkheden, bijvoorbeeld om store manager te worden.",
      "Je sollicitatie is altijd welkom via e-mail. Stuur dan een bericht naar violier@ladywax.nl We kijken uit naar een kennismaking met je!",
    ],
    email: "violier@ladywax.nl",
  },

  // Contact Page Content
  contactPage: {
    title: "Contact met LadyWax",
    intro:
      "Je kan altijd contact opnemen met LadyWax wanneer je iets wil weten over een behandeling of andere vragen hebt. Stuur dan een e-mail naar info@ladywax.nl. Je kan ook altijd even bellen met 1 van onze WaxLady’s; dat kan op alle dagen van de week tussen 10.00 en 21.00 uur. Wil je een Wax afspraak maken in Amsterdam of Den Haag, gebruik dan de link om direct je afspraak in onze agenda te plannen.",
    email: "info@ladywax.nl",
  },
};

export type SiteConfig = typeof siteConfig;
