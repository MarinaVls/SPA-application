import {title as pageTitle} from './Head.js';

function Main () {
    this.main;
    this.data = JSON.parse(localStorage.getItem('data'));

    this.create = () => {
        this.main = document.createElement('main');
        this.main.classList.add('main');
        
        window.addEventListener('hashchange', () => {
            this.render(location.hash);
        });
    };

    this.render = (hash) => {
        const slugOfHash = hash ? hash.slice(1) : 'home';
        if(slugOfHash == 'cart') {
            import("./Cart.js").then(cartData => {
                const cart = cartData.default.init();
                this.main.innerHTML = cart.outerHTML;
                cartData.default.setMain(this.main);
                cartData.default.deletBtnCart();
            })
        }else{
            const componentData = this.data.filter((item) => slugOfHash.includes(item.slug))
            // const componentData = this.data.filter(({slug}) => slug == slugOfHash)
            const {content, title} = componentData[0]; //c этого объекта забираем нужные своцства

            pageTitle.innerHTML = title;
        
            if(slugOfHash.includes('catalog')){
                import('./Catalog.js')
                    .then(responseCatalog => {
                        responseCatalog.default.init()
                            .then(catalogData => {
                                this.main.appendChild(catalogData);
                                import('../utilis/UtilsCart.js').then(util => {
                                    util.default.init();
                                })
                    })
                })
                
                this.main.innerHTML = `<div class="main__wrapper">
                                        <div class='container'>
                                            <h1>${content}</h1>
                                        </div>
                                    </div>`; 
                
            } 

            if (slugOfHash.includes('/')) {
                this.main.innerHTML = ``; 
            } 

            if(slugOfHash.includes('home')){
                this.main.innerHTML = `<div class="main__wrapper">                  
                                            <div class="promo">
                                            <div class="promo__description">
                                                <h1 class="promo__h1">${content}</h1>
                                                <div class="button">
                                                        <button class="promo__btn" onclick="window.location.href='#catalog'">Learn more</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>`
            }
        
            if(slugOfHash.includes('about')) {
                this.main.innerHTML = `<div class="main__wrapper">
                                            <div class='container'>
                                                <h1>${content}</h1>
                                                <h2>Welcome to our online store!</h2>
                                                <div class="about__description">
                                                    <p>Our company has existed for many years, we are the most reliable and successful company on the market. Buy in our online store again and again, because we offer the lowest prices, we don’t even buy to find cheaper!</p>
                                                    <p>On our website you will find the widest range of products on the market.</p>
                                                    <p>Waiting for you shopping every day, we are always at your service!</p>
                                                </div>
                                                <div class="about__href__wrapper">
                                                    <p>Check out popular products:</p>
                                                    <div class="button">
                                                        <button class="about__btn" onclick="window.location.href='#catalog'">Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>`
            }
        
            if(slugOfHash.includes('contact')) {
                this.main.innerHTML = `<div class="main__wrapper">
                                            <div class='container'>
                                                <h1>${content}</h1>
                                                <div class="contact__wrapper">
                                                    <div class="contacts">
                                                        <h2>По всем вопросам Вы можете связаться с нами удобным способом:</h2>
                                                        <a href="tel:+375(29)111-222-33">+375(29)111-222-33 (МТС)</a><br/>
                                                        <a href="tel:+375(33)111-222-33">+375(33)111-222-33 (А1)</a></br>
                                                        <a href="tel:+375(33)111-222-33">+375(25)111-222-33 (life)</a>
                                                    </div>
                                                    <div class="contact__work-time">
                                                        <h2>График работы:</h2>
                                                        <p><span>Сall-центр:</span> 09:00 - 21:00 c понедельника по воскресенье.</p>
                                                        <p><span>Пункт выдачи:</span>
                                                                12:00 - 20:00 с понедельника по пятницу; 13:00 - 17:00 в субботу.
                                                                Выходной в воскресенье.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`
            }

            
        }                   
    }

    this.init = () => {
        this.create()
        this.render(location.hash);
        return this.main;
    }
}

const main = new Main().init()

export default main