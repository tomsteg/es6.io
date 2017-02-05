/* http://es6.local/13%20-%20JavaScript%20Modules%20and%20Using%20npm/es6modules/index.html */
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

const ages = [1,1,4,53,12,4];

console.log(uniq(ages));
