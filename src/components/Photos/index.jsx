import React, { useEffect, useState } from "react";
import "./style.scss";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

function Photos() {
  const initialState = {
    data: [],
  }
  const [state, setState] = useState(initialState)

  useEffect(() => {
    fetch('https://62e7898a93938a545bd3a5e4.mockapi.io/photos')
      .then(response => response.json())
      .then(photos => setState({ ...state, data: photos }))
  }, [])
  return (
    <>
      <span className="main-word">PHOTOS</span>
      {state.data.map((el, index, arr) => {
        return (
          <div className="main-content-item">
            <EditIcon className="edit-button"></EditIcon>
            <CloseIcon className="close-button"></CloseIcon>
            <img src={el.avatar} />
            <span>{el.name}</span>
          </div>
        )
      })
      }
    </>
  )

}

export default Photos;

/// exam

// {
//   "createdAt": "2022-08-01T21:20:23.008Z",
//   "name": "Luke Klein",
//   "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/426.jpg",
//   "id": "12"
// },
