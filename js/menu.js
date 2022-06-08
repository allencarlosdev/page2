function menuResponsive (){
    document.getElementById('menu').classList.toggle('menu-header--visible');
}
document.getElementById('menu_bar').onclick = function () {
    menuResponsive();
}


