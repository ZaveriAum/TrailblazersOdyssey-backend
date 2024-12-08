const service = require('../services/teamService')

const getTeam = async (req, res) => {
    try{
        const team = await service.getTeam()
        res.status(200).json({
            status: true,
            team: team
        });
    }catch(e){
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}

const getMember = async(req, res)=>{
    try{
        const member = await service.getMember(req.params.id)
        res.status(200).json({
            status: true,
            member: member
        });
    }catch(e){
        res.status(400).json({
            status: false,
            message: e.message
        })
    }
}

const createMember = async (req, res)=>{
    try{
        const member = await service.createMember(req.body)
        res.status(201).json({
            status: true,
            member: member
        });
    }catch(e){
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}

const updateMember = async (req, res) =>{
    try{
        const member = await service.updateMember(req.params.id, req.body)
        res.status(201).json({
            status: true,
            member: member
        });
    }catch(e){
        res.status(400).json({
            status: false,
            message: e.message
        });
    }
}
const deleteMember = async (req, res) => {
    try {
        const member = await service.deleteMember(req.params.id);
        if (!member) {
            return res.status(404).json({
                status: false,
                message: "Member not found"
            });
        }
        res.status(200).json({
            status: true,
            message: "Member deleted successfully",
        });
    } catch (e) {
        res.status(400).json({
            status: false,
            message: e.message,
        });
    }
};

module.exports = {
    getMember,
    getTeam,
    createMember,
    updateMember,
    deleteMember
}