//rogramma che genera i numeri da 1 a 100,
//ma che per i multipli di 3 stampi in console "Fizz"
//al posto del numero e per i multipli di 5 stampi "Buzz".
//"FizzBuzz" Per i numeri che sono sia multipli di 3 che di 5.

// AGGANCIO ALLA LISTA DEL HTML
const listEl = document.getElementById("list")

// IL CICLO CHE GENERA I NUMERI
for (let i = 1; i <= 100; i++){
    let listItem; 
    // multipli di 3 e di 5
    if (
        (i % 5 == 0) &&
        (i % 3 == 0)
    ) {
        //console.log("fizzbuzz");
        listItem = '<li class="box fizzbuzz">fizzbuzz</li>';
    
    // multipli di 3
    } else if (i % 3 == 0){
        //console.log("fizz");
        listItem = '<li class="box fizz">fizz</li>';
    
    // multipli di 5    
    } else if (i % 5 == 0){
        //console.log("buzz");
        listItem = '<li class="box buzz">buzz</li>';

    } else  {
        //console.log(i);
        listItem = '<li class="box">${i}</li>';
    }
}

listEl.innerHTML += listItem
