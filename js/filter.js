// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var booksRef = db.collection("books");

$(document).ready(function () {
    const dropDown = $('#dropDown').val();
    $("#dropDown a").click(function (e) {
        e.preventDefault(); // cancel the link behaviour
        const selText = $(this).text();
        $("#searchFilter").text(selText);

        console.log(selText)
        $("#searchArchive").change(function () {
            console.log('You entered: ', $(this).val());
            //Get the Employee Data
            if (selText == 'Uploader') {
                var searchValue = $(this).val()
                booksRef.where("uploader", "==", searchValue)
                    .onSnapshot(function (querySnapshot) {
                        LoadTableData(querySnapshot)
                    });
            } else if (selText == 'University') {
                var searchValue = $(this).val()
                booksRef.where("university", "==", searchValue)
                    .onSnapshot(function (querySnapshot) {
                        LoadTableData(querySnapshot)
                    });
            } else if (selText == 'Book Name') {
                var searchValue = $(this).val()
                booksRef.where("bookName", "==", searchValue)
                    .onSnapshot(function (querySnapshot) {
                        LoadTableData(querySnapshot)
                    });
            } else if (selText == 'Book Author') {
                var searchValue = $(this).val()
                booksRef.where("bookAuthor", "==", searchValue)
                    .onSnapshot(function (querySnapshot) {
                        LoadTableData(querySnapshot)
                    });
            } else if (selText == 'Faculty') {
                var searchValue = $(this).val()
                booksRef.where("faculty", "==", searchValue)
                    .onSnapshot(function (querySnapshot) {
                        LoadTableData(querySnapshot)
                    });
            } else if (selText == 'Department') {
                var searchValue = $(this).val()
                booksRef.where("department", "==", searchValue)
                    .onSnapshot(function (querySnapshot) {
                        LoadTableData(querySnapshot)
                    });
            }
        });
    });




    function LoadTableData(querySnapshot) {
        var tableRow = '';
        querySnapshot.forEach(function (doc) {
            var document = doc.data();
            tableRow += '<tr>';
            tableRow += '<td class="uploader">' + document.uploader + '</td>';
            tableRow += '<td class="university">' + document.university + '</td>';
            tableRow += '<td class="bookName">' + document.bookName + '</td>';
            tableRow += '<td class="bookAuthor">' + document.bookAuthor + '</td>';
            tableRow += '<td class="faculty">' + document.faculty + '</td>';
            tableRow += '<td class="department">' + document.department + '</td>';
            tableRow += '<td class="level">' + document.level + '</td>';
            tableRow += '<td class="semester">' + document.semester + '</td>';
            tableRow += '<td class="book">' + `<a href=${document.book}; download=${document.bookName}><i class="fa fa-arrow-down"  style="color:green"></i> </a>` + '</td>'
            tableRow += '</tr>';
        });
        $('tbody.tbodyData').html(tableRow);
    }
});