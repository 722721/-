const axios = require("axios");

//const SCKEY = process.env.SCKEY;
//axios.defaults.headers.common.cookie = process.env.COOKIE;

const ST = async () => {
    return axios({
        method: 'get',
        url: 'http://sup.umsin.com/OrderEmail.aspx?cgID=2'
    })
}

const UMS = async () => {
    return axios({
        method: 'get',
        url: 'http://sup.umsin.com/OrderEmail.aspx?cgID=1'
    })
}

//const server = (checkInMessage, leftDays) => {
//    return axios({
//        method: 'get',
//       url: `https://sc.ftqq.com/${SCKEY}.send`,
//        params: {
//            text: `${leftDays}天后到期，${checkInMessage}`
//        }
//    })
//}

const GLaDOSCheckIn = async () => {
    const STMessage = (await ST())?.data?.message;
    const UMSMessage = (await UMS())?.data?.message;
    //const leftDays = parseInt((await status())?.data?.data?.leftDays);
    //console.log(leftDays, checkInMessage);
}

GLaDOSCheckIn();
