const mongoose = require("mongoose");
const validator= require("validator");
const bcrypt = require("bcryptjs");
const jwt= require("jsonwebtoken")


const usuarioSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor ingrese el nombre."],
        maxLength:[120,"El nombre no debe exceder los 120 caracteres"]
    },
    email:{
        type: String,
        required:[true,"Por favor ingrese el correo electronico"],
        unique: true,
        validate: [validator.isEmail, "Por favor ingrese el correo valido"]
    },
    password:{
      type:String,
      required:[true,"Por favor registr una contraseña"],
      minlength:[8,"La contraseña no puede tener menos de 8 caracteres"],
      select: false
    },
    avatar:{
        public_id: {
            type:String,
            required:true
        },
        url:{
            type:String,
            required: true
        }
    },
    role:{
        type:String,
        default: 'user',
    },
    fechaRegistro:{
        type:Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: String,

})

//Encriptamos contraseña antes de guardarla
usuarioSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//Decodifica contraseña y compara
usuarioSchema.methods.compararPass = async function (passDada){
    return await bcrypt.compare(passDada, this.password)
}

//Retorna un JWT token
usuarioSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRACION
    })
}



module.exports = mongoose.model("auth", usuarioSchema)