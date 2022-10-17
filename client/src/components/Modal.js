import React from 'react';

// styles
import './Modal.css'

export default function Modal({ title, closeModal}) {
  return (
    <div className="modal-wrapper">
        <div className="modal-box">

            <form>
                <a className="closeModalBtn" onClick={closeModal}>x</a>
                <h3 className="flex-full">Request information about: </h3>
                <h2 className="italic flex-full">{title}</h2>
                <label className="flex-half">
                    Your Name:
                    <input
                    type="text"
                    placeholder="Your Full Name"
                    ></input>
                </label>

                <label className="flex-half">
                    Your Email:
                    <input
                    type="email"
                    placeholder="Your Email"></input>
                </label>

                <label className="flex-full">
                    Your Question:
                    <textarea
                    type="textarea"
                    placeholder="What would you like to know?"
                    ></textarea>
                </label>

                <button className="btn btn-light" onClick={closeModal}>Submit</button>
            </form>
        </div>
    </div>
  )
}
