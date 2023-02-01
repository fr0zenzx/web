
//var carlos = "carlangas"
var discrim2 = 0
var solucion = 0
var frente = 0
var soluc1 = 0
var soluc2 = 0
var datos = document.getElementById("datos");
var recorte1 = 0
//datos.innerHTML = carlos; 

function revisardiscriminante()
{
    var discrimalumno = document.getElementById("discriminante").value;
    
    if (discrimalumno==discrim2)
    { 
    datos.innerHTML = `

    <div  class="texto">   
            El discriminante que has introducido es correcto, pero existe error en los pasos finales. Revisa:        
            <BR><br>
            • Que hayas obtenido la raíz cuadrada del discriminante antes de derivar en los dos caminos.<br>
            • Que no hayas dividido el discriminante entre 2.<br>
            • Que hayas realizado las sumas  o restas en el penúltimo paso según la normal: números con el mismo signo se suman, números con diferente signo se restan y permanece el mayor.<br>
            • Que realices la división en el paso final entre el doble del valor de a. <br>
            <br>
            <br>
    </div>  
    `}
    else 
    {
    datos.innerHTML = `

    <div  class="texto">   
            El discriminante que has introducido está mal calculado. El valor debería estar entre <b><u> ${ discrim2 +100 } </b></u> y <b><u> ${ discrim2 -100 }. </b></u> Revisa los siguientes puntos:
            <BR><br>
            <UL>
            • Que la ecuación inicial esté ordenada en el formato ax²+bx+c=0<br>
            • Que hayas obtenido los valores correctos de a, b y c. Recuerda incluir los signos negativos.<br>
            • Que el cálculo de la sección del discriminante "b²" sea la cantidad elevada al cuadrado y no el doble de la misma.<br>
            • Que apliques de manera correcta la ley de los signos en la sección del discriminante "b²-4ac".<br>
            </UL>
            <BR>
        
        <div>
        `

    }
}
    
function revisarsolucion()
{
    //datos.innerHTML = `

    //`
    var frente = document.getElementById("frente").value;
    var volumen = document.getElementById("volumen").value;
    var solucion = document.getElementById("solucion").value;
    discrim2 = (-frente*28)*(-frente*28)-(8*frente*volumen);
    soluc1 = ((frente*28)+Math.sqrt(discrim2))/(4*frente);
    soluc2 = ((frente*28)-Math.sqrt(discrim2))/(4*frente);
    
    //console.log((Math.trunc(soluc2*10))/10);
    recorte1 = 35 - ((Math.trunc(solucion*10))/10)*2 - frente;
    
    recorte1 = (Math.trunc(recorte1*10))/10
    
    if ( (Math.trunc(solucion*10))/10 == (Math.trunc(soluc1*10))/10 || (Math.trunc(solucion*10))/10 == (Math.trunc(soluc2*10))/10 )
    {
        if (recorte1 <  0 )
        {  
        datos.innerHTML = `
       

        
        <br>
        <div style = "background:#ffff88;border-style: solid;border-width: thin;border-color: #888800" >
          <img src="images/warning.PNG"><br>
            Tu solución es correcta, sin embargo, la caja no se puede construir. Usa tu otra solución
        </div>
            `
            return
        }
        else 
        { 
            
    
        datos.innerHTML = `
        
        <div>
        <br>
        <div class="texto" style = "background:#88ff88;border-style: solid;border-width: thin;border-color: #008800" class="texto"  ><br>
            <center><img src="images/good.PNG">
            <br>Tu solución es correcta, pero es necesario conocer las dimensiones reales de tu papel cascarón para hacer una mejor aproximación. 
            Introcuce la medida con un decimal del Largo y Ancho de tu papel cascarón:<br>
            
            
            <div  style="margin: 10px">
                <br>
                    <label  for="lblargoreal"> Largo: </label> <input type="text" id="largoreal" style="width: 50px">
                    <label  for="lbanchoreal"> Ancho: </label> <input type="text" id="anchoreal" style="width: 50px">
            <br>
            <br>
                    <input type="button" onclick="construir()" VALUE="ENVIAR">
                    <br>
                    <br> 
            </div>



            </center>


    `   }
    //<br> Se ha hecho el cálculo de los valores correctos DISCR= ${discrim2} , SOL1=  ${soluc1} , SOL2 ${soluc2}
    } else {
        datos.innerHTML = `
        <br>
        
    <div  class="texto" style = "background:#ff8888;border-style: solid;border-width: thin;border-color: #880000" >
    <br>
        <center><img src="images/error.PNG">
        <BR>
        <br> Error en el cálculo. Introduce tu discriminante : <br> 
        <br>
       <input type="text" id="discriminante" >
        <br><br>

        <input type="button" onclick="revisardiscriminante()" VALUE="REVISAR">
        <br>
        <br> 
        </center>
    </div>
    `
    
    }
    

    
}//fin de funcion



function construir()
{   
    var largoreal = document.getElementById("largoreal").value;
    var anchoreal = document.getElementById("anchoreal").value;
    var solucion = document.getElementById("solucion").value;
    var frente = document.getElementById("frente").value;
    var voltol = 0;

    //Usar voltol como comodín para ordenar el largo y el ancho

    console.log("El largo original era");
    console.log(largoreal);
    console.log("El ancho original era");
    console.log(anchoreal);
        

    if (largoreal<anchoreal)
    {
        voltol = anchoreal;
        anchoreal = largoreal;
        largoreal = voltol; 
    }

    console.log("El largo ahora es");
    console.log(largoreal);
    console.log("El ancho ahora es");
    console.log(anchoreal);
    

    
//mostrar cuanto debemos recortar con medidas 28x35
    console.log(recorte1 );
    console.log(typeof Number(recorte1));
    
    //calcular volumen total con la solución y el recorte mostrados
    
    var volumen = document.getElementById("volumen").value;
    

    //asignar nuevo valor a recorte restando dos soluciones y nuevo frente
    recorte1 = largoreal - solucion - solucion - [volumen/((anchoreal-Number(solucion)-Number(solucion))*(Number(solucion)))];

    console.log("a continuación loque debemos recortar");
    console.log(recorte1);
    console.log(typeof Number(recorte1));

    

    voltol = (largoreal-Number(solucion)-Number(solucion)-Number(recorte1))*(anchoreal-Number(solucion)-Number(solucion))*(Number(solucion))
    console.log("Y luego el volumen después del recorte reducido");
    console.log(voltol);
    console.log(typeof Number(voltol));

    //Primero SUMAMOS O RESTAMOS RECORTE Y REDONDEAMOS. 12.7 > 11.7    
    //recorte1 = Number(recorte1) + (largoreal-35);
    //console.log(recorte1);
    //luego, agregamos al LARGO o quitamos el excedente del ancho entre dos ( porque serán dos cuadros)
    //recorte1 = recorte1 +  ((anchoreal-28)/2);
    //console.log(recorte1 );
    //Por último, truncamos la cantidad.
    //recorte1 = (Math.trunc(recorte1*10))/10
    //console.log(recorte1 );


    //Después, SUMAMOS O RESTAMOS A SOLUCIÓN.
    // SI ANCHO REAL ES MAS GRANDE (29,30) Restamos por mitad el excedente
   
    recorte1 = (Math.trunc(recorte1*10))/10
    datos.innerHTML = `
    <div  class="texto">
    A continuación, sigue las instrucciones para armar tu caja:<br><br>
       
    </div>

    
    <br>

    <div  class="texto">
        1) Primero debes recortar el exceso de papel cascarón ( ${ recorte1 } cm) para asegurar un frente de la medida que necesitas.
    </div> 
    
    <br> 

    <div class="contenedor">
        <img src="images/image1.PNG" />
        <div class="img1a">
            <b>${ recorte1 } cm</b>
        </div>
    </div>
  
    <br>
    <br>
    <i> Nota, el valor de ${ recorte1 } cm corresponde al sobrante de cascarón que no se usará
    <br> y se obtiene con la operación: 35-${ solucion } -${ solucion } - ${ frente } = ${ recorte1 }   </i>
    
    <br>
</div>

<br>

<div  class="texto">   
        2) Después, deberás marcar <b> ${ (Math.trunc(solucion*10))/10 } cm</b> en las esquinas como se muestra.  
    <BR>
    <br>

    <div class="contenedor">
        <img src="images/image2.PNG" /> 
        <div class="img2a"><b>${ solucion } cm</b>
        </div>
        <div class="img2b"><b>${ solucion } cm</b>
        </div>
    </div>

<div>
<br>
    3) Ahora, prolonga las líneas usando una escuadra formando un ángulo de 90°. Es importante que coloques la escuadra como se muestra 
    <BR>
    <br>
    <img src="images/image3.PNG">
    <br>
    <br>
    4) Se repite lo mismo en las cuatro esquinas y se procede a cortar los cuadros.
    <BR>
    <img src="images/image4.PNG">
    <br>
     <br>

     5) Dobla la figura como se muestra a continuación y procede a pegarla. Tu prisma deberá tener las medidas aproximadas de ${(Math.trunc(( largoreal-Number(solucion)-Number(solucion)-Number(recorte1) )*10))/10 } x ${(Math.trunc((anchoreal-Number(solucion)-Number(solucion))*10))/10} x ${Number(solucion)}
     
      
    <BR>
    <br>
    <img src="images/image5.PNG">
    <br>
     <br>

     6) Vacia la arena en la figura.
    <BR>
    <br>
    <img src="images/image6.PNG">
    <br>
     <br>
     <h5>Esta pagína fue elaborada para una práctica educativa de la Escuela Secundaria Técnica Número 16. Prohibida su reproducción o distribución sin autorización de su autor.</h5>

           
    `
}
