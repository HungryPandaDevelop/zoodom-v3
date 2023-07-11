
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
      type:"text",
      wrapClass: "form-line col-12 input-animate-label",
      validate: ['required', 'minLength'],
      numBool: true
    },
    limitations: { 
      name: "limitations", 
      label: "Недостатки", 
      type:"text",
      wrapClass: "form-line col-12 input-animate-label",
      numBool: true

    },
    reviews: { 
      name: "reviews", 
      label: "Дополнительные комментарии", 
      type:"text",
      wrapClass: "form-line col-12 input-animate-label",
      numBool: true
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