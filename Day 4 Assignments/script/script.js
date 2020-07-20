console.log("Assignment 1")
for(let i=1, l=1;i<=100,l<=100;i++,l++) {

    if(i%3!=0) {
        continue;
    }

    console.log( i + " Fizz")

    if(l%5!=0) {
        continue;
    }

    console.log( l + " Buzz")
}



console.log("")
console.log("Assignment 2")
const student = {
    name: "Helsinki",
    age: 24,
    projects:  {
        dicegame: "Two player dice game using Iavascript"
    }
}

const {name, age, projects:{dicegame}} = student;
console.log("name: " + name + " age: " + age + " project: " + dicegame)

console.log("")
console.log("Assignment 3")
console.log("This Is Old Shopping List :")
let shopping_list = ["Fruits"," Vegetables", "Salt", "Juice", "Dry Fruits"]
console.log(shopping_list)

console.log("")

console.log("This Is The Old List With Some New Things Added In It: ")
shopping_list.push("Butter", " Cheese", " Panner", " Baking Soda")
console.log(shopping_list)

console.log("")

console.log("")
console.log("Assignment 4")
alert("This Program Will Go Through All Operation. Operation Name Will Be Sayed In The Starting Of The Operation")

if("Addition" || "addition" in choice) {
    alert("        Addition        ")
    num1 = prompt("Enter First Number For Addition")
    num_1 = Number(num1)
    num2 = prompt("Enter Second Number  For Addition")
    num_2 = Number(num2)
    ans = num_1 + num_2
    console.log("The Addition Of ", num_1, " + ", num_2, " is ", ans)
    console.log(num_1 + " + " + num_2 + " = " + ans)
}
if("Subtraction" || "subtraction" in choice) {
    alert("        Subtraction       ")
    num1 = prompt("Enter First Number For Subtraction")
    num_1 = Number(num1)
    num2 = prompt("Enter Second Number For Subtraction")
    num_2 = Number(num2)
    ans = num_1 - num_2
    console.log("The Subtraction Of ", num_1, "-", num_2, " is ", ans)
    console.log(num_1 + " - " + num_2 + " = " + ans)
}
if("Multiplication" || "multiplication" in choice) {
    alert("        Multiplication        ")
    num1 = prompt("Enter First Number For Multiplication")
    num_1 = Number(num1)
    num2 = prompt("Enter Second Number For Multiplication")
    num_2 = Number(num2)
    ans = num_1 * num_2
    console.log("The Multipliaction Of ", num_1, "*", num_2, " is ", ans)
    console.log(num_1 + " * " + num_2 + " = " + ans)
}
if("Division" || "division" in choice) {
    alert("        Division        ")
    num1 = prompt("Enter First Number For Division")
    num_1 = Number(num1)
    num2 = prompt("Enter Second Number For Division")
    num_2 = Number(num2)
    ans = num_1 / num_2
    console.log("The Division Of ", num_1, "/", num_2, " is ", ans)
    console.log(num_1 + " / " + num_2 + " = " + ans)
}
if("Square root" || "square root" in choice) {
    num1 = prompt("Whose Square Root You Want")
    num = Number(num1)
   
    ans = Math.sqrt(num)
    console.log("The Square Root Of ", num, "is", ans)
    console.log(num + " = " + ans)
}
console.log("")
console.log("Assignment 6")

user_num = prompt("Enter A Number")

for(user_num>=1;user_num<100;) {
    user_num = prompt("Enter A Number:")
    console.log("Wrong Number")
}
console.log("Now You Have Write Correct Number")

console.log("")
console.log("Assignment 7")
n = prompt("Till Between What range Of Number You Want Prime Numbers ");
n = Number(n);

console.log("The Prime Number Between 0 To " + n + " Is  Writeen Below: ")

for(i=1;i<n;i++) {
    
    if(i%2!=0) {
        console.log(i)
    }
}

function ask(question,yes,no) {
    if (confirm(question)) yes()
    else no;
}

ask(
    "Do You Agree?",
    function() { alert("You agreed."); },
    function() { alert("you Canceled the execution."); }
    );

// let ask = (question,yes,no)=>{ if(confirm(question)) yes(); else no;}
// let go = ()=>ask ("Do You Agree?", { alert("You Agreed.");},{alert("You Canceled the Execution."); } 
// )

