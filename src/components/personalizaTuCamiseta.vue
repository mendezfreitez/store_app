<template>
    <b-container fluid>
		<section id="typography">
		  <div class="page-header">
		    <h1>Personaliza tu camiseta</h1>
		  </div>
		
		  <!-- Headings & Paragraph Copy -->
		  <b-row>
		    <b-col lg="4">
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
						      	<b-select id="tshirttype">                        
				                    <option value="../editor/img/crew_front.png" selected>Manga corta</option>
				                    <option value="../editor/img/mens_longsleeve_front.png">Manga larga</option>
				                    <option value="../editor/img/mens_hoodie_front.png">Sueter</option>                    
				                    <option value="../editor/img/mens_tank_front.png">Franelilla</option>
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
		    <b-col lg="4">		    
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
							<!-- <b-button id="font-family" class="btn dropdown-toggle" data-toggle="dropdown" title="Font Style"><i class="icon-font" style="width:19px;height:19px;"></i></b-button>		                      
							<ul class="dropdown-menu" role="menu" aria-labelledby="font-family-X">
								<li><a tabindex="-1" href="#" onclick="setFont('Arial');" class="Arial">Arial</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Helvetica');" class="Helvetica">Helvetica</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Myriad Pro');" class="MyriadPro">Myriad Pro</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Delicious');" class="Delicious">Delicious</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Verdana');" class="Verdana">Verdana</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Georgia');" class="Georgia">Georgia</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Courier');" class="Courier">Courier</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Comic Sans MS');" class="ComicSansMS">Comic Sans MS</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Impact');" class="Impact">Impact</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Monaco');" class="Monaco">Monaco</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Optima');" class="Optima">Optima</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Hoefler Text');" class="Hoefler Text">Hoefler Text</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Plaster');" class="Plaster">Plaster</a></li>
								<li><a tabindex="-1" href="#" onclick="setFont('Engagement');" class="Engagement">Engagement</a></li>
							</ul> -->
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
                <b-button @click="rotarCamiseta" variant="outline-success" title="Rotate View" style="padding-top: 8px; padding-bottom: 4px;">
					<b-icon icon="arrow-left-right" scale="1.4" aria-hidden="true"></b-icon>
				</b-button>
					<div id="shirtDiv" class="page" style="width: 530px!important; height: 620px; position: relative; background-color: rgb(255, 255, 255);">
						<b-img v-if="visibleFront" name="tshirtview" id="tshirtFacing" :src="require(`../editor/img/crew_front.png`)"></b-img>
						<b-img v-else name="tshirtview" id="tshirtFacing" :src="require(`../editor/img/crew_back.png`)"></b-img>
						<b-col id="drawingArea" style="position: absolute;top: 100px;left: 145px;z-index: 10;width: 240px;height: 400px;">					
							<canvas id="tcanvas" width=210 height="400" class="hover" style="-webkit-user-select: none;"></canvas>
						</b-col>
					</div>
		    </b-col>
		    <b-col lg="4">
		      <div class="well">
		      	<h3>Select Sizes</h3>
			      <p>
			      	<table class="table">
			      		<tr>
			      			<td><input type="checkbox">&emsp;S</td>
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
			      	</p>
					<button type="button" class="btn btn-sm btn-block btn-success" name="addToTheBag" id="addToTheBag">
						Añadir
						<i class="icon-briefcase icon-white"></i>
					</button>
		      </div>		      		       		   
		    </b-col>
		
		  </b-row>
		
		</section>
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
			nombreImg:'crew_front',
			visibleFront:true
		}
	},
	methods:{
		rotarCamiseta(){
			this.visibleFront = !this.visibleFront
		}
	}
}
</script>
<style>	
@import '../editor/css/jquery.miniColors.css';

@import '../editor/css/bootstrap-responsive.min.css';

@import '../editor/css/jquery.simplecolorpicker.css';

/* @import '../editor/css/bootstrap.min.css'; */
#shirtDiv{
	overflow:scroll!important;
}
.well {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
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
/* body {
padding-top: 60px;	        
} */
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
	/*-moz-transform:rotate(90deg);
	-o-transform:rotate(90deg);
	 filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1.5); 
	-ms-transform:rotate(90deg);		   */
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
	#tshirtFacing{
		/* src: url('../editor/img/crew_back.png'); */
		background-image: url('../editor/img/crew_back.png');
	}
  body {
    background-color: black!important;
  }
}
</style>