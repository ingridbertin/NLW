let button = document.getElementById("add-time")
button.addEventListener('click', function(){
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value=""
    })
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}) 
