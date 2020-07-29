const addButton = document.querySelector('.add-item-button');
const itemsContainer = document.querySelector('.items-container');

addButton.addEventListener('click', ()=>{
    const addInputValue = document.querySelector('.add-item').value;
    const item = document.createElement('input');
    const itemContainer = document.createElement('div');
    const editB = document.createElement('button');
    const removeB = document.createElement('button');
    
    item.className = "item";
    itemContainer.className = "item-container";
    editB.className = "edit-button";
    editB.textContent = "Edit";
    removeB.className = "remove-button";
    removeB.textContent = "Remove";

    item.setAttribute('value',addInputValue);
    item.disabled = "true";

    itemContainer.appendChild(item);
    itemContainer.appendChild(editB);
    itemContainer.appendChild(removeB);
    itemsContainer.appendChild(itemContainer); 

    removeB.addEventListener('click', ()=>{
        removeB.parentElement.style.display = 'none';
    });

    editB.addEventListener('click', ()=>{
        item.disabled = !item.disabled;
    });


});


