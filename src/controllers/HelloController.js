exports.HelloGet=(req, res)=>{
    res.status(201).json({status: "get success", data: "this is get method"})
};

exports.HelloPost=(req, res)=>{
    res.status(203).json({status: "post success", data: "this is post method"})
};
