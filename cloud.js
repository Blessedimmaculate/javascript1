function create () {
    let btn = document.createElement ('button');
    btn.innerHTML = "question";
    document.body.appendChild(btn);
}

function read() {
    let btn = document.readyState ("button");
    btn.innerHTML = "IMMACULATE";
    document.body.appendChild(btn);
}