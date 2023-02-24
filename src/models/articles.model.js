module.exports = (sequelize, Sequelize) => {
  const Articles = sequelize.define("articles", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT
    }
  });

  return Articles;
};
