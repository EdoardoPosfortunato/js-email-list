
const arrayEmail = [];
let li = '';
const listaEmail = document.getElementById("lista");
const btn = document.getElementById("btn");


for (let i = 1; i < 10; i++) {

    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")

        .then((resp) => {

            let currEmail = resp.data.response;
            li += `<li>${currEmail}</li>`

            // console.log(currEmail);
            arrayEmail.push(currEmail);
            
            
            if (i == 9) {
                listaEmail.innerHTML = li;
                console.log(arrayEmail)
            }

        });

}


btn.addEventListener("click", stampa)

function stampa() {
    console.log(arrayEmail)
}
