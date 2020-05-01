const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser)

const User = require('../models/User')
const Counter = require('../models/Counter')
const Group = require('../models/Group')

let ret = Counter.find({id:'user'}).lean().exec((err, docs) => {return docs})
if (!ret) {
    let count = new Counter({
        id: 'user',
        seq: 0
    })
    count = count.save()
} else {
    console.log('counter 不为空')
}

const reg = async(ctx) => {
    let postData = ctx.request.body
    let name = postData.name
    let qqID = postData.qqID
    let password = postData.password
    let hasUser = await User.find({name:name}).lean().exec((err, docs) => {return docs})
    if (hasUser) {
        return ctx.body = {
            code: 201,
            msg: '已经注册'
        }
    } else {
        let userId = await getNextSequenceValue('user')
        let user = new User({
            userName: name,
            userId: userId,
            password: password,
            qqID: qqID
        })
        user = user.save()
        return ctx.body = {
            code: 200,
            msg: '添加成功'
        }
    }
}

const login = async(ctx) => {
    let postData = ctx.request.body
    let name = postData.userName
    let password = postData.password
    return new Promise((resolve, reject) => {
        User.find({userName:name}).lean().exec((err, docs) => {
            resolve(docs)
        })
    })
    .then(data => {
        if (data[0].password === password) {
            ctx.body = {
                code: 200,
                msg: '登陆成功'
            }
        } else {
            ctx.body = {
                code: 404,
                msg: '登陆失败'
            }
        }
    })
}

const add = async(ctx) => {
    return new Promise((resolve, reject) => {
        let postData = ctx.request.body
        let name = postData.name
        let allInfo = JSON.parse(postData.allInfo)
        let card = []
        for (let i in allInfo) {
            card.push(allInfo[i])
        }
        User.findOneAndUpdate({userName:name}, {$set:{
            card1: card[0],
            card2: card[1],
            card3: card[2],
            card4: card[3],
            card5: card[4],
            card6: card[5],
            card7: card[6],
            card8: card[7],
            card9: card[8],
            card10: card[9],
            card11: card[10],
            card12: card[11],
            card13: card[12],
            card14: card[13],
            card15: card[14]
        }}, function (err, docs) {
            if (err) console.log(err)
        },{new: true})
        resolve()
    }).then(() =>{
        ctx.body = {
            code: 200,
            msg: '添加成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 404,
            msg: err
        }
    })
}

const list = async(ctx) => {
    return new Promise((resolve, reject) => {
        let postData = ctx.request.query
        let name = postData.name
        User.find({userName: name}).lean().exec((err, docs) => {
            resolve(docs)
        })
    }).then(data => {
        ctx.body = {
            code: 200,
            msg: '请求成功',
            list: data
        }
    }).catch(err => {
        ctx.body = {
            code: 404,
            msg: err
        }
    })
}

const edit = async(ctx) => {
    return new Promise((resolve, reject) => {
        let postData = ctx.request.body
        let name = postData.name
        let id = postData.id
        let cardName = postData.cardName
        let cardCE = postData.cardCE
        let job = postData.job
        let hasAB = postData.hasAB
        let change = {}
        change[`card${id}`] = {cardName: cardName, cardCE: cardCE, job:job, hasAB:hasAB}
        User.findOneAndUpdate({userName:name}, {$set: change}, function (err) {
            if (err) console.log(err)
        },{new: true})
        resolve()
    })
    .then(() => {
        ctx.body = {
            code: 200,
            msg: '修改成功'
        }
    })
    .catch(err => {
        ctx.body = {
            code: 404,
            msg: err
        }
    })
}

const all = async(ctx) => {
    return new Promise ((resolve, reject) => {
        User.find({}).lean().exec((err, docs) => {
            resolve(docs)
        })
    }).then(data => {
        ctx.body = {
            code: 200,
            msg: '获取成功',
            all: data
        }
    }).catch(err => {
        ctx.body = {
            code: 404,
            msg: err
        }
    })
}

const set = async(ctx) => {
    return new Promise ((resolve, reject) => {
        let postData = ctx.request.body
        let name = postData.name
        let g1 = postData.g1
        let g2 = postData.g2
        let g3 = postData.g3
        let g4 = postData.g4
        let g5 = postData.g5
        let g6 = postData.g6
        let g7 = postData.g7
        let g8 = postData.g8
        let g9 = postData.g9
        let g10 = postData.g10
        let g11 = postData.g11
        let g12 = postData.g12
        let g13 = postData.g13
        let g14 = postData.g14
        let g15 = postData.g15
        let res = Group.find({userName: name}).lean().exec((err, docs) => {return docs})
        if (res) {
            Group.findOneAndUpdate({userName: name}, {$set: {
                group1: g1,
                group2: g2,
                group3: g3,
                group4: g4,
                group5: g5,
                group6: g6,
                group7: g7,
                group8: g8,
                group9: g9,
                group10: g10,
                group11: g11,
                group12: g12,
                group13: g13,
                group14: g14,
                group15: g15,
            }}, function (err) {
                if (err) console.log(err)
            }, {new: true})
            resolve()
        } else {
            let group = new Group({
                userName: name,
                group1: g1,
                group2: g2,
                group3: g3,
                group4: g4,
                group5: g5,
                group6: g6,
                group7: g7,
                group8: g8,
                group9: g9,
                group10: g10,
                group11: g11,
                group12: g12,
                group13: g13,
                group14: g14,
                group15: g15
            })
            group = group.save()
            resolve()
        }
    }).then(() => {
        ctx.body = {
            code: 200,
            msg: '设定成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 404,
            msg: err
        }
    })
}

const getGroup = async(ctx) => {
    return new Promise ((resolve,reject) => {
        let postData = ctx.request.query
        let name = postData.name
        Group.find({userName: name}).lean().exec((err, docs) => {
            resolve(docs[0])
        })
    }).then(data => {
        ctx.body = {
            code: 200,
            msg: '请求成功',
            group: data
        }
    }).catch(err => {
        ctx.body = {
            code: 404,
            msg: err
        }
    })
}

const userName = async(ctx) => {
    return new Promise ((resolve, reject) => {
        User.find({}).lean().exec((err, docs) => {
            resolve(docs)
        })
    }).then(data => {
        ctx.body = {
            code: 200,
            users: data
        }
    }).catch(err => {
        ctx.body = {
            code: 404,
            msg: err
        }
    })
}

const getNextSequenceValue = (sequenceName) => {
    return new Promise((resolve, reject) => {
        let sequenceDocument = Counter.findOneAndUpdate(
            {id: sequenceName},
            {$inc: {seq: 1}},
            {new: true}
        ).lean().exec((err,docs) => {
            resolve(docs.seq)
        })   
    })
}

module.exports = {
    reg: reg,
    login: login,
    add: add,
    list: list,
    edit: edit,
    all: all,
    set: set,
    userName: userName,
    getGroup: getGroup
}