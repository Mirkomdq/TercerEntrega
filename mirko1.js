

class campeon{
    constructor(a, b, c, d, e, f){
        this.nombre = a
        this.posicion = b;
        this.estilo = c;
        this.especialidad = d;
        this.valor = e;
        this.foto = f;
    }
}

let Aatrox = new campeon("Aatrox","top", "melee", "luchador", 0 , "./aatrox.jpg"  ) 
let Ahri = new campeon("Ahri","mid","rango","mago", 0 , "/img/ahri.jpg")
let Akali = new campeon("Akali","mid","melee","asesino", 0, "./img/akali.jpg")
let Akshan = new campeon("Akshan","mid", "rango", "tirador", 0, "./img/akshan.jpg")
let Alistar = new campeon("Alistar", "sup", "melee", "tanque", 0, "./img/alistar.jpg")
let Amummu = new campeon("Amummu", "jg", "melee", "tanque", 0, "./img/amummu.jpg")
let Anivia = new campeon("Anivia","mid","rango","mago",0, "./img/anivia.jpg")
let Annie = new campeon("Annie","mid","rango","mago",0 , "./img/annie.jpg")
let Aphelios = new campeon("Aphelios","adc","rango","tirador",0 , "./img/aphelios.jpg")
let Ashe = new campeon("Ashe","adc","rango","tirador",0, "./img/ashe.jpg")
let aurelionSol = new campeon("Aurelion Sol","mid","rango","mago",0, "./img/aurelionsol.jpg")
let Azir = new campeon("Azir","mid","rango","mago",0, "./img/azir.jpg")
let Bardo = new campeon("Bardo","sup","rango","soporte",0, "./img/bardo.jpg")
let Belveth = new campeon("Bel'Veth","jg","melee","luchador",0, "./img/belveth.jpg")
let Blitzkrank = new campeon("Blitzkrank","sup","melee","tanque",0, "./img/blitzkrank.jpg")
let Brand = new campeon("Brand","sup","rango","mago",0, "./img/brand.jpg")
let Braum  = new campeon("Braum","sup","melee","soporte", 0 , "./img/braum.jpg")



let campeones = [Aatrox, Ahri, Akali, Akshan, Alistar, Amummu, Anivia, Annie, Aphelios, Ashe, aurelionSol, Azir, Bardo, Belveth, Blitzkrank, Brand, Braum]





let form = document.getElementById("formulario")
let formPos = document.getElementById("pos")
let formEst = document.getElementById("est")
let formEsp = document.getElementById("esp")
let formBtn = document.getElementById("formbtn")






form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let posicion = formPos.value
    let estilo = formEst.value
    let especialidad = formEsp.value
    let mids = campeones.filter((eleccion) => {
        return eleccion.posicion=== posicion && eleccion.estilo === estilo && eleccion.especialidad === especialidad
    });
    let end = document.getElementById('end')
    if (mids.length === 0){
        const o1= document.createElement("p")
        o1.textContent = "No hay campeones que cumplan con esas características"
        o1.classList.add('parrafos')
        end.appendChild(o1)
    } else if (mids.length === 1){
        for(let resultados of mids){
        const o2= document.createElement('p')
        o2.textContent= "Su campeón ideal es " + resultados.nombre
        o2.classList.add('parrafos')
        end.appendChild(o2)
        localStorage.setItem("main", JSON.stringify(resultados))}
    } else{
        for(let resultados of mids){
            const o3= document.createElement('p')
            o3.textContent= "Sus campeones ideales son " + resultados.nombre
            o3.classList.add('parrafos')
            end.appendChild(o3)
            localStorage.setItem("main", JSON.stringify(resultados))
        }
    }
})

let lastMain= JSON.parse(localStorage.getItem("main"))
console.log(lastMain)
const lastMainWritten= document.createElement('p')
lastMainWritten.textContent= "Su anterior main fue " + lastMain.nombre
lastMainWritten.classList.add('parrafos')
end.appendChild(lastMainWritten)
