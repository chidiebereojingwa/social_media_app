import React from 'react';

function CreatePost() {
    const [content, setContent] = React.useEffect("")
    const [image, setImage] = React.useEffect(null)
  return (
  <div>
      <h2>Please Create your post</h2>
      <form>
          <input
          type="text"
          placeholder='write your post'
          onChange={(e)=> setContent(e.target.value)}
          />
          <input 
          type="file"
          />
          <button type='submit'>Submit</button>
      </form>
  </div>
  );
}

export default CreatePost;
