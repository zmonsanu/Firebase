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
  var br = document.createElement("br");
  //var ulListReg2 =document.getElementById('reg2');
  var card = document.createElement("div");
  card.className ="card";
  card.style.width = "18rem";

  var card2 = document.createElement("div");
  card2.className ="card";
  card2.style.width = "18rem";

  var ulListReg2 = document.createElement("ul");
  ulListReg2.className ="list-group list-group-flush";

  var ulListReg1 = document.createElement("ul");
  ulListReg1.className ="list-group list-group-flush";

  var div = document.createElement("div");
  div.className="card-header";

  var div2 = document.createElement("div");
  div2.className="card-header";
  //Crear referencias
const dbRefObject = firebase.database().ref();
const dbRefHistorico = dbRefObject.child('Historico');

//Sincronizar cambios objetos
/* dbRefObject.on('value', snap => console.log (snap.val()));//esto muestra en consola el objeto*/
 dbRefHistorico.on('value', snap => {
preObject.innerText = JSON.stringify(snap.val(),null,3);
}) ;

//Sincronizar cambios en la lista de AnteriorRevision
div.innerText="Registro Nº 2";
  card.appendChild(div);
 const dbRefReg2= dbRefHistorico.child('2');
dbRefReg2.on('child_added', snap =>{
const li1 = document.createElement('li');
li1.className = "list-group-item";
if( snap.key !="ProximaRevison"){
  li1.innerText = snap.key + ': ' + snap.val();
  li1.id = snap.key;
  ulListReg2.appendChild(li1);
}
card.appendChild(ulListReg2);
card.appendChild(br);
});
document.getElementById("bloqueListas").appendChild(card);
document.getElementById("bloqueListas").appendChild(br);


div2.innerText="Próxima Revisión del Registro Nº 1";
  card2.appendChild(div2);
const dbRefProxRev = dbRefHistorico.child('1/ProximaRevison');
dbRefProxRev.on('child_added', snap =>{
  const li = document.createElement('li');
  li.className = "list-group-item";
  li.innerText = snap.key + ': ' + snap.val();
  li.id = snap.key;
  ulListReg1.appendChild(li);

  card2.appendChild(ulListReg1);
  card2.appendChild(br);
});
document.getElementById("bloqueListas").appendChild(card2);

//Sincronizar cambios en la lista de AnteriorRevision
/* const dbRefProxRev = dbRefHistorico.child('1');
dbRefAntRev.on('value', snap =>{
const li1 = document.createElement('li');
li1.className = "list-group-item";
li1.innerText = snap.key + ': ' + snap.val();
li1.id = snap.key;
ulListReg2.appendChild(li1);
});*/
/*
//Sincronizar cambios en la lista de ProximaRevision
const dbRefAntRev = dbRefHistorico.child('ProximaRevision');
dbRefProxRev.on('value', snap =>{
const li = document.createElement('li');
li.className = "list-group-item";
li.innerText = snap.key + ': ' + snap.val();
li.id = snap.key;
ulListProxRev.appendChild(li);
});*/

}());
