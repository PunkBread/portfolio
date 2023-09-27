$(function(){
    init();
});
function init(){
	$("#btnHome").click(function(){				
		$("#home").attr("class", "tab-pane active");
		$("#inventario").attr("class", "tab-pane");
		$("#clases").attr("class", "tab-pane");
		$("#prestamo").attr("class", "tab-pane");
		$("#ubicacion").attr("class", "tab-pane");
	});
	$("#btnInventario").click(function(){				
		$("#home").attr("class", "tab-pane");
		$("#inventario").attr("class", "tab-pane active");
		$("#clases").attr("class", "tab-pane");
		$("#prestamo").attr("class", "tab-pane");
		$("#ubicacion").attr("class", "tab-pane");
	});
	$("#btnClases").click(function(){				
		$("#home").attr("class", "tab-pane");
		$("#inventario").attr("class", "tab-pane");
		$("#clases").attr("class", "tab-pane active");
		$("#prestamo").attr("class", "tab-pane");
		$("#ubicacion").attr("class", "tab-pane");
	});
	$("#btnPrestamo").click(function(){				
		$("#home").attr("class", "tab-pane");
		$("#inventario").attr("class", "tab-pane");
		$("#clases").attr("class", "tab-pane");
		$("#prestamo").attr("class", "tab-pane active");
		$("#ubicacion").attr("class", "tab-pane");
	});
	$("#btnUbicacion").click(function(){				
		$("#home").attr("class", "tab-pane");
		$("#inventario").attr("class", "tab-pane");
		$("#clases").attr("class", "tab-pane");
		$("#prestamo").attr("class", "tab-pane");
		$("#ubicacion").attr("class", "tab-pane active");
	});
	$("#btnLogin").click(function(){		
        var dataRq = new Object();
		dataRq.usuario = $("#cmbUsuario").val();
        dataRq.contrasena = $("#cmbContrasena").val();
		if(dataRq.usuario == 'Profe Geo'){
			if(dataRq.contrasena == 'pass'){
				$(location).attr('href', 'Menu.html')
			}else{
				$("#lblalerta").attr("class", "alert alert-danger").html('Contraseña Incorrecta ');	
			}			
		} else {
			$("#lblalerta").attr("class", "alert alert-danger").html('Usuario no existente ');
		}						
        
	});
	$("#btnLogout").click(function(){				
		$(location).attr('href', 'log.html')
	});
	$("#txtMarcaInventario").change(function() {
		$("#txtModeloInventario").attr('disabled', false);
	});
	$("#btnRegristrarInventario").click(function(){
		var dataRq = new Object();		
		dataRq.accion = "insertarInventario";
		dataRq.observaciones = $("#txtObservacionesInventario").val();
		dataRq.tipoEquipo = $("#txtTipoDeEquipoInventario").val();
		dataRq.marca = $("#txtMarcaInventario").val();
		dataRq.modelo = $("#txtModeloInventario").val();
		dataRq.estatus = $("#txtEstatusInventario").val();
		if(dataRq.observaciones == 0){
			$("#lblLog").attr("class", "alert alert-danger").html("Llene la caja de observaciones ");
		}else{
			if(dataRq.tipoEquipo == 0){
				jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de tipo de equipo ');
			}else{
				if(dataRq.marca == 0){
					jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de marca ');
				}else{
					if(dataRq.modelo == 0){
						jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de modelo ');
					}else{
						if(dataRq.estatus == 0){
							jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de estatus ');
						}else{
                            $.ajax({
                                type: 'POST',
                                url:  'core/',
                                data: {data:JSON.stringify(dataRq)},
                                dataType    : 'json',
                                beforeSend: function(){ 
                        			$("#lblLog").append("Se esta enviando la petición<br />");
                        		},
                        		error: function(request,error){ 
                        			$("#lblLog").append("error de envio<br />");
                        		},
                        		success: function(data){ 
                        			$("#lblLog").attr("class", "alert alert-success").html('Agregado ');
        							var lista = dataRq;
        							var tblListado = "";
        							var numConsecutivo = 1;
        							$.each([1],function(k,v){
        								tblListado += "\n<tr>";
        								tblListado += "\n\t<td class='text-center'>"+numConsecutivo+"</td>";
        								tblListado += "\n\t<td class='text-center'>"+dataRq.observaciones+"</td>";
        								tblListado += "\n\t<td class='text-center'>"+dataRq.tipoEquipo+"</td>";
        								tblListado += "\n\t<td class='text-center'>"+dataRq.marca+"</td>";
        								tblListado += "\n\t<td class='text-center'>"+dataRq.modelo+"</td>";
        								tblListado += "\n\t<td class='text-center'>"+dataRq.estatus+"</td>";
        								tblListado += "\n</tr>";
        								numConsecutivo++;
        							});
        							$("#tbListadoInventario").html(tblListado);		     
                                    alert('successful');
                        		}	
                                
                            });
						}
					}
				}
			}
		}
		/*
		var dataRq = new Object();		
		dataRq.accion = "getLogin";
		dataRq.observaciones = $("#txtObservacionesInventario").val();
		dataRq.tipoEquipo = $("#txtTipoDeEquipoInventario").val();
		dataRq.marca = $("#txtMarcaInventario").val();
		dataRq.modelo = $("#txtModeloInventario").val();
		dataRq.estatus = $("#txtEstatusInventario").val();
		if(dataRq.observaciones == 0){
			$("#lblLog").attr("class", "alert alert-danger").html("Llene la caja de observaciones ");
		}else{
			if(dataRq.tipoEquipo == 0){
				jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de tipo de equipo ');
			}else{
				if(dataRq.marca == 0){
					jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de marca ');
				}else{
					if(dataRq.modelo == 0){
						jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de modelo ');
					}else{
						if(dataRq.estatus == 0){
							jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de estatus ');
						}else{
							var url = 'https://stackoverflow.com/questions/20738329/how-to-call-a-php-function-on-the-click-of-a-button';
							$.post(url, dataRq, function(returnedData) {
								// do something here with the returnedData
								console.log(returnedData);
							});
							$("#lblLog").attr("class", "alert alert-success").html('Agregado ');
							var lista = dataRq;
							var tblListado = "";
							var numConsecutivo = 1;
							$.each([1],function(k,v){
								tblListado += "\n<tr>";
								tblListado += "\n\t<td class='text-center'>"+numConsecutivo+"</td>";
								tblListado += "\n\t<td class='text-center'>"+dataRq.observaciones+"</td>";
								tblListado += "\n\t<td class='text-center'>"+dataRq.tipoEquipo+"</td>";
								tblListado += "\n\t<td class='text-center'>"+dataRq.marca+"</td>";
								tblListado += "\n\t<td class='text-center'>"+dataRq.modelo+"</td>";
								tblListado += "\n\t<td class='text-center'>"+dataRq.estatus+"</td>";
								tblListado += "\n</tr>";
								numConsecutivo++;
							});
							$("#tbListadoInventario").html(tblListado);
						}
					}
				}
			}
		}
		*/
	});
	$("#btnConsultarInventario").click(function(){				
		
	});
	$("#btnModificarInventario").click(function(){				
		
	});
	$("#btnBorrarInventario").click(function(){
		var tbody = $("#tbListadoInventario");		
		if(tbody.children().length == 0){
			$("#lblLog").attr("class", "alert alert-warning").html('Esta está vacia ');
		}else{
			$("#txtModeloInventario").attr('disabled', true);
			$("#tbListadoInventario").empty();
			$("#lblLog").attr("class", "alert alert-warning").html('Tabla vaciada ');
		}
	});
	$("#btnGraficaClases").click(function(){
		$("#line-chart").attr("style", "visibility: visible");
		$("#doughnut-chart").attr("style", "visibility: visible");
		$("#polar-chart").attr("style", "visibility: visible");
	});
	/*$("#btnReporteInventario").click(function(){		
		var printMe = document.getElementById('tbListadoInventario');
		var pageTitle = 'Page Title',
            stylesheet = '//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css',
            win = window.open('', 'Print', 'width=500,height=300');
        win.document.write('<html><head><title>' + pageTitle + '</title>' +
            '<link rel="stylesheet" href="' + stylesheet + '">' +
            '</head><body>' + printMe + '</body></html>');
        win.document.close();
        win.print();
        win.close();
        return false;
	});*/
	$("#btnRegristrarClases").click(function(){				
		var dataRq = new Object();
		//dataRq.accion = "regristrarEquipo";
		dataRq.fechaInicio = $("#txtFechaInicioClases").val();
		dataRq.fechaTermino = $("#txtFechaTerminoClases").val();
		dataRq.horaInicio = $("#txtHoraInicioClases").val();
		dataRq.horaTermino = $("#txtHoraTerminoClases").val();
		if(dataRq.fechaInicio == 0){
			$("#lblLog").attr("class", "alert alert-danger").html("Llene la caja de fecha de inicio ");
		}else{
			if(dataRq.fechaTermino == 0){
				jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de fecha de termino ');
			}else{
				if(dataRq.horaInicio == 0){
					jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de hora de inicio ');
				}else{
					if(dataRq.horaTermino == 0){
						jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de hora de termino ');
					}else{
						$("#lblLog").attr("class", "alert alert-success").html('Agregado ');
						var lista = dataRq;
						var tblListado = "";
						var numConsecutivo = 1;
						$.each([1],function(k,v){
							tblListado += "\n<tr>";
							tblListado += "\n\t<td class='text-center'>"+numConsecutivo+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.fechaInicio+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.fechaTermino+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.horaInicio+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.horaTermino+"</td>";
							tblListado += "\n</tr>";
							numConsecutivo++;
						});
						$("#tbListadoClases").html(tblListado);
					}
				}
			}
		}
	});
	$("#btnConsultarClases").click(function(){				
		
	});
	$("#btnModificarClases").click(function(){				
		
	});
	$("#btnBorrarCLases").click(function(){				
		var tbody = $("#tbListadoClases");
		if(tbody.children().length == 0){
			$("#lblLog").attr("class", "alert alert-warning").html('Esta tabla está vacia ');
		}else{
			$("#tbListadoClases").empty();
			$("#lblLog").attr("class", "alert alert-warning").html('Tabla vaciada ');
		}
	});
	$("#btnGraficaPrestamo").click(function(){				
		$("#line-chart").attr("style", "visibility: visible");
		$("#doughnut-chart").attr("style", "visibility: visible");
		$("#polar-chart").attr("style", "visibility: visible");
	});
	$("#btnRegristrarPrestamo").click(function(){
		var dataRq = new Object();
		//dataRq.accion = "regristrarEquipo";
		dataRq.numeroInventario = $("#txtNumeroInventarioPrestamo").val();
		dataRq.fechaInicio = $("#txtFechaInicioPrestamo").val();
		dataRq.fechaTermino = $("#txtFechaTerminoPrestamo").val();
		dataRq.ubicacion = $("#txtUbicacionPrestamo").val();
		if(dataRq.numeroInventario == 0){
			$("#lblLog").attr("class", "alert alert-danger").html("Llene la caja de número de inventario ");
		}else{
			if(dataRq.fechaInicio == 0){
				jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de fecha de inicio ');
			}else{
				if(dataRq.fechaTermino == 0){
					jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de fecha de termino ');
				}else{
					if(dataRq.ubicacion == 0){
						jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de ubicación ');
					}else{
						$("#lblLog").attr("class", "alert alert-success").html('Agregado ');
						var lista = dataRq;
						var tblListado = "";
						var numConsecutivo = 1;
						$.each([1],function(k,v){
							tblListado += "\n<tr>";
							tblListado += "\n\t<td class='text-center'>"+numConsecutivo+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.numeroInventario+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.fechaInicio+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.fechaTermino+"</td>";
							tblListado += "\n\t<td class='text-center'>"+dataRq.ubicacion+"</td>";
							tblListado += "\n</tr>";
							numConsecutivo++;
						});
						$("#tbListadoPrestamo").html(tblListado);
					}
				}
			}
		}
	});
	$("#btnConsultarPrestamo").click(function(){				
		
	});
	$("#btnModificarPrestamo").click(function(){				
		
	});
	$("#btnBorrarPrestamo").click(function(){				
		var tbody = $("#tbListadoPrestamo");
		if(tbody.children().length == 0){
			$("#lblLog").attr("class", "alert alert-warning").html('Esta tabla está vacia ');
		}else{
			$("#tbListadoPrestamo").empty();
			$("#lblLog").attr("class", "alert alert-warning").html('Tabla vaciada ');
		}
	});
	$("#btnRegristrarUbicacion").click(function(){				
		var dataRq = new Object();
		//dataRq.accion = "regristrarEquipo";
		dataRq.sede = $("#txtSedeUbicacion").val();
		dataRq.direccion = $("#txtDireccionUbicacion").val();		
		if(dataRq.sede == 0){
			jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de sede ');
		}else{
			if(dataRq.direccion == 0){
				jQuery('#lblLog').attr("class", "alert alert-danger").html('Llene la caja de dirección ');
			}else{
				$("#lblLog").attr("class", "alert alert-success").html('Agregado ');
				var lista = dataRq;
				var tblListado = "";
				var numConsecutivo = 1;
				$.each([1],function(k,v){
					tblListado += "\n<tr>";
					tblListado += "\n\t<td class='text-center'>"+numConsecutivo+"</td>";
					tblListado += "\n\t<td class='text-center'>"+dataRq.sede+"</td>";
					tblListado += "\n\t<td class='text-center'>"+dataRq.direccion+"</td>";
					tblListado += "\n</tr>";
					numConsecutivo++;
				});
				$("#tbListadoUbicacion").html(tblListado);
			}
		}
	});
	$("#btnConsultarUbicacion").click(function(){				
		
	});
	$("#btnModificarUbicacion").click(function(){				
		
	});
	$("#btnBorrarUbicacion").click(function(){				
		var tbody = $("#tbListadoUbicacion");
		if(tbody.children().length == 0){
			$("#lblLog").attr("class", "alert alert-warning").html('Esta tabla está vacia ');
		}else{
			$("#tbListadoUbicacion").empty();
			$("#lblLog").attr("class", "alert alert-warning").html('Tabla vaciada ');
		}
	});
}