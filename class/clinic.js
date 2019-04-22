const mongoose = require('mongoose')
const clinicSchema = new mongoose.Schema({
    name_en: String,
    name_tc: String,
    name_sc: String,
    add_en: String,
    add_tc: String,
    add_sc: String,
    district_en:String,
    district_tc:String,
    district_sc:String,
    cluster_en: String,
    cluster_tc: String,
    cluster_sc: String,
    email: String,
    url: { type: String, default: "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Content_ID=10052&Lang=CHIB5&Dimension=100" },
    general_tel: { type: String, default: "N/A" },
    booking_tel: { type: String, default: "N/A" },
    fax: { type: String, default: "N/A" },
    lat: String,
    lng: String,
    reg_hr: {
        weekday: {
            morning_start: { type: String, default: "08:45" },
            morning_end: { type: String, default: "12:30" },
            afternoon_start: { type: String, default: "13:45" },
            afternoon_end: { type: String, default: "16:30" },
            evening_start: { type: String, default: "N/A" },
            evening_end: { type: String, default: "N/A" },
        },
        saturday: {
            morning_start: { type: String, default: "N/A" },
            morning_end: { type: String, default: "N/A" },
            afternoon_start: { type: String, default: "N/A" },
            afternoon_end: { type: String, default: "N/A" },
            evening_start: { type: String, default: "N/A" },
            evening_end: { type: String, default: "N/A" },
        },
        sunday: {
            morning_start: { type: String, default: "N/A" },
            morning_end: { type: String, default: "N/A" },
            afternoon_start: { type: String, default: "N/A" },
            afternoon_end: { type: String, default: "N/A" },
            evening_start: { type: String, default: "N/A" },
            evening_end: { type: String, default: "N/A" },
        }
    },
    consultation_hr: {
        weekday: {
            morning_start: { type: String, default: "09:00" },
            morning_end: { type: String, default: "13:00" },
            afternoon_start: { type: String, default: "14:00" },
            afternoon_end: { type: String, default: "17:00" },
            evening_start: { type: String, default: "N/A" },
            evening_end: { type: String, default: "N/A" },
        },
        saturday: {
            morning_start: { type: String, default: "N/A" },
            morning_end: { type: String, default: "N/A" },
            afternoon_start: { type: String, default: "N/A" },
            afternoon_end: { type: String, default: "N/A" },
            evening_start: { type: String, default: "N/A" },
            evening_end: { type: String, default: "N/A" },
        },
        sunday: {
            morning_start: { type: String, default: "N/A" },
            morning_end: { type: String, default: "N/A" },
            afternoon_start: { type: String, default: "N/A" },
            afternoon_end: { type: String, default: "N/A" },
            evening_start: { type: String, default: "N/A" },
            evening_end: { type: String, default: "N/A" },
        }
    },
    ClinicType_en:{ type: String, default: "GENERAL" },
    ClinicType_tc:{ type: String, default: "普通科" },
    ClinicType_sc:{ type: String, default: "普通科" },
    lastupdate:{type:Date,default:Date()}
})

module.exports.Clinic = mongoose.model('Clinic', clinicSchema);