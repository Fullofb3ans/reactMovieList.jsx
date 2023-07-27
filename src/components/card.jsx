export function Card (props) {
  return <div id = {props.imdbID} className="row">
  <div className="movie">
    <div className="card">
      <div className="card-image">
        <img src={props.Poster}/>
        
      </div>
      <div className="card-content">
      <span className="card-title">{props.Title}</span>
        <p>{props.Type}</p>
      </div>
    </div>
  </div>
</div>
    }