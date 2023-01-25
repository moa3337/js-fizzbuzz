const listEl = document.getElementById("list");

console.log('inizio ciclo');

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0){
        listEl.innerHTML += '<li class="box number">${i}</li>';
    } else {
        listEl.innerHTML += '<li class="box fizz">${i}</li>';

    //} else if {
        //listEl.innerHTML += '<li class="box buzz">${i}</li>';

    //} else {
        //listEl.innerHTML += '<li class="box fizzbuzz">${i}</li>';
    }

}

console.log('fini ciclo');