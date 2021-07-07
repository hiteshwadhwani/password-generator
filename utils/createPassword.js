const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let char = alpha;
  hasSymbols ? (char += symbols) : "";
  hasNumbers ? (char += numbers) : "";
  return generatePassword(length, char);
};
const generatePassword = (length,char) => {
    let password = '';
    for (let i = 0; i < length;i++){
        password += char.charAt(Math.floor(Math.random() * char.length));
    }
    return password;
}

module.exports = createPassword;