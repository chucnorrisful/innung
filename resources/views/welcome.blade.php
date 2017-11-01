<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>SHK-Innung Augsburg</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,300,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            @media (min-width: 500px) {

            }

            html, body {
                background-color: #dcdbd8;
                color: #000000;
                font-family: 'Raleway', sans-serif;
                font-weight: 300;
                height: 100vh;
                margin: 0;
            }

            /*.top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }*/

            .grid {
                display: grid;
                grid-template-columns: 2fr  5fr 1fr 2fr;
                grid-template-rows: 1fr auto auto 8fr 1fr;
                grid-gap: 2px;
                grid-template-areas:
                    ". navi1 login ."
                    ". head  anlag ."
                    ". navi2 anlag ."
                    ". cont  news  ."
                    ". foot  .     .";
            }

            .links {
                grid-area: login;
                align-self: end;
                justify-self: end;
                padding: 1em;
            }

            .links > a {
                color: #636b6f;
                font-weight: 600;
                font-size: 12px;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
                padding: 1em;
            }

            .links > a:hover {
                background: #ffffff;
                color: #1e90ff;
            }

            .Nav1 {
                grid-area: navi1;
                align-self: end;
                display: grid;
                grid-template-columns: repeat(6, auto);
            }

            .Nav1 > div{
                padding: 1em;
                justify-self: stretch;
            }

            .Nav1 > div:hover{
                color: #1e90ff;
                background: #ffffff;
            }

            .Nav2 {
                background: #ffffff;
                grid-area: navi2;
                display: grid;
                grid-template-columns: repeat(5, auto);
            }

            .Nav2 > div {
                padding: 1em;
                justify-self: stretch;
            }

            .Nav2 > div:hover{
                color: #1e90ff;
                background: #dcdbd8;
            }

            .Head {
                background: #ffffff;
                font-weight: bold;
                font-size: 20px;
                letter-spacing: -0.5px;
                grid-area: head;
                padding: 1em;
            }



            .anlagenmech {
                background: #ebe326;
                grid-area: anlag;
                align-self: stretch;
            }

            .news {
                background: #eeeeee;
                grid-area: news;
                display: grid;
                grid-template-columns: 1fr;
                padding: 1em;
            }

            .content {
                background: #ffffff;
                grid-area: cont;
                display: grid;
                padding: 1em;
                grid-gap: 1em;
                grid-template-columns: 1fr auto;
                grid-template-rows: auto auto 1fr 1fr;
                grid-template-areas:
                    "welp img"
                    "welp ."
                    "rep rep"
                    "int int";
            }

            .content > img {
                grid-area: img;
            }

            .content > p {
                grid-area: welp;
                text-align: left;
            }

            .reparatur {
                grid-area: rep;
            }

            .interesse {
                grid-area: int;
            }

            headl {
                font-weight: 900;
                font-size: 24px;
            }

            .footer {
                grid-area: foot;
                padding: 1em;
                color: #93939d;
                font-size: 12px;
            }

            blue {
                color: dodgerblue;
            }
        </style>
    </head>
    <body>
    <div class="grid">
        <div class="Nav1">
            <div>Startseite</div>
            <div>Vorstand</div>
            <div>Bildungszentrum</div>
            <div>Mitglieder</div>
            <div>Presse</div>
            <div>Ausbildung</div>
        </div>

        @if (Route::has('login'))
            <div class="links">
                @auth
                    <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                        @endauth
            </div>
        @endif

        <a class="anlagenmech" href="http://www.zeitzustarten.de/"><div>
            <img src="{{ URL::asset('storage/anlagenmech.jpg') }}">
        </div></a>
        <div class="news">
            <div>
                Schulungen
            </div>
            <div>
                SHK Systemtechniker
            </div>
            <div>
                Ganz schön frisch
            </div>
            <div>
                Kundendienst wird immer wichtiger
            </div>
            <div>
                Eine Ära geht zu Ende
            </div>
        </div>

        <div class="Head">
            Innung <blue>Spengler-, Sanitär, Heizungs- und Klimatechnik</blue> Augsburg
            <img src="{{ URL::asset('storage/logo.jpg') }}">
        </div>

        <div class="Nav2">
            <div>Kontakt</div>
            <div>Impressum</div>
            <div>Organisation</div>
            <div>Formulare</div>
            <div>Innungssatzung</div>
        </div>

        <div class="content">
            <img src="{{ URL::asset('storage/luftbild1.jpg') }}">
            <p><headl>Herzlich willkommen!</headl><br><br>In der Innung Spengler-, Sanitär, Heizungs- und Klimatechnik Augsburg sind rund 180 Betriebe aus dem Installateur-, Heizungsbauer- und Klempnerhandwerk organisiert.
                <br><br>
                Die Innung ist die handwerkspolitische In­te­res­sen­ver­tre­tung für die in ihr organisierten Mit­gliedsbetriebe und gibt Ihnen Unterstützung in den Bereichen Technik, Arbeits- und Sozialrecht, Arbeitssicherheit und Betriebswirtschaft.
                <br><br>
                Darüber hinaus betreut die Innung die rund 400 Ausbildungsverhältnisse im Installateur-, Heizungsbauer- und Klempnerhandwerk und führt die obligatorische überbetriebliche Ausbildung in der Berufsausbildung durch.
                <br><br>
                Die Innung betreibt ein Ausbildungszentrum, in dem auch der Bereich Fortbildung großgeschrieben wird. Anpassungsfortbildung im Beruf gehört ebenso selbstverständlich zum Angebot, wie die nach den Anforderungen der letzten Novellierung der Handwerksordnung gestalteten Vorbereitungskurse auf die Meisterprüfung im Installateur-, Heizungsbauer- und Klempnerhandwerk.
            </p>
            <div class="interesse">
                Interesse an einer Mitgliedschaft?
                Anmeldeformular >> PDF Download
            </div>
            <div class="reparatur">
                Reparatur-Notdienste der Innung Sanitär Heizung Klima >> PDF Download
            </div>
        </div>
        <div class="footer">
            © 2011 | Innung Spengler-, Sanitär-, Heizungs- und Klimatechnik
            Unterer Talweg 64 | 86179 Augsburg | Telefon: (0821) 80 84 60 | E-Mail: info@shk-schwaben.de
        </div>
    </div>
    </body>
</html>