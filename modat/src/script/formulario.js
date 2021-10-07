

function mostrar() {
    let user,contra,nom,ed,i;
    i= 0;
    user= "ADMIN" ;
    contra = "12345"; 
    nom = document.getElementById('nombre').value;
    ed = document.getElementById('password').value;
    
  while(i<3){
  if (nom === user && ed === contra) {
  window.location="https://www.google.com/";
       i= i+1;
       return true
  } 
  else if (i<3) {
      
      alert ('ATENCIÓN datos erroneos' );
            return true
  }
   else  {
    alert ('no vuelva por aquí ');
 }
  // else {
  // alert("Por favor ingrese, nombre de usuario y contraseña correctos:" +  nom);
  //  return false     }
  }
}



    