
let wHeight = window.innerHeight;
let wWidth = window.innerWidth;

// console.log('Height : ' + wHeight)
// console.log('Width : ' + wWidth)

/*
makeInventory function : creates inventory div,  
*/
let inventory = document.createElement('div')
function Inventory(){
    
    function makeInventoryDiv(){
        move(inventory).to(0,0)
        inventory.style.width = '100%'
        inventory.style.height = '100px'
        inventory.style.display = 'flex'
        inventory.style.flexDirection = 'row'
        inventory.style.alignItems = 'center'
        inventory.style.justifyContent = 'space-evenly'
        inventory.style.border = '2px solid black'
        inventory.style.backgroundColor = 'blue'
        document.body.append(inventory)
        console.log('Inventory generated')
    }
    function addToInventory(element){
        inventory.append(element)
        console.log('Item added to inventory')
    }
    
    return {
        generate : makeInventoryDiv,
        add : addToInventory
    }
}



/*
drawBackground function : draws background images to cover screen
accepts the src, size of the row, and size of the column as arguments
*/

function drawBackground(src,rowSize, columnSize){
    // the first for loop wraps the second to control the drawing from top to bottom
    //the assumption is that each tile is 100px
    for(let c = 0; c < columnSize ; c++){
        //the second for loop controls the drawing from left to right
        //the assumption is that each tile is 100px
        for(let i = 0; i < rowSize ; i++){
            let tile = document.createElement('img')
            newImage(src, (i*100), (c*100), tile)
        }
    }
    
}
/* 
NewImage function : creates an image
accepts the src, left and bottom positions as strings
*/
function newImage(src, posLeft, posBot, img){

    // this code block allows newImage to be used inside other functions
    let newImg // create a local variable named newImg
    if (img === undefined) { //if statement checks to see if the item parameter is defined
        newImg = document.createElement('img') // assigns document.yadayee to newImg
    } else {
        newImg = img; // assigns the item argument passed if defined
    }
    newImg.src = src
    newImg.style.position = 'fixed'
    newImg.style.left = posLeft + 'px'
    newImg.style.bottom = posBot + 'px'
    document.body.append(newImg)
    console.log('NewImage ran : new image generated.')

    return newImg
}

/*
NewItem function : creats an item
accepts the src, left, and bottom positions as strings
Identical to newImage, but adds eventListener
*/
function newItem(src, posLeft, posBot){
    // create local variable named item
    let item = document.createElement('img')
    
    //passes item as an argument to newImage, newImage will now use item instead of generating its own variable
    newImage(src, posLeft, posBot, item)
    
    item.addEventListener('dblclick', function(){
        // Inventory().add(item)
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = src
        inventory.append(inventoryItem)
       console.log('Item added to inventory')
    })
    console.log('NewItem ran : new item generated')
    
    return item    
}

//Move function - draws image, positions it
function move(element){
    element.style.position = 'fixed'

    function moveToCoordinates(posLeft, posBot){
        element.style.left = posLeft + 'px'
        element.style.bottom = posBot + 'px'
} //end moveToCoordinates function
    return {
        to : moveToCoordinates
    }
    }//end move function
    


//draw the sky first
drawBackground('assets/sky.png', 100, 15)
//draw grass
drawBackground('assets/grass.png', 100, 5)

//draw rest of the images over it
//using move to draw images
let character = move(newImage('assets/green-character.gif')).to(100, 100)
let pineTree = move(newImage('assets/pine-tree.png')).to(450,200)
let tree = move(newImage('assets/tree.png')).to(200, 300)
let pillar = move(newImage('assets/pillar.png')).to(350, 100)
let crate = move(newImage('assets/crate.png')).to(150, 200)
let well = move(newImage('assets/well.png')).to(500, 425)

//NewItem block
let sword = move(newItem('assets/sword.png')).to(500, 405)
// let sword = newItem('assets/sword.png', '500px', '405px')
let sheild = move(newItem('assets/sheild.png')).to(165, 185)
// let sheild = newItem('assets/sheild.png','165px', '185px')
let staff = move(newItem('assets/staff.png')).to(500, 100)
// let staff = newItem('assets/staff.png','600px', '100px')
Inventory().generate()

