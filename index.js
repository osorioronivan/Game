



let hero ={
    element_ID :  "wizard",
    name : "Wiz",
    avatar :  "images/Wizard.png",
    health : 60,
    dice_Score : 20
}

let monster ={
    element_ID :  "orc",
    name : "Orc",
    avatar : "images/Orc.png",
    health : 20,
    dice_Score : 10
}



renderCharacter(hero
    )
renderCharacter(monster
    )

function renderCharacter(data
    ){
        document.getElementById(data.element_ID).innerHTML = ` <div class="card">
        <h1 class="character-name">${data.name}</h1>
        <div class="img-char">
          <img id ="avatart"src="${data.avatar}" alt="" />
        </div>
        <div class="health-container">
          <p class="label-health">health :</p>
          <p class="health"><b>${data.health}</b></p>
        </div>
        <div class="attck-container">
          <div class="attck-score">
            <p class="score">${data.dice_Score}</p>
          </div>
        </div>
        </div>`
    }