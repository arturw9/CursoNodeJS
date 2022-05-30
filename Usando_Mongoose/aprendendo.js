const mongoose = require("mongoose")

// Configurção mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true
}).then(() => {
    console.log("Banco conectado!")
}).catch((err)=>{
    console.log("Houve erro ao conectar com o banco: "+err)
})
// Model - Usuários

const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    pais:{
        type: String
    }
}) 

mongoose.model('usuarios', UsuarioSchema)

const Artur = mongoose.model('usuarios')

new Artur({
    nome: "Artur",
    sobrenome: "Fidelis",
    idade: 23,
    email: "arturw9@hotmail.com",
    pais: "Brasil"
}).save().then(()=>{
    console.log("Usuário criado com sucesso!")
}).catch((err)=>{
    console.log("Houve um erro ao registar o usuario: "+err)
})