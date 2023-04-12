class Department {
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Dongs"]);
it.describe();
it.addEmployee("DongHyun");
it.addEmployee("SuZy");
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Someting went wrong!");
accounting.printReports();
