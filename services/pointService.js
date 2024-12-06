const Point = require('../models/PointModel')

const getPoint = async (id)=>{
    try{
        return await Point.findById(id)
    }catch(e){
        throw new Error(e.message)
    }
}

const getPoints = async ()=>{
    return await Point.find({});
}

const createPoint = async (pointData) => {
    let {name, address, task, tags, location} = pointData;
    
    let new_point = Point({
        name: name,
        address: address,
        task: task,
        tags: tags,
        location: location
    })
    return await new_point.save();
}

const updatePoint = async (id, pointData) => {
    return await Point.findOneAndUpdate({_id: id}, { ...pointData }, {new:true})
}

module.exports = {
    getPoint,
    getPoints,
    createPoint,
    updatePoint
}