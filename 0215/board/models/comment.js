const { DataTypes } = require('sequelize');

const CommentModel = (sequelize) => {
    return sequelize.define('comment', {
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = CommentModel;
