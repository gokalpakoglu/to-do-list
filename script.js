const addButton = document.getElementById("button");
const enteredTasks = document.getElementById("task");
const taskList = document.getElementById("tasklist");
let clearButton = document.querySelectorAll(".fa-times");
const clearAllButton = document.querySelector("#clearall");
 
 
addButton.addEventListener("click", addTask);
clearAllButton.addEventListener("click", deleteAllTasks);
 
function addTask() {
    // Eğer input kısmı null ise uyarı verilmesi
    if (enteredTasks.value == "")      
        alert("Please add some tasks!");
    // input kısmı null değilse
    else {       
        var li = document.createElement("li");
        li.innerText = enteredTasks.value
        var i = document.createElement("i");
        i.classList = "fas fa-times";
        li.appendChild(i);
        taskList.appendChild(li);
        enteredTasks.value = "";
        // her eleman eklendiğinde, sayfadan "fa-times" class 'ına sahip elementlerin seçilmesi
        // bunu yapmamızın sebebi silme işlemi için gerekli olması
        clearButton = document.querySelectorAll(".fa-times");
        // tüm eleman silme butonlarına dinleyici tanımlandı
        for (var i = 0; i < clearButton.length; i++) {
            clearButton[i].addEventListener("click", deleteTask);
        }
    }
}
 
// eleman silmek için gerekli fonksiyon
function deleteTask() {
    var option = confirm("Are you sure you want to delete the task?");
    if (option == true) {
        // eğer onaylanırsa tıklanan i değişkeninin üst etiketi silinsin
        var del = this.parentElement;
        del.remove();
    }
}
 
// tüm elemanları silmek için gerekli fonksiyon
function deleteAllTasks() {
    var option = confirm("Are you sure you want to delete all tasks?");
    if (option == true) {
        // eğer onaylanırsa tüm elemanlar silinsin
        var deleted = document.querySelectorAll("li");
        for (var j = 0; j < deleted.length; j++) {
            deleted[j].remove();
        }
    }
}