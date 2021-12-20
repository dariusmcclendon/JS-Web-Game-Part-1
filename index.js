
let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
/* 
NewImage function : creates an image
accepts the src, left and bottom positions as strings
*/
function newImage(src, posLeft, posBot, item){

    // this code block allows newImage to be used inside other functions
    let newImg // create a local variable named newImg
    if (item === undefined) { //if statement checks to see if the item parameter is defined
        newImg = document.createElement('img') // assigns document.yadayee to newImg
    } else {
        newImg = item; // assigns the item argument passed if defined
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
    item.addEventListener('dblclick', function(){
        item.remove()
    })
    console.log('NewItem ran : new item generated')    
}

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