"use strict";

const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,

    attacked() {
        this.health -= 20;
        updateCard();

        if (this.health <= 0) {
            this.health = 0;
            updateCard();

            attackBtn.disabled = true;

            setTimeout(() => {
                alert(`${this.name} has died.`);
            }, 50);
        }
    },

    levelUp() {
        this.level += 1;
        updateCard();
    },
};

const nameEl = document.querySelector("#charName");
const classEl = document.querySelector("#charClass");
const levelEl = document.querySelector("#charLevel");
const healthEl = document.querySelector("#charHealth");

const attackBtn = document.querySelector("#btnAttack");
const levelUpBtn = document.querySelector("#btnLevelUp");

function updateCard() {
    nameEl.textContent = character.name;
    classEl.textContent = character.class;
    levelEl.textContent = character.level;
    healthEl.textContent = character.health;
}

attackBtn.addEventListener("click", () => {
    if (attackBtn.textContent.trim().toLowerCase() === "attack") {
        attackBtn.textContent = "Attacked";
    }
    character.attacked();
});

levelUpBtn.addEventListener("click", () => character.levelUp());

updateCard();