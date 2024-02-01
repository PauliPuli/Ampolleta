<h1>Ampolleta jQuery</h1>
<p></p>
<h2>Proceso</h2>
<ol>
  <li>Crear la estructura del html: Botones e imágenes</li>
  <li>Colocar el cdn de jQuery al final del body</li>
  <li>Crear hoja de js</li>
</ol>
<p>*Al principio colocamos las 2 imágenes de la bombilla</p>
<p>**Le dimos ID a los botones (#on, #off) y a las imágenes (#bulbon, #bulboff)</p>
<p>En el js dentro del $(document) colocamos:</p>
<ul>
  <li> 
    $("#on").click(function(){
 $("#bulboff").hide();
  $("bulbon").show();
    })</li>
  <li> 
    $("#off").click(function(){
 $("#bulbon").hide();
  $("bulboff").show();
    })</li>
</ul>
<p>Al abrir el index nos mostraba ambas imágenes y después desaparecían. El docente nos sugerió que en vez de ello cambiáramos el src de la imágen con el atributo .attr</p>
