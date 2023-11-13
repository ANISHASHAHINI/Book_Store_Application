import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
const Editbooks = () => {
  const {id} = useParams();
  const {book_title,authorname,imageurl,book_description,book_pdf_url} = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mistory",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memories",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) =>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }
  //Handle Book submission
  const handleUpdate = (event) =>{
    event.preventDefault();
    const form = event.target;

    const book_title = form.book_title.value;
    const authorname = form.authorname.value;
    const imageurl = form.imageurl.value;
    const category = form.categoryName.value;
    const book_description= form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;
    const updatBookObj = {
      book_title,authorname,imageurl,category,book_description,book_pdf_url
    }
    //console.log(bookObj);
    //update book data
    fetch(`https://bookstoreappserver.onrender.com/books/${id}`,{
      method:'PATCH',
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(updatBookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data);
      alert("Book Updated successfully");
    })
  }
  return (
    <div className=' px-4 my-12'>
      <h2 className=' mb-8 text-3xl font-bold'>Update the Book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="book_title" value="Book Title" />
        </div>
          <TextInput id="book_title" type="text"  placeholder="Book name" required defaultValue={book_title} />
        </div>
        {/* author name */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
             <Label htmlFor="authorname" value="Author Name" />
          </div>
          <TextInput id="authorname" type="text" placeholder="Author Name" required defaultValue={authorname} />
        </div>  
      </div>
      {/* second row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="imageurl" value="Book Image URL" />
        </div>
          <TextInput id="imageurl" type="text"  placeholder="Book Image URL" required defaultValue={imageurl}/>
        </div>
        {/* Catagory*/}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
        </div>

        <select name="categoryName" id="inputState" className=' w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
        </select>
        </div>  
      </div>
      {/* book description */}
      <div>
        <div className="mb-2 block">
            <Label htmlFor="book_description" value="Book Description" />
        </div>
          <Textarea id="book_description" name="book_description" placeholder="Write Your Book Description..." required className=' w-full' rows={5} defaultValue={book_description} />
      </div>
      {/* Book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="book_pdf_url" value="Book PDF URL" />
        </div>
        <TextInput id="book_pdf_url" name="book_pdf_url"type="text" placeholder="Book PDF URL" required defaultValue={book_pdf_url} />
      </div>
      <Button type="submit" className=' mt-5'>Update Book</Button>
    </form>
    </div>
  )
}

export default Editbooks