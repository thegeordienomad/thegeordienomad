//Logo mouseover animation 
const logo = document.querySelector('#monkey-riot span');

logo.addEventListener('mouseover', function(event) {
    event.target.style.color = 'black';
    event.target.style.cursor = 'default';
    zoomIn();
})

logo.addEventListener('mouseout', function(event){
    event.target.style.color = 'white';
})

function zoomIn(e) {
    logo.classList.add("zoom");
}

function zoomOut(e) {
    logo.classList.remove("zoom");
}
