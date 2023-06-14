function retry() {
    window.location.href = '../easyMode'
}

let retry2 = document.querySelector('.retry');

retry2.addEventListener('click', function() {
    retry2();
});