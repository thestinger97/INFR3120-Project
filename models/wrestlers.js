const mongoose = require("mongoose");
const WrestlersSchema = new mongoose.Schema({
wrestler_name: String,
world_championships: String,
companies: String,
years_active: String


}, {
    collection: "Wrestlers"
}

);

module.exports = mongoose.model("Wrestlers", WrestlersSchema);