const cheerio = require('cheerio');
const axios = require('axios');
var fs = require('fs');


var baseUrl = 'https://beijing.anjuke.com/community/yanjiao/';
var datas = [];  //存放小区信息

function doubanCrawler(url){
        // Make a request for a user with a given ID 
        axios.get(url)
            .then(function (response) {
                var data = response.data;
                // console.log(data);
                var $ = cheerio.load(data);
                var elems = $('#list-content .li-itemmod');
                // console.log('length' + elems.length)
                elems.each(function(){
                    var elem = $(this);
                  
                    // title
                    var title = elem.find('.li-info h3 a').text().trim();
                    // console.log(title);

                    // src
                    var cover = elem.find('a img').attr('src').trim();
                    // console.log(cover);

                    //  address
                    var address = elem.find('.li-info address').text().trim();
                    // console.log(address);

                    // date
                    var date = elem.find('.li-info .date').text().trim();
                    // console.log(date);

                    // type
                    var type = elem.find('.li-info .bot-tag span').text().trim();
                    // console.log(type);


                    datas.push({
                        titile: title,
                        // cover: cover,
                        // address: address,
                        // date: date,
                        // type: type
                    })
                    // console.log(datas);
                    // console.log(datas.length)
                 

                })
                var nextUrl = $('.page-content .multi-page .aNxt').attr('href');
                console.log('nextUrl:  ' + nextUrl)
                if(nextUrl){
                    doubanCrawler(nextUrl);
                    console.log(nextUrl)
                }else{
                    console.log(datas)
                    console.log(datas.length)
                    writeFiles(JSON.stringify(datas))
                }
            })
            .catch(function (error) {
                 console.log(error);
        });
}
doubanCrawler(baseUrl);

function writeFiles(content){
    fs.writeFile('data.txt', content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}





