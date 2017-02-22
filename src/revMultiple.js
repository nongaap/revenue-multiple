'use strict';

/*
Trailing revenue multiple calculation: Profit Margin × Profit Payout × (1 + g)/(r − g)
*/

function revMultiple(margin, growth, risk=.10, taxrate=.35, payout=1) {
	return (margin * (1 - taxrate)) * payout * ((1 + growth)/(risk - growth));
}

/*
Forward revenue multiple calculation: Profit Margin × Profit Payout × 1/(r − g)
*/

function forwardMultiple(margin, growth, risk=.10, taxrate=.35, payout=1) {
	return (margin * (1 - taxrate)) * payout * (1/(risk - growth));
}
