const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PessoaSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
PessoaSchema.plugin(mongoosePaginate);
mongoose.model("RegistroPessoa", PessoaSchema);