<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <link href="https://fonts.cdnfonts.com/css/shine-coasty" rel="stylesheet">
</head>

<body style="background-color: #E6BAA3">
    <header>
        <!-- place navbar here -->
    </header>
    <main>
        <section class="vh-100">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 text-black">
                        </br>
                        <div class="px-5 ms-xl-4">
                            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
                            <span class="h1 fw-bold mb-0" style="font-family: 'Shine Coasty', sans-serif;">Cocinando con la Máma 🍽️</span>
                        </div>

                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form method="POST" action="{{route('register')}}" style="width: 23rem;">
                                @csrf
                                <h2>Registrarse</h2>
                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" name="email" class="form-control form-control-lg" />
                                    <label class="form-label" for="form2Example18">Correo Eletrónico</label>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" name="password" id="form2Example28" class="form-control form-control-lg" />
                                    <label class="form-label" for="form2Example28">Contraseña</label>
                                </div>
                                <div class="pt-1 mb-4">
                                    <button class="btn btn-outline-danger" type="submit">Entrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src="https://wallpapercave.com/wp/wp12258324.png" alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
                    </div>
                </div>
            </div>
        </section>

    </main>
    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>

</html>