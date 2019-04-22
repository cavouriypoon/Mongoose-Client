const express = require('express');
const router = express.Router();
const connectutility = require('../class/connectutility')
const Hospital = require('../class/hospital').Hospital

//API programme
router.get('/id/:hospitalid', async (req, res) => {
    const hospitalid = req.params.hsopitalid.trim()
    const api = `/hospital/name/${hsopitalid}`
    try {
        connectutility.connect(api)
        let result = await Hospital.findById(hospitalid)
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

router.get('/name/:hospitalname', async (req, res) => {
    const hsopitalname = decodeURIComponent(req.params.hospitalname.toUpperCase().trim())
    const api = `/hospital/name/${hsopitalname}`
    try {
        connectutility.connect(api)
        let result = await Hospital.find({ $or: [{ name_en: { $regex: `.*${hsopitalname}.*` } }, { name_tc: { $regex: `.*${hsopitalname}.*` } }, { name_sc: { $regex: `.*${hsopitalname}.*` } }] }).sort({ name_en: 1 })
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