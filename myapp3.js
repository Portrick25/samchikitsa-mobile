const offAppform = document.querySelector('#offlineAppointment');




// database setup for doctor at your doorstep module
//saving data

offAppform.addEventListener('submit', (e) => {
   e.preventDefault();
   db.collection('offlineappointment').add({
     name: offAppform.name.value,
     phno: offAppform.phone.value,
     email: offAppform.email.value,
     address: offAppform.address.value,
     location: offAppform.city.value,
     date: offAppform.date.value,
     time: offAppform.time.value,

   });
   alert("data is uploaded successfully. we will contact you soon.")
})

