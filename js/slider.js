document.addEventListener("DOMContentLoaded", function() {
    var slider1 = document.querySelector('#slider1')
    var value1 = document.querySelector('#result1')
    function change() {
        value1.innerHTML = slider1.value;
    }
    slider1.onChange = function() {
        change()
    }
})

