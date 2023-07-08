const menuItems = document.querySelectorAll('.menu-item');



menuItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
});
});

const changeFontBtn = document.querySelector('#change-font');
changeFontBtn.addEventListener('click' ,function() {
    document.body.classList.toggle('change-font')
});


// boton modo oscuro
const bdark = document.querySelector('#bdark');
const body = document.querySelector('body');

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'))
});

function load( ){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        store('false');
        }else if(darkmode == 'true'){
            body.classList.add('darkmode');
        }
}

function store(value){
    localStorage.setItem('darkmode', value)
};

//DOM modificacion de parrafos en HTML 
const contenido = document.querySelector('p.primero');
contenido.innerHTML = "<p>Excelente desenvolvimiento en Trabajo en equipo impulsando el crecimiento del mismo. Manejo de niveles de estrés altos, experiencia en negociaciones de ventas y soluciones de conflictos. Manejo de computación avanzado. Aprendizaje rápido para nuevos rubros.</p>";

const hablemos = document.querySelector('p.segundo');
hablemos.innerHTML = "<p>los gatitos son lo mejor</p>";

