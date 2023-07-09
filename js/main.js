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

load();

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
    localStorage.setItem('darkmode', value);
};

//DOM modificacion de parrafos en HTML 
const contenido = document.querySelector('p.primero');
contenido.innerHTML = "<p> Soy abogado graduado en la <strong>Universidad Rafael Belloso Chacin</strong>. Cuento con una excelente actitud para aprender y enfrentarme a nuevos retos y cambios tanto en el ambito laboral como en lo personal. Me he desempañado exitosamente en el área de ventas y ahora estoy preparado para el mundo del  desarrollo web ampliando las posibilidades de obtener mayores oportunidades laborales, dispuesto a asumir nuevos retos. </p>";

const hablemos = document.querySelector('p.segundo');
hablemos.innerHTML = "<p>Gracias a codigo pa´lante me atrevi a incursionar en el area de desarrollo web, manejando ya lenguajes como HTML, CSS Y JAVASCRIPT y actualmente aprendiendo el directorio REACT desde la plataforma Udemy. </p>";

