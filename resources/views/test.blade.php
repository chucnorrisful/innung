<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Schnub</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #dcdbd8;
                color: #000000;
                font-family: 'Raleway', sans-serif;
                font-weight: 300;
                height: 100vh;
                margin: 0;
            }

            .container {
                height: 100vh;
                display: grid;
                grid-template-areas:
                    ". tit tit sea ."
                    ". pic pic pic ."
                    ". art tex tex ."
                    ". foo foo foo .";
                grid-template-rows: 1fr 5fr 5fr 1fr;
                grid-template-columns: 3fr 4fr 2fr 2fr 3fr;
            }

            .titel {
                grid-area: tit;
                margin: 1em;
            }

            .bilder {
                grid-area: pic;
            }

            .suche {
                grid-area: sea;
                margin: 1em;

            }

            .suche2 {
                grid-area: sea;
                background: #6c8cdc;
            }

            .suche2:hover {
                background: #dc565f;
            }

            .footer {
                grid-area: foo;
                background: #cff1ee;
            }

            .article {
                grid-area: art;
                background: #eae8ff;
            }

            .text {
                grid-area: tex;
                background: #e2e0f6;
            }

        </style>
    </head>
    <body>
        <div class="container">
            <div class="titel">Tierheim</div>
            <div class="suche2"></div>
            <div class="suche">Suche</div>
            <div class="bilder">
                <img src="http://88.67.59.206/storage/anlagenmech.jpg">
                <img src="http://88.67.59.206/storage/luftbild1.jpg">
            </div>
            <div class="article">Wuffo</div>
            <div class="text">Wir helfen Tieren!</div>
            <div class="footer">Footer</div>

        </div>
    </body>
</html>