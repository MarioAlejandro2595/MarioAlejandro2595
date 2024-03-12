fetch{menu.json}
.then{Response => Response.json()}
.then{data=>(
    const menuContainer = document.getElementById('menu-comtainer');
    data.items.forEach(category => {
        const categoryTitle = document.createElement("h2");

        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle );

        const table = document.createElement('table')
    })
)}