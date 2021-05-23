import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter, contactsSelectors } from "../../redux/contacts";


const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name :
      <br />
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value:contactsSelectors.getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e)=>dispatch(changeFilter(e.currentTarget.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
