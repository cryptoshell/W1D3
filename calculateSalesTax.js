function calculateSalesTax(salesData, taxRates) {

  function outputSale(sales, province, totals) {
    for(var i = 0; i < sales.length; i++) {
        totals['totalSales'] += sales[i];
        totals['totalTaxes'] += sales[i] * taxRates[province];
    }
  }
  var output = {};
  for(var i = 0; i < salesData.length; i++) {
    if(!output[salesData[i]['name']]) {
      output[salesData[i]['name']] = { totalSales: 0, totalTaxes: 0 };
    }
    outputSale(salesData[i]['sales'], salesData[i]['province'], output[salesData[i]['name']]);
  }
  return output;
}


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


console.log(calculateSalesTax(companySalesData, salesTaxRates));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/