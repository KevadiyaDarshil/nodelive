var RM = require('../model/rsltmodel')

exports.viewrslt = async (req, res) => {
    try {
        // const data = await RM.find()
        const data = await RM.aggregate([
            {
                $lookup: {
                    from: 'studdetails',
                    localField: 'studname',
                    foreignField: '_id',
                    as: 'studinfo'
                }
            },
            {
                $unwind: '$studinfo'
            },
            {
                $addFields: {
                    total: {
                        $sum: ['$s1', '$s2', '$s3']
                    },
                    min: {
                        $min: ['$s1', '$s2', '$s3']
                    }
                }

            }
        ])

        if (data.length == 0) throw new Error("data not found");

        res.status(200).json({
            status: 'success',
            message: 'data found',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })

    }

}

exports.addrslt = async (req, res) => {
    try {
        const data = req.body
        const adddata = await RM.create(data)
        res.status(200).json({
            status: "success",
            message: "data insrted",
            data: adddata
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
}

