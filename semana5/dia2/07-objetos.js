let mascota ={
    nombre: 'Backus',
    raza: 'Poodle',
    color: 'Blanco',
    edad: 13,
    hobbies: ["Jugar","Perseguir gatos","Comer pate"],
    comer: function(){
        console.log("nam nam nam");
    },
    ladrar: true,
};

let albumMusical ={
    nombre: 'After Hours',
    fechaLanzamiento:"20/03/2020",
    genero:["Dream pop", "Drum and Bass"],
    canciones:[
        {
            titulo: "Heartless",
            duracion: 3.21,
            autor: ["Abel Tesfaye", "Leland Wayne"],
        },
        {
            titulo: "Blinding Lights",
            duracion: 3.22,
            autor: ["Abel Tesyafe", "Ahmad Balshe", "Jason Quennevile"],
        },
        
    ],
};

console.log(albumMusical.canciones[1].autor[2]);