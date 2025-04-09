
import { useState } from "react";

const Home = () => {
    const [color, setColor] = useState("red");
    const handle= ()=>{
        setColor("ashmrar");
    }
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    return (  
/* <div className="home">
    <h2>home page </h2>
<p>{color}</p>
    <button onClick={()=>{return alert("hello");}}>click ici </button>
    <button onClick={handle}>click aganin</button>
    
</div> */
<div className="home">
<h2>home page </h2>
<p>{color}</p>
    <button onClick={()=>{return alert("hello");}}>click ici </button>
    <button onClick={handle}>click aganin</button>
{blogs.map(blog => (
  <div className="blog-preview" key={blog.id} >
    {/* key utiliser pour supprimer et modofier specifiquement  blog id */}
    <h2>{ blog.title }</h2>
    <p>Written by { blog.author }</p>
  </div>
))}
</div>

    );
}
 
export default Home;
