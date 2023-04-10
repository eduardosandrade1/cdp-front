<template>
    <div class="login-area flip" id="p2">
        <div class="container-center ">
            <div class="logo">
                <img src="../../assets/logo.png" alt="" srcset="" id="img-logo">
            </div>
            <div class="text-logo">
                Login
            </div>
            <form v-on:submit="doLogin">
                <div class="input-group">
                    <input type="email" placeholder="Email" v-model="email" required>
                </div>
                <div class="input-group">
                    <input type="password" placeholder="Senha" min="8" v-model="password" required>
                </div>
    
                <span class="text-danger" v-if="error">
                    {{ error }}
                </span>
    
                <div class="enter">
                    <button class="btn-enter">Entrar</button>
                </div>
            </form>
            <div class="without-login">
                <a class="btn-enter-none-login" @click="goToLoginPageWithoutAuthenticated()">Entrar sem login</a>
            </div>
            <div class="register">
                <div class="link-register">
                    <label for="c2" class="next-btn">
                        Quero me cadastrar
                    </label>
                </div>
                <div class="link-forgot-pass">
                    <label class="">
                        Esqueci a senha
                    </label>
                </div>
            </div>
            <label for="c1" class="back-btn color-black">Voltar</label>
        </div>
    </div>
    </template>
    
    <script>
    
        import login from '../../../services/auth/login';
        import Loading from '../../Loading.vue'
    
        export default {
            data() {
                return {
                    error: '',
                }
            },
            methods: {
                doLogin(e) {
                    e.preventDefault();
                    let email = this.email;
                    let psswd = this.password;
                    this.$parent.loading = true;
                    login.doAuth({
    
                        email: email,
                        password: psswd,
    
                    }).then(response => {
                        if (200 === response.status) {
                            let data = response.data
                            if (data.access_token) {
                                sessionStorage.setItem('access_tk', data.access_token)
                                sessionStorage.setItem('ID', data.ID)
                            }
                            this.$parent.loading = false;
    
                            window.location.href = '/menu'
                        }
                    }).catch(er => {
                        this.$parent.loading = false
                        this.error = "Email e/ou senha inválido"
                        this.email = ''
                        this.password = ''
                        setTimeout(() => {
                            this.error = '';
                        }, 4000);
                    })
                },
                goToLoginPageWithoutAuthenticated() {
                    sessionStorage.removeItem('access_tk')
                    sessionStorage.removeItem('ID')
                    window.location.href = '/menu';
                }
            },
            components: {
                Loading,
            }
        }
    
    </script>
    
    <style scoped>
    
        #img-logo {
            width: 30%;
            text-align: center;
        }
    
        .logo {
            display: flex;
            justify-content: center;
        }
    
        .text-logo {
            font-size: 32px;
        }
    
        .container__login .login-area {
            border-radius: 0 15px 15px 0;
            margin: auto;
            width: 100%;
            background-color: #fff;
        }
    
        .container__login .login-area .container-center {
            width: 100%;
            margin: auto;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    
        .container__login .login-area .container-center .input-group{
            width: 100%;
        }
        .container__login .login-area .container-center .input-group input {
            outline:none;
            box-shadow: none;
            border: none;
            border-radius: 3px;
            background-color: transparent;
            border-bottom: 1px solid #909090;
            height: 37.4px;
            width: 100%;
            font-weight: 600;
            font-size: 20px;
        }
    
        .container__login .login-area .container-center .input-group {
            padding: 10px;
        }
    
        .container__login .login-area .container-center .enter {
            margin: 10px auto;
        }
        .container__login .login-area .container-center .enter .btn-enter {
            padding: 10px 100px;
            height: 48.52px;
            background-color: rgba(0, 0, 0, 0.79);
            font-size: 20px;
            border-radius: 11px;
            border: none;
            color: white;
            cursor: pointer;
        }
        
        .container__login .login-area .container-center .enter .btn-enter:hover {
            transition: width 1s, height 2s, background-color 2s, transform 2s;
            background-color: rgb(0, 0, 0);
        }
    
        .register {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 40px;
        }
    
        .btn-enter-none-login {
            font-size: 10pt;
            padding: 0;
            cursor: pointer;
        }
    
    </style>