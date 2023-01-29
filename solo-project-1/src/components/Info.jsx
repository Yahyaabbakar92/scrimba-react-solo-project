export default function Info() {
  return (
    <div className="card-info">
      <img src="./src/assets/card-image.png" alt="" />
      <h1 className="card-name">Laura Smith</h1>
      <h3 className="card-occupation">Frontend Developer</h3>
      <h4 className="card-website">laurasmith.website</h4>
      <div className="buttons">
        <button className="email-btn">Email</button>
        <button className="linkedin-btn">LinkedIn</button>
      </div>
    </div>
  );
}
