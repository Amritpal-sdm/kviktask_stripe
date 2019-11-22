const Product = require('../models/product.model');

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
//Simple version, without validation or sanitation
exports.test = function (req, res) {

	stripe.customers.create(
  {
  	email: "amritpal.singh@smartdatainc.net",
    description: 'Customer for amritpal.singh@smartdatainc.net',
  },
  function(err, customer) {
    stripe.payouts.create(
	  {amount: 1100, currency: 'usd'},
	  function(err, payout) {
	    // asynchronously called
	  }
	);
  }
);
}


exports.retrieve = function (req, res) {

	stripe.payouts.retrieve(
  'po_1FhToK2eZvKYlo2CBOwEN1SI',
  function(err, payout) {
    // asynchronously called
  }
);
}