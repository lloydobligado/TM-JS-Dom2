const form = document.querySelector('.my-form');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

form.addEventListener('submit', (addItem) => {
    addItem.preventDefault();

    let newItem = document.querySelector('#item').value;
        const li = document.createElement('li');
        const deletebtn = document.createElement('button');
        li.className = 'list-group-item';
        deletebtn.className = 'btn btn-danger btn-sm float-right delete';
        li.appendChild(document.createTextNode(newItem));
        deletebtn.appendChild(document.createTextNode('X'));
        itemList.appendChild(li); // append li to ul
        li.appendChild(deletebtn); //append btn to li
});

itemList.addEventListener('click', (del) => {
    if(del.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            const li = del.target.parentElement;
            itemList.removeChild(li);
        }
    }
})

filter.addEventListener('keyup', (search) => {
    var text = search.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'flex';
        }
        else {
            item.style.display = 'none';
        }
    })
})