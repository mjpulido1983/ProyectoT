// function validate() {
      
//     if( formulario.nombre == "" ) {
//        alert( "Please provide your name!" );
//        formulario.nombre.focus() ;
//        return false;
//     }
//     if( document.myForm.EMail.value == "" ) {
//        alert( "Please provide your Email!" );
//        document.myForm.EMail.focus() ;
//        return false;
//     }
//     if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
//        document.myForm.Zip.value.length != 5 ) {
       
//        alert( "Please provide a zip in the format #####." );
//        document.myForm.Zip.focus() ;
//        return false;
//     }
//     if( document.myForm.Country.value == "-1" ) {
//        alert( "Please provide your country!" );
//        return false;
//     }
//     return( true );
//  }

function mostrar() {
    let user,contra,nom,ed,i,
    i= 1;
    user= "ADMIN" ;
    contra = "12345"; 
    nom = document.getElementById('nombre').value;
    ed = document.getElementById('password').value;
    
  if (nom === user && ed === contra) {
    //  alert ('bienvenid@ al sistema'+ nom );
         window.location="https://www.google.com/";
        
  }   
  
       else if (i < 3) {
       i ++ ;
       alert ('ATENCIÓN datos erroneos quedan:' );
             
} 
  else  {
    alert ('no vuelva por aquí ');
        

 }
    // else {
  //   alert("Por favor ingrese, nombre de usuario y contraseña correctos:" +  nom);
  //   return false     }

}



    