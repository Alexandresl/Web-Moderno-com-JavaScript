function Pessoa() {

    this.idade = 0

    setInterval(() => {

        this.idade++

        console.log(self.idade)

    }, 1000)

}

new Pessoa