import React from 'react';

const Profile = () => {
    return (
        <div
            style={{
                maxWidth: '550px',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: '18px 0px',
                    borderBottom: '1px solid gray',
                }}
            >
                <div>
                    <img
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '80px',
                        }}
                        src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
                    <h4>Ramesh Varma</h4>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '108%',
                        }}
                    >
                        <h6>40 Posts</h6>
                        <h6>40 Followers</h6>
                        <h6>40 Following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img
                    className="item"
                    src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className="item"
                    src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className="item"
                    src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className="item"
                    src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                <img
                    className="item"
                    src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
            </div>
        </div>
    );
};

export default Profile;
