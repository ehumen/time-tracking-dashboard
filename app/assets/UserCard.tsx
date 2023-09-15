import classes from "./user.module.css";
import {useRef} from "react";

export default function UserCard({name, photo, handle}): JSX.Element {
    const day = useRef(null);
    const week = useRef(null);
    const month = useRef(null);

    const handlePeriod = (elem) => {
        switch (elem.target.innerText) {
            case 'Daily': {
                day.current.style = 'color: #fff';
                week.current.style = 'color: hsl(235, 45%, 61%)';
                month.current.style = 'color: hsl(235, 45%, 61%)';
            }
                break
            case 'Weekly': {
                day.current.style = 'color: hsl(235, 45%, 61%)';
                week.current.style = 'color: #fff';
                month.current.style = 'color: hsl(235, 45%, 61%)';
            }
                break
            case 'Monthly': {
                day.current.style = 'color: hsl(235, 45%, 61%)';
                week.current.style = 'color: hsl(235, 45%, 61%)';
                month.current.style = 'color: #fff';
            }
                break
        }
        handle(elem.target.innerText);
    }

    return (
        <div className={classes.userCard}>
            <div className={classes.user}>
                <img className={classes.userPhoto} src={photo} alt="avatar"/>
                <div>
                    <p>Report for</p>
                    <p className={classes.nameField}>{name}</p>
                </div>
            </div>
            <div className={classes.period}>
                <span className={classes.daily}
                      ref={day}
                      onClick={el => handlePeriod(el)}
                >Daily</span>
                <span className={classes.weekly}
                      ref={week}
                      onClick={el => handlePeriod(el)}
                >Weekly</span>
                <span className={classes.monthly}
                      ref={month}
                      onClick={el => handlePeriod(el)}
                >Monthly</span>
            </div>
        </div>
    )
}