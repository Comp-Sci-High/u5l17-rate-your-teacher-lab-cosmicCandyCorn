// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page


const form = document.querySelector("form")

form.addEventListener("submit"), async (e)=>{
    e.preventDefault()
    const aTeacher = new formData (createform)
    const reqBody = Object.fromEntries(form)
    const response = await fetch("/add", {
  method: "POST",
  headers: {
"Content-Type": "application/json"
},
body:JSON.Stringify(reqBody)
})
const data = await response.json() 
console.log(data)
window.location.href = "/"
}
