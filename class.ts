class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department: (${this.id}) ${this.name}`);
  }

  addEmployee(name: string) {
    this.employees.push(name);
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
  private lastReport: string;

  constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No Report");
  }

  set mostRecendReport(value: string) {
    this.lastReport = value;
  }

  addEmployee(name: string) {
    if (name === "Dongs") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("D5ng");
accounting.addEmployee("ina");
accounting.printEmployeeInformation();
