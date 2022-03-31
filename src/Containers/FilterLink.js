import { connect } from "react-redux";
import { setVisibilityFilter } from "../Redux/actions";
import { Link } from "../Components/Link";

const mapStateToProps = (state, ownProps) => {
    //console.log(state, ownProps)
    return {
        active: ownProps.filter === state.visibleFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink;
