

class CtryInformationReported{
    apiUrl:string; 
    constructor( apiUrl:string ){
        this.apiUrl = apiUrl;
    }
    // 对象转query
    static jsonToQuery(data: { [x: string]: any; }){
        let query = [],
            queryStr = '';

        for (let key in data) {
            query.push(`${key}=${data[key]}`)
        }
        if (query.length) queryStr = '?' + query.join('&')

        return queryStr;
    }
    // 查询
    query(params: { callback: string } = { callback:'' } ){

        params.callback = params.callback || 'ctryInformationReportedQueryw';

        let baseurl = this.apiUrl + 'query' + CtryInformationReported.jsonToQuery(params);
        
        let oldScript = document.getElementById(params.callback);
        oldScript && document.body.removeChild(oldScript)
        
        let oScript = document.createElement('script');
        oScript.id = params.callback;
        
        oScript.src = baseurl;
        document.body.appendChild(oScript);
        
        return new Promise((resolve)=>{
            // @ts-ignore
            globalThis[params.callback] = resolve
        })
    }
    // 添加
    add(params: { userInfo:any, type: string } = { userInfo:'',type:'' }){
        if (typeof params.userInfo === 'object') params.userInfo = JSON.stringify(params.userInfo);

        let baseurl = this.apiUrl + 'add' + CtryInformationReported.jsonToQuery(params);
        let oImg = new Image();
        oImg.src = baseurl;
    }
    // 删除单个
    deleteOne(params: { username: string, type: string } = { username: '', type: '' }){
        let baseurl = this.apiUrl + 'deleteOne' + CtryInformationReported.jsonToQuery(params);
        let oImg = new Image();
        oImg.src = baseurl;
    }
    // 删除全部
    deleteAll(){
        let baseurl = this.apiUrl + 'deleteAll';
        let oImg = new Image();
        oImg.src = baseurl;
    }
}

export default CtryInformationReported

