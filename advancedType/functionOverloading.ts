(() => {
  type Combinable = string | number;

  function add(x: string, y: string): string;
  function add(x: number, y: string): string;
  function add(x: string, y: number): string;
  function add(x: number, y: number): number;
  function add(x: Combinable, y: Combinable) {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    } else {
      return x.toString() + y.toString();
    }
  }

  console.log(add(1, 3)); // 4
  console.log(add("1", 3)); // 13
  console.log(add("1", "3")); // 13
  console.log(add(1, "3")); // 13
})();
