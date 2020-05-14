// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health
        this.strength = strength
    }

    attack () {
        return this.strength
    }

    receiveDamage (damage) {
        this.health -= damage
    }
}


// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength)
        this.name = name
    }

    battleCry () {
        return 'Odin Owns You All!'
    }

    receiveDamage (damage) {
        this.health -= damage
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } 
        return `${this.name} has died in act of combat`
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage (damage) {
        this.health -= damage
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } 
        return `A Saxon has died in combat`
    }
}


// War
class War {
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking (newviking){
        this.vikingArmy.push(newviking)
    }

    addSaxon (newsaxon) {
        this.saxonArmy.push(newsaxon)
    }

    vikingAttack () {
        const  damageFromViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].attack()
        const indexOfDamagedSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const saxonReceiveDamage = this.saxonArmy[indexOfDamagedSaxon]
        
        const saxonRemainingHealth = saxonReceiveDamage.receiveDamage(damageFromViking)

        if (saxonReceiveDamage.health <= 0) {
            this.saxonArmy.splice(indexOfDamagedSaxon, 1 )
        }

        return saxonRemainingHealth
    }

    saxonAttack () {
        const  damageFromSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].attack()
        const indexOfDamagedViking = Math.floor(Math.random() * this.vikingArmy.length)
        const vikingReceiveDamage = this.vikingArmy[indexOfDamagedViking]
        
        const resultHealth = vikingReceiveDamage.receiveDamage(damageFromSaxon)

        if (vikingReceiveDamage.health <= 0) {
            this.vikingArmy.splice(indexOfDamagedViking, 1 )
        }

        return resultHealth
    }

    //Bonus one method for both armies attack:
    // armyAttack(whoAttack, whoDefend) {
    //     if (whoAttack === "Saxon" && whoDefend === "Viking") {
    //         const attacker = this.saxonArmy
    //         const damaged = this.vikingArmy
    //     } else if (whoAttack === "Saxon" && whoDefend === "Saxon" ) {
    //         const attacker = this.vikingArmy
    //         const damaged = this.saxonArmy
    //     } else {
    //         return "Please add a valid attacker and defender. Accepted values: 'Saxon' and 'Viking'"
    //     }

    //     const  damageFromAttacker = attacker[Math.floor(Math.random() * attacker.length)].attack()
    //     const indexOfDamaged = Math.floor(Math.random() * damaged.length)
    //     const armyReceiveDamage = damaged[indexOfDamaged]
        
    //     const resultHealth = armyReceiveDamage.receiveDamage(damageFromAttacker)

    //     if (armyReceiveDamage.health <= 0) {
    //         damaged.splice(indexOfDamaged, 1 )
    //     }

    //     return resultHealth
    // }


    showStatus () {
        if (this.saxonArmy.length < 1) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length < 1) {
            return  "Saxons have fought for their lives and survived another day..."
        } else if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
