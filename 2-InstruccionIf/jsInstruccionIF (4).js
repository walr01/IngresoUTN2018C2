function mostrar()
{
//tomo la edad  

var edad; 

edad = document.getElementById("edad").value;

if(!edad < 13 || edad >17)
{

alert("adolescente");

}


else
{
alert("menor de edad o mayor de edad");

}

}
//FIN DE LA FUNCIÓN