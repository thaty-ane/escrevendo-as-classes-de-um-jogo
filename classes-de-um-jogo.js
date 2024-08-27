class Hero{
    constructor(name, age, typeHero){
        this.name = name
        this.age = age
        this.typeHero = typeHero
    }

    useAttack(){

        let attack = "";

        switch(this.typeHero){
            case "mago":
                attack = "magia"
                break

            case "guerreiro":
                attack = "espada"
                break

            case "monge":
                attack = "artes marciais"
                break

            case "ninja":
                attack = "shuriken"
                break

            default:
                attack = "ataque genérico"
        }

        console.log(`O ${this.typeHero} atacou usando ${attack} `)
    }
}

let wizard = new Hero("Tata", 30, "mago")
let warrior = new Hero("Shooky", 650, "guerreiro")
let monk = new Hero ("Koya", 38, "monge")
let naruto = new Hero("Chimmy", 42, "ninja")

console.log("Você e seus amigos encontraram um novo oponente. Derrote-o!\n")
wizard.useAttack()
warrior.useAttack()
monk.useAttack()
naruto.useAttack()

console.log(`\n${wizard.name}, ${warrior.name}, ${monk.name} e ${naruto.name} conseguiram derrotar o oponente.`)