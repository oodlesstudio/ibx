import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import required modules
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

// template
import userdata from "./tempData.json";

// Images
import ViewIcon from "./../../images/common/view.svg";
import DeleteIcon from "./../../images/common/delete.svg";
import RupeeImage1 from "./../../images/common/rupee1.jpg";
import RupeeImage2 from "./../../images/common/rupee2.jpg";
import RupeeImage3 from "./../../images/common/rupee3.jpg";

// Modals

const ImageSliderWindow = () => {
  // Modals
  const [attachment, setAttachment] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);

  // Images User Data
  const [users, setUsers] = useState(userdata.data);

  //   Date Calendar

  // Tooltip
  const renderViewTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      View
    </Tooltip>
  );
  const renderDeleteTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Delete
    </Tooltip>
  );
  const renderDragTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Drag to Re-Arrange
    </Tooltip>
  );

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setUsers(tempData);
  };

  return (
    <div className="configLeft unmatchedContainer">
      {/* Breadcrumb Box */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Image Slider
        </h5>

        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Master</p>
          </Link>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <Link to="/">
            <p className="fontSize12">Image Slider</p>
          </Link>
        </div>
      </div>
      {/* main Box */}
      <div className="tableBorderBox">
        <div className="addImageHeader ">
          <h4>Added Slides (4)</h4>
          <button
            className="addSlideBtn"
            onClick={() => setAttachment(!attachment)}
          >
            Add Slides
          </button>
        </div>
        {/* Table */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="table-responsive tableContentBox imageSliderTable">
            <table className="table tab-table table-striped table-hover table-borderless align-middle mb-0">
              <thead className="table-head">
                <tr>
                  <th scope="col p-0">{/* empty */}</th>
                  <th scope="col">File Name</th>
                  <th scope="col">File Size</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <Droppable droppableId="droppable-1" type="PERSON">
                {(provided) => (
                  <tbody ref={provided.innerRef} {...provided.droppableProps}>
                    {users?.map((user, index) => (
                      <Draggable
                        key={user.id}
                        draggableId={user.id}
                        index={index}
                      >
                        {(provided) => (
                          <tr
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <td className="p-0">
                              <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderDragTooltip}
                              >
                                <span
                                  className="icon-drag"
                                  {...provided.dragHandleProps}
                                ></span>
                              </OverlayTrigger>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.size}</td>
                            <td>
                              <div>
                                <OverlayTrigger
                                  placement="top"
                                  delay={{ show: 250, hide: 400 }}
                                  overlay={renderViewTooltip}
                                >
                                  <button
                                    className="act-view-Btn"
                                    onClick={() =>
                                      setImagePreview(!imagePreview)
                                    }
                                  >
                                    <img src={ViewIcon} alt="view Icon" />
                                  </button>
                                </OverlayTrigger>

                                <OverlayTrigger
                                  placement="top"
                                  delay={{ show: 250, hide: 400 }}
                                  overlay={renderDeleteTooltip}
                                >
                                  <button className="act-delete-Btn">
                                    <img src={DeleteIcon} alt="delete Icon" />
                                  </button>
                                </OverlayTrigger>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </table>
          </div>
        </DragDropContext>
        {/* main carousal */}
        <div className="main-carousel">
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={RupeeImage1} alt="demo img 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RupeeImage2} alt="demo img 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RupeeImage3} alt="demo img 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={RupeeImage1} alt="demo img 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* upload modal */}

      {/* attachment Request */}
      {attachment && (
        <Modal
          show={attachment}
          onHide={() => setAttachment(!attachment)}
          centered
          className="defaultThemeModal centeredModal unmatchedTableModal mobile-defaultThemeModal upload-slide-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="fontSize16-sm letterSpacing-2">
              Upload Slides
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="uploadSlideBox">
              <p className="dropfileText">Drop your file here</p>
              <span className="dropfileText">or</span>
              <label htmlFor="attachmentInput">
                <p className="dropfileText2">Browse File</p>
              </label>
              <input type="file" id="attachmentInput" className="d-none" />
            </div>
            <div className="uploaded-data">
              <h4>Selected Files</h4>
              <ul className="uploaded-data-list">
                <li>
                  <p>Slide-1.jpeg</p>
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4L12 12"
                        stroke="#505963"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12 4L4 12"
                        stroke="#505963"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <p>Slide-2.jpeg</p>
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4L12 12"
                        stroke="#505963"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12 4L4 12"
                        stroke="#505963"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
              <div className="submitSlide">
                <button
                  className="sumbitSlideBtn"
                  onClick={() => setAttachment(!attachment)}
                >
                  Submit
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {/* Image Preview*/}

      {imagePreview && (
        <Modal
          show={imagePreview}
          onHide={() => setImagePreview(!imagePreview)}
          centered
          className="defaultThemeModal centeredModal unmatchedTableModal mobile-defaultThemeModal image-preview-modal"
        >
          <Modal.Body className="image-preview-body">
            {/* close btn */}
            <button
              className="btn-close imagepreview-closeBtn"
              onClick={() => setImagePreview(!imagePreview)}
            ></button>
            <img src={RupeeImage1} className="image-preview" />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default ImageSliderWindow;
