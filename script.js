function Hozzaad(){
    let termekNeve = document.getElementById('termeknev').value;
    let darabszam = parseInt(document.getElementById('dbszam').value);
    let egysegar = parseInt(document.getElementById('egysegar').value);
    let sor = `<li>${termekNeve} - ${egysegar} x ${darabszam} - ${egysegar*darabszam} Ft</li>`;
    document.getElementById('lista').innerHTML += sor;
    event.preventDefault();
}

// document.getElementById('gomb').addEventListener("click", function(){
//     let termekNeve = document.getElementById('termeknev').value;
//     let darabszam = parseInt(document.getElementById('dbszam').value);
//     let egysegar = parseInt(document.getElementById('egysegar').value);
//     let sor = `<li>${termekNeve} - ${egysegar} x ${darabszam} - ${egysegar*darabszam} Ft</li>`;
//     document.getElementById('lista').innerHTML += sor;
//     event.preventDefault();
// });