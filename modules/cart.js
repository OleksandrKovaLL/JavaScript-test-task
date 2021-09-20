const customCart = {
    add: function (id, count = 1) {
        let data = this.loadData();

        if (data[id]) {
            data[id] += count;
        } else {
            data[id] = count;
        }

        localStorage.setItem('cart', JSON.stringify(data));
    },

    setItem: function (id, count = 1) {
        let data = this.loadData();

        data[id] = count; // product count

        localStorage.setItem('cart', JSON.stringify(data));
    },

    loadData: function () {
        return JSON.parse(localStorage.getItem('cart')) ?? {};
    },

    remove: function (id) {
        let data = this.loadData(); // localStorage

        if (data[id]) {
            delete data[id];
        }

        localStorage.setItem('cart', JSON.stringify(data)); // rerender localStorage
    },

    getTotalCount: function () {
        let data = this.loadData();
        let counter = 0;
        Object.keys(data).forEach(function (key) {
            counter += +data[key]; // cart count
        })

        return counter;
    },

    getTotalPrice: function () {
        let cartState = this.loadData();

        let data = customApi.fetch();
        let price = 0;

        let objectsInCart = [];

        data.forEach(function (item) {
            if (Object.keys(cartState).includes(`${item.id}`)) {
                item['inCartCount'] = cartState[item.id];
                objectsInCart.push(item);
            }
        });

        objectsInCart.forEach(function (item) {
            price += (item.price * cartState[item.id]);
        });

        return price;
    }
};