<template>
   <MainLayout>
        <section class="container-cover pe-5" id="products">
          <article class="col-12 col-md-6 col-lg-6">
             <div>
                <img v-bind:src="require('/src/assets/logo.png')" alt="logo">
                <h2 class="fs-1">Delicius breads</h2>
                <p class="fs-4">Explore the most delicious breakfasts </p>
                <button class="btn-products">View Products</button>
             </div>
           </article>
          </section>
        <section class="container-breads p-5 " id="bread">
           <div>
              <h2>Our bread</h2>
              <p>"Discover our artisanal range of breads, from classic whole wheat to delicious brioche, baked with natural ingredients and crafted to satisfy your craving for authenticity."</p>
              <PostBread/>
           </div>
        </section>      
        <section class="bg-dark pb-5" id="breakfast">
             <div class="text-center text-white ">
                <h2 class="p-5">Brownies, pastries, etc</h2>
             </div>
             <div class="container text-white d-flex flex-wrap justify-content-center">
              
                   <PostBreakfast/>
             
             </div>
        </section>
        <section class="p-5 sweet-container d-flex flex-column align-items-center ">
             <h2 class="text-white text-center">Sweets</h2>
             <div class="d-flex sweet-cards-container">
                <div class="card-sweet">
                       <h3>Cookies</h3>
                       <ul>
                         <li>Biscotti</li>  
                         <li>Chocolate Chip</li>
                         <li>Oatmeal Pecan</li>
                         <li>Seasonal specials</li>
                         <li>Oat Ginger Bar</li>
                       </ul>
                </div>
                <div class="card-sweet">
                       <h3>Scones</h3>
                       <ul>
                         <li>Classic butter scone</li>              
                         <li>Fresh fruit buttermilk scones</li>
                         <li>Handmade scones</li>
                       </ul>
                </div>
                <div class="card-sweet">
                      <h3>Other</h3>
                      <ul>
                         <li>Cranberry Pecan Granola</li>
                         <li>Bread Pudding</li>
                         <li>Banana Bread</li>
                         <li>Bread Pudding</li>
                         <li>Seasonal galletes</li>
                      </ul>
                </div>
             </div>
        </section>
        <section class="container-leaders" id="contact">
              <article class="d-flex p-5 container-article-leaders">
                   <div class="container-img-leader">
                     <img class="img-leaders" v-bind:src="require('/src/assets/img-2.jpg')" alt=" panadero sonriendo y aplaudiendo">
                   </div>
                   <div class="container-paragraph-leader">
                    <h2>We’d Like to Hear from You</h2>
                    <p>We are leaders in the manufacture and distribution of frozen doughs, with an extensive range of bread and pastries and a management oriented to satisfy the needs of our customers.</p>
                    <b class="fs-1">1+ 41234281</b>
                   </div>
              </article>
        </section>
        <section class="container-info d-flex">
             <div class="container-newsletter">
                  <h2><b>Sign up for the newsletter</b></h2>
                  <p>Want to be the first to read our news? Subscribe to the newsletter to keep abreast of all events.</p>
                  <form >
                     <input type="email" placeholder="Enter a valid email adress">
                     <button>Submit</button>
                  </form>
             </div>
             <div class="container-hours">
                 <h2><b>Hours & Location</b></h2>
                 <p>14 E 12th St, New york, NY </p>
                 <b>Monday - Sunday</b>
                 <b>7:00am - 8:00pm</b>
             </div>
        </section>
   </MainLayout>
</template>

<script setup>
    import MainLayout from "@/layouts/MenuLayout.vue";
    import PostBread from "@/components/PostBread.vue";
    import PostBreakfast from "@/components/PostBreakfast.vue"
    
    
  
</script>

<style lang="scss" scoped>
@import "/src/scss/variables";

.btn-products:hover{
  background-color: $primary-color;
}

.container-cover{
  background-color: $secondary-color;
  background-image: url("/src/assets/img-fondo.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-size: cover;
  height: 600px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
  color: #fff;

    div{
      img{
        width: 200px;
        height: 200px;
      }
     
      button{
        background-color: $secondary-color;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 10px;
        width: 200px;
        color: #fff;
      }
    }

}

.container-breads{
  div{
    text-align: center;
  }
}


.sweet-container{
  
  background-image: url("/src/assets/img-fondo4.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  background-position: center;
  gap:8em;
  .sweet-cards-container{
    gap: 1em;
    justify-content: space-around;
    align-items: center;
    
    .card-sweet{
      width: 300px;
      height: 300px;
      padding:15px;
      border-radius: 1em;
      background-color: $fourth-color;
    }
  }
}

@media (max-width:1024px){
  
  .sweet-cards-container{
    flex-direction: column;
     
  }
  .card-sweet{
    width: 400px;
    height: 400px;
    
  }
}




.container-leaders {
  background-color: $tertiary-color;

  .container-article-leaders {
    padding: 15px;

    .container-img-leader {
      width: 100%; /* Ajustado para ocupar el ancho completo del contenedor */
      
      .img-leaders {
        max-width: 100%;
      }
    }

    .container-paragraph-leader {
      display: flex;
      flex-direction: column;
      justify-content: center; /* Corregido: usar center en lugar de sp */
      width: 100%; /* Ajustado para ocupar el ancho completo del contenedor */
      padding: 1em;
      color: $fourth-color;
    }
  }
}

.container-info{
  align-items: center;
  height: 500px;
  .container-newsletter,.container-hours{
    display: flex;
    flex-direction: column;
    gap:1em;
    padding: 2em;
    
  }
  .container-newsletter input{
      width: 50%;
      padding: .7em;
    }
    .container-newsletter button{
      padding: .7em;
      outline: none;
      transition-property: background;
      transition-duration: 0.5s;
    }
    .container-newsletter button:hover{
      background-color: $secondary-color;
      color: $fourth-color;
    }
}


@media (max-width: 815px) {
  .container-leaders {
    width: 100%;
    min-width: 300px;
  }
  .container-info,
  .container-article-leaders {
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
  .container-img-leader,
  .container-paragraph-leader {
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .container-article-leaders {
    padding: 15px;
    .container-img-leader {
      max-width: 100%; /* Ajustado para ocupar el ancho completo del contenedor */
    }
    .container-paragraph-leader {
      width: 100%; /* Ajustado para ocupar el ancho completo del contenedor */
      padding: 1em;
      color: $fourth-color;
    }
  }
}

</style>