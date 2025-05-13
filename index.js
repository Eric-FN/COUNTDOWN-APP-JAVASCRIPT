let laranjas = 20;
let laranjasTotal = 20;
let titulo = document.getElementById("titulo");
let paragrafo = document.getElementById("paragrafo");

comerLaranja = (i) => {
  laranjas--;
  titulo.innerHTML = `Tenho ${laranjas} laranjas no bolso.`;
  paragrafo.innerHTML += `<div>comi <span style="background-color: rgb(${
    i * 25
  }, ${i * 15}, ${i * 10})">uma laranja.</span> Restam-me ${laranjas}</div>`;
};
// titulo.style.backgroundColor = "#ffaaaa";

// // setTimeout(() => {
// //   titulo.style.backgroundColor = "#aaffaa";
// // }, 3000);
// // setTimeout(() => {
// //   titulo.style.backgroundColor = "#ffffaa";
// // }, 6000);

titulo.innerHTML = `Tenho ${laranjas} laranjas no bolso.`;

for (let i = 1; i <= laranjasTotal; i++) {
  setTimeout(() => {
    comerLaranja(i);
  }, 500 * i);
}
