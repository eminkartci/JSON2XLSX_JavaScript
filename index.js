let json_dosyasi = [{
    "meterIdentityId": 80024439,
    "meterDate": "2021-11-15T06:04:15.131Z",
    "meterFactorValue": 55,
    "currentRateFactorValue": 40,
    "voltageRateFactorValue": 47,
    "loadProfileDate": "2021-03-04T09:37:54.588Z",
    "positiveT0Value": 121,
    "positiveRiValue": 122,
    "positiveRcValue": 123,
    "negativeT0Value": 124,
    "negativeRiValue": 125,
    "negativeRcValue": 126,
    "currentL1Value": 127,
    "currentL2Value": 128,
    "currentL3Value": 129,
    "voltageL1Value": 130,
    "voltageL2Value": 131,
    "voltageL3Value": 132
}, {
    "meterIdentityId": 80024439,
    "meterDate": "2021-11-15T06:04:15.131Z",
    "meterFactorValue": 55,
    "currentRateFactorValue": 40,
    "voltageRateFactorValue": 47,
    "loadProfileDate": "2021-03-04T09:37:54.588Z",
    "positiveT0Value": 121,
    "positiveRiValue": 122,
    "positiveRcValue": 123,
    "negativeT0Value": 124,
    "negativeRiValue": 125,
    "negativeRcValue": 126,
    "currentL1Value": 127,
    "currentL2Value": 128,
    "currentL3Value": 129,
    "voltageL1Value": 130,
    "voltageL2Value": 131,
    "voltageL3Value": 132
}, {
    "meterIdentityId": 80024439,
    "meterDate": "2021-11-15T06:04:15.131Z",
    "meterFactorValue": 55,
    "currentRateFactorValue": 40,
    "voltageRateFactorValue": 47,
    "loadProfileDate": "2021-03-04T09:37:54.588Z",
    "positiveT0Value": 121,
    "positiveRiValue": 122,
    "positiveRcValue": 123,
    "negativeT0Value": 124,
    "negativeRiValue": 125,
    "negativeRcValue": 126,
    "currentL1Value": 127,
    "currentL2Value": 128,
    "currentL3Value": 129,
    "voltageL1Value": 130,
    "voltageL2Value": 131,
    "voltageL3Value": 132
}, {
    "meterIdentityId": 80024439,
    "meterDate": "2021-11-15T06:04:15.131Z",
    "meterFactorValue": 55,
    "currentRateFactorValue": 40,
    "voltageRateFactorValue": 47,
    "loadProfileDate": "2021-03-04T09:37:54.588Z",
    "positiveT0Value": 121,
    "positiveRiValue": 122,
    "positiveRcValue": 123,
    "negativeT0Value": 124,
    "negativeRiValue": 125,
    "negativeRcValue": 126,
    "currentL1Value": 127,
    "currentL2Value": 128,
    "currentL3Value": 129,
    "voltageL1Value": 130,
    "voltageL2Value": 131,
    "voltageL3Value": 132
}, {
    "meterIdentityId": 80024439,
    "meterDate": "2021-11-15T06:04:15.131Z",
    "meterFactorValue": 55,
    "currentRateFactorValue": 40,
    "voltageRateFactorValue": 47,
    "loadProfileDate": "2021-03-04T09:37:54.588Z",
    "positiveT0Value": 121,
    "positiveRiValue": 122,
    "positiveRcValue": 123,
    "negativeT0Value": 124,
    "negativeRiValue": 125,
    "negativeRcValue": 126,
    "currentL1Value": 127,
    "currentL2Value": 128,
    "currentL3Value": 129,
    "voltageL1Value": 130,
    "voltageL2Value": 131,
    "voltageL3Value": 132
}]

const fs = require("fs");

function rows_of_sheet(json_dosyasi) {
    const rows = [];
    for (let i = 0; i < json_dosyasi.length; i++) {
        rows[i] = []
        if (i == 0) {
            let titles = []
            for (let x = 0; x < Object.keys(json_dosyasi[i]).length; x++) {
                titles.push(Object.keys(json_dosyasi[i])[x])
            }
            rows[i].push(titles);
        } else {
            rows[i].push([json_dosyasi[i].meterIdentityId, json_dosyasi[i].meterDate, json_dosyasi[i].meterFactorValue, json_dosyasi[i].currentRateFactorValue], json_dosyasi[i].voltageRateFactorValue, json_dosyasi[i].loadProfileDate, json_dosyasi[i].positiveT0Value, json_dosyasi[i].positiveRiValue, json_dosyasi[i].positiveRcValue, json_dosyasi[i].negativeT0Value, json_dosyasi[i].negativeRiValue, json_dosyasi[i].negativeRcValue, json_dosyasi[i].currentL1Value, json_dosyasi[i].currentL2Value, json_dosyasi[i].currentL3Value, json_dosyasi[i].voltageL1Value, json_dosyasi[i].voltageL2Value, json_dosyasi[i].voltageL3Value, );
        }
    }
    return rows;
}

function json_to_csv(rows) {


    let csvContent = "";

    rows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });

    var encodedUri = encodeURI(csvContent);
    console.log(csvContent)
    return csvContent;
}

fs.writeFileSync('todos.csv', json_to_csv(rows_of_sheet(json_dosyasi)));