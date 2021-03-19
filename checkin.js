const axios = require("axios");

//const SCKEY = process.env.SCKEY;
//axios.defaults.headers.common.cookie = process.env.COOKIE;

const checkIn = async () => {
    return axios({
        method: 'post',
        url: 'https://glados.rocks/api/user/checkin',
        data: {
            token: "glados_network"
        }
    })
}

const status = async () => {
    return axios({
        method: 'get',
        url: 'https://glados.rocks/api/user/status'
    })
}

const server = () => {
    return axios({
        method: 'get',
        url: `http://sup.umsin.com/OrderEmail.aspx?cgID=1`,
        params: {
            text: `执行成功`
        }
    })
}

const GLaDOSCheckIn = async () => {
    server();
    console.log(`执行成功`);
}

GLaDOSCheckIn();
