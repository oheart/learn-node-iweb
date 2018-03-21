var axios = require('axios');
var cheerio = require('cheerio');
var cron = require('cron');
var nodemailer = require('nodemailer');

//第四部，定时任务
var CronJob = require('cron').CronJob;
new CronJob('00 00 10 * * *', function() {
    sendMail();
}, null, true, 'Asia/Shanghai');


// sendMail();
function sendMail(){
        //第一步，用axios抓取页面
        axios.get('http://kaijiang.500.com/')
            .then(function(res){
                // console.log(res.data);
                //第二步，用cherrio萃取数据 (获取其中的双色球信息)
                var $ = cheerio.load(res.data);
                var script = $('#ssq .td_kjhm01 script').html().trim();
                // console.log(script);
                var reg = /^formatResult\('ssq','(.+)'\);$/;
                var matched = script.match(reg);
                // console.log(matched); 
                if(!matched){
                    return;
                }
                // console.log(matched[1]);
                var kaijiang = matched[1];  //获取到开奖信息的双色球
                // 第三步，发邮件
                transporter = nodemailer.createTransport({
                    host: 'smtp.qq.com',
                    port: 465,
                    secure: true,
                    auth:{
                        user: '2353769123@qq.com',
                        pass: 'bgkdaiiayfgwecge'    //qq在pass输入授权码
                    },
                    logger: false,
                    debug: false
                })
                
                transporter.sendMail({
                    from: '2353769123@qq.com',
                    to: '2353769123@qq.com',
                    subject: kaijiang,
                    text: '开奖了',
                    attachments:[
                        {  
                            filename: 'Yeah.jpg',
                            path: 'http://scimg.jb51.net/touxiang/201703/2017032314560416.jpg'
                        }
                    ]
                },(err,info) => {
                    console.log(err,info);
                })

            })
            .catch(function(err){
                console.log(err)
            })
}
