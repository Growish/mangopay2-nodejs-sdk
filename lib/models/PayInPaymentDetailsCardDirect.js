var _ = require('underscore');
var PayInPaymentDetailsCard = require('./PayInPaymentDetailsCard');

var PayInPaymentDetailsCardDirect = PayInPaymentDetailsCard.extend({
    defaults: _.extend({}, PayInPaymentDetailsCard.prototype.defaults, {
        CardId: null,
        IpAdress: null,
        Shipping: null,
        BrowserInfo: null
    })
});

module.exports = PayInPaymentDetailsCardDirect;
