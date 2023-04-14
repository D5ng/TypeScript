// 인덱스 시그니처

interface ErrorContainer {
  [key: string]: string | number;
}

const serverError: ErrorContainer = {
  statusError: 500,
  messageError: "The connection to the server has been lost",
};

const loginError: ErrorContainer = {
  statusError: 400,
  messageError: "400 Bad Request",
};

interface ShoopingList {
  [key: string]: number;
}

const shoppingList: ShoopingList = {
  iMac: 130,
  mac: 200,
  trackpad: 40,
  airpod: 50,
  iPad: 130,
};

function totalSalary(shoppingList: ShoopingList) {
  let result = 0;
  for (const item in shoppingList) result += shoppingList[item];
  return result;
}

console.log(totalSalary(shoppingList));
