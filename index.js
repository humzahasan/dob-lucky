//Selector
const dob = document.getElementById("dob");
const luckyNum = document.getElementById("luckyNum");
const luckBtn = document.getElementById("luckBtn");
const message = document.getElementById("msg");

//Functions
const fetchLuck = (event) => {
  event.preventDefault();
  let dobValue = dob.value;
  let luckyNumber = luckyNum.value;

  if (!dobValue) {
    message.innerText = "Please enter your valid date of birth";
  } else if (!luckyNumber) {
    message.innerText = "Please enter your luck number";
  } else {
    let sumOfDigit = getSumOfDob(dobValue);
    let isLucky = sumOfDigit % luckyNumber;
    if (isLucky == 0) {
      message.innerText = "Wow! You are Lucky!🙌";
    } else {
      message.innerText = "You will make your own luck!😎";
    }
  }
};

const getSumOfDob = (num) => {
  if (typeof num !== "number") {
    num = num.replaceAll("-", "0");
    num = num.split("");
  }
  //   console.log(num);
  num = num.reduce((total, numb) => Number(total) + Number(numb));
  //   console.log(num);
  return num;
};

//Event Listner
luckBtn.addEventListener("click", fetchLuck);
