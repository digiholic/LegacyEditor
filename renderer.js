// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { dialog } = require('electron').remote;
const fs = require('fs');

const buttonEl = document.getElementById('btn-createfile');
buttonEl.addEventListener('click', async () => {
  const dialogOptions = {};
  try {
    const result = await dialog.showSaveDialog(dialogOptions);
    console.log('Save resolved: '+ result);
    const { filePath } = result;
    console.log('filePath --> '+ filePath);

    let content = "Some text to save into the file";
    // fileName is a string that contains the path and filename created in the save file dialog.  
    fs.writeFile(filePath, content, (err) => {
        if(err){
            alert("An error ocurred creating the file "+ err.message)
        }
                    
        alert("The file has been succesfully saved");
    });
  } catch (e) {
    console.log('Save failed: '+ e)
  }
});