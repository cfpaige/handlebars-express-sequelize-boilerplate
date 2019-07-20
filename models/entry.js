// // EXAMPLE OF AN ASSOCIATED MODEL. NOT OTHERWISE INCLUDED IN THIS BOILERPLATE:

// module.exports = function(sequelize, DataTypes) {
//   var Entry = sequelize.define("Entry", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       len: [1]
//     }
//   },
//   {
//     freezeTableName: true // Model tableName will be the same as the model name--prevents sequelize from creating the default 'entrys'
//   }
//   );

//   Entry.associate = function(models) {
//     // We're saying that an Entry should belong to an Example
//     // An Entry can't be created without an Author due to the foreign key constraint
//     Entry.belongsTo(models.Example, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Entry;
// };