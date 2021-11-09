const Log = document.getElementsByClassName("login");
var sign = document.getElementsByClassName("sign-in");
sign.addEventListener("mouseover", func());
function func() {
    Log.classList.toggle("log");
}

function goToNewPage() {
    var url = document.getElementById('list').value;
    if (url != 'none') {
        window.location = url;
    }
}
