import React from 'react';

const CreatePost = () => {
    return (
        <div
            className="card input-field"
            style={{
                margin: '30px auto',
                maxWidth: '550px',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <h2 className="center">Create Post</h2>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Body" />
            <div class="file-field input-field">
                <div class="btn">
                    <span>Upload Image</span>
                    <input type="file" />
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light blue darken-2 center">
                Submit Post
            </button>
        </div>
    );
};

export default CreatePost;
