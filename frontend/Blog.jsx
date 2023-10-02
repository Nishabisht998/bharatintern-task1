import React, { useEffect, useState } from 'react'

const Blog = () => {

    const [post, setpost] = useState([]);

    const fetchPostData = async () => {
        const res = await fetch('http://localhost:4000/create/getall');
        console.log(res.status);

        const data = await res.json();
        console.log(data);

        setpost(data);

    };

    useEffect(() => {
        fetchPostData();

    }, []);

    const displayPostData = () => {
        return post.map((post) => (
           
                <div className="col-md-4" >
                <div className="my-img">
               

                    <img className='img-fluid '  src={'http://localhost:4000/' + post.image} alt="" srcset="" />
               

                      <div  style={{maxHeight:300}}>

                         <h5 className='text-blog' >{post.title}</h5>
               <p style={{ fontSize: 12 ,padding: 4}}>
                              {post.summary}
                              
                          </p>
                      </div>
                           
                  </div>
                     
                </div>





    

        ))
    }


    return (
        <div>
            <main>

            </main>
            <div className="container">
            <div className="row">
                {displayPostData()}
                
            </div>

            
            </div>

        </div>
    )
}

export default Blog