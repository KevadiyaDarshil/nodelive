var SM = require('../model/studmodel')

exports.viewstud = async (req, res) => {
    try {
        const data = await SM.find()
        if (data.length == 0) throw new Error("data not found");
        res.status(200).json({
            status: 'success',
            message: 'data faund'
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })

    }
}
exports.addstud = async (req, res) => {

    try {
        const data = req.body
        const adddata = await SM.create(data)
        res.status(200).json({
            status: 'success',
            message: 'data inserted',
            data: adddata
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message

        })
    }

}
exports.deletestud = async (req, res) => {
    try {
        const deletreid = req.params.id
        const deletedata = await SM.findByIdAndDelete(deletreid)
        res.status(200).json({
            status: 'success',
            message: 'delete data',
            data: deletedata
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message

        })
    }
}
exports.updatestud = async (req, res) => {
    try {
        const updateid = req.params.id
        const updatedata = SM.findByIdAndUpdate(updateid, req.body)
        res.status(200).json({
            status: 'success',
            message: 'data updated',
            data: updatedata
        })

    } catch (error) {

        res.status(400).json({
            status: 'fail',
            message: error.message

        })
    }
}