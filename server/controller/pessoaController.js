const mongoose = require("mongoose");

const RegistroPessoa = mongoose.model("RegistroPessoa");

module.exports = {
    async getindex(req, res) {
        const {page =1 } = req.query;
        const pessoas = await RegistroPessoa.paginate({},{page: page, limit:10});
        return res.json(pessoas);
    },
    async getmostrar(req, res) {
        const pessoa = await RegistroPessoa.findById(req.params.id);
        return res.json(pessoa);
        
    },
    async postgravar(req, res) {
        const pessoa = await RegistroPessoa.create(req.body);
        return res.json(pessoa);
    },
    async putupdate(req, res) {
        const pessoa = await RegistroPessoa.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(pessoa);
    },
    async delete(req, res) {
        await RegistroPessoa.findByIdAndRemove(req.params.id);
        return res.send();
    },
};