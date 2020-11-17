export class GetCatalogParams {
    template = ''

    getProductsParams(params) {
        this.__arrParams(params)
        return this.template.slice(1)
    }

    getSizes(params) {
        let sizes = {category: params['category'], subcategory: params['subcategory']}
        this.__arrParams(sizes)
        return this.template.slice(1)
    }

    orderBy(params) {
        let str = `ordering=${params}`;
        this.__pushTemplate(str)
        return this.template
    }

    getSearch(params) {
        let str = `search=${params}`;
        this.__pushTemplate(str)
        return this.template
    }

    __arrParams(params) {
        for (let key in params) {
            this.__addTemplate(key, params[key])
        }

    }

    __addTemplate(key, params) {
        // this.paramsList.push(key)
        if (key === 'price') {
            let strParams = `&${key}_min=${params.min}&${key}_max=${params.max}`;
            this.__pushTemplate(strParams)
        } else if (params !== undefined && params.length !== 0) {
            let strParams = `&${key}=${params}`;
            this.__pushTemplate(strParams)
        }

    }

    __pushTemplate(str) {
        this.template += str;
    }

}
