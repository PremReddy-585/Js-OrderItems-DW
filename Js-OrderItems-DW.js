let itemList = [
    {
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Dosa",
        uniqueNo: 2,
    },
    {
        itemName: "Idly",
        uniqueNo: 3,
    },
    {
        itemName: "Mutton",
        uniqueNo: 4,
    },
    {
        itemName: "Chiken",
        uniqueNo: 5,
    },
    {
        itemName: "Non-Veg Biryani",
        uniqueNo: 6,
    },
    {
        itemName: "Paratha",
        uniqueNo: 7,
    }
];

let itemListContainer = document.getElementById("itemListItems");

function onDeleteItem(itemId) {
    let itemEl = document.getElementById(itemId);
    itemListContainer.removeChild(itemEl);
}

function createAndAppendItem(item){
    let itemId = "item" + item.uniqueNo;
    let buttonId = "button" + item.uniqueNo;

    let itemEl = document.createElement("li");
    itemEl.id = itemId;
    itemEl.classList.add("ordered-item");
    itemEl.textContent  = item.itemName;
    itemListContainer.appendChild(itemEl);

    let buttonEl = document.createElement("button");
    buttonEl.classList.add("button");
    buttonEl.textContent = "cancel";
    buttonEl.id = buttonId;

    buttonEl.onclick = function(){
        onDeleteItem(itemId);
    };
    
    itemEl.appendChild(buttonEl);
}

for(let item of itemList){
    createAndAppendItem(item);
}
