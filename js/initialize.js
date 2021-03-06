// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var booksRef = db.collection("books");



//  booksRef.doc("1").set({
//      uploader: "Harith",
//      university: "university of lagos",
//      bookName: "stuff",
//      bookAuthor: "Ben 10",
//      faculty: 'Engineering',
//      department: "systems",
//      level: 200,
//      semester: "first",
//      book: "jojo.pdf"
//  });

//  booksRef.doc("2").set({
//      uploader: "Heritage",
//      university: "Unversity of Ibadan",
//      bookName: "I hate school",
//      bookAuthor: "hard guy",
//      faculty: 'Engineering',
//      department: "chemical",
//      level: 200,
//      semester: "first",
//      book: "jojo.pdf"
//  });

//  booksRef.doc("3").set({
//      uploader: "Deji",
//      university: "university of abuja",
//      bookName: "Their Daddy",
//      bookAuthor: "Naruto uzumaki",
//      faculty: 'Engineering',
//      department: "met&mat",
//      level: 200,
//      semester: "first",
//      book: "jojo.pdf"
//  });






booksRef.get().then(function (querySnapshot) {
  // console.log("SHOW-FILE called!");

  var storageReference = firebase.storage().ref();
  querySnapshot.forEach(function (doc) {
    var document = doc.data();
  // console.log(document)
  storageReference
    .child("books/" + `${document.book}`)
    .getDownloadURL()
    .then(url => {


        var tableRow = '';
      tableRow += '<tr style="height: 1rem;">';
      tableRow += '<td class="book">' + `<a href=${document.book}; download=${document.bookName}><i class="fa fa-arrow-down"  style="color:green"></i> </a>` + '</td>'
      tableRow += '<td class="bookName">' + encodeURIComponent(document.bookName) + '</td>';
      tableRow += '<td class="bookAuthor">' + encodeURIComponent(document.bookAuthor) + '</td>';
      tableRow += '<td class="university">' + encodeURIComponent(document.university) + '</td>';
      tableRow += '<td class="faculty">' + encodeURIComponent(document.faculty) + '</td>';
      tableRow += '<td class="department">' + encodeURIComponent(document.department) + '</td>';
      tableRow += '<td class="level">' + encodeURIComponent(document.level) + '</td>';
      tableRow += '<td class="semester">' + encodeURIComponent(document.semester) + '</td>';
      tableRow += '<td class="uploader">' + encodeURIComponent(document.uploader) + '</td>';
      tableRow += '</tr>';
        $('tbody.tbodyData').append(tableRow.split("%20").join(" ").split("%26").join("&").split("%2C").join(","));

    }).catch(error => {
      // alert("Something went wrong!");
      // console.log("Error === ", error);
    });
    })



});
