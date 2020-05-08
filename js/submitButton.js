const submit = document.getElementById("mySubmit");

const baseURL = 'http://localhost:5000'

function getInfo() {
    const input = document.getElementById("myInput");
    let reqURL = baseURL + `/info?code=${input.value}`
    fetch(reqURL)
    .then(req => req.json())
    .then(resp => {
        if (resp.hasOwnProperty('name')) {
            const courseCode = document.querySelector('.main-info');
            const overviewElement = document.querySelector('.overview');
            const termsElement = document.querySelector('.terms')
            let suggestPanel = document.querySelector('.suggestions');
            
            termsElement.innerHTML = '<h1>Terms</h1>'
            courseCode.innerHTML = ''
            overviewElement.innerHTML = '<h1>Overview</h1>'
            code = input.value;
            courseCode.innerHTML = `<h1>About ${code.toUpperCase()}</h1>`;
            let name = document.createElement('p');
            name.innerHTML = resp.name;
            courseCode.appendChild(name);

            let overview = document.createElement('p');
            overview.innerHTML = resp.overview;
            overviewElement.appendChild(overview);

            let terms = document.createElement('p');
            terms.innerHTML = resp.terms;
            termsElement.appendChild(terms);
            
            input.value = ''
            suggestPanel.innerHTML = ''
        }
    });
}

submit.addEventListener('click', getInfo);

window.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        submit.click()
    }
});