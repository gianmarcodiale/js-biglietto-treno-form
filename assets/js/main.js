// creo la variabile con il bottone "genera"
const button_generate = document.getElementById("myBtn");

// creo la funzione al click
button_generate.addEventListener('click',
    function() {
    
        // estrapolo il nome del passegero
        let input_name = document.getElementById("my_name");
        passenger_name = input_name.value;
        console.log(passenger_name);
    
        // estrapolo l'età del passegero
        let input_age = document.getElementById("form_passenger_age");
        passenger_age = input_age.value;
        console.log(passenger_age);

        // estrapolo i km che deve percorrere
        let input_km = document.getElementById("km_to_travel_form");
        km_to_travel = parseInt(input_km.value);
        console.log(km_to_travel);
    
        // creo la variabile con il prezzo standard del biglietto
        let price_per_km = 0.21;
        let standard_price = price_per_km * km_to_travel;
        console.log(standard_price);

        // creo la variabile con l'offerta
        let discount = "Tariffa Standard"

        // creo la condizione con per lo sconto
        if (passenger_age == "Minore") {
            standard_price = (standard_price - (standard_price * 0.2));
            discount = "Sconto Minori";
        } else if (passenger_age == "Over 65") {
            standard_price = (standard_price - (standard_price * 0.4));
            discount = "Sconto Over 65";
        } else {
            (standard_price);
        }

        // creo le variabili per CP e wagon
        let wagon = Math.floor(Math.random(1) * 10);
        let cp_code = Math.floor(Math.random(1) * 10000);

        // inserisco i dati nell'HTML
        document.getElementById("passenger_name").innerHTML = passenger_name;
        document.getElementById("discount").innerHTML = discount;
        document.getElementById("wagon").innerHTML = wagon;
        document.getElementById("cp_code").innerHTML = cp_code;
        document.getElementById("ticket_price").innerHTML = standard_price.toFixed(2);

        // mostro o nascondo il biglietto
        let ticket_div = document.getElementById("your_ticket");
        ticket_div.classList.remove("d-none");

    }
);

// tasto annulla
const clear_btn = document.getElementById("clear_btn");

// creo la funzione per il clear
clear_btn.addEventListener("click", 
    function() {
        document.getElementById("passenger_name").innerHTML = "";
        document.getElementById("discount").innerHTML = "";
        document.getElementById("wagon").innerHTML = "";
        document.getElementById("cp_code").innerHTML = "";
        document.getElementById("ticket_price").innerHTML = "";

        document.getElementById("my_name").value = "";
        document.getElementById("km_to_travel_form").value = "";
        document.getElementById("form_passenger_age").value = "";

        let ticket_div = document.getElementById("your_ticket");
        ticket_div.classList.add("d-none");
    }
)
    