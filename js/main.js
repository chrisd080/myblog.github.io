function changeMode() {
    const screen = document.querySelectorAll(".screen");
    const wrapper = document.querySelectorAll(".wrapper");
    const container = document.querySelectorAll(".block-container");
    const item = document.querySelectorAll(".block-item");
    const button = document.querySelectorAll(".mode-button");

    if (
        document.getElementById("wrapper").getAttribute("class") ===
        "wrapper light"
        )  {
            makeDark(screen);
            makeDark(wrapper);
            makeDark(container);
            makeDark(item);
            makeDark(button);

        } else {
            makeLight(screen);
            makeLight(wrapper);
            makeLight(container);
            makeLight(item);
            makeLight(button); 
        }
    }


function makeDark(element){
    element.forEach(function(el) {
        el.classList.remove("light");
        el.classList.add("dark");
    });
}

function makeLight(element){
    element.forEach(function(el) {
        el.classList.remove("dark");
        el.classList.add("light");
    });
}