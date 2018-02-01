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
  //Crear referencias
const dbRefObject = firebase.database().ref().child('Historico');
//Sincronizar cambios objetos
/* dbRefObject.on('value', snap => console.log (snap.val()));//esto muestra en consola el objeto*/
 dbRefObject.on('value', snap => {
  preObject.innerText =JSON.stringify(snap.val(),null,3);
}) ;

}());
