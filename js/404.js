(function () {
    var el = document.getElementById("missing-path");
    if (!el) return;
    el.textContent = window.location.pathname + window.location.search + window.location.hash;
})();
