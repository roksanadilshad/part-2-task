function calculateElectronicsBudget(laptopQty, tabletQty, mobileQty){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;
  let totalPrice = (laptopQty * laptopPrice) 
                  +(tabletQty * tabletPrice) +(mobileQty * mobilePrice);

  return totalPrice;
}

const total = calculateElectronicsBudget(10,12,18);
console.log(total);
