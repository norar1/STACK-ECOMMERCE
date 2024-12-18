import executeQuery from "../../database/db.js";

const UserCredit = async (req, res) => {
    const { userId } = req.params;

    const query = 'SELECT credit FROM accounts WHERE id = ?';

    try {
        const result = await executeQuery(query, [userId]);

        if (result && result.length > 0) {
            return res.status(200).json({ message: "Fetch success", success: true, data: result[0].credit });
        } else {
            return res.status(404).json({ message: "No data found for this user", success: false });
        }
    } catch (e) {
        return res.status(500).json({ message: "Server error, please check the API", success: false });
    }
};

export default UserCredit;
