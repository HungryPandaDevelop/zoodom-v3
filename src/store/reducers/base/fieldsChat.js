
export default function(){
  return {
    order: ["message",],
    message: { 
      name: "message", 
      placeholder: "Напишите сообщение... ", 
      type:"textarea",
      wrapClass: "col-11",
    },
    // message: { name: "message", label: "Сообщение", placeholder: "Напишите сообщение... ", type:"textarea",validate: [required,minLength]  },
  }
}