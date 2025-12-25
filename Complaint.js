document.getElementById("back").onclick = function(){
    localStorage.clear();
    window.location.reload();
}

if ((localStorage.user === undefined) || (localStorage.feedback === undefined)) {
    document.getElementById('send').onclick = function() {
        localStorage.user = document.getElementById('name').value;
        localStorage.feedback = document.getElementById('feedback').value;
        let printbBlock = document.getElementById("printBlock");    
        printbBlock.textContent = "Жалоба отправлена";
    }
}
else{
    let printbBlock = document.getElementById("printBlock");    
    printbBlock.textContent = "Жалоба отправлена";
    document.search.name.value = localStorage.user;
    document.search.feedback.value = localStorage.feedback;
}