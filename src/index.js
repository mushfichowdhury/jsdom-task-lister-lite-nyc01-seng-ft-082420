document.addEventListener("DOMContentLoaded", () => {
});

// As a user, the task string that I provided should appear 
// on the DOM after the submit button has been activated.

const form = document.getElementById("create-task-form");
form.addEventListener('submit', function(e) {
  const text = document.getElementById("new-task-description").value
  const textDuration = document.getElementById("duration").value

  e.preventDefault()
  const taskLi  = document.createElement("li")
  taskLi.innerHTML = text+", Duration:"+ textDuration +'<button type="button" class="button">Edit</button>'
  

  const setColor = document.getElementById("highlight")
    if (setColor.value === "1"){
      taskLi.style.color = "green"
    }
    else if (setColor.value === "2"){
      taskLi.style.color = "orange"
    }
    else if (setColor.value === "3"){
      taskLi.style.color = "red"
    }

  const parentnode = document.querySelector("#tasks")
  parentnode.append(taskLi) 
})



// Adding new node

const deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener('click', function(e) {
  console.log("test is working!")

  // This removes ALL of the li's
  // const allLi = document.querySelectorAll('li')
  //for(const li of allLi){
  //  li.remove()

  // This removes the last li
  const parentUl = document.getElementById("tasks")
  parentUl.lastChild.remove()

})

const editButton = document.getElementsByClassName("button")
editButton.addEventListener("click", function(e) {
  console.log("test")
})