const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const botonesFlecha = document.querySelectorAll(".modal button")
let rutasImg = [];
let imgActual = 0;

miniaturas.forEach( (miniatura, indice) => {

	rutasImg.push(miniatura.getAttribute("href"));

	miniatura.addEventListener("click", evento => {
		evento.preventDefault();

		imgActual = indice


		imgModal.setAttribute("src",rutasImg[imgActual]);


		modal.classList.add("visible");
	});
});

modal.addEventListener("click", () =>{
	modal.classList.remove("visible");
});

botonesFlecha.forEach((boton , indice) => {
	boton.addEventListener("click", evento => {
		evento.stopPropagation();

		if(indice == 0){//el índice representa la operación 0 --> resta, 1 --> suma
			imgActual = imgActual > 0 ? imgActual - 1 : rutasImg.length - 1;
		}
		else{
			imgActual = imgActual < rutasImg.length - 1 ? imgActual + 1 : 0;
		}

		imgModal.setAttribute("src",rutasImg[imgActual]);
	});
});