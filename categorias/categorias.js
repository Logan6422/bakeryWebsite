hoverGalery();
redirigir();




function hoverGalery(){
    const contenedoresGalery = document.querySelectorAll('.contenedorGalery');
    contenedoresGalery.forEach(contenedor => {
        const filtroGalery = contenedor.querySelector('.filtroGalery');
        const galeryButton = contenedor.querySelector('.galeryButton');
    
        filtroGalery.addEventListener('mouseover', () => {
            galeryButton.classList.add('active');
        });
    
     
        filtroGalery.addEventListener('mouseout', () => {
            galeryButton.classList.remove('active');
        });
    });
    
}

function redirigir(){
    const buttonHome = document.querySelector('.home');
    const buttonCupcakes = document.querySelector('.cupcakes');


    buttonHome.addEventListener('click',()=>{
        window.location.href = '../index.html'
    });
 

    buttonCupcakes.addEventListener('click',()=>{
        window.location.href = 'cupcakes.html'
    });
}