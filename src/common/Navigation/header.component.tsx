import * as React from 'react';
import Icon from '../Icon/icon.component';
import { SearchAlt } from "styled-icons/boxicons-regular";
import { CartAlt } from "styled-icons/boxicons-regular";
import createStyles from "@material-ui/styles/createStyles";
import makeStyles from "@material-ui/styles/makeStyles";

const useFormStyles = makeStyles((theme) =>
    createStyles({
        contactHeader: {
            display: "flex",
            justifyContent: "space-between",
            padding: "0 70px",
            height: "40px",
            color: "white",
            textAlign: "right",
        },
        mainContent: {
            padding: "5px 20px",
        },
        spanTag: {
            fontSize: "1rem",
            fontWeight: 500,
        },
        callSection: {
            padding: "0 50px"
        },
        searchSection: {
            padding: "0 15px",
        },
        cartSection: {
            padding: "0 15px"
        }
    })
)


interface Props {
    bgcolor: string;
}

const HeaderSection: React.FC<Props> = ({
    bgcolor
}) => {
    const classes = useFormStyles();

    return (
        <div className={classes.contactHeader} style={{ backgroundColor: bgcolor }}>
            <div className="container-fluid">
                <div className={classes.mainContent}>
                    <label className={classes.callSection}>
                        <span className={classes.spanTag}>Call 833.262.8899</span>
                    </label>
                    <label className={classes.searchSection} style={{ cursor: 'pointer' }}>
                        <span className={classes.spanTag}>Search</span>
                        <SearchAlt size={25} color="white" />
                    </label>
                    <label className={classes.cartSection}>
                        <span className={classes.spanTag}>Cart</span>
                        <CartAlt size={25} color="white" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;