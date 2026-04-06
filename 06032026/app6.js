const listaDinamica = document.querySelector("#lista");

// creamos un li
const li = document.createElement("li");
// le asignamos un texto
li.textContent = "Elemento 1";
// lo agregamos a la lista
listaDinamica.appendChild(li);

// creamos otro li
const li2 = document.createElement("li");
// le asignamos un texto
li2.textContent = "Elemento 2";
// lo agregamos a la lista
listaDinamica.appendChild(li2);

// creamos otro lis con un texto diferente
const li3 = document.createElement("li");
li3.textContent = "Elemento 3";
listaDinamica.appendChild(li3);