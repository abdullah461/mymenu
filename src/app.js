// dom elements
var itemForm = document.querySelector('.popup-content')
var itemList = document.querySelector('.item')

var titleInput = document.querySelector('.title')
var descInput = document.querySelector('.description')
var priceInput = document.querySelector('.price')
// const imageInput = document.querySelector('.image')



let items = JSON.parse(localStorage.getItem('items')) || [] 


itemForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const titleValue = titleInput.value
    const descValue = descInput.value
    const priceValue = priceInput.value
    const imageValue = imageInput

    if (titleValue == ''){
        return
    }

    const item = {
        id: new Date().getTime(),
        title: titleValue,
        description: descValue,
        price: priceValue,
        image: imageValue
    }

    
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))

    createItem(item)
    itemForm.reset()

    titleInput.focus()
    descInput.focus()
    priceInput.focus()
    imageInput.focus()

})

itemList.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('remove-task')){
        const itemid = e.target.closest('li').id

        removeItem(itemid)
    }
})

function createItem(item){
    const itemEl = document.createElement('li')
    itemEl.setAttribute('id', item.id)
    itemEl.append('i', item.image)
    function img(i){
        const imageInput = document.querySelector('.image')
                imageInput.addEventListener('change', function() {
                    const reader = new FileReader();
                    reader.addEventListener('load', () =>{
                        i = reader.result;
                        // style.backgroundImage = `url(${uploaded_image})`;
                    });
                    reader.readAsDataURL(this.files[0]); 
                })
            }


    const itemElMarkup = `
    
   
        <div>
            <h6>${item.title}</h6>
            <p>${item.price}</p>
        </div>
        <div>
            <p>${item.description}</p>
            <img src="${item.image}" alt="" class = "">
            <img src="../static/close.png" alt="" class = "remove-task">
        </div>
        
    
    `
itemEl.innerHTML = itemElMarkup

itemList.appendChild(itemEl)
}

function removeItem(itemid){
    items = items.filter((item)=> item.id != parseInt(itemid))
    localStorage.setItem('items', JSON.stringify(items))
    document.getElementById(itemid).remove()
}

// <img src="../static/pizza.jpg" alt="item-image">

// functionality to pop-up the filds for input

document.getElementById("btn").addEventListener("click", function(){
    document.querySelector(".pop-up").style.display = "flex"
})
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".pop-up").style.display = "none"
})      

