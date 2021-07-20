const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{

       if(req.url === '/'){
        fs.readFile
        (path.join(__dirname,'files','index.html'),
        (err,content)=>{

            if(err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);

        });
        
       }

       if(req.url === '/shape'){
        fs.readFile
        (path.join(__dirname,'files','shape.html'),
        (err,content)=>{

            if(err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);

        });
        
       }
       if(req.url === '/feedback'){
        fs.readFile
        (path.join(__dirname,'files','feedback.html'),
        (err,content)=>{

            if(err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);

        });
        
       }
       if(req.url === '/photos'){
        fs.readFile
        (path.join(__dirname,'files','photos.html'),
        (err,content)=>{

            if(err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);

        });
        
       }
       if(req.url === '/audiovideo'){
        fs.readFile
        (path.join(__dirname,'files','audiovideo.html'),
        (err,content)=>{

            if(err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);

        });
        
       }
       if(req.url === '/schedule'){
        fs.readFile
        (path.join(__dirname,'files','schedule.html'),
        (err,content)=>{

            if(err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);

        });
        
       }

       if(req.url === '/shapes'){
        fs.readFile
        (path.join(__dirname,'files','shapes.html'),
        (err,content)=>{

            if(err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);

        });
        
       }

       //building file path

       let filepath = path.join(__dirname,'files', req.url==='/' ? 'index.html' : req.url);
        
       let extname = path.extname(filepath);

       let contenttype = 'text/html';

       //checking contenttype

       switch(extname) {

        case '.js':
            contenttype = 'text/javascript';
            break;
        case '.css':
            contenttype = 'text/css';
            break;
        case '.json':
            contenttype = 'application/json';
            break;
        case '.png' : 
            contenttype = 'image/png';
            break;
        case '.jpg':
            contenttype = 'image/jpg';
            break; 
       }

    fs.readFile(filepath,(err,content) =>{

        if(err){

            if(err.code === 'ENONET'){
                //page not found

                fs.readFile(path.join(__dirname,'files','404.html'),(err,content) =>{

                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content,'utf-8');

                });


            } else{

                res.writeHead(500);
                res.end('server error'+ err.code);
            }

        } else{

            //success
            res.writeHead(200,{'Content-Type': contenttype});
            res.end(content,'utf-8');

        }

    });


});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("server is running on port"+PORT));
