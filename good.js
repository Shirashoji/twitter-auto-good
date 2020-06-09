setInterval(
    function () {
        var elems = document.body.querySelectorAll('div[data-testid="like"]');
        for (var i = 0; i < elems.length; i++) {
            elems[i].click();
        };
    }, 1000);
