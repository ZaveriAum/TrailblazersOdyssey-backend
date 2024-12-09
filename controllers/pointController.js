const service = require('../services/pointService')

const getPoints = async (req, res) => {
    try{
        const points = await service.getPoints()
        res.status(200).json({
            status: true,
            points: points
        });
    }catch(e){
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}

const getPoint = async(req, res)=>{
    try{
        const point = await service.getPoint(req.params.id)
        res.status(200).json({
            status: true,
            point: point
        });
    }catch(e){
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}

const createPoint = async (req, res)=>{
    try{
        const point = await service.createPoint(req.body)
        res.status(201).json({
            status: true,
            point: point
        });
    }catch(e){
        console.error(e)
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}

const updatePoint = async (req, res) =>{
    try{
        const point = await service.updatePoint(req.params.id, req.body)
        res.status(201).json({
            status: true,
            point: point
        });
    }catch(e){
        console.error(e)
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}

const deletePoint = async (req, res) => {
    try {
      await service.deletePoint(req.params.id);
      res.status(200).json({
        status: true,
        message: 'Point deleted successfully',
      });
    } catch (e) {
        console.error(e)
      res.status(400).json({
        status: false,
        message: e.message,
      });
    }
  };

module.exports = {
    getPoint,
    getPoints,
    createPoint,
    updatePoint,
    deletePoint
}