const cheerio = require('cheerio');
const axios = require('axios');


var baseUrl = 'https://movie.douban.com/top250';
var movies = [];  //存放电影信息

function doubanCrawler(url){
        // Make a request for a user with a given ID 
        axios.get(url)
            .then(function (response) {
                var data = response.data;
                // console.log(data);
                var $ = cheerio.load(data);
                var elems = $('.grid_view .item');
                // console.log(elems.length);
                elems.each(function(){
                    var elem = $(this);

                    // title
                    var title = elem.find('.info .hd a').text().trim();
                    // console.log(title);

                    // src
                    var cover = elem.find('.pic img').attr('src').trim();
                    // console.log(cover);

                    // star 
                    var star = elem.find('.bd .star .rating_num').text().trim();
                    // console.log(star);

                    movies.push({
                        titile: title,
                        cover: cover,
                        star: star
                    })
                    // console.log(movies);
                 

                })
                var nextUrl = $('.next a').attr('href');
                console.log(nextUrl);
                if(nextUrl){
                    doubanCrawler(baseUrl + nextUrl);
                }else{
                    console.log(movies)
                    console.log(movies.length)
                }
                
            })
            .catch(function (error) {
                 console.log(error);
        });
}
doubanCrawler(baseUrl);


