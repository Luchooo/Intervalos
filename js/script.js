var arrayInicios     = []; //Guardar todos los inicios digitados.
var arrayFines     	 = []; //Guardar todos los fines digitados.
var contIntervalos   = 0; //Contador de intervalos //Ilustrar
function init() 
{
  var inicio = $('#inicio').val(); //Obtener valor de inicio del intervalo.
  var fin 	 = $('#fin').val();	   //Obtener valor de fin del intervalo.
  insertarNumeros(inicio,fin);     //Ir a la función que guarda los números en las variables arrayInicios y arrayFines.
};

function insertarNumeros (inicio,fin) 
{
		
	if (Number(inicio) > Number(fin)) 
	{
		arrayInicios.push(fin);
		arrayFines.push(inicio);
	}
	else
	{
		arrayInicios.push(inicio); //Agregar inicios al array.
		arrayFines.push(fin); //Agregar inicios al array.
	};
	
	arrayInicios = arrayInicios.sort(function(a, b) {return a - b; });	// Metodo para ordenar números --> https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
	arrayFines = arrayFines.sort(function(a, b) {return a - b; }); //Ordenar arrayFines.	
	imprimirIntervalos(inicio,fin);
	
	
};

function imprimirIntervalos (inicio,fin) 
{
	contIntervalos++;
	$( "#intervalos" ).append( "<p>Intervalo No " + contIntervalos + ": Inicio: " + inicio + " , Fin:" + fin + "</p>" )  
	$('#inicio').val("").focus();
	$('#fin').val("");
};

$('#ruta').click(function(event) 
{
	if (arrayInicios.length > 0 ) 
	{
		for (var i = 0; i <= arrayInicios.length; i++) 
		{
			
			if (Number(arrayFines[i]) >= Number(arrayInicios[i+1])) 
			{
				arrayInicios.splice(i+1,1);
				arrayFines.splice(i,1);
				i=-1;
			};
		};
		swal("Ruta Optima!", "Inicio(s): " + arrayInicios + " Fin(es): " + arrayFines, "success")
	}
	else
	{
		swal("Error!", "Digite mínimo un intervalo!", "error")
	};
	
});



