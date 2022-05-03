export default function handler(req, res) {
    const id = req.query.id
    
    res.status(200).json({
        id: req.query.id, 
        name: `Jayson ${id}`,
        email: `Jayson${id}@example.com`
    })
}