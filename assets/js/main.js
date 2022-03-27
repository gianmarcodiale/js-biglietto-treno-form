//creo la variabile con il bottone "genera"
const button_click = document.getElementById("myBtn");

//creo la funzione al click
button_click.addEventListener('click',
function() {
    
    //estrapolo il nome del passegero
    let input_name = document.getElementById("my_name");
    passenger_name = input_name.value;
    console.log(passenger_name);
    
    //estrapolo l'età del passegero
    let input_age = document.getElementById("form_passenger_age");
    passenger_age = input_age.value;
    console.log(passenger_age);

    //estrapolo i km che deve percorrere
    let input_km = document.getElementById("km_to_travel_form");
    km_to_travel = parseInt(input_km.value);
    console.log(km_to_travel);
    
    //creo la variabile con il prezzo standard del biglietto
    let price_per_km = 0.21;
    let standard_price = price_per_km * km_to_travel;
    console.log(standard_price);

    //creo la variabile con l'offerta
    let discount = "Tariffa Standard"

    //creo la condizione con per lo sconto
}

)
    