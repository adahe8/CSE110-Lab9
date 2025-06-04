console.log("Script loaded!");

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  //added code
  let valuesSubmitted = [];
  let firstTest = { first: firstNum, second: secondNum, op: operator };
  valuesSubmitted.push(firstTest);
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

let firstNumField = document.querySelector("#first-num");
let secondNumField = document.querySelector("#second-num");
let operatorField = document.querySelector("#operator");
let firstNum = firstNumField.value;
let secondNum = secondNumField.value;
errorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const clicked = e.target;
    if (clicked.textContent === "Console Log") {
      console.log("Testing console.log");
    } else if (clicked.textContent === "Console Error") {
      console.error("There is an error uh oh");
    } else if (clicked.textContent === "Console Count") {
      console.count();
    } else if (clicked.textContent === "Console Warn") {
      if (firstNum == "" || secondNum == "") {
        console.warn("Warning: blank fields in form");
      }
      console.warn("Testing warn");
    } else if (clicked.textContent === "Console Assert") {
      expected = 36 * 4;
      console.assert(expected !== 144, "incorrect calculation");
    } else if (clicked.textContent === "Console Clear") {
      console.clear();
    } else if (clicked.textContent === "Console Dir") {
      console.dir(form);
    } else if (clicked.textContent === "Console dirxml") {
      console.dirxml(form);
    } else if (clicked.textContent === "Console Group Start") {
      console.log("Testing message groupings.");
      console.group();
      console.log("Click this button to nest another layer");
    } else if (clicked.textContent === "Console Group End") {
      console.groupEnd();
      console.log("Back to outer layer");
    } else if (clicked.textContent === "Console Table") {
      let dummyValuesSubmitted = [
        {
          first: 1,
          second: 1,
          op: "+",
        },
        {
          first: 2,
          second: 2,
          op: "*",
        },
      ];
      console.table(dummyValuesSubmitted);
    } else if (clicked.textContent === "Start Timer") {
      console.log("starting timer: click end timer to stop");
      console.time("test");
    } else if (clicked.textContent === "End Timer") {
      console.timeEnd("test");
    } else if (clicked.textContent === "Console Trace") {
      function testStack1() {
        function testStack2() {
          console.trace();
        }
        testStack2();
      }

      testStack1();
    } else if (clicked.textContent === "Try-Catch Custom Error") {
      // try catch throw practice
      try {
        const element = document.getElementById("first-numm");
        if (element) {
          element.textContent = "True value";
        } else {
          throw new Error("element does not exist; BOOM global error");
        }
      } catch (error) {
        console.error("Error: check element name", error.message);
      } finally {
        console.log("Make sure to double check all spellings");
      }
    } else if (clicked.textContent === "Trigger a Global Error") {
      // an uncaught error oooh
      window.onerror = function (
        errorMessage,
        url,
        lineNumber,
        colNumber,
        errorObj
      ) {
        console.error("Window error!", {
          message: errorMessage,
          url: url,
          line: lineNumber,
          col: colNumber,
          error: errorObj,
        });
        return true;
      };

      setTimeout(() => {
        throw new Error("BOOM!");
      }, 0);
    }
  });
});
