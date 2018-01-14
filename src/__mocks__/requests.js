export const fetchErrorsRequest = jest.fn().mockImplementation(() => ({
  description: ['lat', 'lon', 'error_id', 'item'],
  errors: [
    ['47.2069075', '-1.5145110', '14412894302', '8120'],
    ['47.1867600', '-1.5580475', '14412894299', '8120']
  ]
}));

export const fetchErrorRequest = jest.fn().mockImplementation(() => ({
  maxlon: -1.512511,
  subtitle: 'verre, Rue de la Loire',
  elems: [],
  minlat: 47.2049075,
  b_date: '2017-11-18',
  elems_id: '',
  maxlat: 47.2089075,
  lat: '47.2069075',
  lon: '-1.5145110',
  new_elems: [
    {
      add: [
        { k: 'amenity', v: 'recycling' },
        { k: 'recycling:glass_bottles', v: 'yes' },
        { k: 'recycling_type', v: 'container' },
        { k: 'ref:FR:NM', v: 'VE0791' },
        { k: 'source', v: 'Nantes M\u00e9tropole - 07/2016' }
      ],
      num: 0,
      del: [],
      mod: []
    }
  ],
  minlon: -1.516511,
  title: 'Recyclage de verre de NM non int\u00e9gr\u00e9',
  url_help: 'http://wiki.openstreetmap.org/wiki/FR:Osmose/erreurs',
  item: 8120,
  error_id: 14412894302
}));

export const closeErrorRequest = jest.fn().mockImplementation(() => {
  return true;
});

export const falseErrorRequest = jest.fn().mockImplementation(() => {
  return true;
});

export const fetchSupportedCountriesRequest = jest
  .fn()
  .mockImplementation(() => ({
    countries: ['afghanistan', 'albania', 'algeria', 'andorra']
  }));

export const fetchItemCategoriesRequest = jest.fn().mockImplementation(() => ({
  categories: [
    {
      categ: 10,
      menu_lang: {
        el: '\u0394\u03b9\u03ac\u03c1\u03b8\u03c1\u03c9\u03c3\u03b7',
        en: 'Structure',
        ca: 'Estructura',
        it: 'Strutture',
        cs: 'Struktura',
        es: 'Estructura',
        ru: '\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430',
        nl: 'Structuur',
        pt: 'Estrutura',
        lt: 'Strukt\u016bra',
        ro: 'Structur\u0103',
        pl: 'Struktura',
        fr: 'Structurel',
        zh_TW: '\u7d50\u69cb',
        de: 'Struktur',
        da: 'Struktur',
        fi: 'Rakenne',
        hu: 'Szerkezet',
        ja: '\u69cb\u9020',
        zh_CN: '\u7ed3\u6784',
        sw: 'kimuundo',
        uk: '\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430'
      },
      item: [
        {
          marker_flag: 'O',
          marker_color: '#CCCCCC',
          tags: ['building', 'fix:chair', 'geom'],
          menu: 'b\u00e2timents se recouvrant',
          number: [624, 418453, 901445],
          item: 0,
          levels: [1, 2, 3]
        },
        {
          marker_flag: 'M',
          marker_color: '#CCCCCC',
          tags: ['building', 'fix:chair', 'fix:imagery', 'geom'],
          menu: 'B\u00e2timent segment\u00e9',
          number: null,
          item: 1,
          levels: [3]
        }
      ],
      menu: 'Structurel'
    },
    {
      categ: 20,
      menu_lang: {
        el:
          '\u0391\u03c0\u03bf\u03cd\u03c3\u03b5\u03c2 \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2',
        en: 'Missing tags',
        ca: 'Etiquetes omeses',
        it: 'Tag mancanti',
        cs: 'Chyb\u011bj\u00edc\u00ed zna\u010dky',
        es: 'Faltan etiquetas',
        ru:
          '\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0433\u0438',
        nl: 'Ontbrekende tags',
        pt: 'Aus\u00eancia de etiquetas',
        lt: 'Tr\u016bkstamos \u017eymos',
        ro: 'Tag-uri lips\u0103',
        pl: 'Brakuje tag\u00f3w',
        fr: 'Attributs manquants',
        zh_TW: '\u7f3a\u5c11\u6a19\u7c64',
        de: 'fehlende Tags',
        da: 'Manglende tags',
        fi: 'Puuttuvat t\u00e4git',
        hu: 'Hi\u00e1nyz\u00f3 c\u00edmk\u00e9k',
        ja: '\u4e0d\u8db3\u3057\u3066\u3044\u308b\u30bf\u30b0',
        zh_CN: '\u7f3a\u5c11 tags',
        sw: 'Tags kukosa',
        uk:
          '\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0442\u0435\u0491\u0438'
      },
      item: [
        {
          marker_flag: 'O',
          marker_color: '#33FFFF',
          tags: ['fix:imagery', 'highway', 'roundabout'],
          menu: 'mauvais giratoire',
          number: [21346],
          item: 2010,
          levels: [1]
        },
        {
          marker_flag: 'K',
          marker_color: '#33FFFF',
          tags: ['fix:survey', 'tag'],
          menu: 'altitude',
          number: [177003],
          item: 2020,
          levels: [3]
        }
      ],
      menu: 'Attributs manquants'
    }
  ]
}));

export const fetchItemsRequest = jest.fn().mockImplementation(() => ({
  items: [
    [
      0,
      {
        el:
          '\u03b1\u03bb\u03bb\u03b7\u03bb\u03b5\u03c0\u03b9\u03ba\u03b1\u03bb\u03c5\u03c0\u03c4\u03cc\u03bc\u03b5\u03bd\u03bf \u03ba\u03c4\u03ae\u03c1\u03b9\u03bf',
        fr: 'b\u00e2timents se recouvrant',
        en: 'overlapping building',
        nl: 'overlappende gebouw',
        pt: 'sobreposi\u00e7\u00e3o de edif\u00edcios',
        ru:
          '\u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0437\u0434\u0430\u043d\u0438\u044f',
        ca: 'edificis superposats',
        de: '\u00fcberlappende Geb\u00e4ude',
        sw: 'majengo kufunika',
        it: 'edifici sovrapposti',
        hu: '\u00e1tfed\u0151 \u00e9p\u00fclet',
        lt: 'persidengiantys pastatai',
        zh_CN: '\u5efa\u7b51\u91cd\u53e0',
        pl: 'nak\u0142adaj\u0105ce si\u0119 budynki',
        uk:
          '\u043f\u0435\u0440\u0435\u0442\u0438\u043d \u0431\u0443\u0434\u0456\u0432\u0435\u043b\u044c',
        cs: 'p\u0159ekr\u00fdvaj\u00edc\u00ed se budovy',
        fi: 'p\u00e4\u00e4llekk\u00e4inen rakennus',
        zh_TW: '\u5efa\u7269\u91cd\u758a',
        ro: 'cl\u0103dire suprapus\u0103',
        ja: '\u5efa\u7269\u306e\u4ea4\u5dee',
        es: 'superposici\u00f3n de edificios'
      }
    ],
    [
      1010,
      {
        el:
          '\u03b4\u03b9\u03c0\u03bb\u03cc\u03c2 \u03ba\u03cc\u03bc\u03b2\u03bf\u03c2',
        fr: 'n\u0153ud r\u00e9p\u00e9t\u00e9',
        en: 'duplicated node',
        nl: 'dubbele knooppunt',
        pt: 'n\u00f3 duplicado',
        ru:
          '\u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430',
        ca: 'no duplicat',
        de: 'doppelter Knoten',
        sw: 'unaorudiwa nodi',
        it: 'nodo duplicato',
        hu: 'duplik\u00e1lt pont',
        lt: 'ta\u0161ko dublikatas',
        zh_CN: '\u91cd\u590d\u8282\u70b9',
        pl: 'powielony w\u0119ze\u0142',
        uk:
          '\u0434\u0443\u0431\u043b\u044c\u043e\u0432\u0430\u043d\u0456 \u0442\u043e\u0447\u043a\u0438',
        cs: 'duplikovan\u00e9 uzly',
        zh_TW: '\u91cd\u8986\u7684 node',
        ro: 'nod duplicat',
        ja: '\u91cd\u8907\u3057\u305f\u30ce\u30fc\u30c9',
        es: 'nodo duplicado'
      }
    ]
  ]
}));
