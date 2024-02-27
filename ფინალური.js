// 2.1 კალკულატორი : 

// let x = parseInt(prompt ("შემოიტანე პირველი რიცხვი"));
// let y = parseInt(prompt ("შემოიტანე მეორე რიცხვი"));
// let z = prompt ("აირჩიეთ რომელიმე ოპერაცია + - * / % ");

// switch (z) {
//     case "+" :
//         z = x + y;
//         break;
//     case "*" :
//         z = x * y;
//         break;
//     case "/" :
//         z = x / y;
//         break;
//     case "-" :
//         z = x - y;
//         break;
//     case "%" :
//         z = x % y;
//         break;
// }

// alert(z)

// 2.2 გამოიცანი რიცხვი :
// ამ თამაშში პროგრამა აგენერირებს შემთხვევით რიცხვს მითითებული დიაპაზონიდან.
// მომხმარებლებს სთხოვენ გამოიცნონ რიცხვი. არასწორი რიცხვის შემთხვევაში პროგრამა
// მომხმარებელს აძლევს მინიშნებას (უფრო მაღალი/უფრო დაბალი). თამაში აკონტროლებს
// მცდელობების რაოდენობას და აჩვენებს შედეგს, როდესაც მომხმარებელი გამოიცნობს სწორ
// რიცხვს.

//  const randomNumber = Math.floor(Math.random() * 51) + 50;

//  let attempts = 5;
//  let usedNumbers = [];

//  function guessUserNumber() {
//    const userInputNumber = parseInt(prompt("გამოიცანით რიცხვი 50 დან 100 მდე :"));

//    if (isNaN(userInputNumber)) {
//      alert("გთხოვთ შემოიყვანეთ ვალიდური რიცხვი.");
//    } else {
//     attempts--;
//      if (userInputNumber === randomNumber) {
//        alert(`გილოცავთ თქვენ წარმატებით გამოიცანით რიცხვი ${5 - attempts} ცდაში.`);
//        usedNumbers.push(userInputNumber);
//        console.log(usedNumbers)
       
//      } else if (userInputNumber > randomNumber) {
//        alert(`სცადეთ უფრო დაბალი რიცხვი. დარჩენილი ცდების რაოდენობაა: ${attempts}`);
//        usedNumbers.push(userInputNumber);
//        console.log(usedNumbers)
//        checkAttemptsNumber();
//      } else {
//        alert(`ცადეთ უფრო მაღალი რიცხვი. დარჩენილი ცდების რაოდენობაა: ${attempts}`);
//        usedNumbers.push(userInputNumber);
//        console.log(usedNumbers)
//        checkAttemptsNumber();
//      }
//    }
//  }

//  function checkAttemptsNumber() {
//    if (attempts === 0) {
//      alert(`ვწუხვარ თქვენ ამოგეწურათ ცდების რაოდენობა. გამოსაცნობი რიცხვი იყო ${randomNumber}.`);
//    } else {
//     guessUserNumber();
//    }
//  }

//  checkGuess();


// 2.3 სიტყვების გამოცნობა - Hangman

// let myWordsArray = ["ძაღლი", "თევზი", "სპილო", "კენგოლი", "ბოთლი", "ბურთი"]

// function myRandomWord(){
//     const i = Math.floor(Math.random()*myWordsArray.length);
//     return myWordsArray[i];
// }

// let selectedWord = myRandomWord();

// console.log(`Original Word: ${selectedWord}`);

// function hideWord(word) {
//     return word.replace(/./g, '-');
//   }
  
// let hiddenWord = hideWord(selectedWord);
// let updatedWord =hiddenWord;


// document.getElementById("demo").innerHTML = hiddenWord;
  
// console.log(`Hidden Word: ${hiddenWord}`);

// let attempts = 0;

// function guessMyWord() {
//   let userInputLetter = prompt ("გამოიცანით ასო ")
//   let myIndex = selectedWord.indexOf(userInputLetter)

//   if (myIndex == -1) {
//     attempts++;
//     document.getElementById("demo").innerHTML = updatedWord;
//     console.log(attempts)
//   }
//     else {
//       updatedWord = replaceCharacters(updatedWord, myIndex, userInputLetter);      
//       document.getElementById("demo").innerHTML = updatedWord;
//   }
//   if (attempts == 10) {
//     alert("ვწუხვარ, ცდების მაქსიმალური რაოდენობა ამოგეწურათ")
//   }
//   if (selectedWord == updatedWord) {
//     alert (`გილოცავთ სიტყვა გამოიცანით, დაშვებული შეცდომების რაოდენობაა - ${attempts} `)
//   }
// }

// function replaceCharacters ( word, index, letter) {
//   const fistPart = word.slice(0, index);
//   const secondPart = word.slice(index+1);
//   return fistPart + letter + secondPart;
// }

