var nodemailer = require('nodemailer');


// 发邮件用的SMTP协议
// 以qq为例

transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth:{
        user: 'xxxx@qq.com',
        pass: 'bgkdaiiayfgwecge'    //qq在pass输入授权码
    },
    logger: false,
    debug: false
})

transporter.sendMail({
    from: 'xxxx@qq.com',
    to: 'xxxx@qq.com',
    subject:'test nodemailer subject',
    text:'test nodemailer text',
    //添加附件
    attachments:[
        {
            filename:'萌哒哒.jpeg',
            path:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509949769256&di=1ac1d317af23a392f355f97eb0f687cd&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201407%2F27%2F20140727220238_4fiiP.thumb.700_0.jpeg'
        }
    ]
},(err,info) => {
    console.log(err,info)
})


