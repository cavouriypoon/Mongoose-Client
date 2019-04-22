const mongoose = require('mongoose')
const hospitalSchema = new mongoose.Schema({
    name_en: String,
    name_tc: String,
    name_sc: String,
    add_en: String,
    add_tc: String,
    add_sc: String,
    cluster_en:String,
    cluster_tc:String,
    cluster_sc:String,
    district_en:String,
    district_tc:String,
    district_sc:String,
    ae_service:{
        available:String,
        ae:String,
    },
    email: String,
    url: String,
    tel: String,
    fax: String,
    lat: String,
    lng: String,
    isprivate:String,
    last_update:{type:String, default:Date()}
})

module.exports.Hospital=mongoose.model('Hospital', hospitalSchema);