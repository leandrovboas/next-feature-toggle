import axios from "axios";

export const fetchDisabledFeatures = async () => {
    try {
        const { data } = await axios.get<string[]>("/api/disabledFeatures");
        return data;
    }
    catch(e) {
        console.log("Something went wrong");
    }

    return [] as string[];
}