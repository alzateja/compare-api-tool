import test from 'ava';
import { propIsNotEmptyOrNil, isGetRequest, isPostRequest, isValidPostRequest } from '..';

const getTestProperty = propIsNotEmptyOrNil('test');

test('propIsNotEmptyOrNil - returns true if not null or empty', (t) => {
  t.is(getTestProperty({ test: 123 }), true);
  t.is(getTestProperty({ test: true }), true);
  t.is(getTestProperty({ test: 'test' }), true);
});

test('propIsNotEmptyOrNil - returns false if null or empty', (t) => {
  t.is(getTestProperty({}), false);
  t.is(getTestProperty({ test: {} }), false);
  t.is(getTestProperty({ test: null }), false);
  t.is(getTestProperty({ test: undefined }), false);
});

test('isGetRequest - returns false if does not find property method with value of "GET"', (t) => {
  t.is(isGetRequest({}), false);
  t.is(isGetRequest({ method: {} }), false);
  t.is(isGetRequest({ method: null }), false);
  t.is(isGetRequest({ method: 'POST' }), false);
});

test('isGetRequest - returns true if does find property method with value of "GET"', (t) => {
  t.is(isGetRequest({ method: 'GET' }), true);
});

test('isPostRequest - returns false if does not find property method with value of "POST"', (t) => {
  t.is(isPostRequest({}), false);
  t.is(isPostRequest({ method: {} }), false);
  t.is(isPostRequest({ method: null }), false);
  t.is(isPostRequest({ method: 'GET' }), false);
});

test('isPostRequest - returns true if does find property method with value of "POST"', (t) => {
  t.is(isPostRequest({ method: 'POST' }), true);
});

test('isValidPostRequest - returns false if not "POST" request', (t) => {
  t.is(isValidPostRequest({ method: 'GET' }), false);
});

test('isValidPostRequest - returns false if is "POST" request, but it has empty body', (t) => {
  t.is(isValidPostRequest({ method: 'POST', body: {} }), false);
});

test('isValidPostRequest - returns true if is "POST" request with a populated body', (t) => {
  t.is(isValidPostRequest({ method: 'POST', body: { hasData: true } }), true);
});
