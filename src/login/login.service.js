"use strict";
const bcrypt = require('bcrypt');
let LoginModel = new (require('./login.model.js'))();
let LoginResponse = require("./login.response.js");

module.exports = class LoginService {

    async register(_data) {
        try {
            let result;
            let user = await LoginModel.exists(_data) 
            if(user){
                return LoginResponse.failed("user_exists");
            }
            else
                {
                    const saltRounds = 10;
                    const passwordHash = await bcrypt.hash(_data.password, saltRounds);
                result = await LoginModel.register({..._data, password: passwordHash})
                } 
                
            return LoginResponse.success("register_success", user);
        } catch (err) {
            console.log(err)
            return LoginResponse.failed("general_error");
        }
    }

    async login(_data) {
        try {
            let result;
            let user = await LoginModel.exists(_data) 
            if(!user){
                return LoginResponse.failed("user_not_exists");
            }
            else
                {
                    const passwordHash = await LoginModel.getHashPassword(_data);
                    const isMatch = await bcrypt.compare(
                    _data.password,
                    passwordHash
                    );
                    if(!isMatch){
                        return LoginResponse.failed("invalid_credentials");
                    }
                    else{
                        result = await LoginModel.login(_data)
                    }
                }
            return LoginResponse.success("login_success", user);
        } catch (err) {
            console.log(err)
            return LoginResponse.failed("general_error");
        }
    }
}