(function (doc) {

    const $input = doc.querySelector('input');
    const btn = doc.querySelector('button');
    const list = doc.getElementById('list');

    btn.addEventListener('click', handleClick, false);

    function handleClick() {
        axios.get(`https://api.github.com/users/${$input.value}/repos`)
            .then(function (resolve) {
                let repositories = resolve.data;

                for (repo of repositories) {
                    var li = doc.createElement('li');
                    li.innerHTML = repo.name;
                    list.appendChild(li);
                }
                $input.value = '';
            })
            .catch(function (reject) {
                console.log(reject);
            })
    }

})(document);