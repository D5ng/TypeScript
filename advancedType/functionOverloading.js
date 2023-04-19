(function () {
    function add(x, y) {
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        }
        else {
            return x.toString() + y.toString();
        }
    }
    console.log(add(1, 3)); // 4
    console.log(add("1", 3)); // 13
    console.log(add("1", "3")); // 13
    console.log(add(1, "3")); // 13
})();
