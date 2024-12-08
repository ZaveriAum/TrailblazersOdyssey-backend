const Team = require('../models/TeamModel')

const getMember = async (id)=>{
    try{
        return await Team.findById(id)
    }catch(e){
        throw new Error(e.message)
    }
}

const getTeam = async ()=>{
    return await Team.find({});
}

const createMember = async (memberData) => {
    let {first_name, last_name, email, phone_number} = memberData;
    
    let new_member = Team({
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
    })
    return await new_member.save();
}

const updateMember = async (id, memberData) => {
    return await Team.findOneAndUpdate({_id: id}, { ...memberData }, {new:true})
}

module.exports = {
    getMember,
    getTeam,
    createMember,
    updateMember
}