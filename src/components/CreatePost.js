import React from 'react';

function CreatePost({user}) {
    const [content, setContent] = React.useState("")
    const [image, setImage] = React.useState(null)

    const handleSubmit = () => {
        const post = {content,image, user}
    }
  return (
  <div>
      <h2>Please Create your post</h2>
      <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder='write your post'
          onChange={(e)=> setContent(e.target.value)}
          />
          <input 
          type="file"
          onChange={(e)=> setImage(e.target.files[0])}
          />
          <button type='submit'>Submit Post</button>
      </form>
      <p>{content}</p>
      {image && <img
      style={{ height:200, width: 200, objectFit: "cover"}}
      src={URL.createObjectURL(image)}
      alt='post img'
      />}
      <p>Posted by : {user}</p>
  </div>
  );
}

export default CreatePost;
