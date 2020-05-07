const submit = document.getElementById("mySubmit");

function getInfo() {
    const input = document.getElementById("myInput");
    console.log(input.value);
}

submit.addEventListener('click', getInfo);

submit.addEventListener('keyup', function(e) {
    console.log(e)
    if (e.keyCode === 13) {
        getInfo();
    }
});