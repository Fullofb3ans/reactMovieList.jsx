export function Card (props) {
  let blank = 'https://placehold.co/600x400';
  return <div id = {props.imdbID} className="row">
  <div className="movie">
    <div className="card">
      <div className="card-image">
        {
          props.Poster !== 'N/A'? <img src={props.Poster}/> : <img src={blank}/>
        }
      </div>
      <div className="card-content">
      <span className="card-title">{props.Title}</span>
        <p>{props.Type}</p>
      </div>
    </div>
  </div>
</div>
    }