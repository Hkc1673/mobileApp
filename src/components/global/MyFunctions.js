
class MowFunctions {

    mySearch(fullData,searchKey,searchValue){
        let searchedData = [];
        fullData.find((el) => {
            if (el[searchKey].toLocaleLowerCase().search(searchValue.toLocaleLowerCase()) !== -1) {
                searchedData.push(el);
            }
        });
        return searchedData;
    }

    myInArray(dataArr, searchKey, searchValue){
        let flag = false;
        dataArr.find((obj) => {
            if (obj[searchKey].valueOf() == searchValue) {
                flag = true;
            }
        });

        return flag;
    }

    myEmailValidationControl(inputText) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(inputText) !== false;
    }

    myPhoneNumberControl(number) {
        return number.match(/\d/g).length===10;
    }

}

export const _MF = new MowFunctions();