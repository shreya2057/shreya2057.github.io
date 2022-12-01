document.write(`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-4" href="../index.html">
            <img src="../images/brand.png" alt="Logo" width="35" height="35" class="d-inline-block align-text-top me-2"></img>
            Shreya Shrestha
            </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold fs-5" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
            <a class="nav-link" aria-current="page" href="../index.html">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../html/about.html">About</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Certification</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Resume</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <button class="btn btn-outline-warning" type="submit">Contact</button>
        </form>
        </div>
    </div>
    </nav>
`)