// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page




const form = document.querySelector("form")

createForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const ratingg = new formData(createForm)
  const reqBody = Object.fromEntries(ratingg)

  const response = await fetch("/add/teacher", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reqBody)
  })
  const data = await response.json()
  console.log(data)
  window.location.href = "/"
})



