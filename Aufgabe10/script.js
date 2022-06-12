window.addEventListener("load", function () {
    //Konstante Variable für das Eingabefeld festlegen
    const input = document.getElementById("toDo");
    //Elemtent mit der Id todoWrapper wird herausgesucht und als Variable abgelegt
    const wrapper = document.getElementById("todoWrapper");
    //Variablen in der die Anzahl der offenen und erledigten Tasks gespeichert wird
    let todoCount = 0;
    let openCount = 0;
    let doneCount = 0;
    //mit einem Eventlistener prüfen ob Enter gedrückt wurde 
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let todoText = input.value;
            createToDo(todoText);
            clearInput();
        }
    });
    // Wert für Counter wird auf Wert von todoCount gesetzt
    function updateCounter() {
        document.querySelector("#counterToDos").innerHTML = String(todoCount);
    }
    // Wert für open Counter wird auf Wert von openCount gesetzt
    function updateOpenCounter() {
        document.querySelector("#counterOpen").innerHTML = String(openCount);
    }
    // Wert für done Counter wird auf Wert von doneCount gesetzt
    function updatedoneCounter() {
        document.querySelector("#counterDone").innerHTML = String(doneCount);
    }
    // Eingabefeld leeren wenn auf Trash Button gedrückt wird
    function clearInput() {
        input.value = "";
    }
    function createToDo(todoText) {
        //Counter wird hochgezählt wenn Aufgabe in die Liste gefügt wird
        todoCount++;
        openCount++;
        updateCounter();
        updateOpenCounter();
        updatedoneCounter();
        // Vier HTML ELemente werden created
        const todoItem = document.createElement("div");
        const checkbox = document.createElement("input");
        const label = document.createElement("label");
        const trashButton = document.createElement("i");
        // an das todoItem wird die Classe "todoItem" hinzugefügt
        todoItem.className = "todoItem";
        //für die Checkbox wird der Typ "checkbox" definiert
        checkbox.type = "checkbox";
        //der Checkbox wird die Klasse "checkbox" hinzugefügt
        checkbox.className = "checkBox";
        //an die Checkbox wird ein Eventlistener angehängt, hier wird nun überprüft ob drauf geklickt wurde und je nachdem erhöhen oder verringern
        //sich die done Counter/ open Counter
        checkbox.addEventListener("click", function (event) {
            let isChecked = checkbox.checked;
            if (isChecked === true) {
                doneCount++;
                openCount--;
            }
            else {
                doneCount--;
                openCount++;
            }
            updateOpenCounter();
            updatedoneCounter();
        });
        // die Eingabe im Eingabefeld wird als label Inhalt gesetzt
        label.innerHTML = todoText; //input.value;
        // dem label wird die Klasse "divlabel" hinzugefügt
        label.className = "divLabel";
        // dem Trash Button wird die Klasse "fas fa-trash-alt" hinzugefügt
        trashButton.className = "fas fa-trash-alt";
        // dem wrapper wird das zuvor erzeugte Element "todoItem" angehängt
        wrapper.appendChild(todoItem);
        // dem todoItem wird das Element "checkbox" angehängt
        todoItem.appendChild(checkbox);
        // dem todoItem wird das Element "label" angehängt
        todoItem.appendChild(label);
        // dem TodoITem wird das Element "trashbutton" angehängt
        todoItem.appendChild(trashButton);
        // Eventlistener wird dem Trashbutton hinzugefügt, sobal dieser geklickt wird, wird die Aufgabe aus der Liste gelöscht
        trashButton.addEventListener("click", function () {
            deleteItem(todoItem);
            // beim Löschen einer Aufgabe wird nun zunächst geprüft ob es sich um eine done oder open gehandelt hat.
            // je nachdem wird der open Counter bzw der done Counter um 1 verringert
            if (checkbox.checked === true) {
                doneCount--;
            }
            // Bei else muss nichts mehr überprüft werden
            else {
                openCount--;
            }
            updateOpenCounter();
            updatedoneCounter();
        });
    }
    function deleteItem(item) {
        wrapper.removeChild(item);
        // Counter wird um 1 verringert wenn der Trash Button gedrückt wird
        todoCount--;
        updateCounter();
    }
});
//# sourceMappingURL=script.js.map