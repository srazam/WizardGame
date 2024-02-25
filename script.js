//Canvas element
// Get the canvas element
var canvas = document.getElementById("myCanvas");
var answersTutorial = ["#include <iostream>", "using namespace std;", "int main() {}", "cout << \"Hello World!\";", "return 0;"];
currentIndex = 0;
y = 60;
x = 10;

//Tutorial questions
const tutorialText = ["For your first day on the job, we’re going to take a look at a basic C++ program that most programmers learn when they’re starting out. We call this \"Hello World\". Are you ready to get started? Great!", 
                      "The first step to creating your first C++ program is to include any libraries you may need using the #include statement. For this program, we will be using the “#include <iostream>” library. We will cover libraries in a future lesson so for now, don’t worry about what a library is.\nAdd the include statement into your program:", 
                      "Next, we will have to use a standard naming convention to make our code easier to read. To do this, we will use “using namespace std;” which defines that we are using a standard version of the C++ language. We will always be using a standard namespace, so there is no need to worry about any other namespace than this. End this line of code with a semicolon (;).\nAdd the namespace statement into your program:", 
                      "Now, we are going to have to add our main function into our program. The main function is the starting function of a program. Your entire program will be started and run out of the main function. This is where you will be making a function call, which will be covered in a future lesson. For now, all you have to know is how to call the main function. It starts with “int”, followed by “main()”. Then you need to add curly braces ({}). Note: All of the code in your program must be inside the main function’s curly braces. \nAdd the main function into your program:", 
                      "The next part of your program is going to be the print statements. In C++, you must use the “cout” keyword, followed by “<<” in order to display text on the screen. The text you wish to be displayed must be in double quotes (“”). For this program, we will be printing “Hello World!” to the screen. End this line of code with a semicolon (;). \nAdd a print statement, printing “Hello World!” to the screen:", 
                      "Finally, to end your program, add a return statement after your code is complete. Do you remember, when calling the main function, you had to start with “int”? This is called a data type, which is covered in the next lesson, but this particular type deals with whole numbers, or integers. That “int” defines what can be returned to the main function. In this case, we will return the integer 0 to the main function after the program is finished executing. End this line of code with a semicolon (;). \nAdd the return statement to the end of your program:",
                      "Congratulations! You just baked your first C++ program into a Hello World cake!"];

let start = document.getElementById("start");
let tut = document.getElementById("tutorial");
let container = document.getElementById("container");
let input = document.getElementById("textInput");
let count = 0;
let sumn = document.getElementById("tutorialText");
let cont = document.getElementById("continue");

cake = document.getElementById("cake");

start.addEventListener("click", function(){
    start.style.display = "none";
    tut.style.display = "none";
})

tut.addEventListener("click", function(){
    start.style.display = "none";
    tut.style.display = "none";
    sumn.style.display = "block";
    sumn.innerHTML = tutorialText[0];
    currentIndex++;
    animation();
})

//.addEventListener("click", function(){
  //  sumn.innerHTML = tutorialText[currentIndex];
//})

container.addEventListener("click", function(){
    if(count === 1)
    {
        textInput.style.display = "block";
        sumn.innerHTML = tutorialText[count];
    }
    count++;
});

// Get the 2D drawing context
var context = canvas.getContext("2d");

//Text within Canvas
// Function to draw text onto the canvas
function drawStatus(inputText, x, y) {
    // Draw the input text onto the canvas
    context.font = "Solid 8px Arial";
    context.fillText(inputText, x, y);
}

// Function to handle key press events
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        var inputText = event.target.value;
        input.placeholder = answersTutorial[currentIndex];
        if (inputText === answersTutorial[currentIndex - 1])
        {
            document.getElementById('textInput').value = '';
            if (currentIndex - 1 === 2)
            {
                drawStatus("int main() {", x, y);
                y += 30;
                drawStatus("}", x, y);
                y -= 30;
            }
            else if (currentIndex - 1 === 3)
            {
                x += 20;
                drawStatus(inputText, x, y);
                x -= 20;
            }
            else if (currentIndex - 1 === 4)
            {
                x += 20;
                drawStatus(inputText, x, y);
                x -= 20;
                cake.style.display = "block";
                input.style.display = "none";
            }
            else{
                drawStatus(inputText, x, y);
            }

            y += 10;
            currentIndex++;
            sumn.innerHTML = tutorialText[currentIndex];
            animation();

            context.clearRect(115, 135, 300, 400);
        }
        else{
            drawStatus("Incorrect", 120, 145);
        }
    }
}

cont.addEventListener('Enter', function(){
    if (currentIndex === 6)
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        input.style.display = "none";
    }
})

// Listen for key press events in the text input and update the canvas if Enter is pressed
document.getElementById("textInput").addEventListener("keypress", handleKeyPress);

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';
    context.font = "Solid 10px Arial";
    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + '\n';
        y += lineHeight
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
}

wizard1 = document.getElementById("wizard1");
wizard2 = document.getElementById("wizard2");
function animation() {
    for (let index = 0; index < 4; index++)
    {
      setTimeout(() => 
      {
         wizard2.style.display = "none";
         wizard1.style.display = "block";
      }, index * 600);

      index += 1;

      setTimeout(() => 
      {
         wizard1.style.display = "none";
         wizard2.style.display = "block";
        }, index * 600);
    }
}