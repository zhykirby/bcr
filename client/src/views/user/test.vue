<template>
    <div title="战力列表" class="flex-center">
        <div class="search-bar">
            <el-autocomplete
                class="inline-input width-500"
                placeholder="请输入要查询的角色"
                :trigger-on-focus="false"
                :fetch-suggestions="querySearch"
                v-model="dailyState"
             >
            </el-autocomplete>
            <div>
                <el-button type="primary" icon="el-icon-search" @click="findCard()">搜索</el-button>
            </div>
        </div> 
        <div class="daily-table">
            <el-table
                :data="results"
                style="width:100%;height: 820px">
                <el-table-column lable="id" type="index" prop="id" width="80"></el-table-column>
                <el-table-column label="游戏ID" prop="userName" width="160"></el-table-column>
                <el-table-column label="角色" prop="cardName" width="160"></el-table-column>
                <el-table-column label="战力" prop="cardCE" width="160"></el-table-column>
                <el-table-column label="职业" prop="job" width="160"></el-table-column>
                <el-table-column label="破甲" prop="hasAB" width="160"></el-table-column>
                <el-table-column label="编辑" width="100">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="editDaily(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
             <div class="pagination">
                <el-pagination
                    background
                    :current-page.sync="curPage"
                    :page-sizes="[10, 20, 30]"
                    :page-size="15"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                    @current-change="handlePage">
                </el-pagination>
            </div>
        </div>
       
         <el-dialog :title="title" :visible.sync="dialogVisible" center>
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="角色名" prop="cardName">
                    <el-select v-model="ruleForm.cardName" placeholder="角色名">
                      <el-option label="纯" value="纯"></el-option>
                      <el-option label="望" value="望"></el-option>
                      <el-option label="真琴" value="真琴"></el-option>
                      <el-option label="静流" value="静流"></el-option>
                      <el-option label="宫子" value="宫子"></el-option>
                      <el-option label="姬塔" value="姬塔"></el-option>
                      <el-option label="珠希" value="珠希"></el-option>
                      <el-option label="香织" value="香织"></el-option>
                      <el-option label="莉玛" value="莉玛"></el-option>
                      <el-option label="空花" value="空花"></el-option>
                      <el-option label="佩可" value="佩可"></el-option>
                      <el-option label="秋乃" value="秋乃"></el-option>
                      <el-option label="惠理子" value="惠理子"></el-option>
                      <el-option label="日和莉" value="日和莉"></el-option>
                      <el-option label="未奏希" value="未奏希"></el-option>
                      <el-option label="怜" value="怜"></el-option>
                      <el-option label="胡桃" value="胡桃"></el-option>

                      <el-option label="咲恋" value="咲恋"></el-option>
                      <el-option label="妮侬" value="妮侬"></el-option>
                      <el-option label="杏奈" value="杏奈"></el-option>
                      <el-option label="由加莉" value="由加莉"></el-option>
                      <el-option label="深月" value="深月"></el-option>
                      <el-option label="可可萝" value="可可萝"></el-option>
                      <el-option label="美美" value="美美"></el-option>
                      <el-option label="依里" value="依里"></el-option>
                      <el-option label="忍" value="忍"></el-option>
                      <el-option label="茜里" value="茜里"></el-option>
                      <el-option label="真阳" value="真阳"></el-option>
                      <el-option label="美冬" value="美冬"></el-option>

                      <el-option label="璃乃" value="璃乃"></el-option>
                      <el-option label="真步" value="真步"></el-option>
                      <el-option label="伊绪" value="伊绪"></el-option>
                      <el-option label="栞" value="栞"></el-option>
                      <el-option label="雪" value="雪"></el-option>
                      <el-option label="对不起优衣" value="优衣"></el-option>
                      <el-option label="铃奈" value="铃奈"></el-option>
                      <el-option label="千歌" value="千歌"></el-option>
                      <el-option label="臭鼬" value="凯露"></el-option>
                      <el-option label="美咲" value="美咲"></el-option>
                      <el-option label="铃莓" value="铃莓"></el-option>
                      <el-option label="碧" value="碧"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="战力" prop="cardCE">
                    <el-input v-model="ruleForm.cardCE" placeholder="战力为练度参考"></el-input>
                </el-form-item>
                <el-form-item label="定位" prop="job">
                    <el-select v-model="ruleForm.job" placeholder="参考">
                        <el-option label="主坦" value="主坦"></el-option>
                        <el-option label="副坦" value="副坦"></el-option>
                        <el-option label="物理输出" value="物理输出"></el-option>
                        <el-option label="破甲手" value="破甲手"></el-option>
                        <el-option label="奶辅" value="奶辅"></el-option>
                        <el-option label="功能辅助" value="功能辅助"></el-option>
                        <el-option label="法术输出" value="法术输出"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="破甲" prop="hasAB">
                     <el-select v-model="ruleForm.hasAB" placeholder="有无破甲">
                        <el-option label="无破甲" value="无破甲"></el-option>
                        <el-option label="有破甲" value="有破甲"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                <el-button @click="resetForm('ruleForm')">重 置</el-button>
                <el-button @click="dialogVisible = false;addFlag = true">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
/* eslint-disable indent */
export default {
    data() {
        return {
            title: '编辑战力',
            name: '',
            dailyList: [],
            dialogVisible: false,
            card: {},
            dailyState: '',
            dailyData: [],
            results: [],
            rawRes: [],
            curPage: 1,
            ruleForm: {
                id: 0,
                cardName: '',
                cardCE: '',
                job: '',
                hasAB: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入日程名', trigger: 'blur'},
                    {min: 1, max: 8, message: '长度在1-8个字符', trigger: 'blur'}
                ],
                desc: [
                    {required: false, message: '请输入日程描述', trigger: 'blur'},
                    {min: 1, max: 18, message: '长度在1-18个字符', trigger: 'blur'}
                ],
            },
            total: 1
        }
    },
    provide() {
        return {}
    },
    methods: {
        querySearch(queryString, cb) {
            let dailyList = this.dailyList
            let results = queryString ? dailyList.filter(this.createFilter(queryString)) : dailyList
            cb(results)
        },
        createFilter(queryString) {
            return (dailyList) => {
                return (dailyList.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
            }
        },
        // scope.row获取整行数据
        editDaily(row) {
            this.ruleForm.id = row.id
            this.ruleForm.cardName = row.cardName
            this.ruleForm.cardCE = row.cardCE
            this.ruleForm.job = row.job
            this.ruleForm.hasAB = row.hasAB
            this.dialogVisible = true
        },
        findCard() {
            let search = this.dailyState
            if (search) {
                this.results = this.dailyData.filter(name => {
                    return Object.keys(name).some(key => {
                        name[key] = name[key] + ''
                        if (name[key].toLowerCase().indexOf(search) !== -1) {
                            return true
                        }
                    })
                })
            } else {
                this.results = this.dailyData
            }
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        submitForm(formName) {
            let userName = this.name
            let id = this.ruleForm.id
            let cardName = this.ruleForm.cardName
            let cardCE = this.ruleForm.cardCE
            let job = this.ruleForm.job
            let hasAB = this.ruleForm.hasAB
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$http.post('/edit', {
                    name: userName,
                    id: id,
                    cardName: cardName,
                    cardCE: cardCE,
                    job: job,
                    hasAB: hasAB
                }).then(res => {
                    if (res.code === 200) {
                        this.$message({message: '添加成功', type: 'success'})
                        setTimeout(resolve => {
                            this.dialogVisible = false
                            this.reload()
                        }, 500)
                    } else {
                        this.$message({message: '出错啦……再试一次吧？', type: 'error'})
                    }
                })
            } else {
                this.$message({message: '修改失败', type: 'error'})
                return false
            }
            })
        },
        handlePage() {},
    },
    mounted() {
        this.$message({message: '欢迎回来', type: 'success'})
    },
    inject: ['reload'],
    created() {
        this.dailyList = []
        this.name = localStorage.getItem('user')
        let userName = this.name
        // eslint-disable-next-line no-unused-vars
        let promise = new Promise((resolve, reject) => {
            this.$http.get('/list', {
                name: userName
            }).then(res => {
                if (res.code === 200) {
                    resolve(res.list[0])
                } else {
                    this.$message({message: '出错啦，刷新试试吧~', type: 'error'})
                }
            }).catch(err => { return err })
        })
        .then((data) => {
            for (let i = 1; i < 16; i++) {
                for (let key in data) {
                    if (key === `card${i}`) {
                        this.card.userName = this.name
                        let value = data[key]
                        this.card.cardName = value.cardName
                        this.card.cardCE = value.cardCE
                        this.card.job = value.job
                        this.card.hasAB = value.hasAB
                        this.results.push(this.card)
                        let list = {}
                        list.value = value.cardName
                        this.dailyList.push(list)
                        this.card = {}
                    }
                }
            }
            // eslint-disable-next-line no-console
        }).catch(err => console.log(err))
        this.dailyData = this.results
    }
}
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.search-bar
    width 720px
    height 80px
    display flex
    align-items center
    justify-content space-between

.pagination
    display flex
    justify-content center
    align-items center
    height 66px

.width-500
    width 500px

.daily-table
    width 1000px
</style>