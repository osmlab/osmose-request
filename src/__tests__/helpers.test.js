import { buildQueryString } from '../helpers';

describe('buildQueryString', () => {
  it('Should return an empty string', () => {
    const expected = '';
    const result = buildQueryString({});
    expect(result).toBe(expected);
  });

  it('Should return a valid query string', () => {
    const expected = '?aze=123&%C3%A0z%C3%A9=%40%20%2C.';
    const result = buildQueryString({
      aze: 123,
      àzé: '@ ,.'
    });
    expect(result).toBe(expected);
  });
});
