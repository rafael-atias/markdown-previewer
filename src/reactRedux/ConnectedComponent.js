import { connect } from "react-redux";
import Presentational from "./Presentational";
import { mapStateToProps, mapDispatchToProps } from "./reduxHelpers";

/**
 * The React component connected to the Redux store
 * 
 * @constant
 */
export const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);