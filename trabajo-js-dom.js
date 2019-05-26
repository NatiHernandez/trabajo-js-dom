// console.log("hola")

// const moviesFiltered = movies.filter( movie => movie.Title.toLowerCase().includes(movieName.toLowerCase()) );

const apiKey= 'a62c1b6c10babde2206b6dab88c018a0';

function fetchear (url, numeroDeCaja) {
  fetch(url)
  .then(res => /* return */ res.json())
  .then(data => {
     
const indice = data.results;
const div = document.querySelector(`.${numeroDeCaja} .papaCaja`);

     for (let i= 0; i<indice.length; i++){
       if(i<5){
         div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
       }
     }

     })

}

function modal (){
  //CREAR EL MODAL
 const modal = document.querySelector('.modal');
 modal.classList.remove('noDisplay')
 fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        const indice = data.results;



        ///INTENTO OBTENER EL ID DE LA CAJITA EN LA QUE HAGO CLICK Y ME TIRA EL DE LA ULTIMA CAJITA DE LA PAGINA(EL DE LA POSICION 19)
      for(let i=0; i < indice.length; i++ )  {
        const tituloModal = document.querySelector('.tituloModal');
        tituloModal.innerHTML = indice[i].id;
      }      


      })




 modal.onclick  = function salir (){
  var modal = document.querySelector('.modal');
  modal.classList.add('noDisplay')


}
}

//funcino para ponerle la clase CAJITA a las cajitas

const cajitas =  document.querySelectorAll('.cajita')          
      for( let i =0; i< cajitas.length; i++){  
                cajitas[i].onclick = function () {modal ()};          
          }

//POPULAR
fetchear (`http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, 'segunda');
//TOP RATED
fetchear (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`, 'tercera')
//UP COMING
fetchear (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`, 'cuarta')
// NOW PLAYING


  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(res => /* return */ res.json())
    .then(data => {
          //console.log(data)
          // const indice= data.results[0].poster_path
          // const foto = `https://image.tmdb.org/t/p/original${indice}`;
                   
          const indice = data.results;
          const div = document.querySelector('.quinta .papaCaja');
             
          //'https://image.tmdb.org/t/p/original+indice[i].poster_path
          for (let i= 0; i<indice.length; i++){
          if(i<5){
                   div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
                  

                  const cajitas =  document.querySelectorAll('.cajita')
                    
                  for( let i =0; i< cajitas.length; i++){  
                    
                    cajitas[i].onclick = function () {modal ()}; 
                            
                   
                    }
          }}

        })
        
      
           
  document.querySelector('.uno').onclick = function() {myFunction()};
  document.querySelector('.segunda .conFlexBox .viewAll').onclick = function() {myFunction()};

   function myFunction() {
    document.querySelector('.primer').classList.add('noDisplay');
    document.querySelector('.tercera').classList.add('noDisplay');
    document.querySelector('.cuarta').classList.add('noDisplay');
    document.querySelector('.quinta').classList.add('noDisplay');

    fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(res => /* return */ res.json())
    .then(data => {

       const indice = data.results;
       const div = document.querySelector('.segunda .papaCaja');
 
       for (let i= 5; i<indice.length; i++){
           div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;

       }
       const boton = document.createElement('button')
       const segundaP = document.querySelector('.segunda')
       segundaP.appendChild(boton)
       boton.innerHTML='Cargar más';  

      document.querySelector('.uno').onclick = function hola(){ console.log('no deberia aparecer más')};
      document.querySelector('.conFlexBox .viewAll').onclick = function hola( ){};

    let paginaActual=1;

    boton.onclick = function mostrar(){
    
    paginaActual+=1
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`)
    .then( res =>  res.json())
    .then( data => {
      
      const indice = data.results;
      const div = document.querySelector('.segunda .papaCaja');
      
      for (let i= 0; i<indice.length; i++){
        div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
        
      }
    })

    const cursor = document.getElementsByName('imagen')
    cursor.style.cursor = 'pointer';
         }
       })
   }

   document.querySelector('.logoAda').onclick = function() {myOtraFunction()};

 
    function myOtraFunction() {
     document.querySelector('.primer').classList.remove('noDisplay');
     document.querySelector('.tercera').classList.remove('noDisplay');
     document.querySelector('.cuarta').classList.remove('noDisplay');
     document.querySelector('.quinta').classList.remove('noDisplay');
   
// como hacer para que se borren las cajas
       }

               
  document.querySelector('.dos').onclick = function() {myFunction()};
  document.querySelector('.conFlexBox .viewAll').onclick = function() {myFunction()};

   function myFunction() {
    document.querySelector('.primer').classList.add('noDisplay');
    document.querySelector('.tercera').classList.add('noDisplay');
    document.querySelector('.cuarta').classList.add('noDisplay');
    document.querySelector('.quinta').classList.add('noDisplay');

    fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then(res => /* return */ res.json())
    .then(data => {

       const indice = data.results;
       const div = document.querySelector('.segunda .papaCaja');
 
       for (let i= 5; i<indice.length; i++){
           div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;

       }
       const boton = document.createElement('button')
       const segundaP = document.querySelector('.segunda')
       segundaP.appendChild(boton)
       boton.innerHTML='Cargar más';  

      document.querySelector('.uno').onclick = function hola(){ console.log('no deberia aparecer más')};
      document.querySelector('.conFlexBox .viewAll').onclick = function hola( ){};

    let paginaActual=1;

    boton.onclick = function mostrar(){
    
    paginaActual+=1
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`)
    .then( res =>  res.json())
    .then( data => {
      
      const indice = data.results;
      const div = document.querySelector('.segunda .papaCaja');
      
      for (let i= 0; i<indice.length; i++){
        div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
        
      }
    })

    const cursor = document.getElementsByName('imagen')
    cursor.style.cursor = 'pointer';
         }
       })
   }