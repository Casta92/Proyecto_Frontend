const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleProductosCarrito = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')



const productList = [];

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleDetalleCarrito);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){

    const isCarritoClosed = detalleProductosCarrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        detalleProductosCarrito.classList.add('inactive')            
    }  
    // console.log("diste click")
    closeProductDetailAside();
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu (){
    const isCarritoClosed = detalleProductosCarrito.classList.contains('inactive');

    if (!isCarritoClosed) {
        detalleProductosCarrito.classList.add('inactive')            
    } 

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive')
}
function toggleDetalleCarrito (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')            
    } 
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')            
    } 
    
    const isDesktopMenu = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenu) {
        desktopMenu.classList.add('inactive')            
    }
    
    detalleProductosCarrito.classList.toggle('inactive')
}
function openProductDetailAside(){
    detalleProductosCarrito.classList.add('inactive')
    desktopMenu.classList.add('inactive')  

    productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}




// Product Cards

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
})
productList.push({
    name: 'Pink Scooter',
    price: 2800,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
})
productList.push({
    name: 'Camera',
    price: 800,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$'+ product.price;
    
        const productName = document.createElement('p');
        productName.innerText= product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productList)
