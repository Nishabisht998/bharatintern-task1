
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Createpost = () => {
  const navigate = useNavigate();

  const [selFile, setSelFile] = useState('');

  const createNewPost = useFormik({
    initialValues: {
      title: '',
      summary: '',
      image:'',


    },
    onSubmit: async (values) => {
      values.image = selFile;
      console.log(values);
      const res = await fetch('http://localhost:4000/create/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }

      })
      console.log(res.status);
      if(res.status === 200){
        toast.success('post added successfully!')
        navigate('/');
       
      }else{
        toast.error("post unable to add")
      }


    },

  });

  const uploadFile = async (e) => {
    if(!e.target.files) return;
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:4000/util/uploadfile', {method : 'POST', body: fd});

    console.log(res.status)
    
    ;

  }


  return (
    <div className='my-5 '>
      <form onSubmit={createNewPost.handleSubmit}>
        <div className="col-md-6 mx-auto ">
          <input type="text" className='form-control mb-2' placeholder='title'  onChange={createNewPost.handleChange} value={createNewPost.values.title} name='title' />
          <input type="summary" className='form-control mb-2   ' placeholder='summary'onChange={createNewPost.handleChange} value={createNewPost.values.summary} name='summary'/>
          <input type="file" className='mb-3 ' onChange={uploadFile} />
          <button className="btn btn-secondary w-100 my-3" type='submit'  > create post</button>
        </div>



      </form>



    </div>
  )
}

export default Createpost