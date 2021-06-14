const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  listPerPage: process.env.LIST_PER_PAGE,
};
  
module.exports = config;