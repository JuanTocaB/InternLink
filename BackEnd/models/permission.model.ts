import mongoose from "mongoose";
import Module from "./module.model";

const permissionSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    modules: [
        Module.schema,
        { required: true }
    ]
});

const Permission = mongoose.model("Permission", permissionSchema);

export default Permission;