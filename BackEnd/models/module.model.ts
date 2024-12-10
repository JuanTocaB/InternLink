import mongoose from 'mongoose';

const moduleSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Module = mongoose.model('Module', moduleSchema);

export default Module;