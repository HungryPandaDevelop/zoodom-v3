const RenderTitle = ({ index, label, num, outsideValue, className }) => {
  if (outsideValue) { return (<h3 className={className}>{outsideValue}</h3>) }
  return (<h3 className={`${index === 1 ? 'first-topic className' : 'className'}`}><i className="num-offset">{num}</i>{label}</h3>)
};

export default RenderTitle;