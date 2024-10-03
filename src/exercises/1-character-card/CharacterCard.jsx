import { character } from "./characterData";
import "./styles.css"
const CharacterCard = () => {
	return (
		<div id="card" style={{display: "flex", flexDirection: "column"}}>
			<div style={{backgroundColor: "blue"}}>
				<p><b>{character.name}</b></p>
			</div>
			<div>

			</div>
			<div>
				<ul>
					{character.items.map((x) => <li key={x.item}>{x.item} x{x.quantity}</li>)}
				</ul>
				<ul>
					{character.abilities.map((x) => <li key={x}>{x}</li>)}
				</ul>
			</div>
		</div>
	);
}

export default CharacterCard;
