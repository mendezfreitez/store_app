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
		  
		  
		  

		 		 	 
		document.getElementById('add-text').onclick = function() {
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
	  	};
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

	//  function setFont(font){
	// 	  var activeObject = canvas.getActiveObject();
	//       if (activeObject && activeObject.type === 'text') {
	//         activeObject.fontFamily = font;
	//         canvas.renderAll();
	//       }
	//   }
	 function removeWhite(){
		  var activeObject = canvas.getActiveObject();
		  if (activeObject && activeObject.type === 'image') {			  
			  activeObject.filters[2] =  new fabric.Image.filters.RemoveWhite({hreshold: 100, distance: 10});//0-255, 0-255
			  activeObject.applyFilters(canvas.renderAll.bind(canvas));
		  }	        
	 }