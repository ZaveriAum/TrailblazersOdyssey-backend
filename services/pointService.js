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
    let {name, address, task, tags, difficulty} = pointData;
    
    let new_point = Point({
        name: name,
        address: address,
        task: task,
        tags: tags,
        difficulty: difficulty,
    })
    return await new_point.save();
}

const updatePoint = async (id, pointData) => {
    const { _id, ...updatedData } = pointData;

    console.log("", updatedData); 
    let point = await  Point.findOneAndUpdate({ _id: id }, { ...updatedData }, { new: true });
    console.log(point)
    return point
  };

  const deletePoint = async (id) => {
    return await Point.findByIdAndDelete(id);
  };

module.exports = {
    getPoint,
    getPoints,
    createPoint,
    updatePoint,
    deletePoint
}