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

export const fetchSupportedCountriesRequest = jest
  .fn()
  .mockImplementation(() => ({
    countries: ['afghanistan', 'albania', 'algeria', 'andorra']
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
