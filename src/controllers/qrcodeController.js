export async function getURL(req, res){
    console.log("aqui " + req.body)
    res.redirect(req.body)
}