import react from 'react'

const dummyData = {
    date: "2021-12-23",
    explanation: "Are you loving this picture?!",
    hdurl: "https://apod.nasa.gov/apod/image/2112/20211221Tezel.jpg",
    title: "Three Planets and a Comet"
}

const NasaPhoto = (props) => {
    return (
        <div className="nass-photo">
            <h3>{props.photo.tite}</h3>
            <p>{props.photo.date}</p>
            <img> src={props.photo.hdurl}</img>
            <p className={explanation}>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto