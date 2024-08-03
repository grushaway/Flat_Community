<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>flat</title>
    <link id="theme-stylesheet" rel="stylesheet" href="stylemain.css" />
</head>

<body>
    <div id="content-table">
        <div class="spacer" id="first-container">
            <div class="language-switcher">
                <div class="current-language" id="current-language"><img src="images/en.svg"></div>
                <div class="arrow">
                    <span class="arrow-top"></span>
                    <span class="arrow-bottom"></span>
                </div>
                <div class="dropdown-content">
                    <a href="flat_en.html" onclick="switchLanguage('en')"><img src="images/en.svg"></a>
                    <a href="flat_ru.html" onclick="switchLanguage('ru')"><img src="images/rus.svg"></a>
                    <a href="flat_sr.html" onclick="switchLanguage('en')"><img src="images/sr.svg"></a>
                </div>
            </div>

            <script>
                function switchLanguage(lang) {
                    const texts = document.querySelectorAll('.text-lang');
                    texts.forEach(text => {
                        if (text.id.includes(lang)) {
                            text.style.display = 'block';
                        } else {
                            text.style.display = 'none';
                        }
                    });

                    // Меняем текст в текущем языке
                    document.getElementById('current-language').textContent = lang.toUpperCase();
                }
            </script>

            <img src="images/flat1.png" class="flatimages">
        </div>

        <button class="back-to-top" id="back-to-top"></button>
        <script src="script.js"></script>

        <div class="background-main">
            <div class="header" id='navbar'>
                <a href="#Main">Main</a>
                <a href="#Breakfast">Breakfast</a>
                <a href="#Desserts">Desserts</a>
                <a href="#Drinks">Drinks</a>
            </div>

            <script>
                window.addEventListener('scroll', function () {
                    var header = document.getElementById('navbar');
                    var spacer = document.querySelector('.spacer');
                    var spacerBottom = spacer.offsetTop + spacer.offsetHeight;

                    if (window.pageYOffset > spacerBottom - 20) {
                        header.classList.add('fixed');
                    } else {
                        header.classList.remove('fixed');
                    }
                });
            </script>


            <div class="background-text">
                <p class="text1" id="Main">Cold dishes</p>
            </div>

            <div class="cold-images">
                <img src="images/main/Smoked.png">
                <img src="images/main/Green.png">
                <img src="images/main/Gazpacho.png">
                <img src="images/main/Antipasto.png">
            </div>
            <div class="grid-container">
                <div class="text2"><span>Smoked pork belly <span class="text-edit">with</span> tonnato sauce</span>
                    <span>650</span>
                </div>

                <div class="text2"><span>Green <span class="text-edit">salad</span> with citrus dressing</span>
                    <span>520</span>
                </div>

                <div class="text2"><span>Gazpacho with <br>tomatoes, <span class="text-edit">strawberries</span> and
                        cream
                        cheese</span>
                    <span> 690</span>
                </div>
                <div class="text2"><span><span class="text-edit">Antipasto</span> (mozzarella, smoked pork, olives,
                        sun-dried
                        tomatoes)</span>
                    <span>860</span>
                </div>
            </div>
        </div>
        <div class="main-container">
            <div class="background-textt">
                <p class="text1">Main dishes</p>
            </div>
            <div class="main-images">
                <img src="images/main/Stewed.png">
                <img src="images/main/vongole.png">
                <img src="images/main/Gnocchi.png">
                <img src="images/main/parmesan.png">
                <img src="images/main/Cheese.png">
            </div>
            <div class="grid-container2">
                <div class="text3"><span>Stewed beef cheeks <span class="text-edit">with</span> puree</span>
                    <span>980</span>
                </div>

                <div class="text3"><span>Tagliatelle <span class="text-edit">with</span> vongole and sweet
                        tomatoes</span>
                    <span>950</span>
                </div>

                <div class="text3"><span>Gnocchi with bacon <span class="text-edit">and</span> sun-dried
                        tomatoes</span>
                    <span> 690</span>
                </div>
                <div class="text3"><span> Tagliatelle <span class="text-edit">with</span> sweet tomatoes <span
                            class="text-edit">and</span> parmesan <span class="text-edit">(veg)</span></span>
                    <span>860</span>
                </div>
                <div class="text3"><span>Cheese soup <span class="text-edit">(veg)</span></span>
                    <span>750</span>
                </div>
            </div>
        </div>

        <div class="container-br">
            <div class="background-texttt">
                <p class="text1" id="Breakfast">Breakfast</p>
            </div>
            <div class="main-images">
                <img src="images/breakfast/pepe.png">
                <img src="images/breakfast/Omelette.png">
                <img src="images/breakfast/Grilled.png">
                <img src="images/breakfast/French.png">
                <img src="images/breakfast/eggs.png">
            </div>

            <div class="grid-container2">
                <div class="text4"><span>Omelette with pastrami <span class="text-edit2">and</span> cacio e pepe
                        sauce</span>
                    <span>760</span>
                </div>

                <div class="text4"><span>Omelette with <span class="text-edit2">bologna sausage</span> and sun-dried
                        tomatoes</span>
                    <span>680</span>
                </div>

                <div class="text4"><span>Grilled cheese sandwich <span class="text-edit2">with pastrami</span> and
                        sun-dried
                        tomatoes</span>
                    <span> 740</span>
                </div>
                <div class="text4"><span> French toast with <br>cream cheese and <span class="text-edit2">berry
                            jam</span></span>
                    <span>720</span>
                </div>
                <div class="text4"><span>Turkish <span class="text-edit2">eggs</span> with cheese toast</span>
                    <span>980</span>
                </div>
            </div>
        </div>

        <div class="desserts-container">
            <div class="background-texttt">
                <p class="text1" id="Desserts">Desserts</p>
            </div>
            <div class="main-images">
                <img src="images/desserts/shu.png">
                <img src="images/desserts/poppy.png">
                <img src="images/desserts/blue.png">
                <img src="images/desserts/lemon.png">
                <img src="images/main/Antipasto.png">
            </div>

            <div class="grid-container2">
                <div class="text4"><span>Choux Pie <br>- with <span class="text-edit2">cottage </span>cream <br>- with
                        chocolate <span class="text-edit2">cream</span>
                        <br>- <span class="text-edit2">with</span> berry cream</span>
                    <span>300</span>
                </div>

                <div class="text4"><span>Poppy <span class="text-edit2">seed</span>
                        tiramisu</span>
                    <span>700</span>
                </div>

                <div class="text4"><span>Blueberry <span class="text-edit2">cake</span></span>
                    <span> 300</span>
                </div>
                <div class="text4"><span> Lemon <span class="text-edit2">cake with</span> lemon cream and pink
                        pepper</span>
                    <span>350</span>
                </div>
                <div class="text4"><span>Banana cake with <span class="text-edit2">vanilla </span> ice cream</span>
                    <span>350</span>
                </div>
            </div>

        </div>


        <div class="drink-container">
            <div class="background-text-drink">
                <p class="text1" id="Drinks">Drinks</p>
            </div>
            <div class="grid-container-drinks">
                <div class="grid-column1">
                    <div class="text5">Coffee</div>
                    <div class="text6">Black Coffee </div>
                    <div class="grid-column2">
                        <div class="text7">Espresso / Americano </div>
                        <div class="text7">Batch brew </div>
                        <div class="text7">Hand brew </div>
                    </div>
                    <div class="text6">Iced coffee </div>
                    <div class="grid-column2">
                        <div class="text7">Iced latte </div>
                        <div class="text7">Espresso tonic </div>
                        <div class="text7">Bumble </div>
                        <div class="text7">Cold brew </div>
                    </div>

                </div>


                <div class="grid-drink-number">
                    <div>280</div>
                    <div>260/360</div>
                    <div>360/450</div>

                    <div class="text00">280</div>
                    <div>360</div>
                    <div>380</div>
                    <div>420</div>
                    <div>300</div>
                </div>

                <div class="grid-drink pseudo-gap"></div>


                <div class="grid-column1">
                    <div class="text0">Coffee</div>
                    <div class="text6">Coffee with milk </div>
                    <div class="grid-column2">
                        <div class="text7">Flat white </div>
                        <div class="text7">Cappuccino </div>
                        <div class="text7">Latte </div>
                        <div class="text7">Raf vanilla with cacao butter </div>
                        <div class="text7">Bulletproof <span class="text-edit">(veg)</span></div>
                        <div class="text7">Oat / Soy milk</div>
                    </div>
                </div>

                <div class="grid-drink-number">
                    <div>330</div>
                    <div>330/360</div>
                    <div>360</div>
                    <div>420</div>
                    <div>450</div>
                    <div>+50</div>
                </div>
            </div>

            <div class="grid-container-drinks">
                <div class="grid-column1">
                    <div class="text5">Drinks</div>
                    <div class="text6">Milk drinks </div>
                    <div class="grid-column2">
                        <div class="text7">Matcha latte </div>
                        <div class="text7">Cocoa </div>
                        <div class="text7">Bean-to-bar </div>
                        <div class="text7">- chocolate shot </div>
                        <div class="text7">- shot with milk </div>
                        <div class="text7">Oat / Soy milk </div>
                    </div>
                    <div class="text6">Tea</div>
                    <div class="grid-column2">
                        <div class="text7">Min Hong (China) </div>
                        <div class="text7">Lun Czin Nun Sjan (China) </div>
                        <div class="text7">Buckwheat tea </div>
                    </div>
                </div>

                <div class="grid-drink-number">
                    <div>380</div>
                    <div>380</div>
                    <div class="number0">000</div>
                    <div>300</div>
                    <div>360</div>
                    <div>+50</div>

                    <div class="text00">280</div>
                    <div>400</div>
                    <div>400</div>
                    <div>400</div>
                </div>

                <div class="grid-drink pseudo-gap"></div>


                <div class="grid-column1">
                    <div class="text0">Coffee</div>
                    <div class="text6">Cool drinks </div>
                    <div class="grid-column2">
                        <div class="text7">Raspberry lemongrass lemonade </div>
                        <div class="text7">Passionfruit-cucumber lemonade </div>
                        <div class="text7">Cold strawberry rooibos </div>
                        <div class="text7">Iced matcha latte </div>
                        <div class="text7">Lavender matcha tonic</div>
                        <div class="text7">Kombucha</div>
                        <div class="text7">Club mate</div>
                    </div>
                </div>

                <div class="grid-drink-number">
                    <div>330</div>
                    <div>330</div>
                    <div>400</div>
                    <div>380</div>
                    <div>420</div>
                    <div>420</div>
                    <div>420</div>
                </div>

            </div>

            <div class="grid-container-drinks">
                <div class="grid-column1">
                    <div class="text5">Spirits</div>
                    <div class="grid-column2">
                        <div class="text7">Bulleit Bourbon </div>
                        <div class="text7">Nikka Coffey Grain Whiskey </div>
                        <div class="text7">Rum Minoki Mizunara Cask </div>
                        <div class="text7">Courvoisier VSOP</div>
                        <div class="text7">Calvados Chateau du Breiu </div>
                    </div>
                </div>

                <div class="grid-drink-number2">
                    <div>600</div>
                    <div>1000</div>
                    <div>1000</div>
                    <div>850</div>
                    <div>1000</div>
                </div>

                <div class="grid-drink pseudo-gap"></div>


                <div class="grid-column1">
                    <div class="text0">Coffee</div>
                    <div class="grid-column2">
                        <div class="text7">Roku Gin</div>
                        <div class="text7">Amaro Montenegro </div>
                        <div class="text7">Tatratea Original </div>
                        <div class="text7">Vodka Grey Goose </div>
                    </div>
                </div>

                <div class="grid-drink-number2">
                    <div>650</div>
                    <div>400</div>
                    <div>400</div>
                    <div>900</div>
                </div>
            </div>

            <div class="grid-container-drinks">
                <div class="grid-column1">
                    <div class="text5">Cocktails</div>
                    <div class="grid-column2">
                        <div class="text7">Wind of change <br><span class="text8">infused gin, tonic</span> </div>
                        <div class="text7">Summer in the capital <br> <span class="text8">citrus vermouth, tonic, orange
                                perfume</span></div>
                        <div class="text7">Italian Breakfast <br> <span class="text8">elderflower liquor, prosecco,
                                soda</span></div>
                    </div>
                </div>

                <div class="grid-drink-number2">
                    <div>600</div>
                    <div class="number00">000</div>
                    <div>600</div>
                    <div class="number00">000</div>
                    <div>600</div>

                </div>

                <div class="grid-drink pseudo-gap"></div>


                <div class="grid-column1">
                    <div class="text0">Coffee</div>
                    <div class="grid-column2">
                        <div class="text7">Kir Royale <br><span class="text8">blackcurrant liquor, prosecco</span>
                        </div>
                        <div class="text7">Negroni <br> <span class="text8">gin, red vermouth, bitter</span></div>
                        <div class="text7">Godfather <br> <span class="text8">whiskey, almond liquor, orange
                                perfume</span>
                        </div>
                    </div>
                </div>

                <div class="grid-drink-number2">
                    <div>600</div>
                    <div class="number00">000</div>
                    <div>600</div>
                    <div class="number00">000</div>
                    <div>600</div>
                </div>
            </div>
        </div>

        <div class="basement-container">
            <img src="images/basement/basement.png" class="basement">
            <div class="grid-container-basement">
                <div class="grid-column"></div>
                <div class="grid-column">
                    <div class="text7"> How to get there? </div>
                    <img src="images/basement/map.png" class="map">
                    <a href="https://maps.app.goo.gl/qTDo765w7FSS3uwm9" class="text-link"> Flat community </a>
                    <div class="lebl"> <img src="images/basement/lebl.svg" class="lebl"> </div>
                    <div class="text69">©Elena Teplova, 2024</div>
                </div>
                <div class="grid-column-align-left">
                    <div class="text10"> Contacts </div>
                    <div class="container-contacts">
                        <a href="https://www.instagram.com/flat.beograd?igsh=bGN0cTN0YzVzZ2Uw"> <img
                                src="images/basement/instagram.png">
                        </a>
                        <a href="https://www.instagram.com/flat.beograd?igsh=bGN0cTN0YzVzZ2Uw" class="text-link2">
                            flat.beograd </a>
                    </div>
                    <div class="container-contacts">
                        <a href="https://wolt.com/sr/srb/belgrade/restaurant/flat-community"> <img
                                src="images/basement/wolt.png"> </a>
                        <a href="https://wolt.com/sr/srb/belgrade/restaurant/flat-community" class="text-link2">
                            Devilery
                            10:30-21:00</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
