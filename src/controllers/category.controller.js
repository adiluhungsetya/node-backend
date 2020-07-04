const getAllCategory = async (req,res,service)=>{
    let categories;

    if(req.query.id){
        const id = req.query.id;
        categories = await service.getCategoryById(id);
    } else if (req.query.name){
        const name = req.query.name;
        categories = await service.getCategoryByName(name);
    } else {
        categories = await service.getCategoryList();
    }
    res.send(categories)
};

const addCategory = async (req,res,service)=>{
    const body = req.body;
    const category = await service.saveCategory(body);
    res.send(category)
}


module.exports = {getAllCategory, addCategory}