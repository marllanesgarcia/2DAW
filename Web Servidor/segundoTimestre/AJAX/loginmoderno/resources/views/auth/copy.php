<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="{{ asset('assets/estilos.css')}}">
    </head>

    <body>
        <header>
            <!-- place navbar here -->
        </header>
        <main>
<section class="h-100 gradient-form" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                  <img src="https://www.icegif.com/wp-content/uploads/2022/12/icegif-286.gif"
                    style="width: 185px;" alt="logo">
                  <h4 class="mt-1 mb-5 pb-1">Welcome to Nyan!</h4>
                </div>

                <form method="POST" action="{{route('register')}}">
                @csrf 
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example11">Nombre</label>
                    <input type="text" name="name" id="form2Example33" class="form-control"
                    placeholder="tu nombre de usuario" />
                  </div>
                  
                  <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">Email</label>
                        <input type="text" name="email" id="form2Example44"
                        class="form-control"/>
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">Confirmar Contraseña</label>
                        <input type="password" name="password" id="form2Example44"
                        class="form-control"/>
                    </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Registrarse</button>
                    <a class="text-muted" href="#!">¿Olvidaste la contraseña?</a>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">Somos la mejor empresa de gatos del mundo</h4>
                <p class="small mb-0">En nuestra empresa, nos tomamos la responsabilidad afectiva con los gatos como
                    algo muy importante. Si tienes un gato en tu casa, tus animos mejoraran, tu energía será más alegre,
                tus problemas se solucionaran. ¡ADOPTA A UN GATO!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </main>
        <footer>
            <!-- place footer here -->
        </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>



<!--  -->