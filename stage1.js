process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
process.stdin.on('data', function (chunk) {
    var line = chunk;
    
    var line_array = [];
    for (var ci=2; ci<chunk.length;ci++) 
    {
        line_array.push( parseInt( chunk[ci] ) );
    }
    
    var nla_tmp_array = [];var new_line_array = [];
    for (var nlai=0;nlai<line_array.length;nlai++)
    {
        if ( isNaN( line_array[nlai] ) )
        { //Add and Reset
            var nla_tmp_num = nla_tmp_array.join("");
            new_line_array.push( nla_tmp_num );
            nla_tmp_array = [];
        }
        else
        {
            nla_tmp_array.push( line_array[nlai].toString() );
        }
    }
    
    var foo = [];var return_value=0;
    for (var final_calc=0; final_calc<new_line_array.length; final_calc++)
    {
        foo.push( parseInt( new_line_array[final_calc] ) );
    }
    var total = foo.reduce(function(a, b) { return a + b; } );
    console.log( total );
});