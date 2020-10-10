const express = require('express')
const md5 = require('md5')
const router = express.Router()
const { handleDataBase } = require('../mysql')

//  注册请求
router.post('/register', (req, res, next) => {
  handleDataBase({
    dataBase: 'Boss',
    sql: `
    insert into userInfo values(
      null,
      '${req.body.userName}',
      '${md5(req.body.password)}',
      '${req.body.userType}',
      null,
      null,
      null,
      null,
      null
      )
  `,
  }).then(
    (result) => {
      //
      res.send({
        code: 0,
        data: {
          data: {
            userName: req.body.userName,
            userType: req.body.userType,
            insertId: result.insertId,
          },
        },
      }) //  注册成功
    },
    (err) => {
      console.log(err)
      res.send({ code: 1 }) //  用户已存在
    }
  )
})

//  登录请求
router.post('/login', (req, res, next) => {
  handleDataBase({
    dataBase: 'Boss',
    sql: `select id insertId,userName,userType from userInfo where userName='${
      req.body.userName
    }' and password='${md5(req.body.password)}'`,
  }).then(
    (result) => {
      if (result.length === 0) {
        res.send({ code: 2 }) // 用户不存在
      } else {
        res.send({ code: 0, data: result[0] }) //  用户存在
      }
    },
    (err) => {
      res.send({ code: 1 }) //  数据库错误
    }
  )
})

//  详细信息补充
router.post('/detail', (req, res, next) => {
  let obj = {
    sql: `
  UPDATE userInfo SET salary='${req.body.salary}',
  avatar='${req.body.avatar}',
  jobPosition='${req.body.jobPosition}',
  companyName='${req.body.companyName}',
  salary='${req.body.salary}',
  required='${req.body.required}'
  WHERE id=${req.body.insertId}
  `,
    dataBase: 'Boss',
  }
  req.body.salary
    ? ''
    : (obj.sql = `
UPDATE userInfo SET salary='${req.body.salary}',
avatar='${req.body.avatar}',
jobPosition='${req.body.jobPosition}',
required='${req.body.required}'
WHERE id=${req.body.insertId}
`)
  handleDataBase(obj).then(
    (result) => {
      res.send({ code: 0 })
    },
    (err) => {
      res.send({ code: 1 })
    }
  )
})
//  用户列表请求
router.post('/getuser/list', (req, res, next) => {
  handleDataBase({
    dataBase: 'Boss',
    sql: `
      select * from userInfo where userType='${req.body.userType}' limit ${
      (req.body.page - 1) * 5
    },5
    `,
  }).then(
    (result) => {
      res.send({ code: 0, data: result })
    },
    (err) => {
      res.send({ code: 1 })
    }
  )
})
//  获取个人信息
router.post('/getuser/center', (req, res, next) => {
  handleDataBase({
    dataBase: 'Boss',
    sql: `
      select * from userInfo where id='${req.body.insertId}'
    `,
  }).then(
    (result) => {
      console.log(result)
      res.send(result)
    },
    (err) => {
      res.send(err)
    }
  )
})

module.exports = router
