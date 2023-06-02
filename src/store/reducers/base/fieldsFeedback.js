
export default function(){
  return {
    // order: ["name","phone","email","commets","agreement"],
    order: ["name","phone","email",],
    name: { 
      name: "name", 
      type:"text",
      label:"Имя", 
      wrapClass: "col-12 account-item input-animate-label",
      validate: ['required', 'minLength'],
    },
    phone: { 
      type:"phone" ,
      name: "phone", 
      label: "Телефон",
      wrapClass: "col-12 account-item input-animate-label",
      validate: ['required', 'minLength'],
    },
    email: { 
      name: "email", 
      label: "Почта", 
      type:"text", 
      wrapClass: "col-6 col-xs-12 form-line input-animate-label",
      validate: ['mailCheck'],
    },
    commets: { 
      type:"textarea", 
      name: "commets", 
      placeholder: "Комментарий", 
      maxLength: 500,
      wrapClass: "col-12 "
    },
    agreement: { 
      type:"checkbox", 
      name: "agreement",
      options: [
        { 
          label: 'Я даю свое согласие на обработку персональных данных', 
          value: 'agreement_on',
          checked: 1,
          disabled: 1
        },
      ],
      wrapClass: "col-12  form-line"
    },
  }
}