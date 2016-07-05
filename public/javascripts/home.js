function handleFile(e) {
  var files = e.target.files;
  var i,f;
  for (i = 0, f = files[i]; i != files.length; ++i) {
    var reader = new FileReader();
    var name = f.name;
    reader.onload = function(e) {
      var data = e.target.result;

      var workbook = XLSX.read(data, {type: 'binary'});

      /* DO SOMETHING WITH workbook HERE */
      var sheet_name_list = workbook.SheetNames;
      sheet_name_list.forEach(function(y) { /* iterate through sheets */
      var worksheet = workbook.Sheets[y];
      for (z in worksheet) {
      /* all keys that do not begin with "!" correspond to cell addresses */
      if(z[0] === '!') continue;
      console.log(y + "!" + z + "=" + JSON.stringify(worksheet[z].v));
  }
});

    };
    reader.readAsBinaryString(f);
  }
}
input_dom_element.addEventListener('change', handleFile, false);