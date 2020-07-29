const offAppformMobile = document.querySelector('#offlineAppointmentMobile');




// database setup for doctor at your doorstep module
//saving data

offAppformMobile.addEventListener('submit', (e) => {
   e.preventDefault();
   db.collection('offlineappointment').add({
     name: offAppformMobile.name.value,
     phno: offAppformMobile.phone.value,
     email: offAppformMobile.email.value,
     address: offAppformMobile.address.value,
     location: offAppformMobile.city.value,
     date: offAppformMobile.date.value,
     time: offAppformMobile.time.value,

   });
   alert("data is uploaded successfully. we will contact you soon.")
})

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

