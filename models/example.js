// EXAMPLE ASSOCIATION NOT INCLUDED IN THIS BOILERPLATE:

module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  // Example.associate = function(models) {
  //   // Associating Example with Entry
  //   // When an Example is deleted, also delete any associated Entries
  //   Example.hasMany(models.Entry, {
  //     onDelete: "cascade"
  //   });
  // };
  return Example;
};