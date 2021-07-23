const personas = [
    new Persona('Ivan','Lopez', 25),
    new Persona('Jennette','McCurdy', 29)
];

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido} ${persona.edad}</li>`
    }
    document.querySelector('#personas').innerHTML = texto;
}
function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const edad = forma['edad'];
    if(nombre.value !='' && apellido.value != '' && edad.value != ''){
        const persona = new Persona(nombre.value, apellido.value, edad.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    } else{
        alert('Campos Vacios');
    }
    
}