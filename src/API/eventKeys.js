import instance from ".";

export default class APIEventKeys {

    static async getEventKeys(date) {
        return await instance.get('/getEventKeys', {date})
            .then((response) => {
                console.log(response.data.message);
                return response.data.eventKeys
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async createEventKey(newEventKey) {
        await instance.post('/createEventKey', newEventKey)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
}