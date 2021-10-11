// chiediamo all'utente due parole in sucessione, 

let firstWord = prompt("scrivi una parola");
let secondWord = prompt("scrivi una seconda parola");


//verifichiamo quale delle due parole è piu lunga stampiamo in console un messaggio appropiato

if (firstWord.length > secondWord.length) {
    console.log(firstWord + " è più lunga di " + secondWord);
    console.log(firstWord + ": " + firstWord.length);
    console.log(secondWord + ": " + secondWord.length);
}else if (firstWord.length < secondWord.length){
    console.log(secondWord + " è più lunga di " + firstWord);
    console.log(firstWord + ": " + firstWord.length);
    console.log(secondWord + ": " + secondWord.length);

}else{
    console.log(secondWord + " ha la stessa lunghezza di " + firstWord);
    console.log(firstWord + ": " + firstWord.length);
    console.log(secondWord + ": " + secondWord.length);


}