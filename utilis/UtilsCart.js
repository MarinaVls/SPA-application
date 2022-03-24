function UtilsCart() {

    this.cart;
    this.dataLocalStorageCatalog = JSON.parse(localStorage.getItem('catalogData'));

    this.init = () => {
        this.addEventAddBtn();
        this.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }

    this.addEventAddBtn = () => {
        const addCartButtons = document.querySelectorAll('.catalog__item__button-add')
        addCartButtons.forEach(addButton => {
            addButton.addEventListener('click', (e) => {
                this.addToCart(e.target.id)
            })
        })
    }

    this.checkedCart = (idProduct) => {
        return this.cart.findIndex(({id}) => id == idProduct)
    }; 

    this.addToCart = (idProduct) => {
        const productToCart = this.dataLocalStorageCatalog.find((product) => product.id == idProduct)
        //const productToCart = this.dataLocalStorageCatalog.find(({id}) => id == idProduct);

        if (this.checkedCart(idProduct) != -1){
            this.cart[this.checkedCart(idProduct)].count += 1
        }else {
            productToCart.count = 1;
            this.cart.push(productToCart)
        }

        localStorage.setItem('cart', JSON.stringify(this.cart));
        console.log(this.cart)
    }
    
}

const utilsCart = new UtilsCart()
export default utilsCart;