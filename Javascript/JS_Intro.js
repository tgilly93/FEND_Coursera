console.log('Hello World')
// this is a comment!
/* this is a multi-line comment on a single line */
console.log("%cHello, World", "color: blue; font-size: 40px")
// Changing appearance of text.
var greeting = "Hello World"
console.log(greeting)
// Assigning a value to a variable.
var petDog = ("Rex")
var petCat = ("Pepper")
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is:", petDog)
console.log("My pet cat's name is:", petCat)
var catSound = ("purr")
var dogSound = ("woof")
console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)
catSound = "meow"
console.log(petCat, "now says", catSound)
// more practice.

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
var petHungry = true
console.log('Feeding the pet')
console.log("Pet is hungry: ", !petHungry)
console.log(petHungry);
console.log(22 % 5); // 2
console.log(5 == 5);
console.log(5 == "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log("inter" + "net"); // "internet"
console.log("note" + "book"); // "notebook"
console.log(365 + " days"); // "365 days"
console.log(12 + " months"); // "12 months"
console.log(1 + "2");
var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9
var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."
var score = 8
console.log("mid-level skills:", score > 0 && score < 10)
var timeRemaining = 0
var energy = 10
console.log("Game over: ", timeRemaining == 0 || energy == 0)
var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 0 
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)
var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 0 
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)
var counter = 0
counter += 5
counter += 3
console.log(counter)
// Practice with all types of operators.

var age = 10
if (age >= 65) {
    console.log("You get your income from your pension")
}
else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
}
else if(age < 18) {
    console.log("You get an allowance")
}
else {
    console.log("The value of the age variable is not numerical")
}

var day = "Sunday"
switch(day) {
    case 'Monday':
        console.log("Eat Food");
        break;
    case 'Tuesday':
        console.log("Drive")
        break;
    case 'Wednesday':
        console.log("Sleep")
        break;
    case 'Thursday':
        console.log("Jump")
        break;
    case 'Friday':
        console.log("Run")
        break;
    case 'Saturday':
        console.log("Skip")
        break;
    case 'Sunday':
        console.log("Sing")
        break;
    default:
        console.log('There is no such day')
}
// Conditional statements.

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown Finished!') // for loop countdown to zero.
var i = 0
while (i < 6) {
    console.log(i);
    i = i + 1;
}
console.log('Counting Completed!') // while loop.
for (var i =1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold Medal")
    }
    else if (i == 2) {
        console.log("Silver Medal")
    }
    else if (i == 3) {
        console.log("Bronze Medal")
    }
    else {
        console.log(i)
    } 
} // nested loop
for (var i =1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold Medal")
            break;
        case 2:
            console.log("Silver Medal")
            break;
        case 3:
            console.log("Bronze Medal")
            break;
        default:
            console.log(i)
    }   
} // nested switch loop

function letterFinder (word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match)
            console.log('Found the', match, "at", i)
        else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test","t") //functions with loop

