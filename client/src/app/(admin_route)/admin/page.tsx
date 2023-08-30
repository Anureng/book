'use client'
import TableComponent from '@/components/TableComponent'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const [price, setPrice] = useState()
    const [genre, setGenre] = useState()
    const [type, setType] = useState()
    const [author, setAuthor] = useState()


    const handleFile = (e:any) => setFile(e.target.files[0])

    const handleSubmit = (e) =>{
        // setLoading(true)
        e.preventDefault()
        const data = new FormData();
        data.append("name",name);
        data.append("description",description);
        data.append("photo", file);
        data.append("price",price);
        data.append("genre",genre);
        data.append("type",type)
        data.append("author",author)

        axios.post("http://localhost:8080/api/books",data)
        .then((response) => {
          // Handle the response if needed
          console.log(response.data);
        //   setLoading(false)
        //   notifySuccess();
        })
        .catch((error) => {
          // Handle any errors that occurred during the POST request
          console.error('Error:', error);
        //   setLoading(false)
        //   notifyError();
        //   window.location.reload()
        });
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter description' />
            <input type="file"  onChange={handleFile} />
            <input type="Number" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Price' />
            <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)} placeholder='Enter Genre' />
            <input type="text" value={type} onChange={(e)=>setType(e.target.value)} placeholder='Enter Type' />
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder='Enter Author' />
       <button type='submit'>Click</button>
        </form>
        {/* <TableComponent/> */}
    </div>
  )
}

export default page