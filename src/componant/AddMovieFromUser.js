import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function AddMovieFromUser() {
    const [formValue, setFormValue] = useState({
        Title: "",
        Description: "",
        posterURL: "",
        rating: "",
    })
    const [movies, setMovies] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.Title || !formValue.Description || !formValue.posterURL || !formValue.rating) {
            alert("Please fill all fields");
            return;
        }
        setMovies([...movies, formValue]);
        setFormValue({ Title: "", Description: "", posterURL: "", rating: "" });
    };
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: 'center', margin: "20px 20px 60px 60px",flexWrap:"wrap" }}>
                <form onSubmit={handleSubmit}>
                    <label style={{ color: '#ffba02', fontWeight: "600", }}>Enter Movie Title: </label>
                    <br></br>
                    <input value={formValue.Title}
                        onChange={(e) => { setFormValue({ ...formValue, Title: e.target.value }) }}
                        style={{ borderRadius: '8px', border: 'none', height: '20px', width: "300px", padding: '6px',marginBottom:"20px" }} 
                        placeholder='Movie title...'/>
                    <br></br>

                    <label style={{ color: '#ffba02', fontWeight: "600" }}>Enter an Image:</label>
                    <br></br>
                    <input value={formValue.posterURL}
                        onChange={(e) => { setFormValue({ ...formValue, posterURL: e.target.value }) }}
                        style={{ borderRadius: '8px', border: 'none', height: '20px', width: "300px", padding: '6px',marginBottom:"20px" }}
                        placeholder='Image link...' />
                    <br></br>

                    <label style={{ color: '#ffba02', fontWeight: "600" }}>Rate Movie per 5:</label>
                    <br></br>
                    <input value={formValue.rating}
                        onChange={(e) => { setFormValue({ ...formValue, rating: e.target.value }) }}
                        style={{ borderRadius: '8px', border: 'none', height: '20px', width: "40px", padding: '6px',marginBottom:"20px" }} />

                    <br></br>

                    <label style={{ color: '#ffba02', fontWeight: "600" }}>Enter a Description:</label>
                    <br></br>
                    <textarea value={formValue.Description}
                        onChange={(e) => { setFormValue({ ...formValue, Description: e.target.value }) }}
                        style={{ borderRadius: '8px', border: 'none', height: '100px', width: "300px", padding: '6px',marginBottom:"20px" }}
                        placeholder='The movie is about...' />
                    <br></br>

                    <Button type="submit" className='btn-watch' style={{borderRadius:'14px', height:'40px', width:'80px',border:'none',color:"#1a1a1a",fontWeight:'600',cursor:'pointer'}}>Submit</Button>
                </form>
                <div style={{ width: "50%",display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column'}}>
                <p style={{ color: '#ffba02',textTransform: 'uppercase',fontSize:"18px", fontWeight:"600px" }}>You can add some movies suggestions by filling those fields, we will review your suggestion and submit it in our library, We thank you for your time and feedbacks to keep improving our website</p>
                <img src="./images/movieIllust.jpg" alt='moviePhoto' style={{width:"400px",borderRadius:"18px"}} />
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                {movies.map((movie, index) => (
                    <Card key={index} style={{ width: '300px', backgroundColor: "#1a1a1a", borderRadius: "20px", margin: "10px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", padding: '20px' }}>
                        <Card.Img variant="top" src={movie.posterURL} style={{ width: "200px" }} />
                        <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                            <Card.Title style={{ color: 'white' }}>{movie.Title}</Card.Title>
                            <h2 style={{ color: '#ffba02' }}>Rating: {movie.rating}</h2>
                            <Card.Text style={{ textAlign: 'center', color: 'white', height: "60px" }}>{movie.Description}</Card.Text>
                            <h1 style={{color:'white',fontSize:'20px',fontWeight:"600"}}>Submitted with success!</h1>
                            <p style={{color:'white',fontSize:'15px',fontWeight:"400", marginTop:"-10px"}}>Your suggestion is under review</p>
                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}

export default AddMovieFromUser
