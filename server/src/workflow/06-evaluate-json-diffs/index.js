import { formatters } from 'jsondiffpatch';
import { notFoundHTML } from '../../utils/response';
import { isNotEmptyOrNil } from '../../utils/data';

/*
  Evaluate the JSON diffs.
  Return formatted HTML diff or a default "Not Found" based on data.
*/
export const evaluateJsonDiffs = (data) => (
  isNotEmptyOrNil(data) ?
  formatters.html.format(data) :
  notFoundHTML()
  );
