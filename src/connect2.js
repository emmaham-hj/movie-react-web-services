import { connect } from "react-redux";
import Header from "./components/Header";

function mapStateToProps(state) {
  const { isFiltered, movies } = state;
  return { isFiltered, movies };
}

export default connect(mapStateToProps)(Header);
