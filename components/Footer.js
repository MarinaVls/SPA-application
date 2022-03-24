function Footer () {

    this.create = () => {
        const footer = document.createElement('footer');
        footer.classList.add('footer')

        footer.innerHTML = `<div class="container">
                                <div class="footer__wrapper">
                                    <div class="footer__logo">
                                        <a href="#home" class="logo">
                                            <img src="./img/logo.png">
                                        </a>
                                    </div>
                                    <div class="footer__contacts">
                                            <a href="tel:+375(29)111-222-33">+375(29)111-222-33</a><br/>
                                            <a href="tel:+375(33)111-222-33">+375(33)111-222-33</a>
                                    </div>
                                </div>
                            </div>`
        return footer
    }

    this.init = () => {
        return this.create()
    }
}

const footer = new Footer().init()

export default footer;