
const skypeformoff = document.querySelector('#skypeuseroff');
const zoomformoff = document.querySelector('#zoomuseroff');
const whatsappformoff = document.querySelector('#whatsappuseroff');




// database setup for homeopathic teleconsultation(offline)
//saving data

skypeformoff.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('skypeidoffline').add({
      name: skypeformoff.name.value,
      userid: skypeformoff.skypeuserid.value,
      time:skypeformoff.time.value
    });
    alert("data is uploaded successfully. we will contact you the time you have provided")
  })
  
  
  zoomformoff.addEventListener('submit', (e) => {
   e.preventDefault();
   db.collection('zoomoffline').add({
     name: zoomformoff.name.value,
     userid: zoomformoff.zoomuserid.value,
     time:zoomformoff.time.value
   });
   alert("data is uploaded successfully. we will contact you the time you have provided")
  })
  
  
  whatsappformoff.addEventListener('submit', (e) => {
   e.preventDefault();
   db.collection('whatsappoffline').add({
     name: whatsappformoff.name.value,
     userid: whatsappformoff.Wno.value,
     time:whatsappformoff.time.value
   });
   alert("data is uploaded successfully. we will contact you the time you have provided")
  })