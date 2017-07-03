var array=[15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
function Espar(array){
par="";
impar="";
for(var i=0; i<array.length ;i++)
  {

    if(i%2==0)
      {
        par+=array[i]+" ";


        console.log("par"+par);
      }
    else
      {
        impar+=array[i]+" ";

       // return "impar"+impar;
        console.log("impaar"+impar);
      }


  }
 // return "par"+ par;
}
Espar(array);
document.write("numeros posición par :"+par);
document.write("numeros posición impar :"+impar);
