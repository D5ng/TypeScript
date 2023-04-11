class Department {
  name: string;
  private employees: string[] = [];
  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const account = new Department("Accounting");

account.addEmployee("DongHyun");
account.addEmployee("SuZy");

account.printEmployeeInformation();
