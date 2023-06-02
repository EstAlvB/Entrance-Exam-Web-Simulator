<!doctype html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/output.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet">
    <title>Ingreso a Universidades</title>
</head>

<body>
    <header class="bg-black">
        <div class="flex py-4 lg:mx-10 justify-between items-center">
            <h1 id="evaluationTitle" class="font-lilita text-white text-2xl"></h1>
            <h3 id="timer" class="font-nunito text-white text-base"></h3>
        </div>
    </header>
    <main>
        <div class="mx-10 py-4">
            <p id="question" class="font-nunito text-black"></p>
        </div>
        <div class="mx-10 py-4 form-control space-y-3 text-black font-nunito font-normal text-base">
            <div class="flex items-center gap-x-3">
                <input id="a1" name="answers" type="radio" class="radio checked:bg-soft-orange" value="">
                <label for="a1" class="block leading-6"></label>
            </div>
            <div class="flex items-center gap-x-3">
                <input id="a2" name="answers" type="radio" class="radio checked:bg-soft-orange" value="">
                <label for="a2" class="block leading-6"></label>
            </div>
            <div class="flex items-center gap-x-3">
                <input id="a3" name="answers" type="radio" class="radio checked:bg-soft-orange" value="">
                <label for="a3" class="block leading-6"></label>
            </div>
            <div class="flex items-center gap-x-3">
                <input id="a4" name="answers" type="radio" class="radio checked:bg-soft-orange" value="">
                <label for="a4" class="block leading-6"></label>
            </div>
        </div>
        <div class="flex justify-between items-center lg:mx-10">
            <h5 id="questionNumber" class="font-nunito text-black"></h5>
            <button id="nextButton" class="btn bg-soft-blue border-0 text-black font-nunito hover:text-white hover:bg-soft-gray">
                Siguiente
            </button>
        </div>
    </main>
    <?php
        echo '<script> sessionStorage.setItem("EVAL_TYPE", "' . $_GET['EVAL_TYPE'] . '");</script>';
    ?>
    <script type="text/javascript" src="/src/js/evaluation_script.js"></script>
</body>

</html>