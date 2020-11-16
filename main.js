window.addEventListener('load', main);

function main() {

    console.log('hello world');
}

function numberGenerator() {
    /**
     * let i = 0 = Initializer loopens, startpunkt
     * i < 25 = Condition, när loopen tar slut
     * i++ = Incrementor/decrementor. fortsätter upp eller ner.
     * 
     * Semicolon ; stänger varje statement
     */
    for (let z = 0; z < 25; z++) {
        console.log(z);
    }
}

function numbersOnPage() {

    const container = document.getElementById('looped-numbers');
    container.innerHTML = "";
    const listItems = []

    for (let jaha = 0; jaha < 10; jaha++) {
        container.innerText = jaha;
        console.log(jaha);


    }
}

