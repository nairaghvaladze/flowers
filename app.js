var openShoping =document.querySelector('.shopping');
var closeShopping=document.querySelector('.closeshoping');
var list=document.querySelector('.list');
var  listCard=document.querySelector('.listcard');
var  body=document.querySelector('.body');
var  total=document.querySelector('.total');
var  quantity=document.querySelector('.quantity');

{
openShoping.addEventListener('click', () =>{
  document.body.classList.add('active');
});
}
closeShopping.addEventListener('click', () =>{
    document.body.classList.remove('active');
})
let product = [
    {
        id: 1,
        name:'101 წითელი ვარდი',
        image: '101 witeli.jpeg',
        price: 400 
    },
    {
        id: 2,
        name:'101 ყვითელი ვარდი',
        image: 'yviteli.jpeg',
        price: 350
    },
    {
        id: 3,
        name:'101 თეთრი ვარდი',
        image: 'tetri101.jpeg',
        price: 450
    },
    {
        id: 4,
        name:'ყვავილების ყუთი ამელი',
        image: 'ameli.jpeg',
        price: 170
    },
    {
        id: 5,
        name:'ყვავილების ყუთი მადონა',
        image: 'madona.jpeg',
        price: 190 
    },
    {
        id: 6,
        name:'ყვავილების ყუთი ღამის სონატა',
        image: 'gamis sonata.jpeg',
        price: 250
    },
    {
        id: 7,
        name:'თაიგული ვარდისფერი სინაზე',
        image: 'vardisferi sianze.jpeg',
        price: 220
    },
    {
        id: 8,
        name:'თაიგული ვიქტორია',
        image: 'ameli1.jpg',
        price: 250
    },
    {
        id: 9,
        name:'50 ნარინჯისფერი ვარდი',
        image: 'narinjisferi vardi.jpeg',
        price: 300
    },
    {
        id: 10,
        name:' თაიგული გაზაფხულის მელოდია',
        image: 'melodia.jpeg',
        price: 175
    },
    {
        id: 11,
        name:'თაიგულია დიანა',
        image: 'diana.jpeg',
        price: 240
    },
    {
        id: 12,
        name:'თაიგული მისის ბაბლი',
        image: 'babli.jpeg',
        price: 210
    },
    
];
var listCards = [];
function initApp(){
    product.forEach((value, key) => {
        var newDiv=document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML= `
        <img src="image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">დამატება</button>
        ` ;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key]== null){
        listCards[key] =product[key];
        listCards[key].quantity=1;

    }
    reloadCard();
}
function  reloadCard(){
    listCard.innerHTML='';
    var count=0;
    var totalPrise= 0;
    listCards.forEach((value, key) => {
        totalPrise= totalPrise + value.price;
        count= count +value.quantity;

        if(value != null)
       var newDiv = document.createElement('li');
       newDiv.innerHTML =`
       <div><image src="image/${value.image}"/></div>
       <div>${value.name}</div>
       <div>${value.price.toLocaleString()}</div>
       <div>${value.quantity}</div>
       <div>
       <button onclick="changeQuantity(${key}, ${value.quantity - 1})"> -</button>
       <div class="count">${value.quantity}</div>
       <button onclick="changeQuantity(${key}, ${value.quantity + 1})"> +</button>

</div>
       `
       listCard.appendChild(newDiv);
    })
    total.innerText =totalPrise.toLocaleString();
    quantity.innerText= count;
}
function changeQuantity(key, quantity){
    if(quantity== 0) {
        delete listCards[key];
    }else {
        listCards[key].quantity = quantity;
        listCards[key].price=quantity * product[key].price;
    }
    reloadCard();
}