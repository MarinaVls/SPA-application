function Cart () {

    let cartData;
    let main;

    this.show = () => {
        const cart = document.createElement ('div');
        cart.classList.add('cart');

        if (this.cartData.length == 0) {
            cart.innerHTML = `<div class="container">
                                <div class="cart__wrapper">
                                    <h2>No products</h2>
                                </div>
                            </div>`
            return cart
        }else {
            let list ="";

            this.cartData.forEach(({id, title, price, count, image}) => {
                list += `<div class="cart__item__wrapper">
                                <div class="cart__item__title">
                                    ${title}
                                </div>
                                <div class="cart__item__img">
                                    <img src="${image}">
                                </div>
                                <div class="cart__item__count">
                                    Count:${count}
                                </div>
                                <div class="cart__item__price">
                                    Price:<span>${price * count} </span>BYN
                                </div>
                                <div class="button">
                                    <button class="cart__btn" id="${id}">Delete</button>
                                </div>
                        </div> `

                cart.innerHTML = `<div class="container">
                                    <div class="cart__wrapper">
                                        ${list}
                                    </div>
                                </div>`
            });

            return cart;
        }
    }

    this.deletBtnCart = () => {
        const delBtnCartItem = document.querySelectorAll('.cart__btn');

        delBtnCartItem.forEach((delBtn) => {
            delBtn.addEventListener('click' , (e) => {
                this.onDelete(e.target.id)
            })
        })
    }

    this.onDelete = (id) =>{
        this.remove(id);
        const cart = this.show();
        this.main.innerHTML = cart.outerHTML;
        this.deletBtnCart();
    }

    this.remove = function (idCart){
        let cartLocal = this.cartData.filter((element) => element.id == idCart);
        if(cartLocal[0].count == 1){
            this.cartData = this.cartData.filter((element) => element.id != idCart);
        }else{
            cartLocal[0].count = cartLocal[0].count - 1;
        }
        localStorage.setItem('cart', JSON.stringify(this.cartData));
    }

    this.init = () => {
        this.cartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem ('cart')) : [];
        return this.show();
    }

    this.setMain = (main) => {
        this.main = main;
    }

}

const cart = new Cart()
export default cart;