class Department {
  name: string;
  employees: string[] = [];
  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }
}

const account = new Department("Accounting");
console.log(account);
