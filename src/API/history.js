import instance from ".";

export default class APIHistory {
    static async getHistory(date) {
        return await instance.post('/getHistory', {date})
            .then((response) => {
                console.log(response.data.message);
                return response.data.history
            })
            .catch((error) => {
                console.error(error.message);
            })
    }

}