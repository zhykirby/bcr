<template>
  <div class="bg" >
      <div class="login">
        <div class="avatar"></div>  
        <div class="clickLogin">
            <el-button type="primary" round @click="loginVisible = true">登录</el-button>
            <el-button type="primary" round @click="registerVisible = true">注册</el-button>
        </div>
      </div>
      <el-dialog title="登录" :visible.sync="loginVisible" center>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="游戏ID" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirm">
                <el-input type="password" v-model="ruleForm.confirm"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="loginVisible = false">取 消</el-button>
        </div>
      </el-dialog>
      <el-dialog title="注册" :visible.sync="registerVisible" center>
        <el-form :model="regForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="游戏ID" prop="name">
                <el-input v-model="regForm.name"></el-input>
            </el-form-item>
            <el-form-item label="QQ-ID(不是qq号)" prop="qq">
                <el-input v-model="regForm.qq"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="regForm.password"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitForm('regForm')">确 定</el-button>
            <el-button @click="resetForm('regForm')">重置</el-button>
            <el-button @click="registerVisible = false">取 消</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
/* eslint-disable indent */
export default {
    data() {
        return {
            flag: true,
            loginVisible: false,
            registerVisible: false,
            ruleForm: {
                name: '',
                password: '',
                confirm: ''
            },
            regForm: {
                name: '',
                qqID: '',
                password: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    {min: 1, max: 20, message: '长度在1-20个字符', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 12, message: '长度在6-12个字符', trigger: 'blur'}
                ],
                confirm: [
                    {required: true, message: '请再输入一遍密码', trigger: 'blur'},
                    {min: 6, max: 12, message: '长度在6-12个字符', trigger: 'blur'}
                ],
                qq: [
                    {required: true, message: '请输入qq-ID', trigger: 'blur'},
                    {min: 1, max: 16, message: '长度在1-12个字符', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        submitForm(formName) {
            if (formName === 'ruleForm') {
                const name = this.ruleForm.name
                const password = this.ruleForm.password
                if (name === 'admin' && password === 'admin123') {
                    localStorage.setItem('admin', 'admin')
                    this.$message({message: '管理员验证成功，跳转后台中...', type: 'success'})
                    setTimeout(resolve => {
                        this.$router.push('/admin')
                    }, 500)
                    return
                }
                this.$http.post('/login', {
                    userName: name, password: password
                }).then(res => {
                    if (res.code === 200) {
                        localStorage.setItem('user', name)
                        this.$message({message: '登录成功', type: 'success'})
                        setTimeout(resolve => {
                            this.$router.push('/main')
                        }, 500)
                    } else {
                        this.$message({message: '用户名或密码错误，请重新输入', type: 'error'})
                        return false
                    }
                })
            } else {
                const name = this.regForm.name
                const qqID = this.regForm.qqID
                const password = this.regForm.password
                this.$http.post('/reg', {
                    userName: name, password: password, qqID: qqID
                }).then(res => {
                    if (res.code === 200) {
                        localStorage.setItem('user', name)
                        this.$message({message: '注册成功', type: 'success'})
                        setTimeout(resolve => {
                            this.$router.push('/main')
                        }, 500)
                    } else {
                        this.$message({message: '用户名已注册', type: 'error'})
                        return false
                    }
                })
            }
        },
    }
}
</script>

<style scoped>
.avatar{
    border-radius: 10px;
    border: 2px#515151 solid;
    background-image: url('../../assets/img/avatar_m.jpg');
    background-size: contain;
    background-repeat: no-repeat;
}
.bg{
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/img/abstract.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
}
.login{
    align-self: center;
    width: 300px;
    height: 320px;
    background: #e1e1e1;
    border-radius: 20px;
    box-shadow: 6px 6px 0px 0px #515151;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.avatar{
    align-self: center;
    width: 180px;
    height: 180px;
}
.clickLogin{
    width: 400px;
    align-self: center;
    display: flex;
    justify-content: center;
    margin-top: -30px;
}
.changeBg{
    width: 36px;
    height: 36px;
}
</style>