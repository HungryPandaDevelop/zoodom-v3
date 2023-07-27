import { connect } from 'react-redux';

import { FieldArray } from 'redux-form';

import RenderInputSelectSearchUploadList from './RenderInputBreedsChoise/RenderInputSelectSearchUploadList';



const TemplateInputComplex = ({ allFields, fields, btnAddText }) => {

  const choiseFields = (name) => {

    return allFields.map((item, index) => {
      return (
        <RenderInputSelectSearchUploadList
          key={index}
          name={`${name}.breed`}
          nameMain={`${name}`}
          num={item.num}
          label={'Порода животного'}
        />
      )
    })
  };

  return (
    <>
      {fields.map((item, index) => (
        <div className="comlex-inner-item" key={index}>
          {choiseFields(item)}
          <div
            onClick={() => fields.remove(index)}
            className="complex-delete-field ico-in"
          >
          </div>
        </div>
      ))}
      <div className="btn-container-breeds-search">
        <div className='btn btn--blue-border ico-in ico-in--left btn-add' onClick={() => { fields.push(); }}>
          <i></i><span>{btnAddText}</span>
        </div>
      </div>
    </>
  )
}

const RenderInputComplex = ({
  name,
  allFields,
  label,
  btnAddText,
  num,
  wrapClass,
  inputValueConnect,
  hideByClickId,
  className

}) => {

  if (hideByClickId && !inputValueConnect) { return false }
  else if (hideByClickId && inputValueConnect.indexOf(hideByClickId) !== 0) { return false }

  return (
    <div className={className}>
      {label && (<label><b>{num}. {label}</b></label>)}
      <FieldArray
        allFields={allFields}
        name={name}
        component={TemplateInputComplex}
        btnAddText={btnAddText}
        num={num}
        wrapClass={wrapClass}
      />
    </div>
  )
}



const mapStateToProps = (state) => {

  return {
    inputValueConnect: state.inputConnectState.inputValueConnect,
  }
}
export default connect(mapStateToProps)(RenderInputComplex);