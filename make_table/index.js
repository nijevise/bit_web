

 document.getElementById('submit').onclick = function(){
    var rows = document.getElementById('rows').value;
    var columns = document.getElementById('columns').value;
            if(rows == "" || rows == null){
                    rows = 10;
            }
            if(columns == "" || columns == null){
                columns = 10;
            }

        var output = '<table>';

            function createTable(rows, columns){
                for(var i = 1; i <= rows; i++){
                    output = output + '<tr>';
                    for(var j = 1; j <= columns; j++){
                        output = output + '<td>' + '<input type = "text" placeholder = "insert your data" class="input">' + '</td>';
                    }
                            output = output + '</tr>';
                }
                        output = output + '</table>';
                        document.getElementById('container').innerHTML = output;
            }
            

        createTable(rows, columns);
 }