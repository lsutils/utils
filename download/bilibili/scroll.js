function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    for (i = 0; i < 1000; i++) {
        await sleep(1000);
        window.scrollTo(0, document.documentElement.scrollHeight);
    }
}

example();
