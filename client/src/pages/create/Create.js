
import e from 'cors';
import { useState } from 'react';
import { useFetch } from '../../hook/useFetch'

// styles 
import './Create.css';

function Create() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [rareFind, setRareFind] = useState('');
  const [price, setPrice] = useState('');
  const [country, setCountry] = useState('');
  const [extrasInput, setExtrasInput] = useState('')
  const [extras, setExtras] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState('')

  const { data } = useFetch('http://localhost:3001/api')
  const { postData } = useFetch('http://localhost:3001/api', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( title) {
      setFormSubmitted(true);
      const newListing = {
        id: data.length,
        img,
        title, 
        bedrooms,
        description, 
        extras,      
        price: `$${price} Mio USD`, 
        country,
        rareFind
      }
      postData(newListing)
      console.log(newListing)
    }
    else {
      setFormSubmitted(false);
    }
    
  };

  const handleImage = (e) => {
    console.log(e.target.files[0])
    let uploadImg = e.target.files[0];
    setImg(
      new URL.createObjectURL(uploadImg))
      // `${process.env.PUBLIC_URL}/images/${uploadImg.name}`
  }

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = extrasInput.trim()
    
    if (key === ',' || key === 'Enter' || key === 'Tab'&& trimmedInput.length && !extras.includes(trimmedInput)) {
      e.preventDefault();
      setExtras(prevState => [...prevState, trimmedInput]);
      setExtrasInput('');
    }
  };

  const removeExtra = (e) => {
    e.preventDefault();
    console.log(e)
    const { textContent } = e.target.previousSibling
    const newExtras = extras.filter(item => {
      return item !== textContent
    });
    setExtras(newExtras);

    console.log(textContent)

  }

  return (
    <div className="create">
      <form>
        <h2>Add a new listing</h2>

        <label className="label-full">
          <span>Listing Title</span>
          <input 
            type="text" 
            placeholder='Enter a title'
            onChange={(e)=> setTitle(e.target.value)} 
            value={title} 
            required/>
        </label>

        <label className="label-full">
          <span>Upload an image</span>
          <input 
            type="file"
            id="image-file" 
            placeholder='Upload an image'
            onChange={handleImage} 
            accept=".jpg,.png"
            required
            />
        </label>

        <label className="label-full">
          <span>Short description</span>
          <textarea 
            type="text" 
            placeholder='Enter a short description'
            onChange={(e)=> setDescription(e.target.value)} 
            value={description} 
            required/>
        </label>

        <label className="label-full">
          <span>Extras</span>
          <input 
            type="text" 
            placeholder="Enter any extras"
            onChange={(e)=> setExtrasInput(e.target.value)} 
            onKeyDown={onKeyDown}
            value={extrasInput} 
            required/>
            <div className={`extras-output ${extras.length ? 'pills': ''}`}>
              {extras && extras.map((extra) => (
                <span key={extra} className="pill">{extra} 
                  <span className="delete" onClick={removeExtra}> x</span>
                </span>)
              )}
            </div>
        </label>

        <label className="label-half">
          <span>Number of Bedrooms</span>
          <input 
            type="number" 
            onChange={(e)=> setBedrooms(e.target.value)} 
            value={bedrooms} 
            required/>
        </label>

        <label className="label-half">
          <span>Rare Find</span>
          <select 
            value={rareFind}
            onChange={(e) => setRareFind(e.target.value)}
            placeholder="Rare find?"
            required>
            <option value="DEFAULT" disabled hidden>Is this a rare find?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>

        <label className="label-half">
          <span>Country</span>
          <input 
            list="countries" 
            name="country-choice" 
            id="country-choice" 
            required/>
          <datalist id="countries"
            onChange={(e) => setCountry(e.target.value)}
            value="Select a country">
            <option value="DEFAULT" disabled hidden>Choose a Counry</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Korea">Korea</option>
            <option value="Japan">Japan</option>
            <option value="Singapore">Singapore</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
          </datalist>
        </label>

        <label className="label-half">
          <span>Price</span>
          <input 
            type="number" 
            onChange={(e)=> setPrice(e.target.value)} 
            value={price}
            placeholder="in $ Mio USD"
            required/>
        </label>

        {!formSubmitted ? <p className='italic'>Please fill our the complete form</p>:''}
        <button className="btn btn-brown bold" onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  )
}

export default Create