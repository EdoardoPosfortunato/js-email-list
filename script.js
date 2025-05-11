
let arrayEmail = [];
let li = '';
const listaEmail = document.getElementById("lista");
const btn = document.getElementById("btn");
let numeroEmailRichieste = 10


btn.addEventListener("click", stampa)

function stampa() {

    listaEmail.innerHTML = '';
    li = ``;
    arrayEmail = [];

    for (let i = 1; i <= numeroEmailRichieste; i++) {

        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")

            .then((resp) => {

                let currEmail = resp.data.response;
                li += `<li class="list-group-item">${currEmail}</li>`

                // console.log(currEmail);
                arrayEmail.push(currEmail);

                if (i == numeroEmailRichieste) {
                    listaEmail.innerHTML = li;
                    console.log(arrayEmail)
                }

            });

    }
}
