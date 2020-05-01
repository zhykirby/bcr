const router = require('koa-router')()
const User = require('../controller/user')

router.prefix('/users')

router.post('/login', User.login)
router.post('/reg', User.reg)
router.post('/add', User.add)
router.get('/list', User.list)
router.post('/edit', User.edit)
router.get('/all', User.all)
router.post('/set', User.set)
router.get('/userName', User.userName)
router.get('/getGroup', User.getGroup)

module.exports = router
