class Thundercats {
    correrBehavior;
    atacarBehavior;
    nombre;
   

    setAtacaqueBehavior (atacarBehavior)  {
        this.atacarBehavior = atacarBehavior;

    }

    setCorriendoBehavior (correrBehavior)  {

        this.correrBehavior = correrBehavior;

    }

    realizarCorrida ()  {
        this.correrBehavior.correr();
    }

    realizarAtaque () {
        this.atacarBehavior.ataque();
    }



}

// heredan los metodos de Thundercats 

class Leono extends Thundercats {


}

class Cheetara extends Thundercats {


}

//las interfaces van a ser otras clases.


class Ataqueconcuchillo {
    ataque ()  {
        console.log('Ataque con cuchillo ');
    }
}

class AtaqueConPistola {
    ataque () {
        console.log('Ataque con pistola ');
    }
}


//clases Run
class CorrerRapido {
    correr() {
        console.log('corriendo rapido');
    }
}
class correrLento {
    correr () {
        console.log('corriendo lento');
    }
}






