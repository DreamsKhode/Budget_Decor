let navBar = document.getElementById('nav-bar');
let menuIcon = document.getElementById('menu-icon');
let closeMenu = document.getElementById('close-menu');
let special = document.getElementById('special');
let closeSpecial = document.getElementById('close-special');
let clickedProdImg = document.getElementsByClassName('clck-prod')[0];
let cardImg = document.getElementsByClassName('cImg');
let explore = document.getElementsByClassName('explore prod');
var specialSuggest = document.getElementsByClassName('special-imgs');
let bouqetInfo = document.getElementsByClassName('for-flower')[0];
let chairs = document.getElementsByClassName('for-chair')[0];
let curtain = document.getElementsByClassName('for-curtains')[0];
let vase = document.getElementsByClassName('for-vase')[0];
let cenTable = document.getElementsByClassName('for-centertable')[0];
let pillow = document.getElementsByClassName('for-pillow')[0];
var curtStore = document.getElementsByClassName('forcurtain')[0];
var vaseStore = document.getElementsByClassName('forvase')[0];
var chairStore = document.getElementsByClassName('forchair')[0];
var tableStore = document.getElementsByClassName('fortable')[0];
var pillowStore = document.getElementsByClassName('forpillow')[0];
var flowerStore = document.getElementsByClassName('forflower')[0];
var loader = document.getElementsByClassName('preload')[0];
var megaSpecial = document.getElementsByClassName('special')[0];
var body = document.getElementsByTagName('body')[0];
var moreServiceBtn = document.getElementById('more-service')
var card = document.getElementsByClassName('card')
var defaultPhoneServices = document.getElementsByClassName('if-not');
var presetPhoneServices = document.getElementsByClassName('sake-phone');
var moreServicesBtn = document.getElementById('more-service')

window.addEventListener('load', function () {
    loader.style.display = "none";
});

megaSpecial.onclick = function (event) {
    if (event.target === megaSpecial) {
        special.style.display = "none";
        body.style.overflow = "visible";
    }
}


closeMenu.onclick = function () {
    navBar.style.height = "0px" ? navBar.style.height = "0px" : navBar.style.height = "0px";
    closeMenu.style.display = "none";
    menuIcon.style.display = "block";
};

menuIcon.onclick = function () {
    navBar.style.height = "220px" ? navBar.style.height = "220px" : navBar.style.height = "220px";
    closeMenu.style.display = "block";
    menuIcon.style.display = "none";
};

closeSpecial.onclick = function () {
    special.style.display = "none";
    body.style.overflow = "visible";
}

for (var i = 0; i < explore.length; i++) {
    var openProdPage = explore[i];
    openProdPage.addEventListener('click', openNow)
}


function openNow(event) {
    var thisImage = event.currentTarget.parentElement.getElementsByClassName('cImg')[0];
    special.style.display = 'block';
    clickedProdImg.src = thisImage.src;
    body.style.overflow = "hidden";
}

for (var j = 0; j < specialSuggest.length; j++) {
    var clickedSpecial = specialSuggest[j];
    clickedSpecial.addEventListener('click', specialOn);
}

function specialOn(event) {
    var thisSpecial = event.target;
    clickedProdImg.src = thisSpecial.src;
}



explore[0].onclick = function () {
    cenTable.style.display = "block";
    chairs.style.display = "none";
    curtain.style.display = "none";
    vase.style.display = "none";
    pillow.style.display = "none";
    bouqetInfo.style.display = "none";
    tableStore.style.display = "grid";
    chairStore.style.display = "none";
    vaseStore.style.display = "none";
    pillowStore.style.display = "none";
    flowerStore.style.display = "none";
    curtStore.style.display = "none";
}

explore[1].onclick = function () {
    vase.style.display = "block";
    cenTable.style.display = "none";
    chairs.style.display = "none";
    curtain.style.display = "none";
    pillow.style.display = "none";
    bouqetInfo.style.display = "none";
    vaseStore.style.display = "grid";
    chairStore.style.display = "none";
    tableStore.style.display = "none";
    pillowStore.style.display = "none";
    flowerStore.style.display = "none";
    curtStore.style.display = "none";
}

explore[2].onclick = function () {
    curtain.style.display = "block";
    cenTable.style.display = "none";
    chairs.style.display = "none";
    vase.style.display = "none";
    pillow.style.display = "none";
    bouqetInfo.style.display = "none";
    vaseStore.style.display = "none";
    chairStore.style.display = "none";
    tableStore.style.display = "none";
    pillowStore.style.display = "none";
    flowerStore.style.display = "none";
    curtStore.style.display = "grid";
}

explore[3].onclick = function () {
    pillow.style.display = "block";
    cenTable.style.display = "none";
    chairs.style.display = "nnone";
    vase.style.display = "none";
    curtain.style.display = "none";
    bouqetInfo.style.display = "none";
    pillowStore.style.display = "grid";
    vaseStore.style.display = "none";
    chairStore.style.display = "none";
    tableStore.style.display = "none";
    flowerStore.style.display = "none";
    curtStore.style.display = "none";
}

explore[4].onclick = function () {
    bouqetInfo.style.display = "block";
    cenTable.style.display = "none";
    chairs.style.display = "none";
    vase.style.display = "none";
    curtain.style.display = "none";
    pillow.style.display = "none";
    flowerStore.style.display = "grid";
    vaseStore.style.display = "none";
    chairStore.style.display = "none";
    tableStore.style.display = "none";
    pillowStore.style.display = "none";
    curtStore.style.display = "none";
}

explore[5].onclick = function () {
    chairs.style.display = "block";
    cenTable.style.display = "none";
    vase.style.display = "none";
    curtain.style.display = "none";
    pillow.style.display = "none";
    bouqetInfo.style.display = "none";
    chairStore.style.display = "grid";
    vaseStore.style.display = "none";
    tableStore.style.display = "none";
    pillowStore.style.display = "none";
    flowerStore.style.display = "none";
    curtStore.style.display = "none";
}

let showingPreset = false;

moreServiceBtn.onclick = function () {
    if (!showingPreset) {
        for (var i = 0; i < defaultPhoneServices.length; i++) {
            defaultPhoneServices[i].style.display = "none";
        }
        for (var k = 0; k < presetPhoneServices.length; k++) {
            presetPhoneServices[k].style.display = 'block';
        }
        showingPreset = true;
    } else {
        for (var i = 0; i < defaultPhoneServices.length; i++) {
            defaultPhoneServices[i].style.display = "block";
        }
        for (var k = 0; k < presetPhoneServices.length; k++) {
            presetPhoneServices[k].style.display = 'none';
        }
        showingPreset = false;
    }
};