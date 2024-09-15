async function solve() {
    const response = await fetch("https://g1.globo.com/jogos/static/soletra.json");
    const json = await response.json();
    const words = json.word_list.map(item => item.word);

    const input = document.getElementById("input");
    const submit_button = [...document.getElementsByTagName("button")].find(elmt => elmt.innerText == "Confirmar");

    for (let word of words) {
        input.value = word;
        submit_button.click();
    }
};
