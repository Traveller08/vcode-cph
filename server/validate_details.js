const validate_details=(data)=>{
    if(data.username=='' || data.username==' '){
        return false;
    }
    if(data.fname=='' || data.fname==' '){
        return false;
    }
    if(data.cfhandle=='' ||  data.cfhandle==' '){
        return false;
    }
    if(data.cchandle=='' || data.cchandle==' '){
        return false;
    }
    return true;
}

export {validate_details}