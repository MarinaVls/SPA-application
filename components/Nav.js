function Nav () {
    this.data = JSON.parse(localStorage.getItem('data'));

    this.create = () => {
        const nav = document.createElement('nav');
        let list = '';
        nav.classList.add('header__nav')

        this.data.forEach(({slug, menuTititle}) => {
            list += `<li class="header__nav__item">
                    <a href="#${slug}">${menuTititle}</a>
                    </li>`
        });

        const getMenuList = this.data;
        nav.innerHTML=`<ul class="header__nav__items">
                            ${list}
                        </ul>`
        return nav
    }

    this.init = () => {
        return this.create();
    }
}

const nav = new Nav().init()
export default nav 