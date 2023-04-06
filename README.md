# google-sheets-to-pdf
<h3>Export multiple Google Sheets Ranges to pdf and save it in Google Drive.</h3>


<h3>HOW TO USE THE TOOL:</h3>

<h4>1. Go to https://drive.google.com, create a New folder and inside it create a new Google Sheets file.</h4>


<h4>2. In the newly created Google Sheets go to Extensions -> Apps Script:</h4>
	<img width="742" alt="image" src="https://user-images.githubusercontent.com/96824916/230373037-cb8659eb-b734-467b-896c-8e791b470ab3.png">
  
<h4>3. Copy and paste the code from Code.js and hit "Save".</h4>

<h4>4. In your Google Drive open the folder you just created and copy the folder ID from the link. Your Folder link should look like this:</h4>
	https://drive.google.com/drive/u/0/folders/HERE_IS_THE_ID_YOU_NEED_TO_COPY
    
   The ID should look similar to: "1fnLBI0Ox87hMC420oahf2WAaVczP7yNW".
   
<h4>5. Open AppScript and replace on line 68 "FOLDER ID" with your ID. Then your code should look like this:</h4>
	<img width="1116" alt="image" src="https://user-images.githubusercontent.com/96824916/230375130-0c378432-738e-42da-a9c5-97e99bd4f341.png">

<h4>6. Create a new sheet named "config" in your Google Sheets file. Now your file should have two sheets: 'Sheet1' and 'config'.</h4>

<h4>7. Modify 'config' as in image:</h4>
	<img width="401" alt="image" src="https://user-images.githubusercontent.com/96824916/230383466-f36202ee-b170-4cac-8085-f3879e8000e4.png">

<h4>8. Under 'Range to export' you need to write the range you want to export as pdf, from Sheet1. Then, under the second column, you need to write the name of the PDF that will be saved. </h4>
	e.g.: in Sheet1 you have a table in range A2:C4. If so, you will write 'a2:c4' under 'Range to export' (in A2) and set a title next to this cell (in B2). Now your config sheet should look like this:

   <img width="401" alt="image" src="https://user-images.githubusercontent.com/96824916/230384342-e5f3d7a5-e108-4f3c-a169-3a29be9300e8.png">

   Considering that you can have multiple tables, let's add 2 more ranges and titles for each of them:
   <img width="401" alt="image" src="https://user-images.githubusercontent.com/96824916/230385323-dad242a0-659c-4a62-9191-a3e303ccbdd7.png">

   And let's take a look at 'Sheet1':
   <img width="985" alt="image" src="https://user-images.githubusercontent.com/96824916/230385488-4694eefa-1603-49b1-85d7-31a2a749f4e5.png">

   Summary: build your data in 'Sheet1', then add ranges of each dataset you want to export in 'config', followed by a filename you want to use.

<h4>9. Press the 'Print' button from the top menu of your Google Sheets, then 'Print ranges from config' and give the necessary permissions:</h4>
	<img width="985" alt="image" src="https://user-images.githubusercontent.com/96824916/230387329-b786f97f-3ed6-4ce2-922b-e8f88fbe5f2a.png">
	<img width="716" alt="image" src="https://user-images.githubusercontent.com/96824916/230387843-4bcc5ada-9c04-462e-a9ee-017eb725a9cc.png">
	<img width="716" alt="image" src="https://user-images.githubusercontent.com/96824916/230388058-4df33f54-ff21-4552-830a-f4b645238961.png">

   Now press again on 'Print' -> 'Export ranges from config'.

<h4>10. Go to your drive folder you created earlier. Here you should see your generated pdfs for each data range:</h4>
	<img width="1160" alt="image" src="https://user-images.githubusercontent.com/96824916/230388705-7a280c4d-ce88-4d17-a090-6ff11cd1af48.png">

Generated pdfs:
 1. <img width="1160" alt="image" src="https://user-images.githubusercontent.com/96824916/230389084-79cacd5d-ecda-4657-a09a-d3267c8e9d99.png">
 2. <img width="1227" alt="image" src="https://user-images.githubusercontent.com/96824916/230389206-7c435e81-29c9-4755-9054-0a2217f52780.png">
 3. <img width="1227" alt="image" src="https://user-images.githubusercontent.com/96824916/230389266-d8db5f8a-c731-4c92-8445-36373ac4eb88.png">





