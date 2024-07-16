import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  allVideoApi,
  removeCategory,
  updateCategoryApi,
  addCategoryApi,
  getAllCategory,
} from "../services/allApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import VideoCard from "./VideoCard";

function Category({dragVideo,setDragVideo}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false)

  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  };
  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handleCategoryAdd = async () => {
    if (categoryName) {
      const reqBody = {
        categoryName,
        allVideos: [],
      };

      const result = await addCategoryApi(reqBody);
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        setCategoryName("");
        handleClose();
        alert("Category added successfully");
        setAddStatus(true);
      }
    } else {
      alert("Please add valid details");
    }
  };

  const getCategory = async () => {
    const result = await getAllCategory();
    setAllCategory(result.data);
  };

  const handleDelete = async (id) => {
    await removeCategory(id);
    setAddStatus(true);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, selectedCategory) => {
    console.log("category is:", selectedCategory);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    console.log(videoDetails);

    if (selectedCategory.allVideos.find((item) => item.id == videoDetails.id)) {
      alert("Video already exists in the category");
    } else {
      selectedCategory.allVideos.push(videoDetails);
      const result = await updateCategoryApi(
        selectedCategory.id,
        selectedCategory
      );
      setUpdateStatus(true)
      
    }
  };

  const onDrag = (e,videoId,categoryDetails)=>{
    console.log(videoId,categoryDetails);
    const dataShare={videoId,categoryDetails}
    e.dataTransfer.setData("datashare",JSON.stringify(dataShare))
  }

  console.log(allCategory);
  useEffect(() => {
    setAddStatus(false);
    setUpdateStatus(false)
    getCategory();
    setDragVideo(false)
  }, [addStatus,updateStatus,dragVideo]);
  return (
    <>
      <h5 className="mt-5 mt-md-0">CATEGORY</h5>

      <button className="btn btn-primary mt-4 w-100" onClick={handleShow}>
        Add Category
      </button>
      {allCategory?.length > 0 ? (
        allCategory?.map((item) => (
          <div
            className="p-3  rounded mt-4"
            style={{ border: "3px solid grey" }}
            droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, item)}
          >
            <div className="d-flex justify-content-between">
              <p className="mb-4">{item.categoryName}</p>
              <button
                className="btn btn-warning fs-5"
                onClick={() => handleDelete(item.id)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
            {item?.allVideos?.length>0?
            item?.allVideos?.map((video)=>(
            <div draggable onDragStart={(e)=>onDrag(e,video.id,item)}>
              <VideoCard video={video} isPresent={true}/>
            </div>
           
            ))  :null}

          </div>
        ))
      ) : (
        <p>No Category Added yet</p>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-3 border rounded">
            <input
              type="text"
              className="form-control"
              placeholder="Category Name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
