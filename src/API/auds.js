import { useContext } from "react";
import instance from ".";
import { EventKeysContext } from "../context";

export default class APIAuds {
 

    static async getAuds() {
        return await instance.get('/getAuds')
            .then((response) => {
                console.log(response.data.message);
                return response.data.auds
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async createAud(newAud) {
        await instance.post('/createAud', newAud)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async deleteAud(aud) {
        await instance.post('/deleteAud', { name: aud })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async updateStateAud(aud) {
        await instance.post('/updateStateAud', { name: aud })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
}