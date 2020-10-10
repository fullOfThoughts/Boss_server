const { dataBase, handleDataBase } = require('../mysql')

//  创建数据库
// dataBase({ sql: `create database if not exists Boss` }).then((res) => {
//   console.log(res)
// })

//创建表结构
// handleDataBase({
//   dataBase: 'Boss',
//   sql: `
//   create table if not exists userInfo(
//     id int primary key auto_increment,
//   userName char(11) not null,
//   password int not null,
//   userType char not null
//   )
// `,
// }).then((res) => {
//   console.log(res)
// })

//  查询表结构
// handleDataBase({
//   dataBase: 'Boss',
//   sql: `
//     desc userInfo
//   `,
// }).then((res) => {
//   console.log(res)
// })

//  修改表结构
// handleDataBase({
//   dataBase: 'Boss',
//   sql: `
//     alter table userInfo change column 'password' 'password' char(15) not null
//   `,
// })

//  查询表内容
// handleDataBase({
//   dataBase: 'Boss',
//   sql: `
//     select * from userInfo
//   `,
// }).then((res) => {
//   console.log(res)
// })

//  删除某条信息
// handleDataBase({
//   dataBase: 'Boss',
//   sql: `
//     delete from userInfo where id=2
//   `,
// }).then((res) => {
//   console.log(res)
// })

//  清除全部表信息
// handleDataBase({
//   dataBase: 'Boss',
//   sql: `
//     truncate table userInfo
//   `,
// })

//  往表中插入数据
// handleDataBase({
//   dataBase: 'Boss',
//   sql: `
//     insert into userInfo values(
//       null,
//       '拉萨达是',
//       123456,
//       '1'
//     )
//   `,
// }).then(
//   (res) => {
//     console.log(res)
//   },
//   (err) => {
//     console.log(err)
//   }
// )
