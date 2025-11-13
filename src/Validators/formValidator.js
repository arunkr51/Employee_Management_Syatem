export default function formValidator(e){
    let {name,value}=e.target

    switch(name){
        case "name":
            if(!value || value.length ===0){
                return name +"Field is mandatory"
            }else{
                return ""
            }

        case "email":
            if(!value || value.length===0){
                return name +"Field is mandatory" 
            }else{
                return ""
            }

        case "role":
            if(!value || value.length===0){
                return name +"Field is mandatory" 
            }else{
                return ""
            }

        default:
            return "" 
    }

}
























