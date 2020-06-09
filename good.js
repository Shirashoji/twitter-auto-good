setInterval(
    function () {
        var likes = document.body.querySelectorAll('div[data-testid="like"]');
        for (var i = 0; i < elems.length; i++) {
            likes[i].click();
        };
    }, 1000);
