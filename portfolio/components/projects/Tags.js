import classes from "./Tags.module.scss";

export default function Tags(props) {
	const tag = props.tag;
    const color = props.color;

	return (
		<p style={{ backgroundColor: color }} className={classes.tag}>
			{tag}
		</p>
		// <div id="tagList" style={{backgroundColor: tag.color}}>
		//     <p>{tag.tagName}</p>
		// </div>
	);
}
