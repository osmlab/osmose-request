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
