const cartPage = {
  template: function () {
    let data = customApi.fetch();

    let cartState = customCart.loadData();
    let template = ``;
    let objectsInCart = [];

    data.forEach(function (item) {
      if (Object.keys(cartState).includes(`${item.id}`)) {
        item['inCartCount'] = cartState[item.id];
        objectsInCart.push(item);
      }
    });

    objectsInCart.forEach(function (item) {
      template += `
            <tr class="cart-item-tr-${item.id}">
                <td class="hidden pb-4 md:table-cell">
                  <a href="#">
                    <img src="${item.img}" class="w-20 rounded" alt="Thumbnail">
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">${item.name}</p>
                      <button type="button" class="text-gray-700 md:ml-4">
                        <small class="cart-item-remove-${item.img}" data-id="${item.id}">(Remove item)</small>
                      </button>
                  </a>
                </td>
                <td class="justify-center md:justify-end md:flex mt-6">
                  <div class="w-20 h-10">
                    <div class="relative flex flex-row w-full h-8">
                    <input type="number" value="${item.inCartCount}" data-id="${item.id}" min="1"
                      class="cart-item-counter w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                    </div>
                  </div>
                </td>
                <td class="hidden text-right md:table-cell">
                  <span class="text-sm lg:text-base font-medium cart-item-price-${item.id}">
                    $ ${item.price}
                  </span>
                </td>
                <td class="text-right">
                  <span class="text-sm lg:text-base font-medium cart-item-total-price-${item.id}">
                    $ ${item.price * item.inCartCount}
                  </span>
                </td>
            </tr>
            `;
    });

    return `
        <div class="flex justify-center my-6">
          <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div class="flex-1">
              <table class="w-full text-sm lg:text-base" cellspacing="0">
                <thead>
                  <tr class="h-12 uppercase">
                    <th class="hidden md:table-cell"></th>
                    <th class="text-left">Product</th>
                    <th class="lg:text-right text-left pl-5 lg:pl-0">
                      <span class="lg:hidden" title="Quantity">Qtd</span>
                      <span class="hidden lg:inline">Quantity</span>
                    </th>
                    <th class="hidden text-right md:table-cell">Unit price</th>
                    <th class="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  ${template}
                </tbody>
              </table>
              <h2 class="h-12 uppercase">Total price: <span class="cartTotalPrice ml-2"></span></h2>
            </div>
          </div>
        </div>
        `;
  }
}