var ss = SpreadsheetApp.getActiveSpreadsheet();
var configSheet = ss.getSheetByName('config');

function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('Print')
        .addItem('Print ranges from config', 'saveFilesInRanges')
        .addToUi();
}

function getRangesFromConfig(){
    var rangesData = configSheet.getDataRange().getValues();
    var ranges = [];
    for (var i = 1; i < rangesData.length; i++){
        var rowData = [];
        for(var j = 0; j < rangesData[i].length; j++){
            var cellValue = rangesData[i][j];
            rowData.push(cellValue);
        }
        ranges.push(rowData);
    }
    return ranges;
}

function exportRangeToPDf(range) {
    var blob,exportUrl,options,pdfFile,response,sheetTabNameToGet,sheetTabId,ss,ssID,url_base;
    sheetTabNameToGet = "Sheet1"; // Replace the name with the sheet tab name for your situation
    ss = SpreadsheetApp.getActiveSpreadsheet(); // This assumes that the Apps Script project is bound to a G-Sheet
    ssID = ss.getId();
    sh = ss.getSheetByName(sheetTabNameToGet);
    sheetTabId = sh.getSheetId();
    url_base = ss.getUrl().replace(/edit$/,'');
    var date = Utilities.formatDate(new Date(), "GMT+3", "dd.MM.yyyy, HH:mm") // Modify if needed, will be used for pdf filename later

    exportUrl = url_base + 'export?exportFormat=pdf&format=pdf' +
        '&gid=' + sheetTabId + '&id=' + ssID +
        '&range=' + range[0] +
        '&size=A4' +     // Paper size
        '&portrait=true' +   // Orientation, false for landscape
        '&fitw=true' +       // Fit to width, false for actual size
        '&sheetnames=true&printtitle=false&pagenumbers=true' + //hide optional headers and footers
        '&gridlines=false' + // Hide gridlines
        '&fzr=false';       // Do not repeat row headers (frozen rows) on each page

    options = {
        headers: {
            'Authorization': 'Bearer ' +  ScriptApp.getOAuthToken(),
        }
    }

    options.muteHttpExceptions = true; // Make sure this is always set
    response = UrlFetchApp.fetch(exportUrl, options);

    if (response.getResponseCode() !== 200) {
        console.log("Error exporting Sheet to PDF!  Response Code: " + response.getResponseCode());
        return;
    }

    blob = response.getBlob();

    // SET PDF NAME
    blob.setName(range[1] + " - " + date);

    // CREATE PDF FILE
    pdfFile = DriveApp.createFile(blob);

    // MOVE PDF TO A SPECIFIC FOLDER
    pdfFile.moveTo(DriveApp.getFolderById("FOLDER ID")); // YOU HAVE TO SET THIS FOLDER ID (Or comment this line and the file(s) will be saved in your root folder)
}

function saveFilesInRanges() {
    var ranges = getRangesFromConfig();
    for (var i = 0; i < ranges.length; i++) {
        exportRangeToPDf(ranges[i]);
    }
}