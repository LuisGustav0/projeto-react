import AppConst from "../const/app.const";

export default class HttpClientService {

    get(controller: string) {
        const baseUrl = `${AppConst.URL_API}/${controller}`;

        return fetch(baseUrl, {
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json());
    }

    post(controller: string,
         body: object): any {
        const baseUrl = `${AppConst.URL_API}/${controller}`;

        return fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json());
    }

    put(controller: string,
         id: number,
         body: object): any {
        const baseUrl = `${AppConst.URL_API}/${controller}/${id}`;

        return fetch(baseUrl, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json());
    }

    delete(controller: string,
        id: number): any {
        const baseUrl = `${AppConst.URL_API}/${controller}/${id}`;

        return fetch(baseUrl, {
            method: 'DELETE'
        }).then(response => response);
    }
}

