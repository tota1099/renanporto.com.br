// @flow strict
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('github', '#')).toBe('https://github.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('linkedin', '#')).toBe('https://www.linkedin.com/in/#');
  expect(getContactHref('instagram', '#')).toBe('https://www.instagram.com/#');
  expect(getContactHref('youtube', '#')).toBe('https://www.youtube.com/channel/#');
  expect(getContactHref('medium', '#')).toBe('https://#.medium.com/');
});
