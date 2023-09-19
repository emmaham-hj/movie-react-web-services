import { connect } from "react-redux";
import Home from "./routes/Home";
import Header from "./components/Header";
function mapStateToProps(state) {
  const { isFiltered, movies } = state;
  return {
    isFiltered,
    movies,
  };
}

export default connect(mapStateToProps)(Home);
