import mongoose from "mongoose";
import Permission from "./permission.model";

const roleSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    permissions: [
        Permission.schema, 
        { required: true }
    ]
});

const Role = mongoose.model("Role", roleSchema);

export default Role;