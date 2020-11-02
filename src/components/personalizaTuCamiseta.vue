<template>
    <b-container fluid>
		<!-- <section id="typography"> -->
		  <div class="page-header">
		    <!-- <h3>Personaliza tu camiseta</h3> -->
		  </div>
		
		  <!-- Headings & Paragraph Copy -->
		  <b-row align-h="center">
		    <b-col class="columna" lg="4">
		    	<div class="tabbable"> <!-- Only required for left/right tabs -->
				  <b-nav class="nav nav-tabs">
				  	<b-nav-item class="active"><a href="#tab1" data-toggle="tab">Opciones Camisetas</a></b-nav-item>				    
				    <b-nav-item><a href="#tab2" data-toggle="tab">Avatares</a></b-nav-item>
				  </b-nav>
				  <div class="tab-content">
				     <div class="tab-pane active" id="tab1">
				     	<div class="well">
<!--					      	<h3>Tee Styles</h3>-->
<!--						      <p>-->
						      	<b-select @change="mostrarCamiseta" v-model="seleccion" :options="options">                        
				
								</b-select>	
<!--						      </p>-->								
					      </div>
					      <div class="well">
							<ul class="nav">
								<li class="color-preview" title="White" style="background-color:#ffffff;"></li>
								<li class="color-preview" title="Dark Heather" style="background-color:#616161;"></li>
								<li class="color-preview" title="Gray" style="background-color:#f0f0f0;"></li>
								<li class="color-preview" title="Charcoal" style="background-color:#5b5b5b;"></li>
								<li class="color-preview" title="Black" style="background-color:#222222;"></li>
								<li class="color-preview" title="Heather Orange" style="background-color:#fc8d74;"></li>
								<li class="color-preview" title="Heather Dark Chocolate" style="background-color:#432d26;"></li>
								<li class="color-preview" title="Salmon" style="background-color:#eead91;"></li>
								<li class="color-preview" title="Chesnut" style="background-color:#806355;"></li>
								<li class="color-preview" title="Dark Chocolate" style="background-color:#382d21;"></li>
								<li class="color-preview" title="Citrus Yellow" style="background-color:#faef93;"></li>
								<li class="color-preview" title="Avocado" style="background-color:#aeba5e;"></li>
								<li class="color-preview" title="Kiwi" style="background-color:#8aa140;"></li>
								<li class="color-preview" title="Irish Green" style="background-color:#1f6522;"></li>
								<li class="color-preview" title="Scrub Green" style="background-color:#13afa2;"></li>
								<li class="color-preview" title="Teal Ice" style="background-color:#b8d5d7;"></li>
								<li class="color-preview" title="Heather Sapphire" style="background-color:#15aeda;"></li>
								<li class="color-preview" title="Sky" style="background-color:#a5def8;"></li>
								<li class="color-preview" title="Antique Sapphire" style="background-color:#0f77c0;"></li>
								<li class="color-preview" title="Heather Navy" style="background-color:#3469b7;"></li>							
								<li class="color-preview" title="Cherry Red" style="background-color:#c50404;"></li>
							</ul>
						</div>			      
				     </div>				   
				    <div class="tab-pane" id="tab2">
				    	<div class="well">
							<b-input-group size="md" class="mt-3">
								<b-form-input placeholder="Agregar Texto Acá" id="text-string"></b-form-input>
								<b-input-group-append>
								<b-button id="add-text" variant="success">
									<b-icon icon="check" scale="2" aria-hidden="true"></b-icon>
								</b-button>
								</b-input-group-append>
							</b-input-group>
				    		<div class="input-append">
							  	<!-- <input class="span2" id="text-string" type="text" placeholder=""> -->
							  	<!-- <b-button style="height: 34px!important;" id="add-text" variant="outline-dark"  title="Agregar Texto">
								  	
								</b-button> -->
							  <hr>
							</div>
							<div id="avatarlist">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/1.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/2.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/3.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/4.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/5.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/6.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/7.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/8.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/9.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/10.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/11.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/12.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/13.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/14.png">
								<img style="cursor:pointer;" class="img-polaroid" src="../editor/img/Tripulante/15.png">
							</div>	
                            <div>
                                <hr>
							     <form action="" method="post" enctype="multipart/form-data">
                                     <input type="file" name="fileToUpload" id="fileToUpload">
                                     <input class="btn btn-primary" type="submit" value="Agregar Imágen" name="submit">
                                </form>
							</div>
				    	</div>				      
				    </div>
				  </div>
				</div>				
		    </b-col>		
		    <b-col class="columna pl-0" lg="5">		    
				<div align="center" style="min-height: 32px;">
					<div class="clearfix">
						<div class="btn-group inline pull-left" id="texteditor" style="display:none">
							<b-dropdown right text="Estilo" title="Tipografía">
								<b-dropdown-item class="setFont" data-font="Arial">
									<b-link tabindex="-1" href="#" class="Arial">Arial</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Helvetica">
									<b-link tabindex="-1"  href="#" class="Helvetica">Helvetica</b-link>
								</b-dropdown-item>
								<!-- <b-dropdown-divider></b-dropdown-divider> -->
								<b-dropdown-item class="setFont" data-font="Myriad Pro">
									<b-link tabindex="-1" href="#" class="MyriadPro">Myriad Pro</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Delicious">
									<b-link tabindex="-1" href="#" class="Delicious">Delicious</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Verdana">
									<b-link tabindex="-1" href="#" class="Verdana">Verdana</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Georgia">
									<b-link tabindex="-1" href="#" class="Georgia">Georgia</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Courier">
									<b-link tabindex="-1" href="#" class="Courier">Courier</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Comic Sans MS">
									<b-link tabindex="-1" href="#" class="ComicSansMS">Comic Sans MS</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Impact">
									<b-link tabindex="-1" href="#" class="Impact">Impact</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Monaco">
									<b-link tabindex="-1" href="#" class="Monaco">Monaco</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Optima">
									<b-link tabindex="-1" href="#" class="Optima">Optima</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Hoefler Text">
									<b-link tabindex="-1" href="#" class="HoeflerText">Hoefler Text</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Plaster">
									<b-link tabindex="-1" href="#" class="Plaster">Plaster</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Engagement">
									<b-link tabindex="-1" href="#" class="Engagement">Engagement</b-link>
								</b-dropdown-item>
								<b-dropdown-item class="setFont" data-font="Dosis">
									<b-link tabindex="-1" href="#" class="Dosis">Dosis</b-link>
								</b-dropdown-item>
							</b-dropdown>

							<b-button id="text-bold" title="Bold">
								<b-icon icon="type-bold" scale="1.2" aria-hidden="true"></b-icon>
							</b-button>
							<b-button id="text-italic" class="btn" data-original-title="Italic">
								<b-icon icon="type-italic" scale="1.2" aria-hidden="true"></b-icon>
								<!-- <img src="img/font_italic.png" height="" width=""> -->
							</b-button>
							<b-button id="text-strike" class="btn" title="Strike" style="">
								<b-icon icon="type-strikethrough" scale="1.2" aria-hidden="true"></b-icon>
								<!-- <img src="img/font_strikethrough.png" height="" width=""> -->
							</b-button>
							<b-button id="text-underline" class="btn" title="Underline" style="">
								<b-icon icon="type-underline" scale="1.2" aria-hidden="true"></b-icon>
								<!-- <img src="img/font_underline.png"> -->
							</b-button>
							<b-button class="btn" href="#" rel="tooltip" data-placement="top" data-original-title="Font Color">
								<input type="hidden" id="text-fontcolor" class="color-picker" size="7" value="#000000">
							</b-button>
							<b-button class="btn" href="#" rel="tooltip" data-placement="top" data-original-title="Font Border Color">
								<input type="hidden" id="text-strokecolor" class="color-picker" size="7" value="#000000">
							</b-button>
							<b-button id="flip" type="button" class="btn" title="Show Back View">
								<b-icon icon="arrow-left-right" scale="1.2" aria-hidden="true"></b-icon>
								<!-- <i class="icon-retweet" style="height:19px;"></i> -->
							</b-button>
							<b-button id="remove-selected" class="btn" title="Delete selected item">
								<b-icon icon="trash" scale="1.2" aria-hidden="true"></b-icon>
								<!-- <i class="icon-trash" style="height:19px;"></i> -->
							</b-button>
								<!--- Background <input type="hidden" id="text-bgcolor" class="color-picker" size="7" value="#ffffff"> --->
						</div>							  
						<div class="pull-right" align="" id="imageeditor" style="display:none">
							<div class="btn-group">										      
								<button class="btn" id="bring-to-front" title="Bring to Front"><i class="icon-fast-backward rotate" style="height:19px;"></i></button>
								<button class="btn" id="send-to-back" title="Send to Back"><i class="icon-fast-forward rotate" style="height:19px;"></i></button>
								<button id="flip" type="button" class="btn" title="Show Back View"><i class="icon-retweet" style="height:19px;"></i></button>
								<button id="remove-selected" class="btn" title="Delete selected item"><i class="icon-trash" style="height:19px;"></i></button>
							</div>
						</div>			  
					</div>												
				</div>					  		
				<!--	EDITOR      -->	
                <b-button id="flipback" variant="outline-success" title="Rotate View" style="padding-top: 8px; padding-bottom: 4px;">
					<b-icon icon="arrow-left-right" scale="1.4" aria-hidden="true"></b-icon>
				</b-button>
					<div id="shirtDiv" class="page mb-2"  style="width: inherit!important; position: relative; background-color: rgb(255, 255, 255);">
						<!-- <div v-if="seleccion == 0">
							<b-img v-if="visibleFront" name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/crew_front.png"></b-img>
							<b-img v-else name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/crew_back.png"></b-img>					
						</div>
						<div v-if="seleccion == 1">
							<b-img v-if="visibleFront" name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/mens_longsleeve_front.png"></b-img>
							<b-img v-else name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/mens_longsleeve_back.png"></b-img>					
						</div>
						<div v-if="seleccion == 2">
							<b-img v-if="visibleFront" name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/mens_hoodie_front.png"></b-img>
							<b-img v-else name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/mens_hoodie_back.png"></b-img>					
						</div>
						<div v-if="seleccion == 3">
							<b-img v-if="visibleFront" name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/mens_tank_front.png"></b-img>
							<b-img v-else name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/mens_tank_back.png"></b-img>					
						</div>
						<div v-if="seleccion == 4">
							<b-img v-if="visibleFront" name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/womens_crew_front.png"></b-img>
							<b-img v-else name="tshirtview" id="tshirtFacing" src="https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/womens_crew_back.png"></b-img>					
						</div> -->

						<!-- <b-col id="drawingArea" style="position: absolute;top: 0px;left: 0px;z-index: 10;width: 540px;height: 640px;">					 -->
							<canvas id="tcanvas" width=530 height=630 class="hover" style="-webkit-user-select: none;"></canvas>
						<!-- </b-col> -->
					</div>
		    </b-col>
		    <b-col class="columna" lg="3">
		      <div  style="width: 265px;" class="well">
		      	<h4>Tallas</h4>
				<div style="width: 250px;" class="text-right">
					<b-form-checkbox size="lg" v-model="checkedOptions.checked_s" name="check-button" switch>
						S <input :disabled="!checkedOptions.checked_s" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px;" value="1" type="number">
					</b-form-checkbox>
					<hr style="margin:5px!important;" />
				</div>	
				<div style="width: 250px;" class="text-right">
					<b-form-checkbox size="lg" v-model="checkedOptions.checked_m" name="check-button" switch>
						M <input :disabled="!checkedOptions.checked_m" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px;" value="1" type="number">
					</b-form-checkbox>
					<hr style="margin:5px!important;" />
				</div>	
				<div style="width: 250px;" class="text-right">
					<b-form-checkbox size="lg" v-model="checkedOptions.checked_l" name="check-button" switch>
						L <input :disabled="!checkedOptions.checked_l" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px;" value="1" type="number">
					</b-form-checkbox>
					<hr style="margin:5px!important;" />
				</div>
				<div style="width: 250px;" class="text-right">
					<b-form-checkbox size="lg" v-model="checkedOptions.checked_xl" name="check-button" switch>
						XL <input :disabled="!checkedOptions.checked_xl" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px;" value="1" type="number">
					</b-form-checkbox>
					<hr style="margin:5px!important;" />
				</div>
				<div style="width: 250px;" class="text-right">
					<b-form-checkbox size="lg" v-model="checkedOptions.checked_xxl" name="check-button" switch>
						XXL <input :disabled="!checkedOptions.checked_xxl" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px;" value="1" type="number">
					</b-form-checkbox>
					<hr style="margin:5px!important;" />
				</div>
			      <!-- <p>
			      	<table class="table">
			      		<tr>
			      			<td>

							  </td>
			      			<td align="right"><input min="0" style="width: 40px;" value="1" type="number"></td>
			      		</tr>
			      		<tr>
			      			<td><input type="checkbox">&emsp;M</td>
			      			<td align="right"><input min="0" style="width: 40px;" placeholder="1" type="number"></td>
			      		</tr>
			      		<tr>
			      			<td><input type="checkbox">&emsp;L</td>
			      			<td align="right"><input min="0" style="width: 40px;"  placeholder="1" type="number"></td>
			      		</tr>
			      		<tr>
			      			<td><input type="checkbox">&emsp;XL</td>
			      			<td align="right"><input min="0" style="width: 40px;"  placeholder="1" type="number"></td>
			      		</tr>
                        <tr>
			      			<td><input type="checkbox">&emsp;XXL</td>
			      			<td align="right"><input min="0" style="width: 40px;"  placeholder="1" type="number"></td>
			      		</tr>
			      	</table>			
			      	</p> -->
				<b-button variant="outline-primary" size="sm w-100"  style=" padding-left:8px;" @click="agregarAlCarro">
					Agregar al Carro <b-icon scale="1" icon="cart-check" aria-hidden="true"></b-icon>
				</b-button>
		      </div>		      		       		   
		    </b-col>
		
		  </b-row>
		
		<!-- </section> -->
    </b-container>
</template>

<script>
import '../editor/js/jquery.js';
import '../editor/js/bootstrap.min.js';
import '../editor/js/jquery.miniColors.min.js';
import '../editor/js/excanvas.js';
// import '../editor/js/tshirtEditor.js';

export default {
	data(){
		return{
			checkedOptions:{
				checked_s:false,
				checked_m:false,
				checked_l:false,
				checked_xl:false,
				checked_xxl:false
			},
			visibleFront:true,
			seleccion:0,
			options:[{value:0, text:'Manga Corta'},
					{value:1, text:'Manga Larga'},
					{value:2, text:'Sueter'},
					{value:3, text:'Franelilla'},
					{value:4, text:'Franela Corta'}]
		}
	},
	methods:{
		rotarCamiseta(){
			this.visibleFront = !this.visibleFront
		},
		mostrarCamiseta(){
			this.visibleFront = !this.visibleFront
			this.visibleFront = !this.visibleFront
		},
		agregarAlCarro(){
			alert("Se agregara al carro")
		}
	},
	mounted(){
		var canvas;
var tshirts = new Array(); //prototype: [{style:'x',color:'white',front:'a',back:'b',price:{tshirt:'12.95',frontPrint:'4.99',backPrint:'4.99',total:'22.47'}}]
var a;
var b;
var line1;
var line2;
var line3;
var line4;
 	$(document).ready(function() {
		//setup front side canvas 
 		canvas = new fabric.Canvas('tcanvas', {
		  hoverCursor: 'pointer',
		  selection: true,
		  selectionBorderColor:'blue'
		});
 		canvas.on({
			 'object:moving': function(e) {		  	
			    e.target.opacity = 0.5;
			  },
			  'object:modified': function(e) {		  	
			    e.target.opacity = 1;
			  },
			 'object:selected':onObjectSelected,
			 'selection:cleared':onSelectedCleared
		 });

		 
	 function getRandomNum(min, max) {
	    return Math.random() * (max - min) + min;
	 }
	 
	 function onObjectSelected(e) {	 
	    var selectedObject = e.target;
	    $("#text-string").val("");
	    selectedObject.hasRotatingPoint = true
	    if (selectedObject && selectedObject.type === 'text') {
	    	//display text editor	    	
	    	$("#texteditor").css('display', 'block');
	    	$("#text-string").val(selectedObject.getText());	    	
	    	$('#text-fontcolor').miniColors('value',selectedObject.fill);
	    	$('#text-strokecolor').miniColors('value',selectedObject.strokeStyle);	
	    	$("#imageeditor").css('display', 'block');
	    }
	    else if (selectedObject && selectedObject.type === 'image'){
	    	//display image editor
	    	$("#texteditor").css('display', 'none');	
	    	$("#imageeditor").css('display', 'block');
	    }
	  }
	 function onSelectedCleared(e){
		 $("#texteditor").css('display', 'none');
		 $("#text-string").val("");
		 $("#imageeditor").css('display', 'none');
	 }

	function resize(){    
		$("#tcanvas").outerHeight($(window).height()-$("#tcanvas").offset().top- Math.abs($("#tcanvas").outerHeight(true) - $("#tcanvas").outerHeight()));
	}
	$(document).ready(function(){
		resize();
		$(window).on("resize", function(){                      
			resize();
			canvas.width = $('.col-lg-5').width()
			console.log(canvas.width);
			canvas.renderAll();
			// console.log($('.col-lg-5').width())
		});
	});



		// piggyback on `canvas.findTarget`, to fire "object:over" and "object:out" events
 		canvas.findTarget = (function(originalFn) {
		  return function() {
		    var target = originalFn.apply(this, arguments);
		    if (target) {
		      if (this._hoveredTarget !== target) {
		    	  canvas.fire('object:over', { target: target });
		        if (this._hoveredTarget) {
		        	canvas.fire('object:out', { target: this._hoveredTarget });
		        }
		        this._hoveredTarget = target;
		      }
		    }
		    else if (this._hoveredTarget) {
		    	canvas.fire('object:out', { target: this._hoveredTarget });
		      this._hoveredTarget = null;
		    }
		    return target;
		  };
		})(canvas.findTarget);

 		canvas.on('object:over', function(e) {		
		  //e.target.setFill('red');
		  //canvas.renderAll();
		});
		
 		canvas.on('object:out', function(e) {		
		  //e.target.setFill('green');
		  //canvas.renderAll();
		});

		  
		  
		  

		  		var valueSelect = $("#tshirttype").val();
		$("#tshirttype").change(function(){
			valueSelect = $(this).val();
			$("img[name=tshirtview]").attr("src", $(this).val());
		console.log(valueSelect)
		});
		  
		  
		  

		 		 	 
		$('#add-text').click(function() {
			var text = $("#text-string").val();
		    var textSample = new fabric.Text(text, {
				left: fabric.util.getRandomInt(0, 200),
				top: fabric.util.getRandomInt(0, 400),
				fontFamily: 'helvetica',
				cornerStyle:'rect',
				cornerSize: 7,
				padding: 7,
				cornerStrokeColor:'transparent',
				// underline: true,
				// overline:true,
				angle: 0,
				fill: '#000000',
				scaleX: 0.5,
				scaleY: 0.5,
				fontWeight: '',
				hasRotatingPoint:true
		    });		    
            canvas.add(textSample);	
            canvas.item(canvas.item.length-1).hasRotatingPoint = true;    
            $("#texteditor").css('display', 'block');
            $("#imageeditor").css('display', 'block');
		  });
		  
	  	$("#text-string").keyup(function(){	  		
	  		var activeObject = canvas.getActiveObject();
		      if (activeObject && activeObject.type === 'text') {
		    	  activeObject.text = this.value;
		    	  canvas.renderAll();
		      }
			});
		  

		  
		fabric.Image.fromURL('https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/crew_front.png', function (image) {
			var offset = 50;
			var left = fabric.util.getRandomInt(0 + offset, 200 - offset);
	        var top = fabric.util.getRandomInt(0 + offset, 400 - offset);
			image.set({
				left: 0,
				top: 0,
				angle: 0,
				padding: 7,
				backgroundColor:'#FFF',
				selectable:false,
				cornerSize: 7,
				hasRotatingPoint:true
			});
			canvas.add(image);
		});
		  
		$('.color-preview').click(function(){
			canvas._objects[0].backgroundColor = $(this).css("background-color");
			// console.log(canvas._objects[0]._element.src = 'https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/crew_back.png');
			// console.log(canvas._objects[0])
			canvas.renderAll();
		});
		
		var frontBack = 'front'
		$("#flipback").click(function () {
			if (frontBack === "front") {
				frontBack = 'back';
			} else {
				frontBack = 'front';
			}
			canvas._objects[0]._element.src = `https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/crew_${frontBack}.png`;
			canvas.renderAll();
		});
		//   		$('#flipback').click(
			  
		//    	function() {console.log(valueSelect)	
        //        if (valueSelect === "../editor/img/crew_front.png") {
        //            if ($(this).attr("data-original-title") == "Show Back View") {
		// 	   		$(this).attr('data-original-title', 'Show Front View');			        		       
		// 	        $("#tshirtFacing").attr("src","../editor/img/crew_back.png");			        
		// 	        a = JSON.stringify(canvas);
		// 	        canvas.clear();
		// 	        try
		// 	        {
		// 	           var json = JSON.parse(b);
		// 	           canvas.loadFromJSON(b);
		// 	        }
		// 	        catch(e)
		// 	        {}
			        
		// 		}
		// 		else {
		// 	    	$(this).attr('data-original-title', 'Show Back View');			    				    	
		// 	    	$("#tshirtFacing").attr("src","../editor/img/crew_front.png");			    	
		// 	    	b = JSON.stringify(canvas);
		// 	    	canvas.clear();
		// 	    	try
		// 	        {
		// 	           var json = JSON.parse(a);
		// 	           canvas.loadFromJSON(a);			           
		// 	        }
		// 	        catch(e)
		// 	        {}
		// 	    }		
        //        }
        //        else if (valueSelect === "../editor/img/mens_longsleeve_front.png") {
		// 		   alert()

        //           if ($(this).attr("data-original-title") == "Show Back View") {
		// 	   		$(this).attr('data-original-title', 'Show Front View');			        		       
		// 	        $("#tshirtFacing").attr("src","../editor/img/mens_longsleeve_back.png");			        
		// 	        a = JSON.stringify(canvas);
		// 	        canvas.clear();
		// 	        try
		// 	        {
		// 	           var json = JSON.parse(b);
		// 	           canvas.loadFromJSON(b);
		// 	        }
		// 	        catch(e)
		// 	        {}
			        
		// 	    } else {
		// 	    	$(this).attr('data-original-title', 'Show Back View');			    				    	
		// 	    	$("#tshirtFacing").attr("src","../editor/img/mens_longsleeve_front.png");			    	
		// 	    	b = JSON.stringify(canvas);
		// 	    	canvas.clear();
		// 	    	try
		// 	        {
		// 	           var json = JSON.parse(a);
		// 	           canvas.loadFromJSON(a);			           
		// 	        }
		// 	        catch(e)
		// 	        {}
		// 	    }	
        //        }
        //        else if (valueSelect === "../editor/img/mens_tank_front.png") {
        //           if ($(this).attr("data-original-title") == "Show Back View") {
		// 	   		$(this).attr('data-original-title', 'Show Front View');			        		       
		// 	        $("#tshirtFacing").attr("src","../editor/img/mens_tank_back.png");			        
		// 	        a = JSON.stringify(canvas);
		// 	        canvas.clear();
		// 	        try
		// 	        {
		// 	           var json = JSON.parse(b);
		// 	           canvas.loadFromJSON(b);
		// 	        }
		// 	        catch(e)
		// 	        {}
			        
		// 	    } else {
		// 	    	$(this).attr('data-original-title', 'Show Back View');			    				    	
		// 	    	$("#tshirtFacing").attr("src","../editor/img/mens_tank_front.png");			    	
		// 	    	b = JSON.stringify(canvas);
		// 	    	canvas.clear();
		// 	    	try
		// 	        {
		// 	           var json = JSON.parse(a);
		// 	           canvas.loadFromJSON(a);			           
		// 	        }
		// 	        catch(e)
		// 	        {}
		// 	    }	
        //        }
        //        else if (valueSelect === "../editor/img/mens_hoodie_front.png") {
        //           if ($(this).attr("data-original-title") == "Show Back View") {
		// 	   		$(this).attr('data-original-title', 'Show Front View');			        		       
		// 	        $("#tshirtFacing").attr("src","../editor/img/mens_hoodie_back.png");			        
		// 	        a = JSON.stringify(canvas);
		// 	        canvas.clear();
		// 	        try
		// 	        {
		// 	           var json = JSON.parse(b);
		// 	           canvas.loadFromJSON(b);
		// 	        }
		// 	        catch(e)
		// 	        {}
			        
		// 	    } else {
		// 	    	$(this).attr('data-original-title', 'Show Back View');			    				    	
		// 	    	$("#tshirtFacing").attr("src","../editor/img/mens_hoodie_front.png");			    	
		// 	    	b = JSON.stringify(canvas);
		// 	    	canvas.clear();
		// 	    	try
		// 	        {
		// 	           var json = JSON.parse(a);
		// 	           canvas.loadFromJSON(a);			           
		// 	        }
		// 	        catch(e)
		// 	        {}
		// 	    }	
        //        }
		// 	   /*	if ($(this).attr("data-original-title") == "Show Back View") {
		// 	   		$(this).attr('data-original-title', 'Show Front View');			        		       
		// 	        $("#tshirtFacing").attr("src","img/crew_back.png");			        
		// 	        a = JSON.stringify(canvas);
		// 	        canvas.clear();
		// 	        try
		// 	        {
		// 	           var json = JSON.parse(b);
		// 	           canvas.loadFromJSON(b);
		// 	        }
		// 	        catch(e)
		// 	        {}
			        
		// 	    } else {
		// 	    	$(this).attr('data-original-title', 'Show Back View');			    				    	
		// 	    	$("#tshirtFacing").attr("src","img/crew_front.png");			    	
		// 	    	b = JSON.stringify(canvas);
		// 	    	canvas.clear();
		// 	    	try
		// 	        {
		// 	           var json = JSON.parse(a);
		// 	           canvas.loadFromJSON(a);			           
		// 	        }
		// 	        catch(e)
		// 	        {}
		// 	    }		*/
		// 	   	canvas.renderAll();
		// 	   	setTimeout(function() {
		// 	   		canvas.calcOffset();
		// 	    },200);	   	
        // });
		  

		$(".img-polaroid").click(function (e) {
			$("#texteditor").css('display', 'block');
	  		var el = e.target;
	  		/*temp code*/
	  		var offset = 50;
	        var left = fabric.util.getRandomInt(0 + offset, 200 - offset);
	        var top = fabric.util.getRandomInt(0 + offset, 400 - offset);
	        var angle = fabric.util.getRandomInt(-20, 40);
	        var width = fabric.util.getRandomInt(30, 50);
	        var opacity = (function(min, max){ return Math.random() * (max - min) + min; })(0.5, 1);
	        
	  		fabric.Image.fromURL(el.src, function(image) {
		          image.set({
		            left: left,
		            top: top,
		            angle: 0,
		            padding: 7,
		            cornerSize: 7,
	      	  		hasRotatingPoint:true
		          });
		          //image.scale(getRandomNum(0.1, 0.25)).setCoords();
		          canvas.add(image);
		        });
	  	});	  		  
	  	document.getElementById('remove-selected').onclick = function() {		  
		  var activeObject = canvas.getActiveObject(); 
		    //    var activeGroup = canvas.getActiveGroup();
		    if (activeObject) {
		      	canvas.remove(activeObject);
				$("#text-string").val("");
            	$("#texteditor").css('display', 'block');
		    }
		    else if (activeGroup) {
		      var objectsInGroup = activeGroup.getObjects();
		      canvas.discardActiveGroup();
		      objectsInGroup.forEach(function(object) {
		        canvas.remove(object);
		      });
		    }
	  	};
	  	document.getElementById('bring-to-front').onclick = function() {		  
		    var activeObject = canvas.getActiveObject(),
		        activeGroup = canvas.getActiveGroup();
		    if (activeObject) {
		      activeObject.bringToFront();
		    }
		    else if (activeGroup) {
		      var objectsInGroup = activeGroup.getObjects();
		      canvas.discardActiveGroup();
		      objectsInGroup.forEach(function(object) {
		        object.bringToFront();
		      });
		    }
	  	};
	  	document.getElementById('send-to-back').onclick = function() {		  
		    var activeObject = canvas.getActiveObject(),
		        activeGroup = canvas.getActiveGroup();
		    if (activeObject) {
		      activeObject.sendToBack();
		    }
		    else if (activeGroup) {
		      var objectsInGroup = activeGroup.getObjects();
		      canvas.discardActiveGroup();
		      objectsInGroup.forEach(function(object) {
		        object.sendToBack();
		      });
		    }
		};	
		$('.setFont').click(function (e) {
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.fontFamily = e.target.innerText;
				canvas.renderAll();
			}
		});	  
	  	$("#text-bold").click(function() {		  
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.fontWeight = (activeObject.fontWeight == 'bold' ? '' : 'bold');		    
				canvas.renderAll();
			}
		});
		$("#text-italic").click(function() {		 
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.fontStyle = (activeObject.fontStyle == 'italic' ? '' : 'italic');		    
				canvas.renderAll();
			}
		});
		$("#text-strike").click(function() {		  
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.linethrough = (activeObject.linethrough == true ? '' : true);
				$("#text-italic").click();
				$("#text-italic").click();
			}
		});
		$("#text-underline").click(function () {
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.underline = (activeObject.underline == true ? '' : true);
				$("#text-italic").click();
				$("#text-italic").click();
			}
		});
	  	$("#text-left").click(function() {		  
		  var activeObject = canvas.getActiveObject();
		  if (activeObject && activeObject.type === 'text') {
			  activeObject.textAlign = 'left';
		    canvas.renderAll();
		  }
		});
	  	$("#text-center").click(function() {		  
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.textAlign = 'center';		    
				canvas.renderAll();
			}
		});
	  	$("#text-right").click(function() {		  
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.textAlign = 'right';		    
				canvas.renderAll();
			}
		});	  
	 	 $("#font-family").change(function() {
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.fontFamily = this.value;
				canvas.renderAll();
			}
	    });	  
		$('#text-bgcolor').miniColors({
			change: function(hex, rgb) {
			  var activeObject = canvas.getActiveObject();
		      if (activeObject && activeObject.type === 'text') {
		    	  activeObject.backgroundColor = this.value;
		        canvas.renderAll();
		      }
			},
			open: function(hex, rgb) {
				//
			},
			close: function(hex, rgb) {
				//
			}
		});		
		$('#text-fontcolor').miniColors({
			change: function(hex, rgb) {
			  var activeObject = canvas.getActiveObject();
		      if (activeObject && activeObject.type === 'text') {
		    	  activeObject.fill = this.value;
		    	  canvas.renderAll();
		      }
			},
			open: function(hex, rgb) {
				//
			},
			close: function(hex, rgb) {
				//
			}
		});
		$('#text-strokecolor').miniColors({
			change: function(hex, rgb) {
			  var activeObject = canvas.getActiveObject();
		      if (activeObject && activeObject.type === 'text') {
		    	  activeObject.strokeStyle = this.value;
		    	  canvas.renderAll();
		      }
			},
			open: function(hex, rgb) {
				//
			},
			close: function(hex, rgb) {
				//
			}
		});
	
		//canvas.add(new fabric.fabric.Object({hasBorders:true,hasControls:false,hasRotatingPoint:false,selectable:false,type:'rect'}));
	   $("#drawingArea").hover(
	        function() { 	        	
	        	 canvas.add(line1);
		         canvas.add(line2);
		         canvas.add(line3);
		         canvas.add(line4); 
		         canvas.renderAll();
	        },
	        function() {	        	
	        	 canvas.remove(line1);
		         canvas.remove(line2);
		         canvas.remove(line3);
		         canvas.remove(line4);
		         canvas.renderAll();
	        }
	    );
	   

	   
	   $('#flip').click(
		   function() {			   
			   	if ($(this).attr("data-original-title") == "Show Back View") {
			   		$(this).attr('data-original-title', 'Show Front View');			        		       
			        $("#tshirtFacing").attr("src","img/crew_back.png");			        
			        a = JSON.stringify(canvas);
			        canvas.clear();
			        try
			        {
			           var json = JSON.parse(b);
			           canvas.loadFromJSON(b);
			        }
			        catch(e)
			        {}
			        
			    } else {
			    	$(this).attr('data-original-title', 'Show Back View');			    				    	
			    	$("#tshirtFacing").attr("src","img/crew_front.png");			    	
			    	b = JSON.stringify(canvas);
			    	canvas.clear();
			    	try
			        {
			           var json = JSON.parse(a);
			           canvas.loadFromJSON(a);			           
			        }
			        catch(e)
			        {}
			    }		
			   	canvas.renderAll();
			   	setTimeout(function() {
			   		canvas.calcOffset();
			    },200);			   	
        });	   
	   $(".clearfix button,a").tooltip();
	   line1 = new fabric.Line([0,0,220,0], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   line2 = new fabric.Line([209,0,210,399], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   line3 = new fabric.Line([0,0,0,400], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	   line4 = new fabric.Line([0,400,20,399], {"stroke":"#000000", "strokeWidth":1,hasBorders:false,hasControls:false,hasRotatingPoint:false,selectable:false});
	 });//doc ready
	 
	}
}
</script>
<style>	
@import '../editor/css/jquery.miniColors.css';
@import '../editor/css/bootstrap-responsive.min.css';
@import '../editor/css/jquery.simplecolorpicker.css';

.custom-control-label{
	width: 136px!important;
	/* align-items: center!important; */
}

#canvas{
  border: solid 1px blue;  
  width: 100%;
}
#shirtDiv{
	/* overflow:scroll!important; */
	width: 100%!important;
	margin-top: 10px!important;
}
.well {
    min-height: 20px;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.img-polaroid {
	max-width: 100%;
    padding: 0px;
    background-color: #fff;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	height: auto;
    vertical-align: middle;
}
.footer {
	padding: 70px 0;   
	margin-top: 70px;
	border-top: 1px solid #E5E5E5;
	background-color: whiteSmoke;
}
.color-preview {
	border: 1px solid #CCC; 
	margin: 2px;
	zoom: 1;
	vertical-align: top;
	display: inline-block;
	cursor: pointer;
	overflow: hidden;
	width: 20px;
	height: 20px;
}
.rotate {  
	transform:rotate(90deg);
}		
.Arial{font-family:"Arial";}
.Helvetica{font-family:"Helvetica";}
.MyriadPro{font-family:"Myriad Pro";}
.Delicious{font-family:"Delicious";}
.Verdana{font-family:"Verdana";}
.Georgia{font-family:"Georgia";}
.Courier{font-family:"Courier";}
.ComicSansMS{font-family:"Comic Sans MS";}
.Impact{font-family:"Impact";}
.Monaco{font-family:"Monaco";}
.Optima{font-family:"Optima";}
.HoeflerText{font-family:"Hoefler Text";}
.Plaster{font-family:"Plaster";}
.Engagement{font-family:"Engagement";}
[class^="icon-"], [class*=" icon-"] {
    display: inline-block;
    width: 14px;
    height: 14px;
    *margin-right: .3em;
    line-height: 14px;
    vertical-align: text-top;
    background-image: url(../editor/img/glyphicons-halflings.png);
    background-position: 14px 14px;
    background-repeat: no-repeat;
    margin-top: 1px;
}
.btnEditor {
    background-color: #ffffff;
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), color-stop(5%, #ffffff), to(#ffffff));
    background-image: -webkit-linear-gradient(#ffffff, #ffffff 5%, #ffffff);
    background-image: -moz-linear-gradient(top, #ffffff, #ffffff 5%, #ffffff);
    background-image: -o-linear-gradient(#ffffff, #ffffff 5%, #ffffff);
    background-image: linear-gradient(#ffffff, #ffffff 5%, #ffffff);
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffffffff', GradientType=0);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.btnEditor {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    padding: 4px 14px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    *line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    color: #333333;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0);
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    *background-color: #e6e6e6;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
    border: 1px solid #cccccc;
    *border: 0;
    border-bottom-color: #b3b3b3;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    *margin-left: .3em;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}
.btnEditor {
    appearance: button;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    box-sizing: border-box;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
@font-face {
font-family: ‘Dosis’;
   src: url('../Fonts/DosisFonts/extraBold/Dosis-ExtraBold.eot');
   src: url('../Fonts/DosisFonts/extraBold/Dosis-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('../Fonts/DosisFonts/extraBold/Dosis-ExtraBold.woff') format('woff'),
        url('../Fonts/DosisFonts/extraBold/Dosis-ExtraBold.ttf') format('truetype'),
        url('../Fonts/DosisFonts/extraBold/Dosis-ExtraBold.svg#adlerRegular') format('svg');
  font-weight:900;
  font-style:italic;
}
@media  (max-width: 600px) {
	.container-fluid{
		padding-left: 0px!important;
		padding-right: 0px!important;
	}
	#shirtDiv{
		overflow-x: scroll;
	}
	.columna{
		padding-left: 0px!important;
		padding-right: 0px!important;
	}
}
@media (min-width: 601px){
		#shirtDiv{
		overflow-x: hidden;
	}
}

</style>