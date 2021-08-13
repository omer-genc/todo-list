function addNewElement() {
    let girdi = document.querySelector('#girilenoge').value;


    let yapilacaklarDOM = document.querySelector('#yapilacaklar');
    let eklenecekHTML = `
    <li class="list-group-item list-group-item-action list-group-item-danger">
    <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
        ${girdi}
        <button type="button" class="btn-close float-end" aria-label="Close"></button>
    </li>
    `

    yapilacaklarDOM.innerHTML += eklenecekHTML
    console.log(eklenecekHTML)
}

function move(element) {
    let tasinacakElement = element.parentElement;
    let yapildiDOM = document.querySelector('#yapildi');
    yapildiDOM.append(tasinacakElement);

    // if (element.checked) {
    //     let yapildiDOM = document.querySelector('#yapildi');
    //     yapildiDOM.append(tasinacakElement);
    // } else {
    //     let yapilacakDOM = document.querySelector('#yapilacaklar');
    //     yapilacakDOM.append(tasinacakElement);
    // }
    console.log(tasinacakElement)
    element.parentElement.remove();

}

function remove(element){
    element.parentElement.remove();
}