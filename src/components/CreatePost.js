import React from 'react';

function CreatePost() {
  return (
  <div>
      <h2>Please Create your post</h2>
      <form>
          <input
          type="text"
          placeholder='write your post'
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
