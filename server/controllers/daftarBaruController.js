const {Mahasiswa, DaftarBaru, DaftarUlang} = require ('../models');

class daftarBaruController {
    static async getDaftarBaru (req, res){
        try {
            let DaftarBaru = await DaftarBaru.findAll ({
                include: [Mahasiswa, DaftarUlang],
            })
            res.status(200).json(DaftarBaru);
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    static async getDetailsById (req, res) {
        try {
            const id = Number(req.params.id);
            let daftarbaru = await DaftarBaru.findbyPk(id);

            daftarbaru
            ? res.status(200).json(daftarbaru)
            : res.status(404).json({message: "ID daftar baru tidak ditemukan"}) 
        }
        catch(err) {
            res.status(500).json(err);
        }
    }

    static async mahasiswa (req, res) {
        try {
            const {name, jurusan, sex, DaftarBaruId, DaftarUlangId} = req.body
            let result = await DaftarBaru.create ({
                name,
                jurusan,
                sex,
                DaftarBaruId,
                DaftarUlangId,
            })
         
            res.status(201).json(result);
        }
        catch(err) {
            res.status(500).json(err)
        }
    }

    static async hapus (req, res) {
        try {
            const id {
                
            }
        }
    }
}

