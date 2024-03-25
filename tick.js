let interval = null;
onmessage = function(event) {
    if (event.data === "go") {
        interval = setInterval(() => {
            postMessage("tick");
        }, 100);
    }
    if (event.data === "stop" && intervalId !== null) {
        clearInterval(interval);
    }
};
