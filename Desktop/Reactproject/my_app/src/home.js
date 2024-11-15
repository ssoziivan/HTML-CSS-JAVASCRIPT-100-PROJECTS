import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
    // let name = 'Martin';
    const [name, setName] = useState('Mario');
    const [Age, setAge] = useState(25);
    const [blogs,setBlogs]  = useState([
        {title:'My new Website',body:'Lorem ipsum...',author:'mario',id:1},
        {title:'Website Party!',body:'Lorem ipsum...',author:'yoshi',id:2},
        {title:'Web dev top tips',body:'Lorem ipsum...',author:'mario',id:3}



    ])
    const handleClick = () => {
        // console.log("Hello World");
        setName('Ivan');
        setAge(45);
    }
    const handleClickAgain = (e,name) => {
        console.log('hello' + name,e.target);
    }
    const Update = () => {
        console.log(name)
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=> blog.id !== id );
        setBlogs(newBlogs)

    }
     
    
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>{name} is {Age} years old</p>
            <button onClick={(e) => {
                handleClickAgain(e,'Ssozi')
            }}>Click me Again</button>
            <button onClick={() => {
                Update(name)
            }}>Update me</button>
            {/* {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}
            <BlogList blogs={blogs} title="All Blogs!" handleDelete ={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=> blog.author ==='mario')} title="Mario's Blogs" handleDelete={handleDelete}/>

        </div>
    );
}
 
export default Home;