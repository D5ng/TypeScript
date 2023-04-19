type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(x: Combinable, y: Combinable) {
  // 타입 가드
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  return x.toString() + y.toString();
}
console.log(add(5, 5));

{
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type UnknownEmployee = Admin | Employee;

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("name" + emp.name);
    if ("privileges" in emp) {
      console.log("privileges" + emp.privileges);
    }
  }

  const employee1: UnknownEmployee = {
    name: "Dongs",
    privileges: ["publishing"],
  };

  printEmployeeInformation({
    name: "Dongs",
    privileges: ["publishing"],
  });
}

{
  class Car {
    drive() {
      console.log(`Driving...`);
    }
  }

  class Truck {
    drive() {
      console.log(`Driving a Truck...`);
    }

    loadCargo(amount: number) {
      console.log("loading Cargo " + amount);
    }
  }

  type Vehicle = Car | Truck;

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }

  useVehicle(new Truck());
}
