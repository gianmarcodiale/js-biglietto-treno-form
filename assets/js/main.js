// Definisco la funzione per estrapolare il nome
function user_name() {
    let passenger_name = document.getElementById("my_name").value;
    document.getElementById("passenger_name").innerHTML = passenger_name;
}

// creo variabili per il prezzo del biglietto
function km() {
    let ticket_price = document.getElementById("km_to_travel_form").value * 0.21;
    document.getElementById("ticket_price").innerHTML = ticket_price;
}

function age() {
    let user_age = document.getElementById("form_passenger_age").value;
    document.getElementById("discount").innerHTML = user_age;
}

