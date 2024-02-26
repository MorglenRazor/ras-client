export const ConverDate=(date:Date):[number,number,number,number,number,number]=>{

    var day = date.getDate();
    var month = date.getMonth() +1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // function ConverDate(date:Date):[number,number,number,number,number,number]{
    //     var day = date.getDay();
    //     var month = date.getMonth();
    //     var year = date.getFullYear();
    //     var hour = date.getHours();
    //     var minute = date.getMinutes();
    //     var second = date.getSeconds();

    //     var time = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
        
    // }
    return[year, month, day, hour, minute,second]
}