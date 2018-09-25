
function doCallback(data: string, callback: (datas: string[], length: number) => void): void {

    let datas: string[] = [data, "2"];
    callback(datas, datas.length);
}

function callback(datas: string[], length: number) {

}

doCallback("sang", callback);


// simple

// interface ICallBack {
//     (datas: string[], length: number): void;
// }
//
// function doCallback(data: string, callback: ICallBack): void {
//
//     let datas: string[] = [data, "2"];
//     callback(datas, datas.length);
// }
//
// function callback(datas: string[], length: number) {
//
// }
//
// doCallback("sang", callback);
