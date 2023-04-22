export function send(tag){
    let email = tag.value
  
    if (email.includes("@")){
      alert("Email enviado! Em breve você receberá novidades da Time In!")
    } else {
      alert("Email inválido!")
    }
    tag.value = ""
}