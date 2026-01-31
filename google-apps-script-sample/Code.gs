/**
 * Google Apps Script for receiving booking form data and appending to a sheet.
 *
 * Setup:
 * 1. Create or open a Google Sheet.
 * 2. Extensions > Apps Script, paste this code.
 * 3. Create a sheet (tab) named "Bookings" with headers in row 1:
 *    Full Name | Email | Phone | Service Type | Preferred Date | Preferred Time | Additional Notes
 * 4. Deploy: Deploy > New deployment > Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web app URL and set REACT_APP_GOOGLE_SCRIPT_URL in your .env
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bookings');
    if (!sheet) {
      return createResponse(400, { error: 'Sheet "Bookings" not found' });
    }

    var body = e.postData && e.postData.contents
      ? parseFormUrlEncoded(e.postData.contents)
      : (e.parameter || {});

    var row = [
      body.fullName || '',
      body.email || '',
      body.phone || '',
      body.serviceType || '',
      body.preferredDate || '',
      body.preferredTime || '',
      body.additionalNotes || ''
    ];

    sheet.appendRow(row);

    return createResponse(200, { result: 'success' });
  } catch (err) {
    return createResponse(500, { error: err.toString() });
  }
}

function parseFormUrlEncoded(contents) {
  var params = {};
  var pairs = contents.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    if (pair.length === 2) {
      params[decodeURIComponent(pair[0].replace(/\+/g, ' '))] =
        decodeURIComponent((pair[1] || '').replace(/\+/g, ' '));
    }
  }
  return params;
}

function createResponse(code, data) {
  var output = ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}
