import {LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LwcFileUpload extends LightningElement {
  
@api
  myRecordId;
get acceptedFileItem() {
     return['.pdf', '.png', '.pdf'];
   }
 
uploadFiledAction(event) {
//get the list of Uploaded files
    const uploadFiles = event.detail.files;
// alert("No.of Files Uploaded:")+ uploadedFiles.length);
const toastEvent = new showToastEvent({
      title:'File Uploaded Successfully!',
      message:'No. of Files Uploaded '+ uploadedFiles.length,
      variant:'Success',
})
    this.dispatchEvent(toastEvent);
  }
}
