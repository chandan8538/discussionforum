import React, { useState } from "react";
import { Button, Col, Container, form, Row } from "react-bootstrap";
//import { shallowEqual, useDispatch, useSelector } from "react-redux";
//import { Button, Col, Container, form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
//import { newPost } from "../../redux/actionCreators/postsActionCreator";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !description) {
      return toast.warning("Please fill in all fields!");
    }

    if (description.length < 100) {
      return toast.info("Description should be of atleast 100");
    }
    if (title.trim().split(" ").length < 2) {
      return toast.info("Title should be of atleast 2 words");
    }

    // const data = { title, description, category };
    // dispatch(postUpdate(currentPost.postId, data));
    // toast.success("Post Updated Successfully!!");
  };

return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5">
          <h1 className="display-2 text-center">Edit Post</h1>
        </div>
        {/* {currentPost ? ( */}
          <div className="col-md-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="category"
                  placeholder="Categories [followed with commas for multiple]"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Enter Description"
                  className="form-control"
                  rows="8"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="input-group">
                <input
                  type="submit"
                  className="btn btn-dark w-50 mr-auto"
                  value="Update Post"
                />
                <button
                  type="button"
                  className="btn btn-danger w-50  ml-3"
                  //onClick={() => history.push("/")}
                >
                  Go Back
                </button>
              </div>
            </form>
          </div>
        {/* ) : (
          <div className="col-md-12">
            {postsLoading ? (
              <h1 className="text-center">Post Loading...</h1>
            ) : (
              <h1 className="text-center">
                Error 404 : Post With Id {id} Not Exists
              </h1>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default EditPost;






















