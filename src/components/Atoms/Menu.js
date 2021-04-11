import React from "react";
import { useHistory } from "react-router";
import {
  settings,
  contacts,
  calls,
  bookmarks,
  invite,
  FAQ,
} from "../../assets/images";

function Menu(props) {
  const history = useHistory();
  return (
    <>
      <div className="d-none d-md-block menu">
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={settings}
              alt="Setting"
            />
            <p className="menu-list ms-4">Setting</p>
          </div>
          <div
            className="col-12 d-flex justify-content-start mt-2 ps-5 link"
            onClick={() => props.get()}
          >
            <img
              className="icon"
              width="22px"
              height="22px"
              src={contacts}
              alt="Setting"
            />
            <p className="menu-list ms-4">Contact</p>
          </div>
          <div
            className="col-12 d-flex justify-content-start mt-2 ps-5 link"
            onClick={() => history.push("/chat/call-history")}
          >
            <img
              className="icon"
              width="22px"
              height="22px"
              src={calls}
              alt="Setting"
            />
            <p className="menu-list ms-4">Calls</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={bookmarks}
              alt="Setting"
            />
            <p className="menu-list ms-4">Save Messages</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={invite}
              alt="Setting"
            />
            <p className="menu-list ms-4">Invite Friends</p>
          </div>
          <div className="col-12 d-flex justify-content-start mt-2 ps-5 link">
            <img
              className="icon"
              width="22px"
              height="22px"
              src={FAQ}
              alt="Setting"
            />
            <p className="menu-list ms-4">Chatime FAQ</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
