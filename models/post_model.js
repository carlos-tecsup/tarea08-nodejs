const mongoose=require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/users');

let modelSchema=new Schema({
    titulo:{type:String,required:true},
    descripcion:{type:String,required:true},
    categoria:{type:String,required:true},
    fecha:{type: String,required:true}
});
autoIncrement.initialize(mongoose.connection);
modelSchema.plugin(autoIncrement.plugin, 'contacts');

model=mongoose.model('contacts',modelSchema,'contacts');
module.exports=model