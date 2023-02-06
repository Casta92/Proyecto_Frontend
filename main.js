const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleProductosCarrito = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleDetalleCarrito);


function toggleDesktopMenu(){
    const isCarritoClosed = detalleProductosCarrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        detalleProductosCarrito.classList.add('inactive')            
    }  
    // console.log("diste click")
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu (){
    const isCarritoClosed = detalleProductosCarrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        detalleProductosCarrito.classList.add('inactive')            
    } 
    mobileMenu.classList.toggle('inactive')
}
function toggleDetalleCarrito (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')            
    }    
    detalleProductosCarrito.classList.toggle('inactive')
}