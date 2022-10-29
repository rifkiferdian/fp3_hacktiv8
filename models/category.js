'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product);
    }
  }
  Category.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'type cannot be null.'
        },
        notEmpty: {
          msg: 'type cannot be empty.'
        }
      }
    },
    sold_product_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'type cannot be null.'
        },
        notEmpty: {
          msg: 'type cannot be empty.'
        },
        isInt: {
          msg: 'type must be integer.'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
    hooks: {
      beforeCreate: (category, options) => {
        category.sold_product_amount = 0;
      }
    }
  });
  return Category;
};