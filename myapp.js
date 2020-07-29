const skypeformMobile = document.querySelector('#skypeuserMobile');
const zoomformMobile = document.querySelector('#zoomuserMobile');
const whatsappformMobile = document.querySelector('#whatsappuserMobile');




// database setup for homeopathic teleconsultation
//saving data

skypeformMobile.addEventListener('submit', (e) => {
   e.preventDefault();
   db.collection('skypeid').add({
     name: skypeformMobile.name.value,
     userid: skypeformMobile.skypeuserid.value,
   });
   alert("data is uploaded successfully. we will contact you soon")
})


zoomformMobile.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('zoom').add({
    name: zoomformMobile.name.value,
    userid: zoomformMobile.zoomuserid.value,
  });
  alert("data is uploaded successfully. we will contact you soon")
})


whatsappformMobile.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('whatsapp').add({
    name: whatsappformMobile.name.value,
    userid: whatsappformMobile.Wno.value,
  });
  alert("data is uploaded successfully. we will contact you soon")
})



const skypeform = document.querySelector('#skypeuser');
const zoomform = document.querySelector('#zoomuser');
const whatsappform = document.querySelector('#whatsappuser');




// database setup for homeopathic teleconsultation
//saving data

skypeform.addEventListener('submit', (e) => {
   e.preventDefault();
   db.collection('skypeid').add({
     name: skypeform.name.value,
     userid: skypeform.skypeuserid.value,
   });
   alert("data is uploaded successfully. we will contact you soon")
})


zoomform.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('zoom').add({
    name: zoomform.name.value,
    userid: zoomform.zoomuserid.value,
  });
  alert("data is uploaded successfully. we will contact you soon")
})


whatsappform.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('whatsapp').add({
    name: whatsappform.name.value,
    userid: whatsappform.Wno.value,
  });
  alert("data is uploaded successfully. we will contact you soon")
})

