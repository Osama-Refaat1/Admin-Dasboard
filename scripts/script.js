function changeTitle() {
    let title = document.getElementById('osama');
    title.innerHTML = 'Hello Osama';
}

let btn = document.getElementById('ti');
btn.addEventListener('click' , changeTitle);