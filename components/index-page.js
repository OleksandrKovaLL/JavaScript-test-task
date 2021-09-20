const indexPage = {
  template: function (data) {
    const items = data.items;

    let template = ``;
    items.map(function (item) {

      let colors = item.color.join(', ');
      let sizes = item.size.join(', ');
      let category = item.category;

      template += `
            <div class="group relative">
                <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img src="${item.img}" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="/show/${item.id}" class="router">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${item.name}
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">${colors}</p>
                    <p class="mt-1 text-sm text-gray-500">${sizes}</p>
                    <p class="mt-1 text-sm text-gray-500">${category}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">$${item.price}</p>
                </div>
              </div>
            `;
    })

    return `
            <div class="bg-white">
                <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                
                    <div id="filter-section-0">
                        <div class="flex">
                        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 mr-4">Category filters:</h2>
                            <div class="flex items-center">
                                <input id="filter-category-0" name="color[]" value="category1" data-filter-type="category" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-category-0" class="ml-3 text-sm text-gray-600">
                                  Category 1
                                </label>
                            </div>
                            
                            <div class="flex items-center">
                                <input id="filter-category-4" name="color[]" value="category2" data-filter-type="category" type="checkbox" class="ml-3 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-category-4" class="ml-3 text-sm text-gray-600">
                                  Category 2
                                </label>
                            </div>
                            
                            <div class="flex items-center">
                                <input id="filter-category-5" name="color[]" value="category3" data-filter-type="category" type="checkbox" class="ml-3 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-category-5" class="ml-3 text-sm text-gray-600">
                                  Category 3
                                </label>
                            </div>
                        </div>
                    </div>
                
                    <div class="pt-6" id="filter-section-0">
                        <div class="flex">
                        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 mr-4">Sizes filters:</h2>
                            <div class="flex items-center">
                                <input id="filter-size-0" name="color[]" value="S" data-filter-type="size" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-size-0" class="ml-3 text-sm text-gray-600">
                                  S
                                </label>
                            </div>
                            
                            <div class="flex items-center">
                                <input id="filter-size-4" name="color[]" value="M" data-filter-type="size" type="checkbox" class="ml-3 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-size-4" class="ml-3 text-sm text-gray-600">
                                  M
                                </label>
                            </div>
                            
                            <div class="flex items-center">
                                <input id="filter-size-5" name="color[]" value="L" data-filter-type="size" type="checkbox" class="ml-3 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-size-5" class="ml-3 text-sm text-gray-600">
                                  L
                                </label>
                            </div>
                        </div>
                    </div>
                
                    <div class="pt-6" id="filter-section-0">
                        <div class="flex">
                        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 mr-4">Color filters:</h2>
                            <div class="flex items-center">
                                <input id="filter-color-0" name="color[]" value="white" data-filter-type="color" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-color-0" class="ml-3 text-sm text-gray-600">
                                  White
                                </label>
                            </div>
                            
                            <div class="flex items-center">
                                <input id="filter-color-4" name="color[]" value="red" data-filter-type="color" type="checkbox" class="ml-3 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-color-4" class="ml-3 text-sm text-gray-600">
                                  Red
                                </label>
                            </div>
                            
                            <div class="flex items-center">
                                <input id="filter-color-5" name="color[]" value="black" data-filter-type="color" type="checkbox" class="ml-3 h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                <label for="filter-color-5" class="ml-3 text-sm text-gray-600">
                                  Black
                                </label>
                            </div>
                        </div>
                    </div>
                
                    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" id="indexPageContent">
                      ${template}
                    </div>
                </div>
            </div>
        `;
  }
}