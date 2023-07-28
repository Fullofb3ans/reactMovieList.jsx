import {Card} from "./card";

 function Cards(props) {
    return <div className="movies">
        {props.cards.map((card) => (
                <Card key = {card.imdbID} {...card}/>
               ))}
    </div>
}

export {Cards}

