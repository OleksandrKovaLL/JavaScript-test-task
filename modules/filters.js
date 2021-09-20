const customFilter = {
    getActiveFilters: function () {
        let activeFilters = document.querySelectorAll("input[id^=filter-]:checked");
        let response = [];

        activeFilters.forEach(function (item) {
            response.push({
                "type": item.dataset.filterType,
                "value": item.value
            });
        })

        return response;
    },

    filter: function (data) {
        let activeFilters = this.getActiveFilters();

        let filteredData = [];

        data.forEach(function (item) {
            let isApproved = true;

            activeFilters.forEach(function (filter) {
                if (item.hasOwnProperty(filter.type)) {
                    if (typeof item[filter.type] === 'string' || item[filter.type] instanceof String) {
                        let prepareValue = item[filter.type].toLowerCase().replace(' ', '');
                        let preparedFilter = filter.value.toLowerCase().replace(' ', '');

                        if (prepareValue !== preparedFilter) {
                            isApproved = false;
                        }
                    }

                    else if (Array.isArray(item[filter.type])) {
                        if (!item[filter.type].includes(filter.value)) {
                            isApproved = false;
                        }
                    }
                } else {
                    isApproved = false;
                }
            });

            if (isApproved) {
                filteredData.push(item);
            }
        })

        return filteredData;
    },

    rerenderWithFilter: function () {
        const el = document.querySelector("#indexPageContent");

        let items = this.filter(customApi.fetch());

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

        if (!template) {
            template = `<h1>Not found result</h1>`
        }

        el.innerHTML = template;

        let handler = event => {

            let url = new URL(event.currentTarget.href);
            Router.dispatch(url.pathname);
            event.preventDefault();
        }

        let anchors = document.querySelectorAll('a.router');

        for (let anchor of anchors) anchor.onclick = handler;
    }
}