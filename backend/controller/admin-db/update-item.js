import executeQuery from "../../database/db.js";

const Updateitem = async (req, res) => {
    const { name, price, quantity } = req.body;
    const id = req.params.id;

    if (isNaN(id)) {
        return res.status(400).json({ success: false, message: "Invalid item ID" });
    }

    const query = 'UPDATE items SET name = ?, price = ?, quantity = ? WHERE id = ?';

    try {
        const result = await executeQuery(query, [name, price, quantity, parseInt(id)]);

        if (result.affectedRows > 0) {
            res.json({ success: true, message: 'Item updated successfully.' });
        } else {
            res.json({ success: false, message: 'Item not found.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating item.', error: error.message });
    }
};

export default Updateitem;
