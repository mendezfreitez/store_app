<template>
    <b-container fluid>
		<b-modal
			header-bg-variant="dark"
			header-text-variant="light"
			hide-header-close
			:static="true"
			id="modal-1"
			hide-backdrop
			hide-footer
			size="sm"
		>
			<template #modal-title style="width:100%;">
				<header style="display:inline-block;padding-top: 4px!important;">Tallas</header>
				<b-button @click="$bvModal.hide('modal-1')" variant="warning" size="sm" style="float:right;display:inline-block;">Cerrar</b-button>
			</template> 
			<div style="width: 100%;" class="pl-3 pr-3 pb-3">
				<div class="text-center">
					<div >
						<b-form-checkbox size="lg" v-model="checkedOptions.checked_s" name="check-button" switch>
							S <input :disabled="!checkedOptions.checked_s" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px; margin-left:65px!important;" value="1" type="number">
						</b-form-checkbox>
						<hr style="margin:5px!important;" />
					</div>	
					<div>
						<b-form-checkbox size="lg" v-model="checkedOptions.checked_m" name="check-button" switch>
							M <input :disabled="!checkedOptions.checked_m" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px; margin-left:60px!important;" value="1" type="number">
						</b-form-checkbox>
						<hr style="margin:5px!important;" />
					</div>	
					<div>
						<b-form-checkbox size="lg" v-model="checkedOptions.checked_l" name="check-button" switch>
							L <input :disabled="!checkedOptions.checked_l" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px; margin-left:67px!important;" value="1" type="number">
						</b-form-checkbox>
						<hr style="margin:5px!important;" />	
					</div>
					<div>
						<b-form-checkbox size="lg" v-model="checkedOptions.checked_xl" name="check-button" switch>
							XL <input :disabled="!checkedOptions.checked_xl" class="ml-5" min="0" style="width: 45px; font-size:14px; height:22px; margin-left:53px!important;" value="1" type="number">
						</b-form-checkbox>
						<hr style="margin:5px!important;" />
					</div>
					<div>
						<b-form-checkbox size="lg" v-model="checkedOptions.checked_xxl" name="check-button" switch>
							XXL <input :disabled="!checkedOptions.checked_xxl" min="0" style="width: 45px; font-size:14px; height:22px; margin-left:41px!important;" value="1" type="number">
						</b-form-checkbox>
						<hr style="margin:5px!important;" />
					</div>
				</div>
				<b-button variant="outline-primary" size="sm w-100"  style=" padding-left:8px;" @click="agregarAlCarro">
					Agregar al Carro <b-icon scale="1" icon="cart-check" aria-hidden="true"></b-icon>
				</b-button>
			</div>	
		</b-modal>
		
		<b-modal
			header-bg-variant="dark"
			header-text-variant="light"
			hide-header-close
			:static="true"
			id="modal-2"
			hide-backdrop
			hide-footer
			size="sm"
		>
			<template #modal-title style="width:100%;">
				<header style="display:inline-block;padding-top: 4px!important;">Modelo | Color</header>
				<b-button @click="$bvModal.hide('modal-2')" variant="warning" size="sm" style="float:right;display:inline-block;">Cerrar</b-button>
			</template>
			<div class="tab-pane active" id="tab1">
				<div class="well" style="margin-bottom:5px!important;">
					<b-select @change="mostrarCamiseta" v-model="seleccion" :options="options">
					</b-select>								
				</div>
				<div class="well" style="overflow-x:scroll!important;">
					<ul id="contenedorColores" class="nav">
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
		
		
		
		</b-modal>
		
		<b-modal
			header-bg-variant="dark"
			header-text-variant="light"
			:static="true" id="modal-3"
			hide-header-close
			hide-backdrop
			hide-footer
			size="sm"
		>
			<template #modal-title style="width:100%;">
				<header style="display:inline-block;padding-top: 4px!important;">Imagen | Texto</header>
				<b-button @click="$bvModal.hide('modal-3')" variant="warning" size="sm" style="float:right;display:inline-block;">Cerrar</b-button>
			</template>
			<div class="well">
				<b-input-group size="md">
					<b-form-input placeholder="Agregar Texto Acá" id="text-string"></b-form-input>
					<b-input-group-append>
						<b-button id="add-text" variant="success">
							<b-icon icon="check" scale="2" aria-hidden="true"></b-icon>
						</b-button>
					</b-input-group-append>
				</b-input-group>
				<div class="input-append">
					<hr style="margin-bottom:5px!important;margin-top:5px!important;">
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
			</div>	
		</b-modal>
		
		<b-row>
			<b-col sm="12" md="3" lg="3">
			</b-col>		
			
			<b-col class="pl-1 pr-1" sm="12" md="6" lg="6">

				<b-button v-b-modal.modal-2 size="sm" variant="outline-success">Modelo | Color</b-button>
				<b-button v-b-modal.modal-3 size="sm" variant="outline-success" class="ml-1 mr-1">Imagen | Texto</b-button>
				<b-button v-b-modal.modal-1 size="sm" variant="outline-success">Tallas</b-button>		    
				<div id="contenedorControles" align="center" style="min-height: 32px;">
					<div class="clearfix mt-1 mb-1">
						<div class="btn-group inline pull-left" id="texteditor">
							<b-dropdown right text="Texto" title="Tipografía" variant="outline-success" style="font-size:10px!important;">
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
							
							<b-dropdown right text="Estilo" variant="outline-success">
								<b-dropdown-item>
									<b-button id="text-bold" title="Bold" variant="outline-success" size="sm">
										<b-icon icon="type-bold" scale="1.2" aria-hidden="true"></b-icon>
										Bold
									</b-button>
								</b-dropdown-item>
								<b-dropdown-item>
									<b-button id="text-italic" class="btn" data-original-title="Italic" variant="outline-success" size="sm">
										<b-icon icon="type-italic" scale="1.2" aria-hidden="true"></b-icon>
										Italic
									</b-button>
								</b-dropdown-item>
								<b-dropdown-item>
									<b-button id="text-strike" class="btn" title="Strike" variant="outline-success" size="sm">
										<b-icon icon="type-strikethrough" scale="1.2" aria-hidden="true"></b-icon>
										Strike
									</b-button>
								</b-dropdown-item>
								<b-dropdown-item>
									<b-button id="text-underline" class="btn" title="Underline" variant="outline-success" size="sm">
										<b-icon icon="type-underline" scale="1.2" aria-hidden="true"></b-icon>
										Underline
									</b-button>
								</b-dropdown-item>
								<b-dropdown-item>
									<b-button id="text-overline" class="btn" title="Overline" variant="outline-success" size="sm">
										<b-icon icon="type-underline" scale="1.2" aria-hidden="true"></b-icon>
										Overline
									</b-button>
								</b-dropdown-item>
							</b-dropdown>
							
							<b-button class="btn" href="#" rel="tooltip" data-placement="top" data-original-title="Font Color" variant="outline-success">
								<input type="hidden" id="text-fontcolor" class="color-picker" size="7" value="#000000">
							</b-button>
							
							<b-button class="btn" href="#" rel="tooltip" data-placement="top" data-original-title="Font Border Color" variant="outline-success">
								<input type="hidden" id="text-strokecolor" class="color-picker" size="7" value="#000000">
							</b-button>
							
							<b-button id="flipback" type="button" class="btn" title="Show Back View" variant="outline-success">
								<b-icon icon="arrow-left-right" scale="1.2" aria-hidden="true"></b-icon>
							</b-button>
							
							<b-button id="remove-selected" class="btn" title="Eliminar Texto o Imágen seleccionado" variant="outline-success">
								<b-icon icon="trash" scale="1.2" aria-hidden="true"></b-icon>
							</b-button>
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
				<b-card id="lienzo2D"
					border-variant="success"
					header-text-variant="white"
					align="center"
				>
					<div id="shirtDiv" align="center" style=" background-color: #FFF;">
						<canvas id="tcanvas" width=530 height=630 class="hover" ></canvas>
					</div>
				</b-card>

			</b-col>
			
			<b-col sm="12" md="3" lg="3">	      		       		    
			</b-col>
		</b-row>
    </b-container>
</template>

<script>
import '../editor/js/jquery.js';
import '../editor/js/bootstrap.min.js';
import '../editor/js/jquery.miniColors.min.js';
import '../editor/js/excanvas.js';

export default {
	data(){
		return{
			escalaX: 1,
			escalaY: 1,
			escalaXlienzo: 0.5,
			escalaYlienzo: 0.5,
			activo:true,
			activo2:false,
			activo3:false,
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
		activar(valor){
			switch (valor) {
				case 1:
					this.activo = true
					this.activo2 = false
					this.activo3 = false
				break;
				case 2:
					this.activo = false
					this.activo2 = true
					this.activo3 = false
				break;
				case 3:
					this.activo = false
					this.activo2 = false
					this.activo3 = true
				break;
				default:
				break;
			}
		},
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
let that = this;

 	$(document).ready(function() {
		var anchoContenedorCanvas = $('#shirtDiv').width();
		console.log(anchoContenedorCanvas);

		//setup front side canvas 
 		canvas = new fabric.Canvas('tcanvas', {
		  hoverCursor: 'pointer',
		  selection: true,
		  selectionBorderColor:'blue'
		});

		if(anchoContenedorCanvas > 1000){
			$("#tcanvas,.upper-canvas").css('width', 530);
			$("#tcanvas,.upper-canvas").css('height', 630);
		}
		else if(anchoContenedorCanvas >= 500 && anchoContenedorCanvas <= 1000){
			$("#tcanvas,.upper-canvas").css('width', (530 * 0.8).toFixed(0));
			$("#tcanvas,.upper-canvas").css('height',  (630 * 0.8).toFixed(0));
		}
		else if(anchoContenedorCanvas <= 500){
			$("#tcanvas,.upper-canvas").css('width', (530 * 0.6).toFixed(0));
			$("#tcanvas,.upper-canvas").css('height',  (630 * 0.6).toFixed(0));
		}
		// console.log(canvas)
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
				$("#text-string").val(selectedObject.getText());	    	
				$('#text-fontcolor').miniColors('value',selectedObject.fill);
				$('#text-strokecolor').miniColors('value',selectedObject.strokeStyle);
			}
			else if (selectedObject && selectedObject.type === 'image'){
		
			}
		}
		function onSelectedCleared(e){
			$("#text-string").val("");
		}

		var anchoContenedorCanvas;

		$(window).on("resize", function(){
			anchoContenedorCanvas = $('#shirtDiv').width();
			
			console.log(anchoContenedorCanvas);
			if(anchoContenedorCanvas > 1000){
				$("#tcanvas,.upper-canvas,.canvas-container").css('width', 530);
				$("#tcanvas,.upper-canvas,.canvas-container").css('height', 630);
				// alert('Esta pantalla es grande');
			}
			else if(anchoContenedorCanvas >= 500 && anchoContenedorCanvas <= 1000){
				$("#tcanvas,.upper-canvas,.canvas-container").css('width', (530 * 0.8).toFixed(0));
				$("#tcanvas,.upper-canvas,.canvas-container").css('height',  (630 * 0.8).toFixed(0));
				// alert('Esta pantalla es mediana, como minimo dos veces tu pipicito jaja XD');
			}
			else if(anchoContenedorCanvas <= 500){
				$("#tcanvas,.upper-canvas,.canvas-container").css('width', (530 * 0.7).toFixed(0));
				$("#tcanvas,.upper-canvas,.canvas-container").css('height',  (630 * 0.7).toFixed(0));
				// alert('Esta pantalla es pequeña como tu pene jaja XD');
			}
			canvas.renderAll();
		});

		$(window).resize(); // PARA LA PRIMERA CARGA

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
				angle: 0,
				fill: '#000000',
				scaleX: 0.5,
				scaleY: 0.5,
				fontWeight: '',
				hasRotatingPoint:true
		    });		    
            canvas.add(textSample);	
            canvas.item(canvas.item.length-1).hasRotatingPoint = true;
		  });
		  
	  	$("#text-string").keyup(function(){	  		
	  		var activeObject = canvas.getActiveObject();
		      if (activeObject && activeObject.type === 'text') {
		    	  activeObject.text = this.value;
		    	  canvas.renderAll();
		      }
			});
		  

		  
		fabric.Image.fromURL('https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/camisetas/crew_front.png', function (image) {
			var anchoContenedorCanvas = $('#shirtDiv').width();
			
			console.log(anchoContenedorCanvas);
			if(anchoContenedorCanvas > 1000){
				that.escalaXlienzo = that.escalaYlienzo = 1;
			}
			else if(anchoContenedorCanvas >= 500 && anchoContenedorCanvas <= 1000){
				that.escalaXlienzo = that.escalaYlienzo = 0.9;
			}
			else if(anchoContenedorCanvas <= 500){
				that.escalaXlienzo = that.escalaYlienzo = 0.7;
			}

			image.set({
				left: 0,
				top: 0,
				angle: 0,
				padding: 7,
				backgroundColor:'#000',
				selectable:false,
				cornerSize: 7,
				hasRotatingPoint:true
			});
			canvas.add(image);
		});
		  
		$('.color-preview').click(function(){
			canvas._objects[0].backgroundColor = $(this).css("background-color");
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
			// $('.upper-canvas').click();
			canvas.renderAll();
		});
	
		$(".img-polaroid").click(function (e) {
			// $("#texteditor").css('display', 'block');
	  		var el = e.target;
	  		/*temp code*/
			  var offset = 50;
			//   var left = 210;
	        var left = fabric.util.getRandomInt(140, 290);
	        var top = fabric.util.getRandomInt(50, 450);
	        var angle = fabric.util.getRandomInt(-20, 40);
	        var width = fabric.util.getRandomInt(10, 90);
	        var opacity = (function(min, max){ return Math.random() * (max - min) + min; })(0.5, 1);
	        
	  		fabric.Image.fromURL(el.src, function(image) {
		          image.set({
					left: left,
					scaleX: that.escalaX,
					scaleY: that.escalaY,
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
	  	$('#remove-selected').click(function() {		  
		  var activeObject = canvas.getActiveObject(); 
		    //    var activeGroup = canvas.getActiveGroup();
		    if (activeObject) {
		      	canvas.remove(activeObject);
				$("#text-string").val("");
		    }
		    else if (activeGroup) {
		      var objectsInGroup = activeGroup.getObjects();
		      canvas.discardActiveGroup();
		      objectsInGroup.forEach(function(object) {
		        canvas.remove(object);
		      });
		    }
	  	});
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
		$("#text-overline").click(function () {
			var activeObject = canvas.getActiveObject();
			if (activeObject && activeObject.type === 'text') {
				activeObject.overline = (activeObject.overline == true ? '' : true);
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

#modal-1 > .modal-dialog, #modal-2 > .modal-dialog, #modal-3 > .modal-dialog{
	margin-top: 0px!important;
}
#modal-2___BV_modal_title_, #modal-3___BV_modal_title_, #modal-1___BV_modal_title_{
	font-size: 16px!important;
	align-content: center!important;
	width: 100%!important;
}
.dropdown-toggle{
	font-size: 0.875rem!important;
}
#modal-1___BV_modal_header_, #modal-2___BV_modal_header_, #modal-3___BV_modal_header_{
	padding: 3px!important;
}
.dropdown-menu-right{
	padding-bottom: 0px!important;
	padding-top: 0px!important;
}
.dropdown-item{
	padding-left: 5px!important;
	padding-right: 0px!important;
}
.dropdown-toggle{
	padding: 6px!important;
}
.custom-control-label{
	width: 136px!important;
}

#avatarlist{
	height: 137px;
	overflow-x: scroll;
}
#canvas{
  border: solid 1px blue;  
  width: 100%;
}
#shirtDiv{
	width: 100%!important;
}
/* #lienzo2D{
	box-shadow: 9px 7px 8px -2px rgba(0,0,0,0.22);	
} */
.well {
    min-height: 20px;
    padding: 5px;
    margin-bottom: 0px!important;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.img-polaroid {
	width: 60px;
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
	#shirtDiv, #contenedorColores{
		overflow-x: hidden!important;
	}
	#avatarlist{
		height: 120px;
	}
}
.card-body{
	padding: 0px!important;
}
@media (min-width: 601px){
	#shirtDiv{
		overflow-x: hidden;
	}
}
</style>