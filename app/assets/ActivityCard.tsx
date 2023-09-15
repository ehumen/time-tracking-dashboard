import classes from "./activity.module.css";

export default function ActivityCard({headerName, currentData, previousData}) {
    return (
        <div>
            <div className={`${classes.wallpaper} ${classes[headerName.toLowerCase()]}`}></div>
            <div className={classes.card}>
                <div className={classes.header}>{headerName}</div>
                <img className={classes.dots} src='/icon-ellipsis.svg' alt='dots'/>
                <div className={classes.currentData}>{currentData}hrs</div>
                <div className={classes.previousData}>Last week - {previousData}hrs</div>
            </div>
        </div>
    )
}