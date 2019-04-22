const express = require('express');
const router = express.Router();
const connectutility = require('../class/connectutility')
const Clinic = require('../class/clinic').Clinic

//API programme
router.get('/id/:clinicid', async (req, res) => {
    const clinicid = req.params.clinicid.trim()
    const api = `/clinic/id/${clinicid}`
    try {
        connectutility.connect(api)
        let result = await Clinic.findById(clinicid)
        if (result) {
            res.status(200).send(`${JSON.stringify(result)}`)
        }
        else {
            res.status(200).send(`{}`)
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
    finally {
        connectutility.disconnect(api)
    }
})

router.get('/name/:clinicname', async (req, res) => {
    const clinicname = decodeURIComponent(req.params.clinicname.toUpperCase().trim())
    const api = `/clinic/name/${clinicname}`
    try {
        connectutility.connect(api)
        let result = await Clinic.find({ $or: [{ name_en: { $regex: `.*${clinicname}.*` } }, { name_tc: { $regex: `.*${clinicname}.*` } }, { name_sc: { $regex: `.*${clinicname}.*` } }] }).sort({ name_en: 1 })
        if (result) {
            res.status(200).send(`${JSON.stringify(result)}`)
        }
        else {
            res.status(200).send(`{}`)
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
    finally {
        connectutility.disconnect(api)
    }
})
module.exports = router