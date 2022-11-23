// ==========================SOAL NO 1==========================
const arr = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];
const arr2 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const arr3 = [6, 5, 2, 3, 5, 2, 2, 1, 5, 1, 3, 3, 3, 5];
const arr4 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

const pairCount = (ar) => {
  let output = 0;
  ar.sort((a, b) => a - b);
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      i++;
      output++;
    }
  }
  return output;
};
console.log(pairCount(arr2), "soal nomor 1");

// ==========================SOAL NO 2==========================
function charIsLetter(char) {
  if (typeof char !== "string") {
    return false;
  }

  return char.toLowerCase() !== char.toUpperCase();
}
const sentece = "Kemarin Shopia per[gi ke mall.";
const sentece2 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const sentece3 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const sentece4 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

function countWord(str) {
  let arrOutput = [];
  let arr = str.split(" ");
  let newArr = [];
  let counter = 0;
  let lastI = arr.pop();
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    for (let j = 0; j < el.length; j++) {
      const w = el[j];
      if (!charIsLetter(w)) {
        arrOutput.push(el);
      }
    }
  }
  for (let i = 0; i < lastI.length; i++) {
    const element = lastI[i];
    if (!charIsLetter(element)) {
      counter++;
    }
  }
  if (counter < 2) {
    arr.push(lastI);
  } else {
    arr.push(lastI);
    newArr.push(lastI);
  }
  arrOutput.forEach((el) => {
    if (el[el.length - 1] !== ",") {
      newArr.push(el);
    }
  });
  let newArr2 = newArr.filter((el) => !el.includes("-"));
  let total = arr.length - newArr2.length;
  return total;
}

console.log(countWord(sentece2), "soal nomor 2");
