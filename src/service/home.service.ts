import axios from 'axios';
import * as cheerio from 'cheerio';

import { Provide } from '@midwayjs/decorator';



@Provide()
export class HomeService {
    getUrl(): string {
        let reqUrl: string = "https://www.baidu.com/"
        return reqUrl;
    }

    async getAttr() {
        const url = this.getUrl();
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const imgSrc = $('#lg').children().attr('src');
        return imgSrc;
    }


}
