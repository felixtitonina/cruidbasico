const mongoose = require('mongoose'); // (../db)
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require('bcryptjs');

const PessoaSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true
    },
    name: {
        type: String
    },
    nickname: {
        type: String
    },
    password:{
        type: String,
        select:false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
PessoaSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next();
})
PessoaSchema.plugin(mongoosePaginate);
mongoose.model("RegistroPessoa", PessoaSchema);