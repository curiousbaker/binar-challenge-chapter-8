const { compare } = require("bcryptjs");
const { hash } = require("bcryptjs");

module.exports = {
  hashPassword: async (password) => {
    return await hash(password, 10);
  },
  verifyPassword: async (password, hashedPassword) => {
    return await compare(password, hashedPassword);
  },
};
