const detailPage = {
  template: function (id) {

    let data = customApi.fetch();
    let productDetail = {};

    data.forEach(function (item) {
      if (`${item.id}` === id) {
        productDetail = item;
      }
    });

    let colors = productDetail.color.join(', ');
    let sizes = productDetail.size.join(', ');


    return `
<div class="bg-white">
  <div class="pt-6">

    <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img src="${productDetail.img}" alt="Two each of gray, white, and black shirts laying flat." class="w-full h-full object-center object-cover">
        </div>
      
        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          ${productDetail.name}
        </h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:mt-0 lg:row-span-3">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl text-gray-900">$ ${productDetail.price}</p>

          <!-- Colors -->
          <div>
            <h3 class="text-sm text-gray-900 font-medium">Color</h3>

            <fieldset class="mt-4">
              <legend class="sr-only">
                Choose a color
              </legend>
              <div class="flex items-center space-x-3">
                ${colors}
              </div>
            </fieldset>
          </div>

          <!-- Sizes -->
          <div class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-sm text-gray-900 font-medium">Size</h3>
              <a href="sizeGuide.html" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
            </div>

            <fieldset class="mt-4">
              <legend class="sr-only">
                Choose a size
              </legend>
              ${sizes}
            </fieldset>
          </div>

          <button type="button" data-id="${id}" class="addToBug mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
      </div>
    </div>
        </div>
    </div>
  </div>
</div>
        `;
  }
}