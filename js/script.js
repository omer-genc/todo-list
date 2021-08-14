function addNewElement() {
    let girdi = document.querySelector('#girilenoge').value;
    var toastLiveExample = document.getElementById('liveToast')

    if (girdi === "") {
        var toast = new bootstrap.Toast(toastLiveExample)
        
        toast.show()


    } else {


        let yapilacaklarDOM = document.querySelector('#yapilacaklar');
        let eklenecekHTML = `
        <li class="list-group-item list-group-item-action list-group-item-danger">
        <input class="form-check-input me-1" type="checkbox" aria-label=""onchange="move(this)">
        ${girdi}
        <button type="button" class="btn-close float-end"aria-label="Close" onclick="remove(this)"></button>
        </li>
        `

        yapilacaklarDOM.innerHTML += eklenecekHTML

    }
}

function move(element) {
    let tasinacakElement = element.parentElement;


    if (element.checked) {
        let yapildiDOM = document.querySelector('#yapildi');
        yapildiDOM.append(tasinacakElement);
    } else {
        let yapilacakDOM = document.querySelector('#yapilacaklar');
        yapilacakDOM.append(tasinacakElement);
    }
    console.log(tasinacakElement)


}

function remove(element) {
    element.parentElement.remove();
}