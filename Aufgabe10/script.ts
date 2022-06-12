declare var Artyom: any;
window.addEventListener("load", function (): void {
    //Konstante Variable für das Eingabefeld festlegen
    const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
    //Elemtent mit der Id todoWrapper wird herausgesucht und als Variable abgelegt
    const wrapper: HTMLElement = document.getElementById("todoWrapper");

    //Variablen in der die Anzahl der offenen und erledigten Tasks gespeichert wird
    let todoCount: number = 0;
    let openCount: number = 0;
    let doneCount: number = 0;

    //mit einem Eventlistener prüfen ob Enter gedrückt wurde 
    input.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.key === "Enter") {
            let todoText: string = input.value;
            createToDo(todoText);
            clearInput();
        }
    });

    // Wert für Counter wird auf Wert von todoCount gesetzt
    function updateCounter(): void {
        document.querySelector("#counterToDos").innerHTML = String(todoCount);

    }
    // Wert für open Counter wird auf Wert von openCount gesetzt
    function updateOpenCounter(): void {
        document.querySelector("#counterOpen").innerHTML = String(openCount);

    }
    // Wert für done Counter wird auf Wert von doneCount gesetzt
    function updatedoneCounter(): void {
        document.querySelector("#counterDone").innerHTML = String(doneCount);
    }

    // Eingabefeld leeren wenn auf Trash Button gedrückt wird
    function clearInput(): void {
        input.value = "";
    }

    function createToDo(todoText: string): void {
        //Counter wird hochgezählt wenn Aufgabe in die Liste gefügt wird
        todoCount++;
        openCount++;
        updateCounter();
        updateOpenCounter();
        updatedoneCounter();

        // Vier HTML ELemente werden created
        const todoItem: HTMLDivElement = document.createElement("div");
        const checkbox: HTMLInputElement = document.createElement("input");
        const label: HTMLElement = document.createElement("label");
        const trashButton: HTMLElement = document.createElement("i");



        // an das todoItem wird die Classe "todoItem" hinzugefügt
        todoItem.className = "todoItem";
        //für die Checkbox wird der Typ "checkbox" definiert
        checkbox.type = "checkbox";
        //der Checkbox wird die Klasse "checkbox" hinzugefügt
        checkbox.className = "checkBox";
        //an die Checkbox wird ein Eventlistener angehängt, hier wird nun überprüft ob drauf geklickt wurde und je nachdem erhöhen oder verringern
        //sich die done Counter/ open Counter
        checkbox.addEventListener("click", function (event: Event): void {
            let isChecked: boolean = checkbox.checked;

            if (isChecked === true) {
                doneCount++;
                openCount--;
            } else {
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
        trashButton.addEventListener("click", function (): void {
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

    function deleteItem(item: HTMLElement): void {
        wrapper.removeChild(item);

        // Counter wird um 1 verringert wenn der Trash Button gedrückt wird
        todoCount--;
        updateCounter();
    }

});