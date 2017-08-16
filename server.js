var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    `article-one: {
    title: 'Article One | Pramod Sahare',
    heading: 'Article One',
    date: 'Aug 15, 2017',
    content:` <p> his is content for my first page. This is content for my first page. This is content for my first page
                This is content for my first page. This is content for my first page. This is content for my first page
                This is content for my first page. This is content for my first page. This is content for my first page
                <p>`
    },
   
    `article-two: {title: 'Article Two | Pramod Sahare',
    heading: 'Article Two',
    date: 'Aug 10, 2017',
    content:` <p> his is content for my first page. This is content for my first page. This is content for my first page
                This is content for my first page. This is content for my first page. This is content for my first page
                This is content for my first page. This is content for my first page. This is content for my first page
    
     
    </p> `
       },
    `article-three:{title: 'Article Three | Pramod Sahare',
    heading: 'Article Three',
    date: 'Aug 25, 2017',
    content:` <p> his is content for my first page. This is content for my first page. This is content for my first page
                This is content for my first page. This is content for my first page. This is content for my first page
                This is content for my first page. This is content for my first page. This is content for my first page
              </p> 
     
    <p>         This is content for my first page. This is content for my first page. This is content for my first page.
                This is content for my first page. This is content for my first page. This is content for my first page.
                This is content for my first page. This is content for my first page. This is content for my first page.
    </p> `
   
    },
};
function createTemplate (data) {
    var title=data.title;
    var date =data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate= `
<html>
    <head>
        <title>${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        
         <div class="container">
        <div>
            <a href="/">Home </a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
        
    </body>
</html>

`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName=article-one
    //articles(articleName)==content object for article one
    var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
