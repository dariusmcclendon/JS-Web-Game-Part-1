
let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
let inventory = document.createElement('div')
// console.log('Height : ' + wHeight)
// console.log('Width : ' + wWidth)

/*
makeInventory function : creates inventory div,  
*/

function makeInventory(){
    
    inventory.style.position = 'fixed'
    inventory.style.left = '0px'
    inventory.style.bottom = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    console.log('Inventory generated')
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
            newImage(src, (i*100).toString() + 'px', (c*100).toString() + 'px', tile)
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
    newImg.style.left = posLeft
    newImg.style.bottom = posBot
    document.body.append(newImg)
    console.log('NewImage ran : new image generated.')
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
    item.addEventListener('dblclick', addToInventory)
    console.log('NewItem ran : new item generated')
    function addToInventory(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = src
        inventory.append(inventoryItem)
    }    
}


//draw the sky first
drawBackground('assets/sky.png', 100, 15)
//draw grass
drawBackground('assets/grass.png', 100, 5)

//draw rest of the images over it
//using NewImage to create character sprite
newImage('assets/green-character.gif', '100px', '100px')
//using NewImage to create pine tree sprite
newImage('assets/pine-tree.png', '450px', '200px')
//using NewImage to create.. so on and so forth
newImage('assets/tree.png', '200px', '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/crate.png','150px','200px')
newImage('assets/well.png','500px', '425px')
//NewItem block
newItem('assets/sword.png', '500px', '405px')
newItem('assets/sheild.png','165px', '185px')
newItem('assets/staff.png','600px', '100px')
makeInventory()

