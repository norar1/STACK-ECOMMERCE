import executeQuery from "../../database/db.js";

const DeleteItem = async (req, res) => {
    const { idDeleteItems } = req.params;

    try {
        if (!idDeleteItems) {
            return res.status(400).json({ message: "Please provide the item ID" });
        }

        const deletePurchasesQuery = `DELETE FROM purchases WHERE item_id = ?`;
        await executeQuery(deletePurchasesQuery, [idDeleteItems]);

        const query = `DELETE FROM items WHERE id = ?`;
        const result = await executeQuery(query, [idDeleteItems]);

        if (result.affectedRows > 0) {
            return res.status(200).json({ message: "Item Deleted Successfully", success: true });
        } else {
            return res.status(404).json({ message: "Item Not Found", success: false });
        }
    } catch (e) {
        console.error("Server error:", e.message);
        return res.status(500).json({ message: "Server error", success: false });
    }
};

export default DeleteItem;
