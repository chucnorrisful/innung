<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #dcdbd8;
                color: #060606;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
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
                grid-template-columns: 1fr  5fr 2fr 1fr;
                grid-template-rows: 2fr 2.5fr .5fr 10fr 2fr;
                grid-gap: 2px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .Nav1 {
                grid-row: 1/2;
                grid-column: 2/3;
                align-self: end;
                display: grid;
                grid-template-columns: repeat(6, 1fr);
            }

            .Nav2 {
                background: #ffffff;
                grid-row: 3/4;
                grid-column: 2/3;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
            }

            .nav2 > div {
                align-self: center;
                justify-self: center;
            }

            .links {
                grid-row: 1/2;
                grid-column: 3/4;
                align-self: end;
            }

            .Head {
                background: #ffffff;
                font-weight: bold;
                font-size: 20px;
                letter-spacing: -0.5px;
                grid-row: 2/3;
                grid-column: 2/3;
            }

            .anlagenmech {
                background: #eeeeee;
                grid-row: 2/4;
                grid-column: 3/4;
            }

            .news {
                background: #eeeeee;
                grid-row: 4/5;
                grid-column: 3/4;
                display: grid;
                grid-template-columns: 1fr;
            }

            .content {
                background: #ffffff;
                grid-row: 4/5;
                grid-column: 2/3;
                display: grid;
                grid-template-columns: 1fr;
                padding: 1em;
            }

            .welcome {
                display: grid;
                grid-template-columns: 3fr 1fr;
                grid-gap: 1em;
            }

            .welcome > img {
                grid-row: 1/2;
                grid-column: 2/3;
            }

            .welcome > p {
                grid-row: 1/3;
                grid-column: 1/2;
                text-align: justify;
            }

            headl {
                font-weight: 900;
                font-size: 24px;
            }

            .footer {
                grid-row: 5/6;
                grid-column: 2/4;
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

        <div class="anlagenmech">
            <img src="http://192.168.178.29/storage/anlagenmech.jpg">
        </div>
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
            <img src="http://192.168.178.29/storage/logo.jpg">
        </div>

        <div class="Nav2">
            <div>Kontakt</div>
            <div>Impressum</div>
            <div>Organisation</div>
            <div>Formulare</div>
            <div>Innungssatzung</div>
        </div>

        <div class="content">
            <div class="welcome">
                <img src="http://192.168.178.29/storage/luftbild1.jpg">
                <p><headl>Herzlich willkommen!</headl><br><br>In der Innung Spengler-, Sanitär, Heizungs- und Klimatechnik Augsburg sind rund 180 Betriebe aus dem Installateur-, Heizungsbauer- und Klempnerhandwerk organisiert.
                    <br><br>
                    Die Innung ist die handwerkspolitische In­te­res­sen­ver­tre­tung für die in ihr organisierten Mit­gliedsbetriebe und gibt Ihnen Unterstützung in den Bereichen Technik, Arbeits- und Sozialrecht, Arbeitssicherheit und Betriebswirtschaft.
                    <br><br>
                    Darüber hinaus betreut die Innung die rund 400 Ausbildungsverhältnisse im Installateur-, Heizungsbauer- und Klempnerhandwerk und führt die obligatorische überbetriebliche Ausbildung in der Berufsausbildung durch.
                    <br><br>
                    Die Innung betreibt ein Ausbildungszentrum, in dem auch der Bereich Fortbildung großgeschrieben wird. Anpassungsfortbildung im Beruf gehört ebenso selbstverständlich zum Angebot, wie die nach den Anforderungen der letzten Novellierung der Handwerksordnung gestalteten Vorbereitungskurse auf die Meisterprüfung im Installateur-, Heizungsbauer- und Klempnerhandwerk.
                </p>
            </div>
            <div class="interesse">
                Interesse an einer Mitgliedschaft?
                Anmeldeformular >> PDF Download
            </div>
            <div class="reparatur">
                Reparatur-Notdienste der Innung Sanitär Heizung Klima
                PDF Download
            </div>
        </div>
        <div class="footer">
            © 2011 | Innung Spengler-, Sanitär-, Heizungs- und Klimatechnik
            Unterer Talweg 64 | 86179 Augsburg | Telefon: (0821) 80 84 60 | E-Mail: info@shk-schwaben.de
        </div>
    </div>
    </body>
</html>
