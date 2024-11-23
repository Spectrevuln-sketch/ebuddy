import { updateUser, fetchUser } from "../repository/userCollection";
export const updateUserData = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        await updateUser(id, userData);
        res.status(200).json({ message: "User data updated successfully." });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error occurred." });
        }
    }
};
export const fetchUserData = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await fetchUser(id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: "User not found." });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: "Unknown error occurred." });
        }
    }
};
