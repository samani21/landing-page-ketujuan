export const getToken = () => {
    try {
        if (typeof window !== "undefined") {
            const jsonValue = localStorage.getItem("token");
            return jsonValue ? jsonValue : null;
        }
        return null;
    } catch (e) {
        console.error("Error parsing token:", e);
        return null;
    }
};