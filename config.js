require("dotenv").config();

module.exports = {
    port: process.env.PORT || 5000,
    node_env: process.env.NODE_ENV || development,
    db_url: process.env.DATABASE_URL
}

