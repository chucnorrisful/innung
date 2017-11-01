<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>24H Clock</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ URL::asset('css/style.css') }}">

        <script type="text/javascript" src="{{ URL::asset('js/p5.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/addons/p5.dom.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/addons/p5.sound.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/sketch.js') }}"></script>

    </head>
    <body background="{{ URL::asset('storage/dark.jpg') }}">
        <div id="sketch-holder"></div>
    </body>
</html>