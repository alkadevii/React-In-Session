import "../styles/ProfileCard.css"

function ProfileCard(){
    return(
        <div className="card" >
            <img src="" alt="MY image" style={{width:"100px",height:"100px",
            borderRadius:"50%"}} />
            <h3>Alka Devi</h3>
            <p className="description">My Profile Card</p>
        </div>
    );
}

export default ProfileCard;