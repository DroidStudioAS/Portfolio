import axios from "axios";

const networkHelper = {
    async sendMsg(msg,subject,name,sender){
        try{
            const form = new FormData();
            form.append('msg',msg);
            form.append('subject',subject);
            form.append('name',name);
            form.append('email',sender);
            const result = await axios.post('http://165g123.e2.mars-hosting.com/api/cv/postMessage',form);
            if (result.data === undefined || result.data === null){
            	console.log("resut.data doesn't exist when trying to fetch campaign results from backend.");
            	return;
            }
            const results = result.data.msg;
            console.log(results)
        }catch(exception){
            console.log(exception);
        }
    }
}
export default networkHelper;