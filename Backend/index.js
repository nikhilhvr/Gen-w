import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.get('/',(req,res)=>{
  res.send('Server is Ready')
})

app.get('/api/blogs',(req,res)=>{
  const blogs = [
    {id:1,
    title:'Water is Life',
    content:'This is my first blog'
  },
  {id:2,
    title:'Water is Life',
    content:'This is my first blog'
  }
  ];
  res.send(blogs);
});

const port = process.env.PORT;

app.listen(port,()=>{
  console.log(`Serve at http://localhost:${port}`);
}
);