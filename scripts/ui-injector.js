window.onload = async () => {
    let start_button = await new Promise(resolve => {
        // https://stackoverflow.com/a/61511955
        let get_element = () => [...document.getElementsByTagName("button")].find(btn => btn.innerText == "Iniciar");
        if (get_element() !== undefined) return resolve(get_element());
        let observer = new MutationObserver(mutations => {
            if (get_element() !== undefined) {
                observer.disconnect();
                resolve(get_element());
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });

    start_button.onclick = () => {
        let button = document.createElement("button");
        button.style = `
            position: fixed;
            bottom: 10px;
            left: 10px;
            width: calc(100vw - 20px);
            max-width: none;
        `;
        button.className = "button button--game svelte-1g6agin";
        button.innerText = "Resolver";
        button.onclick = solve;
        document.body.append(button);
    };
};
