import app from './components/App.js';

const App = function () {
    
    this.init = ()=> {
        this.getApi ();
    }

    this.getApi = async () => {
        const url = 'https://fakestoreapi.com/products';
        let response, data;

       /*  if(!localStorage.getItem('toDoList')) {
            try{
                response = await fetch(url);
                data = await response.json()  
                localStorage.setItem('toDoList', JSON.stringify(this.data)); 
                this.show(data);
            }catch(e){
                console.error(e)
            } finally{
                console.log('finally')
            }
        }else{
            data = JSON.parse(localStorage.getItem('toDoList'));
            this.show(data);
        }  */
    };

    this.show = (data) => {
        const products = document.createElement('div');
        products.classList.add('product__list');
        
        let product = ''
        data.forEach(({id, title, image, description, price}) => {
            product += `<div class="product__list__item">
                            <div class="product__list__item-title">
                               ${id}. ${title}
                            </div>
                            <div class="product__list__item-img">
                                ${image}
                            </div>
                            <div class="product__list__item-description">
                                ${description}
                            </div>
                            <div class="product__list__item-prise">
                                ${price}
                            </div>
                        </div>`
        });
        products.innerHTML = product;
        let main_wrapper = document.querySelector('.main__wrapper');
        main_wrapper.appendChild(products);
    } 

};

window.addEventListener('load', () => {
    const app = new App();
    app.init();
});
