export const firstLoadList = (searchParams) => {
  let tempParams = '';

  let fillObj = Object.fromEntries([...searchParams]);

  Object.keys(fillObj).map(item => {
    if (fillObj[item]) {
      tempParams = tempParams + '&' + item + '=' + fillObj[item];
    }
  });

  return tempParams;
}

export const inputLoadList = (searchParams, setSearchParams, setParamsUrlGenerate, value, id)=>{
  let tempParams = '';

  let fillObj = Object.fromEntries([...searchParams]);

  fillObj = { ...fillObj, [id]: value }
  Object.keys(fillObj).map(item => {
    if (fillObj[item]) {
      tempParams = tempParams + '&' + item + '=' + fillObj[item];
    }
  });

  setParamsUrlGenerate(tempParams);
  setSearchParams(tempParams);
}


export const checkUrl = (searchParams) => {
  let count = 0;
  let fillObj = Object.fromEntries([...searchParams]);
  Object.keys(fillObj).map(item => {
    if (fillObj[item]) {
      count++
    }
  });
  return count;
}