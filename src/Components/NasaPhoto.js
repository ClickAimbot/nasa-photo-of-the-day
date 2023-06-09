import react from 'react'



const NasaPhoto = (props) => {
    return (
        <div className="nass-photo">
            <h3>{props.photo.tite}</h3>
            <p>{props.photo.date}</p>
            <img> src={props.photo.date}</img>
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhotow