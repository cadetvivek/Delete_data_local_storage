 // JavaScript code
 const form = document.getElementById('myForm');
 const output = document.getElementById('output');
 const deleteBtn = document.getElementById('deleteBtn');

 // Load existing data from local storage on page load
 window.addEventListener('DOMContentLoaded', () => {
   const data = localStorage.getItem('formData');
   if (data) {
     const formData = JSON.parse(data);
     displayFormData(formData);
   }
 });

 // Save data to local storage and display on screen
 form.addEventListener('submit', (e) => {
   e.preventDefault();
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const mobNumber = document.getElementById('mob_number').value;

   const formData = {
     name,
     email,
     mobNumber
   };

   // Retrieve existing data from local storage, if any
   const existingData = localStorage.getItem('formData');
   let existingFormData = existingData ? JSON.parse(existingData) : [];

   // Add new form data to the existing data array
   existingFormData.push(formData);

   // Save the updated data array to local storage
   localStorage.setItem('formData', JSON.stringify(existingFormData));

   // Clear the form inputs
   form.reset();

   // Display the form data on screen
   displayFormData(existingFormData);
 });

 // Display the form data on screen
 function displayFormData(formData) {
   output.innerHTML = '';
   formData.forEach(data => {
     const li = document.createElement('li');
     li.textContent = `Name: ${data.name}, Email: ${data.email}, Mobile Number: ${data.mobNumber}`;
     output.appendChild(li);
   });
 }

 // Delete data from local storage and clear the screen
 deleteBtn.addEventListener('click', () => {
   localStorage.removeItem('formData');
   output.innerHTML = '';
 });
