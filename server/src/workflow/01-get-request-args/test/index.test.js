import test from 'ava';
import { getStringValueFromRequestBody } from '..';

test('getStringValueFromRequestBody - return property if found', (t) => {
  const requestObject = { body: { testValue: 'myValue' } };

  const result = getStringValueFromRequestBody(['testValue'], requestObject);
  t.is(result, 'myValue');
});

test('getStringValueFromRequestBody - return empty string if not found', (t) => {
  const requestObject = { body: { testValue: 'myValue' } };

  const result = getStringValueFromRequestBody(['test'], requestObject);
  t.is(result, '');
});
