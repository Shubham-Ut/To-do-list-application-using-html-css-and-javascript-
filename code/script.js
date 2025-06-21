
const cardDiv = document.getElementById("card");
const resultDiv = document.getElementById("result");
const addButton = document.querySelector(".button"); 

addButton.addEventListener("click", function () {
    const dateInput = cardDiv.querySelector('input[type="date"]').value;
    const taskInput = cardDiv.querySelector('input[type="text"]').value.trim();

    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

   
    const taskBox = document.createElement("div");
    taskBox.style.padding = "10px";
    taskBox.style.borderBottom = "1px solid #ccc";
    taskBox.style.display = "flex";
    taskBox.style.alignItems = "center";
    taskBox.style.justifyContent = "space-between";
    taskBox.style.flexWrap = "wrap";

    const taskText = document.createElement("span");
    taskText.textContent = `${dateInput ? "[" + dateInput + "] " : ""}${taskInput}`;
    taskText.style.flex = "1";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.style.margin = "5px";
    completeBtn.style.padding = "5px 10px";
    completeBtn.style.borderRadius = "10px";
    completeBtn.style.border = "1px solid green";
    completeBtn.style.backgroundColor = "#dff0d8";
    completeBtn.onclick = () => {
        taskText.style.textDecoration = "line-through";
        taskText.style.color = "green";
    };


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.margin = "5px";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.borderRadius = "10px";
    deleteBtn.style.border = "1px solid red";
    deleteBtn.style.backgroundColor = "#f8d7da";
    deleteBtn.onclick = () => {
        taskBox.remove();
        if (resultDiv.children.length === 0) {
            resultDiv.style.display = "none";
        }
    };

 
    taskBox.appendChild(taskText);
    taskBox.appendChild(completeBtn);
    taskBox.appendChild(deleteBtn);
    resultDiv.appendChild(taskBox);

  
    resultDiv.style.display = "block";

    cardDiv.querySelector('input[type="text"]').value = "";
});
