import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const TempateInputText = ({ input, values }) => {

  useEffect(() => {
    input.onChange(values);
  }, [input])
  return (
    <>
      <input
        {...input}
        value={values}
        type="hidden"
      />

    </>
  );
}


const RenderInputHidden = ({ name, hiddenValue }) => {






  return <Field
    name={name}
    values={hiddenValue[name]}
    component={TempateInputText}
  />;
}

const mapStateToProps = (state) => {


  return {
    hiddenValue: state.inputConnectState.hiddenValue,
  }
}


export default connect(mapStateToProps)(RenderInputHidden);