'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mahasiswa.init({
    name: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    sex: DataTypes.STRING,
    DaftarBaruId: DataTypes.INTEGER,
    DaftarUlangId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};