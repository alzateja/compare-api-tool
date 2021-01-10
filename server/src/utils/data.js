import { isNil, isEmpty, not, or, propEq } from 'ramda';

export const hasError = propEq('error', true);

export const isNotEmptyOrNil = (data) => not(or(isNil(data), isEmpty(data)));
