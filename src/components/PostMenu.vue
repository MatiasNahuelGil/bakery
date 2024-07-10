<template>

    <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
               <a href="" class="navbar-brand" ><img v-bind:src="require('/src/assets/logo.png')" alt="logo"></a>
               <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral"> <!--boton que abre el menu-->
                     <span class="navbar-toggler-icon"></span>
               </button>
               <section class="offcanvas offcanvas-start bg-dark" id="menuLateral" tabindex="-1">
                <div class="offcanvas-header" data-bs-theme="dark">
                    <h5 class="offcanvas-title text-white">Backery</h5>
                    <button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
                    <ul class="text-white navbar-nav fs-5 ">
                        <li class="nav-item p-3 py-md-1">
                            <router-link class="text-decoration-none nav-link" to="/">HOME</router-link> 
                        </li>

                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="#products">PRODUCTS</a>
                        </li>

                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="#bread">OUR BREAD</a>
                        </li>

                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="#breakfast">BREAKFAST</a>
                        </li>
                    
                        <li class="nav-item p-3 py-md-1">
                            <a class="nav-link" href="#contact">CONTACT</a>
                        </li>
                    </ul>

                    <div class="d-lg-none align-self-center py-3">
                        <a href=""><v-icon class="mx-3" name="bi-facebook"   scale="1.5" /></a>
                        <a href=""><v-icon class="mx-3" name="bi-whatsapp" color="rgb(23, 146, 43)"  scale="1.5" /></a>
                        <a href=""><v-icon class="mx-3" name="bi-instagram" color="rgb(165, 16, 211)"  scale="1.5" /></a>
                        <a href=""><v-icon class="mx-3" name="bi-youtube" color="rgb(211, 16, 16)" scale="1.8"  /></a>
                    </div>
                </div>
               </section>
          </div>
    </nav>

   
</template>

<script setup>
</script>

<style scoped lang="scss">
@import "/src/scss/variables";

//Barra de navegación
.navbar{
    background-color: $primary-color;
        .navbar-toggler, .btn-close{
               border: none;
               outline: none;
               box-shadow: none;
         }
         .navbar-brand{
               img{
                   width: 30px;
                   height: 30px;
                }
         }
}

</style>