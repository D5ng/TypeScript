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
