
/* 
NewImage function : creates an image
accepts the src, left and bottom positions as strings
*/
function newImage(src, posLeft, posBot){
    let newImg = document.createElement('img')
    newImg.src = src
    newImg.style.position = 'fixed'
    newImg.style.left = posLeft
    newImg.style.bottom = posBot
    document.body.append(newImg)
    console.log('NewImage ran : new image generated.')
}

//using NewImage to create character sprite
newImage('assets/green-character.gif', '100px', '100px')
//using NewImage to create pine tree sprite
newImage('assets/pine-tree.png', '450px', '450px')

// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)