import instance from ".";

export default class APICurrentEK {

    static async getCurrentEK() {
        return await instance.get('/getCurrentEK')
            .then((response) => {
                console.log(response.data.message);
                return response.data.currentEKs
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async addCurrentEK(newCurrentEK) {
        await instance.post('/addCurrentEK', newCurrentEK)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async deleteCurrentEK(id) {
        await instance.post('/deleteCurrentEK', { id })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async passCurrentEK(id, update) {
        await instance.post('/passCurrentEK', { id,update })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
}