import CryptoJS from "crypto-js";

const encrypt = (data,key) => {
    return CryptoJS.AES.encrypt(data,key).toString();
}

const decrypt = (data,key) => {
    var bytes = CryptoJS.AES.decrypt(data,key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

const global = {
    encrypt,
    decrypt
}

export default global;