var user1;
user1 = {
    name: "Dongs",
    age: 28,
    greet: function (pharse) {
        console.log("".concat(pharse, " ").concat(this.name));
    },
};
user1.greet("Hi There I am");
