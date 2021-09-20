let Router = {

    routes: {
        "/": "index",
        "/cart": "cart",
        "/show/:id": "show",
    },


    init: function () {
        this._routes = [];

        for (let route in this.routes) {

            let method = this.routes[route];

            this._routes.push({
                pattern: new RegExp('^' + route.replace(/:\w+/g, '(\\w+)') + '$'),
                callback: this[method]
            });

        }
    },

    dispatch: function (path) {

        var i = this._routes.length;

        while (i--) {

            var args = path.match(this._routes[i].pattern);

            if (args) {
                this._routes[i].callback.apply(this, args.slice(1))
            }
        }

        assertRouterToLinks();
    },

    index: function () {
        const items = customApi.fetch();

        render(indexPage, { items: items });
    },

    cart: function (id) {
        render(cartPage);

        renderTotalPrice();

        document.querySelectorAll('input[type="number"]').forEach(function (element) { //+-
            element.addEventListener('change', function (e) {
                customCart.setItem(e.target.dataset.id, e.target.value);
                renderCart();
                let price = document.querySelector(`.cart-item-price-${e.target.dataset.id}`).innerHTML.replace('$', '');
                document.querySelector(`.cart-item-total-price-${e.target.dataset.id}`).innerHTML = `$ ${price * e.target.value}`;

                renderTotalPrice();
            })
        });

        document.querySelectorAll('[class^="cart-item-remove-"]')
            .forEach(function (element) {
                element.addEventListener('click', function (e) {
                    customCart.remove(e.target.dataset.id);
                    renderCart();
                    renderTotalPrice();
                    document.querySelector(`.cart-item-tr-${e.target.dataset.id}`).remove();
                })
            });
    },

    show: function (id) {
        render(detailPage, id);

        document.querySelector('.addToBug').addEventListener('click', function (e) {
            customCart.add(e.target.dataset.id);
            renderCart();
        })

    },

}

function renderCart() { //count
    let wrapper = document.querySelector('.countCartItems');
    wrapper.innerHTML = customCart.getTotalCount();
}

function render(component, data) {
    let wrapper = document.querySelector('#app');
    wrapper.innerHTML = component.template(data);
    assertRouterToLinks();

    renderCart();
}

function renderTotalPrice() {
    document.querySelector('.cartTotalPrice').innerHTML = `$ ${customCart.getTotalPrice()}`;
}

function assertRouterToLinks() {
    let handler = event => {
        let url = new URL(event.currentTarget.href);
        Router.dispatch(url.pathname.replace("/C:", ""));
        event.preventDefault();
    }

    let anchors = document.querySelectorAll('a.router');

    for (let anchor of anchors) anchor.onclick = handler;
}