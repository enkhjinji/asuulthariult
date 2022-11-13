class quiz {
  constructor(question, answers, currentAnswer) {
    (this.question = question),
      (this.answers = answers),
      (this.currentAnswer = currentAnswer);
  }
  haruulah = function () {
    console.log(this.question);
    this.answers.forEach((element, index) => {
      console.log(index + " " + element);
    });
  };
  check = function (arg) {
    if (this.currentAnswer == arg) {
      console.log("zuw");
    } else {
      console.log("buruu");
    }
  };
}
let person1 = new quiz(
  "tenger yamar ungutei be",
  ["tsenher", "nogoon", "tsagaan", "ygaan"],
  0
);
person1.haruulah();
let myanswer = prompt("zow hariultin dugaariig oruulana uu");
person1.check(myanswer);

let person2 = new quiz("aalz heden hultei be", [5, 4, 8, 43], 2);
person2.haruulah();
let myanswer1 = prompt("zow hariultin dugaariig oruulana uu");
person2.check(myanswer1);

let person3 = new quiz("solongo heden ungutei be", [500, 2, 12, 7], 3);
person3.haruulah();
let myanswer3 = prompt("zow hariultin dugaariig oruulana uu");
person3.check(myanswer3);

let person4 = new quiz(
  "mongoliin vndesnii hool",
  ["buuz", "huushuur", "dalain shul", "soup"],
  0
);
person4.haruulah();
let myanswer4 = prompt("zow hariultin dugaariig oruulana uu");
person4.check(myanswer4);

let person5 = new quiz("mongol heden aimagtai be", ["20", "30", "21", "25"], 2);
person5.haruulah();
let myanswer5 = prompt("zow hariultin dugaariig oruulana uu");
person5.check(myanswer5);

let person6 = new quiz("10-5 = ?", ["67", "8", "5", "2"], 2);
person6.haruulah();
let myanswer6 = prompt("zow hariultin dugaariig oruulana uu");
person6.check(myanswer6);

let person7 = new quiz(
  "us yamar ungutei be",
  ["har", "bor", "ungugvi", "tsenher"],
  2
);
person7.haruulah();
let myanswer7 = prompt("zow hariultin dugaariig oruulana uu");
person7.check(myanswer7);

let person8 = new quiz(
  "hari garigiihn baidg uu",
  ["baigaa", "yu gjde", "bhq", "oilgomjtoi"],
  0
);
person8.haruulah();
let myanswer8 = prompt("zow hariultin dugaariig oruulana uu");
person8.check(myanswer8);

let person9 = new quiz("hun hedn huruutai we", ["10", "20", "1", "1 ba 2"], 1);
person9.haruulah();
let myanswer9 = prompt("zow hariultin dugaariig oruulana uu");
person9.check(myanswer9);

let person10 = new quiz(
  "mni dun hed grh we",
  ["100", "100", "100", "100"],
  Math.floor(Math.random() * 0 + 3)
);
person10.haruulah();
let myanswer10 = prompt("zow hariultin dugaariig oruulana uu");
person10.check(myanswer10);
// function quiz(userName, lastName, age) {
//   this.userName = userName;
//   this.lastName = lastName;
//   this.age = age;
// }
// person.prototype.mergejil = function (arg) {
//   this.mergejil = arg;
// };
// let person1 = new person("hennegen", "bashen", 22);
// let person2 = new person("basHenNegen", "henNegen", 44);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   mergejil = function (arg) {
//     this.mergejil = arg;
//   };
// }
// let person1 = new Person("john", "smith", 15);

// class Asuult {
//   constructor(quiz, answer, correctAnswer) {
//     this.quiz = quiz;
//     this.answer = answer;
//     this.correctAnswer = correctAnswer;
//   }
//   show = function () {
//     console.log(quiz1);
//     this.answer.forEach((element, index) => {
//       console.log(index + "  " + element);
//     });
//   };
//   check = function (arg) {
//     if (this.correctAnswer == arg) {
//       console.log("zuw");
//     } else {
//       console.log("buruu");
//     }
//   };
// }
// let quiz1 = new Asuult(
//   "shal ni deer heden hvn gishgesen be",
//   [1000, 500, 100, 50],
//   3
// );
// quiz1.show();
// let myAnswer = prompt("zuw hariultin dugaariig oruulah");
