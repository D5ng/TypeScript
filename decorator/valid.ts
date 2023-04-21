interface ValidatorConfig {
  [property: string]: {
    [validateProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Require(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Require
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleElem = document.getElementById("title")! as HTMLInputElement;
  const priceElem = document.getElementById("price")! as HTMLInputElement;

  const title = titleElem.value;
  const price = +priceElem.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }

  console.log(createdCourse);
});
