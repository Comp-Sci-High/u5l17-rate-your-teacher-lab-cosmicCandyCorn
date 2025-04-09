// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page

const { create } = require("domain")
const { fetch } = require("undici-types")

      
const form = document.querySelector("form")

createform.addEventListener("Submit"), async (e)=>{
    e.preventDefault()

    const aTeacher = new formData (createform)
    const reqBody = Object.fromEntries(form)

const response = await fetch("/all"), {
  method: "POST",
headers: {
    "Content-Type": "application/json"
},
body:

}
