const buttonFetch = document.getElementById('button_fetch');

console.log(document.getElementsByClassName('button-fetch'))
buttonFetch.addEventListener("click", listPassword);

async function listPassword() {
    const ret = await fetch(process.env.LIST_PASSWORD_URL);

    console.log(ret)
}