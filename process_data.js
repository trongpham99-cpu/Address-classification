const data = require('./dvhcvn.json');
const fs = require('fs');
// {
//     data: [
//         {
//             level1_id: '01',
//             name: 'Thành phố Hà Nội',
//             type: 'Thành phố Trung ương',
//             level2s: [Array]
//         },
//     ]
// }
const provinceTXT = 'list_province.txt';
const districtTXT = 'list_district.txt';
const wardTXT = 'list_ward.txt';

data.data.forEach((level1) => {
    //get name and write to file
    let name = level1.name;
    
    //write to file txt
    //in string name will have Tỉnh, Thành phố, Thành phố trực thuộc trung ương => remove it
    name = name.replace('Thành phố ', '');
    name = name.replace('Tỉnh ', '');
    
    
    fs.appendFileSync(provinceTXT, name + '\n');

    //get level2s
    level1.level2s.forEach((level2) => {
        //get name and write to file

        let name = level2.name;
        //remove Quận, Thị xã, Huyện, Thành phố

        name = name.replace('Quận ', '');
        name = name.replace('Thị xã ', '');
        name = name.replace('Huyện ', '');
        name = name.replace('Thành phố ', '');
        
        //write to file txt
        fs.appendFileSync(districtTXT, name + '\n');

        //get level3s
        level2.level3s.forEach((level3) => {
            //get name and write to file
            let name = level3.name;

            //remove Phường, Xã, Thị trấn
            name = name.replace('Phường ', '');
            name = name.replace('Xã ', '');
            name = name.replace('Thị trấn ', '');
            
            //write to file txt
            fs.appendFileSync(wardTXT, name + '\n');
        });
    });
});