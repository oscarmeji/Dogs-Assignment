const $ = document.querySelector.bind(document);

function showImage(event){
    var breed = this.innerText;
    var priorSelected = $('.selected')
    this.classList.add('selected');
    if(priorSelected){
        priorSelected.className = ' ';
    }
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(r=>r.json())
    .then(data => {
        $(`#dog`).src = data.message;
    });
}

function createButton(txt){
    var btn =document.createElement(`button`);
    btn.innerText = txt;
    $(`#button`).appendChild(btn);
    btn.onclick = showImage;
}

window.onload = function(){
    this.fetch('https://dog.ceo/api/breeds/list/all')
    .then(r=>r.json())
    .then(data => {
        Object.keys(data.message)
            .forEach(createButton)
    });
}