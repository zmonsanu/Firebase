(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBDav_7PBwRbE0QTCTidMDZL4bMe87Gqs",
    authDomain: "mecanicapp-9caec.firebaseapp.com",
    databaseURL: "https://mecanicapp-9caec.firebaseio.com",
    projectId: "mecanicapp-9caec",
    storageBucket: "mecanicapp-9caec.appspot.com",
    messagingSenderId: "723241712931"
  };
  firebase.initializeApp(config);



  //----------Sincronizar objetos en Tiempo Real-------------------
  //Obtener elementos
  var preObject =document.getElementById('historico');
  var ulListProxRev =document.getElementById('proxRev');
  var ulListAntRev =document.getElementById('antRev');

  //Crear referencias
const dbRefObject = firebase.database().ref().child('Historico');
const dbRefProxRev = dbRefObject.child('ProximaRevision');
const dbRefAntRev = dbRefObject.child('AnteriorRevision');
//Sincronizar cambios objetos
/* dbRefObject.on('value', snap => console.log (snap.val()));//esto muestra en consola el objeto*/
 dbRefObject.on('value', snap => {
preObject.innerText = JSON.stringify(snap.val(),null,3);
}) ;
//Sincronizar cambios en la lista de AntiorRevision
dbRefAntRev.on('child_added', snap =>{
const li1 = document.createElement('li');
li1.className = "list-group-item";
li1.innerText = snap.key + ': ' + snap.val();
li1.id = snap.key;
ulListAntRev.appendChild(li1);
});

//Sincronizar cambios en la lista de ProximaRevision
dbRefProxRev.on('child_added', snap =>{
const li = document.createElement('li');
li.className = "list-group-item";
li.innerText = snap.key + ': ' + snap.val();
li.id = snap.key;
ulListProxRev.appendChild(li);
});

}());
