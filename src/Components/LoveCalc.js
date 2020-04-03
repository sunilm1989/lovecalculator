const LoveCalc = (firstname, lastname) => {
  let fullname = `${firstname
    .toLowerCase()
    .replace(/ /g, "")}loves${lastname.toLowerCase().replace(/ /g, "")}`;

  const nameArr = fullname.split("");
  let charCounts = [];
  let lovePercentage = [];

  const countChars = (str, letter) => {
    let letterCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        letterCount += 1;
      }
    }
    return letterCount;
  };

  const isOdd = n => Math.abs(n % 2) === 1;

  const cnvtSigleDigitArray = arr => {
    let newArr = [];
    newArr = arr.map(e => e.toString());
    newArr = newArr.join("");
    newArr = newArr.split("");
    newArr = newArr.map(e => parseInt(e));
    return newArr;
  };

  const createLovePercentage = arr =>
    `Love between ${firstname} and ${lastname} : ${arr.join("")}%`;

  const calcLove = arr => {
    const inputArr = cnvtSigleDigitArray(arr);
    let leftArray = [];
    let rightArray = [];
    let oddIndex = 0;
    let oddIndexValue = 0;
    let sumedArr = [];
    if (inputArr.length > 2) {
      if (isOdd(inputArr.length)) {
        oddIndex = Math.round(inputArr.length / 2) - 1;
        leftArray = inputArr.slice(0, oddIndex);
        rightArray = inputArr.slice(oddIndex + 1, inputArr.length);
        rightArray = rightArray.reverse();
        oddIndexValue = arr[oddIndex];
      } else {
        oddIndex = inputArr.length / 2;
        leftArray = inputArr.slice(0, oddIndex);
        rightArray = inputArr.slice(oddIndex, inputArr.length);
        rightArray = rightArray.reverse();
        oddIndex = 0;
      }

      sumedArr = leftArray.map((num, idx) => num + rightArray[idx]);

      if (oddIndex > 0) {
        sumedArr.push(oddIndexValue);
      }

      sumedArr = cnvtSigleDigitArray(sumedArr);

      if (sumedArr.length > 2) {
        calcLove(sumedArr);
      } else {
        lovePercentage = createLovePercentage(sumedArr);
        return sumedArr;
      }
    } else {
      lovePercentage = createLovePercentage(sumedArr);
      return sumedArr;
    }
  };

  nameArr.map(e => {
    const iCount = countChars(fullname, e);
    //iCount !== 0 ?  : "";
    if (iCount !== 0) {
      charCounts.push(iCount);
    }
    fullname = fullname.replace(new RegExp(e, "g"), "");
    return charCounts;
  });

  calcLove(charCounts);
  return lovePercentage;
};

export default LoveCalc;
