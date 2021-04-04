import React from "react";
import photo from "../../assets/images/Rectangle 8-1.png";
import image from "../../assets/images/cars.png";

function MessageLeft(props) {
  return (
    <>
      {props.message.images === null && (
        <div className="d-flex justify-content-start align-items-end mx-3 mt-3">
          <img
            className="d-none d-lg-block"
            width="45px"
            height="45px"
            src={props.message.photo || photo}
            alt="profile"
          />
          <p className="d-block d-lg-none text-blue ms-4 pb-3">
            {props.message.time}
          </p>
          <div className="mx-3 message-block-left">
            <p className="px-3 py-3">{props.message.text}</p>
          </div>
          <p className="d-none d-lg-block text-blue ms-4 pb-3">
            {props.message.time}
          </p>
        </div>
      )}

      {props.message.images && (
        <>
          <div className="d-flex justify-content-start align-items-end mx-3 mt-3 mb-2">
            <img
              className="d-none d-lg-block invisible"
              width="45px"
              height="45px"
              src={props.message.photo || photo}
              alt="sender"
            />
            <p className="d-block d-lg-none text-blue ms-4 pb-3">
              {props.message.time}
            </p>
            <div className="mx-3 message-block-left">
              <img src={image} alt="car" />
            </div>
            <p className="d-none d-lg-block text-blue ms-4 pb-3">
              {props.message.time}
            </p>
          </div>
          {props.message.text && (
            <div className="d-flex justify-content-start align-items-end mx-3 mt-3 mb-2">
              <img
                className="d-none d-lg-block"
                width="45px"
                height="45px"
                src={props.message.photo || photo}
                alt="sender"
              />
              <p className="d-block d-lg-none text-blue ms-4 pb-3">
                {props.message.time}
              </p>
              <div className="mx-3 message-block-left">
                <p className="px-3 py-3">{props.message.text}</p>
              </div>
              <p className="d-none d-lg-block text-blue ms-4 pb-3">
                {props.message.time}
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default MessageLeft;