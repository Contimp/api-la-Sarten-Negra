const { DataTypes } = require('sequelize')

const modelItem = sequelize =>{
  sequelize.define('Item', {
    name: { type: DataTypes.STRING
    }
  }, {
    timestamps:false
  })
}

module.exports = modelItem