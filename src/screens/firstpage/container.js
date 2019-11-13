import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '@store/actions/firstpage';
import Component from './firstPage';

const mapStateToProps = ({ firstPage }) => {
  return {
    data: firstPage.data,
    error: firstPage.error
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({ fetchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
