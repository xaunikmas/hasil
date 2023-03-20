const {mahasiswa} = require ('../models')

class mahasiswaController {
    static async getAllMahasiswa (req, res){
        try {
            let mahasiswa = await mahasiswa.findAll();
            res.status(200).json(mahasiswa)
        }
        catch(err) {
            res.status(500).json(error)
        }
    }
    static async getMahasiswaAccount(req, res){
        try {
            const id = +req.params.mahasiswaId;
            let userAccount = await mahasiswa.findOne({
                where: {id},
            });
            
            if (userAccount){
                res.status(200).json(mahasiswa)
            }
            
            else {
                res.status(404).json({
                    message: "mahasiswa tidak ditemukan.",
                });
            }
        }
        catch(err) {
            res.status(500).json(err);
        }
    }

    static async register (req, res){
        try {
            const {name, jurusan, sex, DaftarBaruId, DaftarUlangId} = req.body;
            let result = await mahasiswa.Create ({
                name,
                jurusan,
                sex,
                DaftarBaruId,
                DaftarUlangId
            });
            res.status(201).json(result);
        }
        catch(err) {
            res.status(500).json(err);
        }
    }

    static async remove(req, res){
        try {
            const id = +req.params.mahasiswaId
            let result = await mahasiswa.dihapus({
                where: {id}
            })
            
            if (result) {
                res.status(200).json({
                    messsage: "data mahasiswa dihapus"
                })
            }
            else {
                res.status(400).json({
                    message: "data mahasiswa tidak jadi dihapus"
                })
            }
        }
        catch(err) {
            res.status(500).json (err)
        }       
    }
    static async edit (req, res) {
        try {
            const id = +req.params.mahasiswaId
            const {name, jurusan, sex, DaftarBaruId, DaftarUlangId} = req.body

            let result = await mahasiswa.update ({
                name, jurusan, sex, DaftarBaruId, DaftarUlangId
            }, {where: {id}})

            if (result[0]) {
                res.status(200).json({
                    message: "data mahasiswa di perbarui"
                })
            }

            else {
                res.status(400).json({
                    message: "data tidak ada perubahan"
                })
            }
        }

        catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = mahasiswaController;
