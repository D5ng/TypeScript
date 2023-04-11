class Department {
  // private id: string;
  // name: string;
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}) ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const account = new Department("d1", "Accounting");

account.describe();
account.addEmployee("DongHyun");
account.addEmployee("SuZy");

account.printEmployeeInformation();
