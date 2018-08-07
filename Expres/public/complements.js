document
    .querySelector(".request-something")
    .addEventListener("click", function() {
        fetch("/complement")
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                document.querySelector(".complement").innerText = data.complement;
            })
            .catch(function(err) {
                console.error(err);
            });
    });