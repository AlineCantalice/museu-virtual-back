import afterload from 'after-load'

export async function getURL(req, res) {
    console.log(req.body)
    const html = afterload(req.body.link)
    res.status(200).send(html)
}