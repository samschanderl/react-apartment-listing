import React from 'react';

// styles
import './Modal.css'

export default function Modal(props) {
  return (
    <div className="modal-wrapper">
        <div className="modal-box">

            <form>
                <h2 className="flex-full">Request information about: </h2>
                <h3 className="italic flex-full">{props.title}</h3>
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

                <button className="btn btn-light">Submit</button>
            </form>
        </div>
    </div>
  )
}
