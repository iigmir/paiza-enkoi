process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
process.stdin.on('data', function (chunk) {
    var line = chunk;
    
    var line_array = [];
    for (var ci=2; ci<chunk.length;ci++) 
    { line_array.push( parseInt( chunk[ci] ) ); }
    // nla = New Line Array
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
        { nla_tmp_array.push( line_array[nlai].toString() ); }
    }
    // T_i (必要な在庫数) ≦ S_i (現在の在庫数) 
    var necessery=[], instuck=[], price=[];
    for (var necesseryi=0,instucki=1,pricei=2; pricei<new_line_array.length ; necesseryi+2,instucki+2,pricei+2 )
    {
        //var available = ( parseInt( new_line_array[necesseryi] ) - parseInt( new_line_array[instucki] ) ) * parseInt( new_line_array[pricei] );
        //necessery.push(available);
    }
    console.log(necessery);
});
