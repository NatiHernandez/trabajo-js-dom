// console.log("hola")

// const moviesFiltered = movies.filter( movie => movie.Title.toLowerCase().includes(movieName.toLowerCase()) );

const apiKey= 'a62c1b6c10babde2206b6dab88c018a0';


fetch(`http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
   .then(res => /* return */ res.json())
   .then(data => {
    // console.log(data)
      // const indice= data.results[0].poster_path
      // const foto = `https://image.tmdb.org/t/p/original${indice}`;
      
      const indice = data.results;
      const div = document.querySelector('.segunda .papaCaja');

      //'https://image.tmdb.org/t/p/original+indice[i].poster_path
      for (let i= 0; i<indice.length; i++){
        if(i<5){
          div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
        }
      }

      })

 fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then(res => /* return */ res.json())
    .then(data => {
        //console.log(data)
         // const indice= data.results[0].poster_path
         // const foto = `https://image.tmdb.org/t/p/original${indice}`;
         
         const indice = data.results;
         const div = document.querySelector('.tercera .papaCaja');
   
         //'https://image.tmdb.org/t/p/original+indice[i].poster_path
         for (let i= 0; i<indice.length; i++){
           if(i<5){
             div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
           }
         }
   
         })
   
   
  fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(res => /* return */ res.json())
    .then(data => {
          //console.log(data)
              // const indice= data.results[0].poster_path
              // const foto = `https://image.tmdb.org/t/p/original${indice}`;
              
          const indice = data.results;
          const div = document.querySelector('.cuarta .papaCaja');
        
              //'https://image.tmdb.org/t/p/original+indice[i].poster_path
          for (let i= 0; i<indice.length; i++){
          if(i<5){
            div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
                }
          }
          })

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
                    }
          }
             
      })
      
      
  document.querySelector('.uno').onclick = function() {myFunction()};
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
  
// como hacer que paginaActual varie solo de nro.


                // boton.onclick = function mostrar(){
                //  let paginaActual=3;
                //  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${paginaActual}`)
                //  .then( res =>  res.json())
                //            .then( data => {
                             
                //          const indice = data.results;
                //          const div = document.querySelector('.segunda .papaCaja');
                   
                //          for (let i= 0; i<indice.length; i++){
                //              div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
                           
                //          }
                //          })
                //   }


         }


 
       })
   }

