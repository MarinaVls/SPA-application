import nav from './Nav.js'
function Header () {
    this.create = () =>{
        const header = document.createElement('header');
        header.classList.add('header');

        header.innerHTML=`<div class="header__wrapper">
                            <div class="container">
                                <div class="header__main">
                                    <div class="header__main__wrapper">
                                        <div class="header__logo">
                                            <a href="#home" class="logo">
                                                <img src="./img/logo.png">
                                            </a>
                                        </div>
                                        <div class="header__search">
                                            <form action="#catalog" method="#" class="search-form">
                                                <input type="search" id="text-to-find" name="search" class="search-input" placeholder="Поиск по каталогу…">
                                                <button type="submit" class="search-button">
                                                    <img src="./img/search-icon.png">
                                                </button>
                                            </form>
                                        </div>
                                        <div class="header__contacts">
                                            <a href="tel:+375(29)111-222-33">+375(29)111-222-33</a><br/>
                                            <a href="tel:+375(33)111-222-33">+375(33)111-222-33</a>
                                        </div>
                                        <div class="header__cart">
                                            <a href="#cart">
                                                <img src="./img/cart-icon.png">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="header__nav__wrapper">
                                <div class="container">
                                ${nav.outerHTML}
                                </div>
                            </div>
                        </div>`
        return header
    }
    
    this.init = () => {
        return this.create()
    }
}

const header = new Header().init()

export default header