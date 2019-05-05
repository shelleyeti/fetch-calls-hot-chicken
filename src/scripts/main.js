function populatePage(chickenArray) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = chickenArray.map(makeGrid).join("");
    document.querySelector("#chicken-cards").append(newDiv);
};

const makeGrid = (item, index) => {
    let sold = `
    <p class="buy">Eat more Chicken</p>
    `
    let purchased = item.purchased;
    if(purchased)  {
        sold = `
        <p class="buy">All Sold Out</p>
        `
    };
    let block = `
    <section id="card--${index}" style="border: 8px solid ${item.color}">
    <h3>Name: ${item.name}</h3>
    <h4>Spice Level: ${item.spicelevel}</h4>
    ${sold}
    <p>color: ${item.color}</p>
    <button data-edit-id="${item.id}" onClick="handleEdit(this)">Edit</button>
    <button data-delete-id="${item.id}" onClick="handleDelete(this)">Delete</button>
    </section>
    `
    return block;
};

getAllChickens()
    .then(
        (inventoryFromGetAllChickens) => {
            console.log("the chickens", inventoryFromGetAllChickens);
            populatePage(inventoryFromGetAllChickens)
        }
    );

function handleEdit(chicken){
    let whichChicken = chicken.getAttribute("data-edit-id");
    console.log("Let's Edit ", whichChicken);
};

function handleDelete(chicken){
    let whichChicken = chicken.getAttribute("data-delete-id");
    console.log("Let's Delete ", whichChicken);
};

function handleAdd(chicken){
    
}