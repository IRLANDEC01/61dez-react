import instance from ".";

export default class APIEventKeys {


    static async getEventKeys() {
        return await instance.get('/getEventKeys')
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
    static async deleteEventKey(id) {
        instance.post('/deleteEventKey', { id })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async passEventKey(id, update) {
        instance.post('/passEventKey', { id, update })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
}