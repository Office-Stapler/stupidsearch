function autocomplete(courses) {
    const searchInput = document.getElementById('myInput');
    searchInput.focus();
    let suggests = null;
    let suggestPanel = document.querySelector('.suggestions');
    searchInput.addEventListener('keyup', function() {
        suggestPanel.innerHTML = '';
        const input = searchInput.value.toUpperCase();
        if (input.length < 4 && input.length != 0) {
            suggests = Object.keys(courses).filter(function(course) {
                return course.startsWith(input);
            })
        } else if (input.length != 0) {
            if (input.slice(0,4) in courses) {
                suggests = courses[input.slice(0,4)].filter(function(course) {
                    return course.code.startsWith(input);
                })
            } else {
                suggestPanel.innerHTML = ''
            }
        }
        if (input.length != 0 && (input.length < 4 || input.slice(0,4) in courses)) {
            suggests.forEach(function(suggest) {
                const div = document.createElement('div');
                div.innerHTML = input.length < 4 ? suggest : suggest.code;
                div.addEventListener('click', () => {
                    searchInput.value = div.innerHTML;
                    suggestPanel.innerHTML = '';
                    searchInput.focus();
                });
                suggestPanel.appendChild(div);
            })
        }
        if (input === '') {
            suggestPanel.innerHTML = '';
        }

    });
}

fetch('http://127.0.0.1:5000/get_courses')
.then(resp => resp.json())
.then(courses => autocomplete(courses));
