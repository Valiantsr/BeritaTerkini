const express = require('express');
const app = express();
const path = ([
    'navbar','carousel', 'cari','dashboardbawah','dashboardterkini','redaksi'
]);

app.engine('html', require('ejs').renderFile);


app.get('/' , (req, res)=>{
    res.render(__dirname + '/dist/navbar.html');
});

app.use('/img', express.static('dist/img/'));
app.use('/assets', express.static('dist/assets/'));

for (var i = 0; i < path.length; i++) {
    app.get('/' + path[i] + '.html', (req, res)=> {
        console.log(__dirname+'/dist/'+req.route.path.substring(1));
        return res.render(__dirname+'/dist/'+req.route.path.substring(1));
    });
}

app.listen(80, ()=>{
    console.log('Server berjalan pada http://localhost:80')
})