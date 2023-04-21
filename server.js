const http=require("http");
const fs=require("fs");

const PORT = process.env.PORT || 5000; //port number on browser


const server = http.createServer((req, res) => {
    if (req.url === '/') {
      const filePath = path.join(__dirname, 'output/server/pages', 'home.html');
      const stream = fs.createReadStream(filePath);
      return stream.pipe(res);
    }
    if (req.url === '/contact') {
        const filePath = path.join(__dirname, 'output/server/pages', 'contact.html');
        const stream = fs.createReadStream(filePath);
        return stream.pipe(res);
      } 
      if(req.url=="/about"){
        return  res.end("<div>This is about page</div><a href= '/'><button><h2>Home</h2></button></a>");
      }
      else{
        return  res.end("<div>404 not found</div><a href= '/'><button><h2>Home</h2></button></a>")
      }      

  });


  server.listen(PORT,()=>{console.log(`server started`)});

  module.exports = server;

