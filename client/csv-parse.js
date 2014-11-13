Template.form.events({
  "change input": function(event, template) {
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function(fileLoadEvent) {
      csv = Papa.parse(reader.result, {header: true});
      _.each(csv.data, function(person) {
        birthdate = moment(person.DOB).toDate()
        name = person.FirstName + " " + person.LastName
        Person.insert({name: name, birthDate: birthdate});
      })
    };
    reader.readAsBinaryString(file);
  },
  "progress": function(event, template) {
    debugger
  }
});
