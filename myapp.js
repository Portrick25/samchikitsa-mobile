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

