const http=require("http");
const fs=require("fs");

//reading html 
const homepage=fs.readFileSync("./home.html");
const contactpage=fs.readFileSync("./contact.html")

const PORT = process.env.PORT || 5000; //port number on browser


const server= http.createServer(
    (req,res)=>
        {
            if(req.url=="/")
            {
              return res.end(homepage);
            }
            if(req.url=="/contact"){
              return  res.end(contactpage);
            }
            if(req.url=="/about"){
              return  res.end("<div>This is about page</div><a href= '/'><button><h2>Home</h2></button></a>");
            }
            else{
              return  res.end("<div>404 not found</div><a href= '/'><button><h2>Home</h2></button></a>")
            }      
        }
);

server.listen(PORT,()=>{console.log(`server started`)});