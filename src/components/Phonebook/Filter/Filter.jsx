import s from "./Filter.module.css";
import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

class Filter extends Component {

    static propTypes = {
        value: PropTypes.string.isRequired,
        onInputChange: PropTypes.func.isRequired,
    }
    
    render() {
        const {value, onInputChange} = this.props;
        return (
            <>
            <label className={s.label}>
                Filter:
                <input name="filter" value={value} onChange={onInputChange} className={s.input}></input>
            </label>
            </>
        )
    }
}

export default Filter;