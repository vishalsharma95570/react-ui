import React from "react";

import { Get, Post } from "../../service/service.setup";
//import "./user-data.style.scss";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Share } from "../../assets/share.svg";
const ContactList = ({ profileList, isShare, selected, hide, images }) => {
  //http://localhost:9082/shareFile
  console.log(images);
  async function shareWith(id) {
    if (!window.confirm("Are You sure you want to Share Folder ?")) return;

    try {
      const folderIds = [];
      const imagesIds = [];
      let imagesRequest = {};
      for (let key in selected) {
        if (selected[key]) folderIds.push(key);
      }
      if (images && images.id) {
        images.updateImages.forEach((item) => imagesIds.push(item.id));
        imagesRequest = {
          imageIds: imagesIds,
          user_id: id,
          file_id: images.id,
          active: true,
        };
      }
      console.log(imagesIds);
      const request = { imageIds: folderIds, user_id: id, active: true };

      const requestData = images && images.id ? imagesRequest : request;
      const URL = images && images.id ? "sharePage" : "shareFile";
      const contacts = await Post(`/${URL}`, requestData);
      if (contacts.data.code == "200") {
        alert(contacts.data.message);
      }
      hide(false);
    } catch (error) {}
  }
  async function removeContact(id) {
    if (!window.confirm("Are You sure you want to remove ?")) return;

    try {
      const contacts = await Post(`/removeContact`, { id });
      if (contacts.data.code == "200") {
        alert(contacts.data.message);
      }
      window.location.reload();
    } catch (error) {}
  }
  return (
    <div className="row">
      <div className="col">
        <h5>Your Contact List</h5>
        <ul className="list-group">
          {profileList.map((item, index) => (
            <li className="list-group-item li-contact-list" key={index}>
              <span> {item.fullname}</span>
              <span style={{ paddingLeft: "50px" }}>
                {isShare && <Share onClick={() => shareWith(item.id)}></Share>}
              </span>
              <span style={{ paddingLeft: "50px" }}>
                {!isShare && (
                  <Close onClick={() => removeContact(item.id)}></Close>
                )}
              </span>
            </li>
          ))}
          {profileList.length == 0 && (
            <li class="list-group-item">There is no Contact request</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
