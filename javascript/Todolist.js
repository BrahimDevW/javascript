const btn = document.querySelector("#btn");
const input = document.querySelector("#ajout");

const tache = document.querySelector('.Tache');
const action = document.querySelector('.Action')
const affiche = document.getElementsByClassName('affiche');

let index = 0;

btn.addEventListener('click',(e) => {
    e.preventDefault()
    const div = document.createElement('div')
    div.classList.add("affiche" + index)
    tache.appendChild(div)  
    div.textContent = input.value
    const div1 = document.createElement('div')
    div1.classList.add("affiche" + index)
    action.appendChild(div1)
    div1.innerHTML = `<button id="edit" + index><span class="material-symbols-outlined">edit_square</span></button>
    <button id="valide"><span class="material-symbols-outlined">task_alt</span></button>
    <button id="delete"><span class="material-symbols-outlined">delete</span></button>`
    index++;
})




