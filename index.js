



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
    dice_Score : 10,
    dice_Count : 2
}
let diceHtml =""

for (let i = 0; i<monster.dice_Count; i++){
  diceHtml += ' <div class="attck-score"><div class="score">6</div></div>'
}

renderCharacter(hero, diceHtml
    )
renderCharacter(monster, diceHtml
    )

function renderCharacter(data, diceHtml
    ){
      const{element_ID, name, avatar,health, dice_Score} = data
        document.getElementById(element_ID).innerHTML = ` <div class="card">
        <h1 class="character-name">${name}</h1>
        <div class="img-char">
          <img id ="avatart"src="${avatar}" alt="" />
        </div>
        <div class="health-container">
          <p class="label-health">health :</p>
          <p class="health"><b>${health}</b></p>
        </div>
        <div class="attck-container">
          ${diceHtml}
        </div>
        </div>`
        // <p class="score">${diceHtml}</p>
    }