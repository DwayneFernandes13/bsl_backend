// using validator library is Validatorjs
module.exports = class LoginValidator {
    register() {
        return {
            email: "required|email",
            password: "required|min:6",
            name: "required"
        }
    }

    login() {
        return {
            email: "required|email",
            password: "required"
        }
    }
}
