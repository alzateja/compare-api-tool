import { diff } from 'jsondiffpatch';

/*
  We use json-diffpatch to compare the JSONs of our responses.
  This external dependency removes purity, since the packages functionality,
  could be updated.
*/
export const generateJsonDiffs = ([baseApiResponse, comparisonResponse]) =>
  diff(baseApiResponse, comparisonResponse);
