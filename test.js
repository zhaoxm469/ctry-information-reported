

// import CryptoJS from 'crypto-js/crypto-js'

const CryptoJS = require("crypto-js");

// 例如手机号：
// 明文：18555555555
// 密文：SjF2jA+jnGyc6hixdNvS5g==


// 默认的 KEY 与 iv 如果没有给
let key_iv = ''
const KEY = CryptoJS.enc.Utf8.parse(key_iv)
const IV = CryptoJS.enc.Utf8.parse(key_iv)


/**
 * AES加密 ：字符串 key iv  返回base64
 */
function Encrypt (word, keyStr, ivStr = '') {
    let key = KEY
    let iv = IV

    if (keyStr) {
        key = CryptoJS.enc.Utf8.parse(keyStr)
        iv = CryptoJS.enc.Utf8.parse(ivStr)
    }

    let srcs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 *
 */
function Decrypt (word, keyStr, ivStr) {
    let key = KEY
    let iv = IV

    if (keyStr) {
        key = CryptoJS.enc.Utf8.parse(keyStr)
        iv = CryptoJS.enc.Utf8.parse(ivStr)
    }

    let base64 = CryptoJS.enc.Base64.parse(word)
    let src = CryptoJS.enc.Base64.stringify(base64)

    let decrypt = CryptoJS.AES.decrypt(src, key, {
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    })

    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
}


// console.log(Encrypt('15810275844'));
console.log(Decrypt('SjF2jA+jnGyc6hixdNvS5g=='));