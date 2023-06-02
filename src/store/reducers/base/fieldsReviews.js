
export default function(){
  return {
    order: [
      "grade",
      "titleOne",
      "dignity",
      "limitations",
      "reviews",
      "statusName",
      "fio",
      "category"
      // "activeCards"
    ],
    grade: { 
      name: "grade", 
      label: "Ваша оценка", 
      type:"star",
      wrapClass: "form-line col-12",
    },
    dignity: { 
      name: "dignity", 
      label: "Достоинства", 
      type:"textarea",
      wrapClass: "form-line col-12 input-animate-label",
      validate: ['required', 'minLength'],
    },
    limitations: { 
      name: "limitations", 
      label: "Недостатки", 
      type:"textarea",
      wrapClass: "form-line col-12 input-animate-label",

    },
    reviews: { 
      name: "reviews", 
      label: "Дополнительные комментарии", 
      type:"textarea",
      wrapClass: "form-line col-12 input-animate-label",
    },
    statusName: { 
      name: "statusName", 
      type:"hidden",
      wrapClass: "form-line col-12",
    },
    fio: { 
      name: "fio", 
      type:"hidden",
      wrapClass: "form-line col-12",
    },
    category: { 
      name: "category", 
      type:"hidden",
      wrapClass: "form-line col-12",
    },

    titleOne: {
      type:"title",
      label:"Поделитесь впечатлениями о породе",
      wrapClass: "col-12 account-item", 
    },


  }
}